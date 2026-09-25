/**
 * HAFFU — Production Social Media Editorial, Multi-Platform Copywriting & Caption Engine
 *
 * Generates tailored, luxury fine-art social captions, 10-slide carousel narrative scripts,
 * Pinterest SEO pin descriptions, Reels/TikTok voiceovers, and Facebook/LinkedIn editorial
 * posts for Hafsa Noreen Photography across Oakville, Burlington, Milton, Toronto, and the GTA.
 *
 * @version 5.0.0
 * @author Hafsa Noreen Photography
 */

/**
 * Editorial Voice & Tone Registers
 */
const TONES = {
  POETIC_FINE_ART: {
    id: 'poetic_fine_art',
    label: 'Poetic & Luminous Fine-Art',
    description: 'Ethereal, emotive, quiet reverence, focusing on natural light, fleeting glances, and the sanctity of time.',
    voicePillars: ['Quiet beauty', 'Light as poetry', 'Emotional reverence', 'Tactile warmth'],
    sampleHook: 'There are quiet seconds where the world softens completely.'
  },
  EDITORIAL_VOGUE: {
    id: 'editorial_vogue',
    label: 'Editorial High-Fashion & Couture',
    description: 'Minimalist, sleek, design-forward, architectural symmetry, and couture sophistication.',
    voicePillars: ['Architectural lines', 'Couture aesthetics', 'Understated elegance', 'Chic restraint'],
    sampleHook: 'Elegance is not about being noticed; it is about being remembered.'
  },
  EMOTIONAL_STORYTELLER: {
    id: 'emotional_storyteller',
    label: 'Generational Legacy & Emotional Narrative',
    description: 'Heart-centered storytelling celebrating lineage, unhurried family connection, and heirloom preservation.',
    voicePillars: ['Generational roots', 'Unhurried connection', 'Living history', 'Family sanctuary'],
    sampleHook: 'Long after the laughter fades into memory, these frames remain.'
  },
  CLIENT_EDUCATION_TIP: {
    id: 'client_education_tip',
    label: 'Client Education & Artistic Guidance',
    description: 'Authoritative, welcoming, expert advice on styling, golden hour timing, and stress-free wedding flow.',
    voicePillars: ['Expert guidance', 'Calm reassurance', 'Practical luxury', 'Light masterclass'],
    sampleHook: 'A quiet secret wedding planners often overlook when planning golden hour portraits.'
  },
  BEHIND_THE_LENS: {
    id: 'behind_the_lens',
    label: 'Behind-The-Lens Craft & Philosophy',
    description: 'Artistic manifesto, darkroom film emulation, medium format intentionality, and museum print curation.',
    voicePillars: ['Artistic intentionality', 'Archival craftsmanship', 'Medium format craft', 'Raw emotion'],
    sampleHook: 'Why we photograph with deep patience instead of rapid fire.'
  },
  LUXURY_MINIMALIST: {
    id: 'luxury_minimalist',
    label: 'Luxury Minimalist & One-Liner',
    description: 'High-impact brevity, generous breathing room, intentional white space, and understated luxury.',
    voicePillars: ['Brevity', 'Elegance', 'Breathing room', 'Confidence'],
    sampleHook: 'Pure poetry in the autumn light.'
  }
};

/**
 * Atelier Core Branding Identity
 */
const ATELIER_BRAND = {
  name: 'Hafsa Noreen Photography',
  tagline: 'Luminous Fine-Art Photography for Generational Heirlooms',
  baseLocation: 'Oakville & Burlington, Ontario',
  serviceAreas: ['Oakville', 'Burlington', 'Milton', 'Hamilton', 'Toronto', 'Niagara', 'Cambridge'],
  bookingUrl: 'https://hafsanoreen.com/booking',
  handle: '@hafsanoreenphotography'
};


/**
 * Comprehensive Regional & Categorical Hashtag Taxonomies
 */
const HASHTAG_VAULTS = {
  REGIONAL: {
    oakville: [
      '#oakvillephotographer', '#oakvillefamilyphotographer', '#oakvilleweddingphotographer',
      '#oakvillemoms', '#oakvilleliving', '#gairlochgardens', '#downtownoakville', '#oakvilleontario'
    ],
    burlington: [
      '#burlingtonphotographer', '#burlingtonweddingphotographer', '#burlingtonfamilyphotographer',
      '#palettamansion', '#palettapark', '#spencerparkburlington', '#burlont'
    ],
    milton: [
      '#miltonphotographer', '#miltonfamilyphotographer', '#mountnemo', '#rattlesnakepoint', '#haltonhills'
    ],
    toronto_gta: [
      '#torontophotographer', '#torontoweddingphotographer', '#torontoluxuryweddings',
      '#graydonhallmanor', '#spadinamuseum', '#gtaphotographer', '#ontariophotographer'
    ],
    hamilton_niagara: [
      '#hamiltonphotographer', '#ancastermillwedding', '#eloramillwedding', '#niagaraweddingphotographer'
    ]
  },
  SESSION_TYPES: {
    wedding: [
      '#fineartweddingphotographer', '#luxuryweddingphotographer', '#editorialwedding',
      '#ontariowedding', '#canadianweddingphotographer', '#vogueweddings', '#stylemepretty',
      '#weddingchicks', '#fineartbride', '#goldenhourvows', '#weddingdocumentary'
    ],
    maternity: [
      '#fineartmaternity', '#oakvillematernityphotographer', '#maternityphotography',
      '#motherhoodunplugged', '#luxurymaternity', '#maternityportraits', '#burlingtonmaternity',
      '#goldenhourmaternity', '#motherhoodinlens', '#theartofmotherhood'
    ],
    family: [
      '#oakvillefamilyportraits', '#heirloomportraits', '#fineartfamilyphotographer',
      '#candidchildhood', '#slowlivingfamily', '#generationalportraits', '#burlingtonfamilyphotos',
      '#documentaryfamilyphotography', '#authenticfamilylove', '#familyheirlooms'
    ],
    newborn: [
      '#oakvillenewbornphotographer', '#inhomenewbornsession', '#lifestylebabyphotographer',
      '#fineartnewborn', '#burlingtonnewbornphotographer', '#naturalnewbornphotography',
      '#babyledphotography', '#tenderfirstdays'
    ],
    branding: [
      '#luxurybrandingphotographer', '#editorialheadshots', '#oakvillebrandingphotographer',
      '#creativeentrepreneur', '#brandstoryteller', '#personalbrandingportraits'
    ]
  },
  AESTHETIC_AND_FILM: [
    '#fineartphotography', '#naturalfineart', '#cinematiclight', '#lookslikefilm',
    '#mediumformatvibes', '#luminouslight', '#documentaryeditorial', '#archivalprints',
    '#timelessimagery', '#fineartcuration'
  ]
};


