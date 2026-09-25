/**
 * ============================================================================
 * HAFFU STUDIO — WALL ART SCALE, FRAMING & INTERIOR SPATIAL VISUALIZER
 * ============================================================================
 * Enterprise Architectural Proportion & Museum Framing Architecture:
 *   1. Architectural Dimensions Catalog (11x14 to 40x60 & Multi-Piece Gallery Walls)
 *   2. The 57-Inch Museum Eye-Level Rule & 2/3 Furniture Proportion Scale Algorithms
 *   3. Museum Archival Substrates (310gsm Hahnemühle Photo Rag, Canson Baryta II, Canvas)
 *   4. Handcrafted Solid Hardwood Mouldings & Tru Vue Museum Glass® (99% UV-Blocking)
 *   5. Interior Room Placement Profiles & Designer Paint Harmony (Benjamin Moore / F&B)
 *   6. Custom Framing Financial Ledger & Ontario 13% HST Remittance Calculation
 *   7. Curator Hanging Runbooks, Hardware Ratings (Z-Bar Cleats) & Museum Lux Standards
 *   8. Multi-Piece Gallery Wall Blueprints (Triptych, 2x2 Grid, Staircase Cascade, Salon)
 *   9. 100% Backward-Compatible Legacy Interface (execute, getDimensionsGuide, runDiagnostics)
 *
 * Studio: Hafsa Noreen Photography Atelier (Oakville / Burlington / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.4.0
 * ============================================================================
 */

'use strict';

// --- PART 1: DIMENSIONS CATALOG & SPATIAL RULES ---
/**
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 1: Dimensional Catalog, Spatial Proportions & Museum Hanging Rules
 */

const DIMENSIONS_CATALOG = {
  '11x14': {
    id: '11x14',
    dimensions: '11" x 14" (approx. 28 x 35 cm)',
    idealWallSpace: 'Executive desk displays, bedside vignettes, or private powder rooms',
    aspectRatio: '4:5 classic portrait aspect ratio',
    frameOptions: ['Natural White Oak', 'Brushed Champagne Gold', 'Matte Gallery Black'],
    hangingAdvice: 'Pair with an oversized 3-inch 8-ply museum mat for an elevated gallery look.',
    retailPriceCad: 280
  },
  '16x24': {
    id: '16x24',
    dimensions: '16" x 24" (approx. 40 x 60 cm)',
    idealWallSpace: 'Small gallery nooks, beside entryway mirrors, or bedroom accent walls',
    aspectRatio: '2:3 classic 35mm film aspect ratio',
    frameOptions: ['Natural White Oak', 'Brushed Champagne Gold', 'Matte Gallery Black', 'Tuscan Walnut'],
    hangingAdvice: 'Center of artwork should hang at 57 inches from the floor.',
    retailPriceCad: 480
  },
  '20x30': {
    id: '20x30',
    dimensions: '20" x 30" (approx. 50 x 75 cm)',
    idealWallSpace: 'Medium living room consoles, master bedroom dressers, or secondary hallways',
    aspectRatio: '2:3 classic 35mm film aspect ratio',
    frameOptions: ['Solid Tuscan Walnut', 'Brushed Champagne Gold', 'Natural White Oak'],
    hangingAdvice: 'Leave 6 to 8 inches of breathing room between the bottom of the frame and furniture top.',
    retailPriceCad: 690
  },
  '24x36': {
    id: '24x36',
    dimensions: '24" x 36" (approx. 60 x 90 cm)',
    idealWallSpace: 'Centered directly above a standard 3-seater sofa (70-80 inches) or dining console',
    aspectRatio: '2:3 classic 35mm film aspect ratio',
    frameOptions: ['Solid Tuscan Walnut', 'Deep Gallery Float Frame', 'Warm Brass', 'Natural White Oak'],
    hangingAdvice: 'Fulfills the 2/3 furniture proportion rule over a 60-to-80-inch sofa.',
    retailPriceCad: 950
  },
  '30x40': {
    id: '30x40',
    dimensions: '30" x 40" (approx. 75 x 100 cm)',
    idealWallSpace: 'Grand fireplace mantels, high-ceiling foyers, or formal drawing rooms',
    aspectRatio: '3:4 classic medium-format portrait ratio',
    frameOptions: ['Solid Tuscan Walnut', 'Antique Gilded Leaf', 'Deep Gallery Float Frame'],
    hangingAdvice: 'Rest 4 to 6 inches above fireplace mantel shelf; ensure heavy-duty French cleat anchor.',
    retailPriceCad: 1250
  },
  '30x45': {
    id: '30x45',
    dimensions: '30" x 45" (approx. 75 x 115 cm)',
    idealWallSpace: 'Grand fireplace mantels, high-ceiling foyers, or formal drawing rooms',
    aspectRatio: '2:3 classic 35mm film aspect ratio',
    frameOptions: ['Hand-Carved Gilded Gold', 'Solid Hardwood Shadowbox', 'Solid Tuscan Walnut'],
    hangingAdvice: 'Monumental focal point; demands high ceilings (minimum 9 to 10 feet) for optimal spatial balance.',
    retailPriceCad: 1450
  },
  '40x60': {
    id: '40x60',
    dimensions: '40" x 60" (approx. 100 x 150 cm)',
    idealWallSpace: 'High-ceiling architectural double-height foyers or vast contemporary great rooms',
    aspectRatio: '2:3 classic 35mm film aspect ratio',
    frameOptions: ['Deep Hardwood Shadowbox Float', 'Solid Tuscan Walnut', 'Thin Gallery White'],
    hangingAdvice: 'Requires professional two-point French cleat wall mounting directly into wall studs.',
    retailPriceCad: 2200
  },
  'triptych-three-16x20': {
    id: 'triptych-three-16x20',
    dimensions: 'Three 16" x 20" frames spaced 2.5" apart (total width 53")',
    idealWallSpace: 'Long hallway corridors or expansive living room walls',
    aspectRatio: 'Storytelling sequential triptych (Wide + Medium + Detail)',
    frameOptions: ['Uniform Thin Gallery White', 'Warm Natural Maple', 'Natural White Oak'],
    hangingAdvice: 'Hang middle frame at 57 inches center; space lateral frames precisely 2.5 inches apart.',
    retailPriceCad: 1100
  },
  'grid-four-16x16': {
    id: 'grid-four-16x16',
    dimensions: 'Four 16" x 16" square frames in a 2x2 grid spaced 2" apart (total 34" x 34")',
    idealWallSpace: 'Square dining room accent walls or staircase landings',
    aspectRatio: 'Square 1:1 symmetry (perfect for matching four milestone expressions)',
    frameOptions: ['Natural White Oak', 'Matte Gallery Black', 'Thin Gallery White'],
    hangingAdvice: 'Maintain exact 2-inch uniform spacing horizontally and vertically.',
    retailPriceCad: 880
  }
};

