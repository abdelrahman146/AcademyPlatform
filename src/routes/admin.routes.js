const express = require("express");
const router = express.Router();

// enrolled courses
router.get("/", (req, res) => {
  res.redirect(req.app.mountpath);
});

// general statistics page
router.get("/dashboard", function (req, res) {
  res.send("general statistics page for admin");
});

// view course statistics
router.get("/dashboard/courses", function (req, res) {
  res.send(`courses statistics page for admin`);
});

// users stats
router.get("/dashboard/users", function (req, res) {
  res.send(`users statistics page for admin`);
});

// finance stats
router.get("/dashboard/finance", function (req, res) {
  res.send(`finance statistics page for admin`);
});

// categories list
router.get("/categories", function (req, res) {
  res.send(`categories list`);
});

// new category
router.get("/categories/add", function (req, res) {
  res.send(`new category form`);
});

// edit category
router.get("/categories/edit/:id", function (req, res) {
  res.send(`edit category ${req.params.id}`);
});

// users list
router.get("/users", function (req, res) {
  res.send(`users list`);
});

// new user
router.get("/users/add", function (req, res) {
  res.send(`new user form`);
});

// edit user
router.get("/users/edit/:id", function (req, res) {
  res.send(`edit user ${req.params.id}`);
});

// edit user
router.get("/settings", function (req, res) {
  res.send(`website settings page`);
});

module.exports = router;