/**
 * Seasonal & Micro-Regional Hashtag Clusters
 */
const SEASONAL_HASHTAG_CLUSTERS = {
  AUTUMN_FOLIAGE: [
    '#autumnportraitsontario', '#haltonfallphotos', '#fallweddingontario',
    '#goldenhourautumn', '#octoberbride', '#fallfoliagephotoshoot', '#niagaraescarpmentfall'
  ],
  SPRING_BLOSSOM: [
    '#springweddingontario', '#cherryblossomphotoshoot', '#gairlochgardensspring',
    '#peonyseason', '#rbggardensburlington', '#springmaternitysession'
  ],
  SUMMER_GOLDEN_HOUR: [
    '#lakeontariogoldenhour', '#summerweddingontario', '#lakesideportraits',
    '#palettaparksummer', '#warmgoldenlight', '#sunsetbeachsession'
  ],
  WINTER_ESTATE: [
    '#winterweddingontario', '#snowyweddingphotos', '#wintermaternity',
    '#langdonhallwinter', '#cozywinterportraits', '#firesideeditorial'
  ]
};

const FILM_STOCKS_AND_TONES = [
  '#contax645', '#fuji400h', '#kodakportra400', '#mediumformatfilm',
  '#richblackandwhite', '#filmtones', '#fineartcuration', '#timelessgrain'
];


/**
 * Engagement Hooks, Call-To-Action (CTA) Libraries & Peak Timing Matrix
 */
const ENGAGEMENT_HOOKS = {
  POETIC: [
    'The quietest moments often carry the greatest weight.',
    'There is a particular kind of light that only exists for twenty minutes before the sun dips beneath Lake Ontario.',
    'Proof that love does not need to shout to be unforgettable.',
    'Time moves swiftly, but these frames keep every heartbeat still.'
  ],
  EDITORIAL: [
    'Bridal elegance sculpted by intentional shadow and classical architecture.',
    'When high-fashion restraint meets raw unprompted emotion.',
    'A timeless study in form, fabric, and fleeting romance.',
    'Simplicity is the keynote of all true elegance.'
  ],
  STORY: [
    'They told me before the session they were nervous in front of cameras. Five minutes in, this happened.',
    'Three generations, one evening in Oakville, and memories that will live on for fifty years.',
    'The story behind this exact frame is one of my favorite memories from this season.',
    'Watching the way a father holds his newborn daughter for the first time will always humble me.'
  ],
  EDUCATIONAL: [
    'The single most important light decision you will make for your wedding day timeline:',
    'Why we urge our couples to step outside for 15 minutes during dinner (and why you will never regret it).',
    'Planning your maternity wardrobe? Save this 3-rule formula for timeless portraits.',
    'How to dress a multi-generational family of 12 without looking like a catalog match.'
  ]
};

const CALLS_TO_ACTION = {
  BOOKING: [
    'Currently reserving a limited number of 2026/2027 wedding commissions and autumn portrait dates. Visit the link in our bio to begin your inquiry.',
    'Our calendar for the upcoming season is thoughtfully limited to 25 weddings. Inquire via the link in profile.',
    'Reserve your fine-art milestone commission by visiting hafsanoreen.com/booking or send us a private message.'
  ],
  SAVE_AND_SHARE: [
    'Save this post for your wedding day mood board or share it with a bride-to-be who appreciates fine-art details.',
    'Bookmark this guide to reference when curating your family session wardrobe.',
    'Tap the flag icon to save this lighting inspiration for your upcoming portrait session.'
  ],
  COMMENT_ENGAGEMENT: [
    'Which frame speaks to your heart: the candid laughter or the quiet lakeside silhouette? Let me know in the comments below.',
    'Tell me in the comments: are you planning a summer garden celebration or an autumn estate wedding?',
    'Drop a white heart below if you believe printed albums belong in every family home.'
  ]
};

const PEAK_TIMING_MATRIX = {
  wedding: {
    weekdays: '7:30 PM - 9:30 PM EST',
    weekends: '9:00 AM - 11:30 AM EST & 8:00 PM EST',
    bestDay: 'Sunday & Wednesday',
    rationale: 'Brides and couples browse Pinterest and Instagram during late evening leisure hours and Sunday morning wedding planning sessions.'
  },
  maternity: {
    weekdays: '1:00 PM - 3:00 PM EST & 8:00 PM EST',
    weekends: '8:30 AM - 10:30 AM EST',
    bestDay: 'Tuesday & Thursday',
    rationale: 'Expectant mothers browse maternity inspiration during early afternoon breaks and evening wind-down periods.'
  },
  family: {
    weekdays: '8:00 PM - 9:30 PM EST',
    weekends: '7:30 AM - 9:30 AM EST',
    bestDay: 'Saturday morning & Monday evening',
    rationale: 'Mothers and parents browse social media after young children are asleep or early weekend morning routines.'
  },
  branding: {
    weekdays: '7:30 AM - 9:00 AM EST & 12:00 PM - 1:30 PM EST',
    weekends: 'Sunday evening 7:00 PM EST',
    bestDay: 'Tuesday & Thursday',
    rationale: 'Professionals and entrepreneurs review personal branding content during morning business commutes and lunch breaks.'
  }
};