const SPATIAL_CURATOR_RULES = {
  MUSEUM_EYE_LEVEL_RULE: 'Standard museum curator standard mandates that the vertical center point of the artwork hangs precisely at 57 inches (145 cm) from the floor, reflecting average human eye level.',
  FURNITURE_PROPORTION_RULE: 'Artwork hung above a piece of furniture (sofa, console, headboard) should measure approximately 60% to 75% (approx. two-thirds) of the furniture’s total width to achieve architectural equilibrium.',
  SPACING_RULE_GALLERY_WALLS: 'Maintain a strict 2.0 to 2.5-inch uniform gap between adjacent frames in multi-piece collections to ensure the cluster reads visually as a cohesive singular installation.'
};

// --- PART 2: ARCHIVAL SUBSTRATES & FRAMING MOULDINGS ---
/**
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 2: Museum Substrates, Handcrafted Mouldings & Optical Glazing
 */

const ARCHIVAL_SUBSTRATES = {
  HAHNEMUHLE_PHOTO_RAG: {
    name: 'Hahnemühle Photo Rag® 308/310gsm',
    composition: '100% Cotton Rag, Acid- & Lignin-Free',
    isoStandard: 'ISO 9706 Museum Archival Longevity Standard',
    lightfastRating: '200+ Year Lightfast Rating with 12-Color Pigment Inks',
    surfaceTexture: 'Soft velvet-smooth matte finish with delicate tactile grain',
    bestFor: 'Fine-art natural light portraiture, black-and-white tonal studies, and timeless wedding heirlooms'
  },

  CANSON_BARYTA_PRESTIGE_II: {
    name: 'Canson® Infinity Baryta Prestige II 340gsm',
    composition: 'Alpha-Cellulose Base with True Barium Sulphate (Baryta) Layer',
    isoStandard: 'Museum Heritage Archival Certified',
    lightfastRating: '150+ Year Darkroom Longevity',
    surfaceTexture: 'Subtle satin lustre recreating traditional silver halide fiber-based darkroom prints',
    bestFor: 'High-contrast black-and-white, dramatic golden hour architectural portraits, and deep black dMax'
  },

  FINE_ART_HEIRLOOM_CANVAS: {
    name: 'Archival Master Cotton Fine-Art Canvas 410gsm',
    composition: 'Pure Woven Cotton Canvas Stretched Over Kiln-Dried Canadian Pine Stretcher Bars (1.75" Depth)',
    isoStandard: 'Archival Fine-Art Giclée Standard',
    lightfastRating: '100+ Year Fade Resistance with Dual UV Protective Satin Varnish',
    surfaceTexture: 'Tactile painterly woven canvas texture without artificial plastic gloss',
    bestFor: 'Large-scale fireplace mantel showpieces (24x36 to 40x60) requiring frameless or float frame drama'
  }
};

const HANDCRAFTED_MOULDINGS = {
  NATURAL_WHITE_OAK: {
    id: 'natural_white_oak',
    name: 'Natural White Oak Moulding',
    profile: '1.25" face, 1.5" depth solid North American white oak with clear matte wax finish',
    aestheticTone: 'Understated Scandinavian minimalism, warm organic neutral grain',
    idealPalette: 'Ivory, soft sage, warm oatmeal, and light coastal interiors'
  },

  TUSCAN_WALNUT: {
    id: 'tuscan_walnut',
    name: 'Solid Tuscan Walnut Moulding',
    profile: '1.5" face, 1.75" depth solid American black walnut with hand-rubbed oil finish',
    aestheticTone: 'Rich dark espresso tones, heirloom library prestige, historic estate depth',
    idealPalette: 'Deep forest green, warm terracotta, cognac leather, and heritage brick'
  },

  BRUSHED_CHAMPAGNE_GOLD: {
    id: 'brushed_champagne_gold',
    name: 'Brushed Champagne Gold Moulding',
    profile: '0.75" slim face, 1.25" depth brushed anodized aluminum-wood hybrid',
    aestheticTone: 'Subtle warm metallic glow that reflects candlelight without gaudy shine',
    idealPalette: 'Warm alabaster, neutral taupe, soft blush, and formal dining rooms'
  },

  ANTIQUE_GILDED_LEAF: {
    id: 'antique_gilded_leaf',
    name: 'Antique Hand-Gilded Gold Leaf Frame',
    profile: '2.5" substantial carved wood profile with hand-burnished Dutch gold leaf',
    aestheticTone: 'European museum grandeur, heirloom architectural prestige',
    idealPalette: 'Formal drawing rooms, high-ceiling mantels, and classical heritage estates'
  },

  MATTE_GALLERY_BLACK: {
    id: 'matte_gallery_black',
    name: 'Matte Gallery Black Moulding',
    profile: '1.0" face, 1.5" depth solid hardwood with satin matte black lacquer',
    aestheticTone: 'High-contrast modern graphic anchor; creates strong visual separation',
    idealPalette: 'Contemporary monochrome, industrial loft brick, and high-contrast black-and-white'
  },

  THIN_GALLERY_WHITE: {
    id: 'thin_gallery_white',
    name: 'Thin Gallery White Moulding',
    profile: '0.75" face, 1.25" depth solid maple with matte chalk white finish',
    aestheticTone: 'Ultra-clean boundary that dissolves softly into white and cream gallery walls',
    idealPalette: 'Minimalist modern nurseries, sunlit hallways, and clean white bedrooms'
  },

  SHADOWBOX_FLOAT: {
    id: 'shadowbox_float',
    name: 'Deep Hardwood Shadowbox Float Frame',
    profile: '0.5" slim face, 2.0" deep recessed box with 0.5" interior air gap around canvas',
    aestheticTone: 'Art gallery floating canvas effect; artwork appears suspended in space',
    idealPalette: 'Canvas installations above living room sofas and modern architectural great rooms'
  }
};

