/**
 * HAFFU — Production Editorial Publishing, Local SEO & Content Intelligence Engine
 * @version 5.0.0
 * @author Hafsa Noreen Photography
 */

const crypto = require('crypto');

/**
 * Editorial Pillars & Taxonomy
 */
const CONTENT_PILLARS = {
  REAL_WEDDINGS: {
    id: 'real_weddings',
    label: 'Real Wedding Chronicles',
    slug: 'real-weddings',
    description: 'Intimate visual stories documenting high-end estate and garden weddings across Southern Ontario.',
    defaultKeywords: ['fine art wedding photographer', 'luxury wedding Ontario', 'editorial bride', 'golden hour vows']
  },
  MATERNITY_STYLING: {
    id: 'maternity_styling',
    label: 'Fine-Art Maternity & Motherhood',
    slug: 'maternity-styling',
    description: 'Thoughtful guidance on maternal silhouettes, natural organic wardrobe palettes, and ideal gestation timing.',
    defaultKeywords: ['maternity photoshoot Oakville', 'fine art pregnancy portraits', 'maternity gown styling', 'natural light motherhood']
  },
  FAMILY_HEIRLOOMS: {
    id: 'family_heirlooms',
    label: 'Family & Generational Portraits',
    slug: 'family-heirlooms',
    description: 'Documenting multi-generational family bonds through unhurried observational storytelling and heirloom wall collections.',
    defaultKeywords: ['family photographer Oakville', 'heirloom family portraits', 'candid outdoor family', 'Halton conservation family session']
  },
  VENUE_SPOTLIGHTS: {
    id: 'venue_spotlights',
    label: 'Venue Spotlights & Location Guides',
    slug: 'venue-guides',
    description: 'Comprehensive photography permits, architectural aesthetics, and lighting guides for premier Canadian heritage venues.',
    defaultKeywords: ['Paletta Mansion wedding', 'Langdon Hall photography', 'Gairloch Gardens photoshoot', 'luxury GTA venues']
  },
  ARTISTIC_PHILOSOPHY: {
    id: 'artistic_philosophy',
    label: 'Artistic Craft & Client Care',
    slug: 'craft-and-care',
    description: 'Behind-the-lens essays on film-inspired tonal grading, archival album binding, and unposed emotional preservation.',
    defaultKeywords: ['fine art photography philosophy', 'timeless heirloom albums', 'natural light portraiture', 'color grading craft']
  },
  TIMELINES_AND_PLANNING: {
    id: 'timelines_and_planning',
    label: 'Wedding Timelines & Light Planning',
    slug: 'wedding-planning-guides',
    description: 'Photography-first scheduling blueprints designed to maximize natural golden hour lighting and minimize wedding day friction.',
    defaultKeywords: ['wedding photography timeline', 'golden hour wedding schedule', 'first look pros and cons']
  }
};


/**
 * Regional Venues & Municipal Bylaw Registry (Part 1: Halton, Cambridge, Toronto, Ancaster)
 */
const REGIONAL_VENUES_PART_1 = {
  paletta: {
    name: 'Paletta Mansion',
    city: 'Burlington',
    region: 'Halton Region',
    permitRequired: true,
    permitCostCAD: 325,
    permitNoticeDays: 14,
    rainShelter: 'Covered historic stone portico and south veranda',
    aesthetic: 'Historic 1930 English brick manor, sprawling estate lawns, mature black walnut grove, and private Lake Ontario pebble beach',
    bestTime: '90 minutes prior to nautical sunset for ethereal rim-light against open water',
    dronesAllowed: false,
    parking: 'Free on-site parking lot adjacent to the mansion gate',
    url: 'https://hafsanoreen.com/burlington-photographer'
  },
  gairloch: {
    name: 'Gairloch Gardens',
    city: 'Oakville',
    region: 'Halton Region',
    permitRequired: true,
    permitCostCAD: 285,
    permitNoticeDays: 10,
    rainShelter: 'Oakville Galleries exterior covered walkways',
    aesthetic: 'Formal manicured rose gardens, historic Tudor-style stone gallery, footbridge, and rocky elevated bluff overlooking Lake Ontario',
    bestTime: 'Early morning golden hour (7:00 AM) or 75 minutes prior to summer sunset',
    dronesAllowed: false,
    parking: 'Two designated paved municipal lots along Cairncroft Road',
    url: 'https://hafsanoreen.com/oakville-photographer'
  },
  mount_nemo: {
    name: 'Mount Nemo Conservation Area',
    city: 'Milton / Burlington',
    region: 'Conservation Halton',
    permitRequired: true,
    permitCostCAD: 175,
    permitNoticeDays: 7,
    rainShelter: 'Dense deciduous tree canopy only (outdoor weather contingency required)',
    aesthetic: 'Dramatic 30-meter Niagara Escarpment limestone cliff edge, ancient cedar trees, and panoramic countryside valley horizon',
    bestTime: 'Autumn late afternoons (3:30 PM - 5:30 PM in October) for radiant foliage canopy',
    dronesAllowed: false,
    parking: 'Reservation-based Conservation Halton vehicle gate',
    url: 'https://hafsanoreen.com/milton-photographer'
  },
  langdon_hall: {
    name: 'Langdon Hall Country House Hotel & Spa',
    city: 'Cambridge',
    region: 'Waterloo Region',
    permitRequired: true,
    permitCostCAD: 750,
    permitNoticeDays: 30,
    rainShelter: 'Main House conservatory, grand hall fireplace, and covered summer terrace',
    aesthetic: 'Relais & Châteaux luxury country estate, 1898 Federal Revival architecture, Carolinian forest trails, and chef kitchen gardens',
    bestTime: 'Mid-afternoon soft dappled shade transitioning into golden hour orchard light',
    dronesAllowed: false,
    parking: 'Complimentary guest valet and estate self-parking',
    url: 'https://hafsanoreen.com/weddings'
  },
  graydon_hall: {
    name: 'Graydon Hall Manor',
    city: 'Toronto',
    region: 'Greater Toronto Area',
    permitRequired: true,
    permitCostCAD: 650,
    permitNoticeDays: 21,
    rainShelter: 'Grand dining room, library, and 160-foot canopy terrace',
    aesthetic: '1936 Georgian manor with cascading stone fountain terraces, formal boxwood parterre gardens, and wrought-iron balustrades',
    bestTime: 'Late afternoon courtyard ceremony followed by twilight terrace candlelit portraits',
    dronesAllowed: false,
    parking: 'Private cobblestone courtyard with attendant parking',
    url: 'https://hafsanoreen.com/toronto-photographer'
  },
  ancaster_mill: {
    name: 'Ancaster Mill',
    city: 'Ancaster / Hamilton',
    region: 'Hamilton Region',
    permitRequired: true,
    permitCostCAD: 350,
    permitNoticeDays: 14,
    rainShelter: 'Streamside chapel and covered timber-framed bridge',
    aesthetic: 'Restored 1800s stone flour mill, rushing natural waterfalls, wooded creek trails, and architectural millstones',
    bestTime: 'Overcast diffused morning light or 60 minutes before sunset along the creek bed',
    dronesAllowed: false,
    parking: 'Dedicated multi-tier paved event parking lot',
    url: 'https://hafsanoreen.com/weddings'
  }
};


/**
 * Regional Venues & Municipal Bylaw Registry (Part 2: Kleinburg, Elora, RBG, Spadina, Bronte, Knox)
 */
