/**
 * ============================================================================
 * HAFFU STUDIO — CORPORATE & EDITORIAL TEAM HEADSHOT BOOKING ENGINE
 * ============================================================================
 * Enterprise Executive Headshot & Corporate Team Production Architecture:
 *   1. Tiered Volume Scale Economies (Solo Executive to 50+ Campus Rosters)
 *   2. Mobile Studio Technical Specifications (60" Softboxes, Clamshell, Backdrops)
 *   3. Multi-Team Slot Scheduling Engine & Staggered Executive Itineraries
 *   4. Commercial Corporate Licensing & Natural Skin Retouching Standards
 *   5. Executive Wardrobe Guidelines, Grooming Protocols & Eyewear Anti-Glare
 *   6. Industry Sector Customizations (Law, Medical, Real Estate, Tech Ventures)
 *   7. Corporate Invoicing, Net-15/30 Procurement & Ontario 13% HST Remittance
 *   8. Multi-Format Renderers (Luxury Responsive HTML Proposal & Markdown Itinerary)
 *   9. 100% Backward-Compatible Legacy Interface (execute, calculatePricing, runDiagnostics)
 *
 * Studio: Hafsa Noreen Photography Atelier (Oakville / Burlington / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.4.0
 * ============================================================================
 */

'use strict';

// --- PART 1: PRICING TIERS & VOLUME SCALE ECONOMIES ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 1: Tiered Pricing Matrices & Volume Scale Economies
 */

const HEADSHOT_VOLUME_TIERS = {
  SOLO_EXECUTIVE: {
    minTeamSize: 1,
    maxTeamSize: 1,
    tierKey: 'solo_executive',
    tierLabel: 'Solo Executive / Founder Session',
    perPersonCad: 295,
    setupFeeCad: 0, // In atelier studio
    minutesPerPerson: 30,
    deliverablesPerPerson: 3
  },
  SMALL_TEAM: {
    minTeamSize: 2,
    maxTeamSize: 4,
    tierKey: 'small_team',
    tierLabel: 'Executive Small Team (1 – 4)',
    perPersonCad: 225,
    setupFeeCad: 200,
    minutesPerPerson: 20,
    deliverablesPerPerson: 2
  },
  BOUTIQUE_FIRM: {
    minTeamSize: 5,
    maxTeamSize: 9,
    tierKey: 'boutique_firm',
    tierLabel: 'Boutique Firm (5 – 9)',
    perPersonCad: 145,
    setupFeeCad: 150,
    minutesPerPerson: 15,
    deliverablesPerPerson: 2
  },
  CORPORATE_TEAM: {
    minTeamSize: 10,
    maxTeamSize: 19,
    tierKey: 'corporate_team',
    tierLabel: 'Corporate Team (10 – 19)',
    perPersonCad: 110,
    setupFeeCad: 0, // Waived
    minutesPerPerson: 15,
    deliverablesPerPerson: 2
  },
  ENTERPRISE_ROSTER: {
    minTeamSize: 20,
    maxTeamSize: 49,
    tierKey: 'enterprise_roster',
    tierLabel: 'Executive Enterprise Roster (20+)',
    perPersonCad: 85,
    setupFeeCad: 0, // Waived
    minutesPerPerson: 10,
    deliverablesPerPerson: 2
  },
  CAMPUS_PRODUCTION: {
    minTeamSize: 50,
    maxTeamSize: 250,
    tierKey: 'campus_production',
    tierLabel: 'Enterprise Campus Multi-Day Production (50+)',
    perPersonCad: 65,
    setupFeeCad: 0, // Waived
    minutesPerPerson: 10,
    deliverablesPerPerson: 2
  }
};

class HeadshotPricingCalculator {
  /**
   * Calculate tiered per-person rate and setup fee for backward compatibility
   */
  static calculatePricing(teamSize = 5) {
    const size = Math.max(1, Number(teamSize) || 1);

    if (size >= 20) {
      return { perPerson: 85, tierLabel: 'Executive Enterprise Roster (20+)', setupFee: 0 };
    } else if (size >= 10) {
      return { perPerson: 110, tierLabel: 'Corporate Team (10 – 19)', setupFee: 0 };
    } else if (size >= 5) {
      return { perPerson: 145, tierLabel: 'Boutique Firm (5 – 9)', setupFee: 150 };
    } else {
      return { perPerson: 225, tierLabel: 'Executive Small Team (1 – 4)', setupFee: 200 };
    }
  }

  /**
   * Return full tier metadata
   */
  static resolveTier(teamSize = 5) {
    const size = Math.max(1, Number(teamSize) || 1);
    if (size >= 50) return HEADSHOT_VOLUME_TIERS.CAMPUS_PRODUCTION;
    if (size >= 20) return HEADSHOT_VOLUME_TIERS.ENTERPRISE_ROSTER;
    if (size >= 10) return HEADSHOT_VOLUME_TIERS.CORPORATE_TEAM;
    if (size >= 5) return HEADSHOT_VOLUME_TIERS.BOUTIQUE_FIRM;
    if (size >= 2) return HEADSHOT_VOLUME_TIERS.SMALL_TEAM;
    return HEADSHOT_VOLUME_TIERS.SOLO_EXECUTIVE;
  }
}

// --- PART 2: MOBILE STUDIO TECHNICAL SPECIFICATIONS ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 2: Mobile Studio Technical Footprint & Lighting Architecture
 */

