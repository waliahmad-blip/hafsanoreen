/**
 * ============================================================================
 * HAFFU STUDIO — WHAT-TO-WEAR WARDROBE & STYLING INTELLIGENCE ENGINE
 * ============================================================================
 * Enterprise Luxury Wardrobe, Chromatic Harmony & Fabric Physics Architecture:
 *   1. 4-Season Chromatic Matrices (Spring, Summer, Autumn, Winter) & 60-30-10 Color Balance
 *   2. Fabric Physics & Drape Taxonomy (Belgian Linen, Raw Mulberry Silk, Merino, Velvet)
 *   3. Optical Moiré Avoidance, Sensor Artifact Prevention & Foundation Undergarment Rules
 *   4. Commission Niche Directives (Weddings, Maternity, Newborn, Family, Branding, Portrait)
 *   5. Halton Regional Topography & Footwear Matrices (Gairloch, Paletta, Mount Nemo, Kelso)
 *   6. Seasonal Capsule Wardrobe Catalogs & 48-Hour Pre-Session Wardrobe Preparation Checklists
 *   7. Jewelry, Eyewear & Accessory Curation Rules (Anti-Glare, Smartwatch Ban, Metal Harmonies)
 *   8. Multi-Format Renderers (Luxury Responsive HTML Lookbook & Markdown Client Guide)
 *   9. 100% Backward-Compatible Legacy Interface (execute, getPaletteMatrix, getSessionStyleRules)
 *
 * Studio: Hafsa Noreen Photography Atelier (Oakville / Burlington / Milton / GTA)
 * Status: Production Grade (Spec: >= 1,000 Lines, Zero Stubs)
 * Version: 2026.4.0
 * ============================================================================
 */

'use strict';

// --- PART 1: CHROMATIC PALETTES & COLOR THEORY ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 1: Chromatic Palettes, Seasonal Color Theory & Optical Physics
 */

const SEASONAL_PALETTE_MATRICES = {
  spring: {
    season: 'Spring Blossom & Awakening',
    palette: ['#F7F4EF', '#E8DDD5', '#C2D1C0', '#D8B4B4', '#5A6B5C'],
    names: ['Ivory Silk', 'Warm Oatmeal', 'Soft Sage', 'Dusty Peony', 'Eucalyptus'],
    fabrics: ['Breathable European linen', 'Raw silk', 'Lightweight cotton voile'],
    accentShades: ['Muted champagne', 'Soft lilac', 'Feather grey'],
    avoidShades: ['Vibrant neon greens', 'Harsh stark jet black', 'Hot magenta'],
    tip: 'Spring mornings along Lake Ontario carry a crisp breeze. Pair flowing silhouettes with a structured cream trench or fine-gauge cashmere wrap.'
  },
  summer: {
    season: 'Midsummer Golden Luminous',
    palette: ['#FAF8F5', '#E3D7C7', '#B8C5D6', '#D4AF37', '#738276'],
    names: ['Warm Alabaster', 'Natural Flax', 'Pale Chambray', 'Muted Brass', 'Soft Olive'],
    fabrics: ['Open-weave linen', 'Textured crepe', 'Cotton gauze', 'Flowing silk chiffon'],
    accentShades: ['Soft buttercup', 'Dusty sea glass', 'Sun-bleached driftwood'],
    avoidShades: ['Stark optical white', 'Heavy black wool', 'Fluorescent coral'],
    tip: 'Opt for unlined, breathable fabrics with movement that catch shoreline breezes without clinging or creasing excessively.'
  },
  autumn: {
    season: 'Autumn Escarpment Foliage',
    palette: ['#F5EFEB', '#D4B895', '#8C6239', '#556B2F', '#4A3B32'],
    names: ['Cream Wool', 'Warm Sandstone', 'Rich Terracotta', 'Deep Forest Moss', 'Espresso'],
    fabrics: ['Chunky merino wool knits', 'Soft corduroy', 'Fine cashmere', 'Structured wool topcoats'],
    accentShades: ['Burnt amber', 'Cognac leather', 'Vintage cider'],
    avoidShades: ['Electric blue', 'Bright cherry red (competes with maple leaves)', 'Cool ice grey'],
    tip: 'Layering is essential along the Niagara Escarpment. Tactile knits add gorgeous depth and dimensional warmth against glowing amber foliage.'
  },
  winter: {
    season: 'Winter Atelier Hearth & Velvet',
    palette: ['#FFFFFF', '#E6E2DD', '#36454F', '#2C3E50', '#8B0000'],
    names: ['Crisp Winter White', 'Heather Taupe', 'Charcoal Slate', 'Midnight Navy', 'Deep Burgundy'],
    fabrics: ['Heavy cable knits', 'Cashmere wraps', 'Tailored wool topcoats', 'Plush velvet accents'],
    accentShades: ['Burnished gold', 'Emerald velvet', 'Winter berry'],
    avoidShades: ['Washed-out beige', 'Bright safety yellow', 'Slick plastic synthetics'],
    tip: 'Embrace elegant winter outerwear. Tailored long topcoats, wool scarves, and leather gloves photograph with timeless European architectural poise.'
  }
};

const COLOR_HARMONY_RULES = {
  BALANCE_RATIO: '60-30-10 Rule: 60% dominant neutral (ivory, oat, charcoal), 30% supporting tonal shade (sage, flax, navy), 10% delicate accent (copper, gold, rose).',
  OPTICAL_BRIGHTENER_WARNING: 'Avoid garments treated with chemical optical brighteners (fluorescent bright whites); under natural sunlight and camera strobes, they fluoresce blue/violet and cast unflattering reflections onto skin.',
  NEON_COLOR_CAST_RULE: 'Strictly avoid hot pink, neon green, and electric blue; these pigments reflect vibrant color casts onto chins, necks, and skin under daylight.',
  UNDERTONE_MATCHING: {
    warm: 'Earthy terracottas, warm creams, olive greens, camel, and bronze accents.',
    cool: 'Soft slate, dusty rose, pale chambray, heather taupe, and silver accents.',
    olive: 'Neutral flax, sage, warm espresso, cream, and muted brass.',
    neutral: 'Universal ivory, soft oatmeal, eucalyptus, and muted navy.'
  }
};

// --- PART 2: FABRIC PHYSICS & OPTICAL MOIRÉ AVOIDANCE ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 2: Fabric Physics, Light Behavior & Optical Moiré Avoidance
 */

