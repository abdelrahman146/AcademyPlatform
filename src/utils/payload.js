const { locales } = require("../config");
const i18next = require("i18next");

// creates data object to be transfered to views
module.exports = function createPayload(req, extra) {
  const path = req._parsedOriginalUrl.path.replace(`/${req.locale.lang}`, "");
  const title = i18next.t("site_title");
  const payload = {
    locales,
    siteTitle: title,
    dark: false,
    path,
    locale: req.locale,
    ...extra,
  };
  return payload;
};
