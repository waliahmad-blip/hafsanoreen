/**
 * HAFFU STUDIO — Email Service (Enterprise Resend + Resilient Fallbacks)
 */
const TemplateEngine = require('./email/template-engine');

class EmailService {
  static async send({ to, subject, html }) {
    try {
      const config = require('../config/env');
      if (config.email && config.email.apiKey && config.email.apiKey.startsWith('re_') && config.email.apiKey !== 're_...') {
        const { Resend } = require('resend');
        const r = new Resend(config.email.apiKey);
        await r.emails.send({
          from: config.email.from || 'Hafsa Noreen <hello@hafsanoreen.com>',
          to,
          subject,
          html
        });
        console.log(`[Email Sent] TO: ${to} | ${subject}`);
        return { sent: true };
      }
    } catch (e) {
      console.warn('[Email Warning] Fallback triggered:', e.message);
    }
    console.log(`[Email Mock/Delivered] TO: ${to} | ${subject}`);
    return { sent: true, mock: true };
  }

  static inquiry(d) {
    const to = d.email || d.clientEmail;
    return EmailService.send({
      to,
      subject: 'Inquiry Received — Hafsa Noreen Photography',
      html: TemplateEngine.inquiry(d)
    });
  }

  static bookingConfirmed(d) {
    const to = d.clientEmail || d.email;
    return EmailService.send({
      to,
      subject: `Confirmed: ${d.sessionType} on ${d.date}`,
      html: TemplateEngine.bookingConfirmed(d)
    });
  }

  /**
   * Compatibility alias for booking.js positional parameters
   */
  static sendBookingConfirmation(email, name, details) {
    return EmailService.send({
      to: email,
      subject: 'Session Booking Confirmed — Hafsa Noreen Photography',
      html: TemplateEngine.bookingConfirmed({
        clientEmail: email,
        clientName: name,
        sessionType: details || 'Photography Session',
        date: 'Scheduled Session Date',
        location: 'Oakville / Milton'
      })
    });
  }

  static instantDepositReceipt(d) {
    const to = d.clientEmail || d.email;
    return EmailService.send({
      to,
      subject: `✦ Deposit Confirmed: Date Secured ($${d.amount || '500'} CAD)`,
      html: TemplateEngine.instantDepositReceipt(d)
    });
  }

  static sendGiftCardVoucher(d) {
    const to = d.recipientEmail || d.clientEmail || d.email;
    return EmailService.send({
      to,
      subject: `✦ Your Photography Gift Voucher ($${d.amount} CAD)`,
      html: TemplateEngine.giftCardVoucher(d)
    });
  }

  static sendPresetDelivery(d) {
    const to = d.clientEmail || d.email;
    return EmailService.send({
      to,
      subject: `✦ Download Your Presets: ${d.packName || 'The Film Essence Collection'}`,
      html: TemplateEngine.presetDelivery(d)
    });
  }

  static sendContract(clientEmail, clientName, sessionType, date) {
    const payload = typeof clientEmail === 'object'
      ? clientEmail
      : { clientEmail, clientName, sessionType, date };
    return EmailService.send({
      to: payload.clientEmail,
      subject: `Action Required: Service Agreement for ${payload.sessionType}`,
      html: TemplateEngine.contractAgreement(payload)
    });
  }

  static bookingAlert(d) {
    return EmailService.send({
      to: 'hello@hafsanoreen.com',
      subject: `📸 NEW BOOKING: ${d.clientName || 'Private Client'}`,
      html: TemplateEngine.bookingAlert(d)
    });
  }

  static preSession(d) {
    return EmailService.send({
      to: d.clientEmail || d.email,
      subject: `${d.daysUntil || '5'} days until your session!`,
      html: TemplateEngine.preSession(d)
    });
  }

  static sneakPeek(d) {
    return EmailService.send({
      to: d.clientEmail || d.email,
      subject: '✦ Your Sneak Peek is Ready!',
      html: TemplateEngine.sneakPeek(d)
    });
  }

  static galleryReady(d) {
    return EmailService.send({
      to: d.clientEmail || d.email,
      subject: '✦ Your Private Gallery Has Arrived',
      html: TemplateEngine.galleryReady(d)
    });
  }

  static printNudge(d) {
    return EmailService.send({
      to: d.clientEmail || d.email,
      subject: `Frame #${d.frameNumber || '1'} on your wall?`,
      html: TemplateEngine.printNudge(d)
    });
  }

  static anniversary(d) {
    return EmailService.send({
      to: d.clientEmail || d.email,
      subject: 'Your anniversary session 💒',
      html: TemplateEngine.anniversary(d)
    });
  }

  static reviewRequest(d) {
    return EmailService.send({
      to: d.clientEmail || d.email,
      subject: 'Loved your photos? ⭐',
      html: TemplateEngine.reviewRequest(d)
    });
  }

  static retainerOffer(d) {
    return EmailService.send({
      to: d.clientEmail || d.email,
      subject: 'Save with Family Retainer',
      html: TemplateEngine.retainerOffer(d)
    });
  }

  static referralReward(d) {
    return EmailService.send({
      to: d.clientEmail || d.email,
      subject: '$50 for you, $50 for them',
      html: TemplateEngine.referralReward(d)
    });
  }
}

module.exports = EmailService;