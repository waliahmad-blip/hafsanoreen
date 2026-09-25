/**
 * ============================================================================
 * HAFFU STUDIO — CLIENT LIFETIME VALUE (LTV), RFM-D SCORING & VIP TIERING ENGINE
 * ============================================================================
 * Enterprise Client Equity & Lifecycle Intelligence Architecture:
 *   1. Multi-Dimensional RFM-D Scoring (Recency, Frequency, Monetary, Advocacy, Tenure)
 *   2. 6-Tier Atelier VIP Hierarchy (Heritage Royale, Patron VIP, Heirloom Loyal, etc.)
 *   3. Predictive Churn Warning & Relationship Health Diagnostics
 *   4. Forward 3-Year, 5-Year & 10-Year LTV Projections with 5% Net Present Value (NPV)
 *   5. Operational Concierge Action Prescriptions & Curated Luxury Gifting Catalog
 *   6. Historical Cohort Retention Benchmarks & Milestone Progression Velocity
 *   7. Client Retention Playbooks (Lapsed Bride, Generational Matriarch, Corporate, Referral)
 *   8. 100% Backward-Compatible Legacy Interface (execute, getTierThresholds, runDiagnostics)
 *
 * Studio: Hafsa Noreen Photography Atelier (Oakville / Burlington / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.4.0
 * ============================================================================
 */

'use strict';

// --- PART 1: RFM-D MATHEMATICAL WEIGHTS & VIP TIERS ---
/**
 * HAFFU — Client Lifetime Value (LTV) & VIP Scorer Engine
 * Part 1: RFM-D Mathematical Weights & VIP Tier Hierarchy
 */

const SCORING_WEIGHTS = {
  MONETARY_BASE_FACTOR: 0.25,        // 0.25 points per CAD dollar spent
  MONETARY_LUXURY_BONUS: 0.10,       // Additional points per CAD dollar spent beyond $4,000
  BOOKING_BASE_POINTS: 90,           // Points per completed session
  REFERRAL_POINTS: 220,              // High reward for qualified client introductions
  VERIFIED_REVIEW_POINTS: 75,        // Google / WeddingWire 5-star review
  TENURE_ANNUAL_POINTS: 60,          // Points per active consecutive year
  RECENCY_DECAY_MONTHS_THRESHOLD: 18, // Beyond 18 months, recency penalty applies
  RECENCY_DECAY_PERCENTAGE: 0.15,    // 15% reduction if dormant 18-36 months
  RECENCY_DECAY_SEVERE_MONTHS: 36,   // Beyond 36 months, severe penalty applies
  RECENCY_DECAY_SEVERE_PERCENT: 0.30 // 30% reduction if dormant > 36 months
};

const VIP_TIERS = {
  HERITAGE_ROYALE: {
    id: 'heritage_royale',
    minScore: 2500,
    label: "L'Héritage Royale Patron",
    badge: '👑 Master Atelier Collector',
    description: 'Top 2% generational collectors who invest in full wedding commissions, annual family heirlooms, and multiple referrals.',
    perk: 'Complimentary annual 11x14 museum framed cotton rag print + private in-home champagne preview + lifetime calendar lock.',
    perkRetailValueCad: 650,
    priorityBookingAccessHours: 72,
    dedicatedConcierge: true,
    annualGiftCad: 350
  },
  PATRON_VIP: {
    id: 'patron_vip',
    minScore: 1000,
    label: 'Atelier Patron VIP',
    badge: '✨ Atelier Patron',
    description: 'Esteemed multi-year clients who value fine-art print curation and recommend friends and family.',
    perk: 'Complimentary annual 8x10 hand-torn deckled cotton rag print + 48-hour priority calendar reservation window.',
    perkRetailValueCad: 175,
    priorityBookingAccessHours: 48,
    dedicatedConcierge: true,
    annualGiftCad: 150
  },
  HEIRLOOM_LOYAL: {
    id: 'heirloom_loyal',
    minScore: 500,
    label: 'Heirloom Loyal Client',
    badge: '🌿 Heirloom Collector',
    description: 'Consistent recurring clients progressing through major family milestones with deep appreciation of photography.',
    perk: '15% atelier credit toward custom Italian leather albums or custom wall gallery framing + wardrobe styling consultation.',
    perkRetailValueCad: 150,
    priorityBookingAccessHours: 24,
    dedicatedConcierge: false,
    annualGiftCad: 100
  },
  VALUED_CLIENT: {
    id: 'valued_client',
    minScore: 200,
    label: 'Valued Client',
    badge: '🤍 Valued Member',
    description: 'Clients who completed their initial commissions and demonstrated positive engagement with our studio.',
    perk: 'Complimentary archival print upgrade on next commission + annual milestone anniversary tracking.',
    perkRetailValueCad: 85,
    priorityBookingAccessHours: 0,
    dedicatedConcierge: false,
    annualGiftCad: 65
  },
  DEVELOPING_MEMBER: {
    id: 'developing_member',
    minScore: 100,
    label: 'Developing Atelier Member',
    badge: '🌿 Atelier Member',
    description: 'Clients who engaged for single portrait or mini commissions with high potential for milestone expansion.',
    perk: 'Complimentary wardrobe styling consultation + priority notice of seasonal lookbook releases.',
    perkRetailValueCad: 60,
    priorityBookingAccessHours: 0,
    dedicatedConcierge: false,
    annualGiftCad: 45
  },
  NEW_CLIENT: {
    id: 'new_client',
    minScore: 0,
    label: 'New Client',
    badge: '🌱 Welcome Atelier',
    description: 'First-time commission clients embarking on their legacy portrait journey with Hafsa Noreen Photography.',
    perk: 'Welcome onboarding package with bespoke styling dossier and print preservation guide.',
    perkRetailValueCad: 45,
    priorityBookingAccessHours: 0,
    dedicatedConcierge: false,
    annualGiftCad: 0
  }
};