const MOBILE_STUDIO_SPECIFICATIONS = {
  LIGHTING_CONFIGURATIONS: {
    EXECUTIVE_WRAPAROUND: {
      name: 'Executive Wraparound Rembrandt Setup',
      keyLight: '60" Deep Parabolic Softbox with dual internal diffusion baffles',
      fillLight: 'Horizontal clamshell silver/white reflector positioned at chest level',
      hairLight: 'Strip softbox kicker angled 45° from behind to create subtle shoulder and hair separation',
      flatteringFactor: 'Sculpts cheekbones naturally while gently smoothing skin texture without flat wash.'
    },
    HIGH_KEY_CLEAN: {
      name: 'High-Key Modern Corporate Clean',
      keyLight: 'Dual large octaboxes providing even, approachable illumination',
      fillLight: 'Ambient wall bounce fill for crisp modern tech/startup aesthetic',
      hairLight: 'Even rim separation from pure white background',
      flatteringFactor: 'Bright, energetic, and highly approachable for modern digital companies.'
    }
  },

  BACKDROP_SYSTEMS: {
    FASHION_GREY: {
      id: 'fashion_grey',
      name: 'Seamless Neutral Fashion Grey',
      recommendedFor: 'Corporate law, finance, medical practices, executive leadership',
      rationale: 'Universal contrast that allows both dark navy suits and light cream blazers to pop elegantly.'
    },
    CRISP_WHITE: {
      id: 'crisp_white',
      name: 'Modern Pure White / Off-White',
      recommendedFor: 'Technology founders, healthcare specialists, dental practices',
      rationale: 'Seamless integration into website staff directories with pure white backgrounds.'
    },
    ENVIRONMENTAL_OFFICE: {
      id: 'environmental_office',
      name: 'Architectural Environmental Office Bokeh',
      recommendedFor: 'Creative agencies, luxury real estate brokerages, architectural firms',
      rationale: 'Shoots at f/2.0 shallow depth of field, rendering boardrooms and glass corridors into painterly architectural depth.'
    }
  },

  SPACE_AND_POWER_REQUIREMENTS: {
    minimumRoomDimensions: '10 feet wide by 15 feet deep (allows comfortable focal length compression without wide-angle distortion)',
    minimumCeilingHeight: '8 feet clearance for overhead boom arms and softboxes',
    electricalSupply: 'Standard 120V 15A grounded wall outlet (low-draw modern LED strobes draw <400W total)',
    tetheredWorkstation: 'Live 16" MacBook Pro / iPad tethering setup allowing executives to immediately review and approve their favorite image on site.'
  }
};

class MobileStudioDirector {
  static getTechnicalSpecs(setupType = 'EXECUTIVE_WRAPAROUND', backdropKey = 'fashion_grey') {
    return {
      lighting: MOBILE_STUDIO_SPECIFICATIONS.LIGHTING_CONFIGURATIONS[setupType] || MOBILE_STUDIO_SPECIFICATIONS.LIGHTING_CONFIGURATIONS.EXECUTIVE_WRAPAROUND,
      backdrop: MOBILE_STUDIO_SPECIFICATIONS.BACKDROP_SYSTEMS[backdropKey] || MOBILE_STUDIO_SPECIFICATIONS.BACKDROP_SYSTEMS.FASHION_GREY,
      roomRequirements: MOBILE_STUDIO_SPECIFICATIONS.SPACE_AND_POWER_REQUIREMENTS
    };
  }
}

// --- PART 3: TEAM SLOT SCHEDULING ENGINE ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 3: Team Slot Scheduling Engine & Executive Time Allocation
 */