/**
 * Carousel Narrative Scripting & Video Voiceover Engine
 */
class StorytellingScriptEngine {
  /**
   * Build a 10-slide high-retention Instagram Carousel script
   */
  static buildCarouselScript({ topic, hookText, keyPoints = [], ctaType = 'BOOKING' }) {
    const slides = [];

    // Slide 1: The Visual Hook
    slides.push({
      slideNumber: 1,
      type: 'COVER_HOOK',
      headline: hookText || `The Essential Guide to ${topic}`,
      subhead: 'Swipe to explore the fine-art atelier approach &rarr;',
      visualNotes: 'Luminous full-bleed portrait with clean centered typography. High contrast and immediate emotional curiosity.'
    });

    // Slides 2 to 8: Core Narrative & Value Delivery
    const points = keyPoints.length > 0 ? keyPoints : [
      'Prioritize directional natural light over flat midday exposure.',
      'Allow breathing room in compositions for architectural elegance.',
      'Choose organic tactile fabrics that move naturally in the wind.',
      'Focus on emotional presence and connection rather than rigid posing.',
      'Preserve moments in physical museum-grade archival albums.'
    ];

    points.forEach((pt, index) => {
      slides.push({
        slideNumber: index + 2,
        type: 'CONTENT_VALUE',
        headline: `0${index + 1} / ${pt.split(':')[0] || 'Atelier Insight'}`,
        body: pt,
        visualNotes: `Close-up crop or complementary detail shot illustrating insight #${index + 1}.`
      });
    });

    // Slide 9: Summary & Atelier Takeaway
    slides.push({
      slideNumber: points.length + 2,
      type: 'SUMMARY_TAKEAWAY',
      headline: 'The Atelier Philosophy',
      body: 'Timeless imagery is never born from rushing. It is created when we slow down, honor natural light, and allow your authentic love story to breathe.',
      visualNotes: 'Panoramic landscape or wide environmental portrait capturing atmosphere.'
    });

    // Slide 10: Call to Action
    const ctaText = CALLS_TO_ACTION[ctaType] ? CALLS_TO_ACTION[ctaType][0] : CALLS_TO_ACTION.BOOKING[0];
    slides.push({
      slideNumber: points.length + 3,
      type: 'CALL_TO_ACTION',
      headline: 'Begin Your Story With Us',
      body: ctaText,
      visualNotes: 'Studio portrait of Hafsa or aesthetic flat-lay of handcrafted Italian leather album with bookmark ribbon.'
    });

    return slides;
  }

  /**
   * Build a 30-to-45-second Reel / TikTok Voiceover Script
   */
  static buildReelVoiceoverScript({ topic, sessionType, location }) {
    return {
      durationSeconds: 35,
      pacing: 'Slow, serene, contemplative, paired with gentle acoustic piano or ambient cello',
      hookText: `If you are planning your ${sessionType} in ${location}, let me share something most people forget.`,
      bodyVoiceover: [
        'We get so caught up in the details—the flowers, the timeline, making sure everything is in place.',
        'But twenty years from now, you will not be looking at the checklist.',
        'You will be looking at the way their fingers brushed your wrist.',
        'The way the autumn light caught your veil just as the sun set over the lake.',
        'And the quiet sigh of relief when you realized: we are finally here, together.'
      ],
      outroCallToAction: 'Save this as a reminder for your day, and follow along for more fine-art wedding stories from Ontario estates.',
      recommendedAudioAesthetic: 'Cinematic piano, low cello strings, or natural outdoor wind ambience with 40bpm tempo.'
    };
  }

  /**
   * Build Pinterest Rich Pin Data
   */
  static buildPinterestPinData({ title, description, boardRecommendation, url }) {
    return {
      pinTitle: title.length > 100 ? title.substring(0, 97) + '...' : title,
      pinDescription: description.length > 500 ? description.substring(0, 497) + '...' : description,
      targetBoard: boardRecommendation || 'Fine Art Wedding Inspiration Ontario',
      destinationLink: url || 'https://hafsanoreen.com',
      keywords: ['fine art wedding', 'ontario bride', 'paletta mansion wedding', 'luxury wedding photography', 'editorial bridal portrait']
    };
  }
}


/**
 * Master Caption Blueprints: Part 1 (Blueprints 1 to 4)
 */
