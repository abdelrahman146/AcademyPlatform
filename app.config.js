const path = require("path");

module.exports = {
  rootPath: path.dirname(require.main.filename),
  locales: [
    { lang: "ar", dir: "rtl" },
    { lang: "en", dir: "ltr" },
  ],
};
