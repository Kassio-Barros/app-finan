const { controllerMovementList } = require('../../services/movement/list');

function listMovement(router) {
  return router.get('/', async (req, res, next) => {
    try {
      const response = await controllerMovementList();
      res.json({ success: true, data: response });
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports = {
  listMovement
};
