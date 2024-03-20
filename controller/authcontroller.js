const loginservice = require("../service/loginservice");
// const loginservice = require("../service/testservice");
const jsonwebtoken = require("jsonwebtoken");
const { JwtConfig } = require("../appconfig");

const logincontroller = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const data = await loginservice.getUserbyUsername(username);

  if (data.length == 0) {
    res.returnvalue("", "username is not correct", 0);
    return;
  }

  if (data[0].password === password) {
    const playload = { id: data[0].id, username: data[0].username };
    const token = jsonwebtoken.sign(playload, JwtConfig.secret, {
      expiresIn: "2h",
    });

    res.returnvalue({ username: playload.username, token: token }, "", 1);
  } else {
    res.returnvalue("", "password is not correct", 0);
  }
};

module.exports = {
  logincontroller,
};
