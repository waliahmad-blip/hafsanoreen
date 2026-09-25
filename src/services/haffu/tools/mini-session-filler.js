/**
 * ============================================================================
 * HAFFU STUDIO — MINI SESSION FILLER & POP-UP EVENT BOOKING ENGINE
 * ============================================================================
 * Enterprise Pop-Up Scheduling, Audience Segmentation & Flash Campaign Architecture:
 *   1. Signature Seasonal Pop-Up Events (Spring Blossom, Summer Lavender, Autumn, Hearth)
 *   2. Sequential Slot Scheduling (15-min Slots, 5-min Transition Buffers, Mid-Breaks)
 *   3. 3-Tier Audience Segmentation (Past Local Clients, Waitlist, Social Community)
 *   4. Multi-Channel Flash Campaign Copy (VIP Early Launch, Urgent SMS, Instagram Stories)
 *   5. Financial Yield Ledger, Upfront Date-Lock Retainers & Ontario 13% HST Remittance
 *   6. 48-Hour Inclement Weather Rescheduling Protocols & Guaranteed Rain Date Shifts
 *   7. Client 15-Minute Preparation Guide (Non-Staining Toddler Fuel, Outfit Protocols)
 *   8. Multi-Format Renderers (Luxury Responsive HTML Event Dossier & Markdown Summary)
 *   9. 100% Backward-Compatible Legacy Interface (execute, campaign, targetAudience)
 *
 * Studio: Hafsa Noreen Photography Atelier (Oakville / Burlington / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.4.0
 * ============================================================================
 */

'use strict';

// --- PART 1: SIGNATURE POP-UP EVENTS CATALOG ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 1: Signature Pop-Up Event Catalog & Venue Specifications
 */

const SIGNATURE_POPUP_EVENTS = {
  SPRING_BLOSSOM: {
    eventKey: 'spring_blossom',
    eventName: 'Spring Blossom & Magnolia Atelier Minis',
    season: 'Spring (May)',
    venueName: 'Gairloch Gardens Formal Rose Arbors & Magnolia Walk',
    location: 'Oakville, ON',
    optimalDateWindow: 'May 10 to May 24 (Peak Bloom)',
    standardSlots: 8,
    standardPricePerSlotCad: 350.00,
    slotDurationMinutes: 15,
    deliverables: '10 hand-curated high-resolution digital files, online gallery, and wardrobe styling lookbook',
    targetNiches: ['Maternity milestone', 'Mother & children', 'Engagement celebration']
  },

  SUMMER_LAVENDER_SUNSET: {
    eventKey: 'summer_lavender_sunset',
    eventName: 'Summer Lavender & Golden Meadow Minis',
    season: 'Summer (July)',
    venueName: 'Campbellville Escarpment Lavender Farm & Kelso Lake',
    location: 'Milton & Campbellville, ON',
    optimalDateWindow: 'July 12 to July 26 (Peak Lavender Bloom)',
    standardSlots: 10,
    standardPricePerSlotCad: 325.00,
    slotDurationMinutes: 15,
    deliverables: '10 hand-graded full-resolution digital negatives, private gallery, print release',
    targetNiches: ['Young families', 'Barefoot toddlers', 'Romantic couples']
  },

  AUTUMN_ESCARPMENT_FOLIAGE: {
    eventKey: 'autumn_escarpment_foliage',
    eventName: 'Niagara Escarpment Golden Foliage Minis',
    season: 'Autumn (October)',
    venueName: 'Mount Nemo Conservation & Scotsdale Farm Heritage Barns',
    location: 'Milton & Halton Hills, ON',
    optimalDateWindow: 'October 8 to October 22 (Peak Autumn Foliage)',
    standardSlots: 12,
    standardPricePerSlotCad: 375.00,
    slotDurationMinutes: 15,
    deliverables: '12 hand-calibrated archival digital files, online gallery, $50 holiday print credit',
    targetNiches: ['Annual family heirlooms', 'Generational holiday card portraits']
  },

  HOLIDAY_ATELIER_HEARTH: {
    eventKey: 'holiday_atelier_hearth',
    eventName: 'Cozy Holiday Atelier Hearth & Velvet Minis',
    season: 'Winter (November – December)',
    venueName: 'Downtown Oakville Natural Light Studio Suite',
    location: 'Oakville, ON',
    optimalDateWindow: 'November 15 to December 5 (Before Print Lab Deadlines)',
    standardSlots: 14,
    standardPricePerSlotCad: 395.00,
    slotDurationMinutes: 20,
    deliverables: '12 retouched digital files, private gallery, custom calligraphed digital holiday card proof',
    targetNiches: ['Babies & toddlers in knitwear', 'Family holiday greetings', 'Pet-friendly family portraits']
  }
};

class PopupEventCatalog {
  static getEvents() {
    return SIGNATURE_POPUP_EVENTS;
  }

  static getEventByKey(key = 'autumn_escarpment_foliage') {
    const k = (key || '').toUpperCase().replace(/[^A-Z]/g, '_');
    return SIGNATURE_POPUP_EVENTS[k] || SIGNATURE_POPUP_EVENTS.AUTUMN_ESCARPMENT_FOLIAGE;
  }
}

// --- PART 2: SLOT SCHEDULING & CAPACITY YIELD ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 2: Time Slot Scheduling & Capacity Yield Architecture
 */

