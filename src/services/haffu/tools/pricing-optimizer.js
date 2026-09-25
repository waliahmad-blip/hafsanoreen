/**
 * ============================================================================
 * HAFFU STUDIO — PRICING OPTIMIZER & REVENUE INTELLIGENCE ENGINE
 * ============================================================================
 * Enterprise Yield & Monetization Architecture:
 *   1. Capacity Utilization & Dynamic Surge Rate Modifiers (Hard Studio Caps)
 *   2. Seasonal Demand Elasticity Curves for Halton & Southern Ontario (12 Months)
 *   3. Regional Competitive Market Benchmarks (Oakville / Milton / GTA Percentiles)
 *   4. Ontario 13% HST, Direct COGS Accounting & Margin Preservation (>= 65%)
 *   5. Fiscal Year Revenue Projections & Financial Forecasting Matrix
 *   6. 100% Backward-Compatible Legacy Interface (action, newPrice, reason)
 *
 * Studio: Hafsa Noreen Photography (Oakville / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.3.0
 * ============================================================================
 */

'use strict';

const { PACKAGES } = require('../../../utils/constants');

// --- PART 1: CAPACITY UTILIZATION & YIELD MANAGEMENT ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 1: CAPACITY UTILIZATION, SURGE LOGIC & YIELD MANAGEMENT
 */

const STUDIO_CAPACITY_LIMITS = {
  annualLimits: {
    maxWeddings: 25,
    maxPortraitsAndMaternity: 60,
    maxEditorialBranding: 20
  },
  monthlyTargets: {
    January:   { weddings: 0, portraits: 3, totalTargetRevenueCAD: 2500 },
    February:  { weddings: 0, portraits: 3, totalTargetRevenueCAD: 2500 },
    March:     { weddings: 1, portraits: 4, totalTargetRevenueCAD: 6500 },
    April:     { weddings: 1, portraits: 5, totalTargetRevenueCAD: 7500 },
    May:       { weddings: 3, portraits: 7, totalTargetRevenueCAD: 18500 },
    June:      { weddings: 4, portraits: 8, totalTargetRevenueCAD: 24000 },
    July:      { weddings: 4, portraits: 8, totalTargetRevenueCAD: 24000 },
    August:    { weddings: 4, portraits: 8, totalTargetRevenueCAD: 24000 },
    September: { weddings: 4, portraits: 8, totalTargetRevenueCAD: 24000 },
    October:   { weddings: 3, portraits: 8, totalTargetRevenueCAD: 20000 },
    November:  { weddings: 1, portraits: 4, totalTargetRevenueCAD: 7000 },
    December:  { weddings: 0, portraits: 2, totalTargetRevenueCAD: 1700 }
  }
};

class YieldManagementEngine {
  /**
   * Evaluates utilization ratio and determines strategic pricing action
   */
  static evaluateYield(params = {}) {
    const booked = Number(params.bookedSlots || 0);
    const total = Number(params.totalSlots || 5);
    const currentPrice = Number(params.currentPrice || 850);
    const sessionType = params.sessionType || 'portrait';
    const month = params.month || 'June';
    const leadVelocityWeekly = Number(params.leadVelocityWeekly || 2);

    const utilizationRatio = total > 0 ? booked / total : 0;
    const utilizationPercent = Math.round(utilizationRatio * 100);

    let action = 'HOLD';
    let suggestedPrice = currentPrice;
    let strategySummary = '';
    let tacticalRecommendation = '';

    if (utilizationRatio >= 0.85 || (utilizationRatio >= 0.75 && leadVelocityWeekly >= 4)) {
      // High Demand / Surge
      action = 'SURGE_RAISE';
      suggestedPrice = Math.round(currentPrice * 1.15); // +15% Surge
      strategySummary = `${utilizationPercent}% booked with strong inquiry velocity. High pricing power.`;
      tacticalRecommendation = sessionType === 'wedding'
        ? 'Close lower-tier (Classic $3,600) bookings for remaining dates; accept only Signature $4,800+ commissions.'
        : 'Increase session fee by 15% or add a non-refundable $350 date-lock retainer.';
    } else if (utilizationRatio >= 0.60) {
      // Optimal Balance
      action = 'OPTIMAL_HOLD';
      suggestedPrice = currentPrice;
      strategySummary = `${utilizationPercent}% booked. Healthy pacing on track with annual target.`;
      tacticalRecommendation = 'Hold base collection pricing firm; actively present high-margin add-ons (4K Reels $400, Albums $600).';
    } else if (utilizationRatio < 0.40) {
      // Low Utilization / High Runway
      action = 'STIMULATE_DEMAND';
      suggestedPrice = currentPrice;
      strategySummary = `${utilizationPercent}% booked. Capacity available for upcoming month.`;
      tacticalRecommendation = 'Never discount base luxury pricing publicly. Instead, launch an exclusive 20-minute Petite Session pop-up for VIP email list, or bundle a complimentary $100 museum print credit.';
    } else {
      // Moderate (40% - 59%)
      action = 'MONITOR';
      suggestedPrice = currentPrice;
      strategySummary = `${utilizationPercent}% booked. Steady pacing.`;
      tacticalRecommendation = 'Monitor weekly inquiry velocity. If velocity exceeds 3 inquiries/week, prepare to surge.';
    }

    return {
      month,
      sessionType,
      bookedSlots: booked,
      totalSlots: total,
      utilizationRatio: Math.round(utilizationRatio * 100) / 100,
      utilizationPercent: `${utilizationPercent}%`,
      currentPriceCAD: currentPrice,
      suggestedPriceCAD: suggestedPrice,
      priceDeltaCAD: suggestedPrice - currentPrice,
      action,
      strategySummary,
      tacticalRecommendation
    };
  }
}

// --- PART 2: SEASONAL DEMAND CURVES & ELASTICITY ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 2: SEASONAL DEMAND ELASTICITY & DYNAMIC SURGE MULTIPLIERS
 */