const REGIONAL_VENUES_PART_2 = {
  arlington_estate: {
    name: 'The Arlington Estate',
    city: 'Kleinburg / Vaughan',
    region: 'York Region',
    permitRequired: true,
    permitCostCAD: 500,
    permitNoticeDays: 21,
    rainShelter: 'East & West wings covered grand loggia with crystal chandeliers',
    aesthetic: '7-acre private estate with manicured promenade grounds, willow-fringed ponds, and modern European luxury architecture',
    bestTime: 'Golden hour reflection photography alongside the estate fountain pond',
    dronesAllowed: true,
    parking: 'Expansive private guest parking with EV charging stations',
    url: 'https://hafsanoreen.com/weddings'
  },
  elora_mill: {
    name: 'Elora Mill Hotel & Spa',
    city: 'Elora',
    region: 'Wellington County',
    permitRequired: true,
    permitCostCAD: 450,
    permitNoticeDays: 21,
    rainShelter: 'The Foundry indoor gallery and glass-enclosed viewing pavilion',
    aesthetic: 'Limestone historic mill perched directly above the rushing waters of the Grand River and Elora Gorge cliffs',
    bestTime: 'Mid-morning mist over the falls or 5:00 PM gorge twilight glow',
    dronesAllowed: false,
    parking: 'Valet and town square public lots',
    url: 'https://hafsanoreen.com/weddings'
  },
  rbg_gardens: {
    name: 'Royal Botanical Gardens (Hendrie Park & Rock Garden)',
    city: 'Burlington / Hamilton',
    region: 'Halton / Hamilton Border',
    permitRequired: true,
    permitCostCAD: 350,
    permitNoticeDays: 14,
    rainShelter: 'Mediterranean Garden glasshouse conservatory',
    aesthetic: '2,700 acres of curated botanical diversity, historic stone Rock Garden waterfalls, Morrison Woodland, and formal rose arbors',
    bestTime: 'Late afternoon in early June for peak peony blossom or October for deciduous maple coloring',
    dronesAllowed: false,
    parking: 'RBG Centre paved lots',
    url: 'https://hafsanoreen.com/burlington-photographer'
  },
  spadina_museum: {
    name: 'Spadina Museum: Historic House & Gardens',
    city: 'Toronto',
    region: 'Central Toronto',
    permitRequired: true,
    permitCostCAD: 420,
    permitNoticeDays: 14,
    rainShelter: 'Historic greenhouse and covered manor entryway',
    aesthetic: '1920s historic Toronto mansion atop Davenport hill overlooking city skyline, authentic orchard, and vintage perennial beds',
    bestTime: 'Late summer late afternoon light cutting through heritage apple trees',
    dronesAllowed: false,
    parking: 'Limited permit parking on Austin Terrace',
    url: 'https://hafsanoreen.com/toronto-photographer'
  },
  bronte_harbour: {
    name: 'Bronte Heritage Waterfront & Bluffs',
    city: 'Oakville',
    region: 'Halton Region',
    permitRequired: false,
    permitCostCAD: 0,
    permitNoticeDays: 0,
    rainShelter: 'Lighthouse square gazebo structure',
    aesthetic: 'Charming maritime marina boardwalk, pier lighthouse, rocky breakwaters, and natural beachfront dune grasses',
    bestTime: 'Sunrise for glassy untouched water reflections or sunset for pastel pink lake skies',
    dronesAllowed: false,
    parking: 'Bronte Beach municipal metered lot',
    url: 'https://hafsanoreen.com/oakville-photographer'
  },
  knox_chapel: {
    name: 'Knox Heritage Chapel & Grounds',
    city: 'Oakville',
    region: 'Old Oakville',
    permitRequired: true,
    permitCostCAD: 200,
    permitNoticeDays: 14,
    rainShelter: 'Historic wooden chapel interior and arched entranceway',
    aesthetic: 'Circa-1800s white clapboard chapel surrounded by historic Old Oakville cobblestone streets and heritage brick homes',
    bestTime: 'Mid-afternoon courtyard diffused light through centenary oak branches',
    dronesAllowed: false,
    parking: 'Downtown Oakville street and municipal garage parking',
    url: 'https://hafsanoreen.com/oakville-photographer'
  }
};

const REGIONAL_VENUES = Object.assign({}, REGIONAL_VENUES_PART_1, REGIONAL_VENUES_PART_2);

const ATELIER_AUTHOR = {
  name: 'Hafsa Noreen',
  title: 'Principal Artist & Fine-Art Editorial Photographer',
  bio: 'Hafsa Noreen is an award-winning fine-art wedding and portrait artist based in Oakville, Ontario. Her signature aesthetic pairs luminous natural light with timeless editorial restraint, preserving multigenerational love stories across Halton, Toronto, and destination estates worldwide.',
  email: 'atelier@hafsanoreen.com',
  phone: '+1-647-909-3135',
  avatar: 'https://hafsanoreen.com/assets/images/author-hafsa.jpeg',
  social: {
    instagram: 'https://instagram.com/hafsanoreenphotography',
    website: 'https://hafsanoreen.com',
    pinterest: 'https://pinterest.com/hafsanoreenphoto'
  }
};


/**
 * Master Editorial Blueprints: Blueprint 1 (Paletta Autumn Wedding)
 */
const BLUEPRINT_PALETTA = {
  paletta_autumn_wedding: {
    id: 'paletta_autumn_wedding',
    pillar: 'REAL_WEDDINGS',
    title: 'An Intimate Autumn Lakefront Wedding at Paletta Mansion',
    subtitle: 'Golden hour vows, English estate brickwork, and timeless editorial romance along the shores of Lake Ontario in Burlington.',
    venueKey: 'paletta',
    targetAudience: 'Couples planning an intimate, heritage lakeside estate wedding in Halton Region',
    faqs: [
      {
        question: 'Do we need a photography permit for wedding portraits at Paletta Mansion?',
        answer: 'Yes, the City of Burlington requires an official commercial photography permit for Paletta Mansion grounds ($325 CAD for a 2-hour window). When you commission our atelier, we handle permit coordination with the city recreation department on your behalf.'
      },
      {
        question: 'What is the most favorable time of day for portraits at Paletta Park?',
        answer: 'We schedule core couple portraits approximately 75 to 90 minutes before sunset. This allows us to utilize the natural light reflection bouncing off Lake Ontario, eliminating harsh facial shadows while creating warm rim-lighting through the mature tree canopy.'
      },
      {
        question: 'What is the bad weather rain contingency plan at Paletta?',
        answer: 'Paletta features an expansive covered historic stone veranda and portico on the lakeside terrace, allowing for luminous, dry outdoor portraits even during steady rainfall.'
      }
    ],
    sections: [
      {
        heading: 'The Allure of Lakefront Estate Romance',
        content: 'There is an intoxicating quietude that settles over Paletta Lakefront Park as autumn arrives in Burlington. The historic English manor, standing proudly against the shoreline of Lake Ontario, offers an unparalleled canvas for couples seeking an atmosphere of heritage nobility paired with breezy, untamed lake vistas. On Sarah and Julian’s wedding day, the October light cast a rich honeyed amber across the stone terrace, creating natural luminous rim-lighting that elevated every glance and whispered exchange.',
        tipBox: {
          title: 'Light Masterclass: The Lake Ontario Water Surface Effect',
          content: 'Water surfaces act as massive natural softboxes. When shooting lakeside portraits at Paletta, we position our couples with their backs slightly angled to the open water, letting the reflective surface fill under-eye shadows with delicate ambient fill light while the setting sun creates warm halo hair-light.'
        }
      },
      {
        heading: 'Curating Candid Narrative Over Rigid Posing',
        content: 'Rather than rushing through an exhausting checklist of rigid poses, we created space for our couple to simply inhabit the day. From the quiet morning preparations in the bridal suite—where delicate Chantilly lace caught the morning side-light—to their private first look beneath the weeping willows, every frame was captured with quiet observational reverence. Sarah’s silk veil billowed gently in the lake breeze, creating kinetic silhouettes that feel both effortless and cinematic.',
        quote: 'Hafsa did not simply photograph our wedding; she captured the exact way Julian looked at me before we spoke our vows—a moment I will cherish in my heart and our Italian leather album for the rest of my days.'
      },
      {
        heading: 'Heirloom Curation & Handcrafted Album Binding',
        content: 'Following the celebration, Sarah and Julian chose our signature 12x12 bespoke Italian heirloom album bound in distressed tobacco Tuscan leather. Each page, printed on 100% museum-grade cotton rag with archival pigment inks, tells the unfolding chapters of their day with graceful breathing room and thoughtful editorial pairing.',
        ctaRecommendation: 'Explore our Bespoke Wedding Collections featuring full-day coverage and handmade Italian albums.'
      }
    ]
  }
};


