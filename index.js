require("dotenv").config();
const express = require("express");
const path = require("path");
// test
const app = express();

// React related
// app.use(express.static(path.join(__dirname, "build")));

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// app.get("/skills", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// app.get("/en", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// app.get("/en/skills", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// EJS related
require("./exam_assignment/config/session")(app);
require("./exam_assignment/config/flash")(app);
require("./exam_assignment/config/views")(app);
require("./exam_assignment/config/parser")(app);
require("./exam_assignment/config/locals")(app);

require("./exam_assignment/routes/frontpage.route")(app);
require("./exam_assignment/routes/houses.route")(app);
require("./exam_assignment/routes/login.route")(app);
require("./exam_assignment/routes/news.route")(app);
require("./exam_assignment/routes/contact.route")(app);

require("./exam_assignment/routes/admin.route")(app);

require("./server/server")(app);