const SEASONAL_DEMAND_CURVES = [
  { month: 'January', demandTier: 'ENGAGEMENT_INQUIRY_SURGE', weddingInquiryMultiplier: 1.45, portraitMultiplier: 0.60, primaryFocus: '2026/2027 Wedding Inquiries & Booking Consultations' },
  { month: 'February', demandTier: 'VALENTINES_ENGAGEMENT_SPIKE', weddingInquiryMultiplier: 1.50, portraitMultiplier: 0.65, primaryFocus: 'Wedding Contract Executions & Retainer Date-Locks' },
  { month: 'March', demandTier: 'EARLY_SPRING_AWAKENING', weddingInquiryMultiplier: 1.25, portraitMultiplier: 0.85, primaryFocus: 'Maternity & Indoor Studio Sessions (Mint Room)' },
  { month: 'April', demandTier: 'PRE_BLOSSOM_PREPARATION', weddingInquiryMultiplier: 1.15, portraitMultiplier: 1.10, primaryFocus: 'Spring Blossom Waitlist & Engagement Shoots' },
  { month: 'May', demandTier: 'CHERRY_BLOSSOM_PEAK', weddingInquiryMultiplier: 1.20, portraitMultiplier: 1.35, primaryFocus: 'High Park / Kariya Park Blossom Sessions + Early Weddings' },
  { month: 'June', demandTier: 'SUMMER_SOLSTICE_PEAK', weddingInquiryMultiplier: 1.40, portraitMultiplier: 1.30, primaryFocus: 'Peak Summer Weddings + Sunset Escarpment Sessions' },
  { month: 'July', demandTier: 'MID_SUMMER_LAKEFRONT', weddingInquiryMultiplier: 1.35, portraitMultiplier: 1.25, primaryFocus: 'Oakville / Burlington Lakefront Beach & Estate Weddings' },
  { month: 'August', demandTier: 'LATE_SUMMER_GOLDEN_HAZE', weddingInquiryMultiplier: 1.35, portraitMultiplier: 1.30, primaryFocus: 'Warm Meadow & Sunset Escarpment Sessions' },
  { month: 'September', demandTier: 'PRIME_AUTUMN_WEDDINGS', weddingInquiryMultiplier: 1.45, portraitMultiplier: 1.40, primaryFocus: 'Peak Ontario Wedding Month + Early Fall Portraits' },
  { month: 'October', demandTier: 'PEAK_FALL_FOLIAGE_SURGE', weddingInquiryMultiplier: 1.20, portraitMultiplier: 1.55, primaryFocus: 'Rattlesnake Point & Crawford Lake Autumn Leaves' },
  { month: 'November', demandTier: 'HOLIDAY_STUDIO_SPRINT', weddingInquiryMultiplier: 0.80, portraitMultiplier: 1.25, primaryFocus: 'Mint Room Studios Holiday Sets + Express Delivery' },
  { month: 'December', demandTier: 'STUDIO_REST_AND_CURATION', weddingInquiryMultiplier: 1.10, portraitMultiplier: 0.50, primaryFocus: 'Annual Curation, Album Fulfillment, Post-Christmas Inquiries' }
];

class SeasonalElasticityCalculator {
  /**
   * Retrieves demand multiplier and seasonal tactical directives
   */
  static getMonthDynamics(monthName = 'June') {
    const found = SEASONAL_DEMAND_CURVES.find(m => m.month.toLowerCase() === (monthName || '').toLowerCase());
    return found || SEASONAL_DEMAND_CURVES[5];
  }

  /**
   * Adjusts base price by seasonal demand coefficient
   */
  static calculateSeasonalAdjustedRate(basePriceCAD, sessionType = 'portrait', monthName = 'June') {
    const dynamics = this.getMonthDynamics(monthName);
    const multiplier = sessionType === 'wedding'
      ? dynamics.weddingInquiryMultiplier
      : dynamics.portraitMultiplier;

    // Normalizing multiplier variance between -10% and +20% for stable luxury branding
    const dampenedMultiplier = 1 + (multiplier - 1) * 0.45;
    const adjusted = Math.round((basePriceCAD * dampenedMultiplier) / 25) * 25; // Round to nearest $25

    return {
      basePriceCAD,
      month: dynamics.month,
      demandTier: dynamics.demandTier,
      rawMultiplier: multiplier,
      appliedMultiplier: Math.round(dampenedMultiplier * 100) / 100,
      seasonallyAdjustedPriceCAD: adjusted,
      deltaCAD: adjusted - basePriceCAD
    };
  }
}

// --- PART 3: REGIONAL MARKET BENCHMARKS & POSITIONING ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 3: REGIONAL MARKET BENCHMARKS & COMPETITIVE POSITIONING MATRIX
 */

const GTA_MARKET_BENCHMARKS = {
  weddingPhotographyTiers: {
    budgetTier25th: { minCAD: 1800, maxCAD: 2400, medianCAD: 2100, profile: 'Single shooter, digital files only, 6-8 weeks turnaround' },
    midMarket50th:  { minCAD: 2800, maxCAD: 3400, medianCAD: 3100, profile: 'Lead shooter, basic engagement, 4-6 weeks turnaround' },
    upperTier75th:  { minCAD: 3800, maxCAD: 4500, medianCAD: 4150, profile: 'Experienced artist, engagement session, online gallery' },
    luxuryAtelier90th: { minCAD: 4800, maxCAD: 6800, medianCAD: 5600, profile: 'Two shooters, flush mount album, engagement, 10-day delivery, film color grade' }
  },
  portraitPhotographyTiers: {
    budgetTier25th: { minCAD: 250, maxCAD: 400, medianCAD: 325, profile: '30-45 mins, 15-20 unretouched or minimally edited files' },
    midMarket50th:  { minCAD: 450, maxCAD: 600, medianCAD: 525, profile: '60 mins, 30 edited files, location guide' },
    upperTier75th:  { minCAD: 650, maxCAD: 800, medianCAD: 725, profile: '60-75 mins, full gallery, basic wardrobe styling' },
    luxuryAtelier90th: { minCAD: 850, maxCAD: 1250, medianCAD: 950, profile: '90 mins unhurried, 65+ frames, full client closet, $100 print credit, museum color science' }
  }
};

