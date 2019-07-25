const express = require('express');
const router = express.Router();

const create = require('./methods/create');
const list = require('./methods/list');
const find = require('./methods/find');
const update = require('./methods/update');
const destroy = require('./methods/destroy');

router.post('/', create);
router.get('/:id', find);
router.get('/', list);
router.put('/', update);
router.delete('/', destroy);

module.exports = router;
