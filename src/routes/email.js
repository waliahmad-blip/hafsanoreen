/**
 * HAFFU STUDIO — Email Routes
 */
const express = require('express');
const router = express.Router();
const EmailService = require('../services/email');
const { apiKeyAuth } = require('../middleware/auth');

router.post('/send', apiKeyAuth, async (req, res) => {
  try {
    const result = await EmailService.send(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Email failed' });
  }
});

module.exports = router;