const CAPTION_BLUEPRINTS_PART_1 = {
  paletta_lakefront_wedding: {
    id: 'paletta_lakefront_wedding',
    sessionType: 'wedding',
    location: 'Paletta Mansion, Burlington',
    toneKey: 'POETIC_FINE_ART',
    hook: 'The quietest moments often carry the greatest weight.',
    narrative: 'As the October sun began its slow descent over Lake Ontario, Sarah and Julian stepped onto the stone veranda at Paletta Mansion. The lake breeze lifted her silk veil into the soft amber rim-light, creating a moment suspended between history and forever. In our atelier, we do not chase manufactured perfection; we wait for the authentic reverence of two souls taking each other in.',
    keyPoints: [
      'Lake Ontario acts as a vast ambient reflector, softening facial shadows at dusk.',
      'Allowing 20 uninterrupted minutes for couple portraits without wedding parties or guests.',
      'Documenting movement rather than stiff static poses.'
    ],
    ctaType: 'BOOKING',
    targetBoard: 'Paletta Mansion Burlington Weddings'
  },
  gairloch_gardens_maternity: {
    id: 'gairloch_gardens_maternity',
    sessionType: 'maternity',
    location: 'Gairloch Gardens, Oakville',
    toneKey: 'POETIC_FINE_ART',
    hook: 'There is a sacred, quiet grace to carrying new life.',
    narrative: 'Strolling through the rose gardens at Gairloch as the golden hour bathed the stone bluffs in warm champagne light. Between weeks 28 and 34, there is a breathtaking harmony of strength and vulnerability in motherhood. Curating soft ivory silk chiffon allowed the lakeside breeze to sculpt every delicate curve with poetry.',
    keyPoints: [
      'Scheduling between weeks 28 and 34 ensures maximum comfort and rounded silhouette.',
      'Monochromatic neutral hues harmonize seamlessly with natural rose garden foliage.',
      'Gentle partner connection brings generational warmth to the gallery.'
    ],
    ctaType: 'SAVE_AND_SHARE',
    targetBoard: 'Fine Art Maternity Photography Oakville'
  },
  in_home_newborn_sanctuary: {
    id: 'in_home_newborn_sanctuary',
    sessionType: 'newborn',
    location: 'Oakville Residence',
    toneKey: 'EMOTIONAL_STORYTELLER',
    hook: 'Ten tiny fingers, unhurried morning light, and the quiet sanctuary of home.',
    narrative: 'No stiff studio buckets, no artificial posing props. Just baby Liam nestled safely in his mother’s arms, listening to the gentle cadence of her heartbeat. By photographing newborn milestones in the intimacy of your Oakville home, we preserve the exact sanctuary where your new family chapter began.',
    keyPoints: [
      'Feathering soft directional light from a single north-facing master bedroom window.',
      'Unrushed, baby-led sessions with ample time for soothing and nursing.',
      'Capturing macro details: downy shoulder hair, tiny toes, and sleepy yawns.'
    ],
    ctaType: 'BOOKING',
    targetBoard: 'In Home Lifestyle Newborn Oakville'
  },
  mount_nemo_sunset_engagement: {
    id: 'mount_nemo_sunset_engagement',
    sessionType: 'wedding',
    location: 'Mount Nemo Conservation, Milton',
    toneKey: 'EDITORIAL_VOGUE',
    hook: 'Standing on the edge of the world as the sky turns to liquid gold.',
    narrative: 'High atop the limestone cliffs of Mount Nemo, the wind carried an electric excitement across the escarpment valley. A modern couture slip dress paired with dramatic natural landscape creates an unforgettable tension between high fashion and wild terrain.',
    keyPoints: [
      'Utilizing escarpment updrafts for kinetic movement in hair and fabric.',
      'Focal compression capturing the vast valley horizon behind the couple.',
      'Safety-first exploration along designated lookout perimeters.'
    ],
    ctaType: 'COMMENT_ENGAGEMENT',
    targetBoard: 'Dramatic Ontario Engagement Sessions'
  }
};


/**
 * Master Caption Blueprints: Part 2 (Blueprints 5 to 8)
 */
const CAPTION_BLUEPRINTS_PART_2 = {
  langdon_hall_country_estate: {
    id: 'langdon_hall_country_estate',
    sessionType: 'wedding',
    location: 'Langdon Hall Country House, Cambridge',
    toneKey: 'POETIC_FINE_ART',
    hook: 'Old-world English country grandeur tucked away in the Carolinian woods.',
    narrative: 'Walking beneath centuries-old maple trees as evening settled over the kitchen gardens at Langdon Hall. The way Elena looked back over her shoulder, with antique lace trailing softly over cobblestone, was an editorial masterclass in effortless heritage romance.',
    keyPoints: [
      'Embracing the rich earth tones and heritage red brickwork of Federal Revival architecture.',
      'Allowing natural movement down private forest pathways.',
      'Transitioning from dappled shade into warm orchard golden hour light.'
    ],
    ctaType: 'BOOKING',
    targetBoard: 'Langdon Hall Wedding Inspiration'
  },
  halton_generational_family: {
    id: 'halton_generational_family',
    sessionType: 'family',
    location: 'Oakville Heritage Parklands',
    toneKey: 'EMOTIONAL_STORYTELLER',
    hook: 'Three generations. One afternoon. A legacy preserved for decades.',
    narrative: 'When the Sterling family gathered their grandparents, adult siblings, and four energetic cousins at Gairloch Gardens, we did not force them to stand in rigid lines. We let the grandchildren run across the lawns, encouraged grandmother to tell stories, and documented the quiet glances that connect fifty years of unconditional love.',
    keyPoints: [
      'Coordinating a cohesive tonal palette of warm neutrals and tactile textures.',
      'Prioritizing candid relationship pairings over stiff group poses.',
      'Preserving memories in custom hand-bound museum albums.'
    ],
    ctaType: 'SAVE_AND_SHARE',
    targetBoard: 'Extended Family Portraits Halton'
  },
  graydon_hall_terrace_couture: {
    id: 'graydon_hall_terrace_couture',
    sessionType: 'wedding',
    location: 'Graydon Hall Manor, Toronto',
    toneKey: 'EDITORIAL_VOGUE',
    hook: 'Parisian bridal sophistication on a 1930s Georgian terrace.',
    narrative: 'Cascading stone fountains, formal boxwood parterres, and the sculptural silhouette of a couture bridal cape. Graydon Hall Manor offers an architectural canvas that demands photographic restraint, clean perspective lines, and timeless high-fashion framing.',
    keyPoints: [
      'Using classical stone balustrades as leading architectural perspective lines.',
      'Documenting candlelit twilight receptions on the covered fountain terrace.',
      'Black and white medium-format film emulation for timeless couture elegance.'
    ],
    ctaType: 'BOOKING',
    targetBoard: 'Graydon Hall Manor Editorial Weddings'
  },
  atelier_archival_craft: {
    id: 'atelier_archival_craft',
    sessionType: 'branding',
    location: 'Hafsa Noreen Photography Atelier, Oakville',
    toneKey: 'BEHIND_THE_LENS',
    hook: 'Why a photograph does not truly exist until it is held in your hands.',
    narrative: 'In a world where thousands of digital images vanish into hard drives and cloud storage, we believe in the physical sanctity of fine art. Each Italian leather album we deliver is hand-bound with archival cotton rag paper and pigment inks rated for 150 years. These are not merely photographs; they are the tangible inheritance you leave to your children.',
    keyPoints: [
      'Archival 100% cotton rag paper vs. standard commercial chemical photo paper.',
      'Handcrafted full-grain Italian leather bindings with custom debossing.',
      'Preserving generational legacy in an increasingly ephemeral digital age.'
    ],
    ctaType: 'COMMENT_ENGAGEMENT',
    targetBoard: 'Heirloom Fine Art Photography Albums'
  }
};

