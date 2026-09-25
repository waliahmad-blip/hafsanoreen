/**
 * HAFFU STUDIO — Payment Model (Firestore)
 */
const { getFirestore } = require('../config/firebase');

class Payment {
  static async record(bookingId, stripePaymentIntentId, amount, status) {
    const doc = { bookingId, stripePaymentIntentId, amount, status, createdAt: new Date().toISOString() };
    const ref = await getFirestore().collection('payments').add(doc);
    return { id: ref.id, ...doc };
  }

  static async getByBooking(bookingId) {
    const snapshot = await getFirestore().collection('payments').where('bookingId', '==', bookingId).get();
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
  }
}

module.exports = Payment;