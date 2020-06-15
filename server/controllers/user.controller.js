const User = require("../models/user.model");

exports.getInfo = (req, res) => {
  User.getUserData((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  },req.query.email);
};


exports.deleteInfo = (req, res) => {
  User.deleteUserData((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  },req.query.email);
};

exports.changeInfo = (req, res) => {
  User.changeUserData((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  },req.query);
};