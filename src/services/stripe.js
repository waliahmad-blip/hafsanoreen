/**
 * HAFFU STUDIO — Stripe Payment Service (Enterprise Multi-Stream Engine)
 */
const { stripe, webhookSecret } = require('../config/stripe');
const Payment = require('../models/Payment');
const Booking = require('../models/Booking');
const EmailService = require('./email');
const { PACKAGES, DIGITAL_PRODUCTS, ADDONS } = require('../utils/constants');
/**
 * Slug aliases for the Next.js shop (web/lib/products.js) -> Stripe catalog.
 * Keeps legacy DIGITAL_PRODUCTS keys working while the new storefront uses slugs.
 */
const SLUG_PRODUCTS = {
  'film-essence-presets': DIGITAL_PRODUCTS.preset_pack,
  'master-cinematic-suite': DIGITAL_PRODUCTS.preset_pack_pro,
  'cinematic-luts': { name: 'Cinematic Reel LUT Pack', price: 39, description: '8 .cube LUTs graded from the atelier film looks - Premiere, Final Cut, DaVinci & CapCut.' },
  'grain-light-overlays': { name: 'Grain & Light-Leak Overlays', price: 29, description: '24 archival 4K overlays: 35mm grain, halation blooms, anamorphic flares, dusty light leaks.' },
  'prompt-vault': { name: 'The Prompt Vault', price: 35, description: '120+ master AI prompts for posing, editing and image generation.' },
  'atelier-business-kit': { name: 'The Atelier Business Kit', price: 79, description: 'Contract templates, pricing frameworks and the client email script library.' },
  'ai-portrait-sitting': { name: 'AI Portrait Sitting', price: 65, description: '20 cinematic AI portraits rendered in the atelier signature light.' },
  'ai-restoration': { name: 'AI Photo Restoration', price: 25, description: 'Restored and colorized heirloom photographs - per photo.' },
  'once-upon-golden-hour': { name: 'Once Upon a Golden Hour', price: 95, description: 'A personalized children storybook illustrated from your session photographs.' },
  'haffu-in-a-box': { name: 'HAFFU-in-a-Box', price: 29, description: 'White-label AI studio manager subscription for photographers.' },
  'extra-image-pack': { name: 'Additional Image Pack', price: 250, description: 'The full unculled gallery download - every hand-graded frame.' },
  'museum-print': DIGITAL_PRODUCTS.wall_art_16x20,
  'gift-voucher-100': DIGITAL_PRODUCTS.gift_card_100,
  'atelier-circle': { name: 'The Atelier Circle', price: 180, description: 'Annual membership: priority windows, exclusive drops, member presets.' },
  'what-to-wear-style-report': { name: 'What-to-Wear Style Report', price: 30, description: 'A personalized wardrobe guide for your session - palette, fabrics and outfit pairs.' },
  'wall-art-visualizer': { name: 'Wall Art Visualizer', price: 0, description: 'Free interactive tool - see museum prints on your own wall at true scale.' }
};

const DIGITAL_TYPE_SLUGS = ['film-essence-presets', 'master-cinematic-suite', 'cinematic-luts', 'grain-light-overlays', 'prompt-vault', 'atelier-business-kit'];

function resolveProductType(productKey) {
  if (productKey.startsWith('gift_card') || productKey.startsWith('gift-voucher')) return 'gift_card';
  if (productKey.startsWith('preset') || DIGITAL_TYPE_SLUGS.includes(productKey)) return 'preset';
  return 'print';
}