/**
 * Master Editorial Blueprints: Blueprint 2 (Langdon Hall Country House)
 */
const BLUEPRINT_LANGDON = {
  langdon_hall_country_wedding: {
    id: 'langdon_hall_country_wedding',
    pillar: 'REAL_WEDDINGS',
    title: 'A Timeless Relais & Châteaux Celebration at Langdon Hall',
    subtitle: 'English garden elegance, century-old Carolinian woodlands, and Michelin-caliber dining in the heart of Cambridge, Ontario.',
    venueKey: 'langdon_hall',
    targetAudience: 'Couples drawn to luxury country house hospitality, heritage architecture, and discreet refined elegance',
    faqs: [
      {
        question: 'Does Langdon Hall permit outside wedding photographers?',
        answer: 'Yes, Langdon Hall welcomes accredited external fine-art photographers. Photographers must provide proof of $2,000,000 commercial liability insurance and register with estate event concierge prior to arrival.'
      },
      {
        question: 'Can we photograph portraits in the Langdon Hall kitchen gardens?',
        answer: 'Yes, the raised chef vegetable gardens and orchard offer exceptional organic textures and dappled afternoon light, particularly between June and October.'
      }
    ],
    sections: [
      {
        heading: 'European Country House Grandeur in Southern Ontario',
        content: 'Approaching Langdon Hall down its winding private driveway enveloped by towering Carolinian forest immediately transports you into a world of unhurried elegance. Dating back to 1898, this Federal Revival summer estate marries English country house warmth with impeccable hospitality. For Elena and Christian, Langdon Hall offered an atmosphere of understated luxury where heritage brickwork, lush boxwood parterres, and whispering hemlocks framed their vows.',
        tipBox: {
          title: 'Color Palette Advice: Organic Earth Tones at Langdon Hall',
          content: 'Because Langdon Hall features rich red brick, deep ivy, and lush forest greens, we recommend bridal styling incorporating warm ivory, champagne, muted olive, and antique brass details to harmonize with the heritage grounds.'
        }
      },
      {
        heading: 'Intimate Ceremonies Beneath Ancient Canopies',
        content: 'Their ceremony took place on the manicured summer lawn, where dappled sunlight filtered through centenary maple boughs. We documented the exchange of vows with medium telephoto focal lengths, allowing the couple and their guests to remain fully present in the emotional weight of the moment without intrusive camera presence.',
        quote: 'Walking through the orchard at dusk with Hafsa felt like a quiet pause just for the two of us in the middle of our celebration.'
      },
      {
        heading: 'Atmospheric Twilight on the Firshade Terrace',
        content: 'As evening settled, guests gathered on the Firshade Terrace illuminated by hundreds of pillar candles and antique iron lanterns. The low ambient glow permitted atmospheric fine-art film captures with rich shadow gradients and authentic intimacy.',
        ctaRecommendation: 'Inquire about our Multi-Day Estate Wedding Collections for Langdon Hall celebrations.'
      }
    ]
  }
};


/**
 * Master Editorial Blueprints: Blueprint 3 (Graydon Hall Manor Terrace)
 */
const BLUEPRINT_GRAYDON = {
  graydon_hall_terrace_wedding: {
    id: 'graydon_hall_terrace_wedding',
    pillar: 'REAL_WEDDINGS',
    title: 'Georgian Terrace Romance at Graydon Hall Manor',
    subtitle: 'Stone fountain terraces, boxwood courtyards, and Parisian-inspired bridal portraiture in Toronto.',
    venueKey: 'graydon_hall',
    targetAudience: 'Couples dreaming of European elegance and couture fashion aesthetic without leaving the city',
    faqs: [
      {
        question: 'What makes Graydon Hall unique for editorial wedding photography?',
        answer: 'Graydon Hall features a 160-foot stone terrace overlooking formal cascading fountains and manicured boxwood gardens reminiscent of 18th-century French châteaux, offering magnificent architectural perspective lines.'
      },
      {
        question: 'Are indoor portraits possible if it rains on our wedding day?',
        answer: 'Yes, Graydon Hall interior is exquisite, featuring working stone fireplaces, intricate plaster mouldings, a paneled library, and grand mahogany staircases illuminated by vintage bay windows.'
      }
    ],
    sections: [
      {
        heading: 'Old-World Grandeur in the Heart of Toronto',
        content: 'Stepping onto the grounds of Graydon Hall Manor feels remarkably like arriving at a secluded French country château. Designed in 1936 by architect George & Moorhouse, this Georgian manor stands as one of Toronto’s rarest architectural gems. For Chloe and Marcus, the stone balustrades, classical statues, and tiered fountain courtyards offered an editorial aesthetic that paid homage to vintage European high fashion.',
        tipBox: {
          title: 'Framing Technique: Architectural Symmetry and Vanishing Lines',
          content: 'At Graydon Hall, we utilize the long stone balustrades and manicured parterre hedges as strong leading lines. Positioning the bride at the central terrace fountain apex creates natural classical balance reminiscent of Vogue bridal spreads.'
        }
      },
      {
        heading: 'The Magic of Courtyard Twilight and Al Fresco Dining',
        content: 'Dinner was served under the covered terrace canopy amidst cascading white wisteria and crystal chandeliers. As twilight settled over Don Valley, we captured unposed speeches filled with joyous tears, clinking champagne glasses, and candlelight dancing across stone facades.',
        quote: 'Seeing our wedding portraits was like looking at the pages of a high-fashion art monograph. Hafsa captured the architectural elegance and our raw connection effortlessly.'
      },
      {
        heading: 'Preserving Fine-Art Prints for Future Heirlooms',
        content: 'Every print from Chloe and Marcus’s gallery was crafted with pigment-based archival inks onto heavy mould-made rag paper, ensuring their great-grandchildren will witness the beauty of their terrace vows with pristine tonal fidelity.',
        ctaRecommendation: 'Schedule an Atelier Bridal Consultation for Graydon Hall Manor weddings.'
      }
    ]
  }
};


/**
 * Master Editorial Blueprints: Blueprint 4 (Gairloch Gardens Maternity)
 */
