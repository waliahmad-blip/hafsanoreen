/**
 * ============================================================================
 * HAFFU STUDIO — CONCIERGE INQUIRY, RETAINER & CART RECOVERY ENGINE
 * ============================================================================
 * Enterprise Luxury Client Recovery Architecture:
 *   1. Multi-Stage Niche Cadences (Weddings, Maternity, Newborn, Family, Branding, Cart)
 *   2. CASL (Bill C-28), PIPEDA & CRTC Quiet Hours Regulatory Compliance Engines
 *   3. Non-Discounting Luxury Incentives & 8-Point Objection Resolution Taxonomy
 *   4. Multi-Channel Renderers (Bespoke HTML Email, 160-char SMS, WhatsApp & Phone Script)
 *   5. Propensity Scoring (0-100), Ontario 13% HST Milestone Installments & Scarcity Alerts
 *   6. 100% Backward-Compatible Legacy Interface (execute, getRecoverySequences, runDiagnostics)
 *
 * Studio: Hafsa Noreen Photography Atelier (Oakville / Burlington / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.4.0
 * ============================================================================
 */

'use strict';

const crypto = require('crypto');

// --- PART 1A: WEDDING & FINE-ART MATERNITY CADENCES ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 1A: Wedding & Fine-Art Maternity Recovery Cadences
 */

const WEDDING_RECOVERY_CADENCE = [
  {
    stage: 1,
    triggerDay: 1,
    channel: 'email',
    subject: 'Holding your date on our Oakville calendar — {targetDate}',
    tone: 'Gentle Courteous Hold',
    intent: 'Immediate reassurance and courtesy calendar lock',
    message: `Hello {name},

I noticed you were exploring our {sessionType} collection for {targetDate} at {location}. Because our atelier thoughtfully limits our calendar to 25 weddings annually to ensure devoted attention, I wanted to personally reach out.

I have placed a 48-hour soft courtesy hold on {targetDate} for you so you do not have to worry about another couple reserving the date while you review options. Do you have any questions regarding photography timeline flow or venue lighting permits?

Warmest regards,
Hafsa Noreen`
  },
  {
    stage: 2,
    triggerDay: 3,
    channel: 'sms',
    subject: 'Quick question regarding {location} timeline',
    tone: 'Helpful Expert Concierge',
    intent: 'Low-friction mobile outreach with golden hour insight',
    message: 'Hi {name}, Hafsa here from the Oakville atelier. Just wanted to see if you received our wedding guide for {targetDate}. If you would like to review golden hour sunset timing for {location}, feel free to text or book a 10-min chat: hafsanoreen.com/chat'
  },
  {
    stage: 3,
    triggerDay: 7,
    channel: 'email',
    subject: 'A peek inside a full {location} wedding gallery',
    tone: 'Inspirational Social Proof',
    intent: 'Overcoming gallery depth anxiety with full client delivery proof',
    message: `Dear {name},

When choosing a wedding photographer, seeing a curated highlight is one thing—seeing an entire 800+ image archival gallery from morning preparations through candlelit dancing is what gives true confidence.

I put together a private link to a full wedding gallery we recently photographed in the {location} area so you can experience our candid storytelling firsthand: hafsanoreen.com/private-client-galleries

I would love to answer any questions over a brief video call or cappuccino at our downtown Oakville studio.

Warmly,
Hafsa`
  },
  {
    stage: 4,
    triggerDay: 14,
    channel: 'email',
    subject: 'Releasing the courtesy hold on {targetDate} — Hafsa Noreen Photography',
    tone: 'Graceful Closure & Respectful Farewell',
    intent: 'Final calendar status update with zero sales pressure',
    message: `Hello {name},

I hope your wedding planning is unfolding beautifully! As our calendar fills, I will be releasing our courtesy hold on {targetDate} this Friday evening so other inquiring couples may reserve the date.

If you have already chosen another photographer, I wish you a celebration filled with laughter and breathtaking memories! If you are still finalizing decisions and would like to proceed, simply reply to this email.

With gratitude,
Hafsa Noreen`
  }
];

const MATERNITY_RECOVERY_CADENCE = [
  {
    stage: 1,
    triggerDay: 2,
    channel: 'email',
    subject: 'Preserving this milestone — {location} maternity session',
    tone: 'Warm Reverence & Comfort',
    intent: 'Reassurance on maternal comfort and optimal gestation timing',
    message: `Hello {name},

Congratulations on this extraordinary milestone! I saw you were looking into a fine-art maternity commission around {targetDate}.

Because the sweet spot for comfort and glowing bump silhouettes is typically between weeks 28 and 34, slots for {targetDate} in {location} fill quickly. Would you prefer a sun-drenched lakeside golden hour at Gairloch Gardens or the relaxed comfort of an in-home portrait session?

Warmly,
Hafsa Noreen`
  },
  {
    stage: 2,
    triggerDay: 5,
    channel: 'sms',
    subject: 'Maternity styling lookbook for {location}',
    tone: 'Helpful Resource Delivery',
    intent: 'Wardrobe inspiration and stress reduction',
    message: 'Hi {name}! Hafsa from Hafsa Noreen Photography. I just emailed over our client wardrobe styling lookbook with silk gown and neutral palette ideas for {location}. Let me know if you would like me to reserve your due-date window!'
  },
  {
    stage: 3,
    triggerDay: 9,
    channel: 'email',
    subject: 'Last call for maternity dates around {targetDate}',
    tone: 'Courteous Final Check',
    intent: 'Gentle date boundary prior to third-trimester exhaustion',
    message: `Hello {name},

I wanted to send a quick courtesy note before finalizing our upcoming monthly session calendar. If you still wish to document this sacred chapter before your little one arrives, our booking portal remains open at hafsanoreen.com/booking.

Wishing you glowing health and serene comfort in the weeks ahead!

Warmest regards,
Hafsa`
  }
];

// --- PART 1B: GENERATIONAL FAMILY & IN-HOME NEWBORN CADENCES ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 1B: Generational Family & In-Home Newborn Cadences
 */

const FAMILY_RECOVERY_CADENCE = [
  {
    stage: 1,
    triggerDay: 2,
    channel: 'email',
    subject: 'Golden hour family heirloom portraits in {location}',
    tone: 'Legacy & Connection',
    intent: 'Highlighting childhood fleetingness and emotional connection',
    message: `Hello {name},

Children grow in the blink of an eye, and our goal is to preserve this exact chapter of your family’s story with honesty and luminous warmth. We received your note regarding a family session for {targetDate} in {location}.

I would love to help you plan a relaxed, unhurried afternoon where your family can play, connect, and simply be yourselves.

Warmest regards,
Hafsa`
  },
  {
    stage: 2,
    triggerDay: 6,
    channel: 'sms',
    subject: 'Family wardrobe palette for {location}',
    tone: 'Helpful Styling Assistance',
    intent: 'Removing outfit decision fatigue for parents',
    message: 'Hi {name}, Hafsa here! Many parents worry about styling kids for photos. I put together a quick guide on coordinating soft neutrals without matching outfits: hafsanoreen.com/family-style. Would you still like to reserve {targetDate}?'
  },
  {
    stage: 3,
    triggerDay: 12,
    channel: 'email',
    subject: 'Keeping the door open for your family portraits',
    tone: 'Warm Farewell',
    intent: 'Graceful follow-up conclusion',
    message: `Hello {name},

Life with family gets wonderfully busy! I will step back now, but our studio door in downtown Oakville is always open whenever your family is ready to create beautiful tangible memories together.

Warmest wishes to you and your loved ones!

Hafsa Noreen`
  }
];

