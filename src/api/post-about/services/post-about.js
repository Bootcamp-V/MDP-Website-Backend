'use strict';

/**
 * post-about service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-about.post-about');
