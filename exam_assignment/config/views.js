const express = require("express");

module.exports = function (app) {
  app.set("view engine", "ejs");
  app.set("views", "exam_assignment/views");
  app.use(express.static("exam_assignment/public"));
};
