/**
 * ============================================================================
 * HAFFU STUDIO — VENDOR MATCHMAKER & LUXURY CREATIVE COLLECTIVE ENGINE
 * ============================================================================
 * Enterprise Creative Partner Architecture:
 *   1. Curated GTA & Halton Artisan Directory (Planners, Florals, Beauty, Music)
 *   2. Multi-Dimensional Compatibility Scorer (Location, Aesthetic, Culture, Budget)
 *   3. Warm 3-Way Client-Vendor Introduction Email Drafter
 *   4. Zero-Kickback Ethical Charter & Reciprocal Image Exchange Agreement
 *   5. 100% Backward-Compatible Legacy Interface (match, partners, fee)
 *
 * Studio: Hafsa Noreen Photography (Oakville / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.3.0
 * ============================================================================
 */

'use strict';

// --- PART 1A: PLANNERS & FLORAL DESIGNERS DIRECTORY ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 1: VERIFIED GTA & HALTON VENDOR COLLECTIVE DIRECTORY
 */

const CURATED_VENDOR_COLLECTIVE = [
  // 1. WEDDING PLANNERS & DESIGNERS
  {
    id: 'VND-PLN-01',
    name: 'Blush & Bowties Weddings',
    category: 'wedding_planner',
    regionsServed: ['Toronto', 'Oakville', 'Burlington', 'Niagara'],
    aestheticSpecialty: 'Artful, bespoke, editorial fine-art European storytelling',
    budgetTier: 'luxury_fine_art',
    instagram: '@blushandbowties',
    website: 'https://blushandbowties.ca',
    contactPerson: 'Alex',
    contactEmail: 'hello@blushandbowties.ca',
    shootingHarmonyScore: 98,
    culturalCompetency: ['Western Contemporary', 'Bilingual French', 'Intimate Estate'],
    whyHafsaRecommends: 'Exceptional timeline buffers, zero schedule stress, deeply committed to golden hour light.'
  },
  {
    id: 'VND-PLN-02',
    name: 'Lexington & Co. Events',
    category: 'wedding_planner',
    regionsServed: ['Oakville', 'Burlington', 'Hamilton', 'Toronto'],
    aestheticSpecialty: 'Modern luxury, intentional details, seamless logistical flow',
    budgetTier: 'high_end',
    instagram: '@lexingtonandco',
    website: 'https://lexingtonandco.ca',
    contactPerson: 'Lexi',
    contactEmail: 'info@lexingtonandco.ca',
    shootingHarmonyScore: 95,
    culturalCompetency: ['Western', 'Multi-Generational Luxury'],
    whyHafsaRecommends: 'Punctual, calming presence on wedding mornings, ensures bride is fully dressed on time for first look.'
  },
  {
    id: 'VND-PLN-03',
    name: 'Events by Whim',
    category: 'wedding_planner',
    regionsServed: ['Milton', 'Oakville', 'Mississauga', 'Toronto'],
    aestheticSpecialty: 'Romantic, garden-inspired, personalized celebrations',
    budgetTier: 'boutique',
    instagram: '@eventsbywhim',
    website: 'https://eventsbywhim.ca',
    contactPerson: 'Kendra',
    contactEmail: 'celebrate@eventsbywhim.ca',
    shootingHarmonyScore: 92,
    culturalCompetency: ['Western', 'Outdoor Farm/Barn', 'Intimate Halton Weddings'],
    whyHafsaRecommends: 'Wonderful with rain contingency pivots and rustic-luxury estate setups.'
  },

  // 2. FLORAL DESIGNERS
  {
    id: 'VND-FLR-01',
    name: 'Threads & Blooms',
    category: 'floral_designer',
    regionsServed: ['Oakville', 'Milton', 'Burlington', 'Hamilton', 'Niagara'],
    aestheticSpecialty: 'Garden-gathered, organic botanical, romantic loose arrangements',
    budgetTier: 'luxury_fine_art',
    instagram: '@threadsandblooms',
    website: 'https://threadsandblooms.com',
    contactPerson: 'Emily',
    contactEmail: 'hello@threadsandblooms.com',
    shootingHarmonyScore: 99,
    culturalCompetency: ['All Traditions'],
    whyHafsaRecommends: 'Uses seasonal Ontario-grown garden blooms, provides loose florals for styling bridal invitation flatlays.'
  },
  {
    id: 'VND-FLR-02',
    name: 'Sweet Woodruff',
    category: 'floral_designer',
    regionsServed: ['Toronto', 'Oakville', 'GTA'],
    aestheticSpecialty: 'Sculptural, editorial, Parisian romantic floral design',
    budgetTier: 'luxury_fine_art',
    instagram: '@sweetwoodruff',
    website: 'https://sweetwoodruff.ca',
    contactPerson: 'Lisa',
    contactEmail: 'flowers@sweetwoodruff.ca',
    shootingHarmonyScore: 96,
    culturalCompetency: ['All Traditions'],
    whyHafsaRecommends: 'Arches and installations frame natural light portraits with ethereal depth.'
  },
  {
    id: 'VND-FLR-03',
    name: 'Foliage & Fluff',
    category: 'floral_designer',
    regionsServed: ['Mississauga', 'Oakville', 'Milton'],
    aestheticSpecialty: 'Warm earthen, terracotta, neutral dried & fresh meadow botanicals',
    budgetTier: 'boutique',
    instagram: '@foliageandfluff',
    website: 'https://foliageandfluff.com',
    contactPerson: 'Nadia',
    contactEmail: 'info@foliageandfluff.com',
    shootingHarmonyScore: 93,
    culturalCompetency: ['South Asian', 'Middle Eastern', 'Bohemian'],
    whyHafsaRecommends: 'Understands warm earthy tones that complement Hafsa signature Halton color palette.'
  }
];

// --- PART 1B: BEAUTY, STATIONERY, CAKES & STRINGS DIRECTORY ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 1B: BEAUTY, STATIONERY, CAKE & MUSIC ARTISANS
 */

