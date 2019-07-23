const express = require('express');

const router = express.Router();

const { createMoviment } = require('../services/moviment/create');

createMoviment(router);

module.exports = router;
