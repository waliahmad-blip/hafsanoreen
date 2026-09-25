/**
 * HAFFU STUDIO — Auth Middleware
 * API key validation for admin and internal routes
 */
const config = require('../config/env');

function apiKeyAuth(req, res, next) {
  const key = req.headers['x-api-key'];
  if (!key || key !== config.security.apiKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

module.exports = { apiKeyAuth };