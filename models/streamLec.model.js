const { DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../db/sequelize');

const StreamLecture = sequelize.define('StreamLecture', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  locked: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  summary: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  stream_link: {
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

module.exports = StreamLecture;
