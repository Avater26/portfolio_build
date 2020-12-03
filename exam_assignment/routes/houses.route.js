const {
  getSingleHouse,
  findByCaseNumber,
  getSearch,
  getSearchResults,
} = require("../controllers/homes.controller");

module.exports = function (app) {
  app.get("/projects/exam/s%C3%B8g", getSearch);
  app.get("/projects/exam/boliger", getSearchResults);
  app.get("/projects/exam/bolig/:id", getSingleHouse);
};