class MiniSessionScheduler {
  /**
   * Generate sequential appointment slot schedule with transition buffers
   */
  static generateSlotSchedule({
    slots = 8,
    slotDurationMinutes = 15,
    bufferMinutes = 5,
    startTime = '15:30'
  }) {
    const slotCount = Math.max(1, Number(slots) || 8);
    const duration = Math.max(10, Number(slotDurationMinutes) || 15);
    const buffer = Math.max(0, Number(bufferMinutes) || 5);

    const [startH, startM] = startTime.split(':').map(Number);
    let currentMinutes = (startH * 60) + startM;

    const schedule = [];

    for (let i = 1; i <= slotCount; i++) {
      // Add a 15-minute rest break halfway through
      if (slotCount >= 6 && i === Math.floor(slotCount / 2) + 1) {
        const breakStartH = Math.floor(currentMinutes / 60);
        const breakStartM = currentMinutes % 60;
        currentMinutes += 15;
        const breakEndH = Math.floor(currentMinutes / 60);
        const breakEndM = currentMinutes % 60;

        schedule.push({
          slotNumber: 'MID-SESSION BREAK',
          timeWindow: `${String(breakStartH).padStart(2, '0')}:${String(breakStartM).padStart(2, '0')} - ${String(breakEndH).padStart(2, '0')}:${String(breakEndM).padStart(2, '0')}`,
          status: 'RESERVED_FOR_ATELIER_RESET',
          isBreak: true
        });
      }

      const slotStartH = Math.floor(currentMinutes / 60);
      const slotStartM = currentMinutes % 60;
      currentMinutes += duration;
      const slotEndH = Math.floor(currentMinutes / 60);
      const slotEndM = currentMinutes % 60;

      schedule.push({
        slotNumber: i,
        timeWindow: `${String(slotStartH).padStart(2, '0')}:${String(slotStartM).padStart(2, '0')} - ${String(slotEndH).padStart(2, '0')}:${String(slotEndM).padStart(2, '0')}`,
        status: 'AVAILABLE',
        isBreak: false
      });

      // Add 5-minute buffer between client departures and arrivals
      currentMinutes += buffer;
    }

    const totalDurationHours = Math.round(((currentMinutes - ((startH * 60) + startM)) / 60) * 10) / 10;

    return {
      totalSlots: slotCount,
      slotDurationMinutes: duration,
      transitionBufferMinutes: buffer,
      eventStartTime: startTime,
      eventWrapTime: `${String(Math.floor(currentMinutes / 60)).padStart(2, '0')}:${String(currentMinutes % 60).padStart(2, '0')}`,
      totalEventDurationHours: totalDurationHours,
      slotsSchedule: schedule
    };
  }
}

// --- PART 3: AUDIENCE SEGMENTATION & TARGETING ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 3: Audience Segmentation & VIP Priority Target Channels
 */

const TARGET_AUDIENCE_SEGMENTS = {
  PAST_CLIENTS_LOCAL: {
    segmentId: 'past_clients_local',
    name: 'Past Atelier Clients within 20km (Oakville & Burlington)',
    priorityAccessHours: 48,
    channel: 'Direct VIP Email & Personalized Concierge SMS',
    conversionExpectationPercent: 42,
    rationale: 'Highest emotional trust; past clients rebook annual milestone portraits with minimal friction.'
  },

  NEWSLETTER_WAITLIST: {
    segmentId: 'newsletter_waitlist',
    name: 'Seasonal Waitlist & Newsletter VIP Subscribers',
    priorityAccessHours: 24,
    channel: 'Priority Email Broadcast with Private Booking Link',
    conversionExpectationPercent: 28,
    rationale: 'High-intent prospective clients waiting for calendar openings.'
  },

  INSTAGRAM_COMMUNITY: {
    segmentId: 'instagram_community',
    name: 'Local Halton & GTA Social Community Followers',
    priorityAccessHours: 0, // Public release
    channel: 'Instagram In-Feed Carousel, Stories Countdown & Link in Bio',
    conversionExpectationPercent: 16,
    rationale: 'Fills remaining 1-2 open slots through authentic visual teasers.'
  }
};

class AudienceSegmentationEngine {
  static getAudienceSegments() {
    return [
      'past clients within 20km',
      'Instagram followers in Halton',
      'newsletter subscribers'
    ];
  }

  static getDetailedSegments() {
    return TARGET_AUDIENCE_SEGMENTS;
  }
}

// --- PART 4: PROMOTIONAL COPY & FLASH CAMPAIGNS ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 4: Multi-Channel Promotional Copy & Flash Campaign Copywriting
 */

class PromotionCopyEngine {
  /**
   * Format concise social and newsletter teaser copy for backward compatibility
   */
  static generateSuggestedCopy({ event = 'Event', date = 'Upcoming Date', location = 'Oakville', slots = 8, pricePerSlot = 350 }) {
    const msg = `${event} — ${date} at ${location}. ${slots} slots at $${pricePerSlot} each. 15-minute sessions.`;
    return `🌸 ${msg} Book now — they fill fast!`;
  }

  /**
   * Format VIP early access email copy
   */
  static formatVipLaunchEmail({ event, date, location, slots, pricePerSlot, bookingUrl = 'https://hafsanoreen.com/minis' }) {
    return {
      subject: `VIP Priority Access: ${event} on ${date}`,
      bodyContent: [
        'Dear Cherished Client,',
        '',
        `Because blossom blooms and autumn colors pass so quickly in Ontario, our atelier is hosting an intimate pop-up collection:`,
        `✦ ${event}`,
        `✦ Date: ${date}`,
        `✦ Location: ${location}`,
        `✦ Limited to only ${slots} appointment slots`,
        `✦ Investment: $${pricePerSlot} CAD (includes complete hand-graded digital gallery)`,
        '',
        `As one of our past clients or VIP waitlist members, you receive exclusive 48-hour priority access before these slots are announced on our public social channels:`,
        `${bookingUrl}`,
        '',
        'With warmest excitement,',
        'Hafsa Noreen'
      ].join('\n')
    };
  }

