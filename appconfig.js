module.exports={
    mysqlconfig:{
        host:"127.0.0.1",
        user:"root",
        password:"1234567",
        database:"workshop",
    },
    JwtConfig:{
        secret: "shhhhhhared-secret",
        audience: "apitester",
        issuer: "issuer",
        algorithms: ["HS256"],
        expiresIn: "2h",
    }
}