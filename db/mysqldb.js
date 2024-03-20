const mysql2=require("mysql2/promise");
const {mysqlconfig}=require("../appconfig");

const db=mysql2.createPool({
    host:mysqlconfig.host,
    user:mysqlconfig.user,
    password:mysqlconfig.password,
    database:mysqlconfig.database,
})

module.exports=db;