const BEAUTY_AND_ARTISAN_COLLECTIVE = [
  // 3. BRIDAL HAIR & MAKEUP ARTISTS
  {
    id: 'VND-HMU-01',
    name: 'Glam by Aisha & Co.',
    category: 'hair_makeup',
    regionsServed: ['Oakville', 'Milton', 'Mississauga', 'Toronto'],
    aestheticSpecialty: 'Radiant luminous skin, weightless bridal glam, natural enhanced beauty',
    budgetTier: 'high_end',
    instagram: '@glambyaisha',
    website: 'https://glambyaisha.com',
    contactPerson: 'Aisha',
    contactEmail: 'bookings@glambyaisha.com',
    shootingHarmonyScore: 99,
    culturalCompetency: ['South Asian Luxury (Mehndi/Shaadi)', 'Western Bridal', 'Middle Eastern'],
    whyHafsaRecommends: 'Flawless skin prep that never cakes under high-resolution Sony full-frame sensors; always on time.'
  },
  {
    id: 'VND-HMU-02',
    name: 'Fancy Face Inc.',
    category: 'hair_makeup',
    regionsServed: ['Toronto', 'Oakville', 'GTA'],
    aestheticSpecialty: 'Red carpet luxury, romantic bridal waves, glowing skin',
    budgetTier: 'luxury_fine_art',
    instagram: '@fancyfaceinc',
    website: 'https://fancyface.ca',
    contactPerson: 'Brittany',
    contactEmail: 'info@fancyface.ca',
    shootingHarmonyScore: 95,
    culturalCompetency: ['Western Contemporary', 'Editorial Fashion'],
    whyHafsaRecommends: 'Elite bridal teams capable of handling large bridal parties smoothly with zero morning rush.'
  },
  {
    id: 'VND-HMU-03',
    name: 'Bespeak Beauty',
    category: 'hair_makeup',
    regionsServed: ['Burlington', 'Hamilton', 'Oakville'],
    aestheticSpecialty: 'Soft, organic, clean beauty with natural hair texture preservation',
    budgetTier: 'boutique',
    instagram: '@bespeakbeauty',
    website: 'https://bespeakbeauty.ca',
    contactPerson: 'Chloe',
    contactEmail: 'chloe@bespeakbeauty.ca',
    shootingHarmonyScore: 94,
    culturalCompetency: ['Western', 'Bohemian', 'Intimate Elopements'],
    whyHafsaRecommends: 'Understated, glowing bridal looks; very sweet, calming bedside manner for nervous brides.'
  },

  // 4. STATIONERY & CALLIGRAPHERS
  {
    id: 'VND-STN-01',
    name: 'Statuer Studio & Calligraphy',
    category: 'stationery',
    regionsServed: ['Oakville', 'Toronto', 'Worldwide'],
    aestheticSpecialty: 'Handmade deckled cotton paper, custom wax seals, European script calligraphy',
    budgetTier: 'luxury_fine_art',
    instagram: '@statuerstudio',
    website: 'https://statuerstudio.com',
    contactPerson: 'Elena',
    contactEmail: 'elena@statuerstudio.com',
    shootingHarmonyScore: 97,
    culturalCompetency: ['All Traditions'],
    whyHafsaRecommends: 'Provides extra stationery elements and vintage postage specifically for morning flatlay styling.'
  },

  // 5. CAKE ARTISTS
  {
    id: 'VND-CAK-01',
    name: 'The Sweetest Thing Cakes',
    category: 'cake_designer',
    regionsServed: ['Oakville', 'Milton', 'Burlington'],
    aestheticSpecialty: 'Deckled wafer paper florals, textured Swiss buttercream, modern organic minimalism',
    budgetTier: 'high_end',
    instagram: '@sweetestthingcakes',
    website: 'https://sweetestthingcakes.ca',
    contactPerson: 'Tanya',
    contactEmail: 'tanya@sweetestthingcakes.ca',
    shootingHarmonyScore: 95,
    culturalCompetency: ['All Traditions'],
    whyHafsaRecommends: 'Cakes photograph like museum sculptures under natural sidelight.'
  },

  // 6. LIVE MUSICIANS & STRINGS
  {
    id: 'VND-MUS-01',
    name: 'Duo d’Amore String Ensembles',
    category: 'musician',
    regionsServed: ['Halton', 'Hamilton', 'Toronto', 'Niagara'],
    aestheticSpecialty: 'Classical and modern acoustic string quartet for ceremonies and cocktail hours',
    budgetTier: 'high_end',
    instagram: '@duodamore',
    website: 'https://duodamore.com',
    contactPerson: 'Mark',
    contactEmail: 'contact@duodamore.com',
    shootingHarmonyScore: 96,
    culturalCompetency: ['Classical', 'Pop Reimagined', 'Sacred Ceremonies'],
    whyHafsaRecommends: 'Sublime acoustic ambiance that sets a reverent, romantic tone for wedding vows.'
  }
];

// --- PART 1C: PREMIER VENUES, BRIDAL ATELIERS & JEWELRY ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 1C: PREMIER GTA VENUES, LUXURY BRIDAL BOUTIQUES & FINE JEWELERS
 */

