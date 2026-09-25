/**
 * HAFFU STUDIO — Email Template Engine
 * Simple variable interpolation + pre-built templates
 */
const fs = require('fs');
const path = require('path');

const BASE = fs.readFileSync(path.join(__dirname, 'templates', 'base.html'), 'utf8');

class TemplateEngine {
  static render(data = {}) {
    const vars = {
      title: 'Hafsa Noreen Photography',
      subtitle: 'Cinematic natural-light stories across Halton',
      body: '',
      ctaText: '',
      ctaLink: '#',
      heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      ...data
    };
    let html = BASE;
    Object.entries(vars).forEach(([k, v]) => {
      if (typeof v === 'string') html = html.replace(new RegExp('{{\\s*' + k + '\\s*}}', 'g'), v);
    });
    if (!vars.ctaText) html = html.replace(/{{\s*#ctaText\s*}}[\s\S]*?{{\s*\/ctaText\s*}}/g, '');
    return html;
  }

  static inquiry(d) {
    return TemplateEngine.render({
      title: 'Thank You for Your Inquiry',
      subtitle: 'Haffu has received your message',
      body: `<p>Hi <strong>${d.name || d.clientName || 'there'}</strong>,</p><p>Thank you for reaching out! Haffu has received your inquiry for a <strong>${d.sessionType||'photography session'}</strong>${d.date?' on <strong>'+d.date+'</strong>':''}.</p><p>Hafsa reviews every inquiry personally — you'll hear back within 24 hours.</p>`,
      ctaText: 'Browse Portfolio',
      ctaLink: 'https://hafsanoreen.com/#portfolio'
    });
  }

  static bookingConfirmed(d) {
    return TemplateEngine.render({
      title: 'Your Session is Booked!',
      subtitle: `${d.sessionType} — ${d.date} at ${d.location || 'Selected Location'}`,
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>Your <strong>${d.sessionType}</strong> session is confirmed for <strong>${d.date}</strong> at <strong>${d.location || 'Oakville / Milton'}</strong>.</p><table width="100%" style="margin:20px 0;border-collapse:collapse;"><tr><td style="padding:10px;border-bottom:1px solid #EBE5DC;font-size:13px;color:#A98052;">Session</td><td style="padding:10px;border-bottom:1px solid #EBE5DC;">${d.sessionType}</td></tr><tr><td style="padding:10px;border-bottom:1px solid #EBE5DC;color:#A98052;">Date</td><td style="padding:10px;border-bottom:1px solid #EBE5DC;">${d.date}</td></tr><tr><td style="padding:10px;border-bottom:1px solid #EBE5DC;color:#A98052;">Location</td><td style="padding:10px;border-bottom:1px solid #EBE5DC;">${d.location || 'Selected Location'}</td></tr><tr><td style="padding:10px;color:#A98052;">Investment</td><td style="padding:10px;"><strong>$${d.price || d.amount || '450'}</strong> + HST</td></tr></table><p>Your pre-session guide arrives 5 days before. Hafsa can't wait!</p>`,
      ctaText: 'View Booking',
      ctaLink: 'https://hafsanoreen.com/booking'
    });
  }

  static bookingAlert(d) {
    return TemplateEngine.render({
      title: 'NEW BOOKING',
      subtitle: `${d.clientName} — ${d.sessionType}`,
      body: `<table width="100%" style="margin:20px 0;border-collapse:collapse;"><tr><td style="padding:8px;font-weight:700;color:#A98052;">Client</td><td style="padding:8px;">${d.clientName}</td></tr><tr><td style="padding:8px;font-weight:700;color:#A98052;">Email</td><td style="padding:8px;">${d.clientEmail}</td></tr><tr><td style="padding:8px;font-weight:700;color:#A98052;">Session</td><td style="padding:8px;">${d.sessionType}</td></tr><tr><td style="padding:8px;font-weight:700;color:#A98052;">Date</td><td style="padding:8px;">${d.date}</td></tr><tr><td style="padding:8px;font-weight:700;color:#A98052;">Location</td><td style="padding:8px;">${d.location}</td></tr><tr><td style="padding:8px;font-weight:700;color:#A98052;">Package</td><td style="padding:8px;"><strong>$${d.price}</strong></td></tr></table>`,
      ctaText: 'View Dashboard', ctaLink: 'https://hafsanoreen.com/admin'
    });
  }

  static preSession(d) {
    return TemplateEngine.render({
      title: 'Your Session is Coming Up!',
      subtitle: `${d.daysUntil} days to go`,
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>Your session is in <strong>${d.daysUntil} days</strong>!</p><h3 style="color:#A98052;margin:20px 0 8px;">What to Wear</h3><p>Soft neutral tones (cream, sage, dusty rose). Classic silhouettes. No busy patterns.</p><h3 style="color:#A98052;margin:20px 0 8px;">Location</h3><p>${d.location}. Arrive 10 minutes early.</p><h3 style="color:#A98052;margin:20px 0 8px;">Timeline</h3><p>Sneak peek in 48 hours. Full gallery in 3—4 weeks.</p>`
    });
  }

  static sneakPeek(d) {
    return TemplateEngine.render({
      title: 'Your Sneak Peek is Ready!',
      subtitle: '5 frames from your session',
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>Hafsa couldn't wait — here are 5 frames. Full gallery in 3—4 weeks.</p>`,
      ctaText: 'View Sneak Peek',
      ctaLink: 'https://hafsanoreen.com/client-portal'
    });
  }

  static instantDepositReceipt(d) {
    return TemplateEngine.render({
      title: 'Retainer Deposit Received ✦ Date Secured',
      subtitle: `${d.sessionType || 'Photography Commission'} — ${d.date || 'Scheduled Date'}`,
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>We have received your <strong>$${d.amount || '500'} CAD</strong> retainer deposit. Your calendar slot is officially reserved.</p><div style="background:#FAF8F5;border:1px solid #E8E1D9;padding:20px;border-radius:6px;margin:24px 0;"><p style="margin:0 0 8px;font-size:13px;color:#A98052;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Receipt Details</p><p style="margin:4px 0;"><strong>Transaction ID:</strong> ${d.paymentIntent || 'pi_' + Date.now()}</p><p style="margin:4px 0;"><strong>Retainer Amount:</strong> $${d.amount || '500'} CAD</p><p style="margin:4px 0;"><strong>Remaining Balance:</strong> Due 48 hours prior to session</p></div><p>Hafsa will personally connect with your detailed location guide and wardrobe recommendations.</p>`,
      ctaText: 'Prepare for Your Session',
      ctaLink: 'https://hafsanoreen.com/#guide'
    });
  }

  static giftCardVoucher(d) {
    return TemplateEngine.render({
      title: 'Your Hafsa Noreen Photography Gift Voucher',
      subtitle: `Value: $${d.amount} CAD — Redeemable for any session or fine art print`,
      body: `<p>Hi <strong>${d.recipientName || d.clientName}</strong>,</p><p>${d.senderName ? '<strong>' + d.senderName + '</strong> has gifted you' : 'Here is your'} a fine art photography experience with Hafsa Noreen Photography.</p><div style="text-align:center;background:#1A1715;color:#EED8A1;padding:30px;border-radius:8px;margin:28px 0;border:1px solid #D4AF37;"><p style="letter-spacing:3px;font-size:12px;margin:0 0 10px;text-transform:uppercase;color:#C9A87C;">Exclusive Gift Voucher Code</p><p style="font-family:Georgia,serif;font-size:32px;letter-spacing:6px;margin:0;color:#FFFFFF;font-weight:700;">${d.voucherCode || 'HN-' + Math.random().toString(36).substring(2, 9).toUpperCase()}</p><p style="margin:12px 0 0;font-size:14px;color:#EED8A1;">Amount: $${d.amount} CAD · No Expiration Date</p></div><p style="font-style:italic;color:#6B645D;">"${d.message || 'May these moments be preserved for a lifetime.'}"</p>`,
      ctaText: 'Redeem Voucher',
      ctaLink: 'https://hafsanoreen.com/booking'
    });
  }

  static presetDelivery(d) {
    return TemplateEngine.render({
      title: 'Your Presets Are Ready to Download',
      subtitle: `${d.packName || 'The Film Essence Collection'} · Desktop & Mobile XMP/DNG`,
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>Thank you for your purchase of <strong>${d.packName || 'The Signature Preset Collection'}</strong>. Your download link is active below.</p><div style="background:#FAF8F5;border:1px solid #E8E1D9;padding:20px;border-radius:6px;margin:24px 0;"><p style="margin:0 0 8px;font-size:13px;color:#A98052;font-weight:700;">What is Included:</p><ul style="margin:0;padding-left:20px;line-height:1.8;"><li>Lightroom Desktop (.XMP) Presets</li><li>Lightroom Mobile (.DNG) One-Click Files</li><li>Step-by-Step Installation PDF Guide</li><li>Hafsa's Golden Hour Exposure Masterclass</li></ul></div>`,
      ctaText: 'Download Presets Now',
      ctaLink: d.downloadUrl || 'https://hafsanoreen.com/downloads?token=' + (d.token || 'hn_preset')
    });
  }

  static contractAgreement(d) {
    return TemplateEngine.render({
      title: 'Photography Commission Agreement',
      subtitle: `${d.sessionType} — ${d.date}`,
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>Your service agreement for your <strong>${d.sessionType}</strong> on <strong>${d.date}</strong> is ready for your review and digital signature.</p><p>Please review and sign electronically within 48 hours to finalize your commission.</p>`,
      ctaText: 'Review & Sign Contract',
      ctaLink: d.contractUrl || 'https://hafsanoreen.com/contract/' + (d.bookingId || '')
    });
  }

  static galleryReady(d) {
    return TemplateEngine.render({
      title: 'Your Gallery is Here!',
      subtitle: `${d.frameCount} frames — your story, beautifully told`,
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>Your full gallery is ready — <strong>${d.frameCount} edited frames</strong>. Your private gallery includes a print store for fine-art prints, canvases, and albums shipped to you.</p>`,
      ctaText: 'View Full Gallery', ctaLink: 'https://hafsanoreen.com/client-portal'
    });
  }

  static printNudge(d) {
    return TemplateEngine.render({
      title: 'Your Photos Deserve More Than a Screen',
      subtitle: 'Fine-art prints, canvases, albums',
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>Frame <strong>#${d.frameNumber}</strong> would look stunning as a <strong>16x20 canvas</strong>. Your print store is still open.</p>`,
      ctaText: 'Visit Print Store', ctaLink: 'https://hafsanoreen.com/client-portal'
    });
  }

  static anniversary(d) {
    return TemplateEngine.render({
      title: 'Happy Almost-Anniversary!',
      subtitle: 'Your first year — captured again',
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>Almost a year since your wedding! Book within 7 days and I'll honor your original package rate.</p>`,
      ctaText: 'Book Anniversary', ctaLink: 'https://hafsanoreen.com/booking'
    });
  }

  static reviewRequest(d) {
    return TemplateEngine.render({
      title: 'Loved Your Photos?',
      subtitle: 'Your review helps other couples find Hafsa',
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>60 seconds to leave a Google Review? It means the world.</p>`,
      ctaText: 'Leave a Google Review', ctaLink: 'https://g.page/review-link'
    });
  }

  static retainerOffer(d) {
    return TemplateEngine.render({
      title: 'Save With the Family Retainer',
      subtitle: '$99/month — priority booking',
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>You've booked <strong>${d.sessionCount} sessions</strong> this year. At $99/month, you'd save <strong>$${d.savings}</strong> with priority booking.</p>`,
      ctaText: 'Join Retainer', ctaLink: 'https://hafsanoreen.com/retainer'
    });
  }

  static referralReward(d) {
    return TemplateEngine.render({
      title: 'Refer a Friend, You Both Win',
      subtitle: 'Give $50, Get $50',
      body: `<p>Hi <strong>${d.clientName}</strong>,</p><p>Refer someone to Hafsa and you <strong>both get $50 off</strong>. Your link: <strong>${d.referralLink}</strong></p>`,
      ctaText: 'Share Link', ctaLink: d.referralLink || '#'
    });
  }
}

module.exports = TemplateEngine;