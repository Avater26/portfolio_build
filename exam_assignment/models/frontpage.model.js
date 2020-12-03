const db = require("../config/mysql");

exports.getLimitNews = async function () {
  try {
    const sql = `SELECT id, headline, text FROM exa_news
        ORDER BY date DESC
        LIMIT 3`;

    const [news] = await db.query(sql);
    return news;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.submitNewsletterModel = async function (email) {
  try {
    const sql = `INSERT INTO exa_newsletter SET email = :email`;

    const [result] = await db.query(sql, {
      email,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
exports.deleteNewsletterModel = async function (email) {
  try {
    const sql = `DELETE FROM exa_newsletter WHERE email = :email`;

    const [result] = await db.query(sql, {
      email,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
