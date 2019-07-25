const express = require('express');

const router = express.Router();

const { createMovement } = require('../../controllers/movement/create');

createMovement(router);

module.exports = router;
