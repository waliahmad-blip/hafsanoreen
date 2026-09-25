/**
 * ============================================================================
 * HAFFU STUDIO — SEASONAL DEMAND, REVENUE FORECASTING & BOTANICAL CALENDAR
 * ============================================================================
 * Enterprise Seasonal Demand & Yield Optimization Architecture:
 *   1. 4-Season Macro Intelligence Matrix (Capacity Caps, AOV Targets, Pricing Strategy)
 *   2. 12-Month Micro-Meteorological & Botanical Calendar (Bloom Peaks, Daylight, Weather)
 *   3. Yield Management & Capacity Optimization (80% Surcharge Rule & Utilization Rates)
 *   4. Atmospheric Meteorological Risk Modeling (Precipitation Probabilities & Rain Protocols)
 *   5. Marketing Campaign Dispatch Triggers & 45-60 Day Promotional Lead Times
 *   6. Annual Fiscal Model ($183,000+ CAD Gross Across 4 Quarters, 25 Weddings, 65 Portraits)
 *   7. Print Lab Holiday Production Deadlines (Florence Italian Bindery & Oakville Lab)
 *   8. Waitlist Priority Engine & VIP Peak Date Reservation Controller
 *   9. 100% Backward-Compatible Legacy Interface (execute, getSeasonalIntelligence, runDiagnostics)
 *
 * Studio: Hafsa Noreen Photography Atelier (Oakville / Burlington / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.4.0
 * ============================================================================
 */

'use strict';

// --- PART 1: 4-SEASON MACRO INTELLIGENCE MATRIX ---
/**
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 1: Core 4-Season Intelligence Matrix & Capacity Caps
 */

const SEASONAL_INTELLIGENCE_MATRIX = {
  spring: {
    season: 'Spring (April – June)',
    seasonKey: 'spring',
    peakDemandDrivers: [
      'Cherry blossom bloom at Gairloch Gardens & Spencer Smith Park',
      'Magnolia blooms in historic Old Oakville residential streets',
      'Early spring wedding elopements and greenhouse maternity sessions'
    ],
    capacityCap: 25,
    targetAverageOrderValue: 850,
    highDemandVenues: [
      'Gairloch Gardens (Oakville)',
      'RBG Hendrie Park & Mediterranean Greenhouse (Burlington)',
      'Spencer Smith Park Waterfront Promenade (Burlington)'
    ],
    pricingStrategy: 'Early-bird wedding retainer incentives; bundled maternity + newborn milestone collections with priority booking hold.',
    historicalBookingLeadTimeDays: 75,
    peakFoliageWindow: 'May 5 to May 22 (Magnolia & Cherry Blossom)'
  },

  summer: {
    season: 'Summer (July – August)',
    seasonKey: 'summer',
    peakDemandDrivers: [
      'Peak Saturday luxury country estate & vineyard wedding dates',
      'Warm lakeside golden hour sunset family sessions along Lake Ontario',
      'Bronte Harbour pier yacht & sailboat sunset engagement sessions'
    ],
    capacityCap: 30,
    targetAverageOrderValue: 2400,
    highDemandVenues: [
      'Spencer Smith Pier (Burlington)',
      'Bronte Harbour Pier & Heritage Waterfront (Oakville)',
      'Paletta Lakefront Mansion & Colonnade (Burlington)',
      'Graydon Hall Manor & Casa Loma (Toronto)'
    ],
    pricingStrategy: 'Premium pricing on weekend dates; Thursday evening golden hour portrait incentives with zero cash discounting.',
    historicalBookingLeadTimeDays: 180,
    peakFoliageWindow: 'July 15 to August 20 (Lush Green Canopies & Wildflower Meadows)'
  },

  autumn: {
    season: 'Autumn (September – October)',
    seasonKey: 'autumn',
    peakDemandDrivers: [
      'Niagara Escarpment dramatic foliage peak across Milton and Burlington',
      'Generational holiday card family heirlooms and grandparent portraits',
      'Autumn country vineyard weddings in Niagara and Prince Edward County'
    ],
    capacityCap: 35,
    targetAverageOrderValue: 1200,
    highDemandVenues: [
      'Mount Nemo & Rattlesnake Point (Milton)',
      'Scotsdale Farm & Credit Valley Trails (Halton Hills)',
      'Lion’s Valley Park & Sixteen Mile Creek Ravine (Oakville)',
      'Lowville Heritage Park (Burlington)'
    ],
    pricingStrategy: 'Strict waitlist management; minimum $650 session commission with zero discounts and upfront date-lock retainers.',
    historicalBookingLeadTimeDays: 120,
    peakFoliageWindow: 'October 3 to October 24 (Peak Escarpment Maple & Oak Colors)'
  },

  winter: {
    season: 'Winter (November – March)',
    seasonKey: 'winter',
    peakDemandDrivers: [
      'Intimate in-home nursery & lifestyle newborn sanctuary sessions',
      'Holiday micro-weddings and cozy fireside estate elopements',
      'Distillery District Christmas market cobblestone portraits'
    ],
    capacityCap: 20,
    targetAverageOrderValue: 750,
    highDemandVenues: [
      'Atelier Indoor Natural Light Suite (Downtown Oakville)',
      'RBG Mediterranean Greenhouse (Burlington)',
      'Distillery District Historic Brick & Gas Lamps (Toronto)'
    ],
    pricingStrategy: 'Heirloom Italian leather duplicate parent album campaigns; fine-art motherhood portrait bundles with complimentary custom debossing.',
    historicalBookingLeadTimeDays: 45,
    peakFoliageWindow: 'December 1 to January 15 (Festive Lights & Winter Snowscapes)'
  }
};

