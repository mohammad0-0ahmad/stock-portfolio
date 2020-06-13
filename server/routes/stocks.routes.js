module.exports = (app) => {
    //Retrieve all customers
    const stocks = require("../controllers/stocks.controller");
    app.post("/stocks", stocks.findAllUserStocks);
  };
  