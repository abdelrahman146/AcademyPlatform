const express = require("express");
const { locales } = require("../app.config");

const router = express.Router();

router.get("/", function (req, res) {
  res.send("this is the dashboard page");
});

router.get("/courses", function (req, res) {
  res.send(`my courses page`);
});

router.get("/account", function (req, res) {
  res.send(`account page`);
});

module.exports = router;
