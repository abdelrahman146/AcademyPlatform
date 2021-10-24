const express = require("express");
const { locales } = require("../app.config");
const coursesRoutes = require("./courses.routes");

module.exports = function (locale) {
  const router = express.Router();
  router.use("/", (req, res, next) => {
    req.locale = locale;
    next();
  });
  router.use("/courses", coursesRoutes);
  return router;
};
