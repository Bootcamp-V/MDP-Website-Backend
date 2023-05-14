'use strict';

/**
 * model-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::model-service.model-service');
