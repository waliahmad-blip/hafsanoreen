/**
 * HAFFU STUDIO — Calendar Routes
 */
const express = require('express');
const router = express.Router();
const CalendarService = require('../services/calendar');

router.get('/slots', async (req, res) => {
  const { date } = req.query;
  if (!date) return res.status(400).json({ error: 'date required' });
  const result = await CalendarService.getAvailability(date);
  res.json(result);
});

module.exports = router;