const express = require("express");
const coursesRoutes = require("./courses.routes");

const router = express.Router();

// tiny middleware to add the text direction
router.use((req, res, next) => {
  // req.i18n.changeLanguage("en");
  req.dir = req.language === "ar" ? "rtl" : "ltr";
  next();
});

// setup routes
router.use("/courses", coursesRoutes);

module.exports = router;
