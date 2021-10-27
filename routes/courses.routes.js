const express = require("express");
const { locales } = require("../app.config");
const coursesController = require("../controllers/courses.controller");

const router = express.Router();

router.get("/", coursesController.getCoursesPage);
router.get("/category/:slug", coursesController.getCategoryPage);
router.post("/course/add", coursesController.postAddCourse);
module.exports = router;

//