const GLAZING_STANDARDS = {
  TRU_VUE_MUSEUM_GLASS: {
    name: 'Tru Vue Museum Glass®',
    uvProtectionPercent: 99.0,
    reflectionPercent: 0.9,
    features: [
      'Magnetron sputtered anti-reflective coating virtually eliminates distracting glare',
      'Blocks 99% of damaging indoor and outdoor ultraviolet light to prevent color fading',
      'Water-white optical substrate yields true-to-life color transmission without greenish iron tint'
    ],
    recommendation: 'Mandatory standard for all Hafsa Noreen Photography framed cotton rag collections.'
  }
};

// --- PART 3: ROOM TYPES & PAINT COLOR HARMONY ---
/**
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 3: Interior Room Types & Paint Color Harmony Matrix
 */

const ROOM_PLACEMENT_PROFILES = {
  living_room: {
    roomName: 'Living Room / Main Gathering Space',
    primaryFocalPoint: 'Centered above main 3-seater sofa or above fireplace mantel shelf',
    recommendedSizing: '24" x 36" single statement piece or 30" x 45" grand mantelpiece',
    recommendedMoulding: 'Natural White Oak or Solid Tuscan Walnut',
    hangingElevation: '57 inches from floor to center, or 6-8 inches above sofa backrest cushions'
  },
  dining_room: {
    roomName: 'Formal Dining Room / Credenza Wall',
    primaryFocalPoint: 'Centered directly above a low dining buffet, bar cabinet, or credenza',
    recommendedSizing: 'The Storytelling Triptych (Three 16x20s) or 24" x 36" horizontal statement',
    recommendedMoulding: 'Brushed Champagne Gold or Solid Tuscan Walnut',
    hangingElevation: 'Lower placement (approx. 54-56 inches to center) to accommodate seated dining viewing angles'
  },
  master_bedroom: {
    roomName: 'Master Bedroom Sanctuary',
    primaryFocalPoint: 'Centered above king or queen headboard or dresser wall',
    recommendedSizing: '24" x 36" horizontal or Pair of 16" x 24" vertical sister portraits',
    recommendedMoulding: 'Natural White Oak or Thin Gallery White',
    hangingElevation: '6 inches above headboard; secure with heavy-duty earthquake-proof safety cleats'
  },
  entryway_foyer: {
    roomName: 'Architectural Foyer & Entrance Hall',
    primaryFocalPoint: 'Immediate sightline upon entering residence; beside entry mirror or console',
    recommendedSizing: '16" x 24" or 20" x 30" vertical portrait orientation',
    recommendedMoulding: 'Antique Gilded Leaf or Brushed Champagne Gold',
    hangingElevation: 'Standard 57 inches museum eye level for standing guests'
  },
  nursery_child: {
    roomName: 'Nursery & Children’s Bedroom',
    primaryFocalPoint: 'Above changing station or adjacent to glider chair (never directly above crib)',
    recommendedSizing: '16" x 24" or The Generational Grid (Four 16x16s)',
    recommendedMoulding: 'Natural White Oak with 8-ply white museum matting',
    hangingElevation: 'Slightly lower eye level; glass secured with shatterproof acrylic or museum glass'
  },
  executive_study: {
    roomName: 'Private Library & Executive Home Office',
    primaryFocalPoint: 'Flanked by bespoke bookshelves or behind executive desk video call backdrop',
    recommendedSizing: '20" x 30" or 24" x 36" with wide border matting',
    recommendedMoulding: 'Solid Tuscan Walnut with hand-rubbed oil finish',
    hangingElevation: '57 inches eye level; complements warm wood desk surfaces and brass desk lamps'
  }
};

const PAINT_COLOR_HARMONY_MATRIX = {
  'chantilly-lace': {
    brand: 'Benjamin Moore (OC-65)',
    description: 'Crisp, pure white with zero blue or yellow undertones',
    harmoniousMouldings: ['Natural White Oak', 'Matte Gallery Black', 'Thin Gallery White']
  },
  'revere-pewter': {
    brand: 'Benjamin Moore (HC-172)',
    description: 'Classic warm greige bridging warm and cool palettes',
    harmoniousMouldings: ['Solid Tuscan Walnut', 'Brushed Champagne Gold', 'Natural White Oak']
  },
  'white-dove': {
    brand: 'Benjamin Moore (OC-17)',
    description: 'Warm luminous off-white with delicate creamy undertones',
    harmoniousMouldings: ['Natural White Oak', 'Brushed Champagne Gold', 'Deep Shadowbox Float']
  },
  'hale-navy': {
    brand: 'Benjamin Moore (HC-154)',
    description: 'Deep, dramatic heritage navy blue',
    harmoniousMouldings: ['Brushed Champagne Gold', 'Warm Brass', 'Natural White Oak']
  },
  'ammonite': {
    brand: 'Farrow & Ball (No. 274)',
    description: 'Subtle, understated chalky architectural grey',
    harmoniousMouldings: ['Natural White Oak', 'Thin Gallery White', 'Solid Tuscan Walnut']
  }
};

// --- PART 4: FINANCIAL LEDGER & 13% HST REMITTANCE ---
/**
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 4: Custom Framing Financial Ledger & Ontario 13% HST Remittance
 */



const WHITE_GLOVE_INSTALLATION_FEES = {
  OAKVILLE_BURLINGTON: { feeCad: 175.00, description: 'White-glove curator delivery and dual-point laser-level wall installation' },
  TORONTO_GTA: { feeCad: 225.00, description: 'White-glove delivery and French cleat mounting across Greater Toronto Area' },
  CLIENT_SELF_INSTALL: { feeCad: 0.00, description: 'Packed in reinforced wooden art crate with heavy-duty mounting hardware and leveling vial included' }
};