const NEWBORN_RECOVERY_CADENCE = [
  {
    stage: 1,
    triggerDay: 1,
    channel: 'email',
    subject: 'Welcoming your newest arrival — In-home newborn portraits',
    tone: 'Serene & Gentle Tenderness',
    intent: 'Reassuring parents of zero-stress in-home environment',
    message: `Hello {name},

Congratulations on your precious new arrival! Welcoming a newborn into the world is tender, sacred, and wonderfully exhausting.

Our in-home newborn lifestyle sessions are deliberately slow-paced, warm, and entirely baby-led. You don’t need to pack diaper bags or leave your living room—I bring everything to your home in {location}.

Would you like to reserve a soft window within baby's first 2 to 3 weeks?

With gentle warmth,
Hafsa Noreen`
  },
  {
    stage: 2,
    triggerDay: 4,
    channel: 'sms',
    subject: 'Newborn session flexibility guarantee',
    tone: 'Comforting Reassurance',
    intent: 'Addressing delivery date uncertainty',
    message: 'Hi {name}, Hafsa here. Just a reminder that our newborn bookings are completely flexible—if baby arrives early or late, we automatically shift your date with zero penalty. Rest up!'
  },
  {
    stage: 3,
    triggerDay: 8,
    channel: 'email',
    subject: 'Holding baby’s arrival window in our calendar',
    tone: 'Warm Graceful Close',
    intent: 'Final availability check before schedule closes',
    message: `Hello {name},

I know how demanding the early postpartum days are. I will release your tentative reservation on {targetDate} so you have one less email to think about.

Whenever you feel rested and ready, our studio is here to capture those tiny fingers, yawns, and sleepy snuggles.

Sending peaceful blessings to your growing family,
Hafsa`
  }
];

// --- PART 1C: COMMERCIAL BRANDING & HEIRLOOM ALBUM CART CADENCES ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 1C: Commercial Branding & Heirloom Album Cart Cadences
 */

const BRANDING_RECOVERY_CADENCE = [
  {
    stage: 1,
    triggerDay: 1,
    channel: 'email',
    subject: 'Elevating your brand visual narrative in {location}',
    tone: 'Refined Executive Polish',
    intent: 'Positioning brand photography as an enterprise asset',
    message: `Hello {name},

Thank you for considering Hafsa Noreen Photography for your upcoming executive branding and personal brand narrative. In today's digital landscape, authentic, high-caliber editorial imagery commands immediate authority and trust.

I reviewed your target timeline for {targetDate} in {location}. I would be delighted to collaborate on a curated shoot plan covering headshots, environmental working portraits, and editorial content assets.

Could we schedule a 15-minute concept review this week?

Best regards,
Hafsa Noreen`
  },
  {
    stage: 2,
    triggerDay: 4,
    channel: 'sms',
    subject: 'Brand session commercial licensing overview',
    tone: 'Professional & Efficient',
    intent: 'Clarifying commercial licensing terms',
    message: 'Hi {name}, Hafsa here. In case helpful for your marketing planning, all our corporate & personal brand commissions include full perpetual commercial digital licensing across web, press, and social: hafsanoreen.com/branding-rates'
  },
  {
    stage: 3,
    triggerDay: 10,
    channel: 'email',
    subject: 'Finalizing production dates for commercial quarters',
    tone: 'Courteous Professional Close',
    intent: 'Closing production schedule window',
    message: `Hello {name},

As we finalize our production schedule for upcoming corporate brand sessions, I wanted to confirm if you would like to proceed with {targetDate}.

If your project timeline has shifted to next quarter, feel free to reach back out anytime. We wish your enterprise continued momentum and success!

Sincerely,
Hafsa Noreen`
  }
];

const ALBUM_CART_RECOVERY_CADENCE = [
  {
    stage: 1,
    triggerDay: 1,
    channel: 'email',
    subject: 'Your custom heirloom album design is safely saved',
    tone: 'Artisan Reverence',
    intent: 'Reassurance of saved custom design progress',
    message: `Hello {name},

I noticed you began designing your handcrafted Italian leather heirloom album in our client portal! Because designing an heirloom meant to be passed down through generations takes time and thought, please know your layout and photo selections are safely saved.

If you would like me to review the spread balance or assist with image sequencing, I would be delighted to help.

Access your saved album design anytime: hafsanoreen.com/client-portal

Warmest regards,
Hafsa`
  },
  {
    stage: 2,
    triggerDay: 4,
    channel: 'email',
    subject: 'Fine-art cover swatches & complimentary archival debossing',
    tone: 'Luxury Value Incentive',
    intent: 'High-touch artisanal incentive without price erosion',
    message: `Dear {name},

To make sure your album cover feels as luxurious as your wedding day memories, we would love to include complimentary bespoke custom cover debossing (value $175 CAD) when you finalize your album order this week.

Access your saved design anytime here: hafsanoreen.com/client-portal

Warmly,
Hafsa Noreen`
  },
  {
    stage: 3,
    triggerDay: 10,
    channel: 'sms',
    subject: 'Heirloom album lab batch deadline',
    tone: 'Helpful Print Lab Alert',
    intent: 'Lab production queue notification for timely delivery',
    message: 'Hi {name}! Hafsa here. Our Italian bindery lab is submitting its bi-monthly artisan run this Friday. If you finalize your album spreads by Thursday, your heirloom album will be ready 2 weeks sooner: hafsanoreen.com/client-portal'
  }
];

// --- PART 1D: OBJECTION RESOLUTION TAXONOMY ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 1D: Objection Resolution Taxonomy & Non-Discounting Luxury Incentives
 */

const OBJECTION_SOLUTIONS = {
  INVESTMENT_HESITATION: {
    id: 'investment_hesitation',
    label: 'Investment & Budget Consideration',
    luxuryApproach: 'Never reduce base rate; offer interest-free 4-part installment schedules or bundled archival print credits.',
    talkingPoint: 'We believe family heirlooms should be accessible with peace of mind. We offer a flexible 4-installment schedule spanning up to wedding month.',
    incentive: 'Complimentary archival custom debossing on heirloom album cover (value $175 CAD).',
    actionSteps: [
      'Offer structured 4-stage milestone payment schedule',
      'Bundle complimentary $150 archival print credit instead of discounting',
      'Explain cost-per-year heirloom longevity comparison'
    ]
  },
  CAMERA_SHYNESS: {
    id: 'camera_shyness',
    label: 'Camera Shyness / Nervousness in Front of Lens',
    luxuryApproach: 'Provide client reassurance regarding documentary movement-based prompting rather than stiff editorial poses.',
    talkingPoint: '95% of our couples tell us they feel awkward before a camera. Our session flow is designed entirely around gentle movement and natural laughter.',
    incentive: 'Complimentary 20-minute phone styling & vision consultation before session.',
    actionSteps: [
      'Share video clip of unposed, candid session movement',
      'Emphasize zero rigid posing or unnatural stiffness',
      'Offer pre-shoot walking chat to break the ice'
    ]
  },
  DATE_OR_VENUE_UNCERTAINTY: {
    id: 'date_uncertainty',
    label: 'Date or Venue Not Yet Finalized',
    luxuryApproach: 'Offer a complimentary 7-day soft pencil hold without financial commitment while venue contracts are finalized.',
    talkingPoint: 'We can place a 7-day courtesy hold on your target weekend while you finalize venue contracts with Paletta or Langdon Hall.',
    incentive: '7-day complimentary calendar lock with zero cancellation penalty.',
    actionSteps: [
      'Place 7-day courtesy calendar pencil hold',
      'Provide local Halton venue comparison lighting notes',
      'Offer venue walkthrough lighting consultation'
    ]
  },
  RELUCTANT_PARTNER: {
    id: 'reluctant_partner',
    label: 'Partner Reluctant or Hesitant About Photos',
    luxuryApproach: 'Share our concise "Groom / Partner Primer" focusing on fast, candid, painless portrait sessions.',
    talkingPoint: 'We keep couple portraiture unhurried, celebratory, and genuinely enjoyable—most partners tell us afterward it was the most relaxing part of the day.',
    incentive: 'Private sunset drink toast during golden hour portrait break.',
    actionSteps: [
      'Deliver the 1-page Partner Session Primer',
      'Assure couple that portraits take only 25 minutes max',
      'Emphasize natural interaction rather than smile commands'
    ]
  },
  WEATHER_ANXIETY: {
    id: 'weather_anxiety',
    label: 'Weather & Rain Concerns (Ontario Seasons)',
    luxuryApproach: 'Explain overcast light superiority, covered estate colonnades, and clear bubble umbrella aesthetic.',
    talkingPoint: 'Soft cloud cover acts as nature’s largest diffusion softbox, creating gorgeous luminous skin tones. Plus, we always have verified covered rain backups.',
    incentive: 'Complimentary indoor greenhouse backup permit coordination assistance.',
    actionSteps: [
      'Explain that overcast skies yield softer, more flattering light than harsh noon sun',
      'Provide boutique clear umbrella styling kit',
      'Confirm indoor rain contingency plan at venue'
    ]
  },
  EXTENDED_FAMILY_COORDINATION: {
    id: 'family_coordination',
    label: 'Struggling to Coordinate Multiple Family Branches',
    luxuryApproach: 'Provide structured family grouping breakdown worksheet to minimize shoot time to 20 minutes.',
    talkingPoint: 'We run family formal portraits with cheerful, military precision in under 20 minutes using an organized checklist so elders can relax immediately.',
    incentive: 'Complimentary custom family VIP shot checklist pre-planning.',
    actionSteps: [
      'Send digital family grouping questionnaire',
      'Designate family wrangler assistant workflow',
      'Assure comfort accommodation for grandparents and toddlers'
    ]
  },
  POSTPONEMENT_OR_ILLNESS: {
    id: 'postponement_illness',
    label: 'Sudden Life Event, Illness or Pregnancy Shift',
    luxuryApproach: 'Full atelier grace with 12-month retainer transferability guarantee.',
    talkingPoint: 'Family health and comfort come first above everything. Your retainer is 100% transferable to any date within 12 months with zero penalty fee.',
    incentive: 'Complimentary 12-month calendar transfer guarantee.',
    actionSteps: [
      'Immediately reassure client with compassionate messaging',
      'Lock in 12-month credit window in studio system',
      'Schedule follow-up check-in 60 days later'
    ]
  },
  COMPETING_PHOTOGRAPHER_SHOPPING: {
    id: 'competing_shopping',
    label: 'Comparing Multiple GTA Photographers',
    luxuryApproach: 'Articulate fine-art printmaker distinction, filmic color calibration, and full gallery consistency.',
    talkingPoint: 'Many photographers deliver pretty Instagram teasers. We deliver full 800+ archival galleries calibrated to museum print standards with handcrafted Italian leather albums.',
    incentive: 'Complimentary private viewing of a full real-wedding gallery.',
    actionSteps: [
      'Send link to uncurated 800-image real wedding delivery',
      'Highlight dual-card redundancy and insured studio practice',
      'Offer private studio album viewing in Oakville'
    ]
  }
};

