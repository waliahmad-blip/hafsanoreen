/**
 * ============================================================================
 * HAFFU STUDIO — SMART UPSELL & MONETIZATION INTELLIGENCE ENGINE
 * ============================================================================
 * Purpose: Real-time psychological propensity evaluation, luxury framing,
 *          dynamic bundling, Ontario 13% HST calculations, and $500 retainer
 *          date-lock alignment.
 * Studio: Hafsa Noreen Photography (Oakville / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.3.0
 * ============================================================================
 */

'use strict';

const { PACKAGES, ADDONS, DIGITAL_PRODUCTS } = require('../../../utils/constants');

// --- PART 1A: PHYSICAL PRODUCTS & CINEMATIC MOTION CATALOG ---
/**
 * HAFFU STUDIO — SMART UPSELL ENGINE
 * PART 1A: PHYSICAL HEIRLOOM PRODUCTS & CINEMATIC MOTION
 */

const PHYSICAL_AND_MOTION_CATALOG = {
  physicalProducts: [
    {
      id: 'ALBUM_12X12_FLUSH',
      sku: 'PRD-ALB-1212',
      name: '12x12 Handcrafted Flush-Mount Linen Heirloom Album',
      category: 'album',
      priceCAD: 600,
      cogsCAD: 175,
      labPartner: 'GTA Artisan Bookbinders (Toronto)',
      pagesDefault: 30,
      materials: 'European archival book linen, 300gsm Hahnemühle cotton rag, lay-flat panoramic binding',
      description: 'Handcrafted luxury heirloom album with thick flush-mounted pages designed to last generations.',
      targetSessions: ['wedding', 'family', 'maternity', 'elopement'],
      basePropensity: 85
    },
    {
      id: 'ALBUM_10X10_FLUSH',
      sku: 'PRD-ALB-1010',
      name: '10x10 Fine-Art Flush-Mount Heirloom Album',
      category: 'album',
      priceCAD: 400,
      cogsCAD: 125,
      labPartner: 'GTA Artisan Bookbinders (Toronto)',
      pagesDefault: 20,
      materials: 'Archival buckram cloth or oatmeal linen, micro-textured art paper',
      description: 'Elegant square format flush-mount album perfect for family milestones and intimate weddings.',
      targetSessions: ['family', 'maternity', 'elopement'],
      basePropensity: 78
    },
    {
      id: 'ALBUM_PARENT_DUO',
      sku: 'PRD-ALB-PAR88',
      name: 'Set of Two 8x8 Parent Companion Albums',
      category: 'album',
      priceCAD: 500,
      cogsCAD: 160,
      labPartner: 'GTA Artisan Bookbinders (Toronto)',
      pagesDefault: 20,
      materials: 'Exact replica layout of main wedding album in travel-friendly 8x8 size',
      description: 'The ultimate thank-you gift for parents, bound in matching heirloom linen.',
      targetSessions: ['wedding'],
      basePropensity: 75
    },
    {
      id: 'WALL_ART_24X36',
      sku: 'PRD-ART-2436',
      name: '24x36 Statement Archival Cotton Rag Gallery Frame',
      category: 'wall_art',
      priceCAD: 295,
      cogsCAD: 85,
      labPartner: 'Pikto Professional Lab (Toronto)',
      materials: 'Museum-grade 310gsm 100% cotton rag, solid Canadian oak frame, UV-protective glass',
      description: 'A breathtaking focal centerpiece for living rooms or master bedroom suites.',
      targetSessions: ['wedding', 'family', 'maternity'],
      basePropensity: 65
    },
    {
      id: 'WALL_ART_TRIPTYCH_16X20',
      sku: 'PRD-ART-TRIP16',
      name: 'Curated Triptych: Three Framed 16x20 Gallery Prints',
      category: 'wall_art',
      priceCAD: 420,
      cogsCAD: 120,
      labPartner: 'Pikto Professional Lab (Toronto)',
      materials: 'Three cohesive framed gallery frames designed for hallway or nursery gallery walls',
      description: 'A storytelling gallery wall set celebrating three consecutive moments.',
      targetSessions: ['family', 'maternity'],
      basePropensity: 70
    }
  ],

  motionAndVideo: [
    {
      id: 'REEL_CINEMATIC_4K',
      sku: 'MED-VID-REEL4K',
      name: 'Cinematic 60-Second 4K Vertical Highlight Reel',
      category: 'video',
      priceCAD: 400,
      cogsCAD: 60,
      productionTimeHours: 2.5,
      description: 'Breathtaking 4K vertical motion highlights shot alongside stills, set to licensed cinematic score.',
      targetSessions: ['wedding', 'family', 'maternity', 'elopement', 'branding'],
      basePropensity: 92
    },
    {
      id: 'DRONE_AERIAL_ESTABLISHING',
      sku: 'MED-VID-DRONE',
      name: 'Drone 4K Escarpment / Lakefront Aerial Vignettes',
      category: 'video',
      priceCAD: 300,
      cogsCAD: 45,
      productionTimeHours: 1.5,
      description: 'Sweeping aerial views of Niagara Escarpment or Lake Ontario integrated into highlight film.',
      targetSessions: ['wedding', 'elopement'],
      basePropensity: 68
    },
    {
      id: 'SPEECHES_DOCUMENTARY_AUDIO',
      sku: 'MED-AUD-SPEECH',
      name: 'Unedited 4K Wedding Ceremony & Speeches Documentary Audio/Video',
      category: 'video',
      priceCAD: 500,
      cogsCAD: 75,
      productionTimeHours: 3.0,
      description: 'Full unedited documentary capture of ceremony vows and reception toasts captured via wireless DJI mics.',
      targetSessions: ['wedding'],
      basePropensity: 72
    }
  ]
};

