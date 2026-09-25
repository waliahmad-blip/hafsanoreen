/**
 * HAFFU STUDIO — Stripe Configuration
 */
const config = require('./env');
const stripe = require('stripe')(config.stripe.secretKey);

module.exports = { stripe, webhookSecret: config.stripe.webhookSecret };