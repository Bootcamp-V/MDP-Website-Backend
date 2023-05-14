'use strict';

/**
 * steps-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::steps-service.steps-service');