const BLUEPRINT_GAIRLOCH = {
  gairloch_gardens_maternity: {
    id: 'gairloch_gardens_maternity',
    pillar: 'MATERNITY_STYLING',
    title: 'The Art of Maternity Portraiture: Styling & Timing at Gairloch Gardens',
    subtitle: 'A thoughtful guide to silhouette, wardrobe color palettes, and the ideal window for timeless motherhood imagery in Oakville.',
    venueKey: 'gairloch',
    targetAudience: 'Expectant mothers seeking refined, fine-art motherhood portraits in Oakville and Halton',
    faqs: [
      {
        question: 'When is the ideal gestation week to schedule maternity portraits?',
        answer: 'We recommend scheduling your session between weeks 28 and 34. During this timeframe, your baby bump is distinct and rounded, while you remain energetic and comfortable for gentle strolls along garden paths and rocky shoreline bluffs.'
      },
      {
        question: 'Does the atelier provide client wardrobe gowns?',
        answer: 'Yes, our atelier provides an exclusive Client Wardrobe collection featuring European linen wraps, bespoke silk chiffon gowns, and knit duster sets in ivory, champagne, and muted blush.'
      },
      {
        question: 'Can my partner and older children be included in the session?',
        answer: 'Absolutely. We consider motherhood a generational journey. Partners and older siblings are warmly incorporated into the storytelling.'
      }
    ],
    sections: [
      {
        heading: 'Finding the Golden Window: Weeks 28 to 34',
        content: 'One of the most frequent questions expectant mothers ask our studio is: When is the ideal time to schedule our fine-art maternity session? We recommend booking between weeks 28 and 34 of pregnancy. During this gestational window, your baby bump is beautifully rounded and pronounced, yet you still feel comfortable, energetic, and mobile enough to stroll through romantic garden paths and lake bluffs.',
        tipBox: {
          title: 'Timing Insight: Golden Hour Warmth',
          content: 'We schedule all outdoor maternity commissions during the 75 minutes immediately preceding sunset. The low sun angle accentuates the soft curve of your bump with warm sculptural shadows rather than harsh midday downlighting.'
        }
      },
      {
        heading: 'Curating Your Wardrobe: Textures, Hues & Fluid Fabrics',
        content: 'Wardrobe is the cornerstone of fine-art motherhood photography. We steer away from rigid, heavily patterned dresses or synthetic satins that create distracting glare. Instead, we embrace natural organic fabrics—breathable raw silks, layered chiffon, tactile linen knits, and delicate point d esprit tulle. Monochromatic neutral tones—warm ivory, champagne, brushed stone, dusty rose, and muted sage—harmonize flawlessly with the lush foliage of Oakville rose gardens and rocky beaches.',
        quote: 'Pregnancy is a transient, sacred threshold. Dressing in soft, flowing fabrics allows the wind to sculpt your silhouette, turning a simple portrait into a sculptural ode to motherhood.'
      },
      {
        heading: 'Incorporating Partners and Siblings with Gentle Flow',
        content: 'While motherhood is the heart of the session, including your partner and older children introduces emotional resonance and generational depth. We focus on unhurried connection: a hand gently resting over your belly, a toddler whispering a secret to their upcoming sibling, and shared laughter against the setting sun.',
        ctaRecommendation: 'Reserve your Fine-Art Maternity Commission and access our curated Client Wardrobe Sanctuary.'
      }
    ]
  }
};


/**
 * Master Editorial Blueprints: Blueprint 5 (In-Home Newborn Sanctuary)
 */
const BLUEPRINT_NEWBORN = {
  in_home_newborn_sanctuary: {
    id: 'in_home_newborn_sanctuary',
    pillar: 'FAMILY_HEIRLOOMS',
    title: 'Sanctuary of Home: Fine-Art In-Home Lifestyle Newborn Photography',
    subtitle: 'Gentle morning light, organic nursery textures, and baby-led intimacy documented within your Oakville or Burlington residence.',
    venueKey: null,
    targetAudience: 'New parents seeking natural, non-traditional newborn portraits in the peace of their own home',
    faqs: [
      {
        question: 'How early should we schedule an in-home newborn session?',
        answer: 'We recommend reserving your session during your second or third trimester based on your estimated due date. The actual session typically takes place when your baby is between 7 and 21 days old.'
      },
      {
        question: 'What if our home does not have tons of natural light?',
        answer: 'You do not need a glass greenhouse. A single north- or east-facing master bedroom or nursery window provides all the luminous, soft directional light needed for museum-caliber fine-art newborn portraiture.'
      },
      {
        question: 'What if my baby is fussy or needs feeding during the session?',
        answer: 'Our in-home newborn sessions are 100% baby-led and unhurried. We allow ample time for feeding, soothing, diaper changes, and snuggle breaks without any time pressure.'
      }
    ],
    sections: [
      {
        heading: 'The Intimacy of Your Family Sanctuary',
        content: 'Bringing a newborn home is one of the most tender, transformative thresholds in human life. Documenting this ephemeral season within the walls of your own home preserves not just what your baby looked like, but the exact crib you spent months assembling, the rocker where late-night lullabies were sung, and the morning sunbeams that warmed your master bedroom rug.',
        tipBox: {
          title: 'Lighting Craft: The North Window Feathering Technique',
          content: 'We position mother and child at a 45-degree angle to the primary window rather than face-on. This feathers soft light across tiny infant features, creating gentle sculptural depth without harsh glare or squinting.'
        }
      },
      {
        heading: 'Honoring Baby Pacing and Gentle Rhythms',
        content: 'We reject artificial studio props, restrictive swaddle contortions, and synthetic baskets. Instead, your baby rests naturally in your arms, nestled against your chest, or stretched comfortably across crisp organic linen bedding. The subtle details—curled toes, downy shoulder hair, tiny yawning mouths—are captured with macro clarity and poetic grace.',
        quote: 'Hafsa came into our home with such gentle calm. She made us feel completely relaxed as exhausted first-time parents and gave us the greatest gift of our lives.'
      },
      {
        heading: 'Handcrafted Gallery Wall Layouts for Your Nursery',
        content: 'Following your session, we assist in designing custom conservation-framed print arrangements tailored to your nursery or hallway dimensions, turning everyday family life into an enduring artistic exhibition.',
        ctaRecommendation: 'Explore our In-Home Newborn & First Year Milestone Sanctuary Collections.'
      }
    ]
  }
};


/**
 * Master Editorial Blueprints: Blueprint 6 (Halton Generational Family)
 */
const BLUEPRINT_FAMILY = {
  halton_generational_family: {
    id: 'halton_generational_family',
    pillar: 'FAMILY_HEIRLOOMS',
    title: 'The Generational Legacy: Photographing Extended Families in Halton',
    subtitle: 'How to coordinate multi-generational wardrobe, engage restless toddlers, and honor grandparents in outdoor parklands.',
    venueKey: 'gairloch',
    targetAudience: 'Families gathering grandparents, adult siblings, and young cousins for significant milestones and anniversaries',
    faqs: [
      {
        question: 'How do we coordinate wardrobe for 10 or more family members without matching?',
        answer: 'We recommend selecting a unified tonal palette of 3 to 4 coordinating neutral colors—such as oatmeal, warm camel, muted slate, and soft sage—with varying textures like linen, knit wool, and denim, rather than identical white shirts.'
      },
      {
        question: 'How do you handle toddlers who will not sit still?',
        answer: 'We never force children to sit still. Instead, we orchestrate playful movement prompts—races across the lawn, shoulder rides, whisper games, and nature walks—capturing genuine joy and laughter.'
      }
    ],
    sections: [
      {
        heading: 'The Sacred Weight of Three Generations Together',
        content: 'When grandparents, adult children, and grandchildren assemble in a single frame, photography ceases to be a casual activity; it becomes historical preservation. Ten, twenty, or fifty years from now, these images will serve as the emotional anchor for future generations seeking to understand their lineage.',
        tipBox: {
          title: 'Grouping Flow: The Tiered Generational Triangle',
          content: 'Rather than lining up family members like a military regiment, we position grandparents seated comfortably on a rustic bench or stone ledge as the visual anchor, with adult children leaning in lovingly and toddlers nestled in laps.'
        }
      },
      {
        heading: 'Capturing Organic Connection Over Posed Symmetry',
        content: 'Between the formal whole-group compositions, we document intimate sub-group pairings: grandfather sharing a quiet secret with his grandson, sisters laughing over childhood memories, and couples enjoying an unhurried embrace.',
        quote: 'Having our parents, our children, and our siblings photographed together at Gairloch was the best investment our family has ever made.'
      },
      {
        heading: 'Commissioning Bespoke Archival Wall Portfolios',
        content: 'Our heirloom generational clients typically select large-scale hand-stretched fine-art canvas or museum rag prints framed in solid Canadian oak to grace the primary living room mantle.',
        ctaRecommendation: 'Schedule an Extended Family Atelier Commission in Oakville or Burlington.'
      }
    ]
  }
};


/**
 * Master Editorial Blueprints: Blueprint 7 & 8 (Mount Nemo & Wedding Timeline)
 */
