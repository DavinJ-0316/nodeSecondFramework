const express=require("express");
const app= express();
const port ="9200";

const swaggerconfig = require("./common/swagger");
const swaggerUI = require("swagger-ui-express");

const swaggerUiOptions = {
  explorer: true,
};

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerconfig, swaggerUiOptions)
);

app.use(express.json());

const { expressjwt: jwt } = require("express-jwt");
const { JwtConfig } = require("./appconfig");
const jwtMiddleware = jwt({
  secret: JwtConfig.secret,
  algorithms: JwtConfig.algorithms,
}).unless({
  path: ["/api/login"],
});
app.use(jwtMiddleware);


const returnvalue = require("./middleware/returnvalue");
app.use(returnvalue.commonresult);

const auth = require("./router/routerauth");
app.use("/api", auth);

app.get("/",(req,res)=>{
    res.send("Hello World");
})

const user = require("./router/routeruser");
app.use("/api/user", user);

app.listen(port,()=>{
    console.log(`this app listen at http://localhost:${port}`);
})
