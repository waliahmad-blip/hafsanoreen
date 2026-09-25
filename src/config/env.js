/**
 * HAFFU STUDIO — Environment Configuration
 * Validates and exports all environment variables
 */
require('dotenv').config();

const required = ['VERTEX_AI_PROJECT_ID', 'VERTEX_AI_LOCATION'];
const missing = required.filter(k => !process.env[k]);
if (missing.length && process.env.NODE_ENV === 'production') {
  console.error('Missing required env vars:', missing.join(', '));
  process.exit(1);
}

module.exports = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  baseUrl: process.env.BASE_URL || 'https://hafsanoreen.com',
  vertex: {
    projectId: process.env.VERTEX_AI_PROJECT_ID,
    location: process.env.VERTEX_AI_LOCATION || 'us-central1',
    credentialsPath: process.env.VERTEX_AI_CREDENTIALS_PATH,
    // Multi-model fleet — every model id comes from the private .env file.
    // No defaults live in code: if an env var is missing the task simply
    // falls back to the recovery engine until it is configured.
    models: {
      conversation: process.env.VERTEX_AI_MODEL || '',
      quick: process.env.VERTEX_AI_FAST_MODEL || '',
      vision: process.env.VERTEX_AI_VISION_MODEL || '',
      imageEdit: process.env.VERTEX_AI_IMAGE_MODEL || '',
      imagePro: process.env.VERTEX_AI_IMAGE_PRO_MODEL || '',
      imagen: process.env.VERTEX_AI_IMAGEN_MODEL || '',
      video: process.env.VERTEX_AI_VIDEO_MODEL || '',
      music: process.env.VERTEX_AI_MUSIC_MODEL || '',
      transcribe: process.env.VERTEX_AI_TRANSCRIBE_MODEL || '',
      translate: process.env.VERTEX_AI_TRANSLATE_MODEL || '',
      embedding: process.env.VERTEX_AI_EMBEDDING_MODEL || '',
    },
  },
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
  },
  calendar: {
    id: process.env.GOOGLE_CALENDAR_ID,
    credentialsPath: process.env.GOOGLE_CALENDAR_CREDENTIALS_PATH
  },
  email: {
    from: process.env.EMAIL_FROM || 'hello@hafsanoreen.com',
    apiKey: process.env.EMAIL_API_KEY
  },
  security: {
    apiKey: process.env.API_KEY,
    csrfSecret: process.env.CSRF_SECRET || 'haffu-csrf-secret',
    sessionSecret: process.env.SESSION_SECRET || 'haffu-session-secret',
    rateLimitWindow: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000'),
    rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX || '100')
  }
};