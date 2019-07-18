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
        type: Sequelize.DECIMAL(12, 3),
        defaultValue: 0,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
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
