const db = require("../config/mysql");

const { hashSync } = require("bcryptjs");

exports.getUsersModel = async function () {
  try {
    const userSQL = `SELECT exa_users.id, exa_users.username, exa_roles.name AS role
        FROM exa_users
        INNER JOIN exa_roles ON exa_users.fk_role = exa_roles.id;`;

    const [results] = await db.query(userSQL);

    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.getUserById = async function (id) {
  try {
    const userSQL = `SELECT id, username, fk_role
        FROM exa_users
        WHERE exa_users.id = :id;`;

    const [results] = await db.query(userSQL, {
      id,
    });

    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.getUserByUsername = async function (username) {
  try {
    const userSQL = `SELECT id, username, password
        FROM exa_users
        WHERE username = :username;`;

    const [results] = await db.query(userSQL, {
      username,
    });

    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.createUserModel = async function (username, password, role) {
  try {
    const userSQL = `INSERT INTO exa_users 
        SET username = :username, password = :password, fk_role = :fk_role`;

    const hashPass = hashSync(password, 10);

    const [result] = await db.query(userSQL, {
      username,
      password: hashPass,
      fk_role: role,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.updateUser = async function (username, password, role, id) {
  try {
    const userSQL = `UPDATE exa_users SET username = :username, 
        password = :password, fk_role = :fk_role  WHERE id = :id;`;

    const hashPass = hashSync(password, 10);

    const [result] = await db.query(userSQL, {
      username,
      password: hashPass,
      fk_role: role,
      id,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.deleteUserModel = async function (id) {
  try {
    const userSQL = `DELETE FROM exa_users WHERE id = :id;`;

    const [result] = await db.query(userSQL, {
      id,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.getRoles = async function () {
  try {
    const rolesSQL = `SELECT id, name, level FROM exa_roles`;

    const [results] = await db.query(rolesSQL);

    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.getRoleById = async function (id) {
  try {
    const rolesSQL = `SELECT name, level FROM exa_roles WHERE id = :id`;

    const [results] = await db.query(rolesSQL, {
      id,
    });

    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.createRoleModel = async function (name, level) {
  try {
    const rolesSQL = `INSERT INTO exa_roles SET name = :name, level = :level`;

    const [results] = await db.query(rolesSQL, {
      name: name,
      level: level,
    });

    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.editRoleModel = async function (id, name, level) {
  try {
    const rolesSQL = `UPDATE exa_roles SET name = :name, level = :level WHERE id = :id;`;

    const [results] = await db.query(rolesSQL, {
      name,
      level,
      id,
    });

    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.deleteRoleModel = async function (id) {
  try {
    const roleSQL = `DELETE FROM exa_roles WHERE id = :id`;

    const [results] = await db.query(roleSQL, {
      id,
    });

    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};
