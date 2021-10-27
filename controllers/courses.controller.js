const { locales } = require("../app.config");

const data = { locales, siteTitle: "Full Moon Academy", dark: false };

exports.postAddCourse = async function (req, res) {
  res.send("hellooo");
  // const type = req.body.type;
  // const title = req.body.title;
  // const desc = req.body.desc;
  // const lang = req.body.lang;
  // const price = req.body.price;
  // const image = req.body.image;
  // const intro = req.body.intro;
  // const course = await req.user.createCourse({
  //   type,
  //   title,
  //   decription: desc,
  //   language: lang,
  //   price,
  //   image,
  //   intro,
  //   course,
  // });
  // console.log("created Product", course.toJSON());
  // res.send({
  //   message: "Course Created",
  //   course: course.toJSON(),
  // });
  // res.redirect("/courses");
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
