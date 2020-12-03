const db = require("../config/mysql.js");

module.exports = async function (req, res, next) {
  try {
    const userSQL = `SELECT exa_roles.level FROM exa_users
                        INNER JOIN exa_roles ON exa_users.fk_role = exa_roles.id
                        WHERE exa_users.id = :id`;

    const [rows] = await db.query(userSQL, {
      id: req.session.user,
    });

    if (rows[0].level >= 50) {
      return next();
    }

    res.redirect("/exam/");
    return;
  } catch (error) {
    res.redirect("/exam/");
    return;
  }
};
