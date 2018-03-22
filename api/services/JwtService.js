const jwt = require('jsonwebtoken');
const jwtSecret = sails.config.secrets.jwtSecret;

module.exports = {
  issue(payload) {
    return jwt.sign(payload, jwtSecret);
  },

  verify(token, callback) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        return resolve(decoded);
      });
    });
  }
}