// --- PART 1B: SERVICES, RUSH DELIVERY & DIGITAL ASSETS CATALOG ---
/**
 * HAFFU STUDIO — SMART UPSELL ENGINE
 * PART 1B: PERSONNEL, RUSH DELIVERY, DIGITAL ASSETS & TIER UPGRADES
 */

const SERVICES_AND_DIGITAL_CATALOG = {
  personnelAndCoverage: [
    {
      id: 'SECOND_PHOTOGRAPHER_FULL',
      sku: 'SRV-PRS-2NDFULL',
      name: 'Curated Professional Second Associate Photographer (Full Day)',
      category: 'coverage',
      priceCAD: 600,
      cogsCAD: 350,
      description: 'Dedicated second professional artist for groom prep, cocktail mingling, and dual ceremony angles.',
      targetSessions: ['wedding'],
      basePropensity: 88
    },
    {
      id: 'OVERTIME_HOURLY',
      sku: 'SRV-COV-HOUR1',
      name: 'Additional Photographic Coverage Hour',
      category: 'coverage',
      priceCAD: 450,
      cogsCAD: 75,
      description: 'One additional hour of unhurried lead photographer coverage with 50+ additional frames.',
      targetSessions: ['wedding', 'family', 'branding'],
      basePropensity: 60
    },
    {
      id: 'REHEARSAL_DINNER_2HR',
      sku: 'SRV-EVT-REHEARSAL',
      name: '2-Hour Welcome Drinks / Rehearsal Dinner Coverage',
      category: 'coverage',
      priceCAD: 750,
      cogsCAD: 120,
      description: 'Documentary coverage of pre-wedding toasts and intimate welcome celebrations.',
      targetSessions: ['wedding'],
      basePropensity: 58
    }
  ],

  turnaroundAndSpeed: [
    {
      id: 'RUSH_5DAY_GALLERY',
      sku: 'SRV-SPD-RUSH5D',
      name: 'Rush 5-Day Full Gallery Express Delivery',
      category: 'rush',
      priceCAD: 200,
      cogsCAD: 0,
      description: 'Jump to the front of the editing queue with full gallery published within 5 business days.',
      targetSessions: ['wedding', 'family', 'maternity', 'branding'],
      basePropensity: 74
    },
    {
      id: 'SNEAK_PEEK_48HR_EXTENDED',
      sku: 'SRV-SPD-SNEAK48',
      name: 'Extended 48-Hour Sneak Peek (35 Polished Frames)',
      category: 'rush',
      priceCAD: 150,
      cogsCAD: 0,
      description: 'An expansive 35-image editorial sneak peek delivered within 48 hours for immediate sharing.',
      targetSessions: ['wedding', 'elopement'],
      basePropensity: 70
    }
  ],

  digitalAndEducation: [
    {
      id: 'PRESET_HALTON_NATURAL',
      sku: 'DIG-PRE-HALTON',
      name: 'The Halton Natural Signature Lightroom Presets',
      category: 'digital',
      priceCAD: 45,
      cogsCAD: 0,
      description: 'Hafsa signature warm film aesthetic for desktop and mobile Lightroom.',
      targetSessions: ['family', 'maternity', 'branding'],
      basePropensity: 55
    },
    {
      id: 'PRESET_MASTER_SUITE',
      sku: 'DIG-PRE-MASTER',
      name: 'The Complete Master Suite (12 Presets + Video Masterclass)',
      category: 'digital',
      priceCAD: 89,
      cogsCAD: 0,
      description: 'Full studio color grade arsenal with comprehensive video tutorial on natural light editing.',
      targetSessions: ['branding', 'general'],
      basePropensity: 50
    }
  ],

  packageUpgrades: [
    {
      fromTier: 'classic',
      toTier: 'signature',
      sessionType: 'wedding',
      name: 'Upgrade to The Signature Wedding Heirloom (10 Hours + Second Shooter + Album)',
      priceDiffCAD: 1200,
      addedValueCAD: 1800,
      keyBenefits: ['+2 Hours Coverage (10h Total)', 'Curated Second Professional Photographer included', '12x12 Linen Heirloom Album ($600 value) included', 'Complimentary 90-min Engagement Session']
    },
    {
      fromTier: 'elopement',
      toTier: 'classic',
      sessionType: 'wedding',
      name: 'Upgrade to The Classic Wedding Heirloom (8 Hours Coverage)',
      priceDiffCAD: 1750,
      addedValueCAD: 2200,
      keyBenefits: ['+4 Hours Coverage (8h Total)', 'Full reception and speeches coverage', 'Complimentary Engagement Session']
    },
    {
      fromTier: 'classic_family',
      toTier: 'family_heirloom',
      sessionType: 'family',
      name: 'Upgrade to The Family & Maternity Heirloom (90 Minutes + $100 Print Credit)',
      priceDiffCAD: 200,
      addedValueCAD: 350,
      keyBenefits: ['+30 Minutes unhurried storytelling (90m total)', '+25 hand-edited high-res frames (65+ total)', 'Complimentary $100 Fine-Art Print Credit', 'Full Client Closet access']
    }
  ]
};

// --- PART 2: CONTEXT EVALUATION & ALGORITHMIC PROPENSITY SCORING ---
/**
 * HAFFU STUDIO — SMART UPSELL ENGINE
 * PART 2: CONTEXT EVALUATION & ALGORITHMIC PROPENSITY SCORING
 */

