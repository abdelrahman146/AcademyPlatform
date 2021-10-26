const { Schema, model } = require("mongoose");

const TestSchema = new Schema({});

const UserModel = model("test", TestSchema);

module.exports = UserModel;
