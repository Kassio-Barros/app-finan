const express = require('express');

const routes = express.Router();

const movement = require('./movement');

routes.use('/movement', movement);

module.exports = routes;
