// const c = require("./script2");

// const a = c.largeNumber;
// const b = 5;

// setTimeout(() => {
//   console.log(a + b);
// }, 3000);

// console.log(__dirname);

// const c = require("fs");
// console.log(c);

// const c = require("http");
// console.log(c);

// const script2 = require("./script2.js");
// const a = script2.largeNumber;
// const b = 6;

// console.log(a + b);

const expess = require("express");
const app = express();

// app.listen(3000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);
