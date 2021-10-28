const express = require("express");
const coursesRoutes = require("./courses.routes");
const courseRoutes = require("./course.routes");
const userRoutes = require("./user.routes");
const teachingRoutes = require("./teaching.routes");
const profileRoutes = require("./profile.routes");
const accountRoutes = require("./account.routes");
const checkoutRoutes = require("./checkout.routes");
const teacherRoutes = require("./teacher.routes");
const adminRoutes = require("./admin.routes");
const pagesRoutes = require("./pages.routes");

const router = express.Router();

// setup routes
router.use("/courses", coursesRoutes);
router.use("/course", courseRoutes);
router.use("/user", userRoutes);
router.use("/teaching", teachingRoutes);
router.use("/profile", profileRoutes);
router.use("/account", accountRoutes);
router.use("/checkout", checkoutRoutes);
router.use("/teacher", teacherRoutes);
router.use("/admin", adminRoutes);
router.use("/", pagesRoutes);

// 404
app.use((req, res) => {
  res.status(404).send("not found");
});

module.exports = router;
