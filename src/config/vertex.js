const fs = require('fs');
const path = require('path');
const config = require('./env');

// Wire service-account credentials BEFORE any Google client initializes.
// (VertexAI honours googleAuthOptions; the aiplatform clients read the env var.)
const credsPath = config.vertex.credentialsPath;
if (credsPath && fs.existsSync(path.resolve(credsPath))) {
  process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve(credsPath);
}

const modelCache = {};

// Task-routed fleet — every model id is supplied by the private .env file;
// nothing is hard-coded here. If a slot is empty the task falls back to the
// conversation model, and an entirely unconfigured project uses the
// recovery engine (see routes/haffu.js).
const TASK_ROUTES = {
  conversation: config.vertex.models.conversation,
  vision: config.vertex.models.vision || config.vertex.models.conversation,
  quick: config.vertex.models.quick || config.vertex.models.conversation,
  image_edit: config.vertex.models.imageEdit,
  image_pro: config.vertex.models.imagePro,
  imagen: config.vertex.models.imagen,
  video: config.vertex.models.video,
  music: config.vertex.models.music,
  transcribe: config.vertex.models.transcribe,
  translate: config.vertex.models.translate,
  embedding: config.vertex.models.embedding,
  reasoning: config.vertex.models.conversation,
};

/** True when the intelligence layer has a usable conversation model. */
function isConfigured() {
  return Boolean(config.vertex.projectId && config.vertex.models.conversation);
}

function getModelForTask(task) {
  const id = TASK_ROUTES[task] || TASK_ROUTES.conversation;
  if (modelCache[id]) return modelCache[id];
  const { VertexAI } = require('@google-cloud/vertexai');
  const v = new VertexAI({
    project: config.vertex.projectId,
    location: config.vertex.location,
    ...(process.env.GOOGLE_APPLICATION_CREDENTIALS
      ? { googleAuthOptions: { keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS } }
      : {}),
  });
  const isImg = id.includes('image') || id.includes('imagen');
  const isEmb = id.includes('embedding');
  const gc = isEmb ? {} : { maxOutputTokens: task === 'quick' ? 256 : 2048, temperature: task === 'image_edit' ? 0.4 : 0.7, topP: 0.9, topK: 40, ...(isImg ? { responseModalities: ['TEXT', 'IMAGE'] } : {}), ...(task === 'reasoning' ? { thinkingConfig: { thinkingBudget: 2048 } } : {}) };
  modelCache[id] = v.getGenerativeModel({ model: id, generationConfig: gc, safetySettings: [
    { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
  ] });
  return modelCache[id];
}
function getModel() { return getModelForTask('conversation'); }
async function editImage(imageBase64, editPrompt, options = {}) {
  const model = getModelForTask('image_edit');
  const r = await model.generateContent({ contents: [{ role: 'user', parts: [
    { inlineData: { mimeType: options.mimeType || 'image/jpeg', data: imageBase64 } },
    { text: editPrompt }
  ] }] });
  const parts = r.response.candidates?.[0]?.content?.parts || [];
  return { images: parts.filter(p => p.inlineData).map(p => ({ data: p.inlineData.data, mimeType: p.inlineData.mimeType })), text: parts.filter(p => p.text).map(p => p.text).join(' ') };
}
async function analyzeImage(imageBase64, prompt, options = {}) {
  const model = getModelForTask('vision');
  const r = await model.generateContent({ contents: [{ role: 'user', parts: [
    { inlineData: { mimeType: options.mimeType || 'image/jpeg', data: imageBase64 } },
    { text: prompt }
  ] }] });
  return r.response.candidates?.[0]?.content?.parts?.[0]?.text || '';
}
async function generateImage(prompt, options = {}) {
  const { PredictionServiceClient } = require('@google-cloud/aiplatform');
  const c = new PredictionServiceClient({ apiEndpoint: config.vertex.location + '-aiplatform.googleapis.com' });
  const ep = 'projects/' + config.vertex.projectId + '/locations/' + config.vertex.location + '/publishers/google/models/' + (options.model || TASK_ROUTES.imagen);
  const [r] = await c.predict({ endpoint: ep, instances: [{ prompt }], parameters: { sampleCount: options.count || 1, aspectRatio: options.aspectRatio || '1:1' } });
  return r.predictions?.map(p => ({ bytesBase64Encoded: p.bytesBase64Encoded, mimeType: p.mimeType || 'image/png' })) || [];
}
async function generateVideo(prompt, options = {}) {
  const { PredictionServiceClient } = require('@google-cloud/aiplatform');
  const c = new PredictionServiceClient({ apiEndpoint: config.vertex.location + '-aiplatform.googleapis.com' });
  const ep = 'projects/' + config.vertex.projectId + '/locations/' + config.vertex.location + '/publishers/google/models/' + (options.model || TASK_ROUTES.video);
  const [op] = await c.predict({ endpoint: ep, instances: [{ prompt }], parameters: { aspectRatio: options.aspectRatio || '16:9', durationSeconds: options.duration || 8 } });
  return op;
}
async function generateMusic(prompt, options = {}) {
  const { PredictionServiceClient } = require('@google-cloud/aiplatform');
  const c = new PredictionServiceClient({ apiEndpoint: config.vertex.location + '-aiplatform.googleapis.com' });
  const ep = 'projects/' + config.vertex.projectId + '/locations/' + config.vertex.location + '/publishers/google/models/' + (options.model || TASK_ROUTES.music);
  const [r] = await c.predict({ endpoint: ep, instances: [{ prompt }], parameters: { durationSeconds: options.duration || 30 } });
  return r.predictions?.[0] || null;
}
/**
 * Text embeddings via the aiplatform predict endpoint — the embedding models
 * return a values vector, not generateContent text.
 */
async function getEmbedding(text, options = {}) {
  const { PredictionServiceClient } = require('@google-cloud/aiplatform');
  const c = new PredictionServiceClient({ apiEndpoint: config.vertex.location + '-aiplatform.googleapis.com' });
  const ep = 'projects/' + config.vertex.projectId + '/locations/' + config.vertex.location + '/publishers/google/models/' + (options.model || TASK_ROUTES.embedding);
  const [r] = await c.predict({ endpoint: ep, instances: [{ content: text }], parameters: { outputDimensionality: options.dimensions || 768 } });
  return r.predictions?.[0]?.values || null;
}
module.exports = { getModel, getModelForTask, isConfigured, generateImage, editImage, analyzeImage, generateVideo, generateMusic, getEmbedding, TASK_ROUTES };
