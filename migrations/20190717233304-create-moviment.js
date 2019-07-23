'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Moviments', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false
      },
      expiryDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      description: {
        type: Sequelize.STRING
      },
      paid: {
        type: Sequelize.ENUM('pago', 'nao-pago'),
        defaultValue: 'nao-pago'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Moviments');
  }
};
