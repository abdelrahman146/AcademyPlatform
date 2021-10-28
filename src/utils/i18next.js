const i18next = require("i18next");
const i18nextMiddleware = require("i18next-http-middleware");
const i18nextBackend = require("i18next-fs-backend");
const { rootPath, default_locale, locales } = require("../config");

i18next
  .use(i18nextBackend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    debug: false,
    fallbackLng: default_locale,
    preload: locales,
    saveMissing: true,
    backend: {
      loadPath: rootPath + "/locales/{{lng}}/{{ns}}.json",
      addPath: rootPath + "/locales/{{lng}}/{{ns}}.missing.json",
    },
    detection: {
      order: ["path"],
      lookupPath: "lang",
      lookupFromPathIndex: 0,
      ignoreCase: true,
    },
  });

module.exports = i18nextMiddleware.handle(i18next);