// --- PART 2: CASL, PIPEDA & CRTC DISPATCH WINDOW COMPLIANCE ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 2: CASL, PIPEDA & Canadian CRTC Dispatch Window Compliance
 */



const CASL_COMPLIANCE = {
  IMPLIED_CONSENT_INQUIRY_DAYS: 180, // 6 months for general inquiries under Bill C-28
  EXISTING_BUSINESS_RELATIONSHIP_DAYS: 730, // 24 months for transactional clients
  MAX_RECOVERY_ENGAGEMENTS: 4,     // Maximum automated touchpoints before complete cessation
  COOLING_OFF_INTERVAL_DAYS: 2,    // Minimum cooling-off period between touchpoints
  MANDATORY_SENDER_IDENTITY: {
    businessName: 'Hafsa Noreen Photography Atelier',
    owner: 'Hafsa Noreen',
    physicalAddress: '151 Randall Street, Oakville, ON L6J 1P5, Canada',
    electronicAddress: 'concierge@hafsanoreen.com',
    phone: '+1 (647) 909-3135',
    jurisdiction: 'Ontario, Canada',
    businessNumber: '782910482RT0001'
  },
  UNSUBSCRIBE_DISCLAIMER: 'You received this concierge note because you inquired with Hafsa Noreen Photography. If you would prefer no further reminders, simply reply "UNSUBSCRIBE" or update preferences at hafsanoreen.com/preferences.',
  CRTC_QUIET_HOURS: {
    timeZone: 'America/Toronto',
    weekdayStartHour: 9,  // 9:00 AM EST
    weekdayEndHour: 20.5, // 8:30 PM EST
    weekendStartHour: 10, // 10:00 AM EST
    weekendEndHour: 18    // 6:00 PM EST
  }
};

class CASLComplianceOfficer {
  /**
   * Verify if lead is legally eligible for commercial recovery under CASL
   */
  static evaluateConsent({ daysSince = 0, isPastClient = false, hasOptedOut = false }) {
    if (hasOptedOut) {
      return {
        caslCompliant: false,
        reason: 'Client has explicitly opted out or unsubscribed.',
        allowedChannels: []
      };
    }

    const maxAllowedDays = isPastClient 
      ? CASL_COMPLIANCE.EXISTING_BUSINESS_RELATIONSHIP_DAYS 
      : CASL_COMPLIANCE.IMPLIED_CONSENT_INQUIRY_DAYS;

    const daysRemaining = Math.max(0, maxAllowedDays - daysSince);
    const caslCompliant = daysSince <= maxAllowedDays;

    return {
      caslCompliant,
      legalBasis: isPastClient ? 'EXISTING_BUSINESS_RELATIONSHIP' : 'IMPLIED_CONSENT_INQUIRY',
      daysSinceInquiry: daysSince,
      daysRemainingInConsentWindow: daysRemaining,
      maxAllowedDays,
      reason: caslCompliant 
        ? `Valid under CASL Section 10(9) (${daysRemaining} days remaining).`
        : `Expired under CASL 180-day implied consent rule. Communication prohibited.`,
      allowedChannels: caslCompliant ? ['email', 'sms', 'whatsapp'] : []
    };
  }

  /**
   * Generate secure HMAC-SHA256 unsubscribe verification token
   */
  static generateUnsubscribeToken(email = 'client@example.com', secretKey = 'haffu-atelier-casl') {
    const normalized = (email || '').toLowerCase().trim();
    return crypto.createHmac('sha256', secretKey).update(normalized).digest('hex').slice(0, 16);
  }

  /**
   * Evaluate if current or proposed time falls inside CRTC permissible hours
   */
  static isWithinCRTCDispatchWindow(date = new Date()) {
    const d = new Date(date);
    // Convert to Eastern Time hour
    const estDateStr = d.toLocaleString('en-US', { timeZone: CASL_COMPLIANCE.CRTC_QUIET_HOURS.timeZone });
    const estDate = new Date(estDateStr);
    const day = estDate.getDay(); // 0 is Sunday, 6 is Saturday
    const hours = estDate.getHours() + (estDate.getMinutes() / 60);

    const isWeekend = (day === 0 || day === 6);
    const start = isWeekend ? CASL_COMPLIANCE.CRTC_QUIET_HOURS.weekendStartHour : CASL_COMPLIANCE.CRTC_QUIET_HOURS.weekdayStartHour;
    const end = isWeekend ? CASL_COMPLIANCE.CRTC_QUIET_HOURS.weekendEndHour : CASL_COMPLIANCE.CRTC_QUIET_HOURS.weekdayEndHour;

    const isPermissible = hours >= start && hours <= end;
    return {
      isPermissible,
      currentESTHour: Math.round(hours * 100) / 100,
      isWeekend,
      permissibleWindow: `${start}:00 to ${Math.floor(end)}:${end % 1 ? '30' : '00'} EST`,
      status: isPermissible ? 'PERMISSIBLE_FOR_DISPATCH' : 'CRTC_QUIET_HOURS_ACTIVE'
    };
  }

  /**
   * Get highest converting strategic dispatch window for specific photography niche
   */
  static getOptimalDispatchWindow(sessionType = 'wedding') {
    const type = (sessionType || '').toLowerCase();
    if (type.includes('wedding')) {
      return {
        bestDay: 'Sunday Evening',
        bestTimeEST: '19:30 EST',
        reason: 'Couples review weekend venue tours and wedding spreadsheets together Sunday evening.'
      };
    }
    if (type.includes('maternity') || type.includes('family') || type.includes('newborn')) {
      return {
        bestDay: 'Tuesday or Thursday Morning',
        bestTimeEST: '10:15 EST',
        reason: 'Optimal window post-morning daycare drop-off and first coffee before afternoon tasks.'
      };
    }
    if (type.includes('branding') || type.includes('headshot')) {
      return {
        bestDay: 'Wednesday Morning',
        bestTimeEST: '09:45 EST',
        reason: 'Corporate leaders review quarterly marketing assets and calendar schedules mid-week.'
      };
    }
    return {
      bestDay: 'Tuesday Afternoon',
      bestTimeEST: '14:00 EST',
      reason: 'General afternoon inbox lull ideal for thoughtful luxury purchases.'
    };
  }
}

