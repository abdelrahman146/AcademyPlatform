const path = require("path");

module.exports = {
  rootPath: path.join(path.dirname(require.main.filename), ".."),
  locales: ["ar", "en"],
  default_locale: "ar",
};