class MarketPositioningEngine {
  /**
   * Compares studio collection prices against regional GTA percentiles
   */
  static assessPositioning(sessionType = 'wedding', priceCAD = 4800) {
    const isWedding = sessionType.toLowerCase().includes('wedding');
    const tiers = isWedding
      ? GTA_MARKET_BENCHMARKS.weddingPhotographyTiers
      : GTA_MARKET_BENCHMARKS.portraitPhotographyTiers;

    let assignedPercentile = 'TOP_10_PERCENT_LUXURY';
    let competitiveNarrative = '';

    if (priceCAD >= tiers.luxuryAtelier90th.minCAD) {
      assignedPercentile = 'TOP_10_PERCENT_LUXURY';
      competitiveNarrative = 'Firmly positioned in the elite luxury boutique tier alongside top European fine-art ateliers.';
    } else if (priceCAD >= tiers.upperTier75th.minCAD) {
      assignedPercentile = '75TH_PERCENTILE_PREMIUM';
      competitiveNarrative = 'High-end accessible luxury; exceptional price-to-value ratio for discerning families.';
    } else if (priceCAD >= tiers.midMarket50th.minCAD) {
      assignedPercentile = '50TH_PERCENTILE_MID_MARKET';
      competitiveNarrative = 'Competitive mid-market; high volume potential, but risks undervaluing Hafsa artisan craft.';
    } else {
      assignedPercentile = '25TH_PERCENTILE_VALUE';
      competitiveNarrative = 'Budget category; strongly discouraged for the studio brand integrity.';
    }

    return {
      sessionType,
      currentPriceCAD: priceCAD,
      marketPercentile: assignedPercentile,
      regionalMedianCAD: tiers.midMarket50th.medianCAD,
      luxuryThresholdCAD: tiers.luxuryAtelier90th.minCAD,
      positioningNarrative: competitiveNarrative,
      brandIntegrityStatus: priceCAD >= tiers.upperTier75th.minCAD ? 'HEALTHY_LUXURY' : 'REVIEW_RATES_UPWARD'
    };
  }
}

// --- PART 4: ONTARIO HST, COGS & MARGIN PRESERVATION ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 4: ONTARIO 13% HST, COGS ACCOUNTING & MARGIN PRESERVATION
 */

const STANDARD_COGS_MATRIX = {
  WEDDING_SIGNATURE: {
    basePriceCAD: 4800,
    cogs: {
      secondShooterCAD: 350,
      albumLabCAD: 175,
      engagementSessionGasDisbursementsCAD: 40,
      packagingAndCourierCAD: 35
    }
  },
  WEDDING_CLASSIC: {
    basePriceCAD: 3600,
    cogs: {
      engagementSessionDisbursementsCAD: 40,
      onlineGalleryArchivingCAD: 20
    }
  },
  FAMILY_HEIRLOOM: {
    basePriceCAD: 850,
    cogs: {
      printCreditFulfillmentCAD: 35,
      clientClosetDryCleaningCAD: 25,
      parkPassDisbursementsCAD: 15
    }
  },
  CLASSIC_FAMILY: {
    basePriceCAD: 650,
    cogs: {
      parkPassDisbursementsCAD: 15,
      onlineGalleryArchivingCAD: 10
    }
  }
};

class MarginAccountingCalculator {
  /**
   * Calculates comprehensive breakdown of subtotal, HST, direct COGS, Stripe fees, and net studio margin
   */
  static calculateCollectionEconomics(collectionKey = 'WEDDING_SIGNATURE', customPriceCAD = null) {
    const config = STANDARD_COGS_MATRIX[collectionKey] || STANDARD_COGS_MATRIX.WEDDING_SIGNATURE;
    const price = Number(customPriceCAD !== null && customPriceCAD !== undefined ? customPriceCAD : config.basePriceCAD);


    const cogsSum = Object.values(config.cogs).reduce((sum, item) => sum + item, 0);
    const hstCAD = Math.round(price * 0.13 * 100) / 100;
    const totalCollectedWithHST = Math.round((price + hstCAD) * 100) / 100;

    const stripeFeeCAD = Math.round((totalCollectedWithHST * 0.029 + 0.30) * 100) / 100;
    const netStudioCashInflowCAD = Math.round((totalCollectedWithHST - stripeFeeCAD) * 100) / 100;
    const grossProfitCAD = Math.round((price - cogsSum) * 100) / 100;
    const grossMarginPercent = price > 0 ? Math.round((grossProfitCAD / price) * 1000) / 10 : 0;

    return {
      collectionKey,
      retailPriceCAD: price,
      taxDetails: {
        jurisdiction: 'Ontario, Canada',
        hstRate: '13.0%',
        hstAmountCAD: hstCAD,
        clientTotalWithHSTCAD: totalCollectedWithHST
      },
      cogsBreakdown: {
        items: config.cogs,
        totalCogsCAD: cogsSum
      },
      paymentProcessing: {
        provider: 'Stripe Canada',
        rate: '2.9% + $0.30 CAD',
        feeCAD: stripeFeeCAD,
        netCashInflowCAD: netStudioCashInflowCAD
      },
      profitability: {
        grossProfitCAD,
        grossMarginPercent: `${grossMarginPercent}%`,
        isHealthyMargin: grossMarginPercent >= 65.0
      },
      dateLockDeposit: {
        depositAmountCAD: Math.min(500, price),
        depositHSTCAD: Math.round(Math.min(500, price) * 0.13 * 100) / 100,
        depositGrandTotalCAD: Math.round(Math.min(500, price) * 1.13 * 100) / 100
      }
    };
  }
}


// --- PART 4B: REGIONAL TRAVEL DISBURSEMENTS ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 4B: REGIONAL TRAVEL DISBURSEMENTS & MUNICIPAL PARKING SURCHARGES
 */

const REGIONAL_TRAVEL_ZONES = {
  CORE_ZONE_FREE: {
    zoneName: 'Core Halton & Peel Complimentary Zone',
    distanceThresholdKm: 40,
    travelFeeCAD: 0,
    includedTowns: ['Oakville', 'Milton', 'Burlington', 'Mississauga'],
    description: 'Zero travel fees for all sessions within 40km of studio.'
  },
  EXTENDED_ZONE_TIER_1: {
    zoneName: 'Greater Toronto & Hamilton Area',
    distanceThresholdKm: 75,
    travelFeeCAD: 75,
    includedTowns: ['Downtown Toronto', 'Hamilton', 'Ancaster', 'Brampton', 'Vaughan'],
    description: 'Modest disbursement to cover 407 ETR toll options and fuel.'
  },
  EXTENDED_ZONE_TIER_2: {
    zoneName: 'Niagara Wine Region & York Region',
    distanceThresholdKm: 120,
    travelFeeCAD: 150,
    includedTowns: ['Niagara-on-the-Lake', 'St. Catharines', 'Jordan Station', 'Newmarket'],
    description: 'Covers roundtrip travel to historic vineyards and Niagara escarpment.'
  },
  DESTINATION_ONTARIO: {
    zoneName: 'Ontario Destination & Cottage Country',
    distanceThresholdKm: 250,
    travelFeeCAD: 350,
    includedTowns: ['Muskoka', 'Prince Edward County', 'Tobermory', 'Collingwood'],
    description: 'Covers extensive travel, equipment logistics, and overnight lodging allowance.'
  }
};

