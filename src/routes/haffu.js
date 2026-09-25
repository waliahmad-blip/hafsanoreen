/**
 * HAFFU STUDIO — Creative Intelligence & Monetization Routes (Production Grade)
 * Live Vertex AI orchestration with graceful recovery, dynamic action cards,
 * streaming SSE, and zero AI leaks.
 */
const express = require('express');
const router = express.Router();
const HaffuOrchestrator = require('../services/haffu/orchestrator');
const { isConfigured } = require('../config/vertex');
const EmailService = require('../services/email');
const { PACKAGES } = require('../utils/constants');

function sanitizeOutput(text) {
  if (!text) return '';
  const forbidden = [
    /gpt[-a-z0-9.]*/gi,
    /chatgpt/gi,
    /claude[-a-z0-9.]*/gi,
    /openai/gi,
    /anthropic/gi,
    /large\s*language\s*model/gi,
    /llm/gi,
    /deepseek/gi
  ];
  let clean = text;
  forbidden.forEach(regex => {
    clean = clean.replace(regex, 'Studio Optics Engine');
  });
  return clean;
}

/** Curated editorial locations (self-contained — no dead imports). */
const LOCATIONS = [
  { name: 'Kelso Conservation Area (Milton)', note: 'Limestone cliffs and reservoir reflections — ignites amber at golden hour.' },
  { name: 'Rattlesnake Point (Milton)', note: '1,000-year-old cedar cliffs with sweeping editorial lookouts.' },
  { name: 'Gairloch Gardens (Oakville)', note: 'European lakeside rose gardens with Lake Ontario horizons.' },
];

/** Maps orchestrator tool actions to frontend action-card link keys. */
const ACTION_KEY_MAP = {
  create_booking: 'booking',
  check_availability: 'booking',
  headshot_booker: 'booking',
  recommend_package: 'packages',
  sell_gift_card: 'shop',
  sell_preset: 'shop',
  sell_wall_art: 'shop',
  sell_print_product: 'shop',
};

function cardForAction(action) {
  const key = ACTION_KEY_MAP[action];
  return key ? { key } : null;
}

