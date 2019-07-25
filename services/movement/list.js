const { Movement } = require('../../models');

async function controllerMovementList() {
  const result = await Movement.findAll();

  return result;
}

module.exports = {
  controllerMovementList
};
