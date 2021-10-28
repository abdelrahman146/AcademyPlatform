const path = require("path");
const { Sequelize } = require("sequelize");
const { rootPath } = require("../config");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(rootPath, "database.sqlite"),
  logging: false,
});

module.exports = sequelize;
