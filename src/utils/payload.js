// creates data object to be transfered to views

module.exports = function createPayload(req, extra) {
  const path = req._parsedOriginalUrl.path;
  const title = req.i18n.t('site_title');
  const payload = {
    site_title: title,
    site_slogan: req.i18n.t('site_slogan'),
    path,
    lang: req.language,
    notifications: [], // TODO
    messages: [], // TODO
    ...extra,
  };
  return payload;
};
