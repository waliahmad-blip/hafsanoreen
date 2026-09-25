/**
 * ============================================================================
 * HAFFU STUDIO — RETAINER NUDGER & DATE-LOCK INTELLIGENCE ENGINE
 * ============================================================================
 * Dual Retention Core:
 *   1. $500 Instant Retainer Date-Lock Urgency Sequencing (Stages 1, 2, 3)
 *   2. The Heirloom Collective Annual Family Retainer ($99/mo / $1,100/yr)
 *
 * Studio: Hafsa Noreen Photography (Oakville / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.3.0
 * ============================================================================
 */

'use strict';

const { PACKAGES } = require('../../../utils/constants');

// --- PART 1: $500 DATE-LOCK SEQUENCING & URGENCY ESCALATION ---
/**
 * HAFFU STUDIO — RETAINER NUDGER ENGINE
 * PART 1: $500 DATE-LOCK SEQUENCING, URGENCY RULES & ESCALATION CADENCE
 */

const URGENCY_STAGES = {
  STAGE_1_WARM_CHECKIN: {
    stageId: 'STAGE_1',
    name: '24-Hour Artistic Check-In',
    triggerHours: 24,
    tone: 'Warm, reassuring, consultative, artistic',
    objective: 'Answer unspoken questions, affirm date availability, provide visual inspiration.',
    urgencyLevel: 'low',
    expirationHoursRemaining: 48,
    actionRequired: 'Soft confirmation or inquiry check-in'
  },
  STAGE_2_COMPETING_INQUIRY: {
    stageId: 'STAGE_2',
    name: '48-Hour Calendar Urgency & Competing Lead Notice',
    triggerHours: 48,
    tone: 'Polite, transparent, exclusive, protective',
    objective: 'Notify client of competing weekend demand; offer courtesy priority lock.',
    urgencyLevel: 'medium',
    expirationHoursRemaining: 24,
    actionRequired: '$500 Instant Retainer to secure date exclusivity'
  },
  STAGE_3_FINAL_COURTESY_EXPIRY: {
    stageId: 'STAGE_3',
    name: '72-Hour Courtesy Hold Expiration Warning',
    triggerHours: 72,
    tone: 'Graceful, definitive, unpressured, clear boundary',
    objective: 'Give final 6-hour window before releasing date back to public waitlist.',
    urgencyLevel: 'high',
    expirationHoursRemaining: 6,
    actionRequired: 'Final chance to place $500 retainer before calendar release'
  }
};

class DateLockSequencer {
  /**
   * Determine the appropriate escalation stage based on inquiry age
   */
  static evaluateStage(hoursSinceInquiry = 0) {
    const hours = Number(hoursSinceInquiry);
    if (hours >= 72) return URGENCY_STAGES.STAGE_3_FINAL_COURTESY_EXPIRY;
    if (hours >= 42) return URGENCY_STAGES.STAGE_2_COMPETING_INQUIRY;
    return URGENCY_STAGES.STAGE_1_WARM_CHECKIN;
  }

  /**
   * Compute exact time remaining until calendar release
   */
  static calculateHoldStatus(inquiryTimestamp, softHoldHours = 72) {
    const created = new Date(inquiryTimestamp || Date.now());
    const now = new Date();
    const elapsedMs = now.getTime() - created.getTime();
    const elapsedHours = Math.max(0, elapsedMs / (1000 * 60 * 60));
    const remainingHours = Math.max(0, softHoldHours - elapsedHours);
    const isExpired = remainingHours <= 0;

    return {
      inquiryTimestamp: created.toISOString(),
      currentTimestamp: now.toISOString(),
      elapsedHours: Math.round(elapsedHours * 10) / 10,
      remainingHours: Math.round(remainingHours * 10) / 10,
      isExpired,
      activeStage: this.evaluateStage(elapsedHours),
      recommendation: isExpired
        ? 'SOFT_HOLD_EXPIRED: Release date to waiting list or re-engage with fresh inquiry.'
        : `ACTIVE_HOLD: ${Math.round(remainingHours)} hours remaining to execute $500 retainer.`
    };
  }
}

// --- PART 2: THE HEIRLOOM COLLECTIVE ANNUAL MEMBERSHIP ---
/**
 * HAFFU STUDIO — RETAINER NUDGER ENGINE
 * PART 2: THE "HEIRLOOM COLLECTIVE" ANNUAL MEMBERSHIP & ROI CALCULATOR
 */

const HEIRLOOM_COLLECTIVE_CONFIG = {
  tierName: 'The Hafsa Noreen Heirloom Collective',
  tagline: 'Year-Round Documentary Family Legacy & Priority Archival Access',
  pricing: {
    monthlyCAD: 99,
    annualFullPrepayCAD: 1100, // 1 month free when prepaid
    termMonths: 12,
    taxRateHST: '13.0%',
    billingProvider: 'Stripe Subscriptions (Recurring Monthly CAD)'
  },
  inclusions: [
    {
      item: 'Two 90-Minute Signature Heirloom Portrait Commissions',
      retailValueCAD: 1700, // $850 x 2
      description: 'Capture two seasonal chapters in your family story (e.g., Spring Lakefront Blossoms + Autumn Escarpment Foliage).'
    },
    {
      item: 'One Handcrafted 10x10 Flush-Mount Linen Heirloom Album',
      retailValueCAD: 400,
      description: 'Custom-designed 20-page album bound in European linen delivered annually to preserve the year’s highlights.'
    },
    {
      item: 'Priority First-Access Calendar Reservations',
      retailValueCAD: 250,
      description: 'Private 48-hour priority booking window before public dates are released for peak golden hour weekends.'
    },
    {
      item: 'Full Studio Wardrobe & Client Closet Borrowing Privileges',
      retailValueCAD: 150,
      description: 'Complimentary access to luxury maternity gowns, textured silk wraps, and knit baby sets.'
    },
    {
      item: '20% Preferred Archival Discount on Museum Wall Art & Prints',
      retailValueCAD: 200,
      description: 'Save 20% on all cotton-rag gallery prints and companion gifts year-round.'
    }
  ],
  standaloneRetailTotalCAD: 2700,
  studioCostCOGSAnnualCAD: 450, // Lab album ($125) + consumables
  studioGrossProfitCAD: 650,    // On $1,100 prepay (59.1% gross margin)
  targetAudience: 'Families with growing infants, toddlers, or multi-generational legacy milestones in Halton/GTA.'
};

