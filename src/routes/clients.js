/**
 * HAFFU STUDIO — Client Routes
 */
const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const { apiKeyAuth } = require('../middleware/auth');

router.post('/', async (req, res) => {
  const client = await Client.create(req.body);
  res.status(201).json(client);
});

router.get('/:id', apiKeyAuth, async (req, res) => {
  const client = await Client.get(req.params.id);
  client ? res.json(client) : res.status(404).json({ error: 'Not found' });
});

module.exports = router;