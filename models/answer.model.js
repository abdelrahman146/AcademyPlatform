const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Answer = sequelize.define('Answer', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
    notEmpty: true,
  },
  weight: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
});

module.exports = Answer;
