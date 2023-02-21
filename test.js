const promise = require("./index.js");

promise
  .gitInfo("grant-steinfeld")
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.error(msg);
  });