const CAPTION_BLUEPRINTS = Object.assign({}, CAPTION_BLUEPRINTS_PART_1, CAPTION_BLUEPRINTS_PART_2);


/**
 * Master Caption Blueprints: Part 3 (Blueprints 9 to 12)
 */
const CAPTION_BLUEPRINTS_PART_3 = {
  ancaster_mill_waterfall_wedding: {
    id: 'ancaster_mill_waterfall_wedding',
    sessionType: 'wedding',
    location: 'Ancaster Mill, Hamilton',
    toneKey: 'POETIC_FINE_ART',
    hook: 'The steady rush of ancient waters beneath a canopy of autumn maples.',
    narrative: 'There is something elemental about vows spoken beside natural waterfalls. At Ancaster Mill, the centuries-old limestone masonry and rushing stream provide an auditory sanctuary where outside noise dissolves. Documenting Sophia and Michael along the covered timber bridge felt like stepping into an intimate historical novel.',
    keyPoints: [
      'Using slow shutter drag to render waterfall movement silky and ethereal.',
      'Maximizing soft directional daylight inside the Streamside Chapel.',
      'Preserving mossy stone textures and rich forest greens in color grading.'
    ],
    ctaType: 'BOOKING',
    targetBoard: 'Ancaster Mill Waterfall Weddings'
  },
  arlington_estate_grand_loggia: {
    id: 'arlington_estate_grand_loggia',
    sessionType: 'wedding',
    location: 'The Arlington Estate, Kleinburg',
    toneKey: 'EDITORIAL_VOGUE',
    hook: 'Modern European grand luxury set against private willow-fringed ponds.',
    narrative: 'Under the towering arches of the East Loggia, crystal chandeliers cast a soft glow across the promenade. The Arlington Estate offers an unparalleled scale for couples who envision high-fashion architectural compositions paired with breathtaking natural reflection ponds.',
    keyPoints: [
      'Reflections in the estate pond during twilight golden hour.',
      'Symmetrical architectural framing through the grand outdoor colonnade.',
      'Kinetic motion blur during the evening outdoor fireworks or sparkler exit.'
    ],
    ctaType: 'BOOKING',
    targetBoard: 'The Arlington Estate Luxury Weddings'
  },
  spadina_museum_vintage_editorial: {
    id: 'spadina_museum_vintage_editorial',
    sessionType: 'wedding',
    location: 'Spadina Museum Grounds, Toronto',
    toneKey: 'POETIC_FINE_ART',
    hook: '1920s heritage gardens overlooking the modern Toronto skyline.',
    narrative: 'Hidden just steps from Casa Loma, the historic apple orchards and stone balustrades of Spadina Museum hold an intoxicating sense of nostalgia. Documenting an editorial bridal session here is a journey into Gatsby-era glamour with sun-drenched perennial beds and antique stone staircases.',
    keyPoints: [
      'Heritage greenhouse side-lighting for bridal preparation details.',
      'Contrasting historic 1920s manor architecture with distant skyline vistas.',
      'Utilizing black and white film tonal gradients for vintage reverence.'
    ],
    ctaType: 'SAVE_AND_SHARE',
    targetBoard: 'Spadina Museum Editorial Weddings'
  },
  bronte_harbour_sunrise_maternity: {
    id: 'bronte_harbour_sunrise_maternity',
    sessionType: 'maternity',
    location: 'Bronte Heritage Waterfront, Oakville',
    toneKey: 'POETIC_FINE_ART',
    hook: 'The stillness of Lake Ontario at dawn, and the quiet beauty of new beginnings.',
    narrative: 'While most sessions take place at sunset, sunrise at Bronte Harbour holds an untouched, mirror-like calm. As pastel pink and soft periwinkle hues painted the horizon, we documented Maya enveloped in sheer linen along the rocky pier breakwater.',
    keyPoints: [
      'Glassy morning lake reflections free from wind turbulence.',
      'Soft pastel sunrise color palette of blush, lavender, and cool blue.',
      'Complete privacy on the beach before public park visitors arrive.'
    ],
    ctaType: 'BOOKING',
    targetBoard: 'Bronte Beach Sunrise Maternity'
  }
};

Object.assign(CAPTION_BLUEPRINTS, CAPTION_BLUEPRINTS_PART_3);


/**
 * Multi-Platform Social Media Adaptation Pipeline
 */
class MultiPlatformAdaptor {
  /**
   * Format for Instagram Feed (Single Image or Multi-Photo Post)
   */
  static formatInstagram({ hook, narrative, cta, hashtags = [], handle = '@hafsanoreenphotography' }) {
    const formattedHashtags = hashtags.slice(0, 24).join(' ');
    const lines = [
      hook,
      '',
      narrative,
      '',
      '—',
      `Fine-art photography & heirloom archives by ${handle}`,
      'Oakville • Burlington • Toronto • Worldwide',
      '',
      cta,
      '',
      '.',
      '.',
      '.',
      formattedHashtags
    ];
    return lines.join('\n');
  }

