/*
 * functions and variables to be used in app
 */

const { locales } = require('../config');

// generate page direction
exports.getDir = (lang) => {
  return lang === 'ar' ? 'rtl' : 'ltr';
};

exports.menu = [];

exports.locales = locales;
