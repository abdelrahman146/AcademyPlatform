const { DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../db/sequelize");

const Course = sequelize.define("Course", {
  type: {
    type: DataTypes.STRING,
    isIn: [["recorded", "interactive"]],
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  language: { type: DataTypes.STRING, allowNull: false, notEmpty: true },
  startingDate: {
    type: DataTypes.DATE,
    isAfter: Sequelize.NOW,
  },
  endingDate: {
    type: DataTypes.DATE,
    isAfter: () => {
      this.startingDate;
    },
  },
  price: {
    type: DataTypes.NUMBER,
    min: 0,
  },
  thumbnail: {
    type: DataTypes.STRING,
  },
  intro: {
    type: DataTypes.STRING,
  },
});

module.exports = Course;