  /**
   * Format urgent flash SMS alert
   */
  static formatFlashSms({ event, date, remainingSlots = 2, bookingUrl = 'https://hafsanoreen.com/minis' }) {
    return `Hi! Hafsa from the Oakville atelier. Only ${remainingSlots} slots remain for our ${event} on ${date}! Reserve your time slot here: ${bookingUrl} Reply STOP to opt out.`;
  }

  /**
   * Format Instagram Story 3-slide promotional framework
   */
  static formatInstagramStoryFramework({ event, date, location, pricePerSlot }) {
    return [
      { slide: 1, type: 'Atmospheric Video Teaser', onScreenText: `Something magical is coming to ${location}...`, sticker: 'Countdown Sticker' },
      { slide: 2, type: 'Event Announcement', onScreenText: `${event}\n${date} • Limited Sunset Slots\n$${pricePerSlot} CAD`, sticker: 'Question Sticker: "Drop your email for VIP early access"' },
      { slide: 3, type: 'Direct Booking Call to Action', onScreenText: 'VIP Early Access is now live! Tap link below to claim your time slot 🌸', sticker: 'Link Sticker (hafsanoreen.com/minis)' }
    ];
  }
}

// --- PART 5: FINANCIAL YIELD LEDGER & 13% HST ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 5: Financial Yield Ledger, Upfront Retainers & Ontario 13% HST
 */

class MiniSessionFinancialLedger {
  /**
   * Calculate complete event financial ledger with Ontario 13% HST
   */
  static calculateEventLedger({ slots = 8, pricePerSlot = 350, municipalPermitFeeCad = 185 }) {
    const slotCount = Math.max(1, Number(slots) || 8);
    const price = Math.max(100, Number(pricePerSlot) || 350);

    const grossRevenueBeforeTax = slotCount * price;
    const ontarioHst13Cad = Math.round(grossRevenueBeforeTax * 0.13 * 100) / 100;
    const totalCollectedWithTax = Math.round((grossRevenueBeforeTax + ontarioHst13Cad) * 100) / 100;

    const depositPerSlotCad = 150.00;
    const totalDepositsSecuredCad = slotCount * depositPerSlotCad;
    const remainingBalancesDueCad = grossRevenueBeforeTax - totalDepositsSecuredCad;

    const netOperatingProfitCad = Math.max(0, grossRevenueBeforeTax - municipalPermitFeeCad);

    return {
      totalSlots: slotCount,
      pricePerSlotCad: price,
      projectedGrossRevenueCad: grossRevenueBeforeTax,
      ontarioHst13Cad,
      totalCollectedWithTaxCad: totalCollectedWithTax,
      depositPolicy: {
        depositPerSlotCad,
        totalDepositsSecuredCad,
        remainingBalancesDueCad,
        policy: '$150 CAD non-refundable reservation retainer secures time slot; balance due 48 hours prior to event.'
      },
      permitDeductionCad: municipalPermitFeeCad,
      estimatedNetProfitCad: netOperatingProfitCad,
      hourlyYieldAverageCad: Math.round(netOperatingProfitCad / (slotCount * 0.33))
    };
  }
}

// --- PART 6: LUXURY HTML & MARKDOWN RENDERERS ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 6: Luxury HTML Event Booking Dossier & Markdown Renderers
 */

class MiniSessionHtmlRenderer {
  /**
   * Render luxury editorial HTML event promotional dossier
   */
  static renderEventHtml(data) {
    const slotsRows = (data.slotSchedule && data.slotSchedule.slotsSchedule || []).map(s => `
      <tr style="${s.isBreak ? 'background-color: #f7f5f2; font-style: italic;' : ''}">
        <td style="padding: 10px 14px; border: 1px solid #ede8e3; text-align: center;"><strong>${s.slotNumber}</strong></td>
        <td style="padding: 10px 14px; border: 1px solid #ede8e3; text-align: center;">${s.timeWindow}</td>
        <td style="padding: 10px 14px; border: 1px solid #ede8e3; color: #5a5752;">${s.status}</td>
      </tr>
    `).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Pop-Up Mini Session Collection — ${data.campaign.event}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #faf9f6; font-family: -apple-system, BlinkMacSystemFont, Arial, serif; color: #232220; line-height: 1.7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 15px; background-color: #faf9f6;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; background-color: #ffffff; border: 1px solid #eae5df; border-radius: 4px; padding: 40px; box-shadow: 0 4px 18px rgba(0,0,0,0.03);">
          <tr>
            <td align="center" style="border-bottom: 1px solid #f2ede8; padding-bottom: 24px;">
              <span style="font-family: Georgia, serif; font-size: 20px; letter-spacing: 0.18em; text-transform: uppercase; color: #1a1918;">HAFSA NOREEN</span>
              <div style="font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #8e8880; margin-top: 6px;">Pop-Up Mini Session Collection &amp; Event Booking</div>
              <div style="width: 32px; height: 1px; background-color: #c5a059; margin: 12px auto 0 auto;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px 4px 10px 4px;">
              <h2 style="font-family: Georgia, serif; font-size: 23px; font-weight: normal; color: #1a1918; margin-top: 0;">${data.campaign.event}</h2>
              <div style="font-size: 13px; color: #7a7368; margin-bottom: 20px;">${data.campaign.date} &bull; ${data.campaign.location}</div>

              <!-- Revenue & Pricing Box -->
              <div style="background-color: #f7f5f2; border-left: 3px solid #c5a059; padding: 18px; margin: 20px 0; border-radius: 2px;">
                <div style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #7a7368; font-weight: 600;">Event Capacity &amp; Revenue Projection</div>
                <div style="font-size: 22px; font-family: Georgia, serif; color: #1a1918; margin-top: 4px;">$${data.projectedRevenue.toLocaleString()} CAD Projected Gross</div>
                <div style="font-size: 13px; color: #5a5752; margin-top: 4px;">Rate: <strong>$${data.campaign.pricePerSlot} CAD / slot</strong> &bull; Total Slots: <strong>${data.campaign.totalSlots} appointments</strong></div>
              </div>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Scheduled Time Slots</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0;">
                <thead>
                  <tr style="background-color: #f7f5f2;">
                    <th style="padding: 10px 14px; text-align: center; border: 1px solid #ede8e3;">Slot</th>
                    <th style="padding: 10px 14px; text-align: center; border: 1px solid #ede8e3;">Time Window</th>
                    <th style="padding: 10px 14px; text-align: left; border: 1px solid #ede8e3;">Status</th>
                  </tr>
                </thead>
                <tbody>${slotsRows}</tbody>
              </table>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Promotional Copy Teaser</h3>
              <p style="font-size: 14px; color: #4a453e; font-style: italic; background-color: #faf9f6; padding: 14px; border: 1px dashed #ede8e3;">${data.suggestedCopy}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 24px; border-top: 1px solid #f2ede8; font-size: 12px; color: #8e8880; line-height: 1.6; text-align: center;">
              Hafsa Noreen Photography Atelier • Oakville, ON • Event Production Desk
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  }
}

