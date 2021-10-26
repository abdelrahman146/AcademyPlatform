const { DataTypes } = require('sequelize');

const sequelize = require('../db/sequelize');

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'Email Already Exists',
    isEmail: 'Invalid Email Address',
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: false,
  },
  fullname: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    isIn: [['student', 'admin', 'teacher']],
    allowNull: false,
    notEmpty: false,
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: 'images/avatar.png',
  },
  bio: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  mobile_number: {
    type: DataTypes.STRING,
  },
  mobile_code: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
