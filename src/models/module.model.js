const { DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../db/sequelize');

const Module = sequelize.define('Module', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  weight: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
});

module.exports = Module;
