const User = require("../models/user.model");
const utilities = require("../utilities/user.utilities");

exports.getInfo = (req, res) => {
  User.getUserData((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  }, req.query.email);
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
  }, req.query.email);
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
  }, req.query);
};

exports.newAccount = (req, res) => {
  const validationRes = utilities.userRegisterationValidation(req.body);
  if (req.body && validationRes.isValid) {
    User.addNewUser(req.body, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
  } else {
    res.send({
      status: validationRes.isValid,
      msg: JSON.stringify(validationRes.msg)
    });
  }
}