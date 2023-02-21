var request = require("request");
var userDetails;

function gitInfo(userName) {
  // Setting URL and headers for request, by user
  var options = {
    url: `https://api.github.com/users/${userName}`,
    headers: {
      "User-Agent": "request",
    },
  };
  // Return new promise
  return new Promise(function (resolve, reject) {
    // Do async job
    request.get(options, function (err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

module.exports = {
  gitInfo: gitInfo,
};
