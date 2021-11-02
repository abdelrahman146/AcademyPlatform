const express = require('express');
const router = express.Router();
const createPayload = require('../utils/payload');

// index page
router.get('/', (req, res) => {
  const payload = createPayload(req, {
    page_title: req.i18n.t('home'),
    features: [
      {
        icon: 'subscriptions',
        title: '+8000 Courses',
        lead: 'Explore a wide range of skills.',
      },
    ],
    feedbacks: [
      {
        message: 'A Wonderful Website',
        rate: 3,
        user: {
          country: 'SA',
          name: 'Ahmad Hossam',
        },
      },
      {
        message: 'A Wonderful Website',
        rate: 3,
        user: {
          country: 'SA',
          name: 'Ahmad Hossam',
        },
      },
      {
        message: 'A Wonderful Website',
        rate: 3,
        user: {
          country: 'SA',
          name: 'Ahmad Hossam',
        },
      },
    ],
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
    interactive_courses: [
      {
        id: 1,
        title: 'تعلم اللغة الانجليزية حتى الاحتراف',
        image: '/images/default_course_img.jpg',
        slug: 'course-slug',
        teacher: {
          name: 'Mohammad Foad',
          avatar: '/images/default_course_img.jpg',
        },
        price: 99,
        category: 'language',
        daysLeft: 7,
      },
      {
        id: 3,
        title: 'مهارات توظيف الإنفوجرافيك في تصميم العروض التقديمية',
        image: '/images/default_course_img.jpg',
        slug: 'course-slug',
        teacher: {
          name: 'Hossam Jameel',
          avatar: '/images/default_course_img.jpg',
        },
        category: 'design',
        daysLeft: 1,
      },
      {
        id: 3,
        title: 'Professional Accountant Using Excel',
        image: '/images/default_course_img.jpg',
        slug: 'course-slug',
        teacher: {
          name: 'Yaseen Saed',
          avatar: '/images/default_course_img.jpg',
        },
        price: 234,
        category: 'computer',
        daysLeft: 0,
      },
    ],
    categories: [
      {
        name: 'health',
        image: '/images/default_course_img.jpg',
        coursesCount: 2300,
      },
      {
        name: 'language',
        image: '/images/default_course_img.jpg',
        coursesCount: 1200,
      },
      {
        name: 'computer',
        image: '/images/default_course_img.jpg',
        coursesCount: 3420,
      },
      {
        name: 'law',
        image: '/images/default_course_img.jpg',
        coursesCount: 1000,
      },
      {
        name: 'design',
        image: '/images/default_course_img.jpg',
        coursesCount: 403,
      },
      {
        name: 'science',
        image: '/images/default_course_img.jpg',
        coursesCount: 830,
      },
    ],
  });
  res.render('home', payload);
});

// contact us page
router.get('/contact-us', (req, res) => {
  res.send('this is the contact us page');
});

router.get('/about-us', (req, res) => {
  res.send('this is the about us page');
});
router.get('/terms', (req, res) => {
  res.send('this is the terms page');
});
router.get('/privacy', (req, res) => {
  res.send('this is the privacy page');
});

module.exports = router;
