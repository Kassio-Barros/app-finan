const { Movement } = require('../../models');

async function controllerMovementCreate(body) {
  const result = await Movement.create({
    expiryDate: body.expiryDate,
    amount: body.amount,
    description: body.description
  });
  return result;
}

module.exports = {
  controllerMovementCreate
};