class PropensityEvaluator {
  /**
   * Calculate tailored propensity score (0 - 100) for a given add-on or upgrade
   * based on inquiry attributes, budget elasticity, and contextual signals.
   */
  static evaluateScore(item, context = {}) {
    let score = item.basePropensity || 50;
    const {
      sessionType = 'general',
      clientBudget = 0,
      currentPackagePrice = 0,
      guestCount = 0,
      hasToddlers = false,
      hasGrandparents = false,
      locationType = 'outdoor',
      urgencySignal = false,
      priorSessionsCount = 0
    } = context;

    // 1. Budget Elasticity Modifier
    if (clientBudget > 0 && currentPackagePrice > 0) {
      const budgetSurplus = clientBudget - currentPackagePrice;
      if (budgetSurplus >= item.priceCAD) {
        score += 15; // Client has remaining stated budget headroom
      } else if (budgetSurplus < 0) {
        score -= 20; // Client is already at or above budget ceiling
      }
    }

    // 2. Wedding Guest Count Modifiers
    if (sessionType === 'wedding') {
      if (item.category === 'coverage' && item.id.includes('SECOND_PHOTOGRAPHER')) {
        if (guestCount >= 100) score += 30;
        else if (guestCount >= 75) score += 15;
        else if (guestCount < 40) score -= 25;
      }

      if (item.id === 'SPEECHES_DOCUMENTARY_AUDIO' && guestCount >= 80) {
        score += 18;
      }
    }

    // 3. Family Generational Composition Modifiers
    if (['family', 'maternity', 'wedding'].includes(sessionType)) {
      if (hasGrandparents) {
        if (item.category === 'album' || item.id === 'ALBUM_PARENT_DUO') score += 25;
        if (item.category === 'wall_art') score += 15;
      }
      if (hasToddlers) {
        if (item.id === 'RUSH_5DAY_GALLERY') score += 12; // Eager parents
        if (item.id === 'REEL_CINEMATIC_4K') score += 20; // Movement & laughter
      }
    }

    // 4. Topography & Scenic Modifiers
    if (locationType === 'escarpment' || locationType === 'lakefront') {
      if (item.id === 'REEL_CINEMATIC_4K' || item.id === 'DRONE_AERIAL_ESTABLISHING') {
        score += 22; // Wind, open sky, veil flowing
      }
    }

    // 5. Urgency & Holiday Timing Modifiers
    if (urgencySignal && item.category === 'rush') {
      score += 35;
    }

    // 6. Loyal Client Affinity Modifier
    if (priorSessionsCount > 0) {
      if (item.category === 'album' || item.category === 'wall_art') {
        score += 18; // Repeat clients value tactile physical prints
      }
    }

    // Normalize score strictly between 5 and 99
    return Math.max(5, Math.min(99, Math.round(score)));
  }

  /**
   * Sort and filter recommendations based on propensity and session eligibility
   */
  static rankOffers(catalogItems, context = {}) {
    const sessionType = context.sessionType || 'general';

    return catalogItems
      .filter(item => {
        // Exclude items client already has
        if (context.hasReel && item.category === 'video') return false;
        if (context.hasAlbum && item.category === 'album') return false;
        if (context.hasSecondShooter && item.id.includes('SECOND_PHOTOGRAPHER')) return false;

        // Ensure session compatibility
        if (item.targetSessions && !item.targetSessions.includes(sessionType)) {
          return false;
        }
        return true;
      })
      .map(item => {
        const score = this.evaluateScore(item, context);
        return {
          ...item,
          propensityScore: score,
          fitTier: score >= 85 ? 'HIGH_AFFINITY' : score >= 70 ? 'STRONG_MATCH' : 'CONSIDERATION'
        };
      })
      .sort((a, b) => b.propensityScore - a.propensityScore);
  }
}

// --- PART 3A: PSYCHOLOGICAL FRAMING & LUXURY SCRIPTS ---
/**
 * HAFFU STUDIO — SMART UPSELL ENGINE
 * PART 3: PSYCHOLOGICAL FRAMING & LUXURY CONVERSATIONAL SCRIPTS
 */

const UPSELL_SCRIPTS = {
  REEL_CINEMATIC_4K: {
    hook: "If you love movement and raw emotion, there is something truly magical we can add to your collection.",
    sensoryAnchor: "Between still photographs, Hafsa captures subtle vertical 4K motion vignettes — the wind lifting your veil, a tear being gently wiped away, your toddler erupting in laughter against the setting sun. We weave them into a 60-second cinematic film set to licensed acoustic music.",
    financialFraming: "At $400 CAD, it is less than 10% of your total celebration investment, yet it becomes the single most shared keepsake on your phone.",
    softCTA: "Shall we weave the 4K Cinematic Reel into your date reservation?",
    objectionDefense: "Unlike traditional videography teams that bring heavy rigs and distract from intimacy, Hafsa captures motion seamlessly on her primary camera body without adding extra equipment or distraction."
  },

  ALBUM_12X12_FLUSH: {
    hook: "Your memories deserve an enduring physical home rather than living trapped behind a glass screen.",
    sensoryAnchor: "Our flush-mount albums are custom-crafted by master bookbinders in Toronto. Printed on archival 300gsm Hahnemühle cotton rag and bound in European linen, each thick panoramic spread lies completely flat. Fifty years from now, your children and grandchildren will hold this day in their hands.",
    financialFraming: "A handcrafted relic designed to outlive digital formats, available for $600 CAD.",
    softCTA: "Would you like us to reserve a handcrafted album in your heirloom collection?",
    objectionDefense: "You receive complete digital files regardless, but studies show over 80% of couples never get around to printing an album on their own after the wedding. Having Hafsa curate and design your album guarantees an artistic masterpiece delivered right to your doorstep."
  },

  ALBUM_PARENT_DUO: {
    hook: "A deeply touching way to honor the parents who helped you arrive at this milestone.",
    sensoryAnchor: "We craft two matching 8x8 flush-mount companion albums bound in identical heirloom linen. They feature the complete story of your wedding day, perfectly sized for their coffee table.",
    financialFraming: "At $500 CAD for both duplicate albums, it solves both family thank-you gifts with unforgettable elegance.",
    softCTA: "Would you like us to prepare companion albums for both sets of parents?",
    objectionDefense: "Parents often cherish photographs even more deeply than anyone else. Presenting them with their own luxury volume is an emotional moment they talk about for decades."
  },

  SECOND_PHOTOGRAPHER_FULL: {
    hook: "For celebrations with over 80 guests, a second professional perspective transforms your story.",
    sensoryAnchor: "While Hafsa is locked onto your eyes and breath as you walk down the aisle, our second artist captures your groom's chin trembling and your mother wiping away tears. It ensures cocktail mingling candids are captured simultaneously without pulling Hafsa away from your private sunset portraits.",
    financialFraming: "Full-day dedicated second coverage is $600 CAD, ensuring zero blind spots across your entire celebration.",
    softCTA: "Shall we include a second professional artist on your creative team?",
    objectionDefense: "Our second photographers are hand-selected artists who shoot on matching full-frame Sony systems and G Master glass to guarantee complete visual continuity."
  },

  RUSH_5DAY_GALLERY: {
    hook: "For when the post-celebration anticipation is simply too intense to wait.",
    sensoryAnchor: "While standard artisan turnaround is 10 to 14 days, Rush Delivery moves your session to the absolute front of Hafsa editing queue. You will receive your complete, hand-graded online gallery within 5 business days.",
    financialFraming: "An express studio priority investment of $200 CAD.",
    softCTA: "Would you like to lock in 5-Day Rush Delivery for your gallery?",
    objectionDefense: "Hafsa never rushes the quality of the color grade or retouching; rush delivery simply dedicates consecutive editing blocks immediately following your shoot date."
  },

  PACKAGE_UPGRADE_SIGNATURE: {
    hook: "You might find that our Signature Collection gives you complete peace of mind with significant bundled savings.",
    sensoryAnchor: "Upgrading from Classic to Signature extends your coverage to 10 unhurried hours, includes a curated second professional photographer for the full day, and includes our 12x12 Handcrafted Linen Album ($600 value) alongside an engagement session.",
    financialFraming: "The difference is $1,200 CAD, but includes over $1,800 CAD in standalone value.",
    softCTA: "Would you like to step into the Signature Heirloom Collection for your wedding day?",
    objectionDefense: "Having 10 hours eliminates all schedule stress. You will never have to worry about running behind during bridal hair and makeup or rushing speeches before coverage ends."
  }
};