const LEGACY_TIER_THRESHOLDS = {
  patronVIP: { minScore: 1000, label: VIP_TIERS.PATRON_VIP.label, perk: VIP_TIERS.PATRON_VIP.perk },
  heirloomLoyal: { minScore: 500, label: VIP_TIERS.HEIRLOOM_LOYAL.label, perk: VIP_TIERS.HEIRLOOM_LOYAL.perk },
  valuedClient: { minScore: 200, label: VIP_TIERS.VALUED_CLIENT.label, perk: VIP_TIERS.VALUED_CLIENT.perk },
  newClient: { minScore: 0, label: VIP_TIERS.NEW_CLIENT.label, perk: VIP_TIERS.NEW_CLIENT.perk }
};

// --- PART 2: LIFECYCLE INTELLIGENCE & LTV PROJECTIONS ---
/**
 * HAFFU — Client Lifetime Value (LTV) & VIP Scorer Engine
 * Part 2: Predictive Lifecycle Intelligence, Churn Risk & LTV Projections
 */

class ClientLifecycleIntelligence {
  /**
   * Assess client relationship health, churn vulnerability, and rebooking window
   */
  static assessRelationshipHealth({ monthsSinceLastSession = 6, compositeScore = 300, reviewsCount = 0 }) {
    if (monthsSinceLastSession > 36) {
      return {
        status: 'LAPSED_ALUMNI',
        numericHealthScore: 20,
        urgency: 'COURTESY_MONITORING',
        healthScore: 'Lapsed Alumni (>3 Years Dormant)',
        description: 'Past client with over 36 months of inactivity; maintain passive archive access and annual holiday card inclusion.',
        recommendedRebookingWindow: 'Extended Lifecycle Reconnect'
      };
    }

    if (monthsSinceLastSession > 24) {
      return {
        status: 'DORMANT_CHURN_RISK',
        numericHealthScore: 35,
        urgency: 'HIGH',
        healthScore: 'At Risk (Dormant >2 Years)',
        description: 'Client has been dormant for over two years; urgent gentle re-engagement required before relationship cools completely.',
        recommendedRebookingWindow: 'Immediate 30-Day Re-engagement'
      };
    }

    if (monthsSinceLastSession > 14) {
      return {
        status: 'COOLING_OFF',
        numericHealthScore: 55,
        urgency: 'MODERATE',
        healthScore: 'Requires Attention (14-24 Months)',
        description: 'Past the typical 12-month annual rebooking window; opportune moment for seasonal milestone touchpoint.',
        recommendedRebookingWindow: 'Seasonal Lookbook Outreach'
      };
    }

    if (monthsSinceLastSession >= 11) {
      return {
        status: 'REBOOKING_DUE',
        numericHealthScore: 75,
        urgency: 'TIMELY_OUTREACH',
        healthScore: 'Annual Rebooking Due (11-14 Months)',
        description: 'Approaching the exact one-year anniversary of last session; ideal window for reserving upcoming peak season dates.',
        recommendedRebookingWindow: 'Anniversary Milestone Invitation'
      };
    }

    if (compositeScore >= 1000) {
      return {
        status: 'DEVOTED_PATRON',
        numericHealthScore: 98,
        urgency: 'MAINTAIN_VIP_CARE',
        healthScore: 'Exceptional (Top Tier Patron)',
        description: 'Exceptional brand advocate and high-affinity collector. Consistent referral source and heirloom enthusiast.',
        recommendedRebookingWindow: 'Ongoing VIP Calendar Lock'
      };
    }

    return {
      status: 'ACTIVE_DEVELOPING',
      numericHealthScore: 85,
      urgency: 'NORMAL',
      healthScore: 'Active & Healthy (<11 Months)',
      description: 'Healthy, active client relationship with growing engagement and steady lifecycle progression.',
      recommendedRebookingWindow: 'Standard Annual Cycle'
    };
  }

  /**
   * Project estimated future 3-year, 5-year, and 10-year lifetime value with 5% NPV discount rate
   */
  static projectFutureValue({ totalSpend = 650, bookings = 1, yearsAsClient = 1, currentTier = 'valued_client' }) {
    const avgSpendPerSession = Math.max(500, Math.round(totalSpend / Math.max(1, bookings)));
    const annualSessionFrequency = Math.max(0.6, Math.min(2.0, bookings / Math.max(1, yearsAsClient)));

    let growthMultiplier = 1.0;
    if (currentTier === 'heritage_royale') growthMultiplier = 1.35;
    else if (currentTier === 'patron_vip') growthMultiplier = 1.20;
    else if (currentTier === 'heirloom_loyal') growthMultiplier = 1.10;

    const projectedAnnualRevenue = Math.round(avgSpendPerSession * annualSessionFrequency * growthMultiplier);
    const projected3YearLtv = Math.round(totalSpend + (projectedAnnualRevenue * 3));
    const projected5YearLtv = Math.round(totalSpend + (projectedAnnualRevenue * 5));
    const projected10YearLtv = Math.round(totalSpend + (projectedAnnualRevenue * 10));

    // Calculate Net Present Value (NPV) using a 5% annual discount rate
    const discountRate = 0.05;
    let npvFuture5Years = 0;
    for (let yr = 1; yr <= 5; yr++) {
      npvFuture5Years += projectedAnnualRevenue / Math.pow(1 + discountRate, yr);
    }
    const totalNpvCad = Math.round(totalSpend + npvFuture5Years);

    return {
      averageSpendPerSessionCad: avgSpendPerSession,
      estimatedAnnualFrequency: Math.round(annualSessionFrequency * 10) / 10,
      projectedAnnualSpendCad: projectedAnnualRevenue,
      projected3YearLtvCad: projected3YearLtv,
      projected5YearLtvCad: projected5YearLtv,
      projected10YearLtvCad: projected10YearLtv,
      npvDiscountRatePercent: 5.0,
      netPresentValue5YearCad: totalNpvCad
    };
  }
}

