// const http = require("http");

// const server = http.createServer((request, response) => {
//   //   console.log("headers", request.headers);
//   console.log("method", request.method);
//   console.log("url", request.url);

//   const user = {
//     name: "oludayo",
//     school: "mainor",
//     hobby: "coding",
//     wife: "Becky",
//   };

//   response.setHeader("Content-Type", "application/json");
//   //   response.end("<h1> Helloooo</h1>");
//   response.end(JSON.stringify(user));
// });

// server.listen(3001);

// app.use((req, res, next) => {
//   //   res.send("getting root");

//   console.log("<h1>getting root</h1>");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("getting profile");
// });

// app.get("/profile", (req, res) => {
//   res.send("getting profile");
// });

// app.post("/profile", (req, res) => {
//   const user = {
//     sex: "MALE",
//     CHURCH: "CE IKEJA",
//   };

//   res.send(user);
// });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);
app.get("/", (req, res) => {
  res.send(" getting root");
});

app.get("/profile", (req, res) => {
  res.send("getting profile");
});

app.post("/profile", (req, res) => {
  console.log(req.body);
  const user = {
    job: "developer",
    wife: "Becky",
    city: "Tallinn",
    name: "Oludayo",
    school: "mainor",
    hobby: "coding",
    CHURCH: "CE IKEJA",
  };

  res.send(user);
});

app.listen(3000);
