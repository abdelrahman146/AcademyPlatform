const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Wishlist = sequelize.define('Wishlist');

module.exports = Wishlist;