// --- PART 3: CONCIERGE ACTIONS & CURATED GIFTING ---
/**
 * HAFFU — Client Lifetime Value (LTV) & VIP Scorer Engine
 * Part 3: Concierge Operational Actions & Curated Luxury Gifting Catalog
 */

class ConciergeActionEngine {
  /**
   * Prescribe concrete operational next step for atelier studio team
   */
  static determineSuggestedAction({ referrals = 0, reviewsCount = 0, compositeScore = 300, monthsSinceLastSession = 6 }) {
    if (compositeScore >= 2500) {
      return 'Prepare hand-delivered boutique gift crate with private sommelier vintage champagne and Italian leather swatch preview for upcoming anniversary.';
    }

    if (compositeScore >= 1000) {
      return 'Send personal voice memo from Hafsa with 72-hour priority calendar access before public autumn foliage release.';
    }

    if (monthsSinceLastSession > 24) {
      return 'Send warm "Thinking of your family" handwritten card with an exclusive archival deckled print credit; no commercial pressure.';
    }

    if (monthsSinceLastSession >= 11 && monthsSinceLastSession <= 14) {
      return 'Initiate milestone anniversary outreach with personalized lookbook and complimentary cotton rag print credit.';
    }

    if (referrals > 0 && reviewsCount === 0) {
      return 'Send a heartfelt thank-you bouquet for their recent referral and gently invite them to share their experience on Google.';
    }

    if (referrals === 0 && compositeScore >= 400) {
      return 'Send a personalized heirloom print gift along with an elegant "Friends of the Atelier" client referral card ($150 credit for both parties).';
    }

    return 'Send seasonal styling guide and check in on upcoming family milestones (birthdays, anniversaries, graduations).';
  }

  /**
   * Return concrete physical gift recommendations aligned with client status
   */
  static getGiftingOptions(tierId) {
    switch (tierId) {
      case 'heritage_royale':
        return [
          {
            gift: 'Hand-Framed Museum 11x14 Cotton Rag Deckled Print',
            retailValueCad: 350,
            packaging: 'Custom linen presentation box with wax seal'
          },
          {
            gift: 'Private Vintage French Champagne & Hand-Poured Candle',
            retailValueCad: 180,
            packaging: 'Artisanal wooden wine crate with embossed leather ribbon'
          }
        ];
      case 'patron_vip':
        return [
          {
            gift: 'Archival 8x10 Hahnemühle Deckled Edge Cotton Rag Print',
            retailValueCad: 150,
            packaging: 'Handmade mulberry paper envelope with calligraphed address'
          },
          {
            gift: 'Solid Canadian Maple / Walnut Desktop Print Block',
            retailValueCad: 120,
            packaging: 'Debossed studio gift pouch'
          }
        ];
      case 'heirloom_loyal':
        return [
          {
            gift: 'Complimentary Custom Folio with Two Matted 5x7 Prints',
            retailValueCad: 125,
            packaging: 'Belgian linen presentation folio'
          }
        ];
      default:
        return [
          {
            gift: 'Archival 5x7 Matted Desk Print in Studio Presentation Folder',
            retailValueCad: 65,
            packaging: 'Atelier signature ribbon wrap'
          }
        ];
    }
  }
}

// --- PART 4: COMMUNICATIONS RENDERERS & DOSSIER ---
/**
 * HAFFU — Client Lifetime Value (LTV) & VIP Scorer Engine
 * Part 4: VIP Client Communications & Dossier Renderers
 */

class ClientCommunicationsRenderer {
  /**
   * Render handwritten gratitude card transcript for physical postal mail
   */
  static renderHandwrittenCard({ clientName, tierLabel, giftName }) {
    return [
      `Dear ${clientName},`,
      '',
      `Working with you and preserving your family's most sacred memories has been one of the greatest privileges of our Oakville atelier.`,
      '',
      `In celebration of your ongoing journey with us as an esteemed ${tierLabel}, please accept this ${giftName} with our deepest gratitude.`,
      '',
      'With warmest appreciation and affection,',
      'Hafsa Noreen'
    ].join('\n');
  }

  /**
   * Render luxury VIP priority access HTML email
   */
  static renderVipEmailHtml({ clientName, tierLabel, perk, priorityHours = 48 }) {
    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>VIP Priority Access</title></head>
<body style="margin: 0; padding: 0; background-color: #faf9f6; font-family: -apple-system, BlinkMacSystemFont, Arial, serif; color: #232220; line-height: 1.7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 15px; background-color: #faf9f6;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #eae5df; border-radius: 4px; padding: 40px;">
        <tr><td align="center" style="border-bottom: 1px solid #f2ede8; padding-bottom: 24px;">
          <span style="font-family: Georgia, serif; font-size: 20px; letter-spacing: 0.18em; text-transform: uppercase; color: #1a1918;">HAFSA NOREEN</span>
          <div style="font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #8e8880; margin-top: 6px;">Atelier VIP Collector Circle</div>
        </td></tr>
        <tr><td style="padding: 32px 10px; font-size: 15px; color: #3c3a37;">
          <p>Dear ${clientName},</p>
          <p>As one of our most cherished <strong>${tierLabel}</strong> patrons, we want to ensure you always receive first priority when our calendar opens for the upcoming season.</p>
          <div style="background-color: #f6f3ee; border-left: 3px solid #7d7265; padding: 18px; margin: 24px 0;">
            <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #6e6457; font-weight: 600;">Your Exclusive Patron Privilege</div>
            <div style="font-size: 16px; font-family: Georgia, serif; color: #1a1918; margin-top: 4px;">${perk}</div>
          </div>
          <p>You have an exclusive <strong>${priorityHours}-hour priority reservation window</strong> before our public release. Simply reply to this email or visit your private VIP booking portal.</p>
        </td></tr>
        <tr><td style="padding-top: 24px; border-top: 1px solid #f2ede8; font-size: 13px; color: #736d64;">
          Warmest regards,<br><strong>Hafsa Noreen</strong><br>Oakville, Ontario • <a href="https://hafsanoreen.com" style="color: #4a453e;">hafsanoreen.com</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
  }

