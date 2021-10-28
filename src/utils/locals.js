/*
 * functions and variables to be used in app
 */

const i18next = require("i18next");

// reusable function to create dynamic links in the templates
exports.createLink = (path, lang) => {
  return lang + path;
};

exports.siteTitle = i18next.t("siteTitle");