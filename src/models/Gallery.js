/**
 * HAFFU STUDIO — Gallery Model (Firestore)
 */
const { getFirestore } = require('../config/firebase');

class Gallery {
  static async create(bookingId, clientId, title) {
    const doc = { bookingId, clientId, title, images: [], delivered: false, createdAt: new Date().toISOString() };
    const ref = await getFirestore().collection('galleries').add(doc);
    return { id: ref.id, ...doc };
  }

  static async addImage(galleryId, imageUrl, alt) {
    await getFirestore().collection('galleries').doc(galleryId).update({
      images: require('firebase-admin').firestore.FieldValue.arrayUnion({ url: imageUrl, alt: alt || '', uploadedAt: new Date().toISOString() })
    });
  }
}

module.exports = Gallery;