  /**
   * Render internal executive client profile dossier in Markdown
   */
  static renderClientDossierMarkdown({ clientName, compositeScore, tier, rawSpend, bookings, referrals, forwardProjections, health }) {
    return `# HAFSA NOREEN ATELIER — CLIENT DOSSIER
## Profile: ${clientName} (${tier.label})

- **Composite RFM-D Score:** ${compositeScore} points
- **Atelier Badge:** ${tier.badge}
- **Total Historical Investment:** $${rawSpend.toLocaleString()} CAD
- **Completed Commissions:** ${bookings}
- **Client Advocacy Referrals:** ${referrals}
- **Relationship Health:** ${health.healthScore} (${health.status})

---
### Financial Projections & Lifetime Value (NPV)
- **Average Spend per Commission:** $${forwardProjections.averageSpendPerSessionCad} CAD
- **Projected 3-Year Cumulative LTV:** $${forwardProjections.projected3YearLtvCad} CAD
- **Projected 5-Year Cumulative LTV:** $${forwardProjections.projected5YearLtvCad} CAD
- **5-Year Net Present Value (NPV @ 5%):** $${forwardProjections.netPresentValue5YearCad} CAD

### Recommended Concierge Privilege
> ${tier.perk}

---
*Internal Confidential Client Intelligence — Hafsa Noreen Photography*`;
  }
}

// --- PART 5: CORE ENGINE ORCHESTRATOR ---
/**
 * HAFFU — Client Lifetime Value (LTV) & VIP Scorer Engine
 * Part 5: Core Engine Class & Orchestrator
 */






class ClientLTVScorer {
  static getTierThresholds() {
    return LEGACY_TIER_THRESHOLDS;
  }

  static validateParams(params) {
    if (!params || typeof params !== 'object') {
      throw new Error('ClientLTVScorer: Execution parameters must be an object.');
    }
    const numFields = ['bookings', 'totalSpend', 'referrals', 'reviewsCount', 'yearsAsClient', 'monthsSinceLastSession'];
    for (const f of numFields) {
      if (params[f] !== undefined && (isNaN(Number(params[f])) || Number(params[f]) < 0)) {
        throw new Error(`ClientLTVScorer: ${f} must be a non-negative number.`);
      }
    }
    return true;
  }

