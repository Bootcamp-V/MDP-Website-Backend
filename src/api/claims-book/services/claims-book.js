'use strict';

/**
 * claims-book service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::claims-book.claims-book');
