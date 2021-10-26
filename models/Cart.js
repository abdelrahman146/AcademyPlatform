const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Cart = sequelize.define('Cart');

module.exports = Cart;