const BLUEPRINT_NEMO_AND_TIMELINE = {
  mount_nemo_engagement_adventure: {
    id: 'mount_nemo_engagement_adventure',
    pillar: 'VENUE_SPOTLIGHTS',
    title: 'Escarpment Romance: Golden Hour Engagement Portraits at Mount Nemo',
    subtitle: 'Dramatic limestone cliff edges, ancient cedar canopies, and panoramic valley horizons along the Niagara Escarpment.',
    venueKey: 'mount_nemo',
    targetAudience: 'Adventurous couples seeking dramatic natural terrain and sweeping horizons for their engagement session',
    faqs: [
      {
        question: 'Is hiking required for Mount Nemo engagement photos?',
        answer: 'There is a gentle 15-minute nature walk from the primary parking lot along the Brock Finch trail to reach the cliff lookouts. We recommend bringing comfortable walking shoes and changing into formal attire at the overlook.'
      },
      {
        question: 'Are permits required by Conservation Halton?',
        answer: 'Yes, Conservation Halton requires a commercial photography permit ($175 CAD) and scheduled reservation slot.'
      }
    ],
    sections: [
      {
        heading: 'The Raw Majesty of the Escarpment',
        content: 'Perched 30 meters above the rolling farmland of North Burlington, Mount Nemo provides an exhilarating, wind-swept vantage point unlike anywhere else in the Halton region. As the sun descends in the western sky, golden light strikes the pale limestone cliffs, creating an ethereal glow.',
        tipBox: {
          title: 'Footwear & Safety Protocol',
          content: 'Always wear sturdy flats for the trail walk. We set safety margins at least six feet back from cliff crevices while using focal compression to create stunning visual depth.'
        }
      },
      {
        heading: 'Movement, Wind, and Kinetic Romance',
        content: 'The updrafts along the escarpment rim bring life and kinetic drama to fabrics. Flowing silk dresses, loose curls, and long coats respond dynamically to the breeze, infusing every photograph with cinema and momentum.',
        quote: 'Standing on the edge of the cliffs at sunset with the wind around us felt wild and unforgettable. The photographs look straight out of an art film.'
      },
      {
        heading: 'Creating Signature Save-The-Date Fine-Art Cards',
        content: 'Engagement portraits from Mount Nemo create striking visual centerpieces for bespoke cotton press-printed save-the-date cards and guestbook albums.',
        ctaRecommendation: 'Book an Escarpment Adventure Engagement Session in Milton.'
      }
    ]
  },
  wedding_day_timeline_blueprint: {
    id: 'wedding_day_timeline_blueprint',
    pillar: 'TIMELINES_AND_PLANNING',
    title: 'The Photography-First Wedding Day Timeline: A Practical Guide',
    subtitle: 'How to structure your wedding day to capture glorious golden hour light, breathe easily, and avoid chaotic rush.',
    venueKey: null,
    targetAudience: 'Couples and wedding planners designing their day for optimal natural lighting and stress-free guest flow',
    faqs: [
      {
        question: 'Should we do a first look or wait until the aisle?',
        answer: 'A First Look gives you 90 uninterrupted minutes of relaxed romantic portraits prior to the ceremony, letting you attend your entire cocktail hour and celebrate with guests.'
      },
      {
        question: 'How much time should we buffer for family formal group photos?',
        answer: 'Allocate 3 minutes per grouping. An organized list of 10 essential family combinations can be completed comfortably within 30 minutes.'
      }
    ],
    sections: [
      {
        heading: 'Why Lighting Dictates Emotional Flow',
        content: 'A thoughtful wedding timeline is not simply about keeping appointments; it is about choreographing moments where natural light and raw emotion converge. When schedules are built around the sun, photography feels effortless.',
        tipBox: {
          title: 'The Golden Hour Window: The 45-Minute Rule',
          content: 'Protect the 45 minutes before sunset during your dinner reception for sunset portraits. Slipping outside between the main entrée and speeches yields the day’s most magical, relaxed portraits.'
        }
      },
      {
        heading: 'The Master 8-Hour Fine-Art Wedding Timeline',
        content: '1:00 PM: Flat-lay details and bridal prep side-light. 2:30 PM: Intimate first look and couple editorial. 3:30 PM: Bridal party fun and family formals. 5:00 PM: Golden hour outdoor ceremony. 6:00 PM: Cocktail hour while photographer documents reception styling. 7:30 PM: Sunset golden hour escape. 8:30 PM: Cake cutting and evening dancing.',
        quote: 'Following Hafsa’s timeline advice was the single best decision we made for our wedding day. Everything flowed with serene calm.'
      },
      {
        heading: 'Preserving Spontaneity Over Stiff Checklists',
        content: 'Buffers are the secret to luxury weddings. Adding 15 minutes of breathing room between key milestones guarantees that if hair and makeup runs late, your couple portraits remain serene and unhurried.',
        ctaRecommendation: 'Schedule a Timeline Consultation with Hafsa Noreen.'
      }
    ]
  }
};

const EDITORIAL_BLUEPRINTS = Object.assign(
  {},
  BLUEPRINT_PALETTA,
  BLUEPRINT_LANGDON,
  BLUEPRINT_GRAYDON,
  BLUEPRINT_GAIRLOCH,
  BLUEPRINT_NEWBORN,
  BLUEPRINT_FAMILY,
  BLUEPRINT_NEMO_AND_TIMELINE
);


/**
 * Advanced Content Intelligence, Readability & NLP Engine
 */
class EditorialIntelligenceEngine {
  /**
   * Count syllables in an English word
   */
  static countSyllables(word) {
    const clean = word.toLowerCase().replace(/[^a-z]/g, '');
    if (!clean) return 0;
    if (clean.length <= 3) return 1;
    const stripped = clean
      .replace(/(?:[^laeiouy]|ed|es|e)$/, '')
      .replace(/^y/, '');
    const matches = stripped.match(/[aeiouy]{1,2}/g);
    return matches ? Math.max(1, matches.length) : 1;
  }

  /**
   * Calculate Flesch Reading Ease & Flesch-Kincaid Grade Level
   */
  static calculateFleschKincaid(text) {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const wordCount = Math.max(1, words.length);
    const sentenceCount = Math.max(1, sentences.length);

    let totalSyllables = 0;
    words.forEach(w => {
      totalSyllables += this.countSyllables(w);
    });

    const wordsPerSentence = wordCount / sentenceCount;
    const syllablesPerWord = totalSyllables / wordCount;

    // Flesch Reading Ease Formula: 206.835 - 1.015 * (words/sentence) - 84.6 * (syllables/word)
    const readingEase = Math.round((206.835 - (1.015 * wordsPerSentence) - (84.6 * syllablesPerWord)) * 10) / 10;
    // Flesch-Kincaid Grade Level: 0.39 * (words/sentence) + 11.8 * (syllables/word) - 15.59
    const gradeLevel = Math.max(1, Math.round((0.39 * wordsPerSentence + 11.8 * syllablesPerWord - 15.59) * 10) / 10);

    let easeDescriptor = 'Standard';
    if (readingEase >= 80) easeDescriptor = 'Very Easy';
    else if (readingEase >= 70) easeDescriptor = 'Easy';
    else if (readingEase >= 60) easeDescriptor = 'Standard & Engaging';
    else if (readingEase >= 50) easeDescriptor = 'Sophisticated Editorial';
    else easeDescriptor = 'Academic & Complex';

    return {
      wordCount,
      sentenceCount,
      totalSyllables,
      readingEase: Math.max(0, Math.min(100, readingEase)),
      gradeLevel,
      easeDescriptor
    };
  }

  /**
   * Calculate reading time at 220 WPM
   */
  static calculateReadingTime(text) {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.ceil(words / 220);
    return {
      wordCount: words,
      readingTimeMinutes: Math.max(1, minutes),
      formattedTime: `${Math.max(1, minutes)} min read`
    };
  }

