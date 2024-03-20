const db=require("../db/mysqldb.js");

const getUserListService= async()=>{
    const sql="select * from user ;";
    const[data]= await db.query(sql);
    return data;
}

module.exports={
    getUserListService,
}