// --- PART 3B: OBJECTION COUNTER-FRAMING REBUTTALS ---
/**
 * HAFFU STUDIO — SMART UPSELL ENGINE
 * PART 3B: SPECIFIC UPSELL OBJECTION REBUTTALS & COUNTER-FRAMING
 */

const UPSELL_OBJECTION_HANDLERS = {
  ALBUM_PRICE_RESISTANCE: {
    clientPushback: "That's a lot of money for a photo book. Can't we just make our own on Shutterfly?",
    psychology: "Client perceives commercial consumer press-printed books as equivalent to artisan flush-mount lab binding.",
    counterScript: "We completely understand why that comparison comes to mind! Consumer photo books use thin 100gsm text paper where images are printed using cheap dot-matrix inks that begin fading and yellowing within 5 to 7 years. Our heirloom albums are custom-crafted by master bookbinders right in Toronto using archival 300gsm Hahnemühle cotton rag. The images are true silver-halide prints flush-mounted directly onto rigid archival substrate with lay-flat panoramic binding. The European cover linen is moisture and UV-resistant. It is the difference between a magazine and an enduring fine-art gallery relic that your grandchildren will hold fifty years from now."
  },

  REEL_REDUNDANCY_CONCERN: {
    clientPushback: "We already have guests taking videos on their phones. Why do we need a professional reel?",
    psychology: "Client worries about paying for something that might look like casual phone footage.",
    counterScript: "Guest phone clips are wonderful for chaotic, fun snapshots! However, Hafsa captures motion vignettes through cinema-grade Sony full-frame G Master prime lenses (like our 50mm f/1.2 wide open). This creates creamy, dimensional optical background separation that no mobile phone sensor can physically replicate. Combined with 4K 120fps slow-motion capture, professional color grading matching your still gallery, and licensed atmospheric soundtracks, the reel feels like an authentic European cinematic film rather than vertical social noise."
  },

  SECOND_SHOOTER_BUDGET_SCRUTINY: {
    clientPushback: "Can't Hafsa just shoot both of us getting ready by moving quickly between locations?",
    psychology: "Client underestimates GTA traffic and the physical impossibility of being in two places at once.",
    counterScript: "Hafsa is remarkably efficient, but if the bride is getting ready in Oakville and the groom is in Burlington or Mississauga, driving between locations consumes 45 to 60 minutes of prime shooting time during rush hours. With a second professional artist, the groom's preparation and groomsmen camaraderie are captured unhurriedly at the exact same moment Hafsa is capturing your veil placement and mother's tears. More importantly, during the ceremony aisle walk, it guarantees simultaneous dual angles without anyone having to run down the aisle."
  },

  RUSH_DELIVERY_SKEPTICISM: {
    clientPushback: "Does rush delivery mean the editing is rushed or sloppy?",
    psychology: "Fear of compromised artistic quality.",
    counterScript: "Never! Hafsa artistic standard is uncompromising. Rush delivery simply reserves dedicated, uninterrupted editing blocks for your gallery immediately following your session date, prioritizing your files ahead of the general queue. Every single photograph undergoes the exact same multi-step color science, tone curve adjustment, and gentle skin retouching."
  }
};

// --- PART 4A: CURATED SUITES, BUNDLE ECONOMICS & ONTARIO 13% HST ---
/**
 * HAFFU STUDIO — SMART UPSELL ENGINE
 * PART 4: CURATED SUITES, BUNDLE ECONOMICS & ONTARIO 13% HST ACCOUNTING
 */