  /**
   * Generate canonical SEO URL slug
   */
  static generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .substring(0, 80);
  }

  /**
   * Generate meta description clipped to 155 characters
   */
  static generateMetaDescription(title, excerpt, maxLen = 155) {
    const cleanText = excerpt.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (cleanText.length <= maxLen) return cleanText;
    return cleanText.substring(0, maxLen - 3).trim() + '...';
  }

  /**
   * Frequency-based LSI keyword extractor
   */
  static extractKeywords(text, additionalKeywords = []) {
    const stopWords = new Set([
      'the','and','a','to','of','in','is','that','it','with','as','for','was','on','are','by',
      'this','be','at','from','or','an','my','your','our','their','we','you','they','he','she',
      'have','has','had','not','but','what','when','where','which','who','will','would','can','could'
    ]);
    const words = text.toLowerCase().match(/\b[a-z]{4,}\b/g) || [];
    const freqMap = {};

    words.forEach(w => {
      if (!stopWords.has(w)) {
        freqMap[w] = (freqMap[w] || 0) + 1;
      }
    });

    const topKeywords = Object.entries(freqMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word]) => word);

    return Array.from(new Set([...additionalKeywords, ...topKeywords]));
  }
}


/**
 * Schema.org Multi-Schema JSON-LD & Social Graph Generators
 */
class EditorialSchemaEngine {
  /**
   * Build Schema.org BlogPosting JSON-LD
   */
  static buildBlogPostingSchema(article) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${article.canonicalUrl}#article`,
      'isPartOf': {
        '@type': 'WebSite',
        '@id': 'https://hafsanoreen.com/#website',
        'name': 'Hafsa Noreen Photography',
        'url': 'https://hafsanoreen.com'
      },
      'headline': article.title,
      'alternativeHeadline': article.subtitle,
      'description': article.metaDescription,
      'url': article.canonicalUrl,
      'datePublished': article.datePublished,
      'dateModified': article.dateModified,
      'inLanguage': 'en-CA',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': article.canonicalUrl
      },
      'author': {
        '@type': 'Person',
        'name': ATELIER_AUTHOR.name,
        'jobTitle': ATELIER_AUTHOR.title,
        'url': ATELIER_AUTHOR.social.website,
        'image': ATELIER_AUTHOR.avatar
      },
      'publisher': {
        '@type': 'LocalBusiness',
        'name': 'Hafsa Noreen Photography',
        'url': 'https://hafsanoreen.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://hafsanoreen.com/assets/images/logo.jpeg'
        },
        'telephone': '+1-647-909-3135',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '3404 Millicent Avenue',
          'addressLocality': 'Oakville',
          'addressRegion': 'ON',
          'postalCode': 'L6H 0Z3',
          'addressCountry': 'CA'
        }
      },
      'keywords': article.keywords.join(', ')
    };
  }

  /**
   * Build Schema.org FAQPage JSON-LD
   */
  static buildFaqPageSchema(faqs = []) {
    if (!faqs || faqs.length === 0) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(f => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer
        }
      }))
    };
  }

  /**
   * Build Schema.org BreadcrumbList JSON-LD
   */
  static buildBreadcrumbSchema(article) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://hafsanoreen.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Journal',
          'item': 'https://hafsanoreen.com/journal'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': article.pillar.label,
          'item': `https://hafsanoreen.com/journal/category/${article.pillar.slug}`
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': article.title,
          'item': article.canonicalUrl
        }
      ]
    };
  }

  /**
   * Build Open Graph and Twitter metadata tags
   */
  static buildSocialMeta(article) {
    return {
      'og:title': article.seoTitle,
      'og:description': article.metaDescription,
      'og:type': 'article',
      'og:url': article.canonicalUrl,
      'og:site_name': 'Hafsa Noreen Photography',
      'article:published_time': article.datePublished,
      'article:author': ATELIER_AUTHOR.name,
      'article:section': article.pillar.label,
      'article:tag': article.keywords.slice(0, 5).join(','),
      'twitter:card': 'summary_large_image',
      'twitter:title': article.seoTitle,
      'twitter:description': article.metaDescription,
      'twitter:creator': '@hafsanoreenphoto'
    };
  }
}


const ATELIER_CSS = `
  :root { --c-primary: #1c1c1c; --c-gold: #b38b4d; --c-bg-light: #faf8f5; --c-text: #2c2c2c; --c-muted: #666; }
  body { font-family: 'Lato', sans-serif; color: var(--c-text); max-width: 860px; margin: 40px auto; line-height: 1.85; padding: 0 24px; background: #fff; }
  h1, h2, h3, h4 { font-family: 'Cormorant Garamond', serif; color: var(--c-primary); font-weight: 400; }
  h1 { font-size: 2.85rem; line-height: 1.2; margin-bottom: 18px; letter-spacing: -0.5px; }
  .article-lead { font-size: 1.25rem; font-style: italic; color: #555; margin-bottom: 25px; line-height: 1.6; }
  .category-badge { display: inline-block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--c-gold); font-weight: 700; margin-bottom: 15px; }
  .article-meta { font-size: 0.88rem; color: var(--c-muted); border-bottom: 1px solid #e8e8e8; padding-bottom: 20px; margin-bottom: 35px; display: flex; gap: 15px; flex-wrap: wrap; align-items: center; }
  .toc-container { background: var(--c-bg-light); border: 1px solid #ede8e1; border-radius: 4px; padding: 24px 30px; margin-bottom: 45px; }
  .toc-title { font-size: 1.3rem; margin-top: 0; margin-bottom: 12px; }
  .toc-list { margin: 0; padding-left: 20px; }
  .toc-list li { margin-bottom: 8px; font-size: 0.95rem; }
  .toc-list a { color: var(--c-primary); text-decoration: none; border-bottom: 1px dotted var(--c-gold); }
  .toc-list a:hover { color: var(--c-gold); }
  .editorial-tip-box { background: var(--c-bg-light); border-left: 4px solid var(--c-gold); padding: 26px 30px; margin: 40px 0; border-radius: 2px; }
  .tip-badge { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 2px; color: var(--c-gold); font-weight: 700; margin-bottom: 8px; }
  .tip-title { font-size: 1.45rem; margin: 0 0 10px 0; }
  .tip-text { margin: 0; font-size: 1rem; color: #444; }
  .editorial-pull-quote { font-family: 'Cormorant Garamond', serif; font-size: 1.7rem; font-style: italic; color: var(--c-gold); margin: 45px 0; padding: 10px 0 10px 30px; border-left: 3px solid var(--c-gold); line-height: 1.5; }
  .editorial-cta-banner { background: var(--c-primary); color: #fff; padding: 36px 30px; text-align: center; margin: 50px 0; border-radius: 3px; }
  .editorial-cta-banner p { margin: 0 0 20px 0; font-size: 1.15rem; color: #eee; }
  .btn-primary { display: inline-block; background: var(--c-gold); color: #fff; padding: 14px 32px; text-decoration: none; font-size: 0.85rem; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700; border-radius: 2px; }
  .faq-accordion-item { border-bottom: 1px solid #e8e8e8; padding: 18px 0; }
  .faq-question { font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 600; cursor: pointer; color: var(--c-primary); list-style: none; }
  .faq-answer { padding-top: 12px; font-size: 1rem; color: #444; }
  .author-card { margin-top: 70px; padding: 35px; background: var(--c-bg-light); border-radius: 4px; border-top: 3px solid var(--c-gold); display: flex; gap: 24px; align-items: center; }
  .author-info h3 { margin: 0 0 8px 0; font-size: 1.4rem; }
  .author-info p { margin: 0 0 12px 0; font-size: 0.95rem; color: #555; }
  .author-link { color: var(--c-gold); text-decoration: none; font-weight: 700; font-size: 0.9rem; }
`;


/**
 * HTML Document Renderer with Luxury Editorial Design System
 */
