const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const TestLecture = sequelize.define('TestLecture', {
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
  threshhold: {
    type: DataTypes.FLOAT,
    default: 0.5,
    min: 0.0,
    max: 1.0,
  },
});

module.exports = TestLecture;
