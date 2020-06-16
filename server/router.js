const stocks = require("./controllers/stocks.controller");
const User = require("./controllers/user.controller");
const industries = require("./controllers/industries.controller");

module.exports = (app) => {
    app.post("/stocks", stocks.findAllUserStocks);
    app.post("/stocks_overview", stocks.userStocksOverview);
    app.post("/userinfo", User.getInfo);
    app.post("/industries", industries.getIndustries);
    app.post("/settings/deleteinfo", User.deleteInfo);
    app.post("/settings/changeinfo", User.changeInfo);
};