class MiniSessionMarkdownRenderer {
  /**
   * Render clean markdown summary of mini session campaign
   */
  static renderEventMarkdown(data) {
    return `# HAFSA NOREEN PHOTOGRAPHY — MINI SESSION CAMPAIGN
## ${data.campaign.event} (${data.campaign.date})

- **Location:** ${data.campaign.location}
- **Total Slots:** ${data.campaign.totalSlots} Slots ($${data.campaign.pricePerSlot} CAD / slot)
- **Projected Gross Revenue:** $${data.projectedRevenue} CAD

---
### Target Promotional Audiences
${(data.targetAudience || []).map(a => `- ${a}`).join('\n')}

### Suggested Promotional Copy
> ${data.suggestedCopy}

---
*Oakville Atelier Event Scheduling Intelligence*`;
  }
}

// --- PART 7: CORE ENGINE ORCHESTRATOR ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 7: Core Engine Class & Orchestrator
 */








class MiniSessionFiller {
  static validateParams(params) {
    if (!params || typeof params !== 'object') {
      throw new Error('MiniSessionFiller: Execution parameters must be an object.');
    }
    if (params.slots !== undefined && (isNaN(Number(params.slots)) || Number(params.slots) <= 0)) {
      throw new Error('MiniSessionFiller: slots must be a positive integer.');
    }
    if (params.pricePerSlot !== undefined && (isNaN(Number(params.pricePerSlot)) || Number(params.pricePerSlot) <= 0)) {
      throw new Error('MiniSessionFiller: pricePerSlot must be a positive number.');
    }
    return true;
  }

  static async execute(params = {}) {
    this.validateParams(params);

    const {
      event = 'Spring Blossom Minis',
      date = 'May 16, 2026',
      location = 'Gairloch Gardens, Oakville',
      slots = 8,
      pricePerSlot = 350,
      startTime = '15:30'
    } = params;

    const totalSlots = Math.max(1, Number(slots) || 8);
    const price = Math.max(100, Number(pricePerSlot) || 350);
    const projectedRevenue = totalSlots * price;

    const suggestedCopy = PromotionCopyEngine.generateSuggestedCopy({
      event,
      date,
      location,
      slots: totalSlots,
      pricePerSlot: price
    });

    const targetAudience = AudienceSegmentationEngine.getAudienceSegments();

    const slotSchedule = MiniSessionScheduler.generateSlotSchedule({
      slots: totalSlots,
      startTime
    });

    const financialLedger = MiniSessionFinancialLedger.calculateEventLedger({
      slots: totalSlots,
      pricePerSlot: price
    });

    const vipEmail = PromotionCopyEngine.formatVipLaunchEmail({
      event,
      date,
      location,
      slots: totalSlots,
      pricePerSlot: price
    });

    const flashSms = PromotionCopyEngine.formatFlashSms({
      event,
      date,
      remainingSlots: Math.min(3, Math.ceil(totalSlots / 3))
    });

    const instagramStories = PromotionCopyEngine.formatInstagramStoryFramework({
      event,
      date,
      location,
      pricePerSlot: price
    });

    const legacyPayload = {
      campaign: {
        event,
        date,
        location,
        totalSlots,
        pricePerSlot: price
      },
      targetAudience,
      suggestedCopy,
      projectedRevenue,
      slotSchedule,
      financialLedger,
      vipEmailCopy: vipEmail,
      flashSmsCopy: flashSms,
      instagramStoryFramework: instagramStories
    };

    const htmlEventDossier = MiniSessionHtmlRenderer.renderEventHtml(legacyPayload);
    const markdownSummary = MiniSessionMarkdownRenderer.renderEventMarkdown(legacyPayload);

    return {
      ...legacyPayload,
      renderedOutputs: {
        htmlEventDossier,
        markdownSummary
      }
    };
  }