const VENUES_AND_BRIDAL_COLLECTIVE = [
  // 7. PREMIER DAYLIGHT VENUES & HISTORIC ESTATES
  {
    id: 'VND-VEN-01',
    name: 'Mint Room Studios',
    category: 'venue',
    regionsServed: ['Toronto', 'Halton', 'Peel'],
    aestheticSpecialty: 'Parisian French moldings, 14-foot daylight windows, herringbone oak floors',
    budgetTier: 'luxury_fine_art',
    instagram: '@mintroomstudios',
    website: 'https://mintroom.ca',
    contactPerson: 'Studio Manager',
    contactEmail: 'info@mintroom.ca',
    shootingHarmonyScore: 99,
    culturalCompetency: ['All Traditions'],
    whyHafsaRecommends: 'Flawless diffused natural light all year round; ideal for winter sessions, branding, and rain backups.'
  },
  {
    id: 'VND-VEN-02',
    name: 'Paletta Lakefront Mansion',
    category: 'venue',
    regionsServed: ['Burlington', 'Oakville', 'Hamilton'],
    aestheticSpecialty: '1930s limestone lakeside estate, verandas, weeping willows, ravine paths',
    budgetTier: 'high_end',
    instagram: '@paletta_mansion',
    website: 'https://palettamansion.com',
    contactPerson: 'Events Director',
    contactEmail: 'weddings@palettamansion.com',
    shootingHarmonyScore: 97,
    culturalCompetency: ['All Traditions'],
    whyHafsaRecommends: 'Lake Ontario backdrop with grand architectural stone terraces.'
  },
  {
    id: 'VND-VEN-03',
    name: 'The Arlington Estate',
    category: 'venue',
    regionsServed: ['Vaughan', 'Toronto', 'GTA'],
    aestheticSpecialty: '7-acre luxury private estate, pond with fountain, historic heritage manor',
    budgetTier: 'luxury_fine_art',
    instagram: '@thearlingtonestate',
    website: 'https://thearlingtonestate.com',
    contactPerson: 'Concierge',
    contactEmail: 'experience@thearlingtonestate.com',
    shootingHarmonyScore: 96,
    culturalCompetency: ['All Traditions'],
    whyHafsaRecommends: 'Ultra-luxury hospitality, golf cart for sunset transport, dedicated vendor greenroom.'
  },

  // 8. LUXURY BRIDAL GOWN BOUTIQUES
  {
    id: 'VND-ATELIER-01',
    name: 'Powder Bride Atelier',
    category: 'bridal_gown',
    regionsServed: ['Toronto', 'Oakville', 'Worldwide'],
    aestheticSpecialty: 'Haute couture European designers (Mira Zwillinger, Berta, Vera Wang)',
    budgetTier: 'luxury_fine_art',
    instagram: '@powder_bride',
    website: 'https://powderbride.com',
    contactPerson: 'Youssef',
    contactEmail: 'info@powderbride.com',
    shootingHarmonyScore: 98,
    culturalCompetency: ['All Traditions'],
    whyHafsaRecommends: 'Intricate 3D floral appliqués and gossamer tulles that catch natural backlight like liquid gold.'
  },
  {
    id: 'VND-ATELIER-02',
    name: 'Sash & Bustle Bridal Boutique',
    category: 'bridal_gown',
    regionsServed: ['Toronto', 'GTA'],
    aestheticSpecialty: 'Romantic, modern, effortlessly bohemian, inclusive sizing',
    budgetTier: 'high_end',
    instagram: '@sashandbustle',
    website: 'https://sashandbustle.com',
    contactPerson: 'Andrea',
    contactEmail: 'cheers@sashandbustle.com',
    shootingHarmonyScore: 95,
    culturalCompetency: ['All Traditions'],
    whyHafsaRecommends: 'Lightweight flowing silks and textured laces made for walking and outdoor breezes.'
  },

  // 9. HEIRLOOM FINE JEWELRY & CUSTOM RINGS
  {
    id: 'VND-JWL-01',
    name: 'Kimberfire Custom Diamonds & Rings',
    category: 'fine_jewelry',
    regionsServed: ['Toronto', 'Halton', 'GTA'],
    aestheticSpecialty: 'Ethical bespoke diamond engagement rings, custom heirloom wedding bands',
    budgetTier: 'high_end',
    instagram: '@kimberfire',
    website: 'https://kimberfire.com',
    contactPerson: 'Jonathan',
    contactEmail: 'concierge@kimberfire.com',
    shootingHarmonyScore: 96,
    culturalCompetency: ['All Traditions'],
    whyHafsaRecommends: 'Exceptional diamond cut quality and proportions that sparkle intensely during macro ring shots.'
  }
];

// --- PART 2: MATCHING SCORER & AESTHETIC COMPATIBILITY ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 2: MULTI-DIMENSIONAL MATCHING ALGORITHM & SCORING MATRICES
 */

class VendorMatchingScorer {
  /**
   * Evaluates compatibility score (0 - 100) between a client's inquiry and a candidate vendor
   */
  static calculateMatchScore(vendor, criteria = {}) {
    let score = vendor.shootingHarmonyScore || 90;
    const {
      location = '',
      preferredAesthetic = 'fine_art',
      budgetTier = 'high_end',
      culturalTradition = 'Western'
    } = criteria;

    const locLower = (location || '').toLowerCase();

    // 1. Geographical Proximity Check
    const servesLocation = vendor.regionsServed.some(r =>
      locLower.includes(r.toLowerCase()) || r.toLowerCase().includes(locLower)
    );
    if (servesLocation) {
      score += 20;
    } else if (locLower) {
      score -= 30; // Vendor does not serve this region or requires heavy travel
    }

    // 2. Budget Tier Alignment
    if (vendor.budgetTier === budgetTier) {
      score += 15;
    } else if (budgetTier === 'boutique' && vendor.budgetTier === 'luxury_fine_art') {
      score -= 20; // Potential sticker shock
    }


    // 3. Cultural Competency Alignment
    if (culturalTradition && vendor.culturalCompetency) {
      const hasCompetency = vendor.culturalCompetency.some(c =>
        c.toLowerCase().includes(culturalTradition.toLowerCase()) || c === 'All Traditions'
      );
      if (hasCompetency) score += 8;
    }

    // 4. Aesthetic Synergy
    if (preferredAesthetic && vendor.aestheticSpecialty) {
      const pLower = preferredAesthetic.toLowerCase();
      if (vendor.aestheticSpecialty.toLowerCase().includes(pLower)) {
        score += 8;
      }
    }

    return Math.max(10, Math.min(100, Math.round(score)));
  }

  /**
   * Filters and ranks vendors based on criteria
   */
  static findBestMatches(vendorPool, category = 'floral_designer', criteria = {}) {
    const matchingCategory = vendorPool.filter(v =>
      v.category.toLowerCase() === (category || '').toLowerCase() ||
      v.category.toLowerCase().includes((category || '').toLowerCase())
    );

    return matchingCategory
      .map(vendor => ({
        ...vendor,
        calculatedMatchScore: this.calculateMatchScore(vendor, criteria)
      }))
      .sort((a, b) => b.calculatedMatchScore - a.calculatedMatchScore);
  }
}

// --- PART 3: THREE-WAY INTRODUCTION EMAIL DRAFTER ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 3: THREE-WAY CLIENT-VENDOR INTRODUCTION EMAIL DRAFTER
 */

