const express = require("express");
const upload = require("../utils/upload");
const router = express.Router();

// enrolled courses
router.get("/", (req, res) => {
  res.send(req.app.mountpath);
});

router.post(
  "courses/add",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "intro", maxCount: 1 },
  ]),
  (req, res) => {
    res.send("thanks");
  }
);

// courses wishlist page
router.get("/courses", function (req, res) {
  res.send("the courses the teacher created");
});

// view course statistics
router.get("/courses/view/:id", function (req, res) {
  res.send(`course statistics for ${req.params.id}`);
});

// create new course page
router.get("/courses/add", function (req, res) {
  res.send(`create new course form`);
});

// edit a course
router.get("/courses/edit/:id", function (req, res) {
  res.send(`edit course ${req.params.id}`);
});

// wallet page
router.get("/wallet", function (req, res) {
  res.send(`teacher wallet page`);
});

// wallet previous transactions (in,out)
router.get("/wallet/history", function (req, res) {
  res.send(`wallet previous transactions (in, out)`);
});

// request payout
router.get("/wallet/payout", function (req, res) {
  res.send(`request payout page`);
});

module.exports = router;