class CollectiveCalculator {
  /**
   * Evaluate whether a client is an ideal candidate for The Heirloom Collective
   */
  static evaluateClientEligibility(clientHistory = {}) {
    const sessionsPast12Mo = Number(clientHistory.sessionsCount || clientHistory.sessionsThisYear || 0);
    const totalSpendCAD = Number(clientHistory.totalSpend || clientHistory.avgSpend * sessionsPast12Mo || 0);
    const avgSpendCAD = sessionsPast12Mo > 0 ? totalSpendCAD / sessionsPast12Mo : (clientHistory.avgSpend || 850);
    const annualProjectedSpend = sessionsPast12Mo >= 1 ? (sessionsPast12Mo * avgSpendCAD) : avgSpendCAD * 1.5;

    const collectiveAnnualCost = HEIRLOOM_COLLECTIVE_CONFIG.pricing.annualFullPrepayCAD;
    const standaloneValue = HEIRLOOM_COLLECTIVE_CONFIG.standaloneRetailTotalCAD;
    const clientProjectedSavings = Math.max(0, standaloneValue - collectiveAnnualCost);

    const isHighPropensity = sessionsPast12Mo >= 1 || (clientHistory.hasToddlers && clientHistory.isExpecting);

    return {
      eligible: isHighPropensity,
      tierName: HEIRLOOM_COLLECTIVE_CONFIG.tierName,
      sessionsPast12Mo,
      avgSpendCAD: Math.round(avgSpendCAD),
      currentAnnualSpendCAD: Math.round(totalSpendCAD),
      collectiveAnnualCostCAD: collectiveAnnualCost,
      collectiveMonthlyCostCAD: HEIRLOOM_COLLECTIVE_CONFIG.pricing.monthlyCAD,
      standaloneRetailValueCAD: standaloneValue,
      projectedAnnualSavingsCAD: clientProjectedSavings,
      savingsPercentage: `${Math.round((clientProjectedSavings / standaloneValue) * 100)}%`,
      includedAlbumPerk: '10x10 Handcrafted Linen Album ($400 CAD Value) Included',
      recommendationReason: isHighPropensity
        ? `You invested ~$${Math.round(totalSpendCAD || avgSpendCAD)} in photography this past year. With the Heirloom Collective ($99/mo or $1,100/yr), you receive 2 signature 90-min sessions PLUS a $400 linen album, saving $${clientProjectedSavings} CAD while securing guaranteed priority golden hour dates.`
        : 'Recommended for families planning 2 or more sessions over the coming 12 months.'
    };
  }

  /**
   * Full Ontario 13% HST breakdown for Collective memberships
   */
  static calculateTaxAndBilling(isPrepaid = true) {
    const baseCAD = isPrepaid
      ? HEIRLOOM_COLLECTIVE_CONFIG.pricing.annualFullPrepayCAD
      : HEIRLOOM_COLLECTIVE_CONFIG.pricing.monthlyCAD;

    const hstCAD = Math.round(baseCAD * 0.13 * 100) / 100;
    const totalWithHSTCAD = Math.round((baseCAD + hstCAD) * 100) / 100;
    const stripeFeeCAD = Math.round((totalWithHSTCAD * 0.029 + 0.30) * 100) / 100;
    const netStudioDepositCAD = Math.round((totalWithHSTCAD - stripeFeeCAD) * 100) / 100;

    return {
      billingFrequency: isPrepaid ? 'ANNUAL_PREPAY' : 'MONTHLY_RECURRING',
      subtotalCAD: baseCAD,
      hstRate: '13.0%',
      hstCAD: hstCAD,
      grandTotalCAD: totalWithHSTCAD,
      stripeFeeCAD: stripeFeeCAD,
      netStudioDepositCAD: netStudioDepositCAD,
      checkoutUrl: isPrepaid
        ? `/checkout?type=collective_annual&amount=${baseCAD}`
        : `/checkout?type=collective_monthly&amount=${baseCAD}`
    };
  }
}

// --- PART 3: LUXURY CANADIAN EMAIL & SMS COPYWRITING VAULT ---
/**
 * HAFFU STUDIO — RETAINER NUDGER ENGINE
 * PART 3: LUXURY CANADIAN EMAIL & SMS COPYWRITING VAULT
 */