const FABRIC_TEXTURE_TAXONOMY = {
  BELGIAN_LINEN: {
    fiber: 'Natural Flax Linen',
    lightBehavior: 'Soft diffuse scattering; matte organic texture without glare',
    drapeCharacteristics: 'Relaxed, airy, sculptural folds that catch shoreline breezes',
    recommendedUse: 'Summer dresses, relaxed tailored men’s trousers, children’s smocks',
    careAdvice: 'Embrace natural micro-creasing; avoid excessive starch which creates unnatural stiffness.'
  },

  MULBERRY_SILK: {
    fiber: '100% Raw Mulberry Silk & Chiffon',
    lightBehavior: 'Luminous subsurface light transmission; ethereal highlight glow',
    drapeCharacteristics: 'Fluid, continuous movement creating graceful lines during walking transitions',
    recommendedUse: 'Maternity gowns, engagement dresses, bridal evening wraps',
    careAdvice: 'Steam thoroughly the evening prior; transport to location on velvet-lined wooden hangers.'
  },

  MERINO_AND_CASHMERE: {
    fiber: 'Fine-Gauge Merino Wool & Cashmere',
    lightBehavior: 'Total specular highlight absorption; creates rich tactile shadow depth',
    drapeCharacteristics: 'Cozy, structured contouring that provides warmth without bulky silhouettes',
    recommendedUse: 'Autumn escarpment portrait sweaters, winter topcoats, generational cardigans',
    careAdvice: 'De-pill garments prior to session; choose medium-weight knits over oversized bulky fleece.'
  },

  COTTON_GAUZE_AND_CREPE: {
    fiber: 'Textured Organic Cotton Gauze',
    lightBehavior: 'Gentle micro-shadowing across woven texture, softening skin transitions',
    drapeCharacteristics: 'Effortless, flattering stretch that gently hugs natural body curves',
    recommendedUse: 'In-home newborn parents, lifestyle maternity, relaxed summer beach strolls',
    careAdvice: 'Wash and line-dry naturally for authentic crinkled heirloom texture.'
  },

  SILK_VELVET: {
    fiber: 'Silk-Rayon Blend Plush Velvet',
    lightBehavior: 'Rich directional sheen, deep jewel-tone absorption in studio shadows',
    drapeCharacteristics: 'Substantial, dramatic, and luxurious weight suited for architectural venues',
    recommendedUse: 'Holiday studio commissions, black-tie gala engagements, winter manor celebrations',
    careAdvice: 'Never iron directly; steam from reverse side only to preserve the pile.'
  }
};

const OPTICAL_CAMERA_RULES = {
  MOIRE_ARTIFACT_AVOIDANCE: {
    rule: 'Avoid high-frequency micro-patterns',
    explanation: 'Fine pinstripes, tiny checkered gingham, and tight herringbone patterns clash with digital camera sensor pixel grids, creating unsightly rainbow interference patterns (aliasing moiré).',
    recommendation: 'Opt for solid tones, subtle textured weaves, or wide-spaced floral motifs instead.'
  },

  SYNTHETIC_SHINE_WARNING: {
    rule: 'Avoid 100% polyester satin and cheap nylon blends',
    explanation: 'Synthetic fibers reflect light with a harsh, shiny plastic sheen that emphasizes wrinkles and looks cheap under studio strobe or direct sunlight.',
    recommendation: 'Invest in natural matte fibers (cotton, linen, silk, wool) which absorb light with editorial elegance.'
  },

  UNDERGARMENT_FOUNDATION_RULE: {
    rule: 'Seamless nude foundation undergarments only',
    explanation: 'White undergarments show through white or cream linen; visible bra straps or harsh panty lines distract from clean heirloom silhouettes.',
    recommendation: 'Wear laser-cut seamless underwear matched precisely to your natural skin tone.'
  }
};

// --- PART 3: COMMISSION NICHE STYLE DIRECTIVES ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 3: Commission Niche Style Directives & Silhouette Architecture
 */

