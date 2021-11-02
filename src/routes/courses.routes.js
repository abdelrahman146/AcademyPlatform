const express = require('express');
const createPayload = require('../utils/payload');
const router = express.Router();

// redirect to home page
router.get('/', (req, res) => {
  res.redirect(req.app.mountpath);
});

// search for a course
router.get('/search', (req, res) => {
  if (req.query.query) {
    res.send(`you are looking for ${req.query.query}`);
  } else {
    res.redirect(req.app.mountpath);
  }
});

// get list of courses of category
router.get('/:category', (req, res) => {
  const query = req.query;
  const payload = createPayload(req, {
    page_title: req.i18n.t('Courses'),
    role: 'admin',
    loggedin: true,
    include_header: true,
    query,
    user: { wishlist: [] },
    courses: [
      {
        id: 1,
        title: 'تعلم اللغة الانجليزية حتى الاحتراف',
        image: '/images/default_course_img.jpg',
        slug: 'course-slug',
        teacher: 'بدر',
        rate: 3.3,
        hours: 19,
        price: 99,
      },
    ],
  });
  res.render('courses', payload);
});

// get list of courses of subcategory
router.get('/:category/:subcategory', (req, res) => {
  res.send(
    `getting courses in category ${req.params.category} in subcategory ${req.params.subcategory}`
  );
});

module.exports = router;
