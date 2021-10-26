const { DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../db/sequelize');

const ConferenceLecture = sequelize.define('ConferenceLecture', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  locked: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  summary: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  conf_link: {
    type: DataTypes.STRING,
  },
  thumbnail: {
    type: DataTypes.STRING,
  },
  startingDate: {
    type: DataTypes.DATE,
    isAfter: Sequelize.NOW,
  },
  duration: {
    type: DataTypes.STRING,
  },
});

module.exports = ConferenceLecture;