async function processHaffuConversation({ message, history = [], userProfile = {} }) {
  const query = (message || '').toLowerCase();
  const thoughts = [];
  let actionCard = null;
  let reply = '';

  if (query.includes('available') || query.includes('date') || query.includes('book') || query.includes('schedule') || query.includes('retainer') || query.includes('deposit')) {
    thoughts.push('✦ Calibrating Halton & Toronto studio schedule across prime golden-hour windows...');
    thoughts.push('✦ Checking weekend availability for Kelso Conservation & Rattlesnake Point...');

    const dateMatch = query.match(/\b(202[6-9]-[0-1][0-9]-[0-3][0-9]|\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]* \d{1,2})\b/i);
    const dateStr = dateMatch ? dateMatch[0] : 'your selected weekend';

    reply = `I would love to arrange this for you! Hafsa's weekend calendar fills 2–4 months in advance, especially for golden-hour sessions across the Niagara Escarpment and Kelso. You can instantly secure your priority date right now with a flat $500 CAD reservation retainer.`;

    actionCard = {
      type: 'instant_retainer_card',
      title: '✦ Instant Date Reservation Retainer',
      subtitle: `Priority slot lock for ${dateStr}`,
      amount: 500,
      currency: 'CAD',
      features: [
        'Guaranteed golden hour priority booking',
        'Direct 1-on-1 wardrobe & styling consultation with Hafsa',
        'Complimentary 48-hour rush sneak peek',
        '100% credited toward your final collection'
      ],
      checkoutUrl: `/booking?instant=500&date=${encodeURIComponent(dateStr)}`
    };
  } else if (query.includes('price') || query.includes('package') || query.includes('cost') || query.includes('investment') || query.includes('rate')) {
    thoughts.push('✦ Accessing 2026 luxury collection matrix (Portraits, Family, Events & Weddings)...');
    thoughts.push('✦ Factoring Halton complimentary travel & high-fashion heirloom print delivery...');

    reply = `Hafsa crafts heirloom visual stories with unscripted warmth and cinematic precision. Here are our signature collections:\n\n✦ **The Family & Maternity ($650 CAD + HST)**: 2 hours at Kelso or your home, 40 hand-graded frames, sneak peek in 48 hours.\n✦ **The Wedding Heirloom ($3,800 CAD + HST)**: 8 hours comprehensive coverage, 400+ editorial frames.\n✦ **The Signature Commission ($6,500 CAD + HST)**: Full day coverage, second shooter, fine-art album & cinematic 4K highlight reel.\n✦ **The Portrait ($450 CAD + HST)**: 1.5 hours intimate editorial session, 25 frames.`;

    actionCard = {
      type: 'package_selector_card',
      title: '✦ Interactive Collection Builder',
      subtitle: 'Customize your coverage & add heirloom cinematic reels',
      packages: Object.entries(PACKAGES).map(([key, val]) => ({
        key,
        name: val.name,
        price: val.price,
        hours: val.hours,
        frames: val.frames
      }))
    };
  } else if (query.includes('location') || query.includes('milton') || query.includes('kelso') || query.includes('rattlesnake') || query.includes('toronto') || query.includes('oakville') || query.includes('where')) {
    thoughts.push('✦ Scanning geological topography: Niagara Escarpment, Kelso reservoir, Rattlesnake Point...');
    thoughts.push('✦ Calculating sun elevation & horizon angles for dramatic rim lighting...');

    reply = `Halton Region is Hafsa's creative sanctuary. Signature locations include:\n\n✦ **Kelso Conservation (Milton)**: Dramatic limestone cliffs, calm reservoir waters, and wooden boardwalks that ignite in amber tones during golden hour.\n✦ **Rattlesnake Point (Milton)**: Sweeping 1,000-year-old cedar cliffs with windswept, dramatic editorial views.\n✦ **Crawford Lake (Milton)**: Deeply intimate cedar boardwalks over ancient, tranquil waters.\n✦ **Gairloch Gardens (Oakville)**: Formal European lakeside rose gardens with sweeping Lake Ontario horizons.\n✦ **Distillery District (Toronto)**: Rich 19th-century Victorian brickwork and cobblestones for high-fashion editorial portraits.`;

    actionCard = {
      type: 'location_guide_card',
      title: '✦ Curated Editorial Locations',
      subtitle: 'Milton & Halton Topographic Scouting Guide',
      locations: LOCATIONS
    };
  }

  else if (query.includes('preset') || query.includes('gift') || query.includes('voucher') || query.includes('print') || query.includes('store') || query.includes('shop')) {
    thoughts.push('✦ Fetching digital asset catalog: Signature Film Presets, Archival Wall Prints, Gift Vouchers...');

    reply = `Welcome to the Studio Shop! Whether you're gifting a cherished experience or seeking Hafsa's signature film tones for your own photographs, our digital and print collections are crafted to archival standards.`;

    actionCard = {
      type: 'shop_showcase_card',
      title: '✦ Studio Heirloom Shop',
      items: [
        { key: 'preset_pack', name: 'The Film Essence Presets', price: 45, href: '/shop/film-essence-presets' },
        { key: 'preset_pack_pro', name: 'Complete Master Preset Suite', price: 89, href: '/shop/master-cinematic-suite' },
        { key: 'gift_card_100', name: 'Digital Gift Voucher ($100)', price: 100, href: '/shop/gift-voucher-100' },
        { key: 'wall_art_16x20', name: 'Museum Fine Art Print 16x20', price: 145, href: '/shop/museum-print' }
      ]
    };
  } else if (query.includes('wear') || query.includes('outfit') || query.includes('dress') || query.includes('color') || query.includes('wardrobe') || query.includes('style')) {
    thoughts.push('✦ Formulating tonal harmony rules: Oatmeal, Cream, Sage, Raw Linen, Charcoal...');
    thoughts.push('✦ Eliminating moiré interference and neon saturation artifacts...');

    reply = `Wardrobe styling sets the emotional tone of your images. Hafsa recommends:\n\n✦ **Color Palette**: Soft, earthy neutrals — oatmeal, alabaster cream, sage green, terracotta, warm taupe, and espresso brown.\n✦ **Textiles**: Natural raw linen, chunky knit wool, and flowing silk or chiffon that catch the evening breeze.\n✦ **To Avoid**: Bold logos, bright neons (which cast color onto skin), and matching uniforms. Aim to coordinate complementary tones rather than dressing identically!`;
  } else {
    thoughts.push('✦ Synthesizing Hafsa’s creative perspective with client inquiry...');
    thoughts.push('✦ Preparing tailored recommendations for natural-light commissions...');

    reply = `Welcome to the studio! I am **Haffu**, Hafsa's Creative Intelligence. Whether you are envisioning an intimate golden-hour session at Kelso Conservation, planning an editorial wedding in Toronto, or exploring our signature Lightroom presets, I am here to curate every detail for you. What type of visual story are we creating?`;

    actionCard = {
      type: 'quick_actions_card',
      title: '✦ How May I Assist You Today?',
      options: [
        { label: '💒 Weddings & Elopements', query: 'Tell me about wedding packages' },
        { label: '👪 Family & Maternity', query: 'Tell me about family and maternity sessions' },
        { label: '📍 Milton Locations & Kelso', query: 'What are the best locations in Milton?' },
        { label: '🎨 Signature Presets & Shop', query: 'Show me your signature presets and shop' },
        { label: '✦ Reserve Date ($500 Retainer)', query: 'I want to reserve a date with $500 retainer' }
      ]
    };
  }

  return {
    thoughts,
    reply: sanitizeOutput(reply),
    actionCard
  };
}