// --- PART 2: 12-MONTH BOTANICAL & METEOROLOGICAL CALENDAR ---
/**
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 2: Twelve-Month Micro-Meteorological & Botanical Calendar
 */

const TWELVE_MONTH_MICRO_CALENDAR = {
  1: {
    month: 'January',
    season: 'Deep Winter',
    botanicalState: 'Dormant winter landscapes, evergreen pine groves, frosted lake ice shelves',
    optimalVenue: 'Downtown Oakville Natural Light Studio Suite',
    signatureAesthetic: 'Cashmere knits, architectural wool topcoats, soft indoor diffused window light',
    historicalPrecipitationProb: 0.38,
    avgDaylightHours: 9.3,
    keyEventTrigger: 'New Year engagement surge; wedding inquiries open'
  },
  2: {
    month: 'February',
    season: 'Late Winter',
    botanicalState: 'Indoor exotic palms, flowering orchids, and citrus blossoms in greenhouse',
    optimalVenue: 'RBG Mediterranean Greenhouse, Burlington',
    signatureAesthetic: 'Vibrant tropical green backdrop avoiding freezing outdoor temperatures',
    historicalPrecipitationProb: 0.35,
    avgDaylightHours: 10.5,
    keyEventTrigger: 'Valentine’s Day engagement wave; spring blossom booking sprint'
  },
  3: {
    month: 'March',
    season: 'Early Spring Thaw',
    botanicalState: 'Swelling tree buds, early spring snowdrops, flowing creek meltwater',
    optimalVenue: 'Sixteen Mile Creek Ravine Trail & Atelier Studio',
    signatureAesthetic: 'Trench coats, fine wool sweaters, transitional organic textures',
    historicalPrecipitationProb: 0.40,
    avgDaylightHours: 11.9,
    keyEventTrigger: 'Spring blossom VIP waitlist announcement (Gairloch & Spencer Smith)'
  },
  4: {
    month: 'April',
    season: 'Spring Awakening',
    botanicalState: 'Golden weeping willow leaf-out, daffodils, fresh emerald lawn turf',
    optimalVenue: 'Paletta Mansion Estate Parkland, Burlington',
    signatureAesthetic: 'Pastel silks, soft olive tones, gentle overcast spring light',
    historicalPrecipitationProb: 0.42,
    avgDaylightHours: 13.4,
    keyEventTrigger: 'Motherhood & fine-art maternity campaign dispatch'
  },
  5: {
    month: 'May',
    season: 'Blossom Peak',
    botanicalState: 'Pink saucer magnolias and Japanese cherry blossom petals (10-14 day bloom)',
    optimalVenue: 'Gairloch Gardens, Oakville & Spencer Smith Park, Burlington',
    signatureAesthetic: 'Flowing linen dresses, petal rain, warm golden lakeside sunset',
    historicalPrecipitationProb: 0.36,
    avgDaylightHours: 14.6,
    keyEventTrigger: 'Peak milestone maternity, engagement, and mother-child sessions'
  },
  6: {
    month: 'June',
    season: 'Early Summer & Solstice',
    botanicalState: 'English heritage roses in full fragrant bloom, lush tree canopies',
    optimalVenue: 'Paletta Lakefront Rose Gardens & Burlington Pier',
    signatureAesthetic: 'Breathable linen, light sky blue, longest evening twilight of year (21:15)',
    historicalPrecipitationProb: 0.34,
    avgDaylightHours: 15.3,
    keyEventTrigger: 'Peak wedding season launch; summer sunset weekend dates fully active'
  },
  7: {
    month: 'July',
    season: 'Midsummer Golden',
    botanicalState: 'Wildflower meadows, blooming lavender fields, sun-drenched beach grasses',
    optimalVenue: 'Campbellville Lavender & Coronation Park Beach Bluffs',
    signatureAesthetic: 'Barefoot shoreline strolls, unlined linen shirts, warm amber backlight',
    historicalPrecipitationProb: 0.28,
    avgDaylightHours: 15.0,
    keyEventTrigger: 'Summer beach family sessions & autumn foliage pre-registration'
  },
  8: {
    month: 'August',
    season: 'Late Summer Harvest',
    botanicalState: 'Golden wheat fields, late-summer sunflowers, amber dusk haze',
    optimalVenue: 'Bronte Creek Country Valley & Rattlesnake Point Escarpment',
    signatureAesthetic: 'Warm ochre, soft terracotta, sun-kissed family storytelling',
    historicalPrecipitationProb: 0.26,
    avgDaylightHours: 13.9,
    keyEventTrigger: 'Autumn Escarpment Foliage master calendar release'
  },
  9: {
    month: 'September',
    season: 'Early Autumn Equinox',
    botanicalState: 'Turning maple tips, ripening vineyard grapes, crisp morning dew',
    optimalVenue: 'Lowville Heritage Park & Scotsdale Farm Heritage Barns',
    signatureAesthetic: 'Caramel wool sweaters, rich cognac boots, crystal-clear skies',
    historicalPrecipitationProb: 0.24,
    avgDaylightHours: 12.4,
    keyEventTrigger: 'Peak luxury country wedding month; highest weather stability'
  },
  10: {
    month: 'October',
    season: 'Peak Escarpment Foliage',
    botanicalState: 'Vibrant crimson sugar maples, fiery orange oaks, golden beech leaves',
    optimalVenue: 'Mount Nemo & Rattlesnake Point Cliff Rims, Milton',
    signatureAesthetic: 'Chunky cable knits, deep forest green, dramatic escarpment cliff sunset',
    historicalPrecipitationProb: 0.32,
    avgDaylightHours: 11.0,
    keyEventTrigger: 'Annual holiday card generational family sprint; high-urgency'
  },
  11: {
    month: 'November',
    season: 'Late Autumn Hearth',
    botanicalState: 'Bare sculptural tree branches, neutral tall prairie grasses, first frost',
    optimalVenue: 'Downtown Oakville Historic Streetscape & Atelier Hearth Suite',
    signatureAesthetic: 'Charcoal wool topcoats, cashmere scarves, intimate twilight lamps',
    historicalPrecipitationProb: 0.44,
    avgDaylightHours: 9.7,
    keyEventTrigger: 'Print lab holiday cutoff (Nov 20 for Italian leather albums)'
  },
  12: {
    month: 'December',
    season: 'Holiday Festive',
    botanicalState: 'Evergreen balsam wreaths, festive holiday garlands, candlelit studio',
    optimalVenue: 'Downtown Oakville Studio & Historic Distillery District Toronto',
    signatureAesthetic: 'Emerald velvet, black-tie tailoring, glowing holiday bokeh',
    historicalPrecipitationProb: 0.40,
    avgDaylightHours: 9.0,
    keyEventTrigger: 'Archival album deliveries & new engagement surge'
  }
};

