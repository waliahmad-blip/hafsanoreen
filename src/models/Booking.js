/**
 * HAFFU STUDIO — Booking Model (Firestore)
 */
const { getFirestore } = require('../config/firebase');
const COLLECTION = 'bookings';

class Booking {
  static async create(data) {
    const doc = {
      clientId: data.clientId,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      sessionType: data.sessionType,
      date: data.date,
      location: data.location,
      package: data.package || '',
      price: data.price || 0,
      retainerPaid: false,
      retainerAmount: Math.round(data.price * 0.3),
      status: 'pending',
      contractSigned: false,
      galleryDelivered: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const ref = await getFirestore().collection(COLLECTION).add(doc);
    return { id: ref.id, ...doc };
  }

  static async get(id) {
    const doc = await getFirestore().collection(COLLECTION).doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  }

  static async listByClient(clientId) {
    const snapshot = await getFirestore().collection(COLLECTION).where('clientId', '==', clientId).get();
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  static async update(id, data) {
    await getFirestore().collection(COLLECTION).doc(id).update({ ...data, updatedAt: new Date().toISOString() });
  }

  static async confirmPayment(id) {
    await Booking.update(id, { retainerPaid: true, status: 'confirmed' });
  }
}

module.exports = Booking;