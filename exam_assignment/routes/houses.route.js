const {
  getSingleHouse,
  findByCaseNumber,
  getSearch,
  getSearchResults,
} = require("../controllers/homes.controller");

module.exports = function (app) {
  app.get("/exam/s%C3%B8g", getSearch);
  app.get("/exam/boliger", getSearchResults);
  app.get("/exam/bolig/:id", getSingleHouse);
};
