/**
 * HAFFU STUDIO — CSRF Protection
 */
const config = require('../config/env');

function csrfProtection(req, res, next) {
  if (['GET','HEAD','OPTIONS'].includes(req.method)) return next();
  const token = req.headers['x-csrf-token'];
  if (!token || token !== config.security.csrfSecret) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }
  next();
}

module.exports = { csrfProtection };