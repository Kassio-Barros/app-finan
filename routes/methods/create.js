const express = require('express');

const router = express.Router();

const { createMovement } = require('../../services/movement/create');

createMovement(router);

module.exports = router;
