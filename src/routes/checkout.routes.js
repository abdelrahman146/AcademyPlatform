const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect(req.app.mountpath);
});

// get a course
router.get("/cart", function (req, res) {
  res.send(`checkout page for your cart items`);
});

// enter enrolled course (gets where the user has stopped and redirects to the lecture)
router.get("/course/:id", function (req, res) {
  res.send(`checkout page for course ${req.params.id}`);
});

module.exports = router;