const NUDGE_TEMPLATES = {
  STAGE_1_EMAIL: {
    subject: "A quiet note about your date with Hafsa | Hafsa Noreen Photography",
    body: (ctx) => `Dearest ${ctx.clientName || 'Friend'},

I hope your week has been unfolding with gentle grace.

Hafsa and I have been dreaming up your vision for ${ctx.sessionDate || 'your upcoming celebration'}${ctx.venue ? ` at ${ctx.venue}` : ''}. The light during that time of year in Halton is truly breathtaking — soft, warm, and infused with cinematic romance.

I wanted to gently check in to see if you had any questions regarding our collections, wardrobe styling, or timing. Choosing your photographer is an intimate decision, and we want you to feel complete stillness and peace of mind every step of the way.

As a reminder, Hafsa limits her calendar strictly to 25 weddings and a small handful of portrait commissions each season to ensure every family receives her undivided devotion. Your date is currently held on a courtesy soft pencil.

Whenever you feel ready to make it official, our flat $500 CAD retainer secures your date in our calendar immediately:
${ctx.checkoutUrl || '/checkout?type=retainer&amount=500'}

With warmth and inspiration,
Haffu | Hafsa Noreen Photography
Oakville, Ontario`
  },

  STAGE_1_SMS: {
    text: (ctx) => `Hi ${ctx.clientName || 'there'}! This is Haffu from Hafsa Noreen Photography. Just checking in to see if you have any questions about ${ctx.sessionDate || 'your date'}! Hafsa would love to capture your story. Here's your direct link whenever you're ready: ${ctx.checkoutUrl || 'hafsanoreen.com/checkout'}`
  },

  STAGE_2_EMAIL: {
    subject: "Gentle heads up regarding your date (${ctx.sessionDate}) | Hafsa Noreen Photography",
    body: (ctx) => `Dear ${ctx.clientName || 'Friend'},

I wanted to reach out with complete transparency and care regarding your requested date of ${ctx.sessionDate || 'your celebration'}.

Another lovely couple has just reached out inquiring about the very same weekend for Hafsa's calendar. Because you reached out first, you have absolute first right of refusal.

To protect your date and ensure you don’t lose your preferred sunset window, you can lock in calendar exclusivity with our $500 instant retainer:
${ctx.checkoutUrl || '/checkout?type=retainer&amount=500'}

Once the retainer is received, the date is marked strictly unavailable to all other inquiries, and Hafsa will reach out personally to schedule your planning coffee!

Please let me know if you’d like us to hold the date, or if your plans have shifted so we may release it to the waiting couple with our warmest blessings.

Warmly,
Haffu | Hafsa Noreen Photography`
  },

  STAGE_2_SMS: {
    text: (ctx) => `Hi ${ctx.clientName || 'there'} — Haffu from Hafsa Noreen Studio. We just had a second inquiry come in for ${ctx.sessionDate || 'your date'}. Because you inquired first, you have priority! You can secure it here today with the $500 retainer: ${ctx.checkoutUrl || 'hafsanoreen.com/checkout'}`
  },

  STAGE_3_EMAIL: {
    subject: "Final courtesy check regarding ${ctx.sessionDate} | Hafsa Noreen Photography",
    body: (ctx) => `Dear ${ctx.clientName || 'Friend'},

I hope you are doing well!

Our standard 72-hour courtesy hold on ${ctx.sessionDate || 'your requested date'} is coming to a close this evening at 6:00 PM EST. 

We completely understand that schedules shift and life moves quickly. If you still wish to move forward and secure Hafsa for your celebration, please place the $500 retainer before the hold expires:
${ctx.checkoutUrl || '/checkout?type=retainer&amount=500'}

If the timing isn't quite right, please don't worry at all! We will quietly release the date back to our public calendar this evening, and we would be thrilled to celebrate with you in the future whenever inspiration strikes.

Wishing you endless joy and light,
Haffu | Hafsa Noreen Photography`
  },

  COLLECTIVE_MEMBERSHIP_EMAIL: {
    subject: "A private invitation to The Heirloom Collective | Hafsa Noreen Photography",
    body: (ctx) => `Dearest ${ctx.clientName || 'Family'},

Looking back at your previous gallery, Hafsa and I were reflecting on how quickly children grow and how precious these fleeting seasons truly are.

Because you have entrusted Hafsa with your memories, we wanted to extend a private invitation to our annual family membership: The Heirloom Collective.

Rather than booking individual sessions year after year, the Collective allows a small circle of 15 Halton families to enjoy unhurried documentary coverage across the seasons:
- Two 90-Minute Signature Portrait Commissions (Spring blossoms + Autumn foliage)
- One Handcrafted 10x10 Linen Flush-Mount Album ($400 value) included annually
- Priority calendar reservations 48 hours before public dates open
- Complete access to our Studio Wardrobe & Client Closet
- 20% archival discount on all museum prints and wall art

At $99/month (or $1,100/year prepaid), it saves your family over $1,000 CAD compared to standalone commissions, while guaranteeing your place in Hafsa's calendar as your children grow.

You can view details and secure your family's membership here:
${ctx.checkoutUrl || '/checkout?type=collective_annual&amount=1100'}

With love and gratitude,
Haffu | Hafsa Noreen Photography`
  }
};

// --- PART 4A: DISPATCH SCHEDULING & TIMEZONE OPTIMIZER ---
/**
 * HAFFU STUDIO — RETAINER NUDGER ENGINE
 * PART 4: DISPATCH SCHEDULING, TIMEZONE WINDOWS & ONTARIO SEND OPTIMIZER
 */

