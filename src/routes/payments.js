/**
 * HAFFU STUDIO — Payment Routes (Public Monetization API)
 */
const express = require('express');
const router = express.Router();
const StripeService = require('../services/stripe');
const Booking = require('../models/Booking');

/**
 * Public Instant $500 Retainer Checkout
 */
router.post('/instant-checkout', async (req, res) => {
  try {
    const { clientName, clientEmail, sessionType, date, location, amount, successUrl, cancelUrl } = req.body;
    if (!clientEmail) {
      return res.status(400).json({ error: 'Client email is required for date reservation.' });
    }
    const session = await StripeService.createInstantRetainerCheckout({
      clientName: clientName || 'Valued Client',
      clientEmail,
      sessionType: sessionType || 'The Family & Maternity',
      date: date || '',
      location: location || 'Milton / Halton',
      amount: amount ? Number(amount) : 500,
      successUrl,
      cancelUrl
    });
    res.json(session);
  } catch (err) {
    console.error('[Payment Error] Instant checkout failed:', err);
    res.status(500).json({ error: 'Instant checkout initialization failed.' });
  }
});

/**
 * Public Digital Product Checkout (Presets, Gift Vouchers, Wall Art)
 */
router.post('/product-checkout', async (req, res) => {
  try {
    const { productKey, clientEmail, clientName, recipientName, message, amount, successUrl, cancelUrl } = req.body;
    if (!productKey || !clientEmail) {
      return res.status(400).json({ error: 'Product key and client email are required.' });
    }
    const session = await StripeService.createProductCheckout({
      productKey,
      clientEmail,
      clientName,
      recipientName,
      message,
      amount: amount ? Number(amount) : undefined,
      successUrl,
      cancelUrl
    });
    res.json(session);
  } catch (err) {
    console.error('[Payment Error] Product checkout failed:', err);
    res.status(500).json({ error: 'Product checkout initialization failed.' });
  }
});

/**
 * Public Custom Package Builder Checkout
 */
router.post('/package-checkout', async (req, res) => {
  try {
    const { packageKey, addonKeys, clientName, clientEmail, date, location, isRush, successUrl, cancelUrl } = req.body;
    if (!packageKey || !clientEmail) {
      return res.status(400).json({ error: 'Package key and client email are required.' });
    }
    const session = await StripeService.createCustomPackageCheckout({
      packageKey,
      addonKeys: addonKeys || [],
      clientName: clientName || 'Valued Client',
      clientEmail,
      date,
      location,
      isRush: Boolean(isRush),
      successUrl,
      cancelUrl
    });
    res.json(session);
  } catch (err) {
    console.error('[Payment Error] Package checkout failed:', err);
    res.status(500).json({ error: 'Package checkout initialization failed.' });
  }
});

/**
 * Create Checkout Session for existing Booking (Public or Authenticated)
 */
router.post('/create-checkout', async (req, res) => {
  try {
    let booking;
    if (req.body.bookingId) {
      booking = await Booking.get(req.body.bookingId);
    } else if (req.body.clientEmail && req.body.sessionType) {
      // Direct booking payload
      booking = req.body;
    }
    if (!booking) return res.status(404).json({ error: 'Booking details not found.' });

    const session = await StripeService.createCheckoutSession(booking, req.body.successUrl, req.body.cancelUrl);
    res.json({ url: session.url, sessionId: session.sessionId });
  } catch (err) {
    console.error('[Payment Error] Create checkout failed:', err);
    res.status(500).json({ error: 'Checkout creation failed.' });
  }
});

/**
 * Stripe Webhook (Raw body captured via app.js)
 */
router.post('/webhook', async (req, res) => {
  try {
    const rawBody = req.rawBody || req.body;
    const sig = req.headers['stripe-signature'];
    const result = await StripeService.handleWebhook(rawBody, sig);
    res.json({ received: true, event: result.type || 'processed' });
  } catch (err) {
    console.error('[Stripe Webhook Error]:', err.message);
    res.status(400).json({ error: `Webhook error: ${err.message}` });
  }
});

module.exports = router;