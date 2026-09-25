/**
 * HAFFU STUDIO — Express Application (Production Grade)
 */
const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const config = require('./config/env');

const app = express();

// Security with permissive image & media loading for luxury CDNs
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));
app.use(cors({ origin: true, credentials: true }));

// Rate Limiter — API traffic only. Static assets (pages, images, WebGL media)
// are served unlimited so image-heavy pages never trip the limiter.
if (config.security && config.security.rateLimitWindow) {
  app.use('/api', rateLimit({
    windowMs: config.security.rateLimitWindow,
    max: config.security.rateLimitMax || 200,
    standardHeaders: true,
    legacyHeaders: false
  }));
}

// Body Parsing with Raw Body Buffer Capture for Stripe Webhooks
app.use(express.json({
  limit: '10mb',
  verify: (req, res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
if (config.nodeEnv !== 'test') app.use(morgan('short'));

// Serve Public Static Assets (HTML, WebGL Shaders, Audio, Icons) with Clean HTML Extensions.
// The Next.js static export (web/out) takes priority when present - it is the current site.
const fs = require('fs');
const nextOutDir = path.join(__dirname, '../web/out');
// The Next.js export (web/out) is the live site; public-legacy is the
// archived first-generation build, kept only as a fresh-clone fallback.
const staticRoot = fs.existsSync(nextOutDir) ? nextOutDir : path.join(__dirname, '../public-legacy');
app.use(express.static(staticRoot, {
  redirect: false,
  extensions: ['html'],
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) res.setHeader('Cache-Control', 'no-cache');
    if (filePath.endsWith('sw.js') || filePath.endsWith('manifest.json') || filePath.endsWith('site.webmanifest')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));



// Clean-URL fallback for the Next.js static export:
// /about -> about.html (or about/index.html), /shop/x -> shop/x.html
app.use((req, res, next) => {
  if (req.method !== 'GET') return next();
  const urlPath = decodeURIComponent(req.path);
  if (urlPath.includes('..') || urlPath.startsWith('/api')) return next();
  const safePath = path.normalize(urlPath).replace(/^(\.\.[\\/])+/, '');
  const candidates = [
    path.join(staticRoot, safePath + '.html'),
    path.join(staticRoot, safePath, 'index.html')
  ];
  for (const file of candidates) {
    if (fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.setHeader('Cache-Control', 'no-cache');
      return res.sendFile(file);
    }
  }
  next();
});

// Health Check (Zero leaks)
app.get('/api/health', (req, res) => res.json({
  status: 'ok',
  intelligence: 'Haffu',
  studio: 'Hafsa Noreen Photography',
  version: '1.0.0'
}));

// Core Routes
app.use('/api/haffu', require('./routes/haffu'));
app.use('/api/contact', require('./routes/haffu')); // Alias for direct contact forms
app.use('/api/booking', require('./routes/booking'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/calendar', require('./routes/calendar'));
app.use('/api/email', require('./routes/email'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/admin', require('./routes/admin'));

// Fallback for SPA/Static HTML routing
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  if (fs.existsSync(path.join(staticRoot, '404.html'))) {
    res.status(404).sendFile(path.join(staticRoot, '404.html'));
  } else {
    res.status(404).send('Page not found');
  }
});

// API 404
app.use('/api/*', (req, res) => res.status(404).json({ error: 'Endpoint not found' }));

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Application Error]:', err);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

module.exports = app;