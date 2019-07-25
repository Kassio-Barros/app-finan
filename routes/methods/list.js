const express = require('express');

const router = express.Router();

const { listMovement } = require('../../controllers/movement/list');

listMovement(router);

module.exports = router;
