module.exports = (app) => {
    const userInfo = require("../controllers/user.controller");
    app.get("/settings/userinfo", userInfo.getInfo);
  };