class RegionalTravelCalculator {
  /**
   * Calculates exact travel fee and municipal parking allowance
   */
  static computeTravelDisbursement(destinationTown = 'Oakville', isDowntownToronto = false) {
    const townLower = (destinationTown || '').toLowerCase();
    let selectedZone = REGIONAL_TRAVEL_ZONES.CORE_ZONE_FREE;
    let parkingDisbursementCAD = 0;

    if (townLower.includes('toronto')) {
      selectedZone = REGIONAL_TRAVEL_ZONES.EXTENDED_ZONE_TIER_1;
      if (isDowntownToronto || townLower.includes('distillery') || townLower.includes('downtown')) {
        parkingDisbursementCAD = 45; // Commercial downtown lot/garage fee
      }
    } else if (townLower.includes('hamilton') || townLower.includes('ancaster') || townLower.includes('vaughan')) {
      selectedZone = REGIONAL_TRAVEL_ZONES.EXTENDED_ZONE_TIER_1;
    } else if (townLower.includes('niagara') || townLower.includes('jordan') || townLower.includes('catharines')) {
      selectedZone = REGIONAL_TRAVEL_ZONES.EXTENDED_ZONE_TIER_2;
    } else if (townLower.includes('muskoka') || townLower.includes('county') || townLower.includes('collingwood')) {
      selectedZone = REGIONAL_TRAVEL_ZONES.DESTINATION_ONTARIO;
    }

    const totalDisbursementCAD = selectedZone.travelFeeCAD + parkingDisbursementCAD;
    const hstCAD = Math.round(totalDisbursementCAD * 0.13 * 100) / 100;

    return {
      destinationTown,
      zoneKey: selectedZone.zoneName,
      baseTravelFeeCAD: selectedZone.travelFeeCAD,
      parkingDisbursementCAD,
      totalDisbursementPreTaxCAD: totalDisbursementCAD,
      hstCAD,
      totalDisbursementWithHSTCAD: Math.round((totalDisbursementCAD + hstCAD) * 100) / 100,
      isComplimentary: totalDisbursementCAD === 0
    };
  }
}

// --- PART 5B: VIP POP-UP GENERATOR ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 5B: VIP POP-UP GENERATOR & NON-DILUTIVE INCENTIVE BLUEPRINTS
 */

const VIP_PROMOTION_BLUEPRINTS = {
  SPRING_BLOSSOM_PETITE: {
    campaignId: 'POPUP_SPRING_BLOSSOM',
    title: 'The Spring Blossom Petite Collection',
    location: 'Kariya Park (Mississauga) or High Park (Toronto)',
    season: 'Spring (Early May)',
    slotDurationMinutes: 20,
    deliverablesCount: 15,
    priceCAD: 375,
    cogsCAD: 25,
    maxSlotsAvailable: 8,
    bookingWindowDays: 10,
    depositRequiredCAD: 150,
    luxuryBrandSafeguards: 'Private waitlist access only. Never posted as a generic public discount.',
    description: 'A focused, breathtaking 20-minute golden hour portrait experience amidst fleeting Japanese cherry blossoms.'
  },
  AUTUMN_FOLIAGE_PETITE: {
    campaignId: 'POPUP_AUTUMN_FOLIAGE',
    title: 'The Escarpment Autumn Petite Collection',
    location: 'Crawford Lake or Kelso Conservation (Milton)',
    season: 'Autumn (Mid October)',
    slotDurationMinutes: 20,
    deliverablesCount: 15,
    priceCAD: 395,
    cogsCAD: 25,
    maxSlotsAvailable: 8,
    bookingWindowDays: 14,
    depositRequiredCAD: 150,
    luxuryBrandSafeguards: 'Strictly limited to 8 families per season. Preserves full collection pricing integrity.',
    description: 'Enchanting 20-minute golden-hour sessions celebrating peak Halton escarpment fall foliage.'
  },
  MINT_ROOM_HOLIDAY_STUDIO: {
    campaignId: 'POPUP_HOLIDAY_STUDIO',
    title: 'The Parisian Ballroom Holiday Studio Petite',
    location: 'Mint Room Studios (Toronto)',
    season: 'Late Autumn / Early Winter (November)',
    slotDurationMinutes: 25,
    deliverablesCount: 20,
    priceCAD: 450,
    cogsCAD: 85, // Includes studio room hourly split
    maxSlotsAvailable: 6,
    bookingWindowDays: 7,
    depositRequiredCAD: 200,
    luxuryBrandSafeguards: 'Hosted exclusively in luxury natural-light daylight ballrooms with curated French furnishings.',
    description: 'Cozy, high-fashion winter family portraits sheltered from Ontario cold.'
  }
};

class DynamicPromotionEngine {
  /**
   * Generates a tailored VIP campaign when capacity utilization is low
   */
  static configureCampaign(campaignKey = 'AUTUMN_FOLIAGE_PETITE') {
    const blueprint = VIP_PROMOTION_BLUEPRINTS[campaignKey] || VIP_PROMOTION_BLUEPRINTS.AUTUMN_FOLIAGE_PETITE;
    const hstCAD = Math.round(blueprint.priceCAD * 0.13 * 100) / 100;
    const grossProfitCAD = blueprint.priceCAD - blueprint.cogsCAD;
    const grossMargin = Math.round((grossProfitCAD / blueprint.priceCAD) * 1000) / 10;

    return {
      campaignId: blueprint.campaignId,
      title: blueprint.title,
      location: blueprint.location,
      priceCAD: blueprint.priceCAD,
      taxDetails: {
        hstCAD,
        totalWithHSTCAD: blueprint.priceCAD + hstCAD
      },
      profitability: {
        cogsCAD: blueprint.cogsCAD,
        grossProfitCAD,
        grossMarginPercent: `${grossMargin}%`
      },
      bookingRules: {
        slotDuration: `${blueprint.slotDurationMinutes} Minutes`,
        framesDelivered: `${blueprint.deliverablesCount} High-Resolution Curated JPEGs`,
        depositCAD: blueprint.depositRequiredCAD,
        maxSlots: blueprint.maxSlotsAvailable,
        brandSafeguards: blueprint.luxuryBrandSafeguards
      },
      invitationEmailSnippet: `Hafsa is opening a rare series of 8 Petite Sessions for ${blueprint.title}. Enjoy 20 unhurried golden hour minutes with 15 hand-finished heirloom frames.`
    };
  }
}

