const express = require('express');
const router = express.Router();

const create = require('./methods/create');
const list = require('./methods/list');
const update = require('./methods/update');
const destroy = require('./methods/destroy');

router.post('/', create);
router.get('/', list);
router.put('/', update);
router.delete('/', destroy);

module.exports = router;
