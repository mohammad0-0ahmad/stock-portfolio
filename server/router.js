const stocks = require("./controllers/stocks.controller");
const User = require("./controllers/user.controller");
const industries = require("./controllers/industries.controller");
const Sessions = require("./controllers/sessions.controller");
const ResetPasswordRequests = require("./controllers/resetPasswordRequests.controller")

module.exports = (app) => {
    // Get data.
    app.post("/stocks", stocks.findAllUserStocks);
    app.post("/stocks_overview", stocks.userStocksOverview);
    app.post("/userinfo", User.getInfo);
    app.post("/industries", industries.getIndustries);
    app.post("/login", User.login);
    app.post("/verify", Sessions.verifySession);
    app.post("/img/", User.getImg);
    app.post("/resetPassword/check", ResetPasswordRequests.checkRequest);

    /////////////////////////////////////////////////////////////////////
    // Update data.
    app.post("/changePreferredIndustries", industries.changePreferredIndustry);
    app.post("/settings/deleteinfo", User.deleteInfo);
    app.post("/settings/changeInfo", User.changeInfo);
    app.post("/settings/changePassword", User.changePassword);
    app.post("/resetPassword/changePassword", ResetPasswordRequests.changePassword);

    /////////////////////////////////////////////////////////////////////
    // Create data.
    app.post("/register", User.newAccount);
    app.post("/uploadImg", User.uploadImg);
    app.post("/resetPassword/request", ResetPasswordRequests.createRequest);
};