  /**
   * Format for Pinterest Rich Pin
   */
  static formatPinterest({ title, narrative, boardRecommendation, url = 'https://hafsanoreen.com' }) {
    const cleanDesc = narrative.replace(/[\r\n]+/g, ' ').substring(0, 480).trim();
    return {
      title: title.length > 95 ? title.substring(0, 92) + '...' : title,
      description: `${cleanDesc} | Hafsa Noreen Photography | Fine Art Wedding & Portrait Photographer in Oakville & Burlington, Ontario.`,
      board: boardRecommendation || 'Fine Art Wedding & Portrait Inspiration',
      destinationUrl: url
    };
  }

  /**
   * Format for Facebook Storytelling Post (Community-Focused, Long-Form)
   */
  static formatFacebook({ hook, narrative, cta, location, sessionType }) {
    const lines = [
      hook,
      '',
      narrative,
      '',
      `📍 Photographed in ${location} | Hafsa Noreen Photography`,
      `🌿 Discover our ${sessionType} collections and heirloom album options.`,
      '',
      cta,
      '',
      'Website: https://hafsanoreen.com',
      'Studio Inquiries: atelier@hafsanoreen.com | (647) 909-3135'
    ];
    return lines.join('\n');
  }

  /**
   * Format for LinkedIn Thought Leadership / Brand Craft Post
   */
  static formatLinkedIn({ hook, narrative, keyPoints = [], topic = 'Luxury Brand Craft' }) {
    const bullets = keyPoints.map(pt => `• ${pt}`).join('\n');
    const lines = [
      hook,
      '',
      narrative,
      '',
      `Key takeaways from our studio's approach to ${topic.toLowerCase()}:`,
      bullets,
      '',
      'In a digital-first world, how is your business preserving tangible client value?',
      '',
      '#LuxuryBranding #ClientExperience #CreativeDirection #BoutiqueBusiness #FineArtPhotography'
    ];
    return lines.join('\n');
  }
}


/**
 * Audio Pacing, Story Highlights & Testimonial Integration Engine
 */
const REEL_AUDIO_PROFILES = {
  ETHEREAL_PIANO: {
    name: 'Serene Acoustic Piano',
    mood: 'Emotional, nostalgic, unhurried, romantic',
    recommendedBpm: '45-55 BPM',
    transitionPacing: 'Slow 3.5s to 4.0s dissolves matching downbeats',
    bestFor: ['Fine Art Lakefront Weddings', 'Quiet In-Home Newborns']
  },
  VINTAGE_CINEMATIC: {
    name: 'Warm Cello & Ambient Drone',
    mood: 'Introspective, timeless, deeply moving',
    recommendedBpm: '50-60 BPM',
    transitionPacing: 'Lyrical 2.8s cuts capturing soft fabric flow',
    bestFor: ['Historic Estate Receptions', 'Dusk Escarpment Vows']
  },
  MODERN_MINIMALIST: {
    name: 'Subtle Electronic Ambience & Vinyl Crackle',
    mood: 'Chic, high-fashion, editorial restraint',
    recommendedBpm: '65-75 BPM',
    transitionPacing: 'Rhythmic 1.5s cuts matching architectural perspective shifts',
    bestFor: ['Editorial Bridal Details', 'Modern Toronto Architectural Sessions']
  }
};

const STORY_HIGHLIGHT_CATEGORIES = {
  ATELIER_WEDDINGS: {
    icon: '💍',
    title: 'Weddings',
    description: 'Full-day celebrations at Ontario country estates and lakeside manors.'
  },
  MOTHERHOOD: {
    icon: '🌸',
    title: 'Motherhood',
    description: 'Fine-art maternity, hospital fresh-48, and in-home newborn sanctuaries.'
  },
  THE_ALBUMS: {
    icon: '📖',
    title: 'Heirlooms',
    description: 'Handcrafted Italian leather albums and archival museum cotton rag prints.'
  },
  KIND_WORDS: {
    icon: '🤍',
    title: 'Kind Words',
    description: 'Heartfelt client experiences from couples and mothers across Halton and the GTA.'
  },
  INVESTMENT_FAQ: {
    icon: '✨',
    title: 'Booking & FAQ',
    description: 'Session flow, lighting guidance, permit policies, and retainer reserves.'
  }
};

class TestimonialSocialEngine {
  /**
   * Format client review into high-converting editorial social post
   */
  static formatReviewPost({ clientNames, venue, quote, sessionType = 'Wedding' }) {
    const formattedQuote = `"${quote}"`;
    const lines = [
      formattedQuote,
      '',
      `— ${clientNames} | ${venue}`,
      '',
      `There is no greater honor for our atelier than hearing how these heirlooms bring tears to our clients' eyes years later. Capturing your ${sessionType.toLowerCase()} is not just about one day—it is about the legacy you hold in your hands for generations.`,
      '',
      CALLS_TO_ACTION.BOOKING[0],
      '',
      '.',
      '.',
      HASHTAG_VAULTS.SESSION_TYPES[sessionType.toLowerCase()] ? HASHTAG_VAULTS.SESSION_TYPES[sessionType.toLowerCase()].slice(0, 10).join(' ') : '#fineartwedding'
    ];
    return lines.join('\n');
  }
}


/**
 * Quality, Hashtag Clustering & Social Compliance Engine
 */
