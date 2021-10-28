const express = require("express");
const router = express.Router();

router.get("/:slug", function (req, res) {
  res.send("this is the list of course page");
});

router.get("/course/:slug/enroll", function (req, res) {
  res.send(`this is the list of courses page ${req.params.slug}`);
});

router.get("/course/:slug/lesson/:id", function (req, res) {
  res.send(`this is the list of courses page ${req.params.slug}`);
});

module.exports = router;
