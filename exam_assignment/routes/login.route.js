const {
  getLoginForm,
  loginCheck,
  logout,
} = require("../controllers/login.controller");

module.exports = function (app) {
  app.get("/projects/exam/login", getLoginForm);
  app.post("/projects/exam/login", loginCheck);

  app.get("/projects/exam/logout", logout);
};
