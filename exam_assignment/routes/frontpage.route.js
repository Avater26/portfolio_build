const {
  frontpage,
  submitNewsletter,
  deleteNewsletter,
} = require("../controllers/frontpage.controller");

module.exports = function (app) {
  app.get("/exam", frontpage);
  app.post("/exam/signup", submitNewsletter);
  app.post("/exam/delete", deleteNewsletter);
};
