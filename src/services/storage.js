/**
 * HAFFU STUDIO — Cloud Storage Service
 * Contract PDFs, gallery uploads
 */
class StorageService {
  static async uploadContract(bookingId, pdfBuffer) {
    const bucket = require('../config/firebase').admin.storage().bucket();
    const file = bucket.file(`contracts/${bookingId}.pdf`);
    await file.save(pdfBuffer, { contentType: 'application/pdf' });
    return file.publicUrl();
  }
}

module.exports = StorageService;