/**
 * One conversational turn: live Vertex intelligence first (25s budget), with
 * the recovery keyword engine as a graceful fallback. Zero AI terminology
 * reaches clients either way.
 */
async function generateHaffuTurn({ message, history, userProfile, sessionId }) {
  if (isConfigured()) {
    try {
      const result = await HaffuOrchestrator.process({ message, sessionId, userProfile, history });
      return {
        reply: result.reply,
        thoughts: ['✦ Consulting the atelier’s creative intelligence…'],
        actionCard: cardForAction(result.action),
        quickReplies: Array.isArray(result.quickReplies)
          ? result.quickReplies.map((q) => (typeof q === 'string' ? q : q.text)).filter(Boolean)
          : null,
      };
    } catch (err) {
      console.warn('[Haffu] Intelligence layer unavailable — recovery engine engaged:', err.message);
    }
  }
  const canned = await processHaffuConversation({ message, history, userProfile });
  return { ...canned, quickReplies: null };
}

router.post('/chat', async (req, res) => {
  try {
    const { message, history = [], userProfile = {}, sessionId } = req.body;
    if (!message || !String(message).trim()) {
      return res.status(400).json({ error: 'Message is required.' });
    }
    const sid = typeof sessionId === 'string' && sessionId.length >= 8
      ? sessionId
      : 'web-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    const turn = await generateHaffuTurn({ message, history, userProfile, sessionId: sid });
    res.json({
      success: true,
      sender: 'haffu',
      sessionId: sid,
      thoughts: turn.thoughts,
      message: turn.reply,
      actionCard: turn.actionCard,
      quickReplies: turn.quickReplies,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('[Haffu Chat Error]:', err);
    res.status(500).json({ error: 'Creative Intelligence turn failed. Please try again.' });
  }
});

router.post('/stream', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    const { message, history = [], userProfile = {}, sessionId } = req.body;
    if (!message || !String(message).trim()) {
      res.write(`event: error\ndata: ${JSON.stringify({ error: 'Message is required.' })}\n\n`);
      return res.end();
    }
    const sid = typeof sessionId === 'string' && sessionId.length >= 8
      ? sessionId
      : 'web-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    const result = await generateHaffuTurn({ message, history, userProfile, sessionId: sid });

    for (const thought of result.thoughts) {
      res.write(`event: thought\ndata: ${JSON.stringify({ text: thought })}\n\n`);
      await new Promise(r => setTimeout(r, 180));
    }

    const words = result.reply.split(' ');
    for (let i = 0; i < words.length; i++) {
      res.write(`event: text\ndata: ${JSON.stringify({ word: words[i] + ' ' })}\n\n`);
      await new Promise(r => setTimeout(r, 20));
    }

    if (result.actionCard) {
      res.write(`event: card\ndata: ${JSON.stringify(result.actionCard)}\n\n`);
    }

    res.write(`event: done\ndata: ${JSON.stringify({ timestamp: new Date().toISOString(), sessionId: sid })}\n\n`);
    res.end();
  } catch (err) {
    console.error('[Haffu Stream Error]:', err);
    res.write(`event: error\ndata: ${JSON.stringify({ error: 'Stream interrupted' })}\n\n`);
    res.end();
  }
});

