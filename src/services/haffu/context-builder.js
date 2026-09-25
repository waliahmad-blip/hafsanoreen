/**
 * HAFFU STUDIO — Context Builder
 * Assembles the full system prompt with brand voice, packages,
 * availability context, and conversation history for each request
 */
const BRAND_VOICE = require('./brand-voice');
const CONSTANTS = require('../../utils/constants');
const recoveryMode = require('./recovery-mode');

class ContextBuilder {
  /**
   * Build the complete context for a HAFFU conversation turn
   * @param {Object} params
   * @param {string} params.sessionId - Unique session
   * @param {Array} params.history - Previous messages [{role, content}]
   * @param {Object} params.userProfile - Known user data
   * @returns {Object} { systemPrompt, messages, tools }
   */
  static build({ sessionId, history = [], userProfile = {} }) {
    const today = new Date().toISOString().split('T')[0];
    const systemPrompt = BRAND_VOICE.systemPrompt(userProfile.sessionType || 'general', {
      role: userProfile.role || 'client',
      clientProfile: userProfile,
      isCoPilot: userProfile.role === 'hafsa' || userProfile.isCoPilot === true
    });


    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.slice(-24)
    ];

    return { messages, systemPrompt };
  }
}

module.exports = ContextBuilder;