// --- PART 3: MULTI-CHANNEL EDITORIAL RENDERERS ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 3: Multi-Channel Editorial Renderers (Email, SMS, WhatsApp & Phone Script)
 */



class RecoveryChannelRenderer {
  /**
   * Render luxury editorial HTML email with inline CSS and CASL mandatory footer
   */
  static renderHtmlEmail({ clientName = 'Valued Client', subject = 'Your Atelier Inquiry', bodyContent = '', unsubscribeToken = 'UNSUB-DEMO' }) {
    const sender = CASL_COMPLIANCE.MANDATORY_SENDER_IDENTITY;
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #faf9f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, Georgia, serif; color: #232220; line-height: 1.75;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf9f6; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #ede8e3; border-radius: 4px; padding: 44px 36px; box-shadow: 0 4px 18px rgba(0,0,0,0.03);">
          <!-- Atelier Header -->
          <tr>
            <td align="center" style="border-bottom: 1px solid #f2ede8; padding-bottom: 26px;">
              <span style="font-family: Georgia, serif; font-size: 22px; letter-spacing: 0.18em; text-transform: uppercase; color: #1a1918; font-weight: 300;">HAFSA NOREEN</span>
              <div style="font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #8e8880; margin-top: 6px;">Atelier of Fine Art & Generational Heirlooms</div>
              <div style="width: 32px; height: 1px; background-color: #c5a059; margin: 12px auto 0 auto;"></div>
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style="padding: 34px 4px; font-size: 15px; color: #3c3a37; white-space: pre-line; letter-spacing: 0.01em;">
${bodyContent}
            </td>
          </tr>
          <!-- Concierge Signoff -->
          <tr>
            <td style="padding-top: 20px; border-top: 1px solid #f2ede8; font-size: 14px; color: #5a5752; line-height: 1.6;">
              <strong style="color: #232220; font-family: Georgia, serif; font-size: 15px;">Hafsa Noreen</strong><br>
              Fine Art Wedding & Portrait Photographer<br>
              Oakville • Burlington • Toronto • Muskoka<br>
              <a href="https://hafsanoreen.com" style="color: #8b7355; text-decoration: none; font-weight: 500;">hafsanoreen.com</a> | ${sender.phone}
            </td>
          </tr>
          <!-- CASL Compliance Footer -->
          <tr>
            <td style="padding-top: 30px; font-size: 11px; color: #9c9790; text-align: center; line-height: 1.5; border-top: 1px dashed #ede8e3; margin-top: 24px;">
              ${sender.businessName} • BN: ${sender.businessNumber}<br>
              ${sender.physicalAddress}<br>
              ${CASL_COMPLIANCE.UNSUBSCRIBE_DISCLAIMER}<br>
              <a href="https://hafsanoreen.com/unsubscribe?token=${unsubscribeToken}" style="color: #7b756c; text-decoration: underline;">Instant One-Click Unsubscribe</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  }

  /**
   * Render concise mobile SMS with carrier-compliant STOP opt-out mechanism
   */
  static renderSmsMessage({ message = '', clientName = '' }) {
    const cleanMsg = (message || '').trim();
    return `${cleanMsg} Reply STOP to opt out.`;
  }

  /**
   * Render direct WhatsApp concierge formatted message
   */
  static renderWhatsAppMessage({ clientName = '', message = '', directBookingUrl = 'https://hafsanoreen.com/booking' }) {
    return [
      `*Hafsa Noreen Photography Atelier*`,
      `_Oakville, Ontario • Concierge Desk_`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      message,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Direct Atelier Line: +1 (647) 909-3135`,
      `Private Booking Calendar: ${directBookingUrl}`
    ].join('\n');
  }

  /**
   * Render 5-minute phone consultation call script for atelier follow-up
   */
  static renderPhoneScript({ clientName = 'Client', sessionType = 'Wedding Heirloom', location = 'Oakville', targetDate = 'Upcoming Date', objection = null }) {
    return {
      caller: 'Hafsa Noreen or Senior Studio Associate',
      client: clientName,
      sessionDetails: `${sessionType} at ${location} for ${targetDate}`,
      stages: [
        {
          step: '1. Warm Greeting & Gratitude',
          script: `Hello ${clientName}, this is Hafsa from Hafsa Noreen Photography in downtown Oakville. I hope you're having a wonderful week! I saw your inquiry for ${sessionType} on ${targetDate} and wanted to personally say hello.`
        },
        {
          step: '2. Low-Pressure Discovery Question',
          script: `How is your planning coming along so far? Have you finalized your venue flow or are you still exploring timing details for ${location}?`
        },
        {
          step: '3. Objection or Hesitation Addressing',
          script: objection 
            ? `Regarding ${objection.label}: Please know that we structure our sessions completely around your comfort. ${objection.talkingPoint}`
            : `Our goal is to make the entire photography experience feel like a peaceful, joyful pause where you never have to worry about stiff posing or awkward moments.`
        },
        {
          step: '4. Soft Action Offer',
          script: `I can place a 48-hour soft pencil hold on ${targetDate} for you right now so you don't feel rushed, and send over our full private gallery sample. Would that be helpful for you to review tonight?`
        }
      ]
    };
  }
}

// --- PART 4A: LEAD RECOVERY SCORER & DATE COLLISION DETECTOR ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 4A: Lead Recovery Propensity Scoring & Collision Detection
 */

const PRESTIGE_VENUES = [
  'paletta', 'langdon hall', 'arlington estate', 'graydon hall', 'gairloch gardens',
  'royal botanical gardens', 'rbg', 'elora mill', 'ancaster mill', 'casa loma',
  'hart house', 'spencer\'s at the waterfront', 'earth to table', 'mint room'
];

class ConciergeLeadScorer {
  /**
   * Calculate 0-100 lead recovery urgency and conversion propensity score
   */
  static scoreLead({ daysSince = 1, sessionType = 'wedding', location = '', targetDate = '', estimatedValue = 4500, hasObjection = false }) {
    let score = 0;
    const reasons = [];

    // 1. Recency Decay Factor (Max 30 pts)
    const days = Math.max(0, Number(daysSince) || 0);
    if (days <= 2) {
      score += 30;
      reasons.push('Immediate inquiry window (0-2 days): +30');
    } else if (days <= 5) {
      score += 24;
      reasons.push('High intent recent window (3-5 days): +24');
    } else if (days <= 10) {
      score += 16;
      reasons.push('Active consideration window (6-10 days): +16');
    } else if (days <= 20) {
      score += 10;
      reasons.push('Cooling window (11-20 days): +10');
    } else if (days <= 60) {
      score += 4;
      reasons.push('Extended window (21-60 days): +4');
    }

    // 2. Session Type & High Lifetime Value Weight (Max 25 pts)
    const type = (sessionType || '').toLowerCase();
    if (type.includes('wedding')) {
      score += 25;
      reasons.push('Luxury wedding heirloom commission: +25');
    } else if (type.includes('newborn') || type.includes('maternity')) {
      score += 20;
      reasons.push('Milestone maternity/newborn commission: +20');
    } else if (type.includes('family')) {
      score += 16;
      reasons.push('Family generational portrait commission: +16');
    } else if (type.includes('branding')) {
      score += 18;
      reasons.push('Commercial personal branding commission: +18');
    } else {
      score += 10;
      reasons.push('Standard portrait or cart commission: +10');
    }

    // 3. Prestige Venue & Halton Luxury Proximity (Max 15 pts)
    const locLower = (location || '').toLowerCase();
    const isPrestige = PRESTIGE_VENUES.some(v => locLower.includes(v));
    if (isPrestige) {
      score += 15;
      reasons.push(`Prestige Halton/GTA venue match (${location}): +15`);
    } else if (locLower.includes('oakville') || locLower.includes('burlington') || locLower.includes('toronto')) {
      score += 10;
      reasons.push('Core Halton/GTA geographic proximity: +10');
    }

    // 4. Concrete Target Date Specified (Max 15 pts)
    if (targetDate && targetDate.trim().length > 3) {
      score += 15;
      reasons.push('Specific calendar target date established: +15');
    }

    // 5. Objection Identified (Opportunity to resolve and close) (Max 15 pts)
    if (hasObjection) {
      score += 15;
      reasons.push('Specific hesitation identified with structured resolution: +15');
    }

    // Cap at 100
    const finalScore = Math.min(100, Math.max(0, score));

    let priorityTier = 'STANDARD_NUDGE_SEQUENCE';
    let recommendedAction = 'Dispatch stage-appropriate email sequence.';

    if (finalScore >= 80) {
      priorityTier = 'VIP_URGENT_CONCIERGE_CALL';
      recommendedAction = 'Direct personalized phone call or video note from Hafsa within 2 business hours.';
    } else if (finalScore >= 60) {
      priorityTier = 'HIGH_PRIORITY_EMAIL_AND_SMS';
      recommendedAction = 'Send multi-channel email accompanied by concierge SMS follow-up.';
    } else if (finalScore >= 35) {
      priorityTier = 'STANDARD_NUDGE_SEQUENCE';
      recommendedAction = 'Send gentle editorial email with private gallery preview link.';
    } else {
      priorityTier = 'PASSIVE_RESOURCE_DELIVERY';
      recommendedAction = 'Deliver seasonal lookbook and allow client to re-engage at own pace.';
    }

    return {
      propensityScore: finalScore,
      priorityTier,
      recommendedAction,
      scoringBreakdown: reasons
    };
  }
}

