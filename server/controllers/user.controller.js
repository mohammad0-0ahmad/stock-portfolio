const User = require("../models/user.model");
const utilities = require("../utilities/user.utilities");
const getUserEmailBySessionId = require("../models/sessions.modell").getUserEmail;

exports.getInfo = async (req, res) => {
  const sessionId = req.body.session
  const email = await getUserEmailBySessionId(sessionId)
  User.getUserData((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  }, email);
};


exports.deleteInfo = async (req, res) => {
  const sessionId = req.body.session
  const email = await getUserEmailBySessionId(sessionId)

  User.deleteUserData((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  }, email);
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

exports.changePassword = async (req, res) => {
  const sessionId = req.query.id
  const email = await getUserEmailBySessionId(sessionId)
  if (  req.query.newPassword1 !== req.query.newPassword2) {
    res.send('Var vänlig att se till så att du skriver ditt nya lösenord på exakt samma sätt två gånger.')
    return
  }
  if (!utilities.updateFunctions.validPassword(req.query.newPassword1)) {
    res.send('Ditt nya lösenord är inte giltigt, det måste innehålla stor bokstav, siffror och vara 8 bokstäver långt.')
    return
  }


  const emailPassword = {'email':email, 'oldPassword': req.query.oldPassword, 'newPassword': req.query.newPassword1}
  User.changePassword((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  }, emailPassword);
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