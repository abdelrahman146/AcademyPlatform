const express = require("express");
const router = express.Router();

// redirects to home page
router.get("/", (req, res) => {
  res.redirect(req.app.mountpath);
});

// edit user information
router.get("/edit", function (req, res) {
  res.send(`this is the user edit page`);
});

// edit user settings
router.get("/settings", function (req, res) {
  res.send(`this is the user settings page`);
});

// purchase history page
router.get("/purchased", (req, res) => {
  res.send(`this is the purchase history page`);
});

// reciept page
router.get("/receipt/:id", function (req, res) {
  res.send(`this is the purchase receipt of ${req.params.id}`);
});

module.exports = router;
