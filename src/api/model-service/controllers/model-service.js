'use strict';

/**
 * model-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::model-service.model-service');
