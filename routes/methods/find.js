const express = require('express');

const router = express.Router();

const { findMovement } = require('../../controllers/movement/find');

// findMovement(router);

router.get('/', async (req, res, next) => {
  try {
    const response = await controllerMovementFind();
    res.json({ success: true, data: response });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