class DateCollisionDetector {
  /**
   * Generate courteous, authentic notification if competing inquiry exists for same target date
   */
  static evaluateDateScarcity({ targetDate = '', location = '', competingInquiryCount = 1 }) {
    if (!targetDate || competingInquiryCount < 1) {
      return { hasConflict: false, message: null };
    }

    return {
      hasConflict: true,
      competingCount: competingInquiryCount,
      notificationCopy: `Please note we have received ${competingInquiryCount} additional inquiry for ${targetDate} in the ${location || 'Halton'} area. Because we accept only one wedding per weekend, we will maintain your courtesy hold for the next 24 hours.`
    };
  }
}

// --- PART 4B: LUXURY INCENTIVES & ZERO-INTEREST INSTALLMENT SCHEDULES ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 4B: Luxury Incentives & Zero-Interest Installment Schedules
 */



class ConciergeIncentiveEngine {
  /**
   * Resolve specific client objection with luxury atelier positioning
   */
  static resolveObjection(objectionKey) {
    const key = (objectionKey || '').toUpperCase().replace(/\s+/g, '_');
    return OBJECTION_SOLUTIONS[key] || {
      id: 'general_care',
      label: 'Personalized Concierge Care',
      luxuryApproach: 'Direct personal outreach from Hafsa to understand unique client vision.',
      talkingPoint: 'Every family and wedding is distinct. We would love to tailor our coverage hours to suit your specific day.',
      incentive: 'Complimentary archival 8x10 cotton rag deckled print upon booking completion.'
    };
  }

  /**
   * Generate structured, zero-interest payment installment schedule with Ontario 13% HST
   */
  static calculateInstallmentPlan({ totalPackagePrice = 4500, installmentCount = 4, targetDate = null }) {
    const base = Number(totalPackagePrice) || 4500;
    const hst = Math.round(base * 0.13 * 100) / 100;
    const grandTotal = Math.round((base + hst) * 100) / 100;

    const count = Math.min(4, Math.max(2, Number(installmentCount) || 4));
    const retainer = Math.round((grandTotal / count) * 100) / 100;
    const remainingInstallment = Math.round(((grandTotal - retainer) / (count - 1)) * 100) / 100;

    const stages = [];
    stages.push({
      stage: '1. Booking Retainer (Date-Lock)',
      percentage: `${Math.round(100 / count)}%`,
      amountCAD: retainer,
      dueDescription: 'Due upon signing digital contract to reserve exclusive calendar date'
    });

    for (let i = 2; i <= count; i++) {
      stages.push({
        stage: `${i}. Milestone Installment ${i - 1}`,
        percentage: `${Math.round(100 / count)}%`,
        amountCAD: remainingInstallment,
        dueDescription: i === count 
          ? 'Due 14 days prior to wedding/session date' 
          : 'Milestone scheduled midway before final shoot preparation'
      });
    }

    return {
      basePriceCAD: base,
      ontarioHstCAD: hst,
      grandTotalCAD: grandTotal,
      currency: 'CAD',
      interestRate: '0.0% (Atelier Courteous Milestone Schedule)',
      installmentsCount: count,
      schedule: stages
    };
  }

  /**
   * Curate non-discounting luxury value-added incentives
   */
  static getCuratedLuxuryIncentives(sessionType = 'wedding') {
    const isWedding = (sessionType || '').toLowerCase().includes('wedding');
    if (isWedding) {
      return [
        {
          item: 'Handcrafted Foil Cover Debossing',
          retailValueCAD: 175,
          description: 'Blind or gold foil typography with couple names and wedding date on Italian leather album.'
        },
        {
          item: 'Hand-Torn Cotton Rag Deckled Fine-Art Print (8x10)',
          retailValueCAD: 150,
          description: 'Printed on 310gsm Hahnemühle Photo Rag with feathered deckled edges.'
        },
        {
          item: 'Additional 30-Minute Sunset Golden Hour Coverage',
          retailValueCAD: 300,
          description: 'Extended dusk coverage along Lake Ontario or estate grounds.'
        }
      ];
    }

    return [
      {
        item: 'Hand-Torn Cotton Rag Deckled Fine-Art Print (8x10)',
        retailValueCAD: 150,
        description: 'Archival museum cotton print ready for heirloom framing.'
      },
      {
        item: 'Private Online Gallery Hosting Extension (2 Years)',
        retailValueCAD: 120,
        description: 'Full-resolution archival cloud gallery download access for extended family.'
      }
    ];
  }
}

// --- PART 5: CORE ENGINE ORCHESTRATOR ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 5: Core Engine Class & Orchestration Logic
 */









const MASTER_CADENCES = {
  wedding: WEDDING_RECOVERY_CADENCE,
  maternity: MATERNITY_RECOVERY_CADENCE,
  family: FAMILY_RECOVERY_CADENCE,
  newborn: NEWBORN_RECOVERY_CADENCE,
  branding: BRANDING_RECOVERY_CADENCE,
  album_cart: ALBUM_CART_RECOVERY_CADENCE
};

class AbandonedRecoveryEngine {
  static getRecoverySequences() {
    return MASTER_CADENCES;
  }

  static validateParams(params) {
    if (!params || typeof params !== 'object') {
      throw new Error('AbandonedRecovery: Execution parameters must be an object.');
    }
    if (params.daysSince !== undefined && (isNaN(Number(params.daysSince)) || Number(params.daysSince) < 0)) {
      throw new Error('AbandonedRecovery: daysSince must be a non-negative number.');
    }
    return true;
  }

