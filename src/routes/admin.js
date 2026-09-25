/**
 * HAFFU STUDIO — Admin Dashboard Routes
 */
const express = require('express');
const router = express.Router();
const AnalyticsService = require('../services/analytics');
const recoveryMode = require('../services/haffu/recovery-mode');
const { apiKeyAuth } = require('../middleware/auth');

router.get('/stats', apiKeyAuth, async (req, res) => {
  const stats = await AnalyticsService.getStats();
  res.json(stats);
});

router.get('/recovery-mode', apiKeyAuth, (req, res) => {
  res.json({ active: recoveryMode.active, since: recoveryMode.activatedAt });
});

router.post('/recovery-mode', apiKeyAuth, (req, res) => {
  if (req.body.active) recoveryMode.activate();
  else recoveryMode.deactivate();
  res.json({ active: recoveryMode.active });
});

module.exports = router;