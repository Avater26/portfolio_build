const {
  getContact,
  postComment,
} = require("../controllers/contact.controller");

module.exports = function (app) {
  app.get("/exam/kontakt", getContact);
  app.post("/exam/kontakt", postComment);
};
