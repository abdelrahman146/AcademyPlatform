const { locales } = require("../app.config");

const data = { locales, siteTitle: "Full Moon Academy", dark: false };

exports.getCoursesPage = function (req, res) {
  const path = req._parsedOriginalUrl.path.replace(`/${req.locale.lang}`, "");
  res.render("index", {
    ...data,
    path,
    locale: req.locale,
    pageTitle: "Courses",
  });
};

exports.getCategoryPage = function (req, res) {
  const path = req._parsedOriginalUrl.path.replace(`/${req.locale.lang}`, "");
  res.render("index", {
    ...data,
    path,
    locale: req.locale,
    pageTitle: req.params.slug,
  });
};
