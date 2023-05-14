'use strict';

/**
 * steps-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::steps-service.steps-service');