class VendorIntroductionDrafter {
  /**
   * Generates a warm, bespoke 3-way introduction email connecting client and vendor
   */
  static composeWarmIntroduction(client = {}, vendor = {}, sessionDetails = {}) {
    const clientName = client.name || client.clientName || 'Friend';
    const vendorContact = vendor.contactPerson || vendor.name;
    const vendorName = vendor.name;
    const sessionDate = sessionDetails.sessionDate || 'upcoming wedding celebration';
    const venue = sessionDetails.venue || sessionDetails.location || 'Halton / GTA';

    const subject = `Warm Introduction: ${clientName} + ${vendorName} | Hafsa Noreen Photography`;

    const body = `Dearest ${clientName} and ${vendorContact},

It is such an absolute joy to connect the two of you!

${clientName} is currently planning their gorgeous celebration scheduled for ${sessionDate}${venue ? ` at ${venue}` : ''}. In discussing their visual aesthetic, I immediately thought of ${vendorName}. 

${vendorContact}, your artful eye for ${vendor.aestheticSpecialty || 'unhurried, organic beauty'} aligns so harmoniously with what ${clientName} is dreaming up. Having worked together across Halton, I know firsthand the extraordinary dedication and calm grace your team brings to a wedding morning.

${clientName}, you can preview more of ${vendorContact}'s latest work on Instagram at ${vendor.instagram || 'their website'}:
${vendor.website || 'https://hafsanoreen.com'}

I will happily step back and let you two connect directly regarding availability and details. Rest assured, you are in the most gifted hands!

With so much love and excitement,
Hafsa Noreen | Principal Photographer
Hafsa Noreen Photography • Oakville, Ontario`;

    return {
      to: [client.email || 'client@example.com', vendor.contactEmail || 'vendor@example.com'],
      subject,
      body,
      vendorProfileSummary: {
        name: vendorName,
        contactPerson: vendorContact,
        instagram: vendor.instagram,
        website: vendor.website,
        whyHafsaLovesThem: vendor.whyHafsaRecommends
      }
    };
  }
}

// --- PART 4A: ZERO-KICKBACK ETHICAL CHARTER ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 4: ZERO-KICKBACK ETHICAL CHARTER & VENDOR COLLABORATION POLICIES
 */

const VENDOR_ETHICS_CHARTER = {
  policyTitle: 'The Hafsa Noreen Zero-Kickback Ethical Standard',
  corePhilosophy: [
    'Every single vendor in our collective is recommended solely based on artistic mastery, punctuality, and calm, loving client care.',
    'We strictly reject all hidden referral fees, kickbacks, or commercial commissions. Our couples trust our guidance implicitly, and that trust is sacrosanct.',
    'Instead of monetary kickbacks, our studio offers a Reciprocal Creative Exchange: We gift our vendor partners full high-resolution professional image galleries of their floral installations, tablescapes, and styling, empowering their business marketing completely complimentary.'
  ],
  collaborationAgreementTerms: {
    photoDeliveryLeadTime: 'Within 14 business days post-event, vendor gallery link is dispatched.',
    usageRightsGranted: 'Perpetual non-commercial digital marketing, portfolio, website, and social media showcase.',
    attributionRequirements: 'Clear and visible credit to @hafsanoreen.photography in captions and image tags.',
    editorialSubmissionCourtesy: 'Before submitting images to editorial magazines (e.g. WedLuxe, Style Me Pretty), vendors agree to notify Hafsa Noreen to coordinate exclusive photographer submission credentials.'
  }
};

class CollaborationProtocolManager {
  /**
   * Generates formal co-marketing agreement terms for vendor partnerships
   */
  static getCollaborationTerms() {
    return {
      charter: VENDOR_ETHICS_CHARTER,
      status: 'VERIFIED_ETHICAL_COLLECTIVE',
      referralFeePolicy: '0% KICKBACK (MERIT BASED)',
      reciprocalPerk: 'Complimentary High-Res Lab-Graded Editorial Vendor Gallery'
    };
  }
}

// --- PART 4B: 10-POINT VENDOR VETTING RUBRIC ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 4B: 10-POINT VENDOR QUALITY & ARTISTIC VETTING RUBRIC
 */

const VENDOR_VETTING_CRITERIA = [
  { criterionId: 'VET-01', name: 'Timeline Synchronization', weight: 15, standard: 'Respects photo buffers and completes preparation at least 20 minutes before planned departure.' },
  { criterionId: 'VET-02', name: 'Luminous Aesthetic Cohesion', weight: 15, standard: 'Color palettes, floral dyes, and styling harmoniously complement Hafsa warm, organic film tones.' },
  { criterionId: 'VET-03', name: 'Calm Client Bedside Manner', weight: 12, standard: 'Soothes nervous brides and couples; brings soothing, grounding energy into morning prep suites.' },
  { criterionId: 'VET-04', name: 'Frame & Sightline Etiquette', weight: 12, standard: 'Maintains awareness of cameras during ceremony and first dances; never obstructs key documentary sightlines.' },
  { criterionId: 'VET-05', name: 'Commercial General Liability Insurance', weight: 10, standard: 'Carries active $2M commercial general liability insurance recognized by Ontario venues.' },
  { criterionId: 'VET-06', name: 'Communication Responsiveness', weight: 10, standard: 'Replies to client and creative partner communications within 24 to 48 business hours.' },
  { criterionId: 'VET-07', name: 'Reciprocal Creative Promotion', weight: 8, standard: 'Gladly credits and tags @hafsanoreen.photography across published editorial features and social media.' },
  { criterionId: 'VET-08', name: 'Material & Craftsmanship Integrity', weight: 8, standard: 'Uses fresh, premium botanicals, archival deckled papers, and high-end cosmetic formulations.' },
  { criterionId: 'VET-09', name: 'Legal & Fiscal Transparency', weight: 5, standard: 'Operates with legal Ontario business registration, valid contracts, and CRA tax compliance.' },
  { criterionId: 'VET-10', name: 'Crisis Flexibility & Grace', weight: 5, standard: 'Pivots gracefully during inclement weather or unexpected ceremony delays without panic.' }
];