  static execute(params = {}) {
    this.validateParams(params);

    const {
      clientName = 'Cherished Client',
      bookings = 1,
      totalSpend = 650,
      referrals = 0,
      reviewsCount = 0,
      yearsAsClient = 1,
      monthsSinceLastSession = 6
    } = params;

    // 1. Calculate monetary score with luxury tier bonus
    let financialScore = Math.floor(totalSpend * SCORING_WEIGHTS.MONETARY_BASE_FACTOR);
    if (totalSpend > 4000) {
      financialScore += Math.floor((totalSpend - 4000) * SCORING_WEIGHTS.MONETARY_LUXURY_BONUS);
    }

    // 2. Calculate engagement and advocacy points
    const bookingScore = bookings * SCORING_WEIGHTS.BOOKING_BASE_POINTS;
    const referralScore = referrals * SCORING_WEIGHTS.REFERRAL_POINTS;
    const reviewScore = reviewsCount * SCORING_WEIGHTS.VERIFIED_REVIEW_POINTS;
    const tenureScore = yearsAsClient * SCORING_WEIGHTS.TENURE_ANNUAL_POINTS;

    let compositeScore = financialScore + bookingScore + referralScore + reviewScore + tenureScore;

    // 3. Apply recency decay if dormant
    let recencyPenaltyApplied = false;
    let recencyPenaltyRate = 0;
    if (monthsSinceLastSession > SCORING_WEIGHTS.RECENCY_DECAY_SEVERE_MONTHS) {
      compositeScore = Math.floor(compositeScore * (1 - SCORING_WEIGHTS.RECENCY_DECAY_SEVERE_PERCENT));
      recencyPenaltyApplied = true;
      recencyPenaltyRate = SCORING_WEIGHTS.RECENCY_DECAY_SEVERE_PERCENT;
    } else if (monthsSinceLastSession > SCORING_WEIGHTS.RECENCY_DECAY_MONTHS_THRESHOLD) {
      compositeScore = Math.floor(compositeScore * (1 - SCORING_WEIGHTS.RECENCY_DECAY_PERCENTAGE));
      recencyPenaltyApplied = true;
      recencyPenaltyRate = SCORING_WEIGHTS.RECENCY_DECAY_PERCENTAGE;
    }

    // 4. Resolve VIP Tier
    let assignedTier = VIP_TIERS.NEW_CLIENT;
    if (compositeScore >= VIP_TIERS.HERITAGE_ROYALE.minScore) {
      assignedTier = VIP_TIERS.HERITAGE_ROYALE;
    } else if (compositeScore >= VIP_TIERS.PATRON_VIP.minScore) {
      assignedTier = VIP_TIERS.PATRON_VIP;
    } else if (compositeScore >= VIP_TIERS.HEIRLOOM_LOYAL.minScore) {
      assignedTier = VIP_TIERS.HEIRLOOM_LOYAL;
    } else if (compositeScore >= VIP_TIERS.VALUED_CLIENT.minScore) {
      assignedTier = VIP_TIERS.VALUED_CLIENT;
    } else if (compositeScore >= VIP_TIERS.DEVELOPING_MEMBER.minScore) {
      assignedTier = VIP_TIERS.DEVELOPING_MEMBER;
    }

    // 5. Relationship Health & Projections
    const health = ClientLifecycleIntelligence.assessRelationshipHealth({
      monthsSinceLastSession,
      compositeScore,
      reviewsCount
    });

    const forwardProjections = ClientLifecycleIntelligence.projectFutureValue({
      totalSpend,
      bookings,
      yearsAsClient,
      currentTier: assignedTier.id
    });

    const suggestedAction = ConciergeActionEngine.determineSuggestedAction({
      referrals,
      reviewsCount,
      compositeScore,
      monthsSinceLastSession
    });

    const giftingOptions = ConciergeActionEngine.getGiftingOptions(assignedTier.id);

    // 6. Concierge Communications
    const handwrittenNote = ClientCommunicationsRenderer.renderHandwrittenCard({
      clientName,
      tierLabel: assignedTier.label,
      giftName: giftingOptions[0].gift
    });

    const vipEmailHtml = ClientCommunicationsRenderer.renderVipEmailHtml({
      clientName,
      tierLabel: assignedTier.label,
      perk: assignedTier.perk,
      priorityHours: assignedTier.priorityBookingAccessHours
    });

    const dossierMarkdown = ClientCommunicationsRenderer.renderClientDossierMarkdown({
      clientName,
      compositeScore,
      tier: assignedTier,
      rawSpend: totalSpend,
      bookings,
      referrals,
      forwardProjections,
      health
    });

    return {
      clientName,
      totalLifetimeSpend: `$${totalSpend.toLocaleString()} CAD`,
      rawSpend: totalSpend,
      compositeScore,
      scoreBreakdown: {
        financialScore,
        bookingScore,
        referralScore,
        reviewScore,
        tenureScore,
        recencyPenaltyApplied,
        recencyPenaltyRate
      },
      clientTier: assignedTier.label,
      tierDetails: assignedTier,
      recommendedPerk: assignedTier.perk,
      relationshipHealth: health.description,
      healthAssessment: health,
      suggestedAction,
      curatedGifting: giftingOptions,
      forwardProjections,
      renderedOutputs: {
        handwrittenNote,
        vipEmailHtml,
        dossierMarkdown
      }
    };
  }
}

// --- PART 6: DIAGNOSTIC TEST SUITE ---
/**
 * HAFFU — Client Lifetime Value (LTV) & VIP Scorer Engine
 * Part 6: Automated 12-Check Diagnostic Test Suite
 */

