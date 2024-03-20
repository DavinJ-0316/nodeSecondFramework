const db = require("../db/mysqldb");

const getUserbyUsername = async (name) => {
  const sql = "select * from user where username=?;";

  const [data] = await db.query(sql, [name]);

  return data;
};

module.exports = { getUserbyUsername };