class TeamSlotScheduler {
  /**
   * Generate sequential appointment schedule for team members with lunch and buffer breaks
   */
  static generateSchedule({ teamSize = 6, startTime = '09:00', slotDurationMinutes = 15 }) {
    const size = Math.max(1, Number(teamSize) || 1);
    const duration = Math.max(10, Number(slotDurationMinutes) || 15);

    const [startH, startM] = startTime.split(':').map(Number);
    let currentMinutes = (startH * 60) + startM;

    const schedule = [];

    for (let i = 1; i <= size; i++) {
      // Add a 15-minute buffer break after every 8 people
      if (i > 1 && (i - 1) % 8 === 0) {
        const breakStartH = Math.floor(currentMinutes / 60);
        const breakStartM = currentMinutes % 60;
        currentMinutes += 15;
        const breakEndH = Math.floor(currentMinutes / 60);
        const breakEndM = currentMinutes % 60;

        schedule.push({
          slotNumber: `BREAK`,
          timeWindow: `${String(breakStartH).padStart(2, '0')}:${String(breakStartM).padStart(2, '0')} - ${String(breakEndH).padStart(2, '0')}:${String(breakEndM).padStart(2, '0')}`,
          role: 'Studio Reset & Camera Sensor Check Buffer',
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
        role: `Executive Team Member #${i}`,
        isBreak: false
      });
    }

    const totalDurationHours = Math.round(((currentMinutes - ((startH * 60) + startM)) / 60) * 10) / 10;

    return {
      totalParticipants: size,
      slotDurationMinutes: duration,
      startTime,
      estimatedWrapTime: `${String(Math.floor(currentMinutes / 60)).padStart(2, '0')}:${String(currentMinutes % 60).padStart(2, '0')}`,
      totalProductionDurationHours: totalDurationHours,
      slots: schedule
    };
  }
}

// --- PART 4: COMMERCIAL LICENSING & RETOUCHING STANDARDS ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 4: Retouching Standards & Commercial Corporate Licensing
 */

const RETOUCHING_STANDARDS = {
  PHILOSOPHY: 'Refined Authenticity — Preserving Human Texture',
  CORE_ENHANCEMENTS: [
    'Temporary Blemish Clean: Non-permanent skin blemishes, minor scratches, and sudden breakouts removed seamlessly.',
    'Under-Eye Softening: Dark shadows gently reduced by 40-50% while retaining authentic character and eye crinkles.',
    'Flyaway Hair Tidy: Stoppage of distracting static flyaways along the hairline and collar edge.',
    'Teeth Brightening: Gentle non-chemical whitening keeping tones natural rather than artificial blinding white.',
    'Wardrobe Perfection: Digital lint removal, lapel alignment, and tie knot centering.'
  ],
  STRICT_PROHIBITIONS: [
    'No Artificial Skin Blurring: We never deploy heavy plastic blur filters or robotic AI skin smoothing.',
    'No Anatomical Alterations: We do not alter bone structure, facial geometry, or body proportions.',
    'No Color-Cast Filter Degradation: Skin tones calibrated to true-to-life human warmth.'
  ]
};

const CORPORATE_COMMERCIAL_LICENSE = {
  licenseGrant: 'Perpetual, Worldwide, Royalty-Free Commercial Marketing License',
  licensor: 'Hafsa Noreen Photography Atelier',
  scopeOfUse: [
    'Corporate website, team directory, and executive leadership bios',
    'Professional networking platforms (LinkedIn, Twitter, Bloomberg)',
    'National and regional editorial press releases, print articles, and book covers',
    'Annual reports, corporate investor decks, and conference keynote promotional materials',
    'Internal intranet, employee badges, and marketing brochures'
  ],
  restrictions: [
    'Reselling or sublicensing original image files to third-party stock agencies',
    'Applying third-party filter presets that degrade the professional color calibration'
  ],
  copyrightOwnership: 'Pursuant to the Copyright Act of Canada, Hafsa Noreen Photography retains statutory copyright.'
};

// --- PART 5: EXECUTIVE WARDROBE PREPARATION ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 5: Executive Wardrobe & Grooming Preparation Guidelines
 */

const EXECUTIVE_WARDROBE_RULES = {
  RECOMMENDED_PALETTE: {
    powerColors: ['Deep Navy Blue', 'Charcoal Slate', 'Warm Camel / Tan', 'Forest Green', 'Rich Plum', 'Cream / Soft Ivory'],
    guidance: 'Solid, saturated mid-to-dark jewel tones and rich neutrals frame facial features with executive presence.'
  },
  COLORS_TO_AVOID: {
    prohibited: ['Harsh optical bright white (without a jacket)', 'Stark solid jet black (flattens into dark backdrops)', 'Neon greens / hot pinks', 'Loud Hawaiian florals or complex paisleys'],
    guidance: 'Avoid busy patterns that distract attention away from your eyes.'
  },
  COLLAR_AND_TAILORING: {
    guidance: 'Jackets and blazers should fit snugly across the shoulders without pulling. Shirts should be freshly pressed and hung on sturdy wooden hangers.'
  },
  GROOMING_AND_EYEWEAR: {
    shavingTip: 'For men, shave 2 to 3 hours prior to your scheduled session with a fresh blade and soothing balm to prevent razor burn.',
    makeupTip: 'Matte foundation with light translucent powder prevents unwanted shine under studio softboxes. Bring lip balm or lip color for quick touchups.',
    eyewearTip: 'Clean lenses with an optical microfiber cloth. Ensure frames sit straight on the bridge of the nose.'
  }
,
  JEWELRY_AND_TIE_ALIGNMENT: {
    ties: 'Choose silk or woven wool ties in matte textures with subtle micro-dots or rich solid tones; avoid glossy, shiny satin ties that reflect white studio strobe glare.',
    jewelry: 'Opt for subtle, sculptural jewelry—pearl studs, delicate gold or platinum chains, or classic cufflinks that do not distract from the eyes.'
  },
  SEASONAL_WEATHER_TRANSPORT: {
    transportAdvice: 'During rainy or winter commutes, wear casual transit clothing and carry your suit jacket or blouse on a hanger in a garment bag to arrive wrinkle-free.'
  }
,
  HAIR_AND_MAKEUP_HMUA_PROTOCOL: {
    hairAdvice: 'Schedule haircuts or root color touch-ups 5 to 7 days prior to headshot day so the style settles naturally.',
    hmuaOption: 'On-site professional hair and makeup touch-ups are available for executive teams at $125 CAD per person.'
  }


};

class ExecutiveWardrobeAdvisor {
  static getPrepGuidelines() {
    return EXECUTIVE_WARDROBE_RULES;
  }
}

// --- PART 6: LUXURY HTML PROPOSAL & SCHEDULE RENDERERS ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 6: Luxury HTML Corporate Proposal & Team Schedule Renderers
 */

class HeadshotProposalHtmlRenderer {
  /**
   * Render luxury editorial HTML corporate proposal dossier
   */
  static renderProposalHtml(data) {
    const deliverables = (data.deliverablesPerPerson || []).map(d => `<li style="margin-bottom: 6px;">${d}</li>`).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Corporate Editorial Headshot Proposal — ${data.clientCompany}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #faf9f6; font-family: -apple-system, BlinkMacSystemFont, Arial, serif; color: #232220; line-height: 1.7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 15px; background-color: #faf9f6;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; background-color: #ffffff; border: 1px solid #eae5df; border-radius: 4px; padding: 40px; box-shadow: 0 4px 18px rgba(0,0,0,0.03);">
          <tr>
            <td align="center" style="border-bottom: 1px solid #f2ede8; padding-bottom: 24px;">
              <span style="font-family: Georgia, serif; font-size: 20px; letter-spacing: 0.18em; text-transform: uppercase; color: #1a1918;">HAFSA NOREEN</span>
              <div style="font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #8e8880; margin-top: 6px;">Corporate &amp; Editorial Headshot Commission</div>
              <div style="width: 32px; height: 1px; background-color: #c5a059; margin: 12px auto 0 auto;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px 4px 10px 4px;">
              <h2 style="font-family: Georgia, serif; font-size: 23px; font-weight: normal; color: #1a1918; margin-top: 0;">${data.clientCompany}</h2>
              <div style="font-size: 13px; color: #7a7368; margin-bottom: 20px;">${data.tier} &bull; Team Roster: <strong>${data.teamSize} Executives</strong></div>

              <!-- Investment Breakdown Box -->
              <div style="background-color: #f7f5f2; border-left: 3px solid #c5a059; padding: 20px; margin: 20px 0; border-radius: 2px;">
                <div style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #7a7368; font-weight: 600;">Investment Summary</div>
                <div style="font-size: 24px; font-family: Georgia, serif; color: #1a1918; margin-top: 4px;">${data.investmentBreakdown.estimatedTotal}</div>
                <div style="font-size: 13px; color: #5a5752; margin-top: 6px;">
                  Tier Rate: <strong>${data.investmentBreakdown.ratePerPerson}</strong> &bull; Setup Fee: <strong>${data.investmentBreakdown.mobileSetupFee}</strong>
                </div>
              </div>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Mobile Studio Logistics</h3>
              <p style="font-size: 14px; color: #4a453e;">
                <strong>Location:</strong> ${data.location}<br>
                <strong>Setup:</strong> ${data.onSiteMobileStudio}<br>
                <strong>Estimated Production Window:</strong> ${data.estimatedShootingDuration}
              </p>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Deliverables Per Executive</h3>
              <ul style="font-size: 14px; color: #3c3a37; padding-left: 20px;">${deliverables}</ul>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Delivery &amp; Licensing</h3>
              <p style="font-size: 13px; color: #5a5752;">
                Includes perpetual worldwide commercial digital marketing rights across web, LinkedIn, and press releases. ${data.fastTurnaround}.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 24px; border-top: 1px solid #f2ede8; font-size: 12px; color: #8e8880; line-height: 1.6; text-align: center;">
              Hafsa Noreen Photography Atelier • 151 Randall Street, Oakville, ON L6J 1P5<br>
              Direct Corporate Booking Desk: concierge@hafsanoreen.com | +1 (647) 909-3135
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

class HeadshotRunbookMarkdownRenderer {
  /**
   * Render concise team shoot day schedule in Markdown
   */
  static renderScheduleMarkdown(data) {
    const slots = (data.teamSchedule && data.teamSchedule.slots) || [];
    const slotRows = slots.map(s => `- **${s.timeWindow}**: ${s.role}`).join('\n');

    return `# HAFSA NOREEN PHOTOGRAPHY — CORPORATE SHOOT ROSTER
## Client: ${data.clientCompany} (${data.teamSize} Participants)

**Location:** ${data.location}
**Total Production Duration:** ${data.estimatedShootingDuration}

---
### Scheduled Executive Time Slots
${slotRows}

---
*On-Site Tech Support: hello@hafsanoreen.com*`;
  }
}

// --- PART 7: CORE ENGINE ORCHESTRATOR ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 7: Core Engine Class & Orchestrator
 */








class HeadshotBooker {
  static calculatePricing(teamSize = 5) {
    return HeadshotPricingCalculator.calculatePricing(teamSize);
  }

  static validateParams(params) {
    if (!params || typeof params !== 'object') {
      throw new Error('HeadshotBooker: Execution parameters must be an object.');
    }
    if (params.teamSize !== undefined && (isNaN(Number(params.teamSize)) || Number(params.teamSize) <= 0)) {
      throw new Error('HeadshotBooker: teamSize must be a positive integer.');
    }
    return true;
  }

  static execute(params = {}) {
    this.validateParams(params);

    const {
      company = 'Atelier Client',
      teamSize = 6,
      location = 'Oakville',
      onSite = true,
      includeHmua = false,
      isRushTurnaround = false,
      startTime = '09:00'
    } = params;

    const size = Math.max(1, Number(teamSize) || 6);
    const pricing = this.calculatePricing(size);
    const tierData = HeadshotPricingCalculator.resolveTier(size);

    const basePeopleCost = pricing.perPerson * size;
    const setupFee = onSite ? pricing.setupFee : 0;
    const hmuaCost = includeHmua ? (size * 125) : 0;
    const rushFee = isRushTurnaround ? 250 : 0;

    const subtotal = basePeopleCost + setupFee + hmuaCost + rushFee;
    const ontarioHst = Math.round(subtotal * 0.13 * 100) / 100;
    const grandTotal = Math.round((subtotal + ontarioHst) * 100) / 100;

    const schedule = TeamSlotScheduler.generateSchedule({
      teamSize: size,
      startTime,
      slotDurationMinutes: tierData.minutesPerPerson
    });

    const technicalSpecs = MobileStudioDirector.getTechnicalSpecs();
    const wardrobeGuide = ExecutiveWardrobeAdvisor.getPrepGuidelines();

    const legacyPayload = {
      clientCompany: company,
      teamSize: size,
      tier: pricing.tierLabel,
      location,
      onSiteMobileStudio: onSite
        ? 'Mobile continuous natural-light & softbox setup at client offices'
        : 'Oakville Atelier Studio',
      investmentBreakdown: {
        ratePerPerson: `$${pricing.perPerson} CAD`,
        mobileSetupFee: setupFee > 0 ? `$${setupFee} CAD` : 'Waived for teams 10+',
        estimatedTotal: `$${subtotal} CAD + HST`
      },
      deliverablesPerPerson: [
        `${tierData.deliverablesPerPerson} hand-graded high-resolution editorial portrait files (color & BW)`,
        'Optimized LinkedIn & press release web formats',
        'Private individual selection gallery for each team member',
        'Light blemish and skin-tone retouching preserving natural texture'
      ],
      estimatedShootingDuration: `${schedule.totalProductionDurationHours} hours (approx. ${tierData.minutesPerPerson} minutes per executive)`,
      fastTurnaround: isRushTurnaround
        ? 'Guaranteed 48-hour rush proofing and gallery delivery'
        : 'Standard 5-business-day delivery via private online gallery',
      financialLedger: {
        basePeopleCostCad: basePeopleCost,
        mobileSetupFeeCad: setupFee,
        hmuaArtistTotalCad: hmuaCost,
        rushTurnaroundFeeCad: rushFee,
        subtotalCad: subtotal,
        ontarioHst13Cad: ontarioHst,
        grandTotalCad: grandTotal,
        currency: 'CAD'
      },
      teamSchedule: schedule,
      technicalSpecs,
      wardrobeGuidelines: wardrobeGuide,
      commercialLicense: CORPORATE_COMMERCIAL_LICENSE,
      retouchingStandards: RETOUCHING_STANDARDS
    };

    const htmlProposal = HeadshotProposalHtmlRenderer.renderProposalHtml(legacyPayload);
    const markdownSchedule = HeadshotRunbookMarkdownRenderer.renderScheduleMarkdown(legacyPayload);

    return {
      ...legacyPayload,
      renderedOutputs: {
        htmlProposal,
        markdownSchedule
      }
    };
  }

  static toHtml(data) {
    return HeadshotProposalHtmlRenderer.renderProposalHtml(data);
  }

  static toMarkdown(data) {
    return HeadshotRunbookMarkdownRenderer.renderScheduleMarkdown(data);
  }
}

// --- PART 8: DIAGNOSTIC TEST SUITE ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 8: Automated 12-Check Diagnostic Test Suite
 */

class HeadshotBookerDiagnostics {
  static runDiagnostics(engine) {
    const results = {
      timestamp: new Date().toISOString(),
      testsRun: 0,
      passed: true,
      checks: {}
    };

    // Test 1: Small Team Pricing (3 people)
    const p3 = engine.calculatePricing(3);
    results.testsRun++;
    results.checks.smallTeamPricing = {
      passed: p3.perPerson === 225 && p3.setupFee === 200,
      rate: p3.perPerson,
      setup: p3.setupFee
    };

    // Test 2: Boutique Firm (6 people)
    const b6 = engine.execute({ company: 'Oakville Wealth Partners', teamSize: 6 });
    results.testsRun++;
    results.checks.boutiqueFirm6People = {
      passed: Boolean(b6.tier.includes('Boutique Firm') && b6.investmentBreakdown.ratePerPerson.includes('145')),
      tier: b6.tier
    };

    // Test 3: Corporate Team (12 people - Waived setup fee)
    const c12 = engine.execute({ company: 'Burlington Medical Associates', teamSize: 12 });
    results.testsRun++;
    results.checks.corporateTeam12People = {
      passed: Boolean(c12.tier.includes('Corporate Team') && c12.investmentBreakdown.mobileSetupFee.includes('Waived')),
      setupFee: c12.investmentBreakdown.mobileSetupFee
    };

    // Test 4: Enterprise Roster (25 people)
    const e25 = engine.execute({ company: 'Halton Tech Hub', teamSize: 25 });
    results.testsRun++;
    results.checks.enterpriseRoster25People = {
      passed: Boolean(e25.tier.includes('Enterprise Roster') && e25.investmentBreakdown.ratePerPerson.includes('85')),
      rate: e25.investmentBreakdown.ratePerPerson
    };

    // Test 5: Mobile Studio Technical Specs
    results.testsRun++;
    results.checks.mobileStudioSpecs = {
      passed: Boolean(b6.technicalSpecs.roomRequirements.minimumRoomDimensions.includes('10 feet wide by 15 feet deep')),
      dims: b6.technicalSpecs.roomRequirements.minimumRoomDimensions
    };

    // Test 6: Team Slot Scheduler
    results.testsRun++;
    results.checks.teamScheduleSlots = {
      passed: Boolean(b6.teamSchedule.slots.length === 6 && b6.teamSchedule.slotDurationMinutes === 15),
      slotsCount: b6.teamSchedule.slots.length
    };

    // Test 7: Retouching Standards
    results.testsRun++;
    results.checks.retouchingStandards = {
      passed: Boolean(b6.retouchingStandards.STRICT_PROHIBITIONS.some(p => p.includes('No Artificial Skin Blurring'))),
      prohibitions: b6.retouchingStandards.STRICT_PROHIBITIONS.length
    };

    // Test 8: Commercial License Rights
    results.testsRun++;
    results.checks.commercialLicenseRights = {
      passed: Boolean(b6.commercialLicense.licenseGrant.includes('Perpetual, Worldwide, Royalty-Free')),
      grant: b6.commercialLicense.licenseGrant
    };

    // Test 9: Executive Wardrobe Rules
    results.testsRun++;
    results.checks.executiveWardrobeRules = {
      passed: Boolean(b6.wardrobeGuidelines.RECOMMENDED_PALETTE.powerColors.includes('Deep Navy Blue')),
      colors: b6.wardrobeGuidelines.RECOMMENDED_PALETTE.powerColors.length
    };

    // Test 10: Financial Ledger with 13% Ontario HST
    const fin = b6.financialLedger;
    results.testsRun++;
    results.checks.financialLedgerHST = {
      passed: fin.subtotalCad === (6 * 145 + 150) && fin.ontarioHst13Cad === Math.round(fin.subtotalCad * 0.13 * 100) / 100,
      subtotal: fin.subtotalCad,
      hst: fin.ontarioHst13Cad
    };

    // Test 11: HMUA Addon Integration
    const hmuaTest = engine.execute({ teamSize: 4, includeHmua: true });
    results.testsRun++;
    results.checks.hmuaAddonTest = {
      passed: hmuaTest.financialLedger.hmuaArtistTotalCad === (4 * 125),
      hmuaCost: hmuaTest.financialLedger.hmuaArtistTotalCad
    };

    // Test 12: Luxury HTML Proposal & Markdown Schedule Rendering
    results.testsRun++;
    results.checks.htmlAndMarkdownRendering = {
      passed: Boolean(
        b6.renderedOutputs.htmlProposal.includes('HAFSA NOREEN') &&
        b6.renderedOutputs.htmlProposal.includes('Oakville Wealth Partners') &&
        b6.renderedOutputs.markdownSchedule.includes('# HAFSA NOREEN PHOTOGRAPHY — CORPORATE SHOOT ROSTER')
      ),
      hasBothOutputs: true
    };

    for (const key of Object.keys(results.checks)) {
      if (!results.checks[key].passed) results.passed = false;
    }

    return results;
  }
}

// --- PART 9: BOUNDARY TESTS & BATCH SIMULATION BENCHMARK ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 9: Boundary Edge Cases & 50-Team Benchmark Simulation
 */

class HeadshotBookerSimulations {
  static runBoundaryTests(engine) {
    const boundary = [];

    // 1. Empty parameters defaults safely to team of 6
    try {
      const res = engine.execute({});
      boundary.push({ test: 'Empty parameters defaults safely', passed: Boolean(res && res.teamSize === 6) });
    } catch (e) {
      boundary.push({ test: 'Empty parameters defaults safely', passed: false, error: e.message });
    }

    // 2. Negative teamSize validation
    try {
      engine.execute({ teamSize: -5 });
      boundary.push({ test: 'Negative teamSize validation', passed: false });
    } catch (e) {
      boundary.push({ test: 'Negative teamSize validation', passed: e.message.includes('positive integer') });
    }

    // 3. Zero teamSize validation
    try {
      engine.execute({ teamSize: 0 });
      boundary.push({ test: 'Zero teamSize validation', passed: false });
    } catch (e) {
      boundary.push({ test: 'Zero teamSize validation', passed: e.message.includes('positive integer') });
    }

    // 4. Large enterprise team (80 executives)
    const largeTeam = engine.execute({ teamSize: 80 });
    boundary.push({
      test: 'Large enterprise team scaling',
      passed: Boolean(largeTeam.financialLedger.basePeopleCostCad === (80 * 85))
    });

    return {
      totalBoundaryTests: boundary.length,
      allBoundaryPassed: boundary.every(b => b.passed),
      results: boundary
    };
  }

  static runBatchSimulation(engine, count = 50) {
    const quotes = [];

    for (let i = 1; i <= count; i++) {
      const size = (i * 2); // 2 to 100 people
      const onSite = i % 3 !== 0;
      const includeHmua = i % 4 === 0;
      const isRushTurnaround = i % 5 === 0;

      const res = engine.execute({
        company: `Corporate Enterprise #${i}`,
        teamSize: size,
        onSite,
        includeHmua,
        isRushTurnaround
      });

      quotes.push(res);
    }

    const allHaveTotal = quotes.every(q => q.investmentBreakdown.estimatedTotal.includes('CAD'));
    const allHaveSlots = quotes.every(q => q.teamSchedule.slots.length >= q.teamSize);
    const allHaveHtml = quotes.every(q => q.renderedOutputs && q.renderedOutputs.htmlProposal.length > 500);

    return {
      totalSimulated: count,
      allHaveTotal,
      allHaveSlots,
      allHaveHtml,
      allPassed: allHaveTotal && allHaveSlots && allHaveHtml,
      sampleQuote: quotes[0].investmentBreakdown.estimatedTotal
    };
  }
}

// --- PART 10: INDUSTRY VERTICAL CUSTOMIZATIONS ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 10: Industry Vertical Customizations & Sector Guidelines
 */

const INDUSTRY_VERTICAL_GUIDELINES = {
  CORPORATE_LAW_AND_FINANCE: {
    sector: 'Corporate Law, Litigation & Private Wealth',
    recommendedBackdrop: 'Seamless Neutral Fashion Grey',
    lightingProfile: 'High-contrast subtle Rembrandt lighting commanding immediate trust and gravitas',
    wardrobeAdvice: 'Tailored dark wool suits, crisp collared shirts, silk ties, or structured dark blazers',
    posesFocus: 'Direct, confident eye contact, upright seated or standing arms relaxed, subtle natural smile'
  },

  MEDICAL_AND_HEALTHCARE: {
    sector: 'Medical Specialists, Surgeons & Dental Clinics',
    recommendedBackdrop: 'Modern Pure White or Soft Warm Alabaster',
    lightingProfile: 'Clean, wrap-around high-key lighting projecting hygiene, precision, and reassuring warmth',
    wardrobeAdvice: 'Clean white medical coats, tailored jewel-tone blouses, or fitted navy clinical scrubs',
    posesFocus: 'Gentle, empathetic open expressions putting prospective patients immediately at ease'
  },

  LUXURY_REAL_ESTATE: {
    sector: 'Luxury Real Estate Brokers & Architecture Ateliers',
    recommendedBackdrop: 'Architectural Environmental Office Bokeh or Natural Stone',
    lightingProfile: 'Soft directional golden hour window lighting with shallow f/1.8 background blur',
    wardrobeAdvice: 'High-fashion tailored blazers, statement watches, designer tailoring, polished shoes',
    posesFocus: 'Dynamic environmental leaning against architectural columns, confident walking candids'
  },

  TECH_AND_CREATIVE_AGENCIES: {
    sector: 'Technology Founders, Product Leaders & Design Studios',
    recommendedBackdrop: 'Textured Concrete or Minimalist Studio White',
    lightingProfile: 'Even ambient modern diffusion with crisp catchlights',
    wardrobeAdvice: 'Elevated smart casual—cashmere sweaters, band-collar shirts, unlined linen jackets',
    posesFocus: 'Approachable, relaxed, forward-thinking, and authentic'
  }
,
  LUXURY_HOSPITALITY_AND_CHEFS: {
    sector: 'Executive Chefs, Sommeliers & Luxury Hotel Directors',
    recommendedBackdrop: 'Textured Charcoal Slate or Natural Timber Architecture',
    lightingProfile: 'Warm, tactile directional sidelight highlighting culinary precision and artisanal authority',
    wardrobeAdvice: 'Crisp black or dark grey chef coats, tailored vests, or fine linen jackets with rolled cuffs',
    posesFocus: 'Arms crossed with quiet confidence, focused gaze, or holding tasting glass'
  },

  WELLNESS_AND_CLINICAL_PSYCHOLOGY: {
    sector: 'Clinical Psychologists, Executive Coaches & Wellness Founders',
    recommendedBackdrop: 'Warm Alabaster or Soft Muted Sage',
    lightingProfile: 'Soft, wraparound natural daylight creating deep comfort and non-judgmental presence',
    wardrobeAdvice: 'Soft textured knits, organic neutral tones, comfortable relaxed tailoring',
    posesFocus: 'Gentle, attentive listening posture, warm open smile, tilting head slightly'
  }

};

class IndustryHeadshotStylingDirector {
  static getGuidelines(sectorKey = 'law') {
    const key = (sectorKey || '').toLowerCase();
    if (key.includes('med') || key.includes('dental') || key.includes('health') || key.includes('doctor')) return INDUSTRY_VERTICAL_GUIDELINES.MEDICAL_AND_HEALTHCARE;
    if (key.includes('real') || key.includes('estate') || key.includes('realtor')) return INDUSTRY_VERTICAL_GUIDELINES.LUXURY_REAL_ESTATE;
    if (key.includes('tech') || key.includes('startup') || key.includes('agency') || key.includes('creative')) return INDUSTRY_VERTICAL_GUIDELINES.TECH_AND_CREATIVE_AGENCIES;
    return INDUSTRY_VERTICAL_GUIDELINES.CORPORATE_LAW_AND_FINANCE;
  }
}

// --- PART 11: CORPORATE INVOICING & PROCUREMENT ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 11: Corporate Invoicing, Procurement Protocols & Tax Remittance
 */

const CORPORATE_PROCUREMENT_STANDARDS = {
  vendorLegalEntity: 'Hafsa Noreen Photography Atelier',
  craBusinessNumber: '782910482RT0001',
  remittanceJurisdiction: 'Ontario, Canada (13% HST Remittance)',
  paymentMethodsAccepted: [
    'Corporate EFT Direct Bank Deposit',
    'Interac e-Transfer to accounting@hafsanoreen.com',
    'Corporate Visa / MasterCard / AMEX via Secure Stripe B2B Portal',
    'Corporate Cheque payable to Hafsa Noreen Photography'
  ],
  standardPaymentTerms: '50% deposit retainer upon contract signing; remaining 50% net-15 upon gallery proof delivery.',
  insuranceCoverage: '$2,000,000 CAD Commercial General Liability (CGL) with Certificate of Insurance available upon corporate vendor setup request.'
};

class CorporateProcurementOfficer {
  static getProcurementDetails() {
    return CORPORATE_PROCUREMENT_STANDARDS;
  }

  static formatInvoiceDossier({ company = 'Client Corp', teamSize = 10, subtotalCad = 1100, hstCad = 143, grandTotalCad = 1243 }) {
    const invoiceNumber = `CORP-${Date.now().toString().slice(-6)}`;
    return {
      invoiceNumber,
      vendor: CORPORATE_PROCUREMENT_STANDARDS.vendorLegalEntity,
      craBusinessNumber: CORPORATE_PROCUREMENT_STANDARDS.craBusinessNumber,
      clientCompany: company,
      lineItems: [
        {
          description: `Executive Editorial Headshot Production (${teamSize} team members)`,
          amountCad: subtotalCad
        }
      ],
      subtotalCad,
      ontarioHst13Cad: hstCad,
      grandTotalCad,
      paymentTerms: CORPORATE_PROCUREMENT_STANDARDS.standardPaymentTerms,
      taxDeductibility: '100% legitimate corporate marketing, PR, and employee brand development business expense.'
    };
  }
}

// --- PART 12: EXECUTIVE EXPRESSION COACHING ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 12: Executive Expression Coaching, Posture Mechanics & Prompting
 */

const EXPRESSION_COACHING_TECHNIQUES = [
  {
    techniqueName: 'The Subtle Lower-Lid Squinch',
    problemAddressed: 'Wide-eyed "deer in headlights" anxiety look common under studio flash.',
    coachingDirective: 'Gently lift the lower eyelids by 10-15% while keeping the upper brow completely relaxed. This instantly shifts an expression from uncertainty to commanding confidence, intelligence, and warmth.'
  },
  {
    techniqueName: 'The Jawline Forward-and-Down Thrust',
    problemAddressed: 'Compression of the neck creating visual double chins or weak jawlines.',
    coachingDirective: 'Imagine a puppet string gently pulling the crown of your head upward. Now, bring your ears and chin two inches forward toward the camera lens, then tilt your chin downward by half an inch. This casts a sharp shadow under the jaw, sculpting a crisp, defined jawline.'
  },
  {
    techniqueName: 'The Micro-Exhale & Natural Smile',
    problemAddressed: 'Forced, rigid smiles with tense facial muscles and locked lips.',
    coachingDirective: 'Take a deep breath in through your nose, close your eyes, and as you exhale through your mouth, open your eyes and smile as if greeting a dear colleague entering your office. The smile starts in the eyes, not the mouth.'
  },
  {
    techniqueName: 'The 45-Degree Shoulder Angle & Back Foot Weight',
    problemAddressed: 'Flat, broad, passport-style square-to-camera posture.',
    coachingDirective: 'Turn shoulders 45 degrees away from the main softbox; shift 70% of your body weight onto your back foot. Turn your face back toward the lens. This creates an elegant, slender profile with pleasing diagonal shoulder lines.'
  }
,
  {
    techniqueName: 'The Eye-Contact Connection Anchor',
    problemAddressed: 'Unfocused, vacant staring straight through the camera lens glass.',
    coachingDirective: 'Look directly at the tiny reflection of the key softbox inside the lens glass. Treat the lens not as a piece of cold technology, but as a trusted prospective client you are meeting for coffee.'
  },
  {
    techniqueName: 'The Neck Lengthening Crown Lift',
    problemAddressed: 'Slouching shoulders and compressed necklines under heavy business suits.',
    coachingDirective: 'Roll shoulders back, drop shoulder blades down into your back pockets, and lengthen your neck. This immediately projects commanding executive authority.'
  }

];

class ExecutiveExpressionCoach {
  static getCoachingTechniques() {
    return EXPRESSION_COACHING_TECHNIQUES;
  }
}

// --- PART 13: COMPOSITE TEAM PHOTOGRAPHY ---
/**
 * HAFFU — Corporate & Editorial Team Headshot Booking Engine
 * Part 13: Executive Composite Team Photography & Group Production
 */

const COMPOSITE_GROUP_SYSTEM = {
  methodology: 'Individual High-Resolution Capture with Architectural Compositing',
  keyAdvantages: [
    'Zero Executive Calendar Clashes: Team members are photographed during their individual 15-minute slots; no need to halt corporate operations for a 20-person group setup.',
    'Effortless Future-Proofing: When new partners join or team members depart, individuals can be added or removed without re-shooting the entire executive team.',
    'Flawless Individual Posing: Every single executive is guaranteed to have their best expression, flattering lighting, and sharpest focus.',
    'Consistent Lighting Physics: Calibrated continuous key light height and shadow direction ensure seamless realism when assembled into the final group panorama.'
  ],
  productionPricing: {
    baseCompositeSetupCad: 350.00,
    perPersonCompositingCad: 45.00,
    backgroundOptions: ['Executive Boardroom Glass Panorama', 'Historic Brick & Timber Loft', 'Minimalist Gradient White']
  }
};

class CompositeTeamBuilder {
  static getCompositeSpecs() {
    return COMPOSITE_GROUP_SYSTEM;
  }

  static calculateCompositePricing(teamSize = 10) {
    const size = Math.max(2, Number(teamSize) || 10);
    const subtotal = COMPOSITE_GROUP_SYSTEM.productionPricing.baseCompositeSetupCad +
      (size * COMPOSITE_GROUP_SYSTEM.productionPricing.perPersonCompositingCad);
    const hst = Math.round(subtotal * 0.13 * 100) / 100;
    const grandTotal = Math.round((subtotal + hst) * 100) / 100;

    return {
      teamSize: size,
      baseSetupCad: COMPOSITE_GROUP_SYSTEM.productionPricing.baseCompositeSetupCad,
      perPersonRateCad: COMPOSITE_GROUP_SYSTEM.productionPricing.perPersonCompositingCad,
      subtotalCad: subtotal,
      ontarioHst13Cad: hst,
      grandTotalCad: grandTotal,
      turnaroundDays: 7
    };
  }
}

// Diagnostic delegation and test suite wiring
HeadshotBooker.runDiagnostics = function() {
  return HeadshotBookerDiagnostics.runDiagnostics(this);
};

HeadshotBooker.runFullTestSuite = function() {
  const diag = HeadshotBookerDiagnostics.runDiagnostics(this);
  const boundary = HeadshotBookerSimulations.runBoundaryTests(this);
  const sim = HeadshotBookerSimulations.runBatchSimulation(this, 50);
  return {
    engine: "HeadshotBooker",
    timestamp: new Date().toISOString(),
    allPassed: diag.passed && boundary.allBoundaryPassed && sim.allPassed,
    diagnostics: diag,
    boundaryTests: boundary,
    batchSimulation: sim
  };
};

// Static Helper & Constant Extensions
HeadshotBooker.HEADSHOT_VOLUME_TIERS = HEADSHOT_VOLUME_TIERS;
HeadshotBooker.MOBILE_STUDIO_SPECIFICATIONS = MOBILE_STUDIO_SPECIFICATIONS;
HeadshotBooker.RETOUCHING_STANDARDS = RETOUCHING_STANDARDS;
HeadshotBooker.CORPORATE_COMMERCIAL_LICENSE = CORPORATE_COMMERCIAL_LICENSE;
HeadshotBooker.EXECUTIVE_WARDROBE_RULES = EXECUTIVE_WARDROBE_RULES;
HeadshotBooker.INDUSTRY_VERTICAL_GUIDELINES = INDUSTRY_VERTICAL_GUIDELINES;
HeadshotBooker.CORPORATE_PROCUREMENT_STANDARDS = CORPORATE_PROCUREMENT_STANDARDS;
HeadshotBooker.generateSchedule = function(opts) { return TeamSlotScheduler.generateSchedule(opts); };
HeadshotBooker.getSectorGuidelines = function(sector) { return IndustryHeadshotStylingDirector.getGuidelines(sector); };
HeadshotBooker.formatInvoiceDossier = function(opts) { return CorporateProcurementOfficer.formatInvoiceDossier(opts); };
HeadshotBooker.EXPRESSION_COACHING_TECHNIQUES = EXPRESSION_COACHING_TECHNIQUES;
HeadshotBooker.COMPOSITE_GROUP_SYSTEM = COMPOSITE_GROUP_SYSTEM;
HeadshotBooker.getCoachingTechniques = function() { return ExecutiveExpressionCoach.getCoachingTechniques(); };
HeadshotBooker.calculateCompositePricing = function(size) { return CompositeTeamBuilder.calculateCompositePricing(size); };

module.exports = HeadshotBooker;
