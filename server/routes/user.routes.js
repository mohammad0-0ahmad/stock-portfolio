module.exports = (app) => {
    const User = require("../controllers/user.controller");

    app.get("/settings/userinfo", User.getInfo);
    app.get("/settings/deleteinfo", User.deleteInfo);
    app.get("/settings/changeinfo", User.changeInfo);



  };