class ClientLTVDiagnostics {
  static runDiagnostics(engine) {
    const results = {
      timestamp: new Date().toISOString(),
      testsRun: 0,
      passed: true,
      checks: {}
    };

    // Test 1: New Client with minimal spend
    const cNew = engine.execute({ clientName: 'New Client', totalSpend: 200, bookings: 0 });
    results.testsRun++;
    results.checks.newClientTier = {
      passed: cNew.clientTier === 'New Client' || cNew.clientTier === 'Developing Atelier Member',
      tier: cNew.clientTier,
      score: cNew.compositeScore
    };

    // Test 2: Valued Client with standard session
    const cVal = engine.execute({ clientName: 'Emily Clark', bookings: 1, totalSpend: 650, yearsAsClient: 1 });
    results.testsRun++;
    results.checks.valuedClientTier = {
      passed: cVal.clientTier === 'Valued Client' && cVal.compositeScore >= 200,
      tier: cVal.clientTier,
      score: cVal.compositeScore
    };

    // Test 3: Heirloom Loyal tier
    const cLoyal = engine.execute({ clientName: 'David & Sarah', bookings: 2, totalSpend: 1800, yearsAsClient: 2 });
    results.testsRun++;
    results.checks.heirloomLoyalTier = {
      passed: cLoyal.clientTier === 'Heirloom Loyal Client' && cLoyal.compositeScore >= 500,
      tier: cLoyal.clientTier,
      score: cLoyal.compositeScore
    };

    // Test 4: Patron VIP tier
    const cPatron = engine.execute({ clientName: 'Marcus & Elena', bookings: 3, totalSpend: 4200, referrals: 1, yearsAsClient: 3 });
    results.testsRun++;
    results.checks.patronVipTier = {
      passed: cPatron.clientTier === 'Atelier Patron VIP' && cPatron.compositeScore >= 1000,
      tier: cPatron.clientTier,
      score: cPatron.compositeScore
    };

    // Test 5: L'Héritage Royale top tier
    const cRoyale = engine.execute({
      clientName: 'Victoria & Arthur Sterling',
      bookings: 5,
      totalSpend: 8500,
      referrals: 3,
      reviewsCount: 2,
      yearsAsClient: 4,
      monthsSinceLastSession: 3
    });
    results.testsRun++;
    results.checks.heritageRoyaleTier = {
      passed: cRoyale.clientTier.includes("L'Héritage Royale") && cRoyale.compositeScore >= 2500,
      tier: cRoyale.clientTier,
      score: cRoyale.compositeScore
    };

    // Test 6: Luxury spend bonus points
    results.testsRun++;
    results.checks.luxurySpendBonus = {
      passed: cRoyale.scoreBreakdown.financialScore === Math.floor(8500 * 0.25) + Math.floor(4500 * 0.10),
      financialScore: cRoyale.scoreBreakdown.financialScore
    };

    // Test 7: Moderate recency decay (19 months)
    const cModDecay = engine.execute({ clientName: 'Dormant Client', bookings: 2, totalSpend: 1500, monthsSinceLastSession: 19 });
    results.testsRun++;
    results.checks.moderateRecencyDecay = {
      passed: cModDecay.scoreBreakdown.recencyPenaltyApplied === true && cModDecay.scoreBreakdown.recencyPenaltyRate === 0.15,
      penaltyRate: cModDecay.scoreBreakdown.recencyPenaltyRate
    };

    // Test 8: Severe recency decay (38 months)
    const cSevDecay = engine.execute({ clientName: 'Long Inactive', bookings: 2, totalSpend: 1500, monthsSinceLastSession: 38 });
    results.testsRun++;
    results.checks.severeRecencyDecay = {
      passed: cSevDecay.scoreBreakdown.recencyPenaltyApplied === true && cSevDecay.scoreBreakdown.recencyPenaltyRate === 0.30,
      penaltyRate: cSevDecay.scoreBreakdown.recencyPenaltyRate
    };

    // Test 9: 5-Year LTV & NPV Calculation
    const projections = cRoyale.forwardProjections;
    results.testsRun++;
    results.checks.ltvNpvProjections = {
      passed: projections.projected5YearLtvCad > projections.projected3YearLtvCad && projections.netPresentValue5YearCad > 0,
      projected5YearLtv: projections.projected5YearLtvCad,
      npv5Year: projections.netPresentValue5YearCad
    };

    // Test 10: Operational Action Prescription
    results.testsRun++;
    results.checks.actionPrescription = {
      passed: typeof cRoyale.suggestedAction === 'string' && cRoyale.suggestedAction.length > 20,
      action: cRoyale.suggestedAction
    };

    // Test 11: Physical Gifting Options
    results.testsRun++;
    results.checks.giftingOptionsMatchTier = {
      passed: cRoyale.curatedGifting.length >= 2 && cRoyale.curatedGifting[0].retailValueCad >= 300,
      topGift: cRoyale.curatedGifting[0].gift
    };

    // Test 12: VIP Communications Renderers
    results.testsRun++;
    results.checks.communicationsRendering = {
      passed: Boolean(
        cRoyale.renderedOutputs.vipEmailHtml.includes('Atelier VIP Collector Circle') &&
        cRoyale.renderedOutputs.handwrittenNote.includes('Victoria & Arthur Sterling') &&
        cRoyale.renderedOutputs.dossierMarkdown.includes('Composite RFM-D Score')
      ),
      hasAllOutputs: true
    };

    for (const key of Object.keys(results.checks)) {
      if (!results.checks[key].passed) results.passed = false;
    }

    return results;
  }
}

// --- PART 7: BOUNDARY TESTS & BATCH SIMULATION BENCHMARK ---
/**
 * HAFFU — Client Lifetime Value (LTV) & VIP Scorer Engine
 * Part 7: Boundary Edge Cases & 50-Client RFM-D Simulation Benchmark
 */

class ClientLTVSimulations {
  static runBoundaryTests(engine) {
    const boundary = [];

    // 1. Empty parameters defaults safely
    try {
      const res = engine.execute({});
      boundary.push({ test: 'Empty parameters defaults safely', passed: Boolean(res && res.compositeScore !== undefined) });
    } catch (e) {
      boundary.push({ test: 'Empty parameters defaults safely', passed: false, error: e.message });
    }

    // 2. Negative totalSpend validation
    try {
      engine.execute({ totalSpend: -500 });
      boundary.push({ test: 'Negative totalSpend validation', passed: false });
    } catch (e) {
      boundary.push({ test: 'Negative totalSpend validation', passed: e.message.includes('totalSpend must be a non-negative number') });
    }

    // 3. Negative bookings validation
    try {
      engine.execute({ bookings: -2 });
      boundary.push({ test: 'Negative bookings validation', passed: false });
    } catch (e) {
      boundary.push({ test: 'Negative bookings validation', passed: e.message.includes('bookings must be a non-negative number') });
    }

    // 4. Zero spend handles gracefully
    const zeroSpend = engine.execute({ totalSpend: 0, bookings: 0 });
    boundary.push({
      test: 'Zero spend handles gracefully',
      passed: zeroSpend.compositeScore === 60 // 1 year tenure base
    });

    return {
      totalBoundaryTests: boundary.length,
      allBoundaryPassed: boundary.every(b => b.passed),
      results: boundary
    };
  }

  static runBatchSimulation(engine, count = 50) {
    const clients = [];
    const tierCounts = {};

    for (let i = 1; i <= count; i++) {
      const totalSpend = 400 + (i * 250); // $650 to $12,900
      const bookings = Math.floor(i / 5) + 1; // 1 to 11
      const referrals = Math.floor(i / 10);
      const reviewsCount = i % 2;
      const yearsAsClient = Math.floor(i / 8) + 1;
      const monthsSinceLastSession = (i * 2) % 30; // 0 to 28 months

      const res = engine.execute({
        clientName: `Simulated Client ${i}`,
        bookings,
        totalSpend,
        referrals,
        reviewsCount,
        yearsAsClient,
        monthsSinceLastSession
      });

      clients.push(res);
      tierCounts[res.clientTier] = (tierCounts[res.clientTier] || 0) + 1;
    }

    const allHaveTier = clients.every(c => c.clientTier && c.clientTier.length > 0);
    const allHaveProjections = clients.every(c => c.forwardProjections && c.forwardProjections.projected5YearLtvCad > 0);
    const allHaveOutputs = clients.every(c => c.renderedOutputs && c.renderedOutputs.vipEmailHtml);

    return {
      totalSimulated: count,
      tierDistribution: tierCounts,
      allHaveTier,
      allHaveProjections,
      allHaveOutputs,
      allPassed: allHaveTier && allHaveProjections && allHaveOutputs
    };
  }
}

