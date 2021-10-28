const dotenv = require("dotenv");
const express = require("express");
const i18next = require("./utils/i18next");
const { locales } = require("./config");
const locals = require("./utils/locals");
const createRoutes = require("./routes/routes");

const { User } = require("./models"); // To be deleted

dotenv.config();
let app = express();

// create local data
app.locals = locals;

// middlewares
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
app.get("/", (req, res) => res.redirect("/ar"));
app.use(
  "/:lang",
  (req, res, next) => {
    if (locales.includes(req.language)) {
      next();
    } else {
      res.status(404).send("not found");
    }
  },
  createRoutes
);

// 404
app.use((req, res) => {
  console.log();
  res.status(404).send("not found");
});

module.exports = app;
