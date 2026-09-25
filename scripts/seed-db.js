/**
 * HAFFU STUDIO — Database Seeder
 * Run: node scripts/seed-db.js
 * Seeds Firestore with sample data for development
 */
const { getFirestore } = require('../src/config/firebase');

async function seed() {
  const db = getFirestore();
  const batch = db.batch();

  // Sample client
  const clientRef = db.collection('clients').doc();
  batch.set(clientRef, {
    name: 'Sarah Khan', email: 'sarah@example.com', phone: '+16475550123',
    source: 'website', createdAt: new Date().toISOString()
  });

  // Sample booking
  const bookingRef = db.collection('bookings').doc();
  batch.set(bookingRef, {
    clientId: clientRef.id, clientName: 'Sarah Khan', clientEmail: 'sarah@example.com',
    sessionType: 'wedding', date: '2027-06-15', location: 'Gairloch Gardens, Oakville',
    package: 'wedding', price: 3800, retainerPaid: false, retainerAmount: 1140,
    status: 'pending', createdAt: new Date().toISOString()
  });

  await batch.commit();
  console.log('Database seeded successfully');
  process.exit(0);
}

seed().catch(err => { console.error('Seed failed:', err); process.exit(1); });