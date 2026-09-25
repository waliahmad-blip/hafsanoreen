/**
 * HAFFU STUDIO — Contract Model (Firestore)
 */
const { getFirestore } = require('../config/firebase');

class Contract {
  static async create(bookingId, clientId, terms) {
    const doc = { bookingId, clientId, terms, status: 'sent', signedAt: null, createdAt: new Date().toISOString() };
    const ref = await getFirestore().collection('contracts').add(doc);
    return { id: ref.id, ...doc };
  }

  static async sign(id) {
    await getFirestore().collection('contracts').doc(id).update({ status: 'signed', signedAt: new Date().toISOString() });
  }
}

module.exports = Contract;