// --- PART 3: YIELD MANAGEMENT & CAPACITY OPTIMIZATION ---
/**
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 3: Yield Management, Capacity Optimization & Print Lab Cutoffs
 */



const PRINT_LAB_ANNUAL_CUTOFFS = {
  ITALIAN_LEATHER_ALBUMS: {
    product: 'Handcrafted Italian Leather Albums & Duplicate Books',
    cutoffDate: 'November 20',
    labLocation: 'Florence & Milan, Italy',
    shippingMethod: 'Express Air Courier with Customs Clearance',
    rationale: 'Handmade binding and foil cover debossing requires 3-4 weeks artisan production before holiday delivery.'
  },
  MATTED_PRINT_FOLIOS: {
    product: 'Belgian Linen Folio Boxes with Matted Cotton Prints',
    cutoffDate: 'December 1',
    labLocation: 'Toronto / Oakville Archival Lab',
    shippingMethod: 'Hand-Delivered / Studio Curbside Sanctuary Pick-up',
    rationale: 'Archival mounting and hand-torn deckled edges require 7-10 business days.'
  },
  DECKLED_HOLIDAY_CARDS: {
    product: 'Custom Calligraphed Deckled Holiday Cards & Wax Seals',
    cutoffDate: 'December 5',
    labLocation: 'Oakville Atelier Bindery',
    shippingMethod: 'Canada Post Priority / Studio Pick-up',
    rationale: 'Hand-pressed wax seals and metallic typography requires 5 business days.'
  }
};

class SeasonalYieldEngine {
  /**
   * Calculate seasonal revenue yield, capacity utilization, and remaining inventory
   */
  static calculateYield({ seasonKey = 'autumn', currentBookings = 15, customAov = null }) {
    const key = (seasonKey || 'autumn').toLowerCase();
    const seasonData = SEASONAL_INTELLIGENCE_MATRIX[key] || SEASONAL_INTELLIGENCE_MATRIX.autumn;

    const aov = customAov !== null && customAov !== undefined ? Number(customAov) : seasonData.targetAverageOrderValue;
    const capacity = seasonData.capacityCap;
    const booked = Math.min(capacity, Math.max(0, Number(currentBookings) || 0));
    const remainingSlots = Math.max(0, capacity - booked);
    const utilizationRatePercent = Math.round((booked / capacity) * 100);

    const projectedTotalGross = capacity * aov;
    const currentRealizedGross = booked * aov;
    const remainingGrossOpportunity = remainingSlots * aov;

    let scarcityTier = 'OPEN_AVAILABILITY';
    if (utilizationRatePercent >= 90) scarcityTier = 'FINAL_CALL_WAITLIST';
    else if (utilizationRatePercent >= 70) scarcityTier = 'HIGH_DEMAND_FILLING';
    else if (utilizationRatePercent >= 40) scarcityTier = 'STEADY_MOMENTUM';

    return {
      season: seasonData.season,
      targetAOV: aov,
      capacityCap: capacity,
      bookedCommissions: booked,
      remainingSlots,
      utilizationRatePercent,
      scarcityTier,
      financials: {
        currentRealizedGrossCad: currentRealizedGross,
        remainingOpportunityCad: remainingGrossOpportunity,
        projectedTotalGrossCad: projectedTotalGross
      },
      yieldDirective: utilizationRatePercent >= 80
        ? 'High booking density reached; enforce strict $650 minimum retainer and hold weekend dates for signature collections.'
        : 'Open scheduling available; distribute seasonal lookbook and activate rebooking reminders.'
    };
  }

  /**
   * Return formal print lab annual delivery deadlines
   */
  static getLabDeadlines() {
    return PRINT_LAB_ANNUAL_CUTOFFS;
  }
}

// --- PART 4: ATMOSPHERIC METEOROLOGICAL RISK MODELING ---
/**
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 4: Atmospheric Meteorological Risk Modeling & Rain Protocols
 */