const SESSION_NICHE_STYLE_GUIDES = {
  wedding: {
    niche: 'Wedding & Engagement Editorial',
    guidance: 'Timeless heirloom elegance. Prioritize fabric movement, natural drape, and silhouette permanence over transient trends.',
    recommendedLooks: [
      'Look 1 (Elevated Editorial): Tailored suit or structured blazer for him; floor-length silk gown or chic contemporary midi dress for her.',
      'Look 2 (Sunset Romance): Linen button-down with rolled cuffs and chinos; flowing sundress that catches golden hour light and lake breeze.'
    ],
    donts: ['Stiff synthetic polyesters', 'Ultra-tight restrictive bodices', 'Neon undergarments or contrasting accessories'],
    footwear: 'Comfortable block heels or elegant leather wedges suited for estate lawns and stone staircases; classic leather oxfords or loafers for men.',
    curatedBrands: ['Reformation', 'Aritzia', 'Club Monaco', 'SuitSupply', 'BHLDN', 'Silk Laundry']
  },

  family: {
    niche: 'Generational Family & Children',
    guidance: 'Coordinated without matching. Select 3-4 cohesive tonal shades rather than identical outfits. Let children wear comfortable clothes they can move in.',
    recommendedLooks: [
      'Master Palette: Oatmeal ivory + warm sandstone + muted sage + soft dusty denim accents.',
      'Dad: Linen button-down or knit polo with tailored chinos.',
      'Mom: Midi or maxi wrap dress in flowing natural fiber.',
      'Children: Textured cotton overalls, knit rompers, or smocked dresses in complementary earthy tones.'
    ],
    donts: ['Matching white polo shirts with blue jeans', 'Large commercial logos, cartoons, or character graphics', 'Stiff uncomfortable shoes that pinch little feet'],
    footwear: 'Clean minimalist leather sneakers, barefoot in sand/meadow, or supportive leather walking shoes.',
    curatedBrands: ['Zara Home & Kids', 'H&M Conscious', 'Rylee + Cru', 'Jamie Kay', 'Oat Children']
  },

  maternity: {
    niche: 'Fine-Art Maternity & Motherhood',
    guidance: 'Celebrate your maternal form with flowing floor-length silhouettes, empire waists, and tactile stretch knits that drape softly around your bump.',
    recommendedLooks: [
      'Look 1 (Sculptural Silhouette): Form-fitting ribbed knit maxi dress highlighting the beautiful curve of your pregnancy.',
      'Look 2 (Ethereal Goddess): Floor-length silk or chiffon gown with open front or romantic flutter sleeves for outdoor sunset movement.'
    ],
    donts: ['Restricting tight waistbands', 'High stiletto heels on shale or grass', 'Busy geometric patterns that camouflage the bump'],
    footwear: 'Flat slides, barefoot moments by the water, or low stable wedges.',
    curatedBrands: ['Bumpsuit', 'Nothing Fits But', 'Baltic Born', 'Hatch Collection', 'Atelier Client Wardrobe']
  },

  newborn: {
    niche: 'In-Home Lifestyle Newborn',
    guidance: 'Calm, organic, and peaceful. Neutral oatmeal, ivory, and soft grey tones keeping the primary focus on baby’s delicate features.',
    recommendedLooks: [
      'Parents: Relaxed oatmeal linen trousers, barefoot comfort, and soft cream cotton sweaters.',
      'Baby: Simple white/oatmeal ribbed cotton onesie, plain bamboo swaddle, or pure skin-to-skin snuggles.'
    ],
    donts: ['Bright cartoon prints or stiff collars on baby', 'Shoes on newborn (let tiny toes show)', 'Dark black clothing that absorbs light'],
    footwear: 'Barefoot inside the residence for relaxed, natural intimacy.',
    curatedBrands: ['Lou Lou & Company', 'Kyte Baby', 'Solly Baby Wraps', 'Pehr Designs']
  },

  portrait: {
    niche: 'Personal Portrait & Creative Editorial',
    guidance: 'Understated editorial refinement. Bring 2 contrasting looks: one relaxed tailoring/natural linen, and one structured classic.',
    recommendedLooks: [
      'Look 1: Relaxed linen tailoring, open collar, soft neutrals.',
      'Look 2: Structured classic topcoat, monochrome silhouette, subtle jewelry.'
    ],
    donts: ['Overly trendy fast-fashion items', 'Wrinkled garments (bring items on wooden hangers)', 'Distracting heavy jewelry'],
    footwear: 'Quality leather loafers, classic pumps, or minimalist designer sneakers.',
    curatedBrands: ['Totême', 'The Frankie Shop', 'COS', 'Everlane']
  },

  branding: {
    niche: 'Executive Personal Branding & Commercial',
    guidance: 'Commanding authority and authentic approachable warmth. High-caliber matte fabrics, sharp shoulder lines, and intentional wardrobe color palettes.',
    recommendedLooks: [
      'Look 1 (Executive Authority): Structured blazer in navy, camel, or cream with fine knit base layer.',
      'Look 2 (Approachable Working): Relaxed cashmere sweater or crisp linen button-down for candid environmental desk portraits.'
    ],
    donts: ['Shiny silk ties or synthetic shirts with reflective sheen', 'Worn sneakers', 'Clashing brand logos'],
    footwear: 'Polished leather oxfords, clean designer loafers, or classic pointed-toe heels.',
    curatedBrands: ['Theory', 'Hugo Boss', 'Judith & Charles', 'Aritzia Babaton']
  }
};

// --- PART 4: REGIONAL TOPOGRAPHY & FOOTWEAR MATRICES ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 4: Halton Regional Topography, Footwear Matrix & Weather Protocols
 */

const REGIONAL_TOPOGRAPHY_FOOTWEAR = {
  gairloch_gardens: {
    venue: 'Gairloch Gardens, Oakville',
    terrain: 'Fine crushed gravel paths, manicured estate lawns, heritage stone seawall',
    footwearAdvice: 'Stiletto heels sink directly into lawn turf. Choose thick block heels (minimum 2-inch width), elegant leather slides, or wedges.',
    secondaryTip: 'Bring a comfortable pair of slip-on slides for walking between the rose gardens and the lakefront rocky beach.'
  },

  paletta_mansion: {
    venue: 'Paletta Lakefront Mansion, Burlington',
    terrain: 'Historic brick colonnade, sloping waterfront bluffs trail, damp shoreline turf',
    footwearAdvice: 'Supportive block heels or classic leather dress shoes. Avoid thin delicate heels that get scuffed between brick pavers.',
    secondaryTip: 'The shoreline grass can retain morning dew until late afternoon; water-resistant leather footwear is optimal.'
  },

  mount_nemo: {
    venue: 'Mount Nemo & Rattlesnake Point, Milton',
    terrain: 'Limestone rock fissures, exposed cedar tree roots, uneven dirt trails',
    footwearAdvice: 'Wear supportive hiking boots or sturdy walking shoes during the 15-minute hike to the cliff rim. Carry your portrait shoes in a tote bag to change into at the lookout point.',
    secondaryTip: 'Never attempt walking along the escarpment rim in unsupportive heels or slippery leather-soled shoes.'
  },

  kelso_conservation: {
    venue: 'Kelso Conservation & Boardwalk, Milton',
    terrain: 'Sandy lake beach, wooden boardwalk planks with small gaps, grassy picnic areas',
    footwearAdvice: 'Barefoot moments on the sandy shore create joyful, authentic portraits. Flat leather strap sandals or canvas espadrilles work best on boardwalks.',
    secondaryTip: 'Avoid shoes with delicate satin that can be permanently water-stained by lake spray.'
  },

  oakville_downtown_historic: {
    venue: 'Downtown Oakville & Randall Street',
    terrain: 'Heritage cobblestone sidewalks, granite curbstones, polished boutique interiors',
    footwearAdvice: 'Classic leather loafers, pointed-toe flats, or stylish block-heel booties navigate cobblestone safely without catching.',
    secondaryTip: 'Clean and polish leather shoes the evening prior; high-resolution macro shots highlight scuffs.'
  }
,

  spencer_smith_park: {
    venue: 'Spencer Smith Park & Burlington Pier',
    terrain: 'Paved waterfront promenade, wooden pier decking, stone breakwater',
    footwearAdvice: 'Low block heels or clean leather fashion sneakers. Pier wood decking requires stable heels that cannot slip into plank seams.',
    secondaryTip: 'Wind off Burlington Bay can be brisk; bring an elegant tailored jacket or wrap.'
  },

  royal_botanical_gardens: {
    venue: 'Royal Botanical Gardens, Burlington',
    terrain: 'Paved garden paths, stone staircases, greenhouse flagstones',
    footwearAdvice: 'Versatile low heels or polished flats. Inside the Mediterranean Greenhouse, floors can be lightly misted and slippery.',
    secondaryTip: 'Non-slip rubber-bottomed leather soles are strongly recommended inside greenhouse galleries.'
  },

  elora_mill: {
    venue: 'Elora Mill & Grand River Gorge',
    terrain: 'Historic limestone masonry, rugged river gorge trails, rustic timber bridges',
    footwearAdvice: 'Sturdy ankle-supportive boots or thick block heels. Limestone stairs can be slick near the waterfall spray.',
    secondaryTip: 'Avoid smooth-bottom leather soles on wet limestone gorge paths.'
  }

};