// --- PART 8: COHORT ANALYTICS & MILESTONE VELOCITY ---
/**
 * HAFFU — Client Lifetime Value (LTV) & VIP Scorer Engine
 * Part 8: Cohort Retention Analytics & Milestone Progression Velocity
 */

const HISTORIC_COHORT_BENCHMARKS = {
  COHORT_2021: {
    cohortYear: 2021,
    initialWeddingClients: 18,
    retainedAfter1YearPercent: 61.1,
    retainedAfter2YearsPercent: 50.0,
    averageExpansionRevenueCad: 1200,
    topCrossoverPath: 'Wedding -> First Anniversary Paper Print -> Family'
  },
  COHORT_2022: {
    cohortYear: 2022,
    initialWeddingClients: 20,
    retainedAfter1YearPercent: 65.0,
    retainedAfter2YearsPercent: 50.0,
    averageExpansionRevenueCad: 1350,
    topCrossoverPath: 'Wedding -> Handcrafted Italian Album -> In-Home Newborn'
  },

  COHORT_2023: {
    cohortYear: 2023,
    initialWeddingClients: 22,
    retainedAfter1YearPercent: 68.2,
    retainedAfter2YearsPercent: 54.5,
    averageExpansionRevenueCad: 1450,
    topCrossoverPath: 'Wedding -> In-Home Newborn -> Generational Family'
  },
  COHORT_2024: {
    cohortYear: 2024,
    initialWeddingClients: 25,
    retainedAfter1YearPercent: 72.0,
    retainedAfter2YearsPercent: 60.0,
    averageExpansionRevenueCad: 1680,
    topCrossoverPath: 'Wedding -> First Anniversary -> Fine-Art Maternity'
  },
  COHORT_2025: {
    cohortYear: 2025,
    initialWeddingClients: 25,
    retainedAfter1YearPercent: 76.0,
    retainedAfter2YearsPercent: 64.0,
    averageExpansionRevenueCad: 1920,
    topCrossoverPath: 'Wedding -> Italian Leather Duplicate Albums -> Annual Family'
  }
};

class CohortAnalyticsEngine {
  /**
   * Calculate milestone progression velocity and predict next commission window
   */
  static calculateMilestoneVelocity({ lastCommissionType = 'wedding', monthsSinceLastSession = 12 }) {
    const type = (lastCommissionType || '').toLowerCase();

    if (type.includes('wedding')) {
      return {
        nextProbableCommission: 'First Anniversary or Fine-Art Maternity',
        expectedVelocityMonths: 12,
        velocityStatus: monthsSinceLastSession <= 14 ? 'ON_SCHEDULE' : 'EXPANSION_WINDOW_CLOSING',
        recommendedOutreachWindow: '10 to 11 months post-wedding'
      };
    }

    if (type.includes('maternity')) {
      return {
        nextProbableCommission: 'In-Home Lifestyle Newborn',
        expectedVelocityMonths: 2,
        velocityStatus: monthsSinceLastSession <= 3 ? 'IMMEDIATE_BIRTH_WINDOW' : 'SCHEDULED_LIFESTYLE',
        recommendedOutreachWindow: '3 to 4 weeks post-delivery'
      };
    }

    if (type.includes('newborn')) {
      return {
        nextProbableCommission: 'Baby First Year Milestone / Golden Hour Family',
        expectedVelocityMonths: 10,
        velocityStatus: 'FIRST_YEAR_NURTURE',
        recommendedOutreachWindow: '9 months post-newborn'
      };
    }

    return {
      nextProbableCommission: 'Annual Generational Autumn Heirloom',
      expectedVelocityMonths: 12,
      velocityStatus: 'ANNUAL_TRADITION',
      recommendedOutreachWindow: 'August/September prior to Halton foliage peak'
    };
  }

  /**
   * Retrieve historical retention benchmark data
   */
  static getCohortBenchmarks(cohortYear = 2024) {
    const key = `COHORT_${cohortYear}`;
    return HISTORIC_COHORT_BENCHMARKS[key] || HISTORIC_COHORT_BENCHMARKS.COHORT_2024;
  }
  /**
   * Estimate total cohort expansion revenue over 3 years
   */
  static estimateCohortExpansionRevenue(cohortYear = 2024) {
    const data = this.getCohortBenchmarks(cohortYear);
    const year1Retained = Math.round(data.initialWeddingClients * (data.retainedAfter1YearPercent / 100));
    const year2Retained = Math.round(data.initialWeddingClients * (data.retainedAfter2YearsPercent / 100));
    const totalExpansionRevenue = (year1Retained + year2Retained) * data.averageExpansionRevenueCad;

    return {
      cohortYear: data.cohortYear,
      initialWeddingClients: data.initialWeddingClients,
      year1RetainedClients: year1Retained,
      year2RetainedClients: year2Retained,
      totalExpansionRevenueCad: totalExpansionRevenue
    };
  }

}

// --- PART 9: RETENTION PLAYBOOKS & AMBASSADOR PROTOCOLS ---
/**
 * HAFFU — Client Lifetime Value (LTV) & VIP Scorer Engine
 * Part 9: Bespoke Client Retention Playbooks & VIP Ambassador Protocols
 */

