const { locales } = require("../config");

const data = { locales, siteTitle: "Full Moon Academy", dark: false };

exports.postAddCourse = async function (req, res) {
  try {
    res.send(`${JSON.stringify(req.body)} - ${JSON.stringify(req.file)}`);
    // const course = await req.user.createCourse({
    //   type: req.body.type,
    //   title: req.body.title,
    //   decription: req.body.desc,
    //   language: req.body.lang,
    //   price: req.body.price,
    //   image: req.body.image,
    //   intro: req.body.intro,
    //   course: req.body.course,
    // });
    // console.log("created Product", course.toJSON());
    // res.send({
    //   message: "Course Created",
    //   course: course.toJSON(),
    // });
    // res.redirect("/courses");
  } catch (err) {
    res.send({
      message: "Error Occured",
      error: err,
    });
  }
};

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