const CURATED_BUNDLES = [
  {
    id: 'BUNDLE_LEGACY_HEIRLOOM',
    name: 'The Complete Legacy Keepsake Suite',
    targetSessions: ['wedding'],
    items: ['ALBUM_12X12_FLUSH', 'ALBUM_PARENT_DUO', 'REEL_CINEMATIC_4K'],
    individualPriceTotalCAD: 1500, // 600 + 500 + 400
    bundledPriceCAD: 1275, // 15% Savings
    savingsCAD: 225,
    cogsTotalCAD: 395,
    grossMarginPercent: '69.0%',
    description: 'The definitive physical and cinematic legacy collection: 12x12 Album, two matching Parent Albums, and 4K Highlight Reel.'
  },
  {
    id: 'BUNDLE_CINEMA_AND_STORY',
    name: 'The Motion & Storyteller Suite',
    targetSessions: ['wedding', 'elopement'],
    items: ['REEL_CINEMATIC_4K', 'DRONE_AERIAL_ESTABLISHING', 'RUSH_5DAY_GALLERY'],
    individualPriceTotalCAD: 900, // 400 + 300 + 200
    bundledPriceCAD: 765, // 15% Savings
    savingsCAD: 135,
    cogsTotalCAD: 105,
    grossMarginPercent: '86.3%',
    description: 'Breathtaking 4K vertical highlight film, sweeping drone aerials, and expedited 5-day gallery delivery.'
  },
  {
    id: 'BUNDLE_FAMILY_WALL_AND_ALBUM',
    name: 'The Family Archive Suite',
    targetSessions: ['family', 'maternity'],
    items: ['ALBUM_10X10_FLUSH', 'WALL_ART_24X36', 'REEL_CINEMATIC_4K'],
    individualPriceTotalCAD: 1095, // 400 + 295 + 400
    bundledPriceCAD: 930, // 15% Savings
    savingsCAD: 165,
    cogsTotalCAD: 270,
    grossMarginPercent: '71.0%',
    description: 'A handcrafted 10x10 linen album, a statement 24x36 gallery wall piece, and a 60-second family movement reel.'
  }
];

class BundleCalculator {
  /**
   * Calculate complete Ontario 13% HST tax and Stripe payment breakdown for an offer
   */
  static calculateFinancials(priceCAD, cogsCAD = 0) {
    const subtotal = Math.round(Number(priceCAD) * 100) / 100;
    const hst = Math.round(subtotal * 0.13 * 100) / 100;
    const grandTotal = Math.round((subtotal + hst) * 100) / 100;
    const stripeFee = Math.round((grandTotal * 0.029 + 0.30) * 100) / 100;
    const netDeposit = Math.round((grandTotal - stripeFee) * 100) / 100;
    const grossProfit = Math.round((subtotal - cogsCAD) * 100) / 100;
    const marginPercent = subtotal > 0 ? Math.round((grossProfit / subtotal) * 1000) / 10 : 0;

    return {
      subtotalCAD: subtotal,
      taxRate: '13.0% HST',
      hstCAD: hst,
      grandTotalCAD: grandTotal,
      stripeFeeCAD: stripeFee,
      netDepositCAD: netDeposit,
      cogsCAD: cogsCAD,
      grossProfitCAD: grossProfit,
      marginPercent: `${marginPercent}%`
    };
  }

  /**
   * Restructure payment schedule with $500 instant retainer date-lock
   */
  static formatPaymentMilestones(totalWithUpsellCAD, depositAmountCAD = 500) {
    const subtotal = Math.round(Number(totalWithUpsellCAD) * 100) / 100;
    const grandTotal = Math.round(subtotal * 1.13 * 100) / 100;
    const retainer = Math.min(grandTotal, depositAmountCAD);
    const balanceDue = Math.round((grandTotal - retainer) * 100) / 100;

    return {
      milestone1_Retainer: {
        amountCAD: retainer,
        timing: 'Immediate upon contract execution (locks calendar date)',
        checkoutUrl: `/checkout?type=retainer&amount=${retainer}`
      },
      milestone2_RemainingBalance: {
        amountCAD: balanceDue,
        timing: 'Due strictly 14 calendar days prior to shoot date',
        checkoutUrl: `/checkout?type=balance&amount=${balanceDue}`
      },
      grandTotalWithHST: grandTotal
    };
  }
}

// --- PART 4B: REGIONAL VENUE & SEASONAL BENCHMARKS ---
/**
 * HAFFU STUDIO — SMART UPSELL ENGINE
 * PART 4B: REGIONAL VENUE & SEASONAL CONVERSION BENCHMARKS
 */

const REGIONAL_UPSELL_BENCHMARKS = {
  venueConversionProfiles: [
    {
      venueKey: 'GAIRLOCH_GARDENS',
      region: 'Oakville',
      topAddon: 'ALBUM_12X12_FLUSH',
      conversionRate: 0.68,
      averageUpsellValueCAD: 850,
      notes: 'High-net-worth lakefront demographic; high propensity for tangible linen albums and parent companion duplicates.'
    },
    {
      venueKey: 'KELSO_CONSERVATION',
      region: 'Milton',
      topAddon: 'REEL_CINEMATIC_4K',
      conversionRate: 0.74,
      averageUpsellValueCAD: 580,
      notes: 'Dramatic escarpment cliff sunset; couples strongly drawn to cinematic vertical motion films.'
    },
    {
      venueKey: 'RATTLESNAKE_POINT',
      region: 'Milton',
      topAddon: 'DRONE_AERIAL_ESTABLISHING',
      conversionRate: 0.62,
      averageUpsellValueCAD: 700,
      notes: 'Adventurous cliff overlooks; high demand for sweeping aerial establishing views.'
    },
    {
      venueKey: 'PALETTA_MANSION',
      region: 'Burlington',
      topAddon: 'WALL_ART_24X36',
      conversionRate: 0.58,
      averageUpsellValueCAD: 920,
      notes: 'Lakeside estate architecture; strong affinity for museum-grade framed wall portraits.'
    },
    {
      venueKey: 'MINT_ROOM_STUDIOS',
      region: 'Toronto',
      topAddon: 'RUSH_5DAY_GALLERY',
      conversionRate: 0.71,
      averageUpsellValueCAD: 450,
      notes: 'Branding and studio editorial clients; high urgency for fast social media / PR launches.'
    }
  ],

  seasonalMultiplierTable: {
    SPRING_BLOSSOMS: {
      months: ['April', 'May'],
      preferredAddons: ['REEL_CINEMATIC_4K', 'RUSH_5DAY_GALLERY'],
      multiplier: 1.15
    },
    SUMMER_PEAK: {
      months: ['June', 'July', 'August'],
      preferredAddons: ['SECOND_PHOTOGRAPHER_FULL', 'ALBUM_12X12_FLUSH'],
      multiplier: 1.25
    },
    AUTUMN_FOLIAGE: {
      months: ['September', 'October'],
      preferredAddons: ['WALL_ART_24X36', 'ALBUM_10X10_FLUSH', 'REEL_CINEMATIC_4K'],
      multiplier: 1.30
    },
    WINTER_STUDIO: {
      months: ['November', 'December', 'January', 'February', 'March'],
      preferredAddons: ['RUSH_5DAY_GALLERY', 'ALBUM_PARENT_DUO'],
      multiplier: 1.10
    }
  }
};

