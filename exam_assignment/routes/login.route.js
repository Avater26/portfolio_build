const {
  getLoginForm,
  loginCheck,
  logout,
} = require("../controllers/login.controller");

module.exports = function (app) {
  app.get("/exam/login", getLoginForm);
  app.post("/exam/login", loginCheck);

  app.get("/exam/logout", logout);
};
