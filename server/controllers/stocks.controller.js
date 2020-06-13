const stocks = require("../models/stocks.model");

exports.findAllUserStocks = (req, res) => {
  if (req.query.owner) {
    stocks.getUserStocks((err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    }, req.query.owner);
  }else{
    res.status(400).send('')
  }
};