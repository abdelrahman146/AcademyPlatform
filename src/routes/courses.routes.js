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
  console.log(query);
  const payload = createPayload(req, {
    page_title: 'Courses',
    role: 'admin',
    loggedin: true,
    query,
  });
  res.render('courses', payload);
  // res.send(`getting courses in category ${req.params.category}`);
});

// get list of courses of subcategory
router.get('/:category/:subcategory', (req, res) => {
  res.send(
    `getting courses in category ${req.params.category} in subcategory ${req.params.subcategory}`
  );
});

module.exports = router;
