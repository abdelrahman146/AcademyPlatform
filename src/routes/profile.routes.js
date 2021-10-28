const express = require("express");
const router = express.Router();

// enrolled courses
router.get("/", (req, res) => {
  res.send(
    `You have entered your profile, you get here the list of course you have purchased`
  );
});

// courses wishlist page
router.get("/wishlist", function (req, res) {
  res.send(`Your courses wishlist`);
});

// enter enrolled course (gets where the user has stopped and redirects to the lecture)
router.get("/cart", function (req, res) {
  res.send(`Your Cart`);
});

module.exports = router;