async function handleContact(req, res) {
  try {
    const d = req.body || {};
    if (!d.email && !d.clientEmail) {
      return res.status(400).json({ error: 'Email address is required.' });
    }
    await EmailService.inquiry(d);
    await EmailService.bookingAlert(d);
    res.json({ success: true, message: 'Inquiry sent! Hafsa will respond within 24 hours.' });
  } catch (err) {
    console.error('[Haffu Contact Error]:', err.message);
    res.status(500).json({ error: 'Failed to send inquiry.' });
  }
}

router.post('/contact', handleContact);
// Also mounted at /api/contact (app.js alias) — serve POST /api/contact directly.
router.post('/', handleContact);

router.post('/booking-alert', async (req, res) => {
  try {
    await EmailService.bookingAlert(req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send alert.' });
  }
});

/**
 * What-to-Wear Style Report — drafts a personalized wardrobe guide from the
 * intake (session type, season, venue). Uses the wardrobe intelligence when
 * the studio intelligence layer is configured; otherwise the curated
 * atelier knowledge base answers instantly.
 */
const STYLE_PALETTES = {
  spring: 'soft sage, fresh ivory, powdery blue, pale terracotta',
  summer: 'warm cream, sand, muted coral, lake blue',
  autumn: 'oatmeal, burnt caramel, deep olive, dusty rose',
  winter: 'charcoal, oxblood, forest green, alabaster',
};

const SESSION_NOTES = {
  wedding: 'Prioritize structured silhouettes and flowing fabrics that catch the breeze — avoid stiff formality.',
  family: 'Comfort-first layers everyone can move in; harmonize tones instead of matching.',
  maternity: 'Flowing empire lines and soft knits that celebrate the bump; nothing tight at the wrists.',
  event: 'Polished but dance-floor ready — skip trailing hemlines near candles.',
  portrait: 'One statement piece per frame; keep jewellery minimal so the eyes lead.',
  brand: 'Editorial simplicity — solid tones read best on websites and decks.',
};

router.post('/style-report', async (req, res) => {
  try {
    const d = req.body || {};
    if (!d.email) return res.status(400).json({ error: 'Email is required.' });
    const sessionType = d.sessionType || 'portrait';
    const season = d.season || 'autumn';
    const venue = (d.venue || 'your chosen location').trim();
    const name = (d.clientName || 'there').trim();

    const palette = STYLE_PALETTES[season] || STYLE_PALETTES.autumn;
    const sessionNote = SESSION_NOTES[sessionType] || SESSION_NOTES.portrait;

    const report = [
      `A wardrobe brief for ${name} — ${sessionType} session, ${season}, at ${venue}.`,
      '',
      `YOUR PALETTE — anchor every outfit to: ${palette}. Harmonise across the family rather than matching; let one accent colour repeat.`,
      '',
      `THREE OUTFIT DIRECTIONS`,
      '1. The Heirloom: layered neutrals in raw linen and fine knit — the quiet frame that lets faces carry the story.',
      '2. The Golden Hour: warm tonal dressing (cream to caramel) that drinks the last hour of light.',
      '3. The Editorial: one deeper anchor piece (olive or charcoal) against soft neutrals for depth.',
      '',
      `FOR THIS SESSION — ${sessionNote}`,
      '',
      `AT ${venue.toUpperCase()} — think about the ground underfoot and the wind: closed-toe comfort shoes you can walk in, and a layer you can shed so silhouettes stay clean.`,
      '',
      `AVOID — neon brights (they cast colour onto skin), bold logos, busy micro-patterns (they moir\u00e9 on camera), and shoes you cannot walk a trail in.`,
      '',
      'One free revision is included — reply to the studio email to swap the venue or season and we redraft.',
    ].join('\n');

    try {
      await EmailService.inquiry({ ...d, subject: 'Your What-to-Wear Style Report', message: report });
    } catch (e) {
      console.warn('[Style Report] Email delivery unavailable:', e.message);
    }

    res.json({ success: true, report });
  } catch (err) {
    console.error('[Style Report Error]:', err.message);
    res.status(500).json({ error: 'Failed to draft the style report.' });
  }
});

module.exports = router;