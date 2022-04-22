const req = require("request");

module.exports = function (website, done) {
  req(website, function (err, res, body) {
    if (err) {
      throw err;
    } else {
      done(body);
    }
  });
};