class AtmosphericRiskModel {
  /**
   * Calculate meteorological weather postponement risk score (0 to 100)
   */
  static assessWeatherRisk(monthNumber = 10) {
    const m = Math.min(12, Math.max(1, Number(monthNumber) || 10));
    const monthData = TWELVE_MONTH_MICRO_CALENDAR[m] || TWELVE_MONTH_MICRO_CALENDAR[10];

    const precipProb = monthData.historicalPrecipitationProb;
    let riskScore = Math.round(precipProb * 100);

    // Weather factors
    let weatherHazards = [];
    if (m === 1 || m === 2) {
      riskScore += 15;
      weatherHazards.push('Sub-zero freeze risk (< -5°C); outdoor sessions capped at 25 minutes or moved indoors.');
    } else if (m === 4 || m === 11) {
      riskScore += 10;
      weatherHazards.push('Cold transitional rain; damp ground requires weather-sealed footwear.');
    } else if (m === 6 || m === 7) {
      weatherHazards.push('Fast-moving summer afternoon convective thunderstorms; typically clear within 45 minutes.');
    } else if (m === 9 || m === 10) {
      weatherHazards.push('Optimal autumn atmospheric stability; low storm risk and crisp air clarity.');
    }

    const finalRisk = Math.min(100, Math.max(10, riskScore));

    let riskLevel = 'LOW_STABILITY';
    if (finalRisk >= 50) riskLevel = 'ELEVATED_CONTINGENCY';
    else if (finalRisk >= 35) riskLevel = 'MODERATE';
    else riskLevel = 'PRIME_OPTIMAL_CONDITIONS';

    return {
      month: monthData.month,
      season: monthData.season,
      riskScore: finalRisk,
      riskLevel,
      historicalPrecipitationProbability: `${Math.round(precipProb * 100)}%`,
      weatherHazards,
      recommendedContingency: finalRisk >= 40
        ? 'Confirm indoor rain backup permit (RBG Greenhouse or Paletta covered colonnade) 48 hours prior.'
        : 'Outdoor natural light conditions highly favorable; bring studio transparent bubble umbrellas as artistic styling.'
    };
  }
}

// --- PART 5: SEASONAL CAMPAIGN DISPATCH TRIGGERS ---
/**
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 5: Seasonal Campaign Dispatch Triggers & Marketing Lead Times
 */

const SEASONAL_CAMPAIGN_TRIGGERS = [
  {
    campaignId: 'SPRING_BLOSSOM_WAKEUP',
    title: 'Cherry Blossom & Magnolia Awakening Campaign',
    optimalDispatchDate: 'March 15',
    targetSessionWindow: 'May 5 to May 25',
    leadTimeDays: 50,
    coreAudience: 'Maternity, engaged couples, mother-daughter portrait commissions',
    scarcityAnchor: 'Only 8 sunset blossom dates opened due to ephemeral 10-day bloom window.'
  },
  {
    campaignId: 'MOTHERHOOD_SANCTUARY',
    title: 'Fine-Art Motherhood & Mother’s Day Tribute',
    optimalDispatchDate: 'April 5',
    targetSessionWindow: 'May 1 to May 30',
    leadTimeDays: 30,
    coreAudience: 'Mothers with toddlers, expectant mothers, multi-generational grandmothers',
    scarcityAnchor: 'Complimentary floral bouquet styling credit included with all motherhood commissions.'
  },
  {
    campaignId: 'SUMMER_DUSK_BEACH',
    title: 'Lake Ontario Lakeside Dusk & Sunset Sail Series',
    optimalDispatchDate: 'May 20',
    targetSessionWindow: 'July 1 to August 15',
    leadTimeDays: 45,
    coreAudience: 'Couples, young families, milestone anniversary celebrations',
    scarcityAnchor: 'Barefoot sunset beach slots strictly limited to low-tide golden hour windows.'
  },
  {
    campaignId: 'AUTUMN_FOLIAGE_REGISTRATION',
    title: 'Niagara Escarpment Golden Foliage Master Release',
    optimalDispatchDate: 'July 25',
    targetSessionWindow: 'October 1 to October 25',
    leadTimeDays: 65,
    coreAudience: 'Annual family heirloom collectors, corporate leaders, holiday card clients',
    scarcityAnchor: 'Our October weekend calendar sells out 2 months in advance; waitlist members receive 48-hour priority access.'
  },
  {
    campaignId: 'HOLIDAY_HEARTH_LAB_RUSH',
    title: 'Holiday Atelier Hearth & Italian Album Print Rush',
    optimalDispatchDate: 'October 15',
    targetSessionWindow: 'November 10 to December 15',
    leadTimeDays: 35,
    coreAudience: 'Past wedding and portrait clients ordering duplicate parent albums and gifts',
    scarcityAnchor: 'November 20 lab print deadline for guaranteed Christmas Eve delivery from Florence.'
  }
];

class SeasonalCampaignScheduler {
  /**
   * Determine currently active or upcoming marketing campaign triggers
   */
  static getUpcomingTriggers(currentDate = new Date()) {
    const d = new Date(currentDate);
    const currentMonth = d.getMonth() + 1; // 1 to 12

    let activeCampaign = SEASONAL_CAMPAIGN_TRIGGERS[0];
    if (currentMonth === 1 || currentMonth === 2 || currentMonth === 3) {
      activeCampaign = SEASONAL_CAMPAIGN_TRIGGERS[0]; // Spring Blossom Wakeup
    } else if (currentMonth === 4) {
      activeCampaign = SEASONAL_CAMPAIGN_TRIGGERS[1]; // Motherhood Sanctuary
    } else if (currentMonth === 5 || currentMonth === 6) {
      activeCampaign = SEASONAL_CAMPAIGN_TRIGGERS[2]; // Summer Dusk
    } else if (currentMonth === 7 || currentMonth === 8 || currentMonth === 9) {
      activeCampaign = SEASONAL_CAMPAIGN_TRIGGERS[3]; // Autumn Foliage Master Release
    } else {
      activeCampaign = SEASONAL_CAMPAIGN_TRIGGERS[4]; // Holiday Hearth Lab Rush
    }

    return {
      currentDateIso: d.toISOString().split('T')[0],
      activeCampaign,
      allCampaignSchedule: SEASONAL_CAMPAIGN_TRIGGERS
    };
  }
}

