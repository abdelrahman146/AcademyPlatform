const { DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../db/sequelize');

const VideoLecture = sequelize.define('VideoLecture', {
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
  video_link: {
    type: DataTypes.STRING,
  },
  thumbnail: {
    type: DataTypes.STRING,
  },
});

module.exports = VideoLecture;
