const { controllerMoviment } = require('./../../controllers/create');

function createMoviment(router) {
  return router.post('/', async (req, res, next) => {
    try {
      const response = await controllerMoviment(req.body);
      res.json({ success: true, data: response });
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports = {
  createMoviment
};