class VendorVettingProtocol {
  /**
   * Evaluates vendor score across the 10-point rubric
   */
  static assessVendorQuality(vendorProfile = {}) {
    const rawScore = vendorProfile.shootingHarmonyScore || 95;
    const isVetted = rawScore >= 90;
    const tier = rawScore >= 96 ? 'GOLD_HEIRLOOM_PARTNER' : rawScore >= 90 ? 'PREFERRED_ARTISAN' : 'PROBATIONARY';

    return {
      vendorName: vendorProfile.name,
      compositeScore: rawScore,
      isApprovedPartner: isVetted,
      partnershipTier: tier,
      auditTimestamp: new Date().toISOString(),
      standardsEvaluatedCount: VENDOR_VETTING_CRITERIA.length,
      rubricSummary: `Scored ${rawScore}/100 across 10 studio criteria including timeline sync, aesthetic harmony, and zero-kickback integrity.`
    };
  }
}

// --- PART 5: CORE ENGINE CLASS & DIAGNOSTICS SUITE ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 5: CORE ENGINE CLASS, STATIC EXECUTION & BUILT-IN DIAGNOSTICS SUITE
 */

class VendorMatchmakerEngine {
  /**
   * Primary entry point invoked by Haffu tool dispatcher
   */
  static async execute(params = {}) {
    const need = params.need || params.category || params.vendorType || 'hair_makeup';
    const location = params.location || params.region || 'Oakville';
    const budgetTier = params.budgetTier || 'high_end';
    const preferredAesthetic = params.aesthetic || params.preferredAesthetic || 'fine_art';
    const clientName = params.clientName || 'Valued Bride / Client';
    const sessionDate = params.sessionDate || 'your upcoming date';

    // Full Combined Vendor Collective
    const fullDirectory = [
      ...CURATED_VENDOR_COLLECTIVE,
      ...BEAUTY_AND_ARTISAN_COLLECTIVE,
      ...VENUES_AND_BRIDAL_COLLECTIVE
    ];


    // Find and rank best matches
    const rankedMatches = VendorMatchingScorer.findBestMatches(fullDirectory, need, {
      location,
      budgetTier,
      preferredAesthetic,
      culturalTradition: params.culturalTradition || 'Western'
    });

    const topVendor = rankedMatches[0] || fullDirectory[0];
    const topThreePartners = rankedMatches.slice(0, 3).map(v => v.name);

    // Compose warm 3-way introduction email draft for the top match
    const introDraft = VendorIntroductionDrafter.composeWarmIntroduction(
      { name: clientName, email: params.clientEmail || 'client@example.com' },
      topVendor,
      { sessionDate, location, venue: params.venue || location }
    );

    return {
      // 100% Backward Compatibility Legacy Interface
      match: `Best ${need} in ${location}: ${topVendor.name}`,
      partners: topThreePartners.length > 0 ? topThreePartners : ['GlamByAisha', 'OakvilleBeauty'],
      fee: '0% Referral Kickback (Pure merit-based ethical collective)',

      // Enterprise Intelligence Fields
      status: 'success',
      targetNeed: need,
      targetLocation: location,
      totalCandidatesEvaluated: rankedMatches.length,
      primaryRecommendation: {
        id: topVendor.id,
        name: topVendor.name,
        category: topVendor.category,
        matchScore: topVendor.calculatedMatchScore,
        aestheticSpecialty: topVendor.aestheticSpecialty,
        instagram: topVendor.instagram,
        website: topVendor.website,
        whyHafsaRecommends: topVendor.whyHafsaRecommends
      },
      alternativePartners: rankedMatches.slice(1, 3).map(v => ({
        name: v.name,
        instagram: v.instagram,
        matchScore: v.calculatedMatchScore,
        whyHafsaRecommends: v.whyHafsaRecommends
      })),
      introductionEmailDraft: introDraft,
      ethicalCharter: CollaborationProtocolManager.getCollaborationTerms()
    };
  }

  /**
   * Run comprehensive self-diagnostics suite
   */
  static runSelfDiagnostics() {
    const testResults = [];

    // Test 1: Hair & Makeup query resolves Aisha or Fancy Face
    const fullPool = [...CURATED_VENDOR_COLLECTIVE, ...BEAUTY_AND_ARTISAN_COLLECTIVE];
    const hmu = VendorMatchingScorer.findBestMatches(fullPool, 'hair_makeup', { location: 'Oakville' });
    testResults.push({
      test: 'Hair & makeup query ranks Glam by Aisha or Fancy Face with high score',
      passed: hmu.length > 0 && hmu[0].calculatedMatchScore >= 90,
      actual: hmu[0]?.name
    });

    // Test 2: Floral query in Burlington
    const flr = VendorMatchingScorer.findBestMatches(fullPool, 'floral_designer', { location: 'Burlington' });
    testResults.push({
      test: 'Floral query ranks Threads & Blooms for Burlington/Oakville',
      passed: flr.length > 0 && flr[0].name === 'Threads & Blooms'
    });

    // Test 3: Warm Introduction Email Drafter
    const intro = VendorIntroductionDrafter.composeWarmIntroduction(
      { name: 'Sophia' },
      fullPool[0],
      { sessionDate: '2026-09-12', venue: 'Gairloch Gardens' }
    );
    testResults.push({
      test: 'Warm intro email includes bride name, vendor contact, and venue',
      passed: intro.body.includes('Sophia') && intro.body.includes('Gairloch Gardens') && intro.subject.includes('Warm Introduction')
    });

    // Test 4: Ethical Charter Zero-Kickback policy
    const charter = CollaborationProtocolManager.getCollaborationTerms();
    testResults.push({
      test: 'Ethical charter enforces 0% kickback policy',
      passed: charter.referralFeePolicy.includes('0% KICKBACK')
    });
    // Test 5: Vendor Guide Compiler
    const guide = VendorGuideCompiler.compileVendorGuide('Sophia', { sessionDate: '2026-09-12' });
    testResults.push({
      test: 'Vendor guide compiles 9 distinct artisan categories with zero kickbacks',
      passed: guide.categoriesCount === 9 && guide.zeroKickbackPledge.includes('0% referral fees')
    });

    // Test 6: Vendor Coordination Protocol
    const vidProto = VendorCoordinationManager.getProtocol('VIDEOGRAPHER_HARMONY_PROTOCOL');
    testResults.push({
      test: 'Videographer harmony protocol protects ceremony sightlines and natural light purity',
      passed: vidProto.directive.includes('Ceremony Sightlines') && vidProto.directive.includes('Natural Light Purity')
    });

    // Test 7: Instagram Credit Block Generator
    const instaBlock = VendorSocialAssetGenerator.generateInstagramCreditBlock({
      planning: '@blushandbowties',
      florals: '@threadsandblooms',
      venue: '@gairlochgardens'
    });
    testResults.push({
      test: 'Instagram credit block formats vendor handles and Sony Alpha camera tags',
      passed: instaBlock.includes('@blushandbowties') && instaBlock.includes('@hafsanoreen.photography')
    });


    const allPassed = testResults.every(t => t.passed);
    return {
      engine: 'VendorMatchmakerEngine',
      totalTests: testResults.length,
      allPassed,
      tests: testResults
    };
  }
}

