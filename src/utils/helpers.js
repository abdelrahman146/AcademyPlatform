// utility functions

exports.createQuery = (queryString, key, value, append) => {
  if (queryString.includes(key) && !append) {
    const current_query =
      queryString.charAt(queryString.indexOf(key) - 1) +
      queryString.slice(queryString.indexOf(key)).replace(/&.*/, '');
    queryString = queryString.replace(current_query, '');
  }
  if (queryString) {
    queryString = queryString.replace(queryString.charAt(0), '?');
    return queryString.includes(`${key}=${value}`)
      ? queryString
      : queryString + `&${key}=${value}`;
  }
  return `?${key}=${value}`;
};

// reusable function to create dynamic links in the templates
exports.createLink = (queryString, path) => {
  return path + queryString;
};

exports.queryString = (queries) => {
  return Reflect.ownKeys(queries).reduce((query, key, index) => {
    let qsign = index === 0 ? '?' : '&';
    if (typeof queries[key] === 'object') {
      return queries[key].reduce((str, value, i) => {
        qsign = i > 0 ? '&' : qsign;
        return str + qsign + key + '=' + value;
      }, '');
    }
    return query + qsign + key + '=' + queries[key];
  }, '');
};
