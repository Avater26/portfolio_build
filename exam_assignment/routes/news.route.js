const { getNews } = require("../controllers/news.controller");

module.exports = function (app) {
  app.get("/exam/nyheder", getNews);
};
