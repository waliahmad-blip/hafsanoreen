/**
 * HAFFU STUDIO — Firebase Admin SDK
 * Firestore for clients, bookings, conversations, contracts
 */
const admin = require('firebase-admin');
const config = require('./env');

let db = null;

function getFirestore() {
  if (db) return db;
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: config.firebase.projectId,
      clientEmail: config.firebase.clientEmail,
      privateKey: config.firebase.privateKey?.replace(/\\n/g, '\n')
    })
  });
  db = admin.firestore();
  return db;
}

module.exports = { getFirestore, admin };