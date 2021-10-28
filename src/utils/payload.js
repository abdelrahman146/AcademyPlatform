// creates data object to be transfered to views
module.exports = function createPayload(req, extra) {
  const path = req._parsedOriginalUrl.path;
  const title = req.i18next.t('site_title');
  const payload = {
    site_title: title,
    path,
    lang: req.language,
    ...extra,
  };
  return payload;
};
