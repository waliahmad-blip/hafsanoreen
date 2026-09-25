/**
 * HAFFU STUDIO — Google Calendar Service
 */
const config = require('../config/env');

class CalendarService {
  static async getAvailability(date) {
    // In production: queries Google Calendar API for free/busy
    // Mock response for now
    const day = new Date(date).getDay();
    if (day === 0 || day === 6) return { available: false, reason: 'Weekend — Hafsa may be shooting. Call to confirm.' };
    return { available: true, slots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] };
  }

  static async blockSlot(date, timeSlot, bookingId) {
    // In production: creates a Google Calendar event blocking the slot
    return { blocked: true, eventId: `haffu-event-${Date.now()}` };
  }
}

module.exports = CalendarService;