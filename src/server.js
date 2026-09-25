/**
 * HAFFU STUDIO — Express Server Entry Point
 */
const app = require('./app');
const config = require('./config/env');
const { logger } = require('./utils/logger');

app.listen(config.port, () => {
  logger.info(`Haffu Studio API running on port ${config.port} [${config.nodeEnv}]`);
});