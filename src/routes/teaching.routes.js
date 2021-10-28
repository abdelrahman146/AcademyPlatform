const express = require("express");
const router = express.Router();

// teaching page
router.get("/", (req, res) => {
  res.send("become a teacher page");
});

// teaching submission form
router.get("/submit-form", (req, res) => {
  res.send("teaching submission form");
});

module.exports = router;