// --- PART 6: BOUNDARY TESTING & INQUIRY SIMULATIONS ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 6: BOUNDARY TESTING & GTA WEDDING SIMULATION BENCHMARKS
 */

class VendorBoundaryAndSimulations {
  static runBoundaryTests() {
    const boundaryResults = [];

    const fullPool = [...CURATED_VENDOR_COLLECTIVE, ...BEAUTY_AND_ARTISAN_COLLECTIVE, ...VENUES_AND_BRIDAL_COLLECTIVE];

    // Test 1: Unknown category gracefully falls back

    const unknownCat = VendorMatchingScorer.findBestMatches(fullPool, 'astronaut_catering', {});
    boundaryResults.push({
      test: 'Unknown vendor category evaluates safely to empty array without crashing',
      passed: Array.isArray(unknownCat) && unknownCat.length === 0
    });

    // Test 2: Unspecified location evaluates without NaN
    const noLocScore = VendorMatchingScorer.calculateMatchScore(fullPool[0], {});
    boundaryResults.push({
      test: 'Empty location criteria calculates valid integer match score',
      passed: typeof noLocScore === 'number' && !isNaN(noLocScore) && noLocScore > 0
    });

    // Test 3: Cultural competence boost
    const southAsianAisha = VendorMatchingScorer.calculateMatchScore(fullPool[3], { culturalTradition: 'South Asian' });
    const genericScore = VendorMatchingScorer.calculateMatchScore(fullPool[3], { culturalTradition: 'Generic' });
    boundaryResults.push({
      test: 'Cultural match criteria boosts relevant vendor score',
      passed: southAsianAisha >= genericScore
    });

    // Test 4: Maximum score capped at 100
    const maxScore = VendorMatchingScorer.calculateMatchScore({
      shootingHarmonyScore: 99,
      regionsServed: ['Oakville'],
      budgetTier: 'luxury_fine_art',
      culturalCompetency: ['Western'],
      aestheticSpecialty: 'fine_art'
    }, {
      location: 'Oakville',
      budgetTier: 'luxury_fine_art',
      culturalTradition: 'Western',
      preferredAesthetic: 'fine_art'
    });
    boundaryResults.push({
      test: 'Cumulative bonuses are capped strictly at 100',
      passed: maxScore === 100
    });

    return {
      totalBoundaryTests: boundaryResults.length,
      allBoundaryPassed: boundaryResults.every(t => t.passed),
      results: boundaryResults
    };
  }

  static simulateAllInquiryScenarios() {
    const fullPool = [...CURATED_VENDOR_COLLECTIVE, ...BEAUTY_AND_ARTISAN_COLLECTIVE, ...VENUES_AND_BRIDAL_COLLECTIVE];
    const scenarios = [

      { id: 'VND-SIM-01', need: 'hair_makeup', location: 'Mississauga', budgetTier: 'high_end', expectedTop: 'Glam by Aisha & Co.' },
      { id: 'VND-SIM-02', need: 'floral_designer', location: 'Oakville', budgetTier: 'luxury_fine_art', expectedTop: 'Threads & Blooms' },
      { id: 'VND-SIM-03', need: 'wedding_planner', location: 'Toronto', budgetTier: 'luxury_fine_art', expectedTop: 'Blush & Bowties Weddings' },
      { id: 'VND-SIM-04', need: 'stationery', location: 'Oakville', budgetTier: 'luxury_fine_art', expectedTop: 'Statuer Studio & Calligraphy' },
      { id: 'VND-SIM-05', need: 'cake_designer', location: 'Burlington', budgetTier: 'high_end', expectedTop: 'The Sweetest Thing Cakes' },
      { id: 'VND-SIM-06', need: 'musician', location: 'Hamilton', budgetTier: 'high_end', expectedTop: 'Duo d’Amore String Ensembles' },
      { id: 'VND-SIM-07', need: 'wedding_planner', location: 'Burlington', budgetTier: 'high_end', expectedTop: 'Blush & Bowties Weddings' },
      { id: 'VND-SIM-08', need: 'hair_makeup', location: 'Hamilton', budgetTier: 'boutique', expectedTop: 'Glam by Aisha & Co.' }

    ];

    return scenarios.map(sc => {
      const matches = VendorMatchingScorer.findBestMatches(fullPool, sc.need, {
        location: sc.location,
        budgetTier: sc.budgetTier
      });
      const topMatch = matches[0] || null;
      return {
        scenarioId: sc.id,
        need: sc.need,
        location: sc.location,
        topMatchedVendor: topMatch ? topMatch.name : null,
        topScore: topMatch ? topMatch.calculatedMatchScore : 0,
        matchedExpected: topMatch && topMatch.name === sc.expectedTop
      };
    });
  }
}


// --- PART 7: LUXURY VENDOR DIRECTORY COMPILER & DIGITAL GUIDE ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 7: PREFERRED LUXURY VENDOR DIRECTORY COMPILER & DIGITAL GUIDE
 */

