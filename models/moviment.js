'use strict';
module.exports = (sequelize, DataTypes) => {
  const Moviment = sequelize.define(
    'Moviment',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      expiryDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      amount: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      paid: {
        type: DataTypes.ENUM('pago', 'nao-pago'),
        defaultValue: 'nao-pago'
      }
    },
    {}
  );
  Moviment.associate = function(models) {
    // associations can be defined here
  };
  return Moviment;
};