// --- PART 5C: COMPREHENSIVE 2026 COLLECTION SPECIFICATIONS & QUOTES ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 5C: COMPREHENSIVE 2026 COLLECTION SPECIFICATIONS & QUOTE BUILDER
 */

const MASTER_2026_COLLECTIONS = {
  WEDDING_SIGNATURE: {
    key: 'WEDDING_SIGNATURE',
    name: 'The Signature Wedding Heirloom',
    hoursCoverage: 10,
    priceCAD: 4800,
    depositCAD: 500,
    deliverablesCount: 600,
    photographersCount: 2,
    tangiblesIncluded: '12x12 Handcrafted Linen Flush-Mount Album (30 pages)',
    inclusions: ['Lead Photographer Hafsa Noreen', 'Curated Professional Second Artist', 'Complimentary 90-min Engagement Session', '48-Hour Sneak Peek (20 frames)', 'Private 10-Year Cloud Gallery']
  },
  WEDDING_CLASSIC: {
    key: 'WEDDING_CLASSIC',
    name: 'The Classic Wedding Heirloom',
    hoursCoverage: 8,
    priceCAD: 3600,
    depositCAD: 500,
    deliverablesCount: 450,
    photographersCount: 1,
    tangiblesIncluded: 'None (Available as add-on)',
    inclusions: ['Lead Photographer Hafsa Noreen', 'Complimentary 60-min Engagement Session', '48-Hour Sneak Peek', 'Private 10-Year Cloud Gallery']
  },
  WEDDING_INTIMATE: {
    key: 'WEDDING_INTIMATE',
    name: 'The Intimate / Elopement Collection',
    hoursCoverage: 4,
    priceCAD: 1850,
    depositCAD: 500,
    deliverablesCount: 200,
    photographersCount: 1,
    tangiblesIncluded: 'None',
    inclusions: ['Lead Photographer Hafsa Noreen', 'Private Ceremony & Romance Portraits', '48-Hour Sneak Peek']
  },
  FAMILY_MATERNITY_HEIRLOOM: {
    key: 'FAMILY_MATERNITY_HEIRLOOM',
    name: 'The Family & Maternity Heirloom',
    hoursCoverage: 1.5,
    priceCAD: 850,
    depositCAD: 250,
    deliverablesCount: 65,
    photographersCount: 1,
    tangiblesIncluded: '$100 Archival Museum Print Credit Included',
    inclusions: ['90 Minutes unhurried natural light storytelling', 'Full Client Closet access', 'Wardrobe & Location Planning Guide']
  },
  FAMILY_CLASSIC: {
    key: 'FAMILY_CLASSIC',
    name: 'The Classic Family Session',
    hoursCoverage: 1.0,
    priceCAD: 650,
    depositCAD: 200,
    deliverablesCount: 40,
    photographersCount: 1,
    tangiblesIncluded: 'None',
    inclusions: ['60 Minutes golden hour storytelling', 'Online high-res download gallery']
  },
  EDITORIAL_BRANDING: {
    key: 'EDITORIAL_BRANDING',
    name: 'Editorial Branding & Executive Portraiture',
    hoursCoverage: 1.5,
    priceCAD: 750,
    depositCAD: 250,
    deliverablesCount: 35,
    photographersCount: 1,
    tangiblesIncluded: 'Full Commercial Usage Rights Included',
    inclusions: ['Multi-outfit changes', 'High-impact social and web crops', 'Studio lighting or natural light daylight loft']
  }
};

class QuoteBuilderEngine {
  /**
   * Compiles custom client quote with optional extra hours and second shooters
   */
  static buildCustomQuote(collectionKey = 'WEDDING_CLASSIC', options = {}) {
    const base = MASTER_2026_COLLECTIONS[collectionKey] || MASTER_2026_COLLECTIONS.WEDDING_CLASSIC;
    let total = base.priceCAD;
    const itemized = [{ item: base.name, amountCAD: base.priceCAD }];

    const extraHours = Number(options.extraHours || 0);
    if (extraHours > 0) {
      const extraCost = extraHours * 450;
      total += extraCost;
      itemized.push({ item: `Additional Photographic Coverage (${extraHours} hours @ $450/hr)`, amountCAD: extraCost });
    }

    if (options.addSecondShooter && base.photographersCount === 1) {
      total += 600;
      itemized.push({ item: 'Curated Professional Second Associate Photographer (Full Day)', amountCAD: 600 });
    }

    if (options.add12x12Album) {
      total += 600;
      itemized.push({ item: '12x12 Handcrafted Linen Flush-Mount Album (30 pages)', amountCAD: 600 });
    }

    if (options.addCinematicReel) {
      total += 400;
      itemized.push({ item: 'Cinematic 60-Second 4K Vertical Highlight Reel', amountCAD: 400 });
    }

    const hstCAD = Math.round(total * 0.13 * 100) / 100;
    const grandTotalCAD = Math.round((total + hstCAD) * 100) / 100;

    return {
      collectionKey: base.key,
      collectionName: base.name,
      itemizedBreakdown: itemized,
      subtotalCAD: total,
      taxRate: '13.0% Ontario HST',
      hstCAD,
      grandTotalCAD,
      depositRequirementCAD: base.depositCAD,
      balanceDuePriorCAD: grandTotalCAD - base.depositCAD
    };
  }
}
// --- PART 5: ANNUAL REVENUE FORECASTING MATRIX ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 5: ANNUAL REVENUE FORECASTING & CAPACITY PROJECTIONS
 */