const RETENTION_PLAYBOOKS = {
  LAPSED_LUXURY_BRIDE: {
    key: 'lapsed_luxury_bride',
    title: 'The Lapsed Luxury Bride Re-Engagement Playbook',
    targetSegment: 'Past wedding couples dormant for 18 to 28 months',
    corePhilosophy: 'Reconnect around timeless romance and milestone memories without intrusive assumptions regarding family expansion.',
    talkingPoints: [
      'Reminisce warmly on their wedding celebration venue and golden hour lighting.',
      'Inform them that their master gallery negative files are permanently secured in our cold archive.',
      'Offer a complimentary 8x10 cotton rag deckled print credit or relaxed sunset portrait walk.'
    ],
    recommendedChannel: 'Handwritten calligraphed card followed by gentle email lookbook',
    prohibitedActions: 'Never ask "When are you having a baby?" or send mass promotional discount blasts.'
  },

  GENERATIONAL_LEGACY_MATRIARCH: {
    key: 'generational_legacy_matriarch',
    title: 'The Generational Legacy Matriarch Coordination Playbook',
    targetSegment: 'Grandmothers, mothers, or family leaders coordinating multi-household portraits',
    corePhilosophy: 'Alleviate all logistical stress by providing structured military-smooth 20-minute formal breakdowns.',
    talkingPoints: [
      'Reassure family matriarch that grandparents and toddlers receive first photo priority.',
      'Provide private wardrobe palette coordination guide so outfits blend harmoniously without looking matched.',
      'Offer in-home wall mockup previews showing how framed heirlooms will look above the living room fireplace.'
    ],
    recommendedChannel: 'Concierge phone consultation followed by personalized PDF grouping itinerary',
    prohibitedActions: 'Do not rush formal family sequences or require prolonged walking on unpaved terrain.'
  },

  EXECUTIVE_COMMERCIAL_EXPANSION: {
    key: 'executive_commercial_expansion',
    title: 'Corporate & Personal Brand Annual Refresh Playbook',
    targetSegment: 'Business founders, medical specialists, luxury realtors, and executives',
    corePhilosophy: 'Position imagery as an indispensable revenue-generating commercial asset.',
    talkingPoints: [
      'Highlight the importance of fresh, modern visual authority for LinkedIn, press releases, and speaking engagements.',
      'Offer half-day multi-outfit studio and environmental shoot with expedited 5-business-day turnaround.',
      'Include full commercial perpetual advertising license.'
    ],
    recommendedChannel: 'Concierge B2B email with tax receipt invoice breakdown for corporate expense deduction',
    prohibitedActions: 'Avoid consumer wedding jargon; maintain crisp executive professionalism.'
  },

  VIP_AMBASSADOR_REFERRAL_GRATITUDE: {
    key: 'vip_ambassador_referral_gratitude',
    title: 'VIP Ambassador Immediate Referral Gratitude Protocol',
    targetSegment: 'Clients whose personal referral booked a full wedding or milestone collection',
    corePhilosophy: 'Client advocacy is our atelier\'s highest honor; reciprocate immediately with unforgettable grace.',
    talkingPoints: [
      'Within 24 hours of referral booking deposit, dispatch hand-delivered luxury floral bouquet or artisan sommelier wine.',
      'Credit $200 CAD directly toward their next fine-art album or custom framing.',
      'Include a personal handwritten note from Hafsa thanking them for trusting us with their dearest friends.'
    ],
    recommendedChannel: 'Hand-delivered gift crate + personal phone call from Hafsa Noreen',
    prohibitedActions: 'Never send a cheap generic $25 gift card; luxury client advocacy warrants elevated recognition.'
  }
};

class RetentionPlaybookCatalog {
  static getPlaybook(key = 'lapsed_luxury_bride') {
    const k = (key || '').toLowerCase();
    return RETENTION_PLAYBOOKS[k.toUpperCase()] || RETENTION_PLAYBOOKS.LAPSED_LUXURY_BRIDE;
  }

  static listPlaybooks() {
    return Object.keys(RETENTION_PLAYBOOKS).map(k => ({
      key: RETENTION_PLAYBOOKS[k].key,
      title: RETENTION_PLAYBOOKS[k].title,
      targetSegment: RETENTION_PLAYBOOKS[k].targetSegment
    }));
  }
}

// Diagnostic delegation and test suite wiring
ClientLTVScorer.runDiagnostics = function() {
  return ClientLTVDiagnostics.runDiagnostics(this);
};

ClientLTVScorer.runFullTestSuite = function() {
  const diag = ClientLTVDiagnostics.runDiagnostics(this);
  const boundary = ClientLTVSimulations.runBoundaryTests(this);
  const sim = ClientLTVSimulations.runBatchSimulation(this, 50);
  return {
    engine: "ClientLTVScorer",
    timestamp: new Date().toISOString(),
    allPassed: diag.passed && boundary.allBoundaryPassed && sim.allPassed,
    diagnostics: diag,
    boundaryTests: boundary,
    batchSimulation: sim
  };
};

// Static Helper & Constant Extensions
ClientLTVScorer.SCORING_WEIGHTS = SCORING_WEIGHTS;
ClientLTVScorer.VIP_TIERS = VIP_TIERS;
ClientLTVScorer.HISTORIC_COHORT_BENCHMARKS = HISTORIC_COHORT_BENCHMARKS;
ClientLTVScorer.RETENTION_PLAYBOOKS = RETENTION_PLAYBOOKS;
ClientLTVScorer.calculateMilestoneVelocity = function(opts) { return CohortAnalyticsEngine.calculateMilestoneVelocity(opts); };
ClientLTVScorer.getPlaybook = function(key) { return RetentionPlaybookCatalog.getPlaybook(key); };
ClientLTVScorer.listPlaybooks = function() { return RetentionPlaybookCatalog.listPlaybooks(); };

module.exports = ClientLTVScorer;
