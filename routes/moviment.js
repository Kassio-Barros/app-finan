const express = require('express');
const router = express.Router();

const create = require('./services/create');
const list = require('./services/list');
const update = require('./services/update');
const destroy = require('./services/destroy');

router.post('/', create);
router.get('/', list);
router.put('/', update);
router.delete('/', destroy);

module.exports = router;
