const express = require("express");
const { courses } = require("../controllers");
const upload = require("../utils/upload");
const router = express.Router();

// router.get("/", coursesController.getCoursesPage);
// router.get("/category/:slug", coursesController.getCategoryPage);

// submit new course
router.post(
  "/add",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "intro", maxCount: 1 },
  ]),
  courses.add.post
);

// receive create new course form
router.get("/add", courses.add.get);

module.exports = router;
