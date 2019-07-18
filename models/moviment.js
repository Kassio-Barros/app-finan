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
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      },
      paid: {
        type: DataTypes.ENUM('pago', 'nao-pago'),
        allowNull: true
      }
    },
    {}
  );
  Moviment.associate = function(models) {
    // associations can be defined here
  };
  return Moviment;
};
