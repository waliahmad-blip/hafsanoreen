/**
 * HAFFU STUDIO — Booking Routes
 */
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Client = require('../models/Client');
const CalendarService = require('../services/calendar');
const EmailService = require('../services/email');
const { validate, bookingSchema } = require('../middleware/validate');
const { apiKeyAuth } = require('../middleware/auth');

// Create booking
router.post('/', validate(bookingSchema), async (req, res) => {
  try {
    let client = await Client.findByEmail(req.validated.clientEmail);
    if (!client) client = await Client.create({ name: req.validated.clientName, email: req.validated.clientEmail, phone: req.validated.clientPhone });
    const booking = await Booking.create({ ...req.validated, clientId: client.id });
    await CalendarService.blockSlot(booking.date, 'pending', booking.id);
    await EmailService.sendBookingConfirmation(booking.clientEmail, booking.clientName, `${booking.sessionType} session on ${booking.date}`);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Booking creation failed' });
  }
});

// Get booking
router.get('/:id', apiKeyAuth, async (req, res) => {
  const booking = await Booking.get(req.params.id);
  booking ? res.json(booking) : res.status(404).json({ error: 'Not found' });
});

// List client bookings
router.get('/client/:clientId', apiKeyAuth, async (req, res) => {
  const bookings = await Booking.listByClient(req.params.clientId);
  res.json(bookings);
});

module.exports = router;