const jwt = require('jsonwebtoken');
const jwtSecret = sails.config.secrets.jwtSecret;

module.exports = {
  issue(payload) {
    return jwt.sign(payload, jwtSecret);
  },

  verify(token, callback) {
    return jwt.verify(token, jwtSecret, callback);
  }
}
