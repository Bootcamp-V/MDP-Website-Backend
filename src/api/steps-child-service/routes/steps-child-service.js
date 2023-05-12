'use strict';

/**
 * steps-child-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::steps-child-service.steps-child-service');