  static toHtml(data) {
    return MiniSessionHtmlRenderer.renderEventHtml(data);
  }

  static toMarkdown(data) {
    return MiniSessionMarkdownRenderer.renderEventMarkdown(data);
  }
}

// --- PART 8: DIAGNOSTIC TEST SUITE ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 8: Automated 12-Check Diagnostic Test Suite
 */

class MiniSessionFillerDiagnostics {
  static async runDiagnostics(engine) {
    const results = {
      timestamp: new Date().toISOString(),
      testsRun: 0,
      passed: true,
      checks: {}
    };

    // Test 1: Standard Spring Blossom Event
    const res = await engine.execute({
      event: 'Spring Blossom Minis',
      date: 'May 16, 2026',
      location: 'Gairloch Gardens, Oakville',
      slots: 8,
      pricePerSlot: 350
    });
    results.testsRun++;
    results.checks.campaignObjectIntegrity = {
      passed: Boolean(res.campaign.event === 'Spring Blossom Minis' && res.campaign.totalSlots === 8 && res.campaign.pricePerSlot === 350),
      event: res.campaign.event
    };

    // Test 2: Projected Revenue Calculation
    results.testsRun++;
    results.checks.projectedRevenueCalculation = {
      passed: res.projectedRevenue === (8 * 350),
      revenue: res.projectedRevenue
    };

    // Test 3: Target Audience Segments
    results.testsRun++;
    results.checks.targetAudienceSegments = {
      passed: res.targetAudience.length === 3 && res.targetAudience.includes('past clients within 20km'),
      segmentsCount: res.targetAudience.length
    };

    // Test 4: Suggested Copy Formatting
    results.testsRun++;
    results.checks.suggestedCopyFormatting = {
      passed: res.suggestedCopy.includes('🌸') && res.suggestedCopy.includes('Book now — they fill fast!'),
      copy: res.suggestedCopy
    };

    // Test 5: Slot Scheduler 8 Slots
    results.testsRun++;
    results.checks.slotSchedulerSlots = {
      passed: res.slotSchedule.totalSlots === 8 && res.slotSchedule.slotsSchedule.length >= 8,
      totalSlots: res.slotSchedule.totalSlots
    };

    // Test 6: Mid-Session Break Buffer
    results.testsRun++;
    results.checks.midSessionBreakBuffer = {
      passed: res.slotSchedule.slotsSchedule.some(s => s.isBreak === true),
      hasBreak: true
    };

    // Test 7: Financial Ledger 13% Ontario HST
    const fin = res.financialLedger;
    results.testsRun++;
    results.checks.financialLedgerHST = {
      passed: fin.projectedGrossRevenueCad === 2800 && fin.ontarioHst13Cad === Math.round(2800 * 0.13 * 100) / 100,
      hst: fin.ontarioHst13Cad
    };

    // Test 8: Deposit Policy ($150 / slot)
    results.testsRun++;
    results.checks.depositPolicyIntegration = {
      passed: fin.depositPolicy.depositPerSlotCad === 150.00 && fin.depositPolicy.totalDepositsSecuredCad === (8 * 150),
      depositsTotal: fin.depositPolicy.totalDepositsSecuredCad
    };

    // Test 9: VIP Launch Email Copy
    results.testsRun++;
    results.checks.vipLaunchEmailCopy = {
      passed: res.vipEmailCopy.subject.includes('VIP Priority Access') && res.vipEmailCopy.bodyContent.includes('48-hour priority access'),
      subject: res.vipEmailCopy.subject
    };

    // Test 10: Flash SMS Opt-Out Compliance
    results.testsRun++;
    results.checks.flashSmsOptOut = {
      passed: res.flashSmsCopy.includes('Reply STOP to opt out.'),
      sms: res.flashSmsCopy
    };

    // Test 11: Instagram Story 3-Slide Framework
    results.testsRun++;
    results.checks.instagramStoriesFramework = {
      passed: res.instagramStoryFramework.length === 3 && res.instagramStoryFramework[2].sticker.includes('Link Sticker'),
      slidesCount: res.instagramStoryFramework.length
    };

    // Test 12: Luxury HTML & Markdown Rendering
    results.testsRun++;
    results.checks.htmlAndMarkdownRendering = {
      passed: Boolean(
        res.renderedOutputs.htmlEventDossier.includes('HAFSA NOREEN') &&
        res.renderedOutputs.htmlEventDossier.includes('Spring Blossom Minis') &&
        res.renderedOutputs.markdownSummary.includes('# HAFSA NOREEN PHOTOGRAPHY — MINI SESSION CAMPAIGN')
      ),
      hasBothRenderers: true
    };

    for (const key of Object.keys(results.checks)) {
      if (!results.checks[key].passed) results.passed = false;
    }

    return results;
  }
}

// --- PART 9: BOUNDARY TESTS & BATCH SIMULATION BENCHMARK ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 9: Boundary Edge Cases & 50-Event Simulation Benchmark
 */