class StripeService {
  /**
   * Standard session retainer checkout for existing booking
   */
  static async createCheckoutSession(booking, successUrl, cancelUrl) {
    const amount = booking.retainerAmount || Math.round((booking.price || 450) * 0.30);
    const origin = successUrl || 'https://hafsanoreen.com/booking/confirmed';
    const cancel = cancelUrl || 'https://hafsanoreen.com/booking';

    try {
      if (stripe && stripe.checkout) {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [{
            price_data: {
              currency: 'cad',
              product_data: {
                name: `Hafsa Noreen Photography — ${booking.sessionType || 'Session'} Reservation Retainer`,
                description: `Date reservation for ${booking.date || 'Scheduled Date'} in Halton/Toronto. Non-refundable retainer.`
              },
              unit_amount: Math.round(amount * 100)
            },
            quantity: 1
          }],
          mode: 'payment',
          customer_email: booking.clientEmail,
          success_url: `${origin}?session_id={CHECKOUT_SESSION_ID}&booking_id=${booking.id}`,
          cancel_url: cancel,
          metadata: {
            type: 'booking_retainer',
            bookingId: booking.id,
            sessionType: booking.sessionType || '',
            clientEmail: booking.clientEmail || '',
            clientName: booking.clientName || ''
          }
        });
        return { url: session.url, sessionId: session.id };
      }
    } catch (err) {
      console.warn('[Stripe Notice] Using mock fallback:', err.message);
    }

    const mockId = 'mock_cs_' + Date.now();
    return {
      url: `${origin}?session_id=${mockId}&booking_id=${booking.id}&mock=true`,
      sessionId: mockId,
      mock: true
    };
  }

  /**
   * Instant $500 CAD Retainer Checkout (Zero Friction Date Hold)
   */
  static async createInstantRetainerCheckout({ clientName, clientEmail, sessionType = 'Family & Maternity', date, location = 'Milton / Halton', amount = 500, successUrl, cancelUrl }) {
    const origin = successUrl || 'https://hafsanoreen.com/booking/confirmed';
    const cancel = cancelUrl || 'https://hafsanoreen.com/booking';

    try {
      if (stripe && stripe.checkout) {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [{
            price_data: {
              currency: 'cad',
              product_data: {
                name: `✦ Date Reservation Retainer — ${sessionType}`,
                description: `Immediate slot hold for ${date ? date : 'your upcoming date'} at ${location}. Balance due 48h prior to session.`
              },
              unit_amount: Math.round(amount * 100)
            },
            quantity: 1
          }],
          mode: 'payment',
          customer_email: clientEmail,
          success_url: `${origin}?session_id={CHECKOUT_SESSION_ID}&instant=true&date=${encodeURIComponent(date || '')}`,
          cancel_url: cancel,
          metadata: {
            type: 'instant_retainer',
            clientName,
            clientEmail,
            sessionType,
            date: date || '',
            location,
            amount: String(amount)
          }
        });
        return { url: session.url, sessionId: session.id };
      }
    } catch (err) {
      console.warn('[Stripe Notice] Instant checkout simulator:', err.message);
    }

    const mockId = 'mock_inst_' + Date.now();
    return {
      url: `${origin}?session_id=${mockId}&instant=true&date=${encodeURIComponent(date || '')}&mock=true`,
      sessionId: mockId,
      mock: true
    };
  }

  /**
   * Digital Product Storefront Checkout (Presets, Gift Cards, Wall Art)
   */
  static async createProductCheckout({ productKey, clientEmail, clientName, recipientName, message, amount, successUrl, cancelUrl }) {
    const product = DIGITAL_PRODUCTS[productKey] || SLUG_PRODUCTS[productKey] || {
      name: 'Hafsa Noreen Photography Studio Commission',
      price: amount || 50,
      description: 'Fine art digital or print heirloom piece.'
    };
    const finalAmount = amount || product.price;
    const origin = successUrl || 'https://hafsanoreen.com/shop/success';
    const cancel = cancelUrl || 'https://hafsanoreen.com/shop';

    try {
      if (stripe && stripe.checkout) {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [{
            price_data: {
              currency: 'cad',
              product_data: {
                name: `✦ ${product.name}`,
                description: product.description || 'Exclusive Hafsa Noreen Photography digital asset.'
              },
              unit_amount: Math.round(finalAmount * 100)
            },
            quantity: 1
          }],
          mode: 'payment',
          customer_email: clientEmail,
          success_url: `${origin}?session_id={CHECKOUT_SESSION_ID}&product=${productKey}`,
          cancel_url: cancel,
          metadata: {
            type: resolveProductType(productKey),
            productKey,
            clientName: clientName || '',
            clientEmail: clientEmail || '',
            recipientName: recipientName || '',
            message: message || '',
            amount: String(finalAmount)
          }
        });
        return { url: session.url, sessionId: session.id };
      }
    } catch (err) {
      console.warn('[Stripe Notice] Product checkout simulator:', err.message);
    }

    const mockId = 'mock_prod_' + Date.now();
    return {
      url: `${origin}?session_id=${mockId}&product=${productKey}&mock=true`,
      sessionId: mockId,
      mock: true
    };
  }

  /**
   * Dynamic Custom Package Builder Checkout
   */
  static async createCustomPackageCheckout({ packageKey, addonKeys = [], clientName, clientEmail, date, location, isRush = false, successUrl, cancelUrl }) {
    const pkg = PACKAGES[packageKey] || PACKAGES.family;
    let totalCents = pkg.price * 100;

    (addonKeys || []).forEach(k => {
      const addon = ADDONS[k];
      if (addon) totalCents += addon.price * 100;
    });

    if (isRush && DIGITAL_PRODUCTS.rush_delivery) {
      totalCents += DIGITAL_PRODUCTS.rush_delivery.price * 100;
    }

    const retainerAmount = Math.max(500, Math.round((totalCents / 100) * 0.30));
    const origin = successUrl || 'https://hafsanoreen.com/booking/confirmed';
    const cancel = cancelUrl || 'https://hafsanoreen.com/booking';

    try {
      if (stripe && stripe.checkout) {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [{
            price_data: {
              currency: 'cad',
              product_data: {
                name: `✦ Retainer Deposit: Custom ${pkg.name} Suite`,
                description: `30% date reservation deposit for ${date || 'scheduled date'}. Total package investment: $${Math.round(totalCents / 100)} CAD + HST.`
              },
              unit_amount: retainerAmount * 100
            },
            quantity: 1
          }],
          mode: 'payment',
          customer_email: clientEmail,
          success_url: `${origin}?session_id={CHECKOUT_SESSION_ID}&package=${packageKey}`,
          cancel_url: cancel,
          metadata: {
            type: 'custom_package_retainer',
            packageKey,
            clientName: clientName || '',
            clientEmail: clientEmail || '',
            date: date || '',
            location: location || '',
            totalInvestment: String(Math.round(totalCents / 100)),
            retainerAmount: String(retainerAmount)
          }
        });
        return { url: session.url, sessionId: session.id, totalInvestment: Math.round(totalCents / 100), retainerAmount };
      }
    } catch (err) {
      console.warn('[Stripe Notice] Custom package checkout simulator:', err.message);
    }

    const mockId = 'mock_pkg_' + Date.now();
    return {
      url: `${origin}?session_id=${mockId}&package=${packageKey}&mock=true`,
      sessionId: mockId,
      totalInvestment: Math.round(totalCents / 100),
      retainerAmount,
      mock: true
    };
  }

  static async handleWebhook(rawBody, signature) {
    if (!stripe || !stripe.webhooks || !webhookSecret) {
      console.log('[Stripe Webhook] Stripe not initialized; mock handling.');
      return { received: true, mock: true };
    }

    const event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const meta = session.metadata || {};
      const amountTotal = (session.amount_total || 0) / 100;

      if (meta.type === 'booking_retainer' && meta.bookingId) {
        await Booking.confirmPayment(meta.bookingId);
        await Payment.record(meta.bookingId, session.payment_intent, amountTotal, 'completed');
        await EmailService.instantDepositReceipt({
          clientEmail: meta.clientEmail || session.customer_email,
          clientName: meta.clientName || 'Valued Client',
          sessionType: meta.sessionType || 'Session',
          amount: amountTotal,
          paymentIntent: session.payment_intent
        });
      } else if (meta.type === 'instant_retainer') {
        await EmailService.instantDepositReceipt({
          clientEmail: meta.clientEmail || session.customer_email,
          clientName: meta.clientName || 'Valued Client',
          sessionType: meta.sessionType || 'Photography Commission',
          date: meta.date,
          amount: amountTotal,
          paymentIntent: session.payment_intent
        });
      } else if (meta.type === 'gift_card') {
        const voucherCode = 'HN-' + Math.random().toString(36).substring(2, 8).toUpperCase();
        await EmailService.sendGiftCardVoucher({
          recipientEmail: meta.clientEmail || session.customer_email,
          recipientName: meta.recipientName || meta.clientName || 'Valued Guest',
          senderName: meta.clientName,
          amount: amountTotal,
          voucherCode,
          message: meta.message
        });
      } else if (meta.type === 'preset') {
        await EmailService.sendPresetDelivery({
          clientEmail: meta.clientEmail || session.customer_email,
          clientName: meta.clientName || 'Fellow Artist',
          packName: (meta.productKey === 'preset_pack_pro' || meta.productKey === 'master-cinematic-suite') ? 'The Complete Cinematic Preset Suite' : 'The Film Essence Collection',
          token: 'token_' + Date.now().toString(36)
        });
      }
    }
    return event;
  }
}

module.exports = StripeService;