const { DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../db/sequelize');

const Wallet = sequelize.define('Wallet', {
  balance: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
  },
});

module.exports = Wallet;
