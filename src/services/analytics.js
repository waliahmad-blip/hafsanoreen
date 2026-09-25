/**
 * HAFFU STUDIO — Analytics Service
 * Tracks key business metrics for the dashboard
 */
const { getFirestore } = require('../config/firebase');

class AnalyticsService {
  static async trackEvent(event, data) {
    await getFirestore().collection('analytics').add({
      event, data, timestamp: new Date().toISOString()
    });
  }

  static async getStats() {
    const bookings = await getFirestore().collection('bookings').get();
    const total = bookings.size;
    const confirmed = bookings.docs.filter(d => d.data().status === 'confirmed').length;
    const revenue = bookings.docs.reduce((sum, d) => sum + (d.data().retainerPaid ? d.data().price : 0), 0);
    return { totalBookings: total, confirmed, revenue, conversionRate: total ? Math.round(confirmed / total * 100) : 0 };
  }
}

module.exports = AnalyticsService;