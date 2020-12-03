const db = require("../config/mysql");

exports.getHouseTypes = async function () {
  try {
    const sql = `SELECT id, name FROM exa_house_type`;

    return await db.query(sql);
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.createHouseTypeModel = async function (name) {
  try {
    const sql = `INSERT INTO exa_house_type SET name = :name`;

    await db.query(sql, {
      name,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.getHouseTypeById = async function (id) {
  try {
    const sql = `SELECT id, name FROM exa_house_type WHERE id = :id;`;

    const [rows] = await db.query(sql, {
      id,
    });
    return rows[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.updateHouseType = async function (id, name) {
  try {
    const sql = `UPDATE exa_house_type SET name = :name WHERE id = :id;`;

    await db.query(sql, {
      id,
      name,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.deleteHouseTypeModel = async function (id) {
  try {
    const sql = `DELETE FROM exa_house_type WHERE id = :id`;

    await db.query(sql, {
      id,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
