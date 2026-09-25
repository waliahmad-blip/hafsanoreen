/**
 * HAFFU STUDIO — Client Model (Firestore)
 */
const { getFirestore } = require('../config/firebase');
const COLLECTION = 'clients';

class Client {
  static async create(data) {
    const doc = {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      createdAt: new Date().toISOString(),
      source: data.source || 'website',
      tags: data.tags || [],
      totalBookings: 0
    };
    const ref = await getFirestore().collection(COLLECTION).add(doc);
    return { id: ref.id, ...doc };
  }

  static async findByEmail(email) {
    const snapshot = await getFirestore().collection(COLLECTION).where('email', '==', email).limit(1).get();
    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  }

  static async get(id) {
    const doc = await getFirestore().collection(COLLECTION).doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  }
}

module.exports = Client;