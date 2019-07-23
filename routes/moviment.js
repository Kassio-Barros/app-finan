const express = require('express');
const router = express.Router();

const create = require('./create');
const list = require('./list');
const update = require('./update');
const destroy = require('./destroy');

router.post('/', create);
router.get('/', list);
router.put('/', update);
router.delete('/', destroy);

module.exports = router;