// --- PART 5A: CORE ENGINE & DIAGNOSTICS SUITE ---
/**
 * HAFFU STUDIO — SMART UPSELL ENGINE
 * PART 5: CORE ENGINE CLASS, STATIC EXECUTION & BUILT-IN DIAGNOSTICS SUITE
 */

class SmartUpsellEngine {
  /**
   * Primary entry point invoked by Haffu tool dispatcher
   */
  static async execute(params = {}) {
    const sessionType = params.sessionType || 'wedding';
    const clientBudget = Number(params.clientBudget || 0);
    const hasReel = Boolean(params.hasReel);
    const hasAlbum = Boolean(params.hasAlbum);
    const hasSecondShooter = Boolean(params.hasSecondShooter);

    // Combine all catalog items
    const allAddons = [
      ...PHYSICAL_AND_MOTION_CATALOG.physicalProducts,
      ...PHYSICAL_AND_MOTION_CATALOG.motionAndVideo,
      ...SERVICES_AND_DIGITAL_CATALOG.personnelAndCoverage,
      ...SERVICES_AND_DIGITAL_CATALOG.turnaroundAndSpeed,
      ...SERVICES_AND_DIGITAL_CATALOG.digitalAndEducation
    ];

    // Rank individual add-ons
    const rankedOffers = PropensityEvaluator.rankOffers(allAddons, {
      ...params,
      sessionType,
      clientBudget,
      hasReel,
      hasAlbum,
      hasSecondShooter
    });

    // Check relevant package upgrade
    let packageUpgradeRecommendation = null;
    const upgradeCandidates = SERVICES_AND_DIGITAL_CATALOG.packageUpgrades.filter(u => u.sessionType === sessionType);
    if (upgradeCandidates.length > 0 && params.currentPackage) {
      const match = upgradeCandidates.find(u => u.fromTier.toLowerCase() === params.currentPackage.toLowerCase());
      if (match) {
        packageUpgradeRecommendation = {
          ...match,
          financials: BundleCalculator.calculateFinancials(match.priceDiffCAD),
          script: UPSELL_SCRIPTS.PACKAGE_UPGRADE_SIGNATURE || null
        };
      }
    }

    // Top recommended individual add-ons (top 3)
    const topAddons = rankedOffers.slice(0, 3).map(offer => {
      const script = UPSELL_SCRIPTS[offer.id] || null;
      const financials = BundleCalculator.calculateFinancials(offer.priceCAD, offer.cogsCAD);
      return {
        id: offer.id,
        name: offer.name,
        priceCAD: offer.priceCAD,
        propensityScore: offer.propensityScore,
        fitTier: offer.fitTier,
        financials,
        conversationalPitch: script ? `${script.hook} ${script.sensoryAnchor} ${script.financialFraming}` : offer.description,
        callToAction: script ? script.softCTA : 'Would you like to include this in your collection?'
      };
    });

    // Curated Bundle Match
    const eligibleBundles = CURATED_BUNDLES.filter(b => b.targetSessions.includes(sessionType));
    const featuredBundle = eligibleBundles.length > 0 ? {
      ...eligibleBundles[0],
      financials: BundleCalculator.calculateFinancials(eligibleBundles[0].bundledPriceCAD, eligibleBundles[0].cogsTotalCAD)
    } : null;

    return {
      status: 'success',
      sessionType,
      recommendedOffersCount: topAddons.length,
      primaryRecommendation: topAddons[0] || null,
      secondaryRecommendations: topAddons.slice(1),
      packageUpgrade: packageUpgradeRecommendation,
      featuredBundle,
      depositRecommendation: {
        amountCAD: 500,
        currency: 'CAD',
        description: 'Instant flat $500 retainer locks in calendar exclusivity and all selected upgrades.',
        checkoutUrl: '/checkout?type=retainer&amount=500'
      }
    };
  }

