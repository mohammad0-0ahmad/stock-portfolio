module.exports = (app) => {
    const user = require("../controllers/user.controller");
    app.get("/myProfile", user.getInfo);
  };