class SocialComplianceEngine {
  /**
   * Optimize and cluster hashtags into tiered distribution
   */
  static clusterHashtags({ sessionType = 'wedding', location = 'Oakville', maxTags = 22 }) {
    const regionalKey = location.toLowerCase().includes('burlington') ? 'burlington'
      : location.toLowerCase().includes('milton') ? 'milton'
      : location.toLowerCase().includes('toronto') ? 'toronto_gta'
      : location.toLowerCase().includes('hamilton') ? 'hamilton_niagara'
      : 'oakville';

    const regionalTags = HASHTAG_VAULTS.REGIONAL[regionalKey] || HASHTAG_VAULTS.REGIONAL.oakville;
    const sessionKey = sessionType.toLowerCase().includes('maternity') ? 'maternity'
      : sessionType.toLowerCase().includes('newborn') ? 'newborn'
      : sessionType.toLowerCase().includes('family') ? 'family'
      : sessionType.toLowerCase().includes('brand') ? 'branding'
      : 'wedding';

    const sessionTags = HASHTAG_VAULTS.SESSION_TYPES[sessionKey] || HASHTAG_VAULTS.SESSION_TYPES.wedding;
    const aestheticTags = HASHTAG_VAULTS.AESTHETIC_AND_FILM;

    // Distribute tags: 40% regional, 40% session-specific, 20% aesthetic
    const combined = Array.from(new Set([
      ...regionalTags.slice(0, 8),
      ...sessionTags.slice(0, 10),
      ...aestheticTags.slice(0, 4)
    ]));

    return combined.slice(0, Math.min(30, maxTags));
  }

  /**
   * Validate copy character lengths across social networks
   */
  static validateCompliance({ instagramCaption, pinterestData, linkedInText, facebookText }) {
    const limits = {
      instagramMax: 2200,
      pinterestTitleMax: 100,
      pinterestDescMax: 500,
      linkedInMax: 3000,
      facebookMax: 5000
    };

    const checks = {
      instagramValid: instagramCaption.length <= limits.instagramMax,
      instagramCharCount: instagramCaption.length,
      pinterestValid: pinterestData.title.length <= limits.pinterestTitleMax && pinterestData.description.length <= limits.pinterestDescMax,
      pinterestDescCount: pinterestData.description.length,
      linkedInValid: linkedInText.length <= limits.linkedInMax,
      linkedInCharCount: linkedInText.length,
      facebookValid: facebookText.length <= limits.facebookMax,
      facebookCharCount: facebookText.length
    };

    return {
      allPassed: checks.instagramValid && checks.pinterestValid && checks.linkedInValid && checks.facebookValid,
      checks
    };
  }

  /**
   * Analyze emoji density for luxury fine-art aesthetic restraint
   */
  static analyzeEmojiDensity(text) {
    const emojiRegex = /[🌀-🧿☀-⛿✀-➿]/gu;
    const matches = text.match(emojiRegex) || [];
    const count = matches.length;
    const words = text.trim().split(/\s+/).length;
    const ratio = count / Math.max(1, words);

    let status = 'Optimal Luxury Restraint';
    if (count > 5 || ratio > 0.05) {
      status = 'Heavy (Recommend reducing for luxury brand tone)';
    }

    return {
      emojiCount: count,
      densityRatio: Math.round(ratio * 100) / 100,
      status
    };
  }
}


/**
 * Main Production Social Media Editorial & Caption Generator Facade
 */
class CaptionGenerator {
  /**
   * Execute comprehensive caption and multi-platform social generation pipeline
   */
  static execute(params = {}) {
    this.validateParams(params);

    const {
      photoDescription,
      sessionType = 'wedding',
      location = 'Oakville',
      tone = 'POETIC_FINE_ART',
      blueprintKey,
      customHook,
      customNarrative,
      ctaType = 'BOOKING',
      targetHashtagCount = 22
    } = params;

    // 1. Resolve blueprint or construct dynamic payload
    let blueprint = CAPTION_BLUEPRINTS[blueprintKey];
    if (!blueprint) {
      const activeTone = TONES[tone] || TONES.POETIC_FINE_ART;
      const desc = photoDescription || `Fine-art ${sessionType.toLowerCase()} portraits captured with natural golden light in ${location}.`;

      blueprint = {
        id: 'dynamic_social_post',
        sessionType,
        location,
        toneKey: tone,
        hook: customHook || activeTone.sampleHook,
        narrative: customNarrative || `${desc} In every frame, our focus remains on preserving the quiet, genuine connection that makes your love story sacred.`,
        keyPoints: [
          'Prioritizing directional natural light over flat flash exposures.',
          'Allowing authentic moments to unfold organically without rigid direction.',
          'Preserving generational milestones in handcrafted museum-grade albums.'
        ],
        ctaType: ctaType || 'BOOKING',
        targetBoard: `Fine Art ${sessionType} Photography ${location}`
      };
    }

    const resolvedSessionType = blueprint.sessionType || sessionType;
    const resolvedLocation = blueprint.location || location;
    const resolvedHook = customHook || blueprint.hook;
    const resolvedNarrative = customNarrative || blueprint.narrative;
    const resolvedCtaType = ctaType || blueprint.ctaType || 'BOOKING';

    const ctaOptions = CALLS_TO_ACTION[resolvedCtaType] || CALLS_TO_ACTION.BOOKING;
    const cta = ctaOptions[0];

    // 2. Hashtags & Best Times
    const hashtags = SocialComplianceEngine.clusterHashtags({
      sessionType: resolvedSessionType,
      location: resolvedLocation,
      maxTags: targetHashtagCount
    });

    const timingInfo = PEAK_TIMING_MATRIX[resolvedSessionType.toLowerCase()] || PEAK_TIMING_MATRIX.wedding;

    // 3. Platform Formats
    const instagramCaption = MultiPlatformAdaptor.formatInstagram({
      hook: resolvedHook,
      narrative: resolvedNarrative,
      cta,
      hashtags
    });

    const pinterestData = MultiPlatformAdaptor.formatPinterest({
      title: `${resolvedHook} | ${resolvedLocation}`,
      narrative: resolvedNarrative,
      boardRecommendation: blueprint.targetBoard
    });

    const facebookPost = MultiPlatformAdaptor.formatFacebook({
      hook: resolvedHook,
      narrative: resolvedNarrative,
      cta,
      location: resolvedLocation,
      sessionType: resolvedSessionType
    });

    const linkedInPost = MultiPlatformAdaptor.formatLinkedIn({
      hook: resolvedHook,
      narrative: resolvedNarrative,
      keyPoints: blueprint.keyPoints,
      topic: `${resolvedSessionType} Storytelling`
    });

    // 4. Scripts (Carousel 10-slide and Reel Voiceover)
    const carouselScript = StorytellingScriptEngine.buildCarouselScript({
      topic: `${resolvedSessionType} in ${resolvedLocation}`,
      hookText: resolvedHook,
      keyPoints: blueprint.keyPoints,
      ctaType: resolvedCtaType
    });

    const reelScript = StorytellingScriptEngine.buildReelVoiceoverScript({
      topic: resolvedNarrative,
      sessionType: resolvedSessionType,
      location: resolvedLocation
    });

    // 5. Compliance & Quality Analysis
    const compliance = SocialComplianceEngine.validateCompliance({
      instagramCaption,
      pinterestData,
      linkedInText: linkedInPost,
      facebookText: facebookPost
    });

    const emojiAnalysis = SocialComplianceEngine.analyzeEmojiDensity(instagramCaption);

    return {
      sessionType: resolvedSessionType,
      location: resolvedLocation,
      tone: TONES[blueprint.toneKey] || TONES.POETIC_FINE_ART,
      caption: instagramCaption,
      hashtags,
      bestTime: timingInfo.weekdays,
      timingDetails: timingInfo,
      platforms: {
        instagram: {
          feedCaption: instagramCaption,
          characterCount: compliance.checks.instagramCharCount,
          carousel10Slides: carouselScript
        },
        reelsOrTikTok: reelScript,
        pinterest: pinterestData,
        facebook: facebookPost,
        linkedIn: linkedInPost
      },
      qualityAudit: {
        compliance,
        emojiAnalysis
      }
    };
  }