  /**
   * Run comprehensive self-diagnostics suite
   */
  static runSelfDiagnostics() {
    const testResults = [];

    // Test 1: Wedding with 120 guests
    const t1Rank = PropensityEvaluator.evaluateScore({
      id: 'SECOND_PHOTOGRAPHER_FULL',
      category: 'coverage',
      basePropensity: 88,
      priceCAD: 600
    }, { sessionType: 'wedding', guestCount: 120 });
    testResults.push({
      test: 'Second Photographer Propensity on 120-Guest Wedding',
      passed: t1Rank >= 95,
      actual: t1Rank
    });

    // Test 2: HST Financial Calculator
    const t2Finance = BundleCalculator.calculateFinancials(600, 175);
    testResults.push({
      test: 'HST & Financial Breakdown for $600 Album (COGS $175)',
      passed: t2Finance.hstCAD === 78 && t2Finance.grandTotalCAD === 678 && t2Finance.grossProfitCAD === 425,
      actual: t2Finance
    });

    // Test 3: Curated Bundle Savings
    const bundle = CURATED_BUNDLES[0];
    testResults.push({
      test: 'Legacy Heirloom Bundle Savings Match $225 (15%)',
      passed: bundle.savingsCAD === 225 && bundle.bundledPriceCAD === 1275
    });

    // Test 4: Milestones with $500 date-lock
    const milestones = BundleCalculator.formatPaymentMilestones(4800, 500);
    testResults.push({
      test: 'Milestone 1 Retainer is $500 & Milestone 2 Remaining is Correct',
      passed: milestones.milestone1_Retainer.amountCAD === 500 && milestones.grandTotalWithHST === 5424,
      actual: milestones
    });

    const allPassed = testResults.every(t => t.passed);
    return {
      engine: 'SmartUpsellEngine',
      totalTests: testResults.length,
      allPassed,
      tests: testResults
    };
  }
}

// --- PART 5B: EXTENDED BOUNDARY TEST SUITE ---
/**
 * HAFFU STUDIO — SMART UPSELL ENGINE
 * PART 5B: EXTENDED DIAGNOSTICS & BOUNDARY TEST SUITE
 */

class ExtendedUpsellDiagnostics {
  static runBoundaryTests() {
    const boundaryResults = [];

    // Test 1: Empty context handling
    try {
      const nullScore = PropensityEvaluator.evaluateScore({ id: 'TEST', basePropensity: 50 }, {});
      boundaryResults.push({
        test: 'Empty context evaluates safely to base score',
        passed: nullScore === 50,
        score: nullScore
      });
    } catch (err) {
      boundaryResults.push({ test: 'Empty context evaluates safely', passed: false, error: err.message });
    }

    // Test 2: Extreme guest count
    const extremeGuestScore = PropensityEvaluator.evaluateScore({
      id: 'SECOND_PHOTOGRAPHER_FULL',
      category: 'coverage',
      basePropensity: 88,
      priceCAD: 600
    }, { sessionType: 'wedding', guestCount: 500 });
    boundaryResults.push({
      test: 'Extreme guest count caps score at 99',
      passed: extremeGuestScore === 99,
      score: extremeGuestScore
    });

    // Test 3: Zero or negative budget elasticity
    const negBudgetScore = PropensityEvaluator.evaluateScore({
      id: 'ALBUM_12X12_FLUSH',
      basePropensity: 85,
      priceCAD: 600
    }, { clientBudget: 2000, currentPackagePrice: 3600 });
    boundaryResults.push({
      test: 'Negative budget reduces propensity score without throwing',
      passed: negBudgetScore < 85 && negBudgetScore >= 5,
      score: negBudgetScore
    });

    // Test 4: All curated bundles have valid financial margins > 60%
    const allBundlesProfitable = CURATED_BUNDLES.every(b => {
      const f = BundleCalculator.calculateFinancials(b.bundledPriceCAD, b.cogsTotalCAD);
      const marginNum = parseFloat(f.marginPercent);
      return marginNum >= 60.0;
    });
    boundaryResults.push({
      test: 'All Curated Bundles meet > 60% gross profit margin requirement',
      passed: allBundlesProfitable
    });

    // Test 5: Exact HST precision across odd numbers
    const oddTax = BundleCalculator.calculateFinancials(333.33, 50);
    boundaryResults.push({
      test: 'HST precision handles cents accurately',
      passed: oddTax.hstCAD === 43.33 && oddTax.grandTotalCAD === 376.66
    });

    return {
      totalBoundaryTests: boundaryResults.length,
      allBoundaryPassed: boundaryResults.every(t => t.passed),
      results: boundaryResults
    };
  }
}

// --- PART 6: CHECKOUT QUOTE SIMULATOR MATRIX ---
/**
 * HAFFU STUDIO — SMART UPSELL ENGINE
 * PART 6: INTERACTIVE CHECKOUT QUOTE SIMULATOR & CLIENT PROJECTION MATRIX
 */

