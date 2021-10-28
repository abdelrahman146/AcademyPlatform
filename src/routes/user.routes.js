const express = require("express");
const router = express.Router();

// enrolled courses
router.get("/", (req, res) => {
  res.redirect(req.app.mountpath);
});

// registration page
router.get("/register", function (req, res) {
  res.send(`this is the registration page`);
});

// login page
router.get("/login", function (req, res) {
  res.send(`login page`);
});

// logout page
router.get("/logout", (req, res) => {
  res.send(`logout page`);
});

// public page of a user
router.get("/:id", function (req, res) {
  res.send(`public page of user ${req.params.id}`);
});

module.exports = router;
