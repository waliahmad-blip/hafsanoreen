/**
 * HAFFU STUDIO — Constants & Business Rules
 */
module.exports = {
  BRAND: {
    name: 'Hafsa Noreen Photography',
    tagline: 'Capturing the laughter, tenderness, and fleeting beauty of life like scenes from your favourite film.',
    phone: '+1-647-909-3135',
    email: 'hello@hafsanoreen.com',
    address: { line: '3404 Millicent Avenue', city: 'Oakville', region: 'ON', postal: 'L6H 0Z3', country: 'CA' }
  },
  PACKAGES: {
    portrait: { name: 'The Portrait', price: 450, hours: 1.5, frames: 25, includes: ['1 location','online gallery'] },
    family: { name: 'The Family & Maternity', price: 650, hours: 2, frames: 40, includes: ['home or park','sneak peek 48h'] },
    event: { name: 'The Event', price: 1200, hours: 4, frames: 200, includes: ['highlight reel option'] },
    wedding: { name: 'The Wedding', price: 3800, hours: 8, frames: 400, includes: ['online gallery','planning call'] },
    signature: { name: 'The Wedding Signature', price: 6500, hours: 12, frames: 800, includes: ['second shooter','cinematic reel'] }
  },
  ADDONS: {
    reel: { name: 'Cinematic Reel', price: 400 },
    album: { name: 'Fine-Art Album', price: 600 },
    extraHour: { name: 'Extra Hour', price: 250 }
  },
  DIGITAL_PRODUCTS: {
    photo_enhance: { name: 'Studio Photo Enhancement', price: 35, description: 'Upload any photo and get studio-quality edits with cinematic lighting, color grading, and professional retouching.', turnaround: '24-48 hours', includes: ['1 edited photo','cinematic color grade','studio lighting simulation','skin retouching','high-res download'] },
    photo_enhance_pro: { name: 'Pro Photo Transformation', price: 75, description: 'Complete photo transformation: background enhancement, dramatic lighting, artistic style transfer, and magazine-quality retouching.', turnaround: '48-72 hours', includes: ['1 fully transformed photo','background replacement','artistic style options','magazine retouch','print-ready files','2 revision rounds'] },
    gift_card_50: { name: 'Gift Card $50', price: 50, description: 'The gift of memories. Valid for any session or product.' },
    gift_card_100: { name: 'Gift Card $100', price: 100, description: 'The gift of memories. Valid for any session or product.' },
    gift_card_250: { name: 'Gift Card $250', price: 250, description: 'The gift of memories. Valid for any session or product.' },
    preset_pack: { name: 'Hafsa\u2019s Signature Presets', price: 45, description: '5 Lightroom presets with cinematic film look. Mobile + desktop.' },
    preset_pack_pro: { name: 'Complete Preset Collection', price: 89, description: '15 Lightroom presets: Golden Hour, Moody Film, Light & Airy, B&W Fine Art.' },
    wall_art_8x10: { name: 'Fine Art Print 8x10', price: 65, description: 'Museum-quality archival print on cotton rag paper.' },
    wall_art_16x20: { name: 'Fine Art Print 16x20', price: 145, description: 'Museum-quality archival print, gallery wrapped.' },
    wall_art_24x36: { name: 'Fine Art Print 24x36', price: 295, description: 'Statement piece. Gallery wrapped canvas.' },
    mood_board: { name: 'Custom Mood Board', price: 25, description: 'Personalized visual inspiration board for your shoot.' },
    style_guide: { name: 'Personal Style Guide', price: 30, description: 'Wardrobe + color palette recommendations tailored to your session.' },
    album_standard: { name: 'Fine-Art Album', price: 600, description: 'Handcrafted 30-page album with layflat binding.' },
    album_parent: { name: 'Parent Album (set of 2)', price: 400, description: 'Two 20-page mini albums, perfect as gifts.' },
    save_date_video: { name: 'Save-the-Date Reel', price: 350, description: 'Cinematic 30-second reel with music.' },
    rush_delivery: { name: 'Rush Delivery', price: 200, description: 'Full gallery within 5 business days.' },
    mini_session: { name: 'Mini Session', price: 225, description: '20-minute seasonal session. 10 edited frames.' }
  },
  RETAINER_PERCENT: 0.30,
  HST_RATE: 0.13,
  SERVICE_AREAS: ['Oakville','Burlington','Milton','Halton Hills','Mississauga','Hamilton','Niagara','Muskoka'],
  CORE_AREAS: ['Oakville','Burlington','Milton','Halton Hills'],
  DELIVERY_WEEKS: { sneak: 2, full: 4 },
  SESSION_TYPES: ['wedding','family','maternity','event','portrait','brand'],
  BUDGET_BANDS: ['under-1k','1-3k','3-6k','6k-plus'],
  RECOVERY_MODE: { active: false, message: 'Hafsa is resting and recharging. I am Haffu, her Creative Intelligence, fully handling inquiries and bookings.' }
};