class CheckoutQuoteSimulator {
  /**
   * Generates a complete end-to-end simulation of client proposals with
   * combinations of base packages, selected add-ons, and dynamic bundles.
   */
  static simulateAllScenarios() {
    const scenarios = [
      {
        scenarioId: 'SIM-01',
        name: 'Luxury Wedding (Signature Collection + Drone + Parent Albums)',
        sessionType: 'wedding',
        basePriceCAD: 4800,
        addons: ['DRONE_AERIAL_ESTABLISHING', 'ALBUM_PARENT_DUO'],
        clientProfile: { guestCount: 150, locationType: 'escarpment' }
      },
      {
        scenarioId: 'SIM-02',
        name: 'Classic Wedding + 4K Vertical Reel + 5-Day Rush Delivery',
        sessionType: 'wedding',
        basePriceCAD: 3600,
        addons: ['REEL_CINEMATIC_4K', 'RUSH_5DAY_GALLERY'],
        clientProfile: { guestCount: 90, urgencySignal: true }
      },
      {
        scenarioId: 'SIM-03',
        name: 'Intimate Escarpment Elopement + Complete Motion & Story Suite',
        sessionType: 'elopement',
        basePriceCAD: 1850,
        bundleId: 'BUNDLE_CINEMA_AND_STORY',
        clientProfile: { guestCount: 15, locationType: 'escarpment' }
      },
      {
        scenarioId: 'SIM-04',
        name: 'Signature Family & Maternity Heirloom + 10x10 Album + 24x36 Wall Art',
        sessionType: 'family',
        basePriceCAD: 850,
        addons: ['ALBUM_10X10_FLUSH', 'WALL_ART_24X36'],
        clientProfile: { hasToddlers: true, locationType: 'lakefront' }
      },
      {
        scenarioId: 'SIM-05',
        name: 'Multi-Generational Golden Hour + Triptych Wall Art + Parent Album Set',
        sessionType: 'family',
        basePriceCAD: 850,
        addons: ['WALL_ART_TRIPTYCH_16X20', 'ALBUM_PARENT_DUO'],
        clientProfile: { hasGrandparents: true, hasToddlers: true }
      },
      {
        scenarioId: 'SIM-06',
        name: 'Classic 60-Minute Family Sunset + Halton Natural Presets + Rush 5-Day',
        sessionType: 'family',
        basePriceCAD: 650,
        addons: ['PRESET_HALTON_NATURAL', 'RUSH_5DAY_GALLERY'],
        clientProfile: { urgencySignal: true }
      },
      {
        scenarioId: 'SIM-07',
        name: 'Editorial Studio Branding + 4K Reel + Complete Master Preset Suite',
        sessionType: 'branding',
        basePriceCAD: 750,
        addons: ['REEL_CINEMATIC_4K', 'PRESET_MASTER_SUITE'],
        clientProfile: { locationType: 'studio' }
      },
      {
        scenarioId: 'SIM-08',
        name: 'High-End Wedding Upgrade (Classic to Signature) + Speeches Documentary Video',
        sessionType: 'wedding',
        basePriceCAD: 3600,
        upgradeToTier: 'signature',
        addons: ['SPEECHES_DOCUMENTARY_AUDIO'],
        clientProfile: { guestCount: 180 }
      }
    ];

    const results = scenarios.map(sc => {
      let addonSubtotal = 0;
      let addonCOGS = 0;

      // Flatten catalog for lookup
      const allItems = [
        ...PHYSICAL_AND_MOTION_CATALOG.physicalProducts,
        ...PHYSICAL_AND_MOTION_CATALOG.motionAndVideo,
        ...SERVICES_AND_DIGITAL_CATALOG.personnelAndCoverage,
        ...SERVICES_AND_DIGITAL_CATALOG.turnaroundAndSpeed,
        ...SERVICES_AND_DIGITAL_CATALOG.digitalAndEducation
      ];

      if (sc.bundleId) {
        const bundle = CURATED_BUNDLES.find(b => b.id === sc.bundleId);
        if (bundle) {
          addonSubtotal += bundle.bundledPriceCAD;
          addonCOGS += bundle.cogsTotalCAD;
        }
      }

      if (sc.addons && sc.addons.length > 0) {
        for (const addonId of sc.addons) {
          const item = allItems.find(i => i.id === addonId);
          if (item) {
            addonSubtotal += item.priceCAD;
            addonCOGS += item.cogsCAD;
          }
        }
      }

      const totalPreTax = sc.basePriceCAD + addonSubtotal;
      const taxCalc = BundleCalculator.calculateFinancials(totalPreTax, addonCOGS);
      const milestones = BundleCalculator.formatPaymentMilestones(totalPreTax, 500);

      return {
        scenarioId: sc.scenarioId,
        name: sc.name,
        basePriceCAD: sc.basePriceCAD,
        upsellSubtotalCAD: addonSubtotal,
        totalPreTaxCAD: totalPreTax,
        hstCAD: taxCalc.hstCAD,
        grandTotalCAD: taxCalc.grandTotalCAD,
        grossMargin: taxCalc.marginPercent,
        depositAmountCAD: milestones.milestone1_Retainer.amountCAD,
        balanceDueCAD: milestones.milestone2_RemainingBalance.amountCAD
      };
    });

    return results;
  }
}

SmartUpsellEngine.CheckoutQuoteSimulator = CheckoutQuoteSimulator;
SmartUpsellEngine.simulateQuotes = function() {
  return CheckoutQuoteSimulator.simulateAllScenarios();
};

// Additional Static Utilities on SmartUpsellEngine
SmartUpsellEngine.getRebuttal = function(objectionKey) {
  return UPSELL_OBJECTION_HANDLERS[objectionKey] || null;
};

SmartUpsellEngine.getVenueBenchmark = function(venueKey) {
  return REGIONAL_UPSELL_BENCHMARKS.venueConversionProfiles.find(v => v.venueKey === venueKey) || null;
};

SmartUpsellEngine.getSeasonalMultiplier = function(seasonKey) {
  return REGIONAL_UPSELL_BENCHMARKS.seasonalMultiplierTable[seasonKey] || null;
};

SmartUpsellEngine.runFullTestSuite = function() {
  const diag = SmartUpsellEngine.runSelfDiagnostics();
  const bound = ExtendedUpsellDiagnostics.runBoundaryTests();
  return {
    engine: "SmartUpsellEngine",
    timestamp: new Date().toISOString(),
    allPassed: diag.allPassed && bound.allBoundaryPassed,
    diagnostics: diag,
    boundaryTests: bound
  };
};

// Compatibility Export Layer (Supports both Class & Static call styles)
SmartUpsellEngine.SmartUpsell = SmartUpsellEngine;
SmartUpsellEngine.UPSELL_CATALOG = { ...PHYSICAL_AND_MOTION_CATALOG, ...SERVICES_AND_DIGITAL_CATALOG };
SmartUpsellEngine.CURATED_BUNDLES = CURATED_BUNDLES;
SmartUpsellEngine.PropensityEvaluator = PropensityEvaluator;
SmartUpsellEngine.BundleCalculator = BundleCalculator;
SmartUpsellEngine.UPSELL_SCRIPTS = UPSELL_SCRIPTS;
SmartUpsellEngine.UPSELL_OBJECTION_HANDLERS = UPSELL_OBJECTION_HANDLERS;
SmartUpsellEngine.REGIONAL_UPSELL_BENCHMARKS = REGIONAL_UPSELL_BENCHMARKS;

module.exports = SmartUpsellEngine;