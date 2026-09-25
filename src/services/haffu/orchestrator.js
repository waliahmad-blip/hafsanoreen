/**
 * HAFFU STUDIO — AI Orchestrator
 * Routes requests to specialized models, executes tools, sanitizes output.
 * NEVER exposes model names or AI terminology.
 */
const { getModelForTask, editImage, analyzeImage } = require('../../config/vertex');
const config = require('../../config/env');
const ContextBuilder = require('./context-builder');
const { getToolDeclarations } = require('./tool-registry');
const toolHandlers = require('./tools/index');
const Conversation = require('../../models/Conversation');
const recoveryMode = require('./recovery-mode');
const BRAND_VOICE = require('./brand-voice');
const { logger } = require('../../utils/logger');

const VERTEX_TIMEOUT_MS = 25000;
const TOOL_TIMEOUT_MS = 15000;

/** Rejects if the promise does not settle within ms — keeps every chat turn snappy. */
function withTimeout(promise, ms, label) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

function toVertexRole(role) {
  return role === 'assistant' || role === 'model' ? 'model' : 'user';
}

class HaffuOrchestrator {
  /**
   * Process one conversational turn.
   * @param {Object} params { message, sessionId, userProfile, history }
   */
  static async process({ message, sessionId, userProfile = {}, history = [] }) {
    const startTime = Date.now();
    try {
      if (!message || !String(message).trim()) throw new Error('Empty message');

      // Prefer the server-side transcript; fall back to the client-sent history.
      let stored = [];
      try {
        const conversation = sessionId ? await Conversation.get(sessionId) : null;
        stored = conversation && Array.isArray(conversation.messages) ? conversation.messages : [];
      } catch {
        stored = [];
      }
      const priorHistory = stored.length > 0 ? stored : history;

      if (sessionId) await Conversation.addMessage(sessionId, 'user', String(message));

      const task = userProfile.hasImage ? 'vision' : 'conversation';
      const model = getModelForTask(task);
      const tools = getToolDeclarations();
      const { messages, systemPrompt } = ContextBuilder.build({ sessionId, history: priorHistory, userProfile });

      // Vertex contract: the system prompt goes to systemInstruction (a 'system'
      // role inside contents is rejected by the API); content roles are user/model.
      const request = {
        contents: messages
          .filter((m) => m.role !== 'system' && m.content)
          .map((m) => ({ role: toVertexRole(m.role), parts: [{ text: String(m.content) }] })),
        systemInstruction: { parts: [{ text: systemPrompt }] },
      };
      if (tools && tools.length > 0) request.tools = tools;

      let result;
      try {
        result = await withTimeout(model.generateContent(request), VERTEX_TIMEOUT_MS, 'Model call');
      } catch (apiError) {
        logger.warn('Model call failed, using fallback', apiError.message);
        return HaffuOrchestrator.fallback(message);
      }

      const candidate = result.response?.candidates?.[0];

      if (candidate?.content?.parts?.some((p) => p.functionCall)) {
        const toolResults = [];
        for (const part of candidate.content.parts) {
          if (part.functionCall) {
            const { name, args } = part.functionCall;
            const handler = toolHandlers[name];
            if (handler) {
              try {
                toolResults.push({ name, result: await withTimeout(handler(args), TOOL_TIMEOUT_MS, `Tool ${name}`) });
              } catch (e) {
                toolResults.push({ name, error: 'Tool failed' });
                logger.warn(`Tool ${name} failed:`, e.message);
              }
            }
          }
        }
        try {
          const fu = await withTimeout(
            model.generateContent({
              contents: [
                ...request.contents,
                { role: 'model', parts: candidate.content.parts },
                { role: 'user', parts: toolResults.map((tr) => ({ functionResponse: { name: tr.name, response: tr.result || { error: tr.error } } })) },
              ],
              systemInstruction: request.systemInstruction,
            }),
            VERTEX_TIMEOUT_MS,
            'Tool follow-up',
          );
          const finalParts = fu.response?.candidates?.[0]?.content?.parts || [];
          const finalText = finalParts.map((p) => p.text).filter(Boolean).join(' ');
          const reply = HaffuOrchestrator.sanitize(finalText || 'Consider it handled. Anything else I can curate for you?');
          if (sessionId) await Conversation.addMessage(sessionId, 'assistant', reply);
          return { reply, quickReplies: HaffuOrchestrator.quickReplies(finalText), action: toolResults[0]?.name || null, latency: Date.now() - startTime };
        } catch (e) {
          logger.warn('Tool follow-up failed', e.message);
          // fall through to the plain-text path below
        }
      }

      const text = (candidate?.content?.parts || []).map((p) => p.text).filter(Boolean).join(' ')
        || 'I\u2019m here to help! What would you like to know about Hafsa\u2019s photography?';
      const reply = HaffuOrchestrator.sanitize(text);
      if (sessionId) await Conversation.addMessage(sessionId, 'assistant', reply);
      return { reply, quickReplies: HaffuOrchestrator.quickReplies(text), action: null, latency: Date.now() - startTime };
    } catch (err) {
      logger.error('Orchestrator error:', err.message);
      return HaffuOrchestrator.fallback(message);
    }
  }

