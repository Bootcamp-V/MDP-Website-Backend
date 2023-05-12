'use strict';

/**
 * steps-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::steps-service.steps-service');