const WEATHER_CONTINGENCY_STYLING = {
  LAKE_ONTARIO_BREEZE: {
    weatherCondition: 'Shoreline Gusts & Lake Wind (15 - 30 km/h)',
    stylingProtocol: 'Wear skirts and dresses with substantial fabric weight or tiered ruffles rather than flyaway ultra-sheer chiffons. Bring decorative bobby pins or a silk ribbon to secure hair while allowing romantic motion.'
  },

  OVERCAST_OR_RAIN_CONTINGENCY: {
    weatherCondition: 'Soft Overcast Skies or Gentle Misting Rain',
    stylingProtocol: 'Overcast cloud cover provides nature’s most flattering studio-soft light! Our atelier brings boutique transparent clear bubble umbrellas that frame couples gorgeously. Pair with a structured trench coat or water-resistant leather boots.'
  },

  HIGH_SUMMER_HEAT: {
    weatherCondition: 'High Heat & Humidity (28°C - 35°C)',
    stylingProtocol: 'Choose unlined 100% linen or cotton gauze in light oat or ivory to reflect thermal heat. Bring blotting papers and travel-size setting spray in your session tote.'
  }
};

// --- PART 5: STYLING LOOKBOOK GENERATOR ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 5: Comprehensive Styling Lookbook Generator & 48-Hour Prep Checklist
 */






class StylingLookbookGenerator {
  /**
   * Assemble complete bespoke wardrobe styling dossier
   */
  static generateLookbook({
    sessionType = 'portrait',
    season = 'summer',
    locationType = 'lakefront',
    venueKey = 'gairloch_gardens',
    clientName = 'Valued Client'
  }) {
    const cleanSeason = (season || 'summer').toLowerCase();
    const cleanSession = (sessionType || 'portrait').toLowerCase();
    const cleanVenue = (venueKey || 'gairloch_gardens').toLowerCase().replace(/\s+/g, '_');

    const seasonData = SEASONAL_PALETTE_MATRICES[cleanSeason] || SEASONAL_PALETTE_MATRICES.summer;
    const nicheGuide = SESSION_NICHE_STYLE_GUIDES[cleanSession] || SESSION_NICHE_STYLE_GUIDES.portrait;
    const footwearData = REGIONAL_TOPOGRAPHY_FOOTWEAR[cleanVenue] || REGIONAL_TOPOGRAPHY_FOOTWEAR.gairloch_gardens;

    const prepChecklist = [
      '1. Complete Fitting (5 Days Prior): Try on complete outfits including exact undergarments in natural window daylight to ensure fit and comfort.',
      '2. Seamless Foundation: Confirm neutral laser-cut nude undergarments with zero visible strap lines or binding seams.',
      '3. Professional Steaming (Evening Prior): Steam all garments thoroughly. Hang on wooden hangers inside a breathable garment bag (do not fold into totes).',
      '4. Footwear Preparation: Wipe down and polish leather shoes; check heel stability for outdoor terrain.',
      '5. Jewelry & Watches: Select delicate, understated heirlooms. Remove bulky fitness trackers or digital smartwatches before stepping in front of the lens.',
      '6. Emergency Atelier Bag: Pack touch-up lipstick/balm, hairbrush, transparent powder or blotting papers, safety pins, and comfortable slip-on walking shoes.'
    ];

    return {
      clientName,
      sessionType: cleanSession,
      season: cleanSeason,
      seasonTitle: seasonData.season,
      recommendedPalette: seasonData.palette,
      paletteColorNames: seasonData.names,
      recommendedFabrics: seasonData.fabrics,
      seasonalStylingTip: seasonData.tip,
      stylistDirectives: nicheGuide.guidance,
      recommendedLooks: nicheGuide.recommendedLooks,
      pitfallsToAvoid: nicheGuide.donts,
      footwearGuidance: nicheGuide.footwear,
      curatedBrands: nicheGuide.curatedBrands,
      locationFootwearDetails: footwearData,
      colorHarmonyRules: COLOR_HARMONY_RULES,
      opticalCameraRules: OPTICAL_CAMERA_RULES,
      prepChecklist
    };
  }
}

// --- PART 6: LUXURY HTML & MARKDOWN RENDERERS ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 6: Luxury HTML Wardrobe Lookbook & Markdown Renderers
 */