class AnnualRevenueForecaster {
  /**
   * Forecasts full fiscal year gross revenue and net studio contribution based on booked pace
   */
  static generateAnnualForecast(currentPace = {}) {
    const bookedWeddings = Number(currentPace.bookedWeddings || 18);
    const targetWeddings = Number(currentPace.targetWeddings || 25);
    const avgWeddingRateCAD = Number(currentPace.avgWeddingRateCAD || 4200);

    const bookedPortraits = Number(currentPace.bookedPortraits || 42);
    const targetPortraits = Number(currentPace.targetPortraits || 60);
    const avgPortraitRateCAD = Number(currentPace.avgPortraitRateCAD || 800);

    const projectedWeddingGrossCAD = targetWeddings * avgWeddingRateCAD;
    const projectedPortraitGrossCAD = targetPortraits * avgPortraitRateCAD;
    const projectedAddonsGrossCAD = 16500; // Expected reels, albums, wall art

    const grossAnnualRevenueCAD = projectedWeddingGrossCAD + projectedPortraitGrossCAD + projectedAddonsGrossCAD;
    const totalHSTCollectedCAD = Math.round(grossAnnualRevenueCAD * 0.13 * 100) / 100;
    const totalCashProcessedCAD = grossAnnualRevenueCAD + totalHSTCollectedCAD;

    const estimatedAnnualCOGSCAD = Math.round(grossAnnualRevenueCAD * 0.14 * 100) / 100; // ~14% COGS
    const netStudioContributionCAD = Math.round((grossAnnualRevenueCAD - estimatedAnnualCOGSCAD) * 100) / 100;

    const weddingPacingPercent = Math.round((bookedWeddings / targetWeddings) * 100);
    const portraitPacingPercent = Math.round((bookedPortraits / targetPortraits) * 100);

    return {
      fiscalYear: 2026,
      studioCapStatus: {
        weddings: { booked: bookedWeddings, target: targetWeddings, pacingPercent: `${weddingPacingPercent}%` },
        portraits: { booked: bookedPortraits, target: targetPortraits, pacingPercent: `${portraitPacingPercent}%` }
      },
      revenueProjectionsCAD: {
        weddingsGrossCAD: projectedWeddingGrossCAD,
        portraitsGrossCAD: projectedPortraitGrossCAD,
        addonsAndDigitalCAD: projectedAddonsGrossCAD,
        totalGrossRevenueCAD: grossAnnualRevenueCAD,
        totalHSTCollectedForCRA: totalHSTCollectedCAD,
        totalGrossCashFlowCAD: totalCashProcessedCAD
      },
      profitabilityAnalysis: {
        estimatedAnnualCOGSCAD,
        netStudioContributionCAD,
        overallGrossMarginPercent: `${Math.round((netStudioContributionCAD / grossAnnualRevenueCAD) * 1000) / 10}%`
      },
      executiveRecommendation: weddingPacingPercent >= 70
        ? 'Wedding pace is strong. Implement +10% surge on remaining peak 2026 summer/fall dates.'
        : 'Pacing is healthy. Maintain standard collection pricing.'
    };
  }
}

// --- PART 6: CORE ENGINE CLASS & DIAGNOSTICS SUITE ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 6: CORE ENGINE CLASS, STATIC EXECUTION & BUILT-IN DIAGNOSTICS SUITE
 */

class PricingOptimizerEngine {
  /**
   * Primary entry point invoked by Haffu tool dispatcher
   */
  static async execute(params = {}) {
    const bookedSlots = Number(params.bookedSlots !== undefined ? params.bookedSlots : 3);
    const totalSlots = Number(params.totalSlots !== undefined ? params.totalSlots : 5);
    const currentPrice = Number(params.currentPrice !== undefined ? params.currentPrice : 850);
    const month = params.month || 'June';
    const sessionType = params.sessionType || 'portrait';

    // 1. Yield & Capacity Evaluation
    const yieldResult = YieldManagementEngine.evaluateYield({
      bookedSlots,
      totalSlots,
      currentPrice,
      month,
      sessionType,
      leadVelocityWeekly: params.leadVelocityWeekly
    });

    // 2. Seasonal Demand Elasticity
    const seasonalDynamics = SeasonalElasticityCalculator.calculateSeasonalAdjustedRate(currentPrice, sessionType, month);

    // 3. Competitive Market Positioning
    const positioning = MarketPositioningEngine.assessPositioning(sessionType, currentPrice);

    // 4. Collection Margin Economics & HST
    const economics = MarginAccountingCalculator.calculateCollectionEconomics(
      sessionType.toLowerCase().includes('wedding') ? 'WEDDING_SIGNATURE' : 'FAMILY_HEIRLOOM',
      currentPrice
    );

    // Map to legacy action interface for 100% backward compatibility
    let legacyAction = 'hold';
    let legacyNewPrice = currentPrice;
    let legacyReason = yieldResult.strategySummary;
    let legacySuggestion = null;

    if (yieldResult.action === 'SURGE_RAISE') {
      legacyAction = 'raise';
      legacyNewPrice = yieldResult.suggestedPriceCAD;
      legacyReason = `${yieldResult.utilizationPercent} booked — raise 10-15%`;
    } else if (yieldResult.action === 'STIMULATE_DEMAND') {
      legacyAction = 'promote';
      legacySuggestion = 'Run mini-session pop-up or offer bundled $100 museum print credit';
    }

    return {
      // Legacy Fields
      action: legacyAction,
      newPrice: legacyAction === 'raise' ? legacyNewPrice : undefined,
      reason: legacyReason,
      suggestion: legacySuggestion || undefined,

      // Enterprise Intelligence Fields
      status: 'success',
      yieldAnalysis: yieldResult,
      seasonalDynamics,
      marketPositioning: positioning,
      financialEconomics: economics
    };
  }

