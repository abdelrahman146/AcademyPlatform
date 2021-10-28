const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Question = sequelize.define("Question", {
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
  marks: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
});

module.exports = Question;
