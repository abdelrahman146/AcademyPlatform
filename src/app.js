const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const i18next = require("./utils/i18next");
const locals = require("./utils/locals");
const createRoutes = require("./routes");

const { User } = require("./models"); // To be deleted

dotenv.config();
let app = express();

// create local data
app.locals = locals;

// middlewares
app.use(cookieParser());
app.use(i18next);
app.disable("x-powered-by");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup template engine
app.set("view engine", "pug");
app.set("view options", { pretty: true });
app.set("views", "views");

// Only for development
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

// setup routes
app.use("/", createRoutes);

module.exports = app;
