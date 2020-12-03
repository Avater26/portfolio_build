const db = require("../config/mysql");
const moment = require("moment");

moment.locale("da");

exports.getNewsDESC = async function () {
  try {
    const sql = `SELECT headline, text, date FROM exa_news
        ORDER BY date DESC`;

    const [news] = await db.query(sql);
    news.forEach((current) => {
      current.date = moment(current.date).format("LL");
    });
    return news;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.getNewsList = async function () {
  try {
    const sql = `SELECT id, headline, text, date FROM exa_news`;
    const [news] = await db.query(sql);
    news.forEach((current) => {
      current.date = moment(current.date).format("LL");
    });
    return news;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.newsCreate = async function (headline, text) {
  try {
    const date = moment(new Date()).format("YYYY-MM-DD");
    const sql = `INSERT INTO exa_news SET headline = :headline, text = :text, date = :date`;
    return await db.query(sql, {
      headline,
      text,
      date,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.getNewsById = async function (id) {
  try {
    const sql = `SELECT headline, text, date FROM exa_news
        WHERE id = :id`;
    const [news] = await db.query(sql, {
      id,
    });
    news.forEach((current) => {
      current.date = moment(current.date).format("YYYY-MM-DD");
    });

    return news[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.newsUpdate = async function (headline, text, date, id) {
  try {
    date = moment(date).format("YYYY-MM-DD");
    const sql = `UPDATE exa_news SET headline = :headline, text = :text, date = :date WHERE id = :id`;
    return await db.query(sql, {
      headline,
      text,
      date,
      id,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.newsDelete = async function (id) {
  try {
    const sql = `DELETE FROM exa_news WHERE id = :id`;
    return await db.query(sql, {
      id,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
