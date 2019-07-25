const { controllerMovementFind } = require('../../services/movement/find');

function findMovement(router) {
  return router.get('/', async (req, res, next) => {
    try {
      const response = await controllerMovementFind();
      res.json({ success: true, data: response });
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports = {
  findMovement
};