  /**
   * Run comprehensive self-diagnostics suite
   */
  static runSelfDiagnostics() {
    const testResults = [];

    // Test 1: High utilization triggers raise / surge
    const t1 = YieldManagementEngine.evaluateYield({ bookedSlots: 9, totalSlots: 10, currentPrice: 1000 });
    testResults.push({
      test: '90% utilization triggers SURGE_RAISE (+15%)',
      passed: t1.action === 'SURGE_RAISE' && t1.suggestedPriceCAD === 1150
    });

    // Test 2: Low utilization triggers demand stimulation
    const t2 = YieldManagementEngine.evaluateYield({ bookedSlots: 1, totalSlots: 5, currentPrice: 850 });
    testResults.push({
      test: '20% utilization triggers STIMULATE_DEMAND without price dropping',
      passed: t2.action === 'STIMULATE_DEMAND' && t2.suggestedPriceCAD === 850
    });

    // Test 3: Seasonal Elasticity October Fall Foliage
    const t3 = SeasonalElasticityCalculator.calculateSeasonalAdjustedRate(850, 'portrait', 'October');
    testResults.push({
      test: 'October portrait demand applies foliage peak surge',
      passed: t3.seasonallyAdjustedPriceCAD > 850 && t3.demandTier === 'PEAK_FALL_FOLIAGE_SURGE'
    });

    // Test 4: Market Positioning of $4,800 Signature Wedding
    const t4 = MarketPositioningEngine.assessPositioning('wedding', 4800);
    testResults.push({
      test: '$4,800 wedding qualifies as TOP_10_PERCENT_LUXURY',
      passed: t4.marketPercentile === 'TOP_10_PERCENT_LUXURY' && t4.brandIntegrityStatus === 'HEALTHY_LUXURY'
    });

    // Test 5: Margin & Ontario HST Calculation on $4,800
    const t5 = MarginAccountingCalculator.calculateCollectionEconomics('WEDDING_SIGNATURE', 4800);
    testResults.push({
      test: '$4,800 Signature Collection computes $624 HST and healthy > 65% margin',
      passed: t5.taxDetails.hstAmountCAD === 624 && t5.profitability.isHealthyMargin === true
    });
    // Test 6: Travel Calculator for Downtown Toronto
    const travel = RegionalTravelCalculator.computeTravelDisbursement('Toronto', true);
    testResults.push({
      test: 'Downtown Toronto computes Tier 1 travel + parking surcharge ($120)',
      passed: travel.totalDisbursementPreTaxCAD === 120 && travel.isComplimentary === false
    });

    // Test 7: Custom Quote Builder with Second Shooter & 12x12 Album
    const quote = QuoteBuilderEngine.buildCustomQuote('WEDDING_CLASSIC', { addSecondShooter: true, add12x12Album: true });
    testResults.push({
      test: 'Classic Wedding ($3,600) + Second Shooter ($600) + Album ($600) = $4,800 CAD',
      passed: quote.subtotalCAD === 4800 && quote.hstCAD === 624 && quote.grandTotalCAD === 5424
    });

    // Test 8: Discount Governance STRICT_NON_NEGOTIABLE
    const disc = PricingGovernanceManager.handlePricePushback('CASH_DISCOUNT_OR_TAX_WAIVER');
    testResults.push({
      test: 'Cash tax waiver pushback triggers strict CRA compliance defense',
      passed: disc.policyVerdict === 'STRICT_NON_NEGOTIABLE' && disc.script.includes('Excise Tax Act')
    });


    const allPassed = testResults.every(t => t.passed);
    return {
      engine: 'PricingOptimizerEngine',
      totalTests: testResults.length,
      allPassed,
      tests: testResults
    };
  }
}

// --- PART 7: BOUNDARY TESTING & 12-MONTH SIMULATIONS ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 7: BOUNDARY TESTING & 12-MONTH SIMULATION BENCHMARKS
 */

class PricingBoundaryAndSimulations {
  static runBoundaryTests() {
    const boundaryResults = [];

    // Test 1: Zero total slots protection
    try {
      const res = YieldManagementEngine.evaluateYield({ bookedSlots: 0, totalSlots: 0, currentPrice: 500 });
      boundaryResults.push({
        test: 'Zero total slots evaluates safely without Divide-by-Zero',
        passed: res.utilizationRatio === 0
      });
    } catch (e) {
      boundaryResults.push({ test: 'Zero total slots evaluates safely', passed: false, error: e.message });
    }

    // Test 2: Overbooked condition (>100%)
    const overbooked = YieldManagementEngine.evaluateYield({ bookedSlots: 7, totalSlots: 5, currentPrice: 850 });
    boundaryResults.push({
      test: 'Overbooked condition (140%) triggers SURGE_RAISE safely',
      passed: overbooked.action === 'SURGE_RAISE' && overbooked.utilizationRatio === 1.4
    });

    // Test 3: Invalid month name fallback
    const fallbackMonth = SeasonalElasticityCalculator.getMonthDynamics('AtlantisMonth');
    boundaryResults.push({
      test: 'Invalid month defaults gracefully to June solstice',
      passed: fallbackMonth.month === 'June'
    });

    // Test 4: Free or zero dollar price handling
    const zeroPrice = MarginAccountingCalculator.calculateCollectionEconomics('CLASSIC_FAMILY', 0);
    boundaryResults.push({
      test: 'Zero price calculates zero tax without crashing',
      passed: zeroPrice.taxDetails.hstAmountCAD === 0
    });

    return {
      totalBoundaryTests: boundaryResults.length,
      allBoundaryPassed: boundaryResults.every(t => t.passed),
      results: boundaryResults
    };
  }

  static simulateAllTwelveMonths() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.map(m => {
      const target = STUDIO_CAPACITY_LIMITS.monthlyTargets[m];
      const simBooked = Math.round(target.portraits * 0.75);
      const y = YieldManagementEngine.evaluateYield({
        month: m,
        bookedSlots: simBooked,
        totalSlots: target.portraits,
        currentPrice: 850,
        sessionType: 'portrait'
      });
      const s = SeasonalElasticityCalculator.calculateSeasonalAdjustedRate(850, 'portrait', m);

      return {
        month: m,
        targetRevenueCAD: target.totalTargetRevenueCAD,
        simBooked,
        totalSlots: target.portraits,
        action: y.action,
        adjustedPriceCAD: s.seasonallyAdjustedPriceCAD,
        demandTier: s.demandTier
      };
    });
  }
}

// --- PART 8: DISCOUNT RESISTANCE & PRICING OBJECTION DIRECTIVES ---
/**
 * HAFFU STUDIO — PRICING OPTIMIZER ENGINE
 * PART 8: DISCOUNT RESISTANCE POLICY & PRICING OBJECTION DIRECTIVES
 */

const DISCOUNT_OBJECTION_HANDLERS = {
  CASH_DISCOUNT_OR_TAX_WAIVER: {
    inquiry: "Can we get a discount or waive the 13% HST if we pay in cash / e-Transfer?",
    psychology: "Client looking for under-the-table discount or misunderstanding Canadian tax law.",
    script: "As a federally registered Canadian corporation, Hafsa Noreen Photography operates with complete legal and fiscal integrity. The 13.0% Ontario Harmonized Sales Tax (HST) is mandatory under the Excise Tax Act and is collected on behalf of the Canada Revenue Agency. We do gladly accept Interac e-Transfer for instant, seamless payment without card processing friction, but all legal invoices strictly include HST and full commercial contracts to protect both our studio and your investment.",
    policyVerdict: "STRICT_NON_NEGOTIABLE"
  },
  COMPETITOR_LOWER_QUOTE: {
    inquiry: "Another photographer in Halton quoted us $2,500 for full day wedding coverage. Can you match that?",
    psychology: "Price comparison against lower-tier volume or part-time hobbyist shooters.",
    script: "We completely understand that budgets are a key part of wedding planning, and there are many wonderful photographers at various price tiers across Halton. Hafsa intentionally limits her calendar to 25 weddings per year so that every single image is personally culled, hand-colored with signature medium-format film tones, and retouched by Hafsa herself, with guaranteed 10-day gallery delivery and dual-card camera redundancy. Because our pricing reflects hundreds of hours of creative devotion and physical heirloom materials, we do not price match. We would love nothing more than to celebrate with you, or we can gladly look at our Intimate Collection to see if it aligns closer to your comfort zone.",
    policyVerdict: "FIRM_VALUE_DEFENSE"
  },
  NON_PROFIT_OR_GALA: {
    inquiry: "We are hosting a charity gala in Oakville. Do you offer non-profit rates?",
    psychology: "Charitable alignment request.",
    script: "Hafsa deeply loves giving back to our local Halton community! We accept a strictly limited allocation of 2 pro-bono or community-subsidized charity galas each fiscal year. For registered Canadian charities, we offer a dedicated 20% community credit or provide a luxury portrait session gift certificate for your silent auction to help raise funds for your cause.",
    policyVerdict: "COMMUNITY_SUBSIDIZED_ALLOCATION"
  }
};