class DispatchOptimizer {
  /**
   * Determine optimal future send time based on Ontario recipient habits
   */
  static computeOptimalSendWindow(baseDate = new Date()) {
    const torontoDate = new Date(baseDate.toLocaleString('en-US', { timeZone: 'America/Toronto' }));
    const dayOfWeek = torontoDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
    const currentHour = torontoDate.getHours();

    let optimalTargetHour = 19; // Default Sunday/Evening 7:00 PM EST
    let daysToAdd = 0;

    // Ideal Send Windows:
    // 1. Sunday 7:30 PM (Couples review schedules together)
    // 2. Tuesday 8:30 AM (Beginning of work week focus)
    // 3. Thursday 12:30 PM (Midday lunch review)

    if (dayOfWeek === 5 || dayOfWeek === 6) {
      // Friday or Saturday -> Delay until Sunday Evening 7:30 PM
      daysToAdd = (7 - dayOfWeek) % 7;
      optimalTargetHour = 19;
    } else if (dayOfWeek === 0) {
      // Sunday
      if (currentHour < 18) {
        optimalTargetHour = 19;
      } else {
        daysToAdd = 2; // Move to Tuesday morning
        optimalTargetHour = 8;
      }
    } else if (dayOfWeek === 1) {
      // Monday -> Move to Tuesday morning
      daysToAdd = 1;
      optimalTargetHour = 8;
    } else if (dayOfWeek === 2 || dayOfWeek === 3) {
      // Tuesday or Wednesday -> Next morning or Sunday
      if (currentHour < 12) optimalTargetHour = 12;
      else {
        daysToAdd = 1;
        optimalTargetHour = 8;
      }
    } else if (dayOfWeek === 4) {
      // Thursday -> Lunch or Sunday evening
      if (currentHour < 12) optimalTargetHour = 12;
      else {
        daysToAdd = 3; // Sunday 7:00 PM
        optimalTargetHour = 19;
      }
    }

    const scheduledDate = new Date(torontoDate);
    scheduledDate.setDate(scheduledDate.getDate() + daysToAdd);
    scheduledDate.setHours(optimalTargetHour, 15, 0, 0);

    return {
      suggestedSendTimestamp: scheduledDate.toISOString(),
      timezone: 'America/Toronto (EST/EDT)',
      scheduledDayName: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][scheduledDate.getDay()],
      scheduledHourToronto: optimalTargetHour,
      optimizationReason: optimalTargetHour === 19
        ? 'Sunday evening peak couple review window (highest booking conversion).'
        : 'Morning professional inbox window (high email open and click-through rate).'
    };
  }

  /**
   * Evaluates if a given timestamp falls into anti-social / quiet hours
   */
  static isQuietHours(torontoHour) {
    // Quiet hours: 9:30 PM to 7:30 AM
    return torontoHour >= 21 || torontoHour < 8;
  }
}

// --- PART 4B: OMNICHANNEL RULES & SUPPRESSION POLICIES ---
/**
 * HAFFU STUDIO — RETAINER NUDGER ENGINE
 * PART 4B: OMNICHANNEL RULES & RETENTION GOVERNANCE POLICIES
 */

const CHANNEL_GOVERNANCE = {
  communicationChannels: {
    EMAIL: {
      channel: 'email',
      maxFollowUps: 3,
      minIntervalHours: 24,
      preferredFor: ['formal_proposals', 'contract_summaries', 'collective_invitations'],
      etiquetteGuidelines: 'Warm luxury tone, proper punctuation, zero aggressive sales buzzwords, signature sign-off with Oakville studio address.'
    },
    SMS: {
      channel: 'sms',
      maxFollowUps: 2,
      minIntervalHours: 48,
      preferredFor: ['urgent_competing_inquiries', 'day_of_session_weather_alerts'],
      quietHoursEST: { start: '21:00', end: '09:00' },
      etiquetteGuidelines: 'Concise, conversational, friendly, includes shortlink directly to Stripe checkout.'
    },
    INSTAGRAM_DM: {
      channel: 'instagram_dm',
      maxFollowUps: 2,
      preferredFor: ['social_inquiries', 'editorial_branding_leads'],
      etiquetteGuidelines: 'Casual grace, quick response times, transfer to email for contract and retainer execution.'
    }
  },

  suppressionRules: [
    {
      ruleId: 'SUPPRESS_ON_PAYMENT',
      description: 'Immediately suppress all pending nudges upon receipt of $500 retainer or any payment via Stripe webhook.'
    },
    {
      ruleId: 'SUPPRESS_ON_DECLINE',
      description: 'If client explicitly declines or requests date release, cancel all scheduled nudges and tag client as past prospect.'
    },
    {
      ruleId: 'MAX_CADENCE_CAP',
      description: 'Never send more than one automated notification within a 24-hour window to the same email or mobile number.'
    },
    {
      ruleId: 'QUIET_HOURS_RESCHEDULE',
      description: 'Any notification triggered between 9:00 PM and 9:00 AM EST must be delayed until 9:15 AM EST the following morning.'
    }
  ]
};

// --- PART 5A: CORE ENGINE & DIAGNOSTICS SUITE ---

// --- PART 4C: REGIONAL SCARCITY & VENUE COMPETITION DRIVERS ---
/**
 * HAFFU STUDIO — RETAINER NUDGER ENGINE
 * PART 4C: REGIONAL SCARCITY & VENUE-SPECIFIC DATE-COMPETITION DRIVERS
 */

const REGIONAL_SCARCITY_RULES = {
  peakBookingWindows: [
    {
      season: 'SUMMER_WEDDINGS',
      months: ['June', 'July', 'August', 'September'],
      historicalLeadTimeMonths: 11.5,
      urgencyCopy: "June through September Saturdays in Halton typically book out 10 to 14 months in advance due to high wedding demand across Lake Ontario estates.",
      calendarCapNotification: "Hafsa accepts strictly 25 weddings annually; peak summer weekends fill first."
    },
    {
      season: 'AUTUMN_FOLIAGE_GOLDEN_HOUR',
      months: ['Late September', 'October'],
      historicalLeadTimeMonths: 5.2,
      urgencyCopy: "Peak autumn foliage at Rattlesnake Point and Crawford Lake spans just three golden weekends. Slots are held on a strict first-confirmed basis.",
      calendarCapNotification: "Only 12 autumn golden-hour slots are released each year."
    },
    {
      season: 'SPRING_CHERRY_BLOSSOMS',
      months: ['May'],
      historicalLeadTimeMonths: 4.0,
      urgencyCopy: "Spring blossoms at Kariya Park and High Park bloom for approximately 7 to 10 days. Availability is exceptionally concentrated.",
      calendarCapNotification: "Limited to 8 blossom heirloom sessions per season."
    },
    {
      season: 'WINTER_STUDIO_HEIRLOOM',
      months: ['November', 'December'],
      historicalLeadTimeMonths: 2.5,
      urgencyCopy: "Mint Room Studios and Preto Loft holiday ballroom dates require 60-day advance booking to guarantee luxury natural-light studio access.",
      calendarCapNotification: "Weekend studio slots are subject to studio availability."
    }
  ],

  venuePermitLeadTimes: [
    {
      venue: 'Gairloch Gardens (Oakville)',
      permitLeadDays: 30,
      note: 'Town of Oakville municipal permit requires 4 weeks advance clearance.'
    },
    {
      venue: 'Paletta Lakefront Mansion (Burlington)',
      permitLeadDays: 21,
      note: 'City of Burlington photography booking window opens seasonally.'
    },
    {
      venue: 'Distillery Historic District (Toronto)',
      permitLeadDays: 14,
      note: 'Commercial filming permit must be processed 2 weeks prior.'
    },
    {
      venue: 'Conservation Halton (Kelso / Rattlesnake)',
      permitLeadDays: 7,
      note: 'ParkPass vehicle access slots must be reserved in advance for weekends.'
    }
  ]
};