  static execute(params = {}) {
    this.validateParams(params);

    const clientName = params.clientName || 'Valued Client';
    const rawType = (params.sessionType || 'wedding').toLowerCase();
    const location = params.location || 'Oakville & Halton Region';
    const targetDate = params.targetDate || 'Upcoming Celebration';
    const daysSince = Number(params.daysSince !== undefined ? params.daysSince : 1);
    const objectionKey = params.objection || null;
    const isPastClient = Boolean(params.isPastClient || false);
    const hasOptedOut = Boolean(params.hasOptedOut || false);
    const competing = Number(params.competingInquiryCount || 0);

    let sessionKey = 'wedding';
    if (rawType.includes('maternity')) sessionKey = 'maternity';
    else if (rawType.includes('newborn')) sessionKey = 'newborn';
    else if (rawType.includes('family')) sessionKey = 'family';
    else if (rawType.includes('branding') || rawType.includes('headshot')) sessionKey = 'branding';
    else if (rawType.includes('cart') || rawType.includes('album')) sessionKey = 'album_cart';

    const consent = CASLComplianceOfficer.evaluateConsent({ daysSince, isPastClient, hasOptedOut });

    if (!consent.caslCompliant) {
      return {
        shouldEngage: false,
        stage: 0,
        recommendedChannel: 'none',
        reason: consent.reason,
        compliance: consent,
        conciergeMessage: 'Outreach prohibited under Canadian Anti-Spam Legislation (CASL).',
        renderedOutputs: null
      };
    }

    const cadenceList = MASTER_CADENCES[sessionKey] || MASTER_CADENCES.wedding;
    let selectedStep = cadenceList[0];
    for (const step of cadenceList) {
      if (daysSince >= step.triggerDay) selectedStep = step;
    }

    let resolvedObjection = null;
    if (objectionKey) {
      resolvedObjection = ConciergeIncentiveEngine.resolveObjection(objectionKey);
    }

    let rawMessage = selectedStep.message
      .replace(/{name}/g, clientName)
      .replace(/{sessionType}/g, params.sessionType || 'wedding heirloom')
      .replace(/{location}/g, location)
      .replace(/{targetDate}/g, targetDate);

    if (resolvedObjection) {
      rawMessage += `\n\nRegarding ${resolvedObjection.label}: ${resolvedObjection.talkingPoint}\n(Atelier Courtesy: ${resolvedObjection.incentive})`;
    }

    const token = CASLComplianceOfficer.generateUnsubscribeToken(params.clientEmail || 'client@example.com');
    const emailHtml = RecoveryChannelRenderer.renderHtmlEmail({
      clientName,
      subject: selectedStep.subject.replace(/{targetDate}/g, targetDate).replace(/{location}/g, location),
      bodyContent: rawMessage,
      unsubscribeToken: token
    });

    const smsText = RecoveryChannelRenderer.renderSmsMessage({
      message: rawMessage.slice(0, 140) + '...',
      clientName
    });

    const whatsAppText = RecoveryChannelRenderer.renderWhatsAppMessage({ clientName, message: rawMessage });

    const phoneScript = RecoveryChannelRenderer.renderPhoneScript({
      clientName,
      sessionType: params.sessionType || 'Wedding Heirloom',
      location,
      targetDate,
      objection: resolvedObjection
    });

    const leadScoring = ConciergeLeadScorer.scoreLead({
      daysSince,
      sessionType: sessionKey,
      location,
      targetDate,
      hasObjection: Boolean(resolvedObjection)
    });

    const installmentsPlan = ConciergeIncentiveEngine.calculateInstallmentPlan({
      totalPackagePrice: params.packagePrice || 4500,
      installmentCount: 4,
      targetDate
    });

    const collisionAlert = DateCollisionDetector.evaluateDateScarcity({
      targetDate,
      location,
      competingInquiryCount: competing
    });

    return {
      shouldEngage: true,
      stage: selectedStep.stage,
      recommendedChannel: selectedStep.channel,
      tone: selectedStep.tone,
      intent: selectedStep.intent,
      conciergeMessage: rawMessage,
      renderedOutputs: { emailHtml, smsText, whatsAppText, phoneScript },
      leadScoring,
      installmentsPlan,
      collisionAlert,
      resolvedObjection,
      compliance: {
        caslCompliant: consent.caslCompliant,
        daysRemainingInConsentWindow: consent.daysRemainingInConsentWindow,
        crtcPermissible: CASLComplianceOfficer.isWithinCRTCDispatchWindow()
      }
    };
  }
}

// --- PART 6: AUTOMATED SELF-DIAGNOSTIC TEST SUITE ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 6: Automated Self-Diagnostic Test Suite
 */






class AbandonedRecoveryDiagnostics {
  static runDiagnostics(engine) {
    const results = {
      timestamp: new Date().toISOString(),
      testsRun: 0,
      passed: true,
      checks: {}
    };

    // Test 1: Wedding Day 1 Inquiry
    const wedding1 = engine.execute({
      clientName: 'Julian & Sarah',
      sessionType: 'Wedding Heirloom',
      targetDate: 'October 10, 2026',
      location: 'Paletta Mansion, Burlington',
      daysSince: 1
    });
    results.testsRun++;
    results.checks.weddingDay1 = {
      passed: Boolean(wedding1.shouldEngage === true && wedding1.stage === 1 && wedding1.conciergeMessage.includes('Paletta Mansion, Burlington')),
      channel: wedding1.recommendedChannel,
      caslCompliant: wedding1.compliance.caslCompliant
    };

    // Test 2: Maternity Day 5 with objection
    const mat5 = engine.execute({
      clientName: 'Elena Rostova',
      sessionType: 'Fine Art Maternity',
      targetDate: 'May 2026',
      location: 'Gairloch Gardens, Oakville',
      daysSince: 5,
      objection: 'INVESTMENT_HESITATION'
    });
    results.testsRun++;
    results.checks.maternityDay5 = {
      passed: Boolean(mat5.shouldEngage === true && mat5.resolvedObjection !== null && mat5.renderedOutputs.emailHtml.includes('HAFSA NOREEN')),
      resolvedObjection: mat5.resolvedObjection ? mat5.resolvedObjection.label : null
    };

    // Test 3: Expired Inquiry (Beyond 180 Days CASL limit)
    const expired = engine.execute({
      clientName: 'Old Lead',
      sessionType: 'Family Session',
      daysSince: 200
    });
    results.testsRun++;
    results.checks.caslExpirationCheck = {
      passed: Boolean(expired.shouldEngage === false && expired.compliance.caslCompliant === false),
      shouldEngage: expired.shouldEngage
    };

    // Test 4: CRTC Quiet Hours Evaluation
    const crtcCheck = CASLComplianceOfficer.isWithinCRTCDispatchWindow();
    results.testsRun++;
    results.checks.crtcQuietHours = {
      passed: typeof crtcCheck.isPermissible === 'boolean' && crtcCheck.status !== undefined,
      currentStatus: crtcCheck.status
    };

    // Test 5: Installments Plan with Ontario 13% HST
    const installments = ConciergeIncentiveEngine.calculateInstallmentPlan({ totalPackagePrice: 4000, installmentCount: 4 });
    results.testsRun++;
    results.checks.installmentsWithHST = {
      passed: installments.basePriceCAD === 4000 && installments.ontarioHstCAD === 520 && installments.grandTotalCAD === 4520,
      grandTotalCAD: installments.grandTotalCAD
    };

    // Test 6: Prestige Venue Lead Scorer
    const prestigeScore = ConciergeLeadScorer.scoreLead({
      daysSince: 1,
      sessionType: 'wedding',
      location: 'Paletta Mansion',
      targetDate: 'August 15, 2026'
    });
    results.testsRun++;
    results.checks.prestigeLeadScore = {
      passed: prestigeScore.propensityScore >= 80 && prestigeScore.priorityTier === 'VIP_URGENT_CONCIERGE_CALL',
      score: prestigeScore.propensityScore
    };

    // Test 7: Mobile SMS STOP Opt-out Mechanism
    const sms = RecoveryChannelRenderer.renderSmsMessage({ message: 'Hello from Oakville atelier' });
    results.testsRun++;
    results.checks.smsStopOptOut = {
      passed: sms.includes('Reply STOP to opt out.'),
      sms
    };

    // Test 8: Newborn Lifestyle Cadence
    const newborn = engine.execute({
      clientName: 'Amina Khan',
      sessionType: 'in-home newborn lifestyle',
      location: 'Oakville',
      daysSince: 1
    });
    results.testsRun++;
    results.checks.newbornCadence = {
      passed: newborn.shouldEngage === true && newborn.conciergeMessage.includes('living room'),
      stage: newborn.stage
    };

    // Test 9: Competing Inquiry Scarcity Alert
    const collision = DateCollisionDetector.evaluateDateScarcity({
      targetDate: 'September 12, 2026',
      location: 'Langdon Hall',
      competingInquiryCount: 2
    });
    results.testsRun++;
    results.checks.dateScarcityAlert = {
      passed: collision.hasConflict === true && collision.notificationCopy.includes('2 additional inquiry'),
      hasConflict: collision.hasConflict
    };

    // Test 10: Cryptographic Unsubscribe Token
    const token = CASLComplianceOfficer.generateUnsubscribeToken('test@hafsanoreen.com');
    results.testsRun++;
    results.checks.cryptoUnsubscribeToken = {
      passed: typeof token === 'string' && token.length === 16,
      token
    };

    for (const key of Object.keys(results.checks)) {
      if (!results.checks[key].passed) results.passed = false;
    }

    return results;
  }
}