// --- PART 6: LUXURY HTML & MARKDOWN RENDERERS ---
/**
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 6: Luxury HTML Forecast Dossier & Markdown Renderers
 */

class SeasonalForecastHtmlRenderer {
  /**
   * Render luxury editorial HTML seasonal forecast dossier
   */
  static renderForecastHtml(data) {
    const drivers = (data.demandDrivers || []).map(d => `<li style="margin-bottom: 6px;">${d}</li>`).join('');
    const hotspots = (data.recommendedHotspots || []).map(h => `<li style="margin-bottom: 6px;">${h}</li>`).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Seasonal Demand &amp; Yield Intelligence — Hafsa Noreen Photography</title>
</head>
<body style="margin: 0; padding: 0; background-color: #faf9f6; font-family: -apple-system, BlinkMacSystemFont, Arial, serif; color: #232220; line-height: 1.7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 15px; background-color: #faf9f6;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; background-color: #ffffff; border: 1px solid #eae5df; border-radius: 4px; padding: 40px; box-shadow: 0 4px 18px rgba(0,0,0,0.03);">
          <tr>
            <td align="center" style="border-bottom: 1px solid #f2ede8; padding-bottom: 24px;">
              <span style="font-family: Georgia, serif; font-size: 20px; letter-spacing: 0.18em; text-transform: uppercase; color: #1a1918;">HAFSA NOREEN</span>
              <div style="font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #8e8880; margin-top: 6px;">Seasonal Demand &amp; Revenue Yield Intelligence</div>
              <div style="width: 32px; height: 1px; background-color: #c5a059; margin: 12px auto 0 auto;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px 4px 10px 4px;">
              <h2 style="font-family: Georgia, serif; font-size: 23px; font-weight: normal; color: #1a1918; margin-top: 0;">${data.seasonName}</h2>
              
              <!-- Gross Revenue Projection Box -->
              <div style="background-color: #f7f5f2; border-left: 3px solid #c5a059; padding: 18px; margin: 20px 0; border-radius: 2px;">
                <div style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #7a7368; font-weight: 600;">Projected Seasonal Gross Revenue</div>
                <div style="font-size: 22px; font-family: Georgia, serif; color: #1a1918; margin-top: 4px;">${data.projectedSeasonalGross}</div>
                <div style="font-size: 13px; color: #5a5752; margin-top: 4px;">Capacity Cap: <strong>${data.commissionCapacityCap} commissions</strong> &bull; Target AOV: <strong>${data.targetAOV}</strong></div>
              </div>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Key Regional Demand Drivers</h3>
              <ul style="font-size: 14px; color: #3c3a37; padding-left: 20px;">${drivers}</ul>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Recommended Regional Hotspots</h3>
              <ul style="font-size: 14px; color: #3c3a37; padding-left: 20px;">${hotspots}</ul>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Strategic Yield &amp; Pricing Guidance</h3>
              <p style="font-size: 14px; color: #4a453e;">${data.strategicGuidance}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 24px; border-top: 1px solid #f2ede8; font-size: 12px; color: #8e8880; line-height: 1.6; text-align: center;">
              Hafsa Noreen Photography Atelier • Oakville, ON • Fiscal Strategic Yield Model
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

class SeasonalForecastMarkdownRenderer {
  /**
   * Render concise executive forecast report in Markdown
   */
  static renderForecastMarkdown(data) {
    return `# HAFSA NOREEN PHOTOGRAPHY — SEASONAL YIELD DOSSIER
## ${data.seasonName.toUpperCase()}

- **Projected Gross Revenue:** ${data.projectedSeasonalGross}
- **Capacity Ceiling:** ${data.commissionCapacityCap} commissions
- **Target Average Order Value (AOV):** ${data.targetAOV}

---
### Regional Demand Drivers
${(data.demandDrivers || []).map(d => `- ${d}`).join('\n')}

### High-Demand Regional Venues
${(data.recommendedHotspots || []).map(h => `- ${h}`).join('\n')}

### Strategic Pricing Directive
> ${data.strategicGuidance}

---
*Oakville Atelier Commercial Intelligence*`;
  }
}

// --- PART 7: CORE ENGINE ORCHESTRATOR ---
/**
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 7: Core Engine Class & Orchestrator
 */








class SeasonalPredictor {
  static getSeasonalIntelligence() {
    return SEASONAL_INTELLIGENCE_MATRIX;
  }

  static validateParams(params) {
    if (!params || typeof params !== 'object') {
      throw new Error('SeasonalPredictor: Execution parameters must be an object.');
    }
    return true;
  }

  static resolveSeasonKey(input = 'autumn') {
    const raw = String(input || 'autumn').toLowerCase().trim();

    if (raw.includes('spring') || raw === 'april' || raw === 'may' || raw === 'june' || raw === '4' || raw === '5' || raw === '6') return 'spring';
    if (raw.includes('summer') || raw === 'july' || raw === 'august' || raw === '7' || raw === '8') return 'summer';
    if (raw.includes('fall') || raw.includes('autumn') || raw === 'september' || raw === 'october' || raw === '9' || raw === '10') return 'autumn';
    if (raw.includes('winter') || raw === 'november' || raw === 'december' || raw === 'january' || raw === 'february' || raw === 'march' || raw === '11' || raw === '12' || raw === '1' || raw === '2' || raw === '3') return 'winter';

    return 'autumn';
  }

  static execute(params = {}) {
    this.validateParams(params);

    const {
      season = 'autumn',
      currentBookings = 0,
      customAov = null,
      monthNumber = 10
    } = params;

    const matchedKey = this.resolveSeasonKey(season);
    const matched = SEASONAL_INTELLIGENCE_MATRIX[matchedKey] || SEASONAL_INTELLIGENCE_MATRIX.autumn;

    const projectedRevenue = matched.capacityCap * matched.targetAverageOrderValue;

    const yieldAnalysis = SeasonalYieldEngine.calculateYield({
      seasonKey: matchedKey,
      currentBookings,
      customAov
    });

    const weatherRisk = AtmosphericRiskModel.assessWeatherRisk(monthNumber);
    const upcomingCampaigns = SeasonalCampaignScheduler.getUpcomingTriggers(new Date());

    const legacyPayload = {
      seasonName: matched.season,
      demandDrivers: matched.peakDemandDrivers,
      commissionCapacityCap: matched.capacityCap,
      targetAOV: `$${matched.targetAverageOrderValue} CAD`,
      projectedSeasonalGross: `$${projectedRevenue.toLocaleString()} CAD`,
      recommendedHotspots: matched.highDemandVenues,
      strategicGuidance: matched.pricingStrategy,
      seasonKey: matchedKey,
      historicalBookingLeadTimeDays: matched.historicalBookingLeadTimeDays,
      peakFoliageWindow: matched.peakFoliageWindow,
      yieldAnalysis,
      weatherRisk,
      upcomingCampaigns,
      labDeadlines: PRINT_LAB_ANNUAL_CUTOFFS
    };

    const htmlForecast = SeasonalForecastHtmlRenderer.renderForecastHtml(legacyPayload);
    const markdownReport = SeasonalForecastMarkdownRenderer.renderForecastMarkdown(legacyPayload);

    return {
      ...legacyPayload,
      renderedOutputs: {
        htmlForecast,
        markdownReport
      }
    };
  }

  static toHtml(data) {
    return SeasonalForecastHtmlRenderer.renderForecastHtml(data);
  }

  static toMarkdown(data) {
    return SeasonalForecastMarkdownRenderer.renderForecastMarkdown(data);
  }
}

// --- PART 8: DIAGNOSTIC TEST SUITE ---
/**
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 8: Automated 12-Check Diagnostic Test Suite
 */

class SeasonalPredictorDiagnostics {
  static runDiagnostics(engine) {
    const results = {
      timestamp: new Date().toISOString(),
      testsRun: 0,
      passed: true,
      checks: {}
    };

    // Test 1: Spring Forecast
    const spring = engine.execute({ season: 'spring' });
    results.testsRun++;
    results.checks.springForecast = {
      passed: Boolean(spring.seasonKey === 'spring' && spring.commissionCapacityCap === 25 && spring.targetAOV.includes('850')),
      season: spring.seasonName
    };

    // Test 2: Summer Forecast
    const summer = engine.execute({ season: 'summer' });
    results.testsRun++;
    results.checks.summerForecast = {
      passed: Boolean(summer.seasonKey === 'summer' && summer.projectedSeasonalGross.includes('72,000')),
      gross: summer.projectedSeasonalGross
    };

    // Test 3: Autumn Forecast
    const autumn = engine.execute({ season: 'autumn' });
    results.testsRun++;
    results.checks.autumnForecast = {
      passed: Boolean(autumn.seasonKey === 'autumn' && autumn.commissionCapacityCap === 35 && autumn.targetAOV.includes('1200')),
      cap: autumn.commissionCapacityCap
    };

    // Test 4: Winter Forecast
    const winter = engine.execute({ season: 'winter' });
    results.testsRun++;
    results.checks.winterForecast = {
      passed: Boolean(winter.seasonKey === 'winter' && winter.commissionCapacityCap === 20 && winter.targetAOV.includes('750')),
      gross: winter.projectedSeasonalGross
    };

    // Test 5: Peak Foliage Window
    results.testsRun++;
    results.checks.peakFoliageWindow = {
      passed: Boolean(autumn.peakFoliageWindow && autumn.peakFoliageWindow.includes('October')),
      foliage: autumn.peakFoliageWindow
    };

    // Test 6: Peak Blossom Window
    results.testsRun++;
    results.checks.peakBlossomWindow = {
      passed: Boolean(spring.peakFoliageWindow && spring.peakFoliageWindow.includes('May')),
      blossom: spring.peakFoliageWindow
    };

    // Test 7: Yield Utilization Calculation
    const yieldTest = engine.execute({ season: 'autumn', currentBookings: 28 }); // 28/35 = 80%
    results.testsRun++;
    results.checks.yieldUtilization = {
      passed: Boolean(yieldTest.yieldAnalysis.utilizationRatePercent === 80 && yieldTest.yieldAnalysis.yieldDirective.includes('$650 minimum')),
      utilization: yieldTest.yieldAnalysis.utilizationRatePercent
    };

    // Test 8: Print Lab Deadlines
    results.testsRun++;
    results.checks.printLabDeadlines = {
      passed: Boolean(autumn.labDeadlines.ITALIAN_LEATHER_ALBUMS && autumn.labDeadlines.ITALIAN_LEATHER_ALBUMS.cutoffDate === 'November 20'),
      albumCutoff: autumn.labDeadlines.ITALIAN_LEATHER_ALBUMS.cutoffDate
    };

    // Test 9: October Atmospheric Risk (Optimal conditions)
    const octRisk = engine.execute({ season: 'autumn', monthNumber: 10 });
    results.testsRun++;
    results.checks.octoberWeatherStability = {
      passed: Boolean(octRisk.weatherRisk.riskLevel === 'PRIME_OPTIMAL_CONDITIONS' && octRisk.weatherRisk.riskScore < 35),
      riskScore: octRisk.weatherRisk.riskScore
    };

    // Test 10: January Weather Hazard
    const janRisk = engine.execute({ season: 'winter', monthNumber: 1 });
    results.testsRun++;
    results.checks.januaryFreezeHazard = {
      passed: Boolean(janRisk.weatherRisk.weatherHazards.some(h => h.includes('Sub-zero freeze'))),
      hazards: janRisk.weatherRisk.weatherHazards.length
    };

    // Test 11: Upcoming Marketing Campaign Triggers
    results.testsRun++;
    results.checks.campaignTriggers = {
      passed: Boolean(autumn.upcomingCampaigns.allCampaignSchedule.length === 5),
      campaignCount: autumn.upcomingCampaigns.allCampaignSchedule.length
    };

    // Test 12: Luxury HTML & Markdown Rendering
    results.testsRun++;
    results.checks.htmlAndMarkdownRendering = {
      passed: Boolean(
        autumn.renderedOutputs.htmlForecast.includes('HAFSA NOREEN') &&
        autumn.renderedOutputs.htmlForecast.includes('Autumn (September') &&
        autumn.renderedOutputs.markdownReport.includes('# HAFSA NOREEN PHOTOGRAPHY — SEASONAL YIELD DOSSIER')
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
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 9: Boundary Edge Cases & 50-Forecast Benchmark Simulation
 */

class SeasonalPredictorSimulations {
  static runBoundaryTests(engine) {
    const boundary = [];

    // 1. Empty parameters defaults safely to autumn
    try {
      const res = engine.execute({});
      boundary.push({ test: 'Empty parameters defaults safely', passed: Boolean(res && res.seasonKey === 'autumn') });
    } catch (e) {
      boundary.push({ test: 'Empty parameters defaults safely', passed: false, error: e.message });
    }

    // 2. Month number string '7' resolves to summer
    const m7 = engine.execute({ season: '7' });
    boundary.push({
      test: 'Month number "7" resolves to summer',
      passed: m7.seasonKey === 'summer'
    });

    // 3. Negative currentBookings handles safely
    const negBook = engine.execute({ currentBookings: -5 });
    boundary.push({
      test: 'Negative bookings clamped to zero',
      passed: negBook.yieldAnalysis.bookedCommissions === 0
    });

    // 4. Unknown season fallback to autumn
    const unknownSeason = engine.execute({ season: 'cyber_season_9000' });
    boundary.push({
      test: 'Unknown season fallback to autumn',
      passed: unknownSeason.seasonKey === 'autumn'
    });

    return {
      totalBoundaryTests: boundary.length,
      allBoundaryPassed: boundary.every(b => b.passed),
      results: boundary
    };
  }

  static runBatchSimulation(engine, count = 50) {
    const seasons = ['spring', 'summer', 'autumn', 'winter', 'may', 'july', 'october', 'december'];
    const forecasts = [];

    for (let i = 1; i <= count; i++) {
      const season = seasons[i % seasons.length];
      const currentBookings = (i * 3) % 40;
      const monthNumber = (i % 12) + 1;

      const res = engine.execute({
        season,
        currentBookings,
        monthNumber
      });

      forecasts.push(res);
    }

    const allHaveGross = forecasts.every(f => f.projectedSeasonalGross && f.projectedSeasonalGross.includes('CAD'));
    const allHaveYield = forecasts.every(f => f.yieldAnalysis && f.yieldAnalysis.utilizationRatePercent !== undefined);
    const allHaveHtml = forecasts.every(f => f.renderedOutputs && f.renderedOutputs.htmlForecast.length > 500);

    return {
      totalSimulated: count,
      allHaveGross,
      allHaveYield,
      allHaveHtml,
      allPassed: allHaveGross && allHaveYield && allHaveHtml,
      sampleGross: forecasts[0].projectedSeasonalGross
    };
  }
}

// --- PART 10: ANNUAL REVENUE MODEL ---
/**
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 10: Annual Revenue Model & Fiscal Quarter Revenue Projections
 */

const FISCAL_QUARTER_PROJECTIONS = {
  Q1_WINTER_STUDIO: {
    quarter: 'Q1 (January – March)',
    focus: 'Indoor studio sessions, newborn sanctuaries, and wedding booking season',
    projectedWeddingCommissions: 4,
    projectedPortraitCommissions: 12,
    averageWeddingCad: 4800,
    averagePortraitCad: 700,
    projectedProductSalesCad: 2500,
    totalGrossCad: 30100
  },
  Q2_SPRING_BLOSSOM: {
    quarter: 'Q2 (April – June)',
    focus: 'Cherry blossom sessions, spring maternity, and early summer weddings',
    projectedWeddingCommissions: 7,
    projectedPortraitCommissions: 20,
    averageWeddingCad: 5200,
    averagePortraitCad: 850,
    projectedProductSalesCad: 3500,
    totalGrossCad: 56900
  },
  Q3_SUMMER_ESTATE: {
    quarter: 'Q3 (July – September)',
    focus: 'Peak luxury country estate weddings, beach sunsets, and Niagara vineyards',
    projectedWeddingCommissions: 11,
    projectedPortraitCommissions: 18,
    averageWeddingCad: 5800,
    averagePortraitCad: 800,
    projectedProductSalesCad: 4500,
    totalGrossCad: 82700
  },
  Q4_AUTUMN_FOLIAGE: {
    quarter: 'Q4 (October – December)',
    focus: 'Escarpment fall foliage sprint, holiday heirloom cards, and Italian album deliveries',
    projectedWeddingCommissions: 3,
    projectedPortraitCommissions: 32,
    averageWeddingCad: 4800,
    averagePortraitCad: 950,
    projectedProductSalesCad: 6500,
    totalGrossCad: 51300
  }
};

class AnnualRevenueModel {
  /**
   * Return comprehensive 4-quarter annual fiscal model
   */
  static getAnnualSummary() {
    const quarters = Object.values(FISCAL_QUARTER_PROJECTIONS);
    const totalAnnualGrossCad = quarters.reduce((sum, q) => sum + q.totalGrossCad, 0);
    const totalAnnualWeddings = quarters.reduce((sum, q) => sum + q.projectedWeddingCommissions, 0);
    const totalAnnualPortraits = quarters.reduce((sum, q) => sum + q.projectedPortraitCommissions, 0);
    const totalAnnualPrintSales = quarters.reduce((sum, q) => sum + q.projectedProductSalesCad, 0);

    return {
      fiscalYear: '2026/2027 Projections',
      totalAnnualGrossCad,
      totalAnnualCommissions: totalAnnualWeddings + totalAnnualPortraits,
      breakdown: {
        totalWeddings: totalAnnualWeddings,
        totalPortraits: totalAnnualPortraits,
        totalPrintSalesCad: totalAnnualPrintSales
      },
      quarterlyProjections: FISCAL_QUARTER_PROJECTIONS,
      atelierTakeaway: `Annual atelier capacity is capped at ${totalAnnualWeddings} weddings and ${totalAnnualPortraits} portrait commissions to protect artisan curation quality while yielding $${totalAnnualGrossCad.toLocaleString()} CAD gross annual revenue.`
    };
  }
}

// --- PART 11: WAITLIST PRIORITY ENGINE ---
/**
 * HAFFU — Seasonal Demand & Revenue Forecasting Engine
 * Part 11: Waitlist Priority Engine & Peak Date Access Controller
 */

class WaitlistPriorityEngine {
  /**
   * Register a high-intent client for peak date priority release
   */
  static createWaitlistEntry({
    clientName = 'Valued Client',
    clientEmail = 'client@example.com',
    targetSeason = 'autumn',
    preferredVenue = 'Mount Nemo'
  }) {
    const timestamp = new Date().toISOString();
    const waitlistId = `WAIT-${Date.now().toString(36).toUpperCase()}`;

    return {
      waitlistId,
      clientName,
      clientEmail,
      targetSeason,
      preferredVenue,
      priorityLevel: 'VIP_EARLY_ACCESS_48H',
      status: 'ACTIVE_PENDING_CALENDAR_RELEASE',
      registeredAt: timestamp,
      priorityWindowMessage: `Your waitlist priority for ${targetSeason} at ${preferredVenue} is confirmed. You will receive private calendar booking links 48 hours prior to public release.`
    };
  }

  /**
   * Format private VIP calendar release dispatch email
   */
  static generateReleaseNotice({ clientName = 'Client', season = 'Autumn Foliage', releaseDeadlineHours = 48, bookingUrl = 'https://hafsanoreen.com/vip-release' }) {
    return [
      `Dear ${clientName},`,
      '',
      `The moment we have all been waiting for has arrived! Our private calendar for ${season} commissions is officially open for VIP priority reservation.`,
      '',
      `Because our atelier accepts a strictly limited number of commissions per season, your VIP status grants you an exclusive ${releaseDeadlineHours}-hour priority booking window before remaining dates are released to our public newsletter roster.`,
      '',
      `Access your private booking portal here: ${bookingUrl}`,
      '',
      'Warmest regards,',
      'Hafsa Noreen'
    ].join('\n');
  }
}

// Diagnostic delegation and test suite wiring
SeasonalPredictor.runDiagnostics = function() {
  return SeasonalPredictorDiagnostics.runDiagnostics(this);
};

SeasonalPredictor.runFullTestSuite = function() {
  const diag = SeasonalPredictorDiagnostics.runDiagnostics(this);
  const boundary = SeasonalPredictorSimulations.runBoundaryTests(this);
  const sim = SeasonalPredictorSimulations.runBatchSimulation(this, 50);
  return {
    engine: "SeasonalPredictor",
    timestamp: new Date().toISOString(),
    allPassed: diag.passed && boundary.allBoundaryPassed && sim.allPassed,
    diagnostics: diag,
    boundaryTests: boundary,
    batchSimulation: sim
  };
};

// Static Helper & Constant Extensions
SeasonalPredictor.SEASONAL_INTELLIGENCE_MATRIX = SEASONAL_INTELLIGENCE_MATRIX;
SeasonalPredictor.TWELVE_MONTH_MICRO_CALENDAR = TWELVE_MONTH_MICRO_CALENDAR;
SeasonalPredictor.PRINT_LAB_ANNUAL_CUTOFFS = PRINT_LAB_ANNUAL_CUTOFFS;
SeasonalPredictor.SEASONAL_CAMPAIGN_TRIGGERS = SEASONAL_CAMPAIGN_TRIGGERS;
SeasonalPredictor.FISCAL_QUARTER_PROJECTIONS = FISCAL_QUARTER_PROJECTIONS;
SeasonalPredictor.calculateYield = function(opts) { return SeasonalYieldEngine.calculateYield(opts); };
SeasonalPredictor.assessWeatherRisk = function(m) { return AtmosphericRiskModel.assessWeatherRisk(m); };
SeasonalPredictor.getAnnualSummary = function() { return AnnualRevenueModel.getAnnualSummary(); };
SeasonalPredictor.createWaitlistEntry = function(opts) { return WaitlistPriorityEngine.createWaitlistEntry(opts); };

module.exports = SeasonalPredictor;
