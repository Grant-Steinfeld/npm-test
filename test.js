const promise = require("./index.js");

//test gitInfo fxn in index.js
promise
  .gitInfo("grant-steinfeld")
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.error(msg);
  });
