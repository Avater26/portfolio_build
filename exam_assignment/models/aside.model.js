const db = require("../config/mysql");

exports.randomHouse = async function () {
  try {
    const sql = `SELECT exa_houses.id, exa_houses.title, exa_houses.case_number, exa_houses.price, exa_houses.size_home, exa_houses.size_area, exa_images.path
        FROM exa_images
        INNER JOIN exa_houses ON exa_images.fk_house = exa_houses.id
        WHERE exa_images.primary_img = 1
        ORDER BY RAND()
        LIMIT 1`;
    const [rows] = await db.query(sql);

    return rows;
  } catch (error) {
    console.log(error);
    return null;
  }
};