class MiniSessionFillerSimulations {
  static async runBoundaryTests(engine) {
    const boundary = [];

    // 1. Empty parameters defaults safely
    try {
      const res = await engine.execute({});
      boundary.push({ test: 'Empty parameters defaults safely', passed: Boolean(res && res.campaign.totalSlots === 8) });
    } catch (e) {
      boundary.push({ test: 'Empty parameters defaults safely', passed: false, error: e.message });
    }

    // 2. Negative slots validation
    try {
      await engine.execute({ slots: -5 });
      boundary.push({ test: 'Negative slots validation', passed: false });
    } catch (e) {
      boundary.push({ test: 'Negative slots validation', passed: e.message.includes('positive integer') });
    }

    // 3. Zero slots validation
    try {
      await engine.execute({ slots: 0 });
      boundary.push({ test: 'Zero slots validation', passed: false });
    } catch (e) {
      boundary.push({ test: 'Zero slots validation', passed: e.message.includes('positive integer') });
    }

    // 4. Negative pricePerSlot validation
    try {
      await engine.execute({ pricePerSlot: -200 });
      boundary.push({ test: 'Negative pricePerSlot validation', passed: false });
    } catch (e) {
      boundary.push({ test: 'Negative pricePerSlot validation', passed: e.message.includes('positive number') });
    }

    return {
      totalBoundaryTests: boundary.length,
      allBoundaryPassed: boundary.every(b => b.passed),
      results: boundary
    };
  }

  static async runBatchSimulation(engine, count = 50) {
    const events = ['Spring Blossom', 'Summer Lavender', 'Autumn Foliage', 'Holiday Hearth'];
    const locations = ['Gairloch Gardens', 'Paletta Mansion', 'Mount Nemo', 'Downtown Studio'];
    const simulations = [];

    for (let i = 1; i <= count; i++) {
      const eventName = events[i % events.length];
      const loc = locations[i % locations.length];
      const slots = (i % 12) + 4; // 4 to 15 slots
      const price = 300 + ((i % 5) * 25);

      const res = await engine.execute({
        event: `${eventName} Pop-Up #${i}`,
        date: `2026-0${(i % 9) + 1}-15`,
        location: loc,
        slots,
        pricePerSlot: price
      });

      simulations.push(res);
    }

    const allHaveRevenue = simulations.every(s => s.projectedRevenue > 0);
    const allHaveSchedule = simulations.every(s => s.slotSchedule.slotsSchedule.length >= s.campaign.totalSlots);
    const allHaveHtml = simulations.every(s => s.renderedOutputs && s.renderedOutputs.htmlEventDossier.length > 500);

    return {
      totalSimulated: count,
      allHaveRevenue,
      allHaveSchedule,
      allHaveHtml,
      allPassed: allHaveRevenue && allHaveSchedule && allHaveHtml,
      sampleRevenue: simulations[0].projectedRevenue
    };
  }
}

// --- PART 10: WEATHER RESCHEDULING & RAIN DATES ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 10: Weather Rescheduling Protocols & Rain Date Management
 */

const INCLEMENT_WEATHER_POLICIES = [
  {
    stepNumber: 1,
    phase: '48-Hour Meteorological Watch',
    directive: 'The atelier monitors Environment Canada radar forecasts. If precipitation probability exceeds 65% for the target shoot window, a preliminary weather advisory email is dispatched to all booked participants.'
  },
  {
    stepNumber: 2,
    phase: '24-Hour Official Weather Call',
    directive: 'The definitive weather decision is announced 24 hours prior to the first scheduled call time (by 15:00 the prior afternoon). This ensures families do not unnecessarily style hair or rush through morning routines.'
  },
  {
    stepNumber: 3,
    phase: 'Automatic Rain Date Shift',
    directive: 'Every outdoor pop-up event features a predetermined backup date (typically the following Sunday or subsequent Saturday). All executive client time slots shift identically to the rain date (e.g. 15:30 Saturday shifts to 15:30 Sunday).'
  },
  {
    stepNumber: 4,
    phase: 'Indoor Studio / Greenhouse Pivot Guarantee',
    directive: 'If a client cannot attend the backup rain date due to prior family commitments, their $150 deposit is 100% credited toward an unhurried indoor natural light studio session in downtown Oakville, valid for 12 months.'
  }
];

class WeatherContingencyProtocolOfficer {
  static getPolicies() {
    return INCLEMENT_WEATHER_POLICIES;
  }

  static formatWeatherAdvisoryMessage({ event, primaryDate, backupDate }) {
    return [
      `Dear Cherished Family,`,
      '',
      `We are keeping a watchful eye on Environment Canada forecasts for our upcoming ${event} scheduled for ${primaryDate}.`,
      '',
      `As a reminder, our official backup rain date is scheduled for ${backupDate}. Your exact appointment time slot is automatically preserved for the backup date.`,
      '',
      `We will send our final weather confirmation tomorrow by 15:00 EST. Thank you for your flexibility as we work with nature to ensure beautiful, comfortable golden light!`,
      '',
      'Warmly,',
      'Hafsa Noreen'
    ].join('\n');
  }
}

// --- PART 11: CLIENT PREPARATION RUNBOOK ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 11: Client Experience, Arrival Etiquette & Toddler Prep Guide
 */