  /**
   * Validate execution parameters
   */
  static validateParams(params) {
    if (!params || typeof params !== 'object') {
      throw new Error('CaptionGenerator: Execution parameters must be an object.');
    }
    if (params.targetHashtagCount && (isNaN(Number(params.targetHashtagCount)) || Number(params.targetHashtagCount) < 1)) {
      throw new Error('CaptionGenerator: targetHashtagCount must be a positive number.');
    }
    return true;
  }

  /**
   * List available pre-engineered caption blueprints
   */
  static listBlueprints() {
    return Object.keys(CAPTION_BLUEPRINTS).map(k => ({
      key: k,
      sessionType: CAPTION_BLUEPRINTS[k].sessionType,
      location: CAPTION_BLUEPRINTS[k].location,
      toneKey: CAPTION_BLUEPRINTS[k].toneKey,
      hook: CAPTION_BLUEPRINTS[k].hook
    }));
  }

  /**
   * List available aesthetic voice and tone registers
   */
  static listTones() {
    return Object.keys(TONES).map(k => ({
      key: k,
      label: TONES[k].label,
      description: TONES[k].description,
      sampleHook: TONES[k].sampleHook
    }));
  }

  /**
   * Run comprehensive diagnostic self-tests
   */
  static runDiagnostics() {
    const results = {
      timestamp: new Date().toISOString(),
      blueprintsTested: 0,
      passed: true,
      checks: {}
    };

    const testKeys = ['paletta_lakefront_wedding', 'gairloch_gardens_maternity', 'atelier_archival_craft'];
    testKeys.forEach(k => {
      const output = this.execute({ blueprintKey: k });
      results.blueprintsTested++;

      const hasInstagram = Boolean(output.caption && output.caption.includes('@hafsanoreenphotography'));
      const hasHashtags = Array.isArray(output.hashtags) && output.hashtags.length >= 10;
      const hasCarousel = Boolean(output.platforms.instagram.carousel10Slides.length >= 5);
      const hasReel = Boolean(output.platforms.reelsOrTikTok.bodyVoiceover.length > 0);
      const hasPinterest = Boolean(output.platforms.pinterest.title && output.platforms.pinterest.description);
      const hasFacebook = Boolean(output.platforms.facebook.includes('Hafsa Noreen Photography'));
      const hasLinkedIn = Boolean(output.platforms.linkedIn.includes('#LuxuryBranding'));
      const isCompliant = Boolean(output.qualityAudit.compliance.allPassed);

      const allValid = hasInstagram && hasHashtags && hasCarousel && hasReel && hasPinterest && hasFacebook && hasLinkedIn && isCompliant;

      results.checks[k] = {
        passed: allValid,
        hashtagCount: output.hashtags.length,
        instagramCharCount: output.platforms.instagram.characterCount,
        carouselSlidesCount: output.platforms.instagram.carousel10Slides.length,
        bestTime: output.bestTime
      };

      if (!allValid) results.passed = false;
    });

    // Test backward compatibility execution with minimal params
    const minimalOutput = this.execute({
      photoDescription: 'Golden hour embrace by the pebble beach',
      location: 'Paletta Mansion',
      sessionType: 'Wedding'
    });

    const minimalPassed = Boolean(
      minimalOutput.caption &&
      minimalOutput.hashtags.length > 0 &&
      minimalOutput.bestTime
    );

    results.checks.minimal_backward_compatibility = {
      passed: minimalPassed,
      bestTime: minimalOutput.bestTime,
      hashtagCount: minimalOutput.hashtags.length
    };

    if (!minimalPassed) results.passed = false;

    return results;
  }
}

module.exports = CaptionGenerator;
