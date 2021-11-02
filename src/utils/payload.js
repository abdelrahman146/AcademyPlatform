// creates data object to be transfered to views
const helpers = require('./helpers');

module.exports = function createPayload(req, extra) {
  const path = req._parsedOriginalUrl.path;
  const queryString = helpers.queryString(req.query);
  const createLink = helpers.createLink.bind(null, queryString);
  const createQuery = helpers.createQuery.bind(null, queryString);
  const payload = {
    path,
    queries: req.query,
    queryString: queryString,
    lang: req.language,
    isLoggedin: req.isLoggedin || false,
    user: {
      notifications: [], // TODO Method getNotifications in User Model
      messages: [], // TODO Method
      wishlist: ['1'], // TODO Method in user
      cart: ['1'], // TODO Method in user
    },
    createLink,
    createQuery,
    ...extra,
  };
  return payload;
};
