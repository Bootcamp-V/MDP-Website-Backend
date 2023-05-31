'use strict';

/**
 * timeline-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::timeline-service.timeline-service');