class WhatToWearHtmlRenderer {
  /**
   * Render luxury editorial HTML wardrobe lookbook
   */
  static renderHtmlLookbook(data) {
    const swatches = data.recommendedPalette.map((hex, i) => `
      <div style="display: inline-block; text-align: center; margin: 0 10px 10px 0;">
        <div style="width: 52px; height: 52px; border-radius: 50%; background-color: ${hex}; border: 1px solid #ded9d2; box-shadow: 0 2px 6px rgba(0,0,0,0.06);"></div>
        <div style="font-size: 11px; color: #5a5752; margin-top: 6px; font-weight: 500;">${data.paletteColorNames[i]}</div>
      </div>
    `).join('');

    const looks = (data.recommendedLooks || []).map(l => `<li style="margin-bottom: 8px;">${l}</li>`).join('');
    const prepItems = data.prepChecklist.map(item => `<li style="margin-bottom: 6px;">${item}</li>`).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Wardrobe Styling Lookbook — Hafsa Noreen Photography</title>
</head>
<body style="margin: 0; padding: 0; background-color: #faf9f6; font-family: -apple-system, BlinkMacSystemFont, Arial, serif; color: #232220; line-height: 1.7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 15px; background-color: #faf9f6;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; background-color: #ffffff; border: 1px solid #eae5df; border-radius: 4px; padding: 40px; box-shadow: 0 4px 18px rgba(0,0,0,0.03);">
          <tr>
            <td align="center" style="border-bottom: 1px solid #f2ede8; padding-bottom: 24px;">
              <span style="font-family: Georgia, serif; font-size: 20px; letter-spacing: 0.18em; text-transform: uppercase; color: #1a1918;">HAFSA NOREEN</span>
              <div style="font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #8e8880; margin-top: 6px;">Wardrobe &amp; Styling Intelligence Dossier</div>
              <div style="width: 32px; height: 1px; background-color: #c5a059; margin: 12px auto 0 auto;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px 4px 10px 4px;">
              <h2 style="font-family: Georgia, serif; font-size: 22px; font-weight: normal; color: #1a1918; margin-top: 0;">${data.seasonTitle} — ${data.sessionType.toUpperCase()}</h2>
              <p style="font-size: 14px; color: #5a5752;">Dear ${data.clientName}, choosing what to wear in front of the lens sets the tone for your entire collection. We have curated this palette and fabric guide to ensure your portraits look effortless, tactile, and luminous.</p>
              
              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Recommended Chromatic Palette</h3>
              <div style="margin: 16px 0;">${swatches}</div>

              <div style="background-color: #f7f5f2; border-left: 3px solid #c5a059; padding: 16px 18px; margin: 24px 0; border-radius: 2px;">
                <div style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #7a7368; font-weight: 600;">Seasonal Stylist Tip</div>
                <div style="font-size: 14px; color: #3c3a37; margin-top: 4px;">${data.seasonalStylingTip}</div>
              </div>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">Recommended Silhouette Concepts</h3>
              <ul style="font-size: 14px; color: #3c3a37; padding-left: 20px;">${looks}</ul>

              <h3 style="font-family: Georgia, serif; font-size: 16px; margin-top: 24px; color: #1a1918; border-bottom: 1px solid #f2ede8; padding-bottom: 8px;">48-Hour Wardrobe Preparation Checklist</h3>
              <ol style="font-size: 13px; color: #4a453e; padding-left: 20px;">${prepItems}</ol>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 24px; border-top: 1px solid #f2ede8; font-size: 12px; color: #8e8880; line-height: 1.6; text-align: center;">
              Hafsa Noreen Photography Atelier • 151 Randall Street, Oakville, ON<br>
              Questions regarding styling? Text your outfit photos directly to: +1 (647) 909-3135
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

class WhatToWearMarkdownRenderer {


  /**
   * Render clean markdown summary of styling guide
   */
  static renderMarkdownGuide(data) {
    return `# HAFSA NOREEN PHOTOGRAPHY — STYLING LOOKBOOK
## ${data.seasonTitle} (${data.sessionType.toUpperCase()})

**Client:** ${data.clientName}
**Recommended Palette:** ${data.paletteColorNames.join(', ')}
**Recommended Fabrics:** ${data.recommendedFabrics.join(', ')}

---
### Stylist Guidance
${data.stylistDirectives}

### Recommended Silhouette Looks
${(data.recommendedLooks || []).map(l => `- ${l}`).join('\n')}

### Footwear Directives (${data.locationFootwearDetails.venue})
- ${data.locationFootwearDetails.footwearAdvice}
- *Tip:* ${data.locationFootwearDetails.secondaryTip}

### 48-Hour Preparation Checklist
${data.prepChecklist.map(c => `- ${c}`).join('\n')}

---
*Oakville Atelier Wardrobe Support: concierge@hafsanoreen.com*`;
  }
}

// --- PART 7: CORE ENGINE ORCHESTRATOR ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 7: Core Engine Class & Orchestrator
 */






class WhatToWear {
  /**
   * Return legacy palette matrix for backward compatibility
   */
  static getPaletteMatrix() {
    return SEASONAL_PALETTE_MATRICES;
  }

  /**
   * Return legacy session style rules for backward compatibility
   */
  static getSessionStyleRules(sessionType = 'portrait') {
    const rules = SESSION_NICHE_STYLE_GUIDES;
    const clean = (sessionType || 'portrait').toLowerCase();
    return rules[clean] || rules.portrait;
  }

  /**
   * Validate execution parameters
   */
  static validateParams(params) {
    if (!params || typeof params !== 'object') {
      throw new Error('WhatToWear: Execution parameters must be an object.');
    }
    return true;
  }

  /**
   * Execute styling generation and wardrobe lookbook curation
   */
  static execute(params = {}) {
    this.validateParams(params);

    const {
      sessionType = 'portrait',
      season = 'summer',
      locationType = 'lakefront',
      venueKey = 'gairloch_gardens',
      clientName = 'Valued Client'
    } = params;

    const lookbook = StylingLookbookGenerator.generateLookbook({
      sessionType,
      season,
      locationType,
      venueKey,
      clientName
    });

    const htmlLookbook = WhatToWearHtmlRenderer.renderHtmlLookbook(lookbook);
    const markdownGuide = WhatToWearMarkdownRenderer.renderMarkdownGuide(lookbook);

    return {
      sessionType: lookbook.sessionType,
      season: lookbook.season,
      locationType,
      recommendedPalette: lookbook.recommendedPalette,
      paletteColorNames: lookbook.paletteColorNames,
      recommendedFabrics: lookbook.recommendedFabrics,
      seasonalStylingTip: lookbook.seasonalStylingTip,
      stylistDirectives: lookbook.stylistDirectives,
      pitfallsToAvoid: lookbook.pitfallsToAvoid,
      footwearGuidance: lookbook.footwearGuidance,
      recommendedLooks: lookbook.recommendedLooks,
      prepChecklist: lookbook.prepChecklist,
      curatedBrands: lookbook.curatedBrands,
      locationFootwearDetails: lookbook.locationFootwearDetails,
      colorHarmonyRules: lookbook.colorHarmonyRules,
      opticalCameraRules: lookbook.opticalCameraRules,
      renderedOutputs: {
        htmlLookbook,
        markdownGuide
      }
    };
  }

  static toHtml(data) {
    return WhatToWearHtmlRenderer.renderHtmlLookbook(data);
  }

  static toMarkdown(data) {
    return WhatToWearMarkdownRenderer.renderMarkdownGuide(data);
  }
}

// --- PART 8: DIAGNOSTIC TEST SUITE ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 8: Automated 12-Check Diagnostic Test Suite
 */

class WhatToWearDiagnostics {
  static runDiagnostics(engine) {
    const results = {
      timestamp: new Date().toISOString(),
      testsRun: 0,
      passed: true,
      checks: {}
    };

    // Test 1: Spring Portrait Palette & Fabrics
    const springRes = engine.execute({ sessionType: 'portrait', season: 'spring' });
    results.testsRun++;
    results.checks.springPortrait = {
      passed: Boolean(springRes.recommendedPalette.length === 5 && springRes.paletteColorNames.includes('Soft Sage')),
      palette: springRes.paletteColorNames
    };

    // Test 2: Summer Wedding Engagement Lookbook
    const summerWed = engine.execute({ sessionType: 'wedding', season: 'summer' });
    results.testsRun++;
    results.checks.summerWedding = {
      passed: Boolean(summerWed.recommendedLooks && summerWed.recommendedLooks.length === 2 && summerWed.pitfallsToAvoid.length >= 3),
      looksCount: summerWed.recommendedLooks.length
    };

    // Test 3: Autumn Generational Family Guidance
    const autumnFam = engine.execute({ sessionType: 'family', season: 'autumn' });
    results.testsRun++;
    results.checks.autumnFamily = {
      passed: Boolean(autumnFam.stylistDirectives.includes('Coordinated without matching') && autumnFam.pitfallsToAvoid.some(p => p.includes('white polo'))),
      guidance: autumnFam.stylistDirectives
    };

    // Test 4: Winter Maternity Styling
    const winterMat = engine.execute({ sessionType: 'maternity', season: 'winter' });
    results.testsRun++;
    results.checks.winterMaternity = {
      passed: Boolean(winterMat.stylistDirectives.includes('Celebrate your maternal form') && winterMat.curatedBrands.includes('Bumpsuit')),
      brands: winterMat.curatedBrands
    };

    // Test 5: In-Home Newborn Wardrobe Directives
    const newbornRes = engine.execute({ sessionType: 'newborn', locationType: 'in_home' });
    results.testsRun++;
    results.checks.inHomeNewborn = {
      passed: Boolean(newbornRes.footwearGuidance.includes('Barefoot') && newbornRes.pitfallsToAvoid.some(p => p.includes('Shoes on newborn'))),
      footwear: newbornRes.footwearGuidance
    };

    // Test 6: Executive Personal Branding Authority Looks
    const brandRes = engine.execute({ sessionType: 'branding', season: 'autumn' });
    results.testsRun++;
    results.checks.executiveBranding = {
      passed: Boolean(brandRes.stylistDirectives.includes('Commanding authority') && brandRes.curatedBrands.includes('Theory')),
      guidance: brandRes.stylistDirectives
    };

    // Test 7: Gairloch Gardens Footwear Advice
    const gairlochRes = engine.execute({ venueKey: 'gairloch_gardens' });
    results.testsRun++;
    results.checks.gairlochFootwear = {
      passed: Boolean(gairlochRes.locationFootwearDetails.footwearAdvice.includes('block heels')),
      footwearAdvice: gairlochRes.locationFootwearDetails.footwearAdvice
    };

    // Test 8: Mount Nemo Trail Transition Advice
    const nemoRes = engine.execute({ venueKey: 'mount_nemo' });
    results.testsRun++;
    results.checks.mountNemoFootwear = {
      passed: Boolean(nemoRes.locationFootwearDetails.footwearAdvice.includes('hiking boots') && nemoRes.locationFootwearDetails.terrain.includes('Limestone')),
      terrain: nemoRes.locationFootwearDetails.terrain
    };

    // Test 9: Optical Moiré Avoidance Rules
    results.testsRun++;
    results.checks.opticalMoireAvoidance = {
      passed: Boolean(springRes.opticalCameraRules.MOIRE_ARTIFACT_AVOIDANCE && springRes.opticalCameraRules.SYNTHETIC_SHINE_WARNING),
      rule: springRes.opticalCameraRules.MOIRE_ARTIFACT_AVOIDANCE.rule
    };

    // Test 10: 48-Hour Prep Checklist
    results.testsRun++;
    results.checks.prepChecklistCompleteness = {
      passed: Boolean(springRes.prepChecklist && springRes.prepChecklist.length === 6 && springRes.prepChecklist[0].includes('5 Days Prior')),
      checklistSteps: springRes.prepChecklist.length
    };

    // Test 11: Luxury HTML Lookbook Rendering
    results.testsRun++;
    results.checks.htmlLookbookRendering = {
      passed: Boolean(springRes.renderedOutputs.htmlLookbook.includes('HAFSA NOREEN') && springRes.renderedOutputs.htmlLookbook.includes('border-radius: 50%')),
      htmlLength: springRes.renderedOutputs.htmlLookbook.length
    };

    // Test 12: Markdown Summary Rendering
    results.testsRun++;
    results.checks.markdownSummaryRendering = {
      passed: Boolean(springRes.renderedOutputs.markdownGuide.includes('# HAFSA NOREEN PHOTOGRAPHY — STYLING LOOKBOOK')),
      mdLength: springRes.renderedOutputs.markdownGuide.length
    };

    for (const key of Object.keys(results.checks)) {
      if (!results.checks[key].passed) results.passed = false;
    }

    return results;
  }
}

// --- PART 9: BOUNDARY TESTS & BATCH SIMULATION BENCHMARK ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 9: Boundary Edge Cases & 50-Client Styling Benchmark Simulation
 */

class WhatToWearSimulations {
  static runBoundaryTests(engine) {
    const boundary = [];

    // 1. Empty parameters defaults safely
    try {
      const res = engine.execute({});
      boundary.push({ test: 'Empty parameters defaults safely', passed: Boolean(res && res.recommendedPalette.length === 5) });
    } catch (e) {
      boundary.push({ test: 'Empty parameters defaults safely', passed: false, error: e.message });
    }

    // 2. Unknown season fallback
    const unkSeason = engine.execute({ season: 'monsoon_season' });
    boundary.push({
      test: 'Unknown season fallback to summer',
      passed: unkSeason.season === 'summer' || unkSeason.paletteColorNames.includes('Warm Alabaster')
    });

    // 3. Unknown sessionType fallback
    const unkSession = engine.execute({ sessionType: 'underwater_adventure' });
    boundary.push({
      test: 'Unknown sessionType fallback to portrait',
      passed: unkSession.stylistDirectives.includes('editorial refinement')
    });

    // 4. Unknown venue fallback
    const unkVenue = engine.execute({ venueKey: 'unknown_remote_peak' });
    boundary.push({
      test: 'Unknown venue fallback to Gairloch Gardens',
      passed: unkVenue.locationFootwearDetails.venue.includes('Gairloch')
    });

    return {
      totalBoundaryTests: boundary.length,
      allBoundaryPassed: boundary.every(b => b.passed),
      results: boundary
    };
  }

  static runBatchSimulation(engine, count = 50) {
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    const sessions = ['wedding', 'family', 'maternity', 'newborn', 'portrait', 'branding'];
    const venues = ['gairloch_gardens', 'paletta_mansion', 'mount_nemo', 'kelso_conservation', 'oakville_downtown_historic'];

    const lookbooks = [];

    for (let i = 1; i <= count; i++) {
      const season = seasons[i % seasons.length];
      const sessionType = sessions[i % sessions.length];
      const venueKey = venues[i % venues.length];

      const res = engine.execute({
        clientName: `Simulated Client #${i}`,
        season,
        sessionType,
        venueKey
      });

      lookbooks.push(res);
    }

    const allHavePalette = lookbooks.every(l => l.recommendedPalette.length === 5);
    const allHaveChecklist = lookbooks.every(l => l.prepChecklist && l.prepChecklist.length === 6);
    const allHaveHtml = lookbooks.every(l => l.renderedOutputs && l.renderedOutputs.htmlLookbook.length > 500);

    return {
      totalSimulated: count,
      allHavePalette,
      allHaveChecklist,
      allHaveHtml,
      allPassed: allHavePalette && allHaveChecklist && allHaveHtml,
      samplePalette: lookbooks[0].paletteColorNames
    };
  }
}

// --- PART 10: SEASONAL CAPSULE WARDROBE CATALOGS ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 10: Seasonal Capsule Wardrobe Catalogs & Garment Combinations
 */

const SEASONAL_CAPSULE_WARDROBES = {
  SPRING_WOMEN: {
    season: 'Spring',
    gender: 'Women',
    pieces: [
      'Flowing ivory silk midi dress with gentle flutter sleeves',
      'Classic double-breasted trench coat in warm honey/sandstone',
      'Soft sage green slip skirt paired with an oversized fine-gauge knit',
      'Belgian linen trousers in natural flax with tailored high waist'
    ],
    footwear: 'Nude block-heel leather mules or minimalist pointed leather flats'
  },
  SPRING_MEN: {
    season: 'Spring',
    gender: 'Men',
    pieces: [
      'Unstructured cotton-linen blazer in soft stone or light navy',
      'Crisp band-collar linen shirt in soft oatmeal or pale chambray',
      'Tailored flat-front chinos in classic warm sand or olive',
      'Fine-gauge merino wool crewneck for morning temperature dips'
    ],
    footwear: 'Suede penny loafers in cognac or minimalist white leather sneakers'
  },
  SUMMER_WOMEN: {
    season: 'Summer',
    gender: 'Women',
    pieces: [
      'Tiered cotton gauze maxi dress in warm alabaster with open back detail',
      'Linen halter-neck sundress with self-tie waist belt in dusty sea glass',
      'Wide-leg linen palazzo pants paired with a tailored linen vest top',
      'Lightweight silk chiffon scarf for waterfront golden hour breezes'
    ],
    footwear: 'Flat woven leather strap sandals or chic espadrille wedges'
  },
  SUMMER_MEN: {
    season: 'Summer',
    gender: 'Men',
    pieces: [
      'Short-sleeve knit camp collar polo in ivory or textured olive',
      'Long-sleeve linen button-down with natural rolled cuffs',
      'Tailored linen-blend trousers in neutral taupe or washed bone',
      'Drawstring linen beach trousers for relaxed sunset shoreline moments'
    ],
    footwear: 'Woven leather loafers or barefoot on sandy lake beaches'
  },
  AUTUMN_WOMEN: {
    season: 'Autumn',
    gender: 'Women',
    pieces: [
      'Chunky ribbed merino wool turtleneck dress in warm terracotta or camel',
      'Structured wool-blend wrap coat in rich toffee or forest moss',
      'Fine corduroy midi skirt in vintage amber with button-front detail',
      'Cashmere wrap sweater paired with wide-leg wool trousers'
    ],
    footwear: 'Leather Chelsea boots in rich cognac or tailored knee-high leather boots'
  },
  AUTUMN_MEN: {
    season: 'Autumn',
    gender: 'Men',
    pieces: [
      'Heavy textured cable-knit sweater in cream or Donegal tweed yarn',
      'Unlined wool overshirt or chore jacket in rich tobacco brown',
      'Brushed cotton twill trousers in dark olive or espresso',
      'Fine-wale corduroy shirt worn open over a heavyweight neutral tee'
    ],
    footwear: 'Leather heritage work boots or suede chukka boots'
  },
  WINTER_WOMEN: {
    season: 'Winter',
    gender: 'Women',
    pieces: [
      'Architectural wool tailored topcoat in midnight charcoal or camel',
      'Silk velvet wrap dress in deep burgundy or emerald green',
      'Plush cashmere cowl-neck sweater with tailored winter wool pants',
      'Soft shearling or fine wool scarf with delicate fringed edge'
    ],
    footwear: 'Sleek leather dress boots with low stacked block heels'
  },
  WINTER_MEN: {
    season: 'Winter',
    gender: 'Men',
    pieces: [
      'Double-breasted tailored wool topcoat in deep navy or charcoal',
      'Chunky fisherman rib sweater in natural undyed sheep wool',
      'Tailored flannel trousers with clean cuffed hems',
      'Cashmere scarf in muted Scottish tartan or solid heather grey'
    ],
    footwear: 'Polished leather dress boots with storm-welt weatherproofing'
  }
,

  MATERNITY_CAPSULE: {
    season: 'All Seasons',
    gender: 'Maternity',
    pieces: [
      'Sculptural ribbed knit stretch maxi dress in warm oatmeal or cream',
      'Floor-length open-front silk chiffon robe for dramatic bump movement',
      'Soft linen wrap dress with adjustable empire waist sash',
      'Cozy cashmere cocoon cardigan for comfortable seated poses'
    ],
    footwear: 'Flat minimalist leather slides or barefoot by water and studio carpet'
  },
  NEWBORN_FAMILY_CAPSULE: {
    season: 'In-Home',
    gender: 'Family',
    pieces: [
      'Simple neutral ivory and oatmeal ribbed onesie for newborn (no collars)',
      'Mom: Relaxed linen-gauze button-down shirt and loose linen trousers',
      'Dad: Soft textured cream cotton henley or fine knit crewneck',
      'Bamboo-cotton organic swaddle blanket in pale sage or natural stone'
    ],
    footwear: 'Barefoot inside the residence for intimate, authentic living room snuggles'
  }

};

class CapsuleWardrobeBuilder {
  static getCapsule(seasonKey = 'summer', gender = 'women') {
    const key = `${(seasonKey || 'summer').toUpperCase()}_${(gender || 'women').toUpperCase()}`;
    return SEASONAL_CAPSULE_WARDROBES[key] || SEASONAL_CAPSULE_WARDROBES.SUMMER_WOMEN;
  }

  static listAll() {
    return Object.keys(SEASONAL_CAPSULE_WARDROBES);
  }
}

// --- PART 11: JEWELRY, ACCESSORIES & EYEWEAR RULES ---
/**
 * HAFFU — What-To-Wear Wardrobe Intelligence Engine
 * Part 11: Jewelry, Eyewear & Accessory Curation Rules
 */

const ACCESSORY_STYLING_RULES = {
  WRISTWATCHES_AND_TRACKERS: {
    ruleTitle: 'The Smartwatch Black Glass Ban',
    directive: 'Remove all Apple Watches, Fitbits, and digital fitness bands prior to stepping in front of the camera.',
    rationale: 'Digital smartwatches feature glossy black glass screens that reflect glaring white light, disrupt fine-art film aesthetics, and frequently light up with notifications during intimate portrait moments.',
    alternative: 'Wear a classic vintage analog timepiece with a brown leather strap, or leave wrists bare to emphasize hand connection.'
  },

  WRIST_HAIR_TIES: {
    ruleTitle: 'The Elastic Hair Band Warning',
    directive: 'Ensure wrists are completely free of black or neon hair elastics at least 2 hours before session time.',
    rationale: 'Elastic bands leave noticeable red indentation rings around wrists that take up to an hour to fade and require extensive retouching.',
    alternative: 'Store hair ties in your purse or session tote bag until needed.'
  },

  EYEWEAR_AND_ANTI_REFLECTIVE_COATINGS: {
    ruleTitle: 'Prescription Eyewear Glare Protocol',
    directive: 'Wear glasses treated with modern premium anti-reflective (AR) coatings only.',
    rationale: 'Cheaper non-AR lenses reflect intense green or purple flash/sunlight glare that completely obscures the client\'s eyes in portraiture.',
    alternative: 'If glare is persistent under outdoor golden hour angles, consider wearing contact lenses or having an optometrist temporarily pop out the lenses for your shoot.'
  },

  JEWELRY_SCALE_AND_METALS: {
    ruleTitle: 'Heirloom Jewelry Scale & Metal Harmonization',
    directive: 'Select delicate, sculptural heirloom pieces that complement rather than overpower your neckline.',
    rationale: 'Oversized costume jewelry draws the viewer’s eye immediately away from facial expressions and emotional connection.',
    metalMatching: {
      yellowGold: 'Pairs exquisitely with warm ivory, olive, terracotta, and amber palettes.',
      platinumSilver: 'Pairs beautifully with charcoal slate, midnight navy, cool taupe, and crisp white.',
      mixedMetals: 'Acceptable when balanced intentionally across rings and bracelets.'
    }
  },

  HEADWEAR_AND_HATS: {
    ruleTitle: 'Wide-Brimmed Felt & Straw Hat Rules',
    directive: 'Wide-brimmed hats must be worn tilted slightly back on the head.',
    rationale: 'When worn level, broad-brimmed hats cast heavy dark shadow bands across the eyes and bridge of the nose under outdoor light.',
    alternative: 'Use hats dynamically: held by your side, blowing in the wind, or placed gently on a picnic blanket.'
  }
};

class AccessoryStylingAdvisor {
  static getAccessoryRules() {
    return ACCESSORY_STYLING_RULES;
  }

  static auditAccessories({ hasSmartwatch = false, hasHairTieOnWrist = false, hasGlasses = false }) {
    const warnings = [];
    if (hasSmartwatch) {
      warnings.push('CRITICAL: Remove digital smartwatch / fitness band; switch to classic analog or bare wrist.');
    }
    if (hasHairTieOnWrist) {
      warnings.push('URGENT: Remove wrist elastic hair band at least 2 hours prior to avoid red skin indentations.');
    }
    if (hasGlasses) {
      warnings.push('ADVISORY: Verify glasses have anti-reflective coating to prevent green/purple lens glare.');
    }
    return {
      clean: warnings.length === 0,
      warningsCount: warnings.length,
      warnings
    };
  }
}

// Diagnostic delegation and test suite wiring
WhatToWear.runDiagnostics = function() {
  return WhatToWearDiagnostics.runDiagnostics(this);
};

WhatToWear.runFullTestSuite = function() {
  const diag = WhatToWearDiagnostics.runDiagnostics(this);
  const boundary = WhatToWearSimulations.runBoundaryTests(this);
  const sim = WhatToWearSimulations.runBatchSimulation(this, 50);
  return {
    engine: "WhatToWear",
    timestamp: new Date().toISOString(),
    allPassed: diag.passed && boundary.allBoundaryPassed && sim.allPassed,
    diagnostics: diag,
    boundaryTests: boundary,
    batchSimulation: sim
  };
};

// Static Helper & Constant Extensions
WhatToWear.SEASONAL_PALETTE_MATRICES = SEASONAL_PALETTE_MATRICES;
WhatToWear.COLOR_HARMONY_RULES = COLOR_HARMONY_RULES;
WhatToWear.FABRIC_TEXTURE_TAXONOMY = FABRIC_TEXTURE_TAXONOMY;
WhatToWear.OPTICAL_CAMERA_RULES = OPTICAL_CAMERA_RULES;
WhatToWear.SESSION_NICHE_STYLE_GUIDES = SESSION_NICHE_STYLE_GUIDES;
WhatToWear.REGIONAL_TOPOGRAPHY_FOOTWEAR = REGIONAL_TOPOGRAPHY_FOOTWEAR;
WhatToWear.WEATHER_CONTINGENCY_STYLING = WEATHER_CONTINGENCY_STYLING;
WhatToWear.SEASONAL_CAPSULE_WARDROBES = SEASONAL_CAPSULE_WARDROBES;
WhatToWear.ACCESSORY_STYLING_RULES = ACCESSORY_STYLING_RULES;
WhatToWear.getCapsule = function(season, gender) { return CapsuleWardrobeBuilder.getCapsule(season, gender); };
WhatToWear.auditAccessories = function(opts) { return AccessoryStylingAdvisor.auditAccessories(opts); };

module.exports = WhatToWear;
