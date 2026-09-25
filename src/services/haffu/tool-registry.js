const toolDefinitions = [
  { name: 'check_availability', description: 'Check availability for a date', parameters: { type: 'object', properties: { date: { type: 'string' } }, required: ['date'] } },
  { name: 'create_booking', description: 'Create a booking', parameters: { type: 'object', properties: { sessionType: { type: 'string', enum: ['wedding','family','maternity','event','portrait','brand'] }, date: { type: 'string' }, location: { type: 'string' }, clientName: { type: 'string' }, clientEmail: { type: 'string' }, clientPhone: { type: 'string' }, package: { type: 'string' } }, required: ['sessionType','date','location','clientName','clientEmail'] } },
  { name: 'send_contract', description: 'Send a contract', parameters: { type: 'object', properties: { bookingId: { type: 'string' }, clientEmail: { type: 'string' } }, required: ['bookingId','clientEmail'] } },
  { name: 'collect_payment', description: 'Generate payment link', parameters: { type: 'object', properties: { bookingId: { type: 'string' }, amount: { type: 'number' } }, required: ['bookingId','amount'] } },
  { name: 'answer_faq', description: 'Answer FAQ', parameters: { type: 'object', properties: { topic: { type: 'string', enum: ['pricing','booking','locations','wardrobe','delivery','travel','prints','products'] } }, required: ['topic'] } },
  { name: 'recommend_package', description: 'Recommend a package', parameters: { type: 'object', properties: { sessionType: { type: 'string' }, guestCount: { type: 'number' }, mustHaves: { type: 'string' } }, required: ['sessionType'] } },
  { name: 'send_reminder', description: 'Send reminder email', parameters: { type: 'object', properties: { bookingId: { type: 'string' }, type: { type: 'string', enum: ['pre-session','sneak-peek','gallery-ready','review-request'] } }, required: ['bookingId','type'] } },
  { name: 'smart_upsell', description: 'Suggest add-ons and upgrades', parameters: { type: 'object', properties: { sessionType: { type: 'string' }, currentPackage: { type: 'string' }, budget: { type: 'string' } }, required: ['sessionType'] } },
  { name: 'sell_gift_card', description: 'Generate gift card purchase link', parameters: { type: 'object', properties: { amount: { type: 'number', enum: [50, 100, 250] }, recipientName: { type: 'string' }, message: { type: 'string' } }, required: ['amount'] } },
  { name: 'sell_preset', description: 'Sell Lightroom presets', parameters: { type: 'object', properties: { pack: { type: 'string', enum: ['signature','complete'] } }, required: ['pack'] } },
  { name: 'sell_wall_art', description: 'Sell wall art prints', parameters: { type: 'object', properties: { size: { type: 'string', enum: ['8x10','16x20','24x36'] }, photoId: { type: 'string' } }, required: ['size'] } },
  { name: 'sell_print_product', description: 'Sell albums and print products', parameters: { type: 'object', properties: { product: { type: 'string', enum: ['album_standard','album_parent','save_date_video','rush_delivery'] } }, required: ['product'] } },
  { name: 'print_recommender', description: 'Recommend print products', parameters: { type: 'object', properties: { sessionType: { type: 'string' }, photoCount: { type: 'number' }, budget: { type: 'string' } }, required: ['sessionType'] } },
  { name: 'mini_session_filler', description: 'Fill mini session slots', parameters: { type: 'object', properties: { season: { type: 'string' } }, required: [] } },
  { name: 'photo_enhance', description: 'Edit photo with studio lighting and cinematic effects', parameters: { type: 'object', properties: { photoData: { type: 'string' }, style: { type: 'string', enum: ['cinematic','golden_hour','moody_film','light_airy','b&w_fine_art','studio_portrait'] }, instructions: { type: 'string' } }, required: ['photoData'] } },
  { name: 'photo_transform', description: 'Transform photo with artistic style transfer', parameters: { type: 'object', properties: { photoData: { type: 'string' }, style: { type: 'string', enum: ['dramatic_studio','fine_art','editorial','vintage_film','fantasy'] }, background: { type: 'string' }, instructions: { type: 'string' } }, required: ['photoData'] } },
  { name: 'analyze_photo', description: 'Analyze photo and suggest improvements', parameters: { type: 'object', properties: { photoData: { type: 'string' }, purpose: { type: 'string', enum: ['improvement','style_match','package_recommend','print_ready'] } }, required: ['photoData'] } },
  { name: 'mood_board_gen', description: 'Generate mood board for a shoot', parameters: { type: 'object', properties: { sessionType: { type: 'string' }, style: { type: 'string' }, colors: { type: 'string' }, location: { type: 'string' } }, required: ['sessionType'] } },
  { name: 'generate_save_date', description: 'Generate save-the-date concept', parameters: { type: 'object', properties: { names: { type: 'string' }, date: { type: 'string' }, style: { type: 'string' } }, required: ['names','date'] } },
  { name: 'what_to_wear', description: 'Wardrobe recommendations', parameters: { type: 'object', properties: { sessionType: { type: 'string' }, location: { type: 'string' }, season: { type: 'string' }, peopleCount: { type: 'number' } }, required: ['sessionType'] } },
  { name: 'caption_generator', description: 'Generate social media captions', parameters: { type: 'object', properties: { photoDescription: { type: 'string' }, platform: { type: 'string' }, tone: { type: 'string' } }, required: ['photoDescription'] } },
  { name: 'blog_generator', description: 'Generate blog post', parameters: { type: 'object', properties: { topic: { type: 'string' }, sessionType: { type: 'string' }, keyMoments: { type: 'string' } }, required: ['topic'] } },
  { name: 'email_drafter', description: 'Draft client email', parameters: { type: 'object', properties: { purpose: { type: 'string', enum: ['inquiry_reply','booking_confirm','pre_session','post_session','follow_up','review_request'] }, clientName: { type: 'string' }, details: { type: 'string' } }, required: ['purpose','clientName'] } },
  { name: 'review_responder', description: 'Respond to review', parameters: { type: 'object', properties: { reviewText: { type: 'string' }, rating: { type: 'number' }, clientName: { type: 'string' } }, required: ['reviewText','rating'] } },
  { name: 'contract_generator', description: 'Generate booking contract', parameters: { type: 'object', properties: { clientName: { type: 'string' }, sessionType: { type: 'string' }, date: { type: 'string' }, package: { type: 'string' } }, required: ['clientName','sessionType','date'] } },
  { name: 'gallery_arranger', description: 'Suggest gallery layout', parameters: { type: 'object', properties: { sessionType: { type: 'string' }, photoCount: { type: 'number' } }, required: ['sessionType','photoCount'] } },
  { name: 'client_ltv_scorer', description: 'Score client lifetime value', parameters: { type: 'object', properties: { clientEmail: { type: 'string' }, history: { type: 'string' } }, required: ['clientEmail'] } },
  { name: 'pricing_optimizer', description: 'Suggest pricing adjustments', parameters: { type: 'object', properties: { sessionType: { type: 'string' }, season: { type: 'string' }, demandLevel: { type: 'string' } }, required: ['sessionType'] } },
  { name: 'seasonal_predictor', description: 'Predict seasonal demand', parameters: { type: 'object', properties: { month: { type: 'string' } }, required: [] } },
  { name: 'brand_outreach', description: 'Draft brand partnership outreach', parameters: { type: 'object', properties: { brandName: { type: 'string' }, proposalType: { type: 'string' }, audience: { type: 'string' } }, required: ['brandName'] } },
  { name: 'competitor_monitor', description: 'Analyze competitor', parameters: { type: 'object', properties: { competitorUrl: { type: 'string' }, analysisType: { type: 'string' } }, required: ['competitorUrl'] } },
  { name: 'retainer_nudger', description: 'Nudge for retainer payment', parameters: { type: 'object', properties: { bookingId: { type: 'string' }, daysOverdue: { type: 'number' } }, required: ['bookingId'] } },
  { name: 'abandoned_recovery', description: 'Recover abandoned booking', parameters: { type: 'object', properties: { clientEmail: { type: 'string' }, sessionType: { type: 'string' }, daysSince: { type: 'number' } }, required: ['clientEmail','sessionType'] } },
  { name: 'anniversary_rebooker', description: 'Anniversary rebooking suggestion', parameters: { type: 'object', properties: { clientEmail: { type: 'string' }, lastSessionDate: { type: 'string' }, lastSessionType: { type: 'string' } }, required: ['clientEmail','lastSessionDate'] } },
  { name: 'multi_lang_booking', description: 'Handle non-English booking', parameters: { type: 'object', properties: { language: { type: 'string' }, message: { type: 'string' } }, required: ['language','message'] } },
  { name: 'vendor_matchmaker', description: 'Recommend vendors', parameters: { type: 'object', properties: { vendorType: { type: 'string' }, location: { type: 'string' }, budget: { type: 'string' } }, required: ['vendorType','location'] } },
  { name: 'venue_preview', description: 'Preview venue and suggest angles', parameters: { type: 'object', properties: { venueName: { type: 'string' }, venueType: { type: 'string' } }, required: ['venueName'] } },
  { name: 'headshot_booker', description: 'Book headshot session', parameters: { type: 'object', properties: { clientName: { type: 'string' }, clientEmail: { type: 'string' }, urgency: { type: 'string', enum: ['standard','rush'] } }, required: ['clientName','clientEmail'] } },
  { name: 'mode_manager', description: 'Switch operating mode', parameters: { type: 'object', properties: { mode: { type: 'string', enum: ['standard','recovery'] } }, required: ['mode'] } },
  { name: 'stock_submit', description: 'Submit photo to stock platform', parameters: { type: 'object', properties: { photoData: { type: 'string' }, platform: { type: 'string' }, keywords: { type: 'string' } }, required: ['photoData'] } },
  { name: 'background_remover', description: 'Remove or replace photo background', parameters: { type: 'object', properties: { photoData: { type: 'string' }, newBackground: { type: 'string' } }, required: ['photoData'] } }
];
/**
 * Canonical Vertex AI tool format: a single tools entry carrying ALL function
 * declarations. (One wrapper per tool breaks Vertex function routing.)
 */
function getToolDeclarations() {
  return [
    {
      functionDeclarations: toolDefinitions.map(({ name, description, parameters }) => ({ name, description, parameters })),
    },
  ];
}
module.exports = { toolDefinitions, getToolDeclarations };