class RegionalUrgencyGenerator {
  /**
   * Generates location-tailored authenticity copy regarding local demand
   */
  static generateScarcityContext(sessionDate, venueName) {
    const dateObj = new Date(sessionDate || Date.now());
    const month = dateObj.toLocaleString('en-US', { month: 'long' });

    let matchedSeason = REGIONAL_SCARCITY_RULES.peakBookingWindows[0];
    if (['September', 'October'].includes(month)) {
      matchedSeason = REGIONAL_SCARCITY_RULES.peakBookingWindows[1];
    } else if (['May'].includes(month)) {
      matchedSeason = REGIONAL_SCARCITY_RULES.peakBookingWindows[2];
    } else if (['November', 'December', 'January', 'February'].includes(month)) {
      matchedSeason = REGIONAL_SCARCITY_RULES.peakBookingWindows[3];
    }

    const matchedVenue = REGIONAL_SCARCITY_RULES.venuePermitLeadTimes.find(v =>
      (venueName || '').toLowerCase().includes(v.venue.toLowerCase().split(' ')[0])
    );

    return {
      month,
      seasonKey: matchedSeason.season,
      scarcityStatement: matchedSeason.urgencyCopy,
      capStatement: matchedSeason.calendarCapNotification,
      permitRequirement: matchedVenue ? matchedVenue.note : 'Standard regional access rules apply.'
    };
  }
}

// --- PART 4D: LAPSED INQUIRY RE-ENGAGEMENT DIRECTIVES ---
/**
 * HAFFU STUDIO — RETAINER NUDGER ENGINE
 * PART 4D: LAPSED INQUIRY RE-ENGAGEMENT & EXTENDED RECOVERY DIRECTIVES
 */

const LAPSED_LEAD_PLAYBOOKS = {
  DAY_14_SOFT_RECONNECT: {
    cadenceDays: 14,
    subject: "Still thinking of you | Hafsa Noreen Photography",
    tone: 'Gentle, zero pressure, creative inspiration',
    template: (ctx) => `Dearest ${ctx.clientName || 'Friend'},

I was looking back over our notes from earlier this month regarding your ideas for ${ctx.sessionType || 'your session'}.

Wedding and family planning can be wonderfully overwhelming, and sometimes taking a step back is the best part of the process. I simply wanted to remind you that whenever inspiration strikes, Hafsa and I are here with warm hearts and open calendars.

Even if your preferred date has shifted, we would be honored to explore other beautiful golden-hour weekends together.

Whenever you're ready, you can explore our portfolio or reach back out right here:
hafsanoreen.com

Wishing you a peaceful and lovely week!

Warmly,
Haffu | Hafsa Noreen Photography`
  },

  DAY_30_PRINT_CREDIT_INCENTIVE: {
    cadenceDays: 30,
    subject: "A small studio gift for your upcoming celebration | Hafsa Noreen Photography",
    tone: 'Exclusive studio perk, elevated incentive',
    incentiveCAD: 100,
    template: (ctx) => `Dear ${ctx.clientName || 'Friend'},

Hafsa was recently reviewing our upcoming seasonal calendar, and your name came up with genuine fondness!

Because we loved your aesthetic vision for ${ctx.sessionType || 'your celebration'}, Hafsa wanted to offer a private studio credit of $100 CAD towards custom handcrafted wall art or heirloom albums if you decide to reserve your date with us this month.

Our $500 date-lock retainer secures your reservation and automatically unlocks your $100 print credit:
${ctx.checkoutUrl || '/checkout?type=retainer&amount=500'}

No pressure whatsoever — just a small token of our appreciation for connecting with our studio.

With warm regards,
Haffu | Hafsa Noreen Photography`
  },

  DAY_60_OFFPEAK_INVITATION: {
    cadenceDays: 60,
    subject: "Looking ahead to next season with Hafsa Noreen",
    tone: 'Long-term relationship nurturing',
    template: (ctx) => `Hello ${ctx.clientName || 'there'},

As the seasons turn here in Halton, we are opening our private priority calendar for upcoming sessions.

If your timing was postponed earlier this year, we would adore welcoming you into the studio for an upcoming golden hour session. 

You can preview our latest journal stories and seasonal openings anytime:
hafsanoreen.com/journal

Warmly,
Haffu | Hafsa Noreen Photography`
  }
};

