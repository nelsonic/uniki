var crypto = require('crypto');
// generate a hash of a specific length
module.exports = function perma(url, length) {
  var len = length || 7;
  var h = crypto.createHash('sha512').update(url.toString()).digest('base64');
  return h.substring(0, len);
}
