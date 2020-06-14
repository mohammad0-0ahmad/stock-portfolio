module.exports = (app) => {
  
    const stocks = require("../controllers/stocks.controller");
    app.post("/stocks", stocks.findAllUserStocks);
    app.post("/stocks_overview", stocks.userStocksOverview);
  };
  