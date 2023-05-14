'use strict';

/**
 * model-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::model-service.model-service');
