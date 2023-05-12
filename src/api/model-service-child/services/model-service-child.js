'use strict';

/**
 * model-service-child service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::model-service-child.model-service-child');
