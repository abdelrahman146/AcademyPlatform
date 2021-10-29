/*
 * functions and variables to be used in app
 */

const { locales } = require('../config');

// reusable function to create dynamic links in the templates
exports.createLink = (path, lang) => {
  return lang + path;
};

// generate page direction
exports.getDir = (lang) => {
  return lang === 'ar' ? 'rtl' : 'ltr';
};

exports.createMenu = function (role) {
  let menu = [
    { key: 'home', path: '/' },
    {
      key: 'courses',
      sub: [
        { key: 'recorded', path: '/courses?type=recorded' },
        { key: 'live', path: '/courses?type=live' },
      ],
    },
  ];
  const others = [
    { key: 'contact', path: '/contact-us' },
    { key: 'about', path: '/about-us' },
    { key: 'terms', path: '/terms' },
    { key: 'privacy', path: '/privacy' },
  ];
  const account = [
    { key: 'edit', path: '/account/edit' },
    { key: 'settings', path: '/account/settings' },
    { key: 'purchased', path: '/account/purchased' },
  ];
  const dashboard = [
    { key: 'overall_stats', path: '/admin/dashboard' },
    { key: 'courses_stats', path: '/admin/dashboard/' },
  ];

  switch (role) {
    case 'student':
      menu.push({
        key: 'student',
        path: '',
      });
      return menu;
    case 'teacher':
      return menu;
    case 'admin':
      return menu;
    default:
      return menu;
  }
};

exports.menu = [];

exports.locales = locales;
