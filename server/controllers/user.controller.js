const User = require("../models/user.model");

exports.getInfo = (req, res) => {
  User.getPersonalInfoFromDatabase((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};