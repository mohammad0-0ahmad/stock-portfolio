const User = require("../models/user.model");
const utilities = require("../utilities/user.utilities");
const getUserEmailBySessionId = require("../models/sessions.modell").getUserEmail;

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

exports.changePassword = (req, res) => {
  User.changePassword((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  }, req.query);
};

exports.uploadImg = (req, res) => {
  User.changeImg(req.files.img, req.query.email, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  })
}

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.login({ email, password }, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  })
}

exports.getImg = async (req, res) => {
  const email = req.params.sessionId ? await getUserEmailBySessionId(req.params.sessionId) : false
  if (email) {
    User.retrieveImg(email, (err, data) => {
      if (err) {
        res.status(204).send({
          message: err.message,
        });
      } else {
        res.writeHead(200, { 'Content-Type': 'image/png' }).end(data, 'binary');
      }
    })
  }else{
    res.status(403).end();
  }
}