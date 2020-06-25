const stocks = require("../models/stocks.model");
const getUserEmailBySessionId = require("../models/sessions.model").getUserEmail;
const getUserStocksOverview = require("../models/stocksOverview.model").getUserStocksOverview
exports.findAllUserStocks = async (req, res) => {
  const sessionId = req.body.session
  const email = await getUserEmailBySessionId(sessionId)
  if (email) {
    stocks.getUserStocks(email, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
  } else {
    res.status(400).send('')
  }
};

exports.userStocksOverview = async (req, res) => {
  const sessionId = req.body.session
  const email = await getUserEmailBySessionId(sessionId)
  if (email) {
    getUserStocksOverview(email, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
  } else {
    res.status(400).send('')
  }
};