  static sanitize(text) {
    let cleaned = text;
    BRAND_VOICE.forbiddenPhrases.forEach(t => {
      cleaned = cleaned.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), 'Haffu');
    });
    // Neutralise any configured fleet identifiers that slip into a reply —
    // the patterns are built from the private .env values, never hard-coded.
    const fleetIds = Object.values(config.vertex.models).filter(Boolean);
    if (fleetIds.length > 0) {
      const escaped = fleetIds.map(id => id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').split('-')[0]).filter(Boolean);
      const families = [...new Set(escaped)];
      if (families.length > 0) {
        cleaned = cleaned.replace(new RegExp('(' + families.join('|') + ')[\\w.-]*', 'gi'), 'Haffu');
      }
    }
    return cleaned;
  }

  static quickReplies(text) {
    const lower = text.toLowerCase();
    if (lower.includes('wedding')) return [{ text: 'Check Dates', value: 'check-dates' }, { text: 'Pricing', value: 'pricing' }];
    if (lower.includes('gift') || lower.includes('shop') || lower.includes('product') || lower.includes('edit')) return [{ text: 'Gift Cards', value: 'gift-cards' }, { text: 'Presets', value: 'presets' }, { text: 'Photo Edit', value: 'photo-edit' }];
    return [{ text: 'Check Dates', value: 'check-dates' }, { text: 'Pricing', value: 'pricing' }, { text: 'Portfolio', value: 'portfolio' }];
  }

  static fallback(msg) {
    const lower = (msg || '').toLowerCase();
    if (lower.includes('price') || lower.includes('cost')) return { reply: 'Portraits from $450, Families & Maternity from $650, Events from $1,200, Weddings from $3,800. All + HST. [Full details →](/packages)', quickReplies: [{ text: 'Check Dates', value: 'check-dates' }], action: null };
    if (lower.includes('gift') || lower.includes('shop') || lower.includes('edit') || lower.includes('photo')) return { reply: 'We have gift cards ($50/$100/$250), Lightroom presets, wall art, photo enhancement, and more! What catches your eye?', quickReplies: [{ text: 'Gift Cards', value: 'gift-cards' }, { text: 'Photo Edit', value: 'photo-edit' }], action: null };
    return { reply: 'I\u2019m Haffu, Hafsa\u2019s Creative Intelligence! I can help with pricing, booking, digital products, and photo enhancement. What would you like to know?', quickReplies: [{ text: 'Check Dates', value: 'check-dates' }, { text: 'Pricing', value: 'pricing' }, { text: 'Photo Edit', value: 'photo-edit' }], action: null };
  }
}

module.exports = HaffuOrchestrator;