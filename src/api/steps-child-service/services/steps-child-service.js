'use strict';

/**
 * steps-child-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::steps-child-service.steps-child-service');