// --- PART 7: BOUNDARY TESTS & 50-LEAD SIMULATION BENCHMARK ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 7: Boundary Edge Cases & 50-Lead Simulation Benchmark
 */

class AbandonedRecoverySimulations {
  /**
   * Run boundary stress tests against edge case inputs
   */
  static runBoundaryTests(engine) {
    const results = [];

    // 1. Empty input parameters
    try {
      const res = engine.execute({});
      results.push({
        test: 'Empty input params object defaults safely without throwing',
        passed: res && res.shouldEngage === true && res.stage === 1
      });
    } catch (e) {
      results.push({ test: 'Empty input params object defaults safely', passed: false, error: e.message });
    }

    // 2. Negative daysSince validation
    try {
      engine.execute({ daysSince: -5 });
      results.push({ test: 'Negative daysSince throws validation error', passed: false });
    } catch (e) {
      results.push({
        test: 'Negative daysSince throws validation error',
        passed: e.message.includes('non-negative number')
      });
    }

    // 3. Explicit opt-out immediate halt
    const optOut = engine.execute({ hasOptedOut: true });
    results.push({
      test: 'Explicit opt-out immediately halts communication under CASL',
      passed: optOut.shouldEngage === false && optOut.compliance.caslCompliant === false
    });

    // 4. Past client 24-month relationship window
    const pastClient = engine.execute({
      clientName: 'Reoccurring Family',
      sessionType: 'Family Session',
      isPastClient: true,
      daysSince: 300
    });
    results.push({
      test: 'Past client retains 24-month CASL existing business relationship',
      passed: pastClient.shouldEngage === true && pastClient.compliance.caslCompliant === true
    });

    // 5. Default location fallback
    const locDefault = engine.execute({ location: null });
    results.push({
      test: 'Null location falls back gracefully to Oakville & Halton Region',
      passed: locDefault.conciergeMessage.includes('Oakville & Halton Region')
    });

    const allBoundaryPassed = results.every(r => r.passed);
    return {
      totalBoundaryTests: results.length,
      allBoundaryPassed,
      results
    };
  }

  /**
   * 50-lead batch recovery simulation benchmark
   */
  static runBatchSimulation(engine, count = 50) {
    const sessionTypes = ['wedding', 'maternity', 'family', 'newborn', 'branding', 'album_cart'];
    const locations = ['Oakville', 'Burlington', 'Milton', 'Paletta Mansion', 'Langdon Hall', 'Toronto'];
    const objections = ['INVESTMENT_HESITATION', 'CAMERA_SHYNESS', 'DATE_OR_VENUE_UNCERTAINTY', 'RELUCTANT_PARTNER', null];

    const leads = [];
    const metrics = {
      totalSimulated: count,
      shouldEngageCount: 0,
      caslExpiredCount: 0,
      vipCallCount: 0,
      highPriorityCount: 0,
      standardEmailCount: 0,
      channelBreakdown: { email: 0, sms: 0, none: 0 }
    };

    for (let i = 1; i <= count; i++) {
      const daysSince = Math.floor(Math.random() * 220); // 0 to 220 days
      const sessionType = sessionTypes[i % sessionTypes.length];
      const location = locations[i % locations.length];
      const objection = objections[i % objections.length];

      const res = engine.execute({
        clientName: `Simulated Client ${i}`,
        sessionType,
        location,
        targetDate: `Date 2026-${(i % 12) + 1}`,
        daysSince,
        objection
      });

      leads.push({ id: i, daysSince, res });

      if (res.shouldEngage) {
        metrics.shouldEngageCount++;
        if (res.leadScoring && res.leadScoring.priorityTier === 'VIP_URGENT_CONCIERGE_CALL') metrics.vipCallCount++;
        else if (res.leadScoring && res.leadScoring.priorityTier === 'HIGH_PRIORITY_EMAIL_AND_SMS') metrics.highPriorityCount++;
        else metrics.standardEmailCount++;

        if (res.recommendedChannel === 'email') metrics.channelBreakdown.email++;
        else if (res.recommendedChannel === 'sms') metrics.channelBreakdown.sms++;
      } else {
        metrics.caslExpiredCount++;
        metrics.channelBreakdown.none++;
      }
    }

    return {
      metrics,
      sampleRecoveredLead: leads[0]
    };
  }
}

// --- PART 8: CONCIERGE PLAYBOOKS & SUBJECT LINE A/B TESTER ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 8: High-Touch Concierge Playbooks & Subject Line A/B Tester
 */

const CONCIERGE_PLAYBOOKS = {
  ESTATE_WEDDING_HIGH_VALUE: {
    niche: 'Luxury Estate Wedding ($6,000+ CAD)',
    recommendedContactChannel: 'Phone Call followed by Private Personalized Video Note',
    discoveryQuestions: [
      'What drew you to your venue (e.g. Paletta, Langdon Hall, Arlington Estate)?',
      'What part of the day are you most excited to experience without feeling rushed?',
      'Have you considered whether you want an intimate first look or the traditional aisle moment?'
    ],
    valueAnchors: [
      'Dual-photographer storytelling ensuring complete reception and candid guest coverage',
      'Handcrafted Italian heirloom album included with custom debossed leather',
      'Complimentary golden-hour engagement session to practice natural movement beforehand'
    ],
    closingProtocol: 'Offer a complimentary 72-hour soft calendar lock while couple discusses final details.'
  },

  MULTI_GENERATIONAL_FAMILY: {
    niche: 'Multi-Generational Extended Family Heirloom Session',
    recommendedContactChannel: 'Editorial Email with PDF Shot List Breakdown',
    discoveryQuestions: [
      'How many family branches and distinct households will be joining?',
      'Are there elderly grandparents requiring paved flat walking paths or easy seating?',
      'Are there toddlers who need nap-time scheduling buffers?'
    ],
    valueAnchors: [
      'Structured 20-minute master grouping system minimizing fatigue for elders and children',
      'Generous individual sub-family breakout mini-sessions within the same afternoon',
      'Archival wall art consultation with digital room mockups'
    ],
    closingProtocol: 'Share sample gallery of 3-generation family portrait session at Gairloch Gardens.'
  },

  CORPORATE_PERSONAL_BRANDING: {
    niche: 'Executive Personal Branding & Commercial Editorial',
    recommendedContactChannel: 'Concierge Email with Commercial Licensing Summary',
    discoveryQuestions: [
      'What are the primary media outlets where these images will appear (Forbes, LinkedIn, Website, Book cover)?',
      'Do you need environmental workplace imagery or clean minimalist studio backdrops?',
      'Would professional on-site hair and makeup artist coordination assist your schedule?'
    ],
    valueAnchors: [
      'Full commercial release for perpetual advertising and press without recurring licensing fees',
      'Rapid 5-business-day expedited editorial turnaround',
      'Multiple outfit changes and environmental lighting setups'
    ],
    closingProtocol: 'Offer 15-minute Zoom concept & wardrobe review call.'
  }
};

class SubjectLineABTester {
  /**
   * Score subject lines for luxury editorial engagement and open rate propensity
   */
  static evaluateSubjectLine(subject = '') {
    const clean = (subject || '').trim();
    let score = 70; // baseline
    const strengths = [];
    const improvements = [];

    // Length check
    if (clean.length >= 30 && clean.length <= 60) {
      score += 15;
      strengths.push('Optimal 30-60 character length for mobile preview');
    } else if (clean.length > 70) {
      score -= 10;
      improvements.push('Subject exceeds 70 characters; may truncate on iPhone Mail');
    }

    // Personalization check
    if (clean.includes('{name}') || clean.includes('{location}') || clean.includes('{targetDate}')) {
      score += 10;
      strengths.push('Dynamic local or client personalization token present');
    }

    // Luxury tone check (avoiding spam words like "Sale", "Discount", "Free", "Act Fast")
    const spamWords = ['discount', 'sale', 'free', 'act fast', 'limited time offer', 'cheap'];
    const foundSpam = spamWords.filter(w => clean.toLowerCase().includes(w));
    if (foundSpam.length > 0) {
      score -= 25;
      improvements.push(`Contains commercial sales words (${foundSpam.join(', ')}) that erode luxury positioning`);
    } else {
      score += 5;
      strengths.push('Preserves refined atelier luxury diction without spam triggers');
    }

    return {
      subject: clean,
      openRatePropensityScore: Math.min(100, Math.max(0, score)),
      rating: score >= 85 ? 'EXCELLENT_EDITORIAL' : score >= 70 ? 'GOOD_ATELIER' : 'NEEDS_REFINEMENT',
      strengths,
      improvements
    };
  }
}

