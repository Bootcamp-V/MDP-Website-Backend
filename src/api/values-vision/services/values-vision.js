'use strict';

/**
 * values-vision service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::values-vision.values-vision');