const MINI_SESSION_PREP_RULES = [
  {
    ruleNumber: 1,
    title: 'Prompt 10-Minute Early Arrival',
    guidance: 'Arrive at the park 10 minutes prior to your scheduled time slot to allow for parking and a gentle walk to the meeting arbor. Because mini sessions run sequentially, late arrivals reduce shoot time.'
  },
  {
    ruleNumber: 2,
    title: 'Single Hero Outfit (No Wardrobe Changes)',
    guidance: 'To maximize shooting time within your 15-minute window, arrive fully dressed and camera-ready. Outfit changes are reserved for full 90-minute bespoke commissions.'
  },
  {
    ruleNumber: 3,
    title: 'Non-Staining Toddler Snacks',
    guidance: 'If traveling with toddlers, pack clean, non-staining snacks (e.g., cheerios, mini marshmallows, pretzel sticks). Strictly avoid chocolate, colored fruit snacks, or berries that leave dark stains on mouths and clothes.'
  },
  {
    ruleNumber: 4,
    title: 'Relaxed, Playful Parent Mindset',
    guidance: 'Do not tell children to "say cheese" or force stiff poses. The secret to radiant family photography is natural laughter, tickles, tossing in the air, and warm cuddles. Hafsa handles the visual direction.'
  },
  {
    ruleNumber: 5,
    title: 'Pet Etiquette for Outdoor Park Sessions',
    guidance: 'Beloved family dogs are warmly welcomed at Gairloch, Paletta, and Kelso. Ensure pets are exercised prior to arrival and bring high-value treats to capture their attention.'
  }
];

class MiniSessionExperienceGuide {
  static getClientPrepRules() {
    return MINI_SESSION_PREP_RULES;
  }
}

// --- PART 12: POST-EVENT PROOFING & DELIVERY WORKFLOW ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 12: Rapid 48-Hour Proofing & Post-Event Delivery Workflow
 */

const POST_EVENT_DELIVERY_PIPELINE = [
  {
    stageNumber: 1,
    phase: 'Same-Night Archival Backup & Ingestion',
    timeline: 'Within 6 hours of event wrap',
    actionItem: 'Dual-card CFexpress ingestion into redundant RAID-6 storage and secondary offsite encrypted cloud backup.'
  },
  {
    stageNumber: 2,
    phase: 'Curatorial Culling & True-to-Life Color Grading',
    timeline: 'Within 36 hours post-event',
    actionItem: 'Culling to the top 20-25 strongest frames per family; applying signature Kodak Portra tone curves and hand-retouching hero frames.'
  },
  {
    stageNumber: 3,
    phase: 'Private Client Sanctuary Proofing Release',
    timeline: 'Guaranteed 48 hours post-event',
    actionItem: 'Digital invitation dispatched with direct passkey to private interactive gallery allowing families to select their 10 included favorites.'
  },
  {
    stageNumber: 4,
    phase: 'Full Gallery Download & Print Store Activation',
    timeline: '5 business days post-selection',
    actionItem: 'Full-resolution master JPEG delivery with print release and automatic $50 print credit pre-loaded for archival wall art.'
  }
];

class PostEventFulfillmentWorkflow {
  static getPipelineStages() {
    return POST_EVENT_DELIVERY_PIPELINE;
  }
}

// --- PART 13: FLASH CAMPAIGN MARKETING PLAYBOOKS ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 13: Flash Campaign Marketing Playbooks & Launch Runbooks
 */

const FOUR_PHASE_LAUNCH_RUNBOOK = [
  {
    phaseNumber: 1,
    timing: 'T-Minus 14 Days',
    phaseName: 'Atmospheric Video Teaser & VIP Waitlist Capture',
    channel: 'Instagram Reels & Stories',
    objective: 'Tease the seasonal venue without revealing exact dates; build high anticipation.',
    copyHook: 'The magnolias are budding in Oakville... Our annual Spring Blossom Minis are opening next week. Tap link in bio to join the VIP waitlist for 48h priority access.'
  },
  {
    phaseNumber: 2,
    timing: 'T-Minus 7 Days',
    phaseName: 'VIP Priority Email & SMS Dispatch',
    channel: 'Direct Email & Concierge SMS to Past Clients',
    objective: 'Fill 70% of available time slots from past client loyalty base.',
    copyHook: 'VIP Priority Booking is officially live! As an atelier family, your private calendar access is open. Claim your golden hour slot before public release.'
  },
  {
    phaseNumber: 3,
    timing: 'T-Minus 5 Days',
    phaseName: 'Public Social Media Release',
    channel: 'Instagram In-Feed Carousel & Newsletter Broadcast',
    objective: 'Announce remaining open slots to broader community.',
    copyHook: '✦ NOW OPEN TO PUBLIC: Only 3 remaining sunset slots for our Gairloch Gardens Blossom Minis. Link in bio to reserve.'
  },
  {
    phaseNumber: 4,
    timing: 'T-Minus 2 Days',
    phaseName: 'Final 48-Hour Urgency & Countdown',
    channel: 'Instagram Stories Countdown Sticker & Flash SMS',
    objective: 'Sell out final remaining slot.',
    copyHook: 'FINAL CALL: Exactly one slot left at 17:30 this Saturday! Tap below to claim the final opening.'
  }
];

class FlashCampaignPlaybook {
  static getLaunchRunbook() {
    return FOUR_PHASE_LAUNCH_RUNBOOK;
  }
}

// --- PART 14: ON-SITE LOGISTICS & CLIENT FAQS ---
/**
 * HAFFU — Mini Session Filler & Pop-Up Event Engine
 * Part 14: On-Site Logistics, Gear Redundancy & Client FAQs
 */

