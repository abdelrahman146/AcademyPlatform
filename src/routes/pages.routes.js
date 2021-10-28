const express = require("express");
const router = express.Router();

// index page
router.get("/", (req, res) => {
  res.send("this is the index page");
});

// contact us page
router.get("/contact-us", (req, res) => {
  res.send("this is the contact us page");
});

router.get("/about-us", (req, res) => {
  res.send("this is the about us page");
});
router.get("/terms", (req, res) => {
  res.send("this is the terms page");
});
router.get("/privacy", (req, res) => {
  res.send("this is the privacy page");
});

module.exports = router;
