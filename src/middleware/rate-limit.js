/**
 * HAFFU STUDIO — Rate Limit Middleware (supplemental)
 */
const rateLimit = require('express-rate-limit');

const haffuLimiter = rateLimit({ windowMs: 60000, max: 30, message: { error: 'Too many requests — Haffu needs a moment.' } });
const bookingLimiter = rateLimit({ windowMs: 60000, max: 5, message: { error: 'Too many booking attempts. Please wait.' } });

module.exports = { haffuLimiter, bookingLimiter };