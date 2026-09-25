/**
 * HAFFU STUDIO — Conversation Model (Firestore + in-memory fallback)
 * Stores HAFFU chat history for context continuity. NEVER throws — when
 * Firebase is not configured (or is briefly unreachable) the transcript
 * degrades to a bounded in-memory store so the chat pipeline keeps working.
 */
const MEMORY_LIMIT = 50; // messages retained per session in fallback mode
const memory = new Map();

function memoryAdd(sessionId, msg) {
  const entry = memory.get(sessionId) || { sessionId, messages: [] };
  entry.messages.push(msg);
  if (entry.messages.length > MEMORY_LIMIT) entry.messages = entry.messages.slice(-MEMORY_LIMIT);
  entry.updatedAt = msg.timestamp;
  memory.set(sessionId, entry);
}

class Conversation {
  static async create(sessionId) {
    const doc = { sessionId, messages: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    try {
      const { getFirestore } = require('../config/firebase');
      await getFirestore().collection('conversations').doc(sessionId).set(doc);
    } catch {
      memory.set(sessionId, doc);
    }
    return doc;
  }

  static async addMessage(sessionId, role, content) {
    const msg = { role, content, timestamp: new Date().toISOString() };
    try {
      const { getFirestore } = require('../config/firebase');
      const admin = require('firebase-admin');
      await getFirestore().collection('conversations').doc(sessionId).set({
        sessionId,
        updatedAt: msg.timestamp,
        messages: admin.firestore.FieldValue.arrayUnion(msg),
      }, { merge: true });
    } catch {
      memoryAdd(sessionId, msg);
    }
    return msg;
  }

  static async get(sessionId) {
    try {
      const { getFirestore } = require('../config/firebase');
      const doc = await getFirestore().collection('conversations').doc(sessionId).get();
      if (doc.exists) return doc.data();
      return memory.get(sessionId) || null;
    } catch {
      return memory.get(sessionId) || null;
    }
  }
}

module.exports = Conversation;