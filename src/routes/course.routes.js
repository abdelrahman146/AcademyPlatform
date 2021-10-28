const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect(req.app.mountpath);
});

// get a course
router.get("/:slug", function (req, res) {
  res.send(`fetching course ${req.params.slug}`);
});

// enter enrolled course (gets where the user has stopped and redirects to the lecture)
router.get("/:slug/learn", function (req, res) {
  res.send(
    `gets where the user has stopped in course "${req.params.slug}" and redirects to the lecture`
  );
});

// get the lecture
router.get("/:slug/learn/lecture/:id", function (req, res) {
  res.send(`got lecture ${req.params.id} of course ${req.params.slug}`);
});

module.exports = router;
