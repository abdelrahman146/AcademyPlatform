const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Enrolled = sequelize.define("Enrolled", {
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Enrolled;
