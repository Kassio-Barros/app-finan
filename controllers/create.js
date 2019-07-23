const { Moviment, Sequelize } = require('../models');

async function controllerMoviment(body) {
  const result = await Moviment.create({
    expiryDate: body.expiryDate,
    amount: body.amount,
    description: body.description
  });
  return result;
}

module.exports = {
  controllerMoviment
};