class WallArtFinancialLedger {
  /**
   * Calculate complete custom framing investment ledger with Ontario 13% HST
   */
  static calculateInvestment({
    sizeKey = '24x36',
    includeMuseumGlass = true,
    installationLocation = 'OAKVILLE_BURLINGTON'
  }) {
    const sizeData = DIMENSIONS_CATALOG[sizeKey] || DIMENSIONS_CATALOG['24x36'];
    const baseFramePrice = sizeData.retailPriceCad;

    // Glass fee
    let glassFeeCad = 0;
    if (includeMuseumGlass) {
      if (sizeKey === '11x14') glassFeeCad = 75.00;
      else if (sizeKey === '16x24') glassFeeCad = 125.00;
      else if (sizeKey === '20x30') glassFeeCad = 165.00;
      else if (sizeKey === '24x36') glassFeeCad = 220.00;
      else if (sizeKey === '30x40' || sizeKey === '30x45') glassFeeCad = 280.00;
      else if (sizeKey === '40x60') glassFeeCad = 450.00;
      else if (sizeKey === 'triptych-three-16x20') glassFeeCad = 285.00;
      else if (sizeKey === 'grid-four-16x16') glassFeeCad = 240.00;
      else glassFeeCad = 150.00;
    }

    const installData = WHITE_GLOVE_INSTALLATION_FEES[installationLocation] || WHITE_GLOVE_INSTALLATION_FEES.OAKVILLE_BURLINGTON;
    const installFeeCad = installData.feeCad;

    const subtotal = Math.round((baseFramePrice + glassFeeCad + installFeeCad) * 100) / 100;
    const ontarioHst = Math.round(subtotal * 0.13 * 100) / 100;
    const grandTotal = Math.round((subtotal + ontarioHst) * 100) / 100;

    return {
      sizeKey,
      dimensionsLabel: sizeData.dimensions,
      baseFramePriceCad: baseFramePrice,
      includeMuseumGlass,
      museumGlassUpgradeCad: glassFeeCad,
      installationOption: installData.description,
      installationFeeCad: installFeeCad,
      subtotalCad: subtotal,
      ontarioHst13Cad: ontarioHst,
      grandTotalCad: grandTotal,
      currency: 'CAD',
      turnaroundProductionDays: 14,
      deliveryMethod: 'Insured White-Glove Hand Delivery'
    };
  }
}

// --- PART 5: CURATOR INSTALLATION RUNBOOK & HARDWARE ---
/**
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 5: Professional Curator Hanging Runbook & Hardware Protocols
 */

const CURATOR_INSTALLATION_STEPS = [
  {
    stepNumber: 1,
    phase: 'Spatial Measurement & 57-Inch Centerline Calculation',
    instruction: 'Measure wall height and locate horizontal center of furniture below. Calculate frame height divided by two, add 57 inches from the floor, and subtract the drop of the hanging wire or cleat bracket to find the exact nail/screw anchor point.'
  },
  {
    stepNumber: 2,
    phase: 'Wall Stud Detection & Substrate Inspection',
    instruction: 'Scan wall with a digital multi-sensor stud finder. When studs align with frame width, secure directly into solid timber using 2.5-inch countersunk wood screws.'
  },
  {
    stepNumber: 3,
    phase: 'Hardware Selection by Weight & Scale',
    instruction: 'For pieces 16x24 to 20x30 (<15 lbs), deploy dual 50-lb rated Floreat brass picture hooks spaced 8 inches apart to permanently eliminate frame tilting. For statement pieces 24x36 and larger (>20 lbs), install an interlocking heavy-duty aluminum French cleat (Z-bar).'
  },
  {
    stepNumber: 4,
    phase: 'Level Calibration & Protective Bumpers',
    instruction: 'Rest a 24-inch magnetic torpedo level along top frame moulding. Apply clear silicone dome bumpers to the lower rear corners of the frame to prevent wall scuffing and permit vertical air circulation behind the print.'
  },
  {
    stepNumber: 5,
    phase: 'Museum Glass Final Curation & Dust Removal',
    instruction: 'Never spray ammonia-based window cleaner directly onto museum glass. Mist ammonia-free optical cleaner onto a clean microfiber cloth and gently buff away fingerprints with circular strokes.'
  }
];

class CuratorInstallationRunbook {
  static getRunbook() {
    return CURATOR_INSTALLATION_STEPS;
  }

  static getHardwareRecommendations(sizeKey = '24x36') {
    const isLarge = sizeKey.includes('24x36') || sizeKey.includes('30x40') || sizeKey.includes('30x45') || sizeKey.includes('40x60');
    if (isLarge) {
      return {
        hardwareType: 'Interlocking Aluminum French Cleat (Z-Bar)',
        weightCapacityLbs: 100,
        studAnchorMandatory: true,
        antiTiltBenefit: '100% flush wall fit with zero shifting over time'
      };
    }
    return {
      hardwareType: 'Dual Heavy-Duty Brass Picture Hooks (Floreat Style)',
      weightCapacityLbs: 50,
      studAnchorMandatory: false,
      antiTiltBenefit: 'Two anchor points prevent uneven tilting during door vibrations'
    };
  }
}

// --- PART 6: LUXURY HTML & MARKDOWN RENDERERS ---
/**
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 6: Luxury HTML Wall Art Mockup Dossier & Markdown Runbook Renderers
 */