class LapsedLeadRecoveryEngine {
  /**
   * Determine if an inquiry qualifies for long-tail lapsed lead re-engagement
   */
  static evaluateLapsedLead(daysSinceInquiry = 0) {
    const days = Number(daysSinceInquiry);
    if (days >= 60) {
      return {
        stage: 'DAY_60_OFFPEAK',
        playbook: LAPSED_LEAD_PLAYBOOKS.DAY_60_OFFPEAK_INVITATION,
        shouldContact: days >= 60 && days < 75
      };
    }
    if (days >= 30) {
      return {
        stage: 'DAY_30_INCENTIVE',
        playbook: LAPSED_LEAD_PLAYBOOKS.DAY_30_PRINT_CREDIT_INCENTIVE,
        shouldContact: days >= 30 && days < 40
      };
    }
    if (days >= 14) {
      return {
        stage: 'DAY_14_RECONNECT',
        playbook: LAPSED_LEAD_PLAYBOOKS.DAY_14_SOFT_RECONNECT,
        shouldContact: days >= 14 && days < 21
      };
    }
    return {
      stage: 'ACTIVE_PIPELINE',
      playbook: null,
      shouldContact: false
    };
  }
}
/**
 * HAFFU STUDIO — RETAINER NUDGER ENGINE
 * PART 5: CORE ENGINE CLASS, STATIC EXECUTION & BUILT-IN DIAGNOSTICS SUITE
 */

class RetainerNudgerEngine {
  /**
   * Primary entry point invoked by Haffu tool dispatcher
   * Supports both:
   * 1. $500 Date-Lock Urgency Nudges (for in-progress inquiries)
   * 2. The Heirloom Collective Annual Retainer (for loyal family clients)
   */
  static async execute(params = {}) {
    // Mode Detection:
    // If sessionsThisYear / avgSpend is provided, run Collective Membership Nudge
    if (params.sessionsThisYear !== undefined || params.avgSpend !== undefined) {
      const eligibility = CollectiveCalculator.evaluateClientEligibility(params);
      const billing = CollectiveCalculator.calculateTaxAndBilling(true);

      const emailDraft = NUDGE_TEMPLATES.COLLECTIVE_MEMBERSHIP_EMAIL.body({
        clientName: params.client?.name || params.clientName || 'Valued Family',
        checkoutUrl: billing.checkoutUrl
      });

      return {
        status: 'success',
        nudgeType: 'HEIRLOOM_COLLECTIVE_MEMBERSHIP',
        recommend: eligibility.eligible,
        savings: eligibility.projectedAnnualSavingsCAD,
        message: eligibility.recommendationReason,
        details: eligibility,
        billingFinancials: billing,
        emailDraft: {
          subject: NUDGE_TEMPLATES.COLLECTIVE_MEMBERSHIP_EMAIL.subject,
          content: emailDraft
        }
      };
    }

    // Default Mode: $500 Instant Retainer Date-Lock Urgency Nudge
    const hours = Number(params.hoursSinceInquiry || params.hoursSinceQuote || 24);
    const holdStatus = DateLockSequencer.calculateHoldStatus(params.inquiryTimestamp, 72);
    const activeStage = DateLockSequencer.evaluateStage(hours);
    const optimalSend = DispatchOptimizer.computeOptimalSendWindow(new Date());

    const clientName = params.client?.name || params.clientName || 'Valued Client';
    const sessionDate = params.sessionDate || params.date || 'your upcoming date';
    const venue = params.venue || params.location || '';
    const checkoutUrl = `/checkout?type=retainer&amount=500&bookingId=${params.bookingId || 'new'}`;

    let emailSubject = '';
    let emailBody = '';
    let smsBody = '';

    if (activeStage.stageId === 'STAGE_3') {
      emailSubject = NUDGE_TEMPLATES.STAGE_3_EMAIL.subject.replace('${ctx.sessionDate}', sessionDate);
      emailBody = NUDGE_TEMPLATES.STAGE_3_EMAIL.body({ clientName, sessionDate, venue, checkoutUrl });
    } else if (activeStage.stageId === 'STAGE_2') {
      emailSubject = NUDGE_TEMPLATES.STAGE_2_EMAIL.subject.replace('${ctx.sessionDate}', sessionDate);
      emailBody = NUDGE_TEMPLATES.STAGE_2_EMAIL.body({ clientName, sessionDate, venue, checkoutUrl });
      smsBody = NUDGE_TEMPLATES.STAGE_2_SMS.text({ clientName, sessionDate, checkoutUrl });
    } else {
      emailSubject = NUDGE_TEMPLATES.STAGE_1_EMAIL.subject;
      emailBody = NUDGE_TEMPLATES.STAGE_1_EMAIL.body({ clientName, sessionDate, venue, checkoutUrl });
      smsBody = NUDGE_TEMPLATES.STAGE_1_SMS.text({ clientName, sessionDate, checkoutUrl });
    }

    const hstCalc = {
      retainerSubtotalCAD: 500,
      taxRate: '13.0% HST',
      hstCAD: 65,
      grandTotalCAD: 565,
      stripeFeeCAD: 16.69,
      netStudioDepositCAD: 548.31
    };

    return {
      status: 'success',
      nudgeType: 'DATE_LOCK_RESERVATION',
      stage: activeStage,
      holdStatus,
      clientName,
      sessionDate,
      retainerRequiredCAD: 500,
      financialSummary: hstCalc,
      recommendedSendWindow: optimalSend,
      emailDraft: {
        subject: emailSubject,
        content: emailBody
      },
      smsDraft: smsBody ? { content: smsBody } : null,
      directCheckoutLink: checkoutUrl
    };
  }

