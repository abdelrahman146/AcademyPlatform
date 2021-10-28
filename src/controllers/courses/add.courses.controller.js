const payload = require("../../utils/payload");

// add a new course
exports.post = async function (req, res) {
  let course;
  try {
    course = await req.user.createCourse({
      type: req.body.type,
      title: req.body.title,
      description: req.body.desc,
      language: req.body.lang,
      price: req.body.price,
      thumbnail: req.files.thumbnail[0].public_path,
      intro: req.files.intro[0].public_path,
    });
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
  console.log("succussfully created a course", course.toJSON());
  res.send(course.toJSON());
};

exports.get = async function (req, res) {
  const data = payload(req);
  console.log(req.language, req.dir);
  res.render("test", {
    lang: req.language,
    dir: req.dir,
  });
};
