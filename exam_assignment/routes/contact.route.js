const {
  getContact,
  postComment,
} = require("../controllers/contact.controller");

module.exports = function (app) {
  app.get("/projects/exam/kontakt", getContact);
  app.post("/projects/exam/kontakt", postComment);
};
