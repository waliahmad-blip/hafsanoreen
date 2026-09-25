/**
 * HAFFU STUDIO — Recovery Mode
 * Activated when Hafsa is unavailable. HAFFU handles all inquiries.
 * Switches back to Standard Mode on Hafsa's command.
 */
const BRAND_VOICE = require('./brand-voice');

class RecoveryMode {
  constructor() {
    this.active = false;
    this.activatedAt = null;
  }

  activate() {
    this.active = true;
    this.activatedAt = new Date().toISOString();
    console.log('[HAFFU] Recovery Mode activated — handling all inquiries autonomously');
  }

  deactivate() {
    this.active = false;
    this.activatedAt = null;
    console.log('[HAFFU] Standard Mode restored');
  }

  getGreeting() {
    if (this.active) return BRAND_VOICE.recoveryMessage;
    const hour = new Date().getHours();
    let slot = 'morning';
    if (hour >= 12 && hour < 17) slot = 'afternoon';
    else if (hour >= 17 && hour < 21) slot = 'evening';
    else if (hour >= 21 || hour < 5) slot = 'night';
    const list = BRAND_VOICE.greetings[slot] || BRAND_VOICE.greetings.morning;
    return list[Math.floor(Math.random() * list.length)];
  }

  shouldNotifyHafsa(urgency) {
    // In recovery mode, only notify for urgent items (payments, signed contracts)
    if (!this.active) return true;
    return urgency === 'high';
  }

  getDailyDigestTime() {
    return this.active ? '7:00 PM' : '9:00 PM';
  }

  shouldAutoBook() {
    return this.active; // In recovery mode, HAFFU can book autonomously
  }
}

module.exports = new RecoveryMode();