  /**
   * Run comprehensive self-diagnostics suite
   */
  static runSelfDiagnostics() {
    const testResults = [];

    // Test 1: Stage 1 for 12 hours
    const stage1 = DateLockSequencer.evaluateStage(12);
    testResults.push({
      test: '12 hours resolves to STAGE_1_WARM_CHECKIN',
      passed: stage1.stageId === 'STAGE_1'
    });

    // Test 2: Stage 2 for 48 hours
    const stage2 = DateLockSequencer.evaluateStage(48);
    testResults.push({
      test: '48 hours resolves to STAGE_2_COMPETING_INQUIRY',
      passed: stage2.stageId === 'STAGE_2'
    });

    // Test 3: Stage 3 for 75 hours
    const stage3 = DateLockSequencer.evaluateStage(75);
    testResults.push({
      test: '75 hours resolves to STAGE_3_FINAL_COURTESY_EXPIRY',
      passed: stage3.stageId === 'STAGE_3'
    });

    // Test 4: Collective Calculator Savings
    const collectiveTest = CollectiveCalculator.evaluateClientEligibility({
      sessionsCount: 2,
      totalSpend: 1700
    });
    testResults.push({
      test: 'Heirloom Collective calculates > $1,000 savings on 2 sessions',
      passed: collectiveTest.projectedAnnualSavingsCAD >= 1000 && collectiveTest.eligible === true,
      actual: collectiveTest
    });

    // Test 5: Optimal Send Window
    const sendWin = DispatchOptimizer.computeOptimalSendWindow(new Date());
    testResults.push({
      test: 'Dispatch Optimizer produces Toronto timezone schedule',
      passed: sendWin.timezone.includes('America/Toronto') && typeof sendWin.scheduledHourToronto === 'number'
    });

    const allPassed = testResults.every(t => t.passed);
    return {
      engine: 'RetainerNudgerEngine',
      totalTests: testResults.length,
      allPassed,
      tests: testResults
    };
  }
}

// --- PART 5B: RETENTION SIMULATION MATRIX ---
/**
 * HAFFU STUDIO — RETAINER NUDGER ENGINE
 * PART 5B: RETENTION SIMULATION MATRIX & LEAD PROGRESSION BENCHMARKS
 */

class RetainerSimulationMatrix {
  /**
   * Run end-to-end simulation across 8 realistic lead lifecycle scenarios
   */
  static simulateAllNudges() {
    const testScenarios = [
      {
        id: 'LEAD-SIM-01',
        clientName: 'Chloe & Marcus',
        sessionType: 'wedding',
        sessionDate: '2026-09-18',
        hoursSinceInquiry: 18,
        venue: 'Gairloch Gardens (Oakville)',
        expectedStage: 'STAGE_1'
      },
      {
        id: 'LEAD-SIM-02',
        clientName: 'Sarah & David',
        sessionType: 'wedding',
        sessionDate: '2026-08-08',
        hoursSinceInquiry: 46,
        venue: 'Paletta Mansion (Burlington)',
        expectedStage: 'STAGE_2'
      },
      {
        id: 'LEAD-SIM-03',
        clientName: 'Jessica & Liam',
        sessionType: 'wedding',
        sessionDate: '2026-07-25',
        hoursSinceInquiry: 74,
        venue: 'Kelso Conservation Area (Milton)',
        expectedStage: 'STAGE_3'
      },
      {
        id: 'LEAD-SIM-04',
        clientName: 'The Tremblay Family',
        sessionType: 'family',
        sessionsThisYear: 2,
        avgSpend: 850,
        expectedNudgeType: 'HEIRLOOM_COLLECTIVE_MEMBERSHIP'
      },
      {
        id: 'LEAD-SIM-05',
        clientName: 'Elena Rostova',
        sessionType: 'maternity',
        sessionsThisYear: 1,
        avgSpend: 850,
        expectedNudgeType: 'HEIRLOOM_COLLECTIVE_MEMBERSHIP'
      },
      {
        id: 'LEAD-SIM-06',
        clientName: 'Priya & Vikram',
        sessionType: 'wedding',
        sessionDate: '2026-10-10',
        hoursSinceInquiry: 50,
        venue: 'Distillery District (Toronto)',
        expectedStage: 'STAGE_2'
      },
      {
        id: 'LEAD-SIM-07',
        clientName: 'The Miller Family',
        sessionType: 'family',
        sessionDate: '2026-06-12',
        hoursSinceInquiry: 10,
        venue: 'Coronation Park (Oakville)',
        expectedStage: 'STAGE_1'
      },
      {
        id: 'LEAD-SIM-08',
        clientName: 'Lillian Zhao',
        sessionType: 'branding',
        sessionDate: '2026-05-20',
        hoursSinceInquiry: 80,
        venue: 'Mint Room Studios (Toronto)',
        expectedStage: 'STAGE_3'
      }
    ];

    return testScenarios.map(sc => {
      let stageEvaluated = null;
      let collectiveEligibility = null;

      if (sc.sessionsThisYear !== undefined) {
        collectiveEligibility = CollectiveCalculator.evaluateClientEligibility(sc);
      } else {
        stageEvaluated = DateLockSequencer.evaluateStage(sc.hoursSinceInquiry);
      }

      return {
        scenarioId: sc.id,
        clientName: sc.clientName,
        sessionType: sc.sessionType,
        isCollective: sc.sessionsThisYear !== undefined,
        activeStage: stageEvaluated ? stageEvaluated.stageId : null,
        collectiveEligible: collectiveEligibility ? collectiveEligibility.eligible : null,
        annualSavingsCAD: collectiveEligibility ? collectiveEligibility.projectedAnnualSavingsCAD : null,
        matchedExpectation: sc.expectedStage
          ? (stageEvaluated && stageEvaluated.stageId === sc.expectedStage)
          : (collectiveEligibility && collectiveEligibility.eligible === true)
      };
    });
  }
}

// --- PART 5C: BOUNDARY TESTING & FAULT TOLERANCE ---
/**
 * HAFFU STUDIO — RETAINER NUDGER ENGINE
 * PART 5C: BOUNDARY TESTING, EXTREME TIME CHECKS & FAULT TOLERANCE
 */