class ArticleDocumentRenderer {
  static renderToHtml(article) {
    const {
      title,
      subtitle,
      pillar,
      author,
      venue,
      sections,
      faqs,
      schemaJson,
      faqSchemaJson,
      breadcrumbSchemaJson,
      readingTime,
      readability,
      datePublishedFormatted
    } = article;

    const tocItems = sections
      .map((sec, i) => `<li><a href="#section-${i + 1}">${sec.heading}</a></li>`)
      .join('\n');

    const sectionsHtml = sections.map((sec, idx) => {
      let extra = '';
      if (sec.tipBox) {
        extra += `
        <aside class="editorial-tip-box" aria-label="${sec.tipBox.title}">
          <div class="tip-badge">Fine-Art Masterclass</div>
          <h3 class="tip-title">${sec.tipBox.title}</h3>
          <p class="tip-text">${sec.tipBox.content}</p>
        </aside>`;
      }
      if (sec.quote) {
        extra += `
        <blockquote class="editorial-pull-quote">
          <p>&ldquo;${sec.quote}&rdquo;</p>
        </blockquote>`;
      }
      if (sec.ctaRecommendation) {
        extra += `
        <div class="editorial-cta-banner">
          <p class="cta-text">${sec.ctaRecommendation}</p>
          <a href="/booking" class="btn-primary">Inquire About Commission Availability &rarr;</a>
        </div>`;
      }

      return `
      <section class="article-section" id="section-${idx + 1}">
        <h2 class="section-heading">${sec.heading}</h2>
        <p class="section-paragraph">${sec.content}</p>
        ${extra}
      </section>`;
    }).join('\n');

    let faqsHtml = '';
    if (faqs && faqs.length > 0) {
      const faqList = faqs.map(f => `
        <details class="faq-accordion-item">
          <summary class="faq-question">${f.question}</summary>
          <div class="faq-answer"><p>${f.answer}</p></div>
        </details>`).join('\n');

      faqsHtml = `
      <section class="article-faqs" id="article-faqs">
        <h2 class="section-heading">Frequently Asked Questions</h2>
        <div class="faq-list">
          ${faqList}
        </div>
      </section>`;
    }

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${article.seoTitle}</title>
  <meta name="description" content="${article.metaDescription}">
  <link rel="canonical" href="${article.canonicalUrl}">
  <script type="application/ld+json">${JSON.stringify(schemaJson, null, 2)}</script>
  ${faqSchemaJson ? `<script type="application/ld+json">${JSON.stringify(faqSchemaJson, null, 2)}</script>` : ''}
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchemaJson, null, 2)}</script>
  <style>${ATELIER_CSS}</style>
</head>
<body class="editorial-post">
  <article>
    <header class="article-header">
      <span class="category-badge">${pillar.label}</span>
      <h1>${title}</h1>
      <p class="article-lead">${subtitle}</p>
      <div class="article-meta">
        <span>By <strong>${author.name}</strong></span>
        <span>&bull;</span>
        <span>${datePublishedFormatted}</span>
        <span>&bull;</span>
        <span>${readingTime.formattedTime}</span>
        <span>&bull;</span>
        <span>${readability.easeDescriptor} (Grade ${readability.gradeLevel})</span>
        ${venue ? `<span>&bull;</span><span>Location: <strong>${venue.name}</strong> (${venue.city})</span>` : ''}
      </div>
    </header>

    <nav class="toc-container" aria-label="Table of Contents">
      <h2 class="toc-title">Editorial Chapters</h2>
      <ol class="toc-list">
        ${tocItems}
        ${faqs && faqs.length > 0 ? '<li><a href="#article-faqs">Frequently Asked Questions</a></li>' : ''}
      </ol>
    </nav>

    <div class="article-body">
      ${sectionsHtml}
      ${faqsHtml}
    </div>

    <footer class="author-card">
      <div class="author-info">
        <h3>Written by ${author.name}</h3>
        <p>${author.bio}</p>
        <a href="/booking" class="author-link">Reserve Your Commission with Hafsa &rarr;</a>
      </div>
    </footer>
  </article>
</body>
</html>`;
  }


  /**
   * Render to Markdown with YAML frontmatter
   */
  static renderToMarkdown(article) {
    const yaml = [
      '---',
      `title: "${article.title}"`,
      `subtitle: "${article.subtitle}"`,
      `slug: "${article.slug}"`,
      `date: "${article.datePublished}"`,
      `author: "${article.author.name}"`,
      `pillar: "${article.pillar.slug}"`,
      `readingTime: "${article.readingTime.formattedTime}"`,
      `readabilityGrade: ${article.readability.gradeLevel}`,
      `canonicalUrl: "${article.canonicalUrl}"`,
      `keywords: [${article.keywords.map(k => `"${k}"`).join(', ')}]`,
      '---',
      ''
    ].join('\n');

    let md = yaml + `# ${article.title}\n\n*${article.subtitle}*\n\n`;
    md += `**Published:** ${article.datePublishedFormatted} | **Reading Time:** ${article.readingTime.formattedTime} | **Grade:** ${article.readability.gradeLevel} | **Author:** ${article.author.name}\n\n---\n\n`;

    article.sections.forEach(sec => {
      md += `## ${sec.heading}\n\n${sec.content}\n\n`;
      if (sec.tipBox) {
        md += `> **${sec.tipBox.title}**\n> ${sec.tipBox.content}\n\n`;
      }
      if (sec.quote) {
        md += `> *"${sec.quote}"*\n\n`;
      }
      if (sec.ctaRecommendation) {
        md += `**[Inquire About Atelier Commission: ${sec.ctaRecommendation}](https://hafsanoreen.com/booking)**\n\n`;
      }
    });

    if (article.faqs && article.faqs.length > 0) {
      md += `## Frequently Asked Questions\n\n`;
      article.faqs.forEach(f => {
        md += `### ${f.question}\n\n${f.answer}\n\n`;
      });
    }

    return md;
  }

  /**
   * Render to RSS 2.0 XML <item> format
   */
  static renderToRssItem(article) {
    return [
      '<item>',
      `  <title><![CDATA[${article.title}]]></title>`,
      `  <link>${article.canonicalUrl}</link>`,
      `  <guid isPermaLink="true">${article.canonicalUrl}</guid>`,
      `  <description><![CDATA[${article.metaDescription}]]></description>`,
      `  <pubDate>${new Date(article.datePublished).toUTCString()}</pubDate>`,
      `  <category>${article.pillar.label}</category>`,
      `  <author>${article.author.email} (${article.author.name})</author>`,
      '</item>'
    ].join('\n');
  }

  /**
   * Suggest contextual internal service pages and related blueprints
   */
  static buildRelatedLinks(article) {
    const relatedLinks = [
      { anchor: 'Fine-Art Wedding Collections', url: 'https://hafsanoreen.com/weddings' },
      { anchor: 'Oakville Luxury Portraiture', url: 'https://hafsanoreen.com/oakville-photographer' },
      { anchor: 'Burlington Editorial Photography', url: 'https://hafsanoreen.com/burlington-photographer' },
      { anchor: 'Atelier Investment & Heirlooms', url: 'https://hafsanoreen.com/investment' },
      { anchor: 'Client Inquiries & Booking Sanctuary', url: 'https://hafsanoreen.com/booking' }
    ];
    return relatedLinks;
  }
}


/**
 * Main Production Blog & Editorial Generation Engine Facade
 */
