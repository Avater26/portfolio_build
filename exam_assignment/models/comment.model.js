const db = require("../config/mysql");

// Post comment
exports.postCommentModel = async function (
  comment
) {
  try {
    const sql = `INSERT INTO exa_comments SET comment = :comment`;
    return await db.query(sql, {
      comment
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Admin stuff
exports.getCommentList = async function () {
  try {
    const sql = `SELECT id, comment FROM exa_comments`;
    const [comment] = await db.query(sql);
    return comment;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.commentDelete = async function (id) {
  try {
    const sql = `DELETE FROM exa_comments WHERE id = :id`;
    return await db.query(sql, {
      id,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};