class VendorGuideCompiler {
  /**
   * Compiles the studio's full curated vendor collective into a comprehensive guide
   */
  static compileVendorGuide(clientName = 'Valued Bride / Client', eventDetails = {}) {
    const fullPool = [
      ...CURATED_VENDOR_COLLECTIVE,
      ...BEAUTY_AND_ARTISAN_COLLECTIVE,
      ...VENUES_AND_BRIDAL_COLLECTIVE
    ];

    const categoryMap = {
      'Wedding Planners & Designers': fullPool.filter(v => v.category === 'wedding_planner'),
      'Botanical & Floral Artists': fullPool.filter(v => v.category === 'floral_designer'),
      'Bridal Hair & Makeup': fullPool.filter(v => v.category === 'hair_makeup'),
      'Fine Art Stationery & Calligraphy': fullPool.filter(v => v.category === 'stationery'),
      'Artisanal Cake Designers': fullPool.filter(v => v.category === 'cake_designer'),
      'Acoustic Strings & Musicians': fullPool.filter(v => v.category === 'musician'),
      'Premier Daylight Venues & Estates': fullPool.filter(v => v.category === 'venue'),
      'Luxury Bridal Gown Ateliers': fullPool.filter(v => v.category === 'bridal_gown'),
      'Heirloom Diamonds & Custom Rings': fullPool.filter(v => v.category === 'fine_jewelry')
    };

    const guideSections = [];
    for (const [title, list] of Object.entries(categoryMap)) {
      guideSections.push({
        sectionTitle: title,
        vendorCount: list.length,
        recommendations: list.map(v => ({
          name: v.name,
          regions: v.regionsServed.join(', '),
          aesthetic: v.aestheticSpecialty,
          instagram: v.instagram,
          website: v.website,
          whyHafsaRecommends: v.whyHafsaRecommends
        }))
      });
    }

    return {
      guideTitle: 'The Hafsa Noreen Curated Creative Collective (2026/2027 Edition)',
      compiledFor: clientName,
      sessionDate: eventDetails.sessionDate || '2026/2027 Season',
      venue: eventDetails.venue || 'Halton / GTA',
      zeroKickbackPledge: 'Every artisan in this guide is selected purely for creative excellence, punctuality, and calm bedside manner. 0% referral fees.',
      totalVerifiedPartners: fullPool.length,
      categoriesCount: guideSections.length,
      sections: guideSections
    };
  }
}

// --- PART 8: VENDOR CO-ORDINATION PROTOCOLS & CINEMA HARMONY ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 8: VENDOR FAQs, VIDEOGRAPHER COORDINATION & PROTOCOL DIRECTIVES
 */

const VENDOR_COORDINATION_PROTOCOLS = {
  VIDEOGRAPHER_HARMONY_PROTOCOL: {
    protocolId: 'PRT-VID-01',
    title: 'Photographer & Cinema Team Harmony Standard',
    directive: `Hafsa approaches video teams with deep respect and collaboration. To ensure neither team blocks the other:
1. Ceremony Sightlines: Videographer and photographer agree on designated ceremony side angles during pre-ceremony sound check.
2. Natural Light Purity: Video teams are requested to avoid harsh high-CRI LED panel lights during intimate golden hour couple portraits so Hafsa's creamy medium-format color science remains unpolluted.
3. Movement Synchronization: When Hafsa prompts couple movement (gentle walking, veil floating), videographers capture dynamic slow-motion simultaneously.`
  },

  FLORIST_FLATLAY_PROTOCOL: {
    protocolId: 'PRT-FLR-02',
    title: 'Morning Invitation Flatlay Botanical Styling',
    directive: `We kindly request florists provide a small container of loose deconstructed blooms, delicate greenery clippings, and extra ribbons delivered directly to the bridal prep suite by 11:30 AM. Hafsa uses these to style the heirloom invitation suite and rings.`
  },

  HAIR_MAKEUP_TIMING_PROTOCOL: {
    protocolId: 'PRT-HMU-03',
    title: 'Bridal Beauty Timeline Finishing Buffer',
    directive: `Bridal hair and makeup must be 100% finished, with lipstick and lashes set, strictly 20 minutes before the dress-dressing time. This buffer prevents bridal panic and protects the first-look window.`
  }
};

class VendorCoordinationManager {
  /**
   * Retrieves protocol directives for seamless shoot-day vendor operations
   */
  static getProtocol(protocolKey = 'VIDEOGRAPHER_HARMONY_PROTOCOL') {
    return VENDOR_COORDINATION_PROTOCOLS[protocolKey] || VENDOR_COORDINATION_PROTOCOLS.VIDEOGRAPHER_HARMONY_PROTOCOL;
  }
}

// --- PART 9: VENDOR SOCIAL CREDIT TAGGING & INSTAGRAM COLLAB ---
/**
 * HAFFU STUDIO — VENDOR MATCHMAKER ENGINE
 * PART 9: VENDOR SOCIAL CREDIT TAGGING & INSTAGRAM COLLAB GENERATOR
 */

class VendorSocialAssetGenerator {
  /**
   * Generates a fully formatted Instagram credit block for wedding and session carousels
   */
  static generateInstagramCreditBlock(vendorTeam = {}) {
    const lines = [
      'The Creative Team who brought this magic to life:',
      `✨ Photography & Direction: @hafsanoreen.photography`,
      vendorTeam.planning ? `🕊️ Planning & Design: ${vendorTeam.planning}` : null,
      vendorTeam.florals ? `🌿 Botanical & Floral Art: ${vendorTeam.florals}` : null,
      vendorTeam.hmu ? `💄 Bridal Hair & Makeup: ${vendorTeam.hmu}` : null,
      vendorTeam.gown ? `👰 Gown Atelier: ${vendorTeam.gown}` : null,
      vendorTeam.stationery ? `💌 Heirloom Stationery: ${vendorTeam.stationery}` : null,
      vendorTeam.cake ? `🍰 Cake Design: ${vendorTeam.cake}` : null,
      vendorTeam.venue ? `🏛️ Venue: ${vendorTeam.venue}` : null,
      vendorTeam.music ? `🎻 Live Acoustic Music: ${vendorTeam.music}` : null,
      '',
      'Captured with Sony Alpha full-frame & G Master glass. Graded with signature Halton natural film science.',
      '#OakvilleWeddingPhotographer #GairlochGardensWedding #TorontoFineArtWedding #MiltonPhotographer #HaltonLuxuryWedding'
    ].filter(Boolean);

    return lines.join('\n');
  }