class RetainerBoundaryTests {
  static runAllBoundaryTests() {
    const boundaryResults = [];

    // Test 1: Zero hours
    const zeroStage = DateLockSequencer.evaluateStage(0);
    boundaryResults.push({
      test: 'Zero elapsed hours defaults to STAGE_1_WARM_CHECKIN',
      passed: zeroStage.stageId === 'STAGE_1'
    });

    // Test 2: Huge elapsed hours (e.g. 500 hours)
    const hugeStage = DateLockSequencer.evaluateStage(500);
    boundaryResults.push({
      test: '500 elapsed hours safely resolves to STAGE_3_FINAL_COURTESY_EXPIRY',
      passed: hugeStage.stageId === 'STAGE_3'
    });

    // Test 3: Negative elapsed hours (clock drift protection)
    const negStage = DateLockSequencer.evaluateStage(-10);
    boundaryResults.push({
      test: 'Negative hours fallback safely to STAGE_1 without throwing',
      passed: negStage.stageId === 'STAGE_1'
    });

    // Test 4: Quiet hours detection
    const midnightQuiet = DispatchOptimizer.isQuietHours(23); // 11 PM
    const noonAwake = DispatchOptimizer.isQuietHours(12);     // 12 PM
    boundaryResults.push({
      test: 'Quiet hours accurately flags 11 PM as quiet and 12 PM as active',
      passed: midnightQuiet === true && noonAwake === false
    });

    // Test 5: HST calculation integrity for $500 retainer
    const subtotal = 500;
    const hst = Math.round(subtotal * 0.13 * 100) / 100;
    const total = subtotal + hst;
    boundaryResults.push({
      test: '$500 Retainer + 13% Ontario HST equals exactly $565.00 CAD',
      passed: hst === 65 && total === 565
    });

    // Test 6: Zero spend client evaluates safely for Collective
    const zeroClient = CollectiveCalculator.evaluateClientEligibility({ sessionsCount: 0, totalSpend: 0 });
    boundaryResults.push({
      test: 'Zero history client evaluates safely without NaN',
      passed: typeof zeroClient.projectedAnnualSavingsCAD === 'number' && !isNaN(zeroClient.projectedAnnualSavingsCAD)
    });

    return {
      totalBoundaryTests: boundaryResults.length,
      allBoundaryPassed: boundaryResults.every(t => t.passed),
      results: boundaryResults
    };
  }
}

// Extended Engine Utilities
RetainerNudgerEngine.runFullTestSuite = function() {
  const diag = RetainerNudgerEngine.runSelfDiagnostics();
  const bound = RetainerBoundaryTests.runAllBoundaryTests();
  const sim = RetainerSimulationMatrix.simulateAllNudges();
  return {
    engine: "RetainerNudgerEngine",
    timestamp: new Date().toISOString(),
    allPassed: diag.allPassed && bound.allBoundaryPassed && sim.every(s => s.matchedExpectation),
    diagnostics: diag,
    boundaryTests: bound,
    simulations: {
      totalSimulated: sim.length,
      allMatched: sim.every(s => s.matchedExpectation)
    }
  };
};

// Compatibility Export Layer (Supports class & static method invocations)
RetainerNudgerEngine.RetainerNudger = RetainerNudgerEngine;
RetainerNudgerEngine.URGENCY_STAGES = URGENCY_STAGES;
RetainerNudgerEngine.DateLockSequencer = DateLockSequencer;
RetainerNudgerEngine.HEIRLOOM_COLLECTIVE_CONFIG = HEIRLOOM_COLLECTIVE_CONFIG;
RetainerNudgerEngine.CollectiveCalculator = CollectiveCalculator;
RetainerNudgerEngine.NUDGE_TEMPLATES = NUDGE_TEMPLATES;
RetainerNudgerEngine.DispatchOptimizer = DispatchOptimizer;
RetainerNudgerEngine.CHANNEL_GOVERNANCE = CHANNEL_GOVERNANCE;
RetainerNudgerEngine.RetainerSimulationMatrix = RetainerSimulationMatrix;
RetainerNudgerEngine.getLapsedPlaybook = function(days) {
  return LapsedLeadRecoveryEngine.evaluateLapsedLead(days);
};

RetainerNudgerEngine.getScarcityContext = function(date, venue) {
  return RegionalUrgencyGenerator.generateScarcityContext(date, venue);
};

RetainerNudgerEngine.formatEmailForStage = function(stageId, context) {
  if (stageId === "STAGE_3") return NUDGE_TEMPLATES.STAGE_3_EMAIL.body(context);
  if (stageId === "STAGE_2") return NUDGE_TEMPLATES.STAGE_2_EMAIL.body(context);
  if (stageId === "STAGE_1") return NUDGE_TEMPLATES.STAGE_1_EMAIL.body(context);
  if (stageId === "COLLECTIVE") return NUDGE_TEMPLATES.COLLECTIVE_MEMBERSHIP_EMAIL.body(context);
  return null;
};

RetainerNudgerEngine.formatSMSForStage = function(stageId, context) {
  if (stageId === "STAGE_2") return NUDGE_TEMPLATES.STAGE_2_SMS.text(context);
  if (stageId === "STAGE_1") return NUDGE_TEMPLATES.STAGE_1_SMS.text(context);
  return null;
};

RetainerNudgerEngine.getMembershipDetails = function() {
  return {
    config: HEIRLOOM_COLLECTIVE_CONFIG,
    taxAnnual: CollectiveCalculator.calculateTaxAndBilling(true),
    taxMonthly: CollectiveCalculator.calculateTaxAndBilling(false)
  };
};

RetainerNudgerEngine.REGIONAL_SCARCITY_RULES = REGIONAL_SCARCITY_RULES;
RetainerNudgerEngine.RegionalUrgencyGenerator = RegionalUrgencyGenerator;
RetainerNudgerEngine.LAPSED_LEAD_PLAYBOOKS = LAPSED_LEAD_PLAYBOOKS;
RetainerNudgerEngine.LapsedLeadRecoveryEngine = LapsedLeadRecoveryEngine;

module.exports = RetainerNudgerEngine;