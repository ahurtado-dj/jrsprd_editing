'use strict';

/**
 * Module dependencies.
 */
var articlesPolicy = require('../policies/ciudades.server.policy'),
  ciudades = require('../controllers/ciudades.server.controller');

module.exports = function (app) {
  // Ciudades collection routes
  app.route('/api/ciudades').all(articlesPolicy.isAllowed)
    .get(ciudades.list)
    .post(ciudades.create);

  // Single ciudad routes
  app.route('/api/ciudades/:ciudadId').all(articlesPolicy.isAllowed)
    .get(ciudades.read)
    .put(ciudades.update)
    .delete(ciudades.delete);

  // Finish by binding the ciudad middleware
  app.param('ciudadId', ciudades.ciudadByID);
};