class WallArtHtmlRenderer {
  /**
   * Render luxury editorial HTML wall art visualization mockup dossier
   */
  static renderMockupHtml(data) {
    const frameOptions = (data.recommendedFraming || []).map(f => `<li style="margin-bottom: 6px;"><strong>${f}</strong></li>`).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Interior Spatial Visualization — ${data.recommendedFormat}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #faf9f6; font-family: -apple-system, BlinkMacSystemFont, Arial, serif; color: #232220; line-height: 1.7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 15px; background-color: #faf9f6;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; background-color: #ffffff; border: 1px solid #eae5df; border-radius: 4px; padding: 40px; box-shadow: 0 4px 18px rgba(0,0,0,0.03);">
          <tr>
            <td align="center" style="border-bottom: 1px solid #f2ede8; padding-bottom: 24px;">
              <span style="font-family: Georgia, serif; font-size: 20px; letter-spacing: 0.18em; text-transform: uppercase; color: #1a1918;">HAFSA NOREEN</span>
              <div style="font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #8e8880; margin-top: 6px;">Interior Spatial Visualization &amp; Fine-Art Framing</div>
              <div style="width: 32px; height: 1px; background-color: #c5a059; margin: 12px auto 0 auto;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px 4px 10px 4px;">
              <h2 style="font-family: Georgia, serif; font-size: 22px; font-weight: normal; color: #1a1918; margin-top: 0;">${data.roomType.toUpperCase()} — ${data.recommendedFormat}</h2>
              
              <!-- Frame Mockup Visual Container -->
              <div style="background-color: #f5f2ed; border: 1px solid #ded8cf; padding: 30px; margin: 20px 0; text-align: center; border-radius: 2px;">
                <div style="display: inline-block; padding: 14px; background: #ffffff; border: 10px solid #8c6d48; box-shadow: 0 8px 24px rgba(0,0,0,0.12); max-width: 85%;">
                  <div style="border: 1px solid #e0dbd3; padding: 24px; background-color: #faf9f6;">
                    <div style="font-family: Georgia, serif; font-size: 15px; color: #232220; font-style: italic;">Hafsa Noreen Archival Commission</div>
                    <div style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #8e8880; margin-top: 4px;">Museum Cotton Rag &bull; Tru Vue Glass</div>
                  </div>
                </div>
                <div style="font-size: 12px; color: #736d64; margin-top: 14px;">Simulated Proportion on ${data.wallColor} Wall Surface</div>
              </div>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Spatial Placement &amp; Curator Hanging Guidance</h3>
              <p style="font-size: 14px; color: #4a453e;">${data.spatialPlacementGuidance}</p>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Recommended Handcrafted Mouldings</h3>
              <ul style="font-size: 14px; color: #3c3a37; padding-left: 20px;">${frameOptions}</ul>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Museum Print &amp; Glazing Specifications</h3>
              <p style="font-size: 13px; color: #5a5752;">
                <strong>Print Substrate:</strong> ${data.printSubstrate}<br>
                <strong>Glazing Protection:</strong> ${data.museumGlass}<br>
                <strong>Proofing Status:</strong> ${data.digitalProofStatus}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 24px; border-top: 1px solid #f2ede8; font-size: 12px; color: #8e8880; line-height: 1.6; text-align: center;">
              Hafsa Noreen Photography Atelier • In-Home Curator Installations across Oakville, Burlington &amp; Toronto
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

class WallArtMarkdownRenderer {
  /**
   * Render clean markdown summary of wall art installation guide
   */
  static renderCuratorRunbookMarkdown(data) {
    return `# HAFSA NOREEN PHOTOGRAPHY — WALL ART SPECIFICATION
## ${data.recommendedFormat} (${data.roomType.toUpperCase()})

**Target Wall Surface:** ${data.wallColor}
**Curator Hanging Directive:** ${data.spatialPlacementGuidance}

---
### Handcrafted Frame Mouldings
${(data.recommendedFraming || []).map(f => `- ${f}`).join('\n')}

### Print Chemistry & Glazing
- **Substrate:** ${data.printSubstrate}
- **Glazing:** ${data.museumGlass}
- **Proofing Status:** ${data.digitalProofStatus}

---
*Oakville Atelier Fine-Art Framing Services*`;
  }
}

// --- PART 7: CORE ENGINE ORCHESTRATOR ---
/**
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 7: Core Engine Class & Orchestrator
 */








class WallArtVisualizer {
  static getDimensionsGuide() {
    return DIMENSIONS_CATALOG;
  }

  static validateParams(params) {
    if (!params || typeof params !== 'object') {
      throw new Error('WallArtVisualizer: Execution parameters must be an object.');
    }
    return true;
  }

  static execute(params = {}) {
    this.validateParams(params);

    const {
      photoUrl = null,
      wallColor = 'warm ivory',
      roomType = 'living room',
      preferredSize = '24x36',
      includeMuseumGlass = true,
      installationLocation = 'OAKVILLE_BURLINGTON'
    } = params;

    const guides = this.getDimensionsGuide();
    const sizeKeyNorm = (preferredSize || '24x36').toLowerCase().replace(/\s+/g, '');
    const matchedGuide = guides[sizeKeyNorm] || guides['24x36'];

    const roomKey = (roomType || 'living_room').toLowerCase().replace(/\s+/g, '_');
    const roomProfile = ROOM_PLACEMENT_PROFILES[roomKey] || ROOM_PLACEMENT_PROFILES.living_room;

    const financialLedger = WallArtFinancialLedger.calculateInvestment({
      sizeKey: sizeKeyNorm,
      includeMuseumGlass,
      installationLocation
    });

    const hardware = CuratorInstallationRunbook.getHardwareRecommendations(sizeKeyNorm);
    const runbook = CuratorInstallationRunbook.getRunbook();

    const legacyPayload = {
      roomType,
      wallColor,
      recommendedFormat: matchedGuide.dimensions,
      spatialPlacementGuidance: `In the ${roomType}: ${matchedGuide.idealWallSpace}. Center of artwork should hang at 57 inches (eye level) from the floor.`,
      recommendedFraming: matchedGuide.frameOptions,
      printSubstrate: 'Archival 310gsm Hahnemühle 100% cotton rag with 12-color pigment inks (200-year lightfast rating)',
      museumGlass: 'Anti-reflective 99% UV-blocking Tru Vue museum glass',
      digitalProofStatus: photoUrl ? 'High-resolution visualization ready for client review' : 'Awaiting image selection from private gallery',
      preferredSize: sizeKeyNorm,
      sizeDetails: matchedGuide,
      roomProfile,
      financialLedger,
      hardware,
      curatorRunbook: runbook,
      spatialRules: SPATIAL_CURATOR_RULES
    };

    const htmlMockup = WallArtHtmlRenderer.renderMockupHtml(legacyPayload);
    const markdownRunbook = WallArtMarkdownRenderer.renderCuratorRunbookMarkdown(legacyPayload);

    return {
      ...legacyPayload,
      renderedOutputs: {
        htmlMockup,
        markdownRunbook
      }
    };
  }

  static toHtml(data) {
    return WallArtHtmlRenderer.renderMockupHtml(data);
  }

  static toMarkdown(data) {
    return WallArtMarkdownRenderer.renderCuratorRunbookMarkdown(data);
  }
}

// --- PART 8: DIAGNOSTIC TEST SUITE ---
/**
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 8: Automated 12-Check Diagnostic Test Suite
 */

class WallArtVisualizerDiagnostics {
  static runDiagnostics(engine) {
    const results = {
      timestamp: new Date().toISOString(),
      testsRun: 0,
      passed: true,
      checks: {}
    };

    // Test 1: 24x36 Living Room
    const lr24 = engine.execute({ preferredSize: '24x36', roomType: 'living room' });
    results.testsRun++;
    results.checks.livingRoom24x36 = {
      passed: Boolean(lr24.recommendedFormat.includes('24" x 36"') && lr24.spatialPlacementGuidance.includes('57 inches')),
      format: lr24.recommendedFormat
    };

    // Test 2: 16x24 Entryway
    const entry16 = engine.execute({ preferredSize: '16x24', roomType: 'entryway foyer' });
    results.testsRun++;
    results.checks.entryway16x24 = {
      passed: Boolean(entry16.recommendedFormat.includes('16" x 24"') && entry16.recommendedFraming.includes('Natural White Oak')),
      format: entry16.recommendedFormat
    };

    // Test 3: 30x45 Grand Fireplace Mantel
    const mantel30 = engine.execute({ preferredSize: '30x45', roomType: 'formal drawing room' });
    results.testsRun++;
    results.checks.mantel30x45 = {
      passed: Boolean(mantel30.recommendedFormat.includes('30" x 45"') && mantel30.sizeDetails.retailPriceCad >= 1400),
      priceCad: mantel30.sizeDetails.retailPriceCad
    };

    // Test 4: Triptych Three 16x20s
    const trip = engine.execute({ preferredSize: 'triptych-three-16x20', roomType: 'hallway' });
    results.testsRun++;
    results.checks.triptychGallery = {
      passed: Boolean(trip.recommendedFormat.includes('53"') && trip.recommendedFraming.includes('Uniform Thin Gallery White')),
      format: trip.recommendedFormat
    };

    // Test 5: Grid Four 16x16s
    const grid = engine.execute({ preferredSize: 'grid-four-16x16', roomType: 'dining room' });
    results.testsRun++;
    results.checks.gridFourSymmetry = {
      passed: Boolean(grid.recommendedFormat.includes('Four 16" x 16"') && grid.sizeDetails.aspectRatio.includes('Square')),
      format: grid.recommendedFormat
    };

    // Test 6: Hahnemühle Archival Cotton Rag Substrate
    results.testsRun++;
    results.checks.hahnemuhleSubstrate = {
      passed: Boolean(lr24.printSubstrate.includes('Hahnemühle') && lr24.printSubstrate.includes('200-year')),
      substrate: lr24.printSubstrate
    };

    // Test 7: Tru Vue Museum Glass Specification
    results.testsRun++;
    results.checks.truVueMuseumGlass = {
      passed: Boolean(lr24.museumGlass.includes('99% UV-blocking') && lr24.museumGlass.includes('Tru Vue')),
      glass: lr24.museumGlass
    };

    // Test 8: 2/3 Furniture Proportion Rule
    results.testsRun++;
    results.checks.spatialCuratorRules = {
      passed: Boolean(lr24.spatialRules.FURNITURE_PROPORTION_RULE && lr24.spatialRules.MUSEUM_EYE_LEVEL_RULE.includes('57 inches')),
      eyeLevel: lr24.spatialRules.MUSEUM_EYE_LEVEL_RULE
    };

    // Test 9: French Cleat Hardware for 24x36
    results.testsRun++;
    results.checks.frenchCleatHardware = {
      passed: Boolean(lr24.hardware.hardwareType.includes('French Cleat') && lr24.hardware.studAnchorMandatory === true),
      hardware: lr24.hardware.hardwareType
    };

    // Test 10: Custom Framing Financial Ledger with 13% Ontario HST
    const fin = lr24.financialLedger;
    results.testsRun++;
    results.checks.financialLedgerHST = {
      passed: fin.subtotalCad > 0 && fin.ontarioHst13Cad > 0 && fin.grandTotalCad === Math.round((fin.subtotalCad + fin.ontarioHst13Cad) * 100) / 100,
      grandTotalCad: fin.grandTotalCad
    };

    // Test 11: White-Glove Installation Option
    results.testsRun++;
    results.checks.whiteGloveInstallation = {
      passed: Boolean(fin.installationOption.includes('White-glove') && fin.installationFeeCad === 175.00),
      installFee: fin.installationFeeCad
    };

    // Test 12: Luxury HTML Mockup & Markdown Runbook
    results.testsRun++;
    results.checks.htmlAndMarkdownRendering = {
      passed: Boolean(
        lr24.renderedOutputs.htmlMockup.includes('HAFSA NOREEN') &&
        lr24.renderedOutputs.htmlMockup.includes('24" x 36"') &&
        lr24.renderedOutputs.markdownRunbook.includes('# HAFSA NOREEN PHOTOGRAPHY')
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
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 9: Boundary Edge Cases & 50-Mockup Simulation Benchmark
 */



class WallArtVisualizerSimulations {
  static runBoundaryTests(engine) {
    const boundary = [];

    // 1. Empty parameters defaults safely
    try {
      const res = engine.execute({});
      boundary.push({ test: 'Empty parameters defaults safely', passed: Boolean(res && res.recommendedFormat.includes('24" x 36"')) });
    } catch (e) {
      boundary.push({ test: 'Empty parameters defaults safely', passed: false, error: e.message });
    }

    // 2. Unknown sizeKey falls back to 24x36
    const unkSize = engine.execute({ preferredSize: 'monumental_999x999' });
    boundary.push({
      test: 'Unknown sizeKey fallback to 24x36',
      passed: unkSize.recommendedFormat.includes('24" x 36"')
    });

    // 3. Unknown roomType falls back to living room
    const unkRoom = engine.execute({ roomType: 'underground_wine_cellar_bunker' });
    boundary.push({
      test: 'Unknown roomType handles safely',
      passed: unkRoom.spatialPlacementGuidance.length > 20
    });

    // 4. Custom photo URL passes through to proof status
    const customPhoto = engine.execute({ photoUrl: 'https://hafsanoreen.com/client-proofs/sample.jpg' });
    boundary.push({
      test: 'Custom photo URL ready for review',
      passed: customPhoto.digitalProofStatus.includes('ready for client review')
    });

    return {
      totalBoundaryTests: boundary.length,
      allBoundaryPassed: boundary.every(b => b.passed),
      results: boundary
    };
  }

  static runBatchSimulation(engine, count = 50) {
    const sizeKeys = Object.keys(DIMENSIONS_CATALOG);
    const rooms = ['living room', 'dining room', 'master bedroom', 'entryway foyer', 'nursery'];
    const wallColors = ['Chantilly Lace', 'Revere Pewter', 'White Dove', 'Hale Navy', 'Ammonite'];

    const mockups = [];

    for (let i = 1; i <= count; i++) {
      const sizeKey = sizeKeys[i % sizeKeys.length];
      const roomType = rooms[i % rooms.length];
      const wallColor = wallColors[i % wallColors.length];

      const res = engine.execute({
        preferredSize: sizeKey,
        roomType,
        wallColor
      });

      mockups.push(res);
    }

    const allHaveDimensions = mockups.every(m => m.recommendedFormat && m.recommendedFormat.length > 5);
    const allHaveFinancials = mockups.every(m => m.financialLedger && m.financialLedger.grandTotalCad > 0);
    const allHaveHtml = mockups.every(m => m.renderedOutputs && m.renderedOutputs.htmlMockup.length > 500);

    return {
      totalSimulated: count,
      allHaveDimensions,
      allHaveFinancials,
      allHaveHtml,
      allPassed: allHaveDimensions && allHaveFinancials && allHaveHtml,
      sampleSize: mockups[0].recommendedFormat
    };
  }
}

// --- PART 10: GALLERY WALL BLUEPRINTS ---
/**
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 10: Multi-Piece Gallery Wall Blueprints & Curated Cluster Layouts
 */

const GALLERY_WALL_TEMPLATES = {
  STORYTELLING_TRIPTYCH: {
    templateId: 'storytelling_triptych',
    name: 'The Narrative Storytelling Triptych',
    frameCount: 3,
    frameDimensions: 'Three 16" x 20" frames with 2.5" spacing',
    totalSpanInches: 53,
    storytellingRoles: [
      'Frame 1 (Left - Context): Wide environmental landscape establishing the venue grounds or open sky',
      'Frame 2 (Center - Emotional Anchor): Direct couple or family portrait with intimate eye contact',
      'Frame 3 (Right - Tactile Detail): Macro bouquet, hand connection, or delicate veil movement'
    ],
    idealPlacement: 'Long hallway art gallery corridors or directly above a dining room credenza'
  },

  GENERATIONAL_FOUR_GRID: {
    templateId: 'generational_four_grid',
    name: 'The Generational Heritage 2x2 Grid',
    frameCount: 4,
    frameDimensions: 'Four 16" x 16" square frames with 2" uniform horizontal and vertical spacing',
    totalSpanInches: 34,
    storytellingRoles: [
      'Top Left: Couple timeless romantic portrait',
      'Top Right: First child or sibling connection',
      'Bottom Left: Second child or newborn detail',
      'Bottom Right: Full family celebratory laughing snapshot'
    ],
    idealPlacement: 'Square architectural walls, cozy dining nooks, or home office backdrops'
  },

  STAIRCASE_CASCADE_SIX: {
    templateId: 'staircase_cascade_six',
    name: 'The Architectural Staircase Cascade',
    frameCount: 6,
    frameDimensions: 'Staggered mix of three 11" x 14" and three 16" x 20" frames',
    totalSpanInches: 72,
    storytellingRoles: [
      'Frames follow the ascending diagonal rake of the staircase handrail (exactly 57" above each stair tread)',
      'Chronological storytelling ascending from engagement through wedding and family milestones'
    ],
    idealPlacement: 'Main central foyer two-story staircase ascending walls'
  },

  SALON_SYMMETRIC_NINE: {
    templateId: 'salon_symmetric_nine',
    name: 'The Grand Atelier 3x3 Salon Matrix',
    frameCount: 9,
    frameDimensions: 'Nine 10" x 10" square frames spaced 1.75" apart',
    totalSpanInches: 33.5,
    storytellingRoles: [
      'Detailed micro-moments: rings, laughter, footsteps, architecture, whispers, florals, sunset, veil, embrace'
    ],
    idealPlacement: 'Formal library or private master bedroom sitting lounge'
  }
,

  PANORAMIC_DOUBLE_HERITAGE: {
    templateId: 'panoramic_double_heritage',
    name: 'The Master Bedroom Sister Pair',
    frameCount: 2,
    frameDimensions: 'Two matching 20" x 30" vertical frames spaced 3" apart (total 43" span)',
    storytellingRoles: [
      'Left Frame: Bride or partner intimate portrait under soft window light',
      'Right Frame: Couple golden hour embrace along Lake Ontario'
    ],
    idealPlacement: 'Centered precisely 6 inches above a king or queen master bed headboard'
  },

  PETITE_STUDY_STACKED_TRIO: {
    templateId: 'petite_study_stacked_trio',
    name: 'The Executive Columnar Stack',
    frameCount: 3,
    frameDimensions: 'Three 11" x 14" frames vertically aligned with 2" vertical gap',
    totalSpanInches: 14,
    storytellingRoles: [
      'Top: Monochromatic architectural detail',
      'Middle: Candid portrait laughter',
      'Bottom: Macro hands or wedding ring detail'
    ],
    idealPlacement: 'Narrow architectural pillar, beside executive desk, or between library windows'
  }

};

class GalleryWallBlueprintBuilder {
  static getTemplate(templateId = 'storytelling_triptych') {
    const key = (templateId || '').toUpperCase().replace(/-/g, '_');
    return GALLERY_WALL_TEMPLATES[key] || GALLERY_WALL_TEMPLATES.STORYTELLING_TRIPTYCH;
  }

  static listTemplates() {
    return Object.keys(GALLERY_WALL_TEMPLATES).map(k => ({
      key: k,
      name: GALLERY_WALL_TEMPLATES[k].name,
      frames: GALLERY_WALL_TEMPLATES[k].frameCount,
      totalSpan: `${GALLERY_WALL_TEMPLATES[k].totalSpanInches} inches`
    }));
  }
}

// --- PART 11: MUSEUM LIGHTING & CONSERVATION GUIDELINES ---
/**
 * HAFFU — Wall Art Scale & Interior Spatial Visualization Engine
 * Part 11: Museum Lighting Physics, Lux Thresholds & Conservation Standards
 */

const MUSEUM_CONSERVATION_STANDARDS = {
  LIGHTING_COLOR_TEMPERATURE: {
    recommendedK: '2700K – 3000K Warm White',
    colorRenderingIndex: 'CRI 95+ (High-Fidelity R9 Red Reproduction)',
    guidance: 'Avoid harsh 5000K cool blue office lighting which washes out natural skin tones and Portra film warmth. Choose warm directional 2700K LED picture lights.'
  },

  ILLUMINANCE_LIMITS: {
    recommendedLux: '50 – 150 Lux on artwork surface',
    guidance: 'Museum archival standards limit continuous direct light on fine-art paper to 150 lux to eliminate photochemical fading over decades.'
  },

  FIREPLACE_MANTEL_THERMAL_BUFFER: {
    minimumClearanceInches: 12,
    guidance: 'Ensure fireplace has a substantial non-combustible mantel shelf projecting at least 6 inches to deflect rising hot air currents away from framed cotton paper.'
  },

  RELATIVE_HUMIDITY_CONTROL: {
    optimalRangePercent: '40% – 55% Relative Humidity',
    guidance: 'Avoid hanging fine-art prints on poorly insulated exterior walls or directly adjacent to unvented steam bathrooms to prevent paper cockling or moisture condensation inside glass.'
  }
};

class MuseumConservationOfficer {
  static evaluateEnvironment({ luxLevel = 100, colorTempK = 2700, isDirectSunlight = false, nearFireplace = false }) {
    const warnings = [];

    if (isDirectSunlight) {
      warnings.push('CRITICAL: Direct unfiltered solar rays will accelerate organic pigment degradation. Tru Vue Museum Glass required, or relocate artwork to adjacent indirect wall.');
    }
    if (luxLevel > 250) {
      warnings.push('ADVISORY: Ambient light exceeds museum standards (>250 Lux). Reduce spotlight wattage or install an inline dimmer switch.');
    }
    if (nearFireplace) {
      warnings.push('THERMAL NOTICE: Verify fireplace mantel shelf deflects rising heat currents. Minimum 12-inch clearance required above mantel shelf.');
    }

    return {
      isSafeForArchivalDisplay: warnings.length === 0,
      warningsCount: warnings.length,
      warnings,
      conservationStandards: MUSEUM_CONSERVATION_STANDARDS
    };
  }
}

// Diagnostic delegation and test suite wiring
WallArtVisualizer.runDiagnostics = function() {
  return WallArtVisualizerDiagnostics.runDiagnostics(this);
};

WallArtVisualizer.runFullTestSuite = function() {
  const diag = WallArtVisualizerDiagnostics.runDiagnostics(this);
  const boundary = WallArtVisualizerSimulations.runBoundaryTests(this);
  const sim = WallArtVisualizerSimulations.runBatchSimulation(this, 50);
  return {
    engine: "WallArtVisualizer",
    timestamp: new Date().toISOString(),
    allPassed: diag.passed && boundary.allBoundaryPassed && sim.allPassed,
    diagnostics: diag,
    boundaryTests: boundary,
    batchSimulation: sim
  };
};

// Static Helper & Constant Extensions
WallArtVisualizer.DIMENSIONS_CATALOG = DIMENSIONS_CATALOG;
WallArtVisualizer.SPATIAL_CURATOR_RULES = SPATIAL_CURATOR_RULES;
WallArtVisualizer.ARCHIVAL_SUBSTRATES = ARCHIVAL_SUBSTRATES;
WallArtVisualizer.HANDCRAFTED_MOULDINGS = HANDCRAFTED_MOULDINGS;
WallArtVisualizer.GLAZING_STANDARDS = GLAZING_STANDARDS;
WallArtVisualizer.ROOM_PLACEMENT_PROFILES = ROOM_PLACEMENT_PROFILES;
WallArtVisualizer.PAINT_COLOR_HARMONY_MATRIX = PAINT_COLOR_HARMONY_MATRIX;
WallArtVisualizer.GALLERY_WALL_TEMPLATES = GALLERY_WALL_TEMPLATES;
WallArtVisualizer.MUSEUM_CONSERVATION_STANDARDS = MUSEUM_CONSERVATION_STANDARDS;
WallArtVisualizer.calculateInvestment = function(opts) { return WallArtFinancialLedger.calculateInvestment(opts); };
WallArtVisualizer.getGalleryTemplate = function(id) { return GalleryWallBlueprintBuilder.getTemplate(id); };
WallArtVisualizer.evaluateEnvironment = function(opts) { return MuseumConservationOfficer.evaluateEnvironment(opts); };

module.exports = WallArtVisualizer;