class PricingGovernanceManager {
  /**
   * Retrieves strict studio policy responses for pricing negotiations
   */
  static handlePricePushback(objectionType = 'CASH_DISCOUNT_OR_TAX_WAIVER') {
    return DISCOUNT_OBJECTION_HANDLERS[objectionType] || DISCOUNT_OBJECTION_HANDLERS.COMPETITOR_LOWER_QUOTE;
  }
}

// Extended Engine Static Utilities
PricingOptimizerEngine.runFullTestSuite = function() {
  const diag = PricingOptimizerEngine.runSelfDiagnostics();
  const bound = PricingBoundaryAndSimulations.runBoundaryTests();
  const sim = PricingBoundaryAndSimulations.simulateAllTwelveMonths();
  return {
    engine: "PricingOptimizerEngine",
    timestamp: new Date().toISOString(),
    allPassed: diag.allPassed && bound.allBoundaryPassed && sim.length === 12,
    diagnostics: diag,
    boundaryTests: bound,
    annualSimulationMonthsCount: sim.length
  };
};

PricingOptimizerEngine.getMarketPositioning = function(sessionType, price) {
  return MarketPositioningEngine.assessPositioning(sessionType, price);
};

PricingOptimizerEngine.getEconomics = function(collectionKey, price) {
  return MarginAccountingCalculator.calculateCollectionEconomics(collectionKey, price);
};

PricingOptimizerEngine.getAnnualForecast = function(currentPace) {
  return AnnualRevenueForecaster.generateAnnualForecast(currentPace);
};

PricingOptimizerEngine.simulateFullYear = function() {
  return PricingBoundaryAndSimulations.simulateAllTwelveMonths();
};

// Compatibility Export Layer (Supports class & static method invocations)
PricingOptimizerEngine.PricingOptimizer = PricingOptimizerEngine;
PricingOptimizerEngine.STUDIO_CAPACITY_LIMITS = STUDIO_CAPACITY_LIMITS;
PricingOptimizerEngine.YieldManagementEngine = YieldManagementEngine;
PricingOptimizerEngine.SEASONAL_DEMAND_CURVES = SEASONAL_DEMAND_CURVES;
PricingOptimizerEngine.SeasonalElasticityCalculator = SeasonalElasticityCalculator;
PricingOptimizerEngine.GTA_MARKET_BENCHMARKS = GTA_MARKET_BENCHMARKS;
PricingOptimizerEngine.MarketPositioningEngine = MarketPositioningEngine;
PricingOptimizerEngine.STANDARD_COGS_MATRIX = STANDARD_COGS_MATRIX;
PricingOptimizerEngine.MarginAccountingCalculator = MarginAccountingCalculator;
PricingOptimizerEngine.AnnualRevenueForecaster = AnnualRevenueForecaster;
PricingOptimizerEngine.PricingBoundaryAndSimulations = PricingBoundaryAndSimulations;
PricingOptimizerEngine.REGIONAL_TRAVEL_ZONES = REGIONAL_TRAVEL_ZONES;
PricingOptimizerEngine.RegionalTravelCalculator = RegionalTravelCalculator;
PricingOptimizerEngine.VIP_PROMOTION_BLUEPRINTS = VIP_PROMOTION_BLUEPRINTS;
PricingOptimizerEngine.DynamicPromotionEngine = DynamicPromotionEngine;
PricingOptimizerEngine.MASTER_2026_COLLECTIONS = MASTER_2026_COLLECTIONS;
PricingOptimizerEngine.QuoteBuilderEngine = QuoteBuilderEngine;
PricingOptimizerEngine.calculateTravel = function(destination, isDowntown) {
  return RegionalTravelCalculator.computeTravelDisbursement(destination, isDowntown);
};
PricingOptimizerEngine.buildCustomQuote = function(collectionKey, options) {
  return QuoteBuilderEngine.buildCustomQuote(collectionKey, options);
};
PricingOptimizerEngine.configureVIPCampaign = function(campaignKey) {
  return DynamicPromotionEngine.configureCampaign(campaignKey);
};
PricingOptimizerEngine.DISCOUNT_OBJECTION_HANDLERS = DISCOUNT_OBJECTION_HANDLERS;
PricingOptimizerEngine.PricingGovernanceManager = PricingGovernanceManager;
PricingOptimizerEngine.handleDiscountInquiry = function(inquiryKey) {
  return PricingGovernanceManager.handlePricePushback(inquiryKey);
};
PricingOptimizerEngine.calculateOntarioHST = function(amountCAD) {
  const subtotal = Math.round(Number(amountCAD || 0) * 100) / 100;
  const hst = Math.round(subtotal * 0.13 * 100) / 100;
  return { subtotalCAD: subtotal, taxRate: "13.0% HST", hstCAD: hst, grandTotalCAD: subtotal + hst };
};

PricingOptimizerEngine.calculateDepositSplit = function(amountCAD, flatDepositCAD = 500) {
  const total = Math.round(Number(amountCAD || 0) * 1.13 * 100) / 100;
  const deposit = Math.min(total, flatDepositCAD);
  return {
    depositCAD: deposit,
    balanceDueCAD: Math.round((total - deposit) * 100) / 100,
    grandTotalCAD: total
  };
};

PricingOptimizerEngine.getCollectionByKey = function(key) {
  return MASTER_2026_COLLECTIONS[key] || null;
};

PricingOptimizerEngine.getAllCollections = function() {
  return Object.values(MASTER_2026_COLLECTIONS);
};

module.exports = PricingOptimizerEngine;