const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const EnrolledCourse = sequelize.define('EnrolledCourse', {
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = EnrolledCourse;
