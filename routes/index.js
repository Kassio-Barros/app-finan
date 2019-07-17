const express = require('express');

const routes = express.Router();

const moviment = require('./moviment');

routes.use('/moviment', moviment);

module.exports = routes;