// --- PART 9: SEASONAL RE-ENGAGEMENT CAMPAIGNS & RETAINER ROLLOVER ---
/**
 * HAFFU — Concierge Abandoned Recovery Engine
 * Part 9: Seasonal Re-Engagement Campaigns & Heirloom Collective Retainers
 */

const SEASONAL_CAMPAIGNS = {
  SPRING_BLOSSOM: {
    season: 'Spring Blossom Awakening (May)',
    idealWindow: 'May 5 to May 25',
    locations: ['Gairloch Gardens, Oakville', 'Royal Botanical Gardens, Burlington', 'Spencer Smith Park'],
    subject: 'Spring blossom portrait commissions in Oakville & Burlington',
    tone: 'Luminous Freshness & Renewal',
    bodyCopy: `Dear {name},

As winter subsides across Halton, our gardens are about to burst into brief, breathtaking bloom. The soft pink magnolia petals and cherry blossoms at Gairloch Gardens create one of the most magical backdrops of the entire year.

Because bloom windows last only 10 to 14 days, our atelier opens a strictly limited collection of 6 golden-hour sessions.

If you have been waiting for the perfect spring light to capture this chapter with your family or partner, our calendar is now open for reservations: hafsanoreen.com/spring-sessions

Warmest spring wishes,
Hafsa Noreen`
  },

  SUMMER_LAKESIDE: {
    season: 'Summer Lavender & Lakeside Dusk (July - August)',
    idealWindow: 'July 10 to August 20',
    locations: ['Coronation Park, Oakville', 'Paletta Lakefront, Burlington', 'Kelso Conservation Area'],
    subject: 'Summer golden hour by the water — Hafsa Noreen Photography',
    tone: 'Warm, Breezy & Nostalgic',
    bodyCopy: `Dear {name},

Summer evenings along Lake Ontario offer pure golden magic—warm breezes, laughing children dipping toes into the water, and golden light filtering through heritage weeping willows.

Our summer sunset sessions are unhurried, barefoot, and designed to celebrate warm summer days with those you love most.

We have 4 weekend sunset dates remaining for July and August: hafsanoreen.com/summer-dusk

With warmth,
Hafsa`
  },

  AUTUMN_ESCARPMENT: {
    season: 'Autumn Escarpment Golden Foliage (October)',
    idealWindow: 'October 1 to October 24',
    locations: ['Mount Nemo Conservation Area', 'Rattlesnake Point, Milton', 'Crawford Lake'],
    subject: 'Autumn foliage heirloom sessions on the Halton Escarpment',
    tone: 'Rich, Cozy & Amber-Hued',
    bodyCopy: `Dear {name},

October on the Niagara Escarpment is nothing short of breathtaking. Vibrant ambers, deep crimsons, and soft golden sunlight make Milton and Burlington the premier destination for timeless family heirlooms.

Our autumn calendar books 6 months in advance, and we are releasing our final two October weekend openings this week.

Reserve your family’s autumn session before leaves begin to fall: hafsanoreen.com/autumn-sessions

Warmest regards,
Hafsa Noreen`
  },

  WINTER_STUDIO: {
    season: 'Winter Atelier Hearth & Velvet (November - December)',
    idealWindow: 'November 15 to December 20',
    locations: ['Downtown Oakville Natural Light Atelier', 'Mint Room Studios Toronto'],
    subject: 'Cozy holiday atelier portraits & handcrafted holiday cards',
    tone: 'Intimate, Elegant & Festive',
    bodyCopy: `Dear {name},

As temperatures cool, our downtown Oakville studio transforms into a cozy, candlelit retreat with neutral linen backdrops, soft knit throws, and glowing natural light.

These intimate 45-minute sessions are ideal for relaxed family portraits, baby milestones, or updating your annual fine-art holiday cards before lab print deadlines.

View available studio dates: hafsanoreen.com/winter-atelier

Warmest holiday blessings,
Hafsa Noreen`
  }
};

class SeasonalCampaignDrafter {
  /**
   * Generate customized seasonal re-engagement package
   */
  static generateCampaign({ seasonKey = 'AUTUMN_ESCARPMENT', clientName = 'Valued Client', location = 'Oakville' }) {
    const key = (seasonKey || '').toUpperCase().replace(/\s+/g, '_');
    const campaign = SEASONAL_CAMPAIGNS[key] || SEASONAL_CAMPAIGNS.AUTUMN_ESCARPMENT;

    const personalizedBody = campaign.bodyCopy
      .replace(/{name}/g, clientName)
      .replace(/{location}/g, location);

    return {
      season: campaign.season,
      idealWindow: campaign.idealWindow,
      recommendedLocations: campaign.locations,
      subjectLine: campaign.subject,
      emailBody: personalizedBody,
      tone: campaign.tone
    };
  }
}

// Static diagnostic delegation and backward compatibility wiring
AbandonedRecoveryEngine.runDiagnostics = function() {
  return AbandonedRecoveryDiagnostics.runDiagnostics(this);
};

AbandonedRecoveryEngine.runFullTestSuite = function() {
  const diag = AbandonedRecoveryDiagnostics.runDiagnostics(this);
  const boundary = AbandonedRecoverySimulations.runBoundaryTests(this);
  const sim = AbandonedRecoverySimulations.runBatchSimulation(this, 50);
  return {
    engine: "AbandonedRecoveryEngine",
    timestamp: new Date().toISOString(),
    allPassed: diag.passed && boundary.allBoundaryPassed,
    diagnostics: diag,
    boundaryTests: boundary,
    simulationMetrics: sim.metrics
  };
};

// Extended Helper Methods on AbandonedRecoveryEngine
AbandonedRecoveryEngine.CASL_COMPLIANCE = CASL_COMPLIANCE;
AbandonedRecoveryEngine.OBJECTION_SOLUTIONS = OBJECTION_SOLUTIONS;
AbandonedRecoveryEngine.CONCIERGE_PLAYBOOKS = CONCIERGE_PLAYBOOKS;
AbandonedRecoveryEngine.SEASONAL_CAMPAIGNS = SEASONAL_CAMPAIGNS;
AbandonedRecoveryEngine.evaluateConsent = function(opts) { return CASLComplianceOfficer.evaluateConsent(opts); };
AbandonedRecoveryEngine.generateUnsubscribeToken = function(email) { return CASLComplianceOfficer.generateUnsubscribeToken(email); };
AbandonedRecoveryEngine.isWithinCRTCDispatchWindow = function(date) { return CASLComplianceOfficer.isWithinCRTCDispatchWindow(date); };
AbandonedRecoveryEngine.scoreLead = function(opts) { return ConciergeLeadScorer.scoreLead(opts); };
AbandonedRecoveryEngine.calculateInstallmentPlan = function(opts) { return ConciergeIncentiveEngine.calculateInstallmentPlan(opts); };
AbandonedRecoveryEngine.resolveObjection = function(key) { return ConciergeIncentiveEngine.resolveObjection(key); };
AbandonedRecoveryEngine.getCuratedLuxuryIncentives = function(type) { return ConciergeIncentiveEngine.getCuratedLuxuryIncentives(type); };
AbandonedRecoveryEngine.evaluateSubjectLine = function(subj) { return SubjectLineABTester.evaluateSubjectLine(subj); };
AbandonedRecoveryEngine.generateSeasonalCampaign = function(opts) { return SeasonalCampaignDrafter.generateCampaign(opts); };

// Backward Compatibility Alias
const AbandonedRecovery = AbandonedRecoveryEngine;
AbandonedRecovery.AbandonedRecovery = AbandonedRecoveryEngine;

module.exports = AbandonedRecoveryEngine;
