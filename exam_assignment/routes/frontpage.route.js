const {
  frontpage,
  submitNewsletter,
  deleteNewsletter,
} = require("../controllers/frontpage.controller");

module.exports = function (app) {
  app.get("/projects/exam", frontpage);
  app.post("/projects/exam/signup", submitNewsletter);
  app.post("/projects/exam/delete", deleteNewsletter);
};