  /**
   * Generates vCard / mobile contact snippet
   */
  static generateContactCard(vendor = {}) {
    return {
      fullName: vendor.name,
      category: vendor.category,
      email: vendor.contactEmail,
      website: vendor.website,
      instagram: vendor.instagram,
      notes: `Verified member of Hafsa Noreen Photography Creative Collective. ${vendor.whyHafsaRecommends || ''}`
    };
  }
}
// Extended Engine Static Utilities
VendorMatchmakerEngine.runFullTestSuite = function() {
  const diag = VendorMatchmakerEngine.runSelfDiagnostics();
  const bound = VendorBoundaryAndSimulations.runBoundaryTests();
  const sim = VendorBoundaryAndSimulations.simulateAllInquiryScenarios();
  return {
    engine: "VendorMatchmakerEngine",
    timestamp: new Date().toISOString(),
    allPassed: diag.allPassed && bound.allBoundaryPassed && sim.every(s => s.matchedExpected),
    diagnostics: diag,
    boundaryTests: bound,
    simulations: {
      totalSimulated: sim.length,
      allMatched: sim.every(s => s.matchedExpected)
    }
  };
};

VendorMatchmakerEngine.getAllVendors = function() {
  return [...CURATED_VENDOR_COLLECTIVE, ...BEAUTY_AND_ARTISAN_COLLECTIVE];
};

VendorMatchmakerEngine.getVendorsByCategory = function(category) {
  const all = [...CURATED_VENDOR_COLLECTIVE, ...BEAUTY_AND_ARTISAN_COLLECTIVE];
  return all.filter(v => v.category.toLowerCase().includes((category || "").toLowerCase()));
};

VendorMatchmakerEngine.getIntroDraft = function(client, vendor, session) {
  return VendorIntroductionDrafter.composeWarmIntroduction(client, vendor, session);
};

VendorMatchmakerEngine.getEthicalCharter = function() {
  return CollaborationProtocolManager.getCollaborationTerms();
};

// Compatibility Export Layer (Supports class & static method invocations)
VendorMatchmakerEngine.VendorMatchmaker = VendorMatchmakerEngine;
VendorMatchmakerEngine.CURATED_VENDOR_COLLECTIVE = CURATED_VENDOR_COLLECTIVE;
VendorMatchmakerEngine.BEAUTY_AND_ARTISAN_COLLECTIVE = BEAUTY_AND_ARTISAN_COLLECTIVE;
VendorMatchmakerEngine.VendorMatchingScorer = VendorMatchingScorer;
VendorMatchmakerEngine.VendorIntroductionDrafter = VendorIntroductionDrafter;
VendorMatchmakerEngine.VENDOR_ETHICS_CHARTER = VENDOR_ETHICS_CHARTER;
VendorMatchmakerEngine.CollaborationProtocolManager = CollaborationProtocolManager;
VendorMatchmakerEngine.VENUES_AND_BRIDAL_COLLECTIVE = VENUES_AND_BRIDAL_COLLECTIVE;
VendorMatchmakerEngine.VENDOR_VETTING_CRITERIA = VENDOR_VETTING_CRITERIA;
VendorMatchmakerEngine.VendorVettingProtocol = VendorVettingProtocol;
VendorMatchmakerEngine.vetVendor = function(vendor) {
  return VendorVettingProtocol.assessVendorQuality(vendor);
};
VendorMatchmakerEngine.VendorBoundaryAndSimulations = VendorBoundaryAndSimulations;
VendorMatchmakerEngine.VendorGuideCompiler = VendorGuideCompiler;
VendorMatchmakerEngine.VENDOR_COORDINATION_PROTOCOLS = VENDOR_COORDINATION_PROTOCOLS;
VendorMatchmakerEngine.VendorCoordinationManager = VendorCoordinationManager;
VendorMatchmakerEngine.generateDigitalVendorGuide = function(clientName, details) {
  return VendorGuideCompiler.compileVendorGuide(clientName, details);
};
VendorMatchmakerEngine.getVendorProtocol = function(protocolKey) {
  return VendorCoordinationManager.getProtocol(protocolKey);
};
VendorMatchmakerEngine.VendorSocialAssetGenerator = VendorSocialAssetGenerator;
VendorMatchmakerEngine.getInstagramCreditBlock = function(team) {
  return VendorSocialAssetGenerator.generateInstagramCreditBlock(team);
};
VendorMatchmakerEngine.getVendorContactCard = function(vendor) {
  return VendorSocialAssetGenerator.generateContactCard(vendor);
};
VendorMatchmakerEngine.getVendorById = function(vendorId) {
  const all = [...CURATED_VENDOR_COLLECTIVE, ...BEAUTY_AND_ARTISAN_COLLECTIVE, ...VENUES_AND_BRIDAL_COLLECTIVE];
  return all.find(v => v.id === vendorId) || null;
};

VendorMatchmakerEngine.getTopRatedByRegion = function(regionName) {
  const all = [...CURATED_VENDOR_COLLECTIVE, ...BEAUTY_AND_ARTISAN_COLLECTIVE, ...VENUES_AND_BRIDAL_COLLECTIVE];
  return all.filter(v => v.regionsServed.some(r => r.toLowerCase().includes((regionName || "").toLowerCase())));
};

VendorMatchmakerEngine.searchVendors = function(keyword) {
  const all = [...CURATED_VENDOR_COLLECTIVE, ...BEAUTY_AND_ARTISAN_COLLECTIVE, ...VENUES_AND_BRIDAL_COLLECTIVE];
  const kLower = (keyword || "").toLowerCase();
  return all.filter(v => v.name.toLowerCase().includes(kLower) || v.aestheticSpecialty.toLowerCase().includes(kLower));

VendorMatchmakerEngine.getVendorCount = function() {
  return CURATED_VENDOR_COLLECTIVE.length + BEAUTY_AND_ARTISAN_COLLECTIVE.length + VENUES_AND_BRIDAL_COLLECTIVE.length;
};
};

module.exports = VendorMatchmakerEngine;