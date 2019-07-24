const { controllerMovement } = require('../../controllers/create');

function createMovement(router) {
  return router.post('/', async (req, res, next) => {
    try {
      const response = await controllerMovement(req.body);
      res.json({ success: true, data: response });
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports = {
  createMovement
};