const MINI_SESSION_GEAR_CHECKLIST = [
  {
    category: 'Camera & Optics Redundancy',
    items: [
      'Primary Body: Sony A7R V (61MP Full-Frame) with Dual 160GB Type A CFexpress Cards',
      'Backup Body: Sony A7 IV (33MP Full-Frame) synchronized color profiles',
      'Hero Lens: Sony FE 50mm f/1.2 GM (Ultra-shallow depth of field, creamy bokeh)',
      'Versatility Lens: Sony FE 24-70mm f/2.8 GM II (Instant framing flexibility for active toddlers)',
      'Portrait Lens: Sony FE 85mm f/1.4 GM (Flattering compression for parent portraits)'
    ]
  },
  {
    category: 'Atmospheric Lighting & Diffusion',
    items: [
      'Profoto B10X Plus (500Ws battery-powered location strobe for backlighting)',
      'Westcott 43-inch Optical White Diffusion Umbrella with removable diffuser front',
      'Lastolite 5-in-1 Collapsible Reflector / Scrim (Sun Silver / Soft Gold for golden hour fill)',
      'Manfrotto Air-Cushioned Heavy Duty Location Light Stands & Sandbags (2x 10lb)'
    ]
  },
  {
    category: 'Toddler Engagement & Comfort Amenities',
    items: [
      'Organic bubble blower (produces non-toxic, non-staining iridescent bubbles)',
      'Vintage wooden wooden rattle & squeaker noisemakers for authentic eyeline connection',
      'Bamboo wet wipes (hypoallergenic, fragrance-free for quick face and hand touchups)',
      'Portable changing tent & emergency styling kit (lint rollers, neutral bobby pins, matte oil blotters)',
      'Halton conservation-safe organic bug spray & lavender botanical mist'
    ]
  }
];

const MINI_SESSION_POPUP_FAQS = [
  {
    question: 'What happens if my toddler has a meltdown during the 15-minute slot?',
    answer: 'Our sessions are engineered with zero pressure. Hafsa specializes in child-led pacing: we sing, play bubble games, and capture spontaneous, unposed giggles and gentle parent embraces. Meltdowns are embraced as part of family truth, and we consistently deliver 15+ breathtaking heirloom frames regardless.'
  },
  {
    question: 'Can we include our family dog in the outdoor pop-up session?',
    answer: 'Yes! Well-behaved dogs on neutral leather or woven leashes are welcome at our dog-friendly Halton park locations (Paletta Lakefront, Mount Nemo, and LaSalle Park). Please notify us upon booking so we allocate extra transition time.'
  },
  {
    question: 'How do we coordinate outfits for a 15-minute pop-up session?',
    answer: 'We provide our bespoke What-To-Wear Digital Guide upon booking. We advise soft tonal neutrals (cream, taupe, camel, soft slate, sage) in organic textures like linen, knit, and cotton gauze, avoiding neon logos and harsh fluorescent dyes.'
  },
  {
    question: 'What if rain is forecasted for our outdoor pop-up date?',
    answer: 'We monitor hourly Halton radar up to 48 hours in advance. If precipitation probability exceeds 60%, the session automatically moves to your pre-assigned guaranteed rain date. If both dates are rained out, your date-lock retainer converts into a flexible credit towards any full atelier session.'
  },
  {
    question: 'Can we purchase additional digital images beyond the 10 included favorites?',
    answer: 'Absolutely. Within your private sanctuary proofing gallery, you can purchase individual additional retouched high-resolution images for $35 each, or unlock the entire unculled gallery download for $250 + HST.'
  }
];

class MiniSessionLogisticsAndFAQs {
  static getGearChecklist() {
    return MINI_SESSION_GEAR_CHECKLIST;
  }
  static getFAQs() {
    return MINI_SESSION_POPUP_FAQS;
  }
}

// Diagnostic delegation and test suite wiring
MiniSessionFiller.runDiagnostics = function() {
  return MiniSessionFillerDiagnostics.runDiagnostics(this);
};

MiniSessionFiller.runFullTestSuite = function() {
  return Promise.all([
    MiniSessionFillerDiagnostics.runDiagnostics(this),
    MiniSessionFillerSimulations.runBoundaryTests(this),
    MiniSessionFillerSimulations.runBatchSimulation(this, 50)
  ]).then(([diag, boundary, sim]) => ({
    engine: "MiniSessionFiller",
    timestamp: new Date().toISOString(),
    allPassed: diag.passed && boundary.allBoundaryPassed && sim.allPassed,
    diagnostics: diag,
    boundaryTests: boundary,
    batchSimulation: sim
  }));
};

// Static Helper & Constant Extensions
MiniSessionFiller.SIGNATURE_POPUP_EVENTS = SIGNATURE_POPUP_EVENTS;
MiniSessionFiller.TARGET_AUDIENCE_SEGMENTS = TARGET_AUDIENCE_SEGMENTS;
MiniSessionFiller.INCLEMENT_WEATHER_POLICIES = INCLEMENT_WEATHER_POLICIES;
MiniSessionFiller.MINI_SESSION_PREP_RULES = MINI_SESSION_PREP_RULES;
MiniSessionFiller.generateSlotSchedule = function(opts) { return MiniSessionScheduler.generateSlotSchedule(opts); };
MiniSessionFiller.calculateEventLedger = function(opts) { return MiniSessionFinancialLedger.calculateEventLedger(opts); };
MiniSessionFiller.getEventByKey = function(k) { return PopupEventCatalog.getEventByKey(k); };
MiniSessionFiller.POST_EVENT_DELIVERY_PIPELINE = POST_EVENT_DELIVERY_PIPELINE;
MiniSessionFiller.FOUR_PHASE_LAUNCH_RUNBOOK = FOUR_PHASE_LAUNCH_RUNBOOK;
MiniSessionFiller.MINI_SESSION_GEAR_CHECKLIST = MINI_SESSION_GEAR_CHECKLIST;
MiniSessionFiller.MINI_SESSION_POPUP_FAQS = MINI_SESSION_POPUP_FAQS;

module.exports = MiniSessionFiller;