class BlogGenerator {
  /**
   * Execute full blog article generation pipeline
   */
  static execute(params = {}) {
    this.validateParams(params);

    const {
      topic = 'Fine Art Wedding Photography in Oakville',
      points = [],
      keywords = [],
      blueprintKey,
      venueKey,
      customTitle,
      customSubtitle,
      faqs = []
    } = params;

    let blueprint = EDITORIAL_BLUEPRINTS[blueprintKey];
    if (!blueprint) {
      blueprint = {
        id: 'custom_generated',
        pillar: 'ARTISTIC_PHILOSOPHY',
        title: customTitle || `${topic} — Hafsa Noreen Photography`,
        subtitle: customSubtitle || `An editorial perspective on ${topic.toLowerCase()} with natural light and timeless aesthetic.`,
        venueKey: venueKey || null,
        faqs: faqs.length > 0 ? faqs : [
          {
            question: `How far in advance should we book for ${topic}?`,
            answer: 'We recommend reserving your commission 6 to 12 months in advance for weddings, and 4 to 8 weeks in advance for portrait sessions.'
          },
          {
            question: 'What is included in the bespoke fine-art collections?',
            answer: 'All atelier collections include pre-session styling consultation, high-resolution master retouched digital archives, and museum-grade archival prints.'
          }
        ],
        sections: points.length > 0
          ? points.map((pt, i) => ({
              heading: `Chapter ${i + 1}: ${pt.substring(0, 45).trim()}...`,
              content: pt,
              tipBox: i === 0 ? {
                title: 'Atelier Golden Hour Guidance',
                content: 'Natural lighting achieves its most flattering luminescence during the final 75 minutes prior to sunset.'
              } : null
            }))
          : [
              {
                heading: 'Embracing Unhurried Emotion',
                content: `When documenting ${topic.toLowerCase()}, our approach centers on space, patience, and authentic unposed intimacy. We allow authentic moments to unfold naturally without manufactured poses.`
              },
              {
                heading: 'The Longevity of Archival Print Heirlooms',
                content: 'Digital files capture the fleeting moment, but physical museum-grade prints preserve your family legacy for generations to come. Each print is treated with archival UV varnishes for century-long preservation.'
              }
            ]
      };
    }

    const title = customTitle || blueprint.title;
    const subtitle = customSubtitle || blueprint.subtitle;
    const slug = EditorialIntelligenceEngine.generateSlug(title);
    const canonicalUrl = `https://hafsanoreen.com/journal/${slug}`;
    const venue = REGIONAL_VENUES[blueprint.venueKey || venueKey] || null;
    const mergedFaqs = (blueprint.faqs || []).concat(faqs.filter(f => !blueprint.faqs.some(bf => bf.question === f.question)));

    // Aggregate text for readability and SEO analysis
    const allText = [
      title,
      subtitle,
      ...blueprint.sections.map(s => s.heading + ' ' + s.content + ' ' + (s.tipBox ? s.tipBox.content : '')),
      ...mergedFaqs.map(f => f.question + ' ' + f.answer)
    ].join(' ');

    const readingTime = EditorialIntelligenceEngine.calculateReadingTime(allText);
    const readability = EditorialIntelligenceEngine.calculateFleschKincaid(allText);
    const metaDescription = EditorialIntelligenceEngine.generateMetaDescription(
      title,
      subtitle + ' ' + (blueprint.sections[0] ? blueprint.sections[0].content : '')
    );

    const mergedKeywords = EditorialIntelligenceEngine.extractKeywords(
      allText,
      keywords.length > 0 ? keywords : ['fine art photographer Oakville', 'editorial portraits Burlington', 'luxury wedding GTA']
    );

    const now = new Date();
    const datePublished = now.toISOString();
    const datePublishedFormatted = now.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const articleData = {
      title,
      subtitle,
      slug,
      canonicalUrl,
      seoTitle: `${title} | Hafsa Noreen Photography`,
      metaDescription,
      metaDesc: metaDescription,
      keywords: mergedKeywords,
      pillar: CONTENT_PILLARS[blueprint.pillar] || CONTENT_PILLARS.ARTISTIC_PHILOSOPHY,
      author: ATELIER_AUTHOR,
      venue,
      sections: blueprint.sections,
      faqs: mergedFaqs,
      readingTime,
      readability,
      estimatedWords: readingTime.wordCount,
      datePublished,
      dateModified: datePublished,
      datePublishedFormatted
    };

    // Build Schemas
    articleData.schemaJson = EditorialSchemaEngine.buildBlogPostingSchema(articleData);
    articleData.faqSchemaJson = EditorialSchemaEngine.buildFaqPageSchema(mergedFaqs);
    articleData.breadcrumbSchemaJson = EditorialSchemaEngine.buildBreadcrumbSchema(articleData);
    articleData.socialMeta = EditorialSchemaEngine.buildSocialMeta(articleData);

    // Multi-format outputs
    articleData.html = ArticleDocumentRenderer.renderToHtml(articleData);
    articleData.markdown = ArticleDocumentRenderer.renderToMarkdown(articleData);
    articleData.rssItem = ArticleDocumentRenderer.renderToRssItem(articleData);
    articleData.relatedLinks = ArticleDocumentRenderer.buildRelatedLinks(articleData);

    return articleData;
  }


  /**
   * Validate execution parameters
   */
  static validateParams(params) {
    if (!params || typeof params !== 'object') {
      throw new Error('BlogGenerator: Parameters must be provided as an object.');
    }
    if (params.points && !Array.isArray(params.points)) {
      throw new Error('BlogGenerator: Points parameter must be an array of strings.');
    }
    if (params.keywords && !Array.isArray(params.keywords)) {
      throw new Error('BlogGenerator: Keywords parameter must be an array of strings.');
    }
    return true;
  }

  /**
   * List available pre-engineered blueprints
   */
  static listBlueprints() {
    return Object.keys(EDITORIAL_BLUEPRINTS).map(k => ({
      key: k,
      title: EDITORIAL_BLUEPRINTS[k].title,
      pillar: EDITORIAL_BLUEPRINTS[k].pillar,
      targetAudience: EDITORIAL_BLUEPRINTS[k].targetAudience
    }));
  }

  /**
   * List available regional venues
   */
  static listVenues() {
    return Object.keys(REGIONAL_VENUES).map(k => ({
      key: k,
      name: REGIONAL_VENUES[k].name,
      city: REGIONAL_VENUES[k].city,
      permitRequired: REGIONAL_VENUES[k].permitRequired,
      permitCostCAD: REGIONAL_VENUES[k].permitCostCAD
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

    const testKeys = ['paletta_autumn_wedding', 'gairloch_gardens_maternity', 'wedding_day_timeline_blueprint'];
    testKeys.forEach(k => {
      const article = this.execute({ blueprintKey: k });
      results.blueprintsTested++;

      const hasTitle = Boolean(article.title && article.title.length > 5);
      const hasSchema = Boolean(article.schemaJson && article.schemaJson['@type'] === 'BlogPosting');
      const hasFaqSchema = Boolean(article.faqSchemaJson && article.faqSchemaJson['@type'] === 'FAQPage');
      const hasBreadcrumb = Boolean(article.breadcrumbSchemaJson && article.breadcrumbSchemaJson['@type'] === 'BreadcrumbList');
      const hasHtml = Boolean(article.html && article.html.includes('<!DOCTYPE html>'));
      const hasMarkdown = Boolean(article.markdown && article.markdown.startsWith('---'));
      const hasRss = Boolean(article.rssItem && article.rssItem.startsWith('<item>'));
      const hasReadability = Boolean(article.readability && article.readability.readingEase > 0);
      const hasEstimatedWords = Boolean(article.estimatedWords > 50);

      const allValid = hasTitle && hasSchema && hasFaqSchema && hasBreadcrumb && hasHtml && hasMarkdown && hasRss && hasReadability && hasEstimatedWords;

      results.checks[k] = {
        passed: allValid,
        words: article.estimatedWords,
        readingEase: article.readability.readingEase,
        gradeLevel: article.readability.gradeLevel,
        slug: article.slug
      };

      if (!allValid) results.passed = false;
    });

    // Also test custom dynamic generation
    const dynamicArticle = this.execute({
      topic: 'Historic Estate Sessions in Milton',
      points: [
        'How morning mist through centenary pines enriches black and white medium-format images.',
        'Why coordinating organic wool scarves and bespoke tailoring elevates Halton outdoor sessions.'
      ],
      keywords: ['Milton fine art portraiture', 'historic farm session']
    });

    results.checks.dynamic_generation = {
      passed: Boolean(dynamicArticle.html && dynamicArticle.schemaJson && dynamicArticle.sections.length === 2),
      words: dynamicArticle.estimatedWords,
      slug: dynamicArticle.slug
    };

    if (!results.checks.dynamic_generation.passed) results.passed = false;

    return results;
  }
}

module.exports = BlogGenerator;
