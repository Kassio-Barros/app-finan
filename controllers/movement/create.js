const { controllerMovementCreate } = require('../../services/movement/create');

function createMovement(router) {
  return router.post('/', async (req, res, next) => {
    try {
      const response = await controllerMovementCreate(req.body);
      res.json({ success: true, data: response });
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports = {
  createMovement
};
