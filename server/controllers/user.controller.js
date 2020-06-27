const User = require("../models/user.model").User;
const utilities = require("../utilities/dataValidation");
const getUserEmailBySessionId = require("../models/sessions.model").getUserEmail;

exports.getInfo = async (req, res) => {
  const sessionId = req.body.session
  const email = await getUserEmailBySessionId(sessionId)
  if (email) {
    User.getUserData(email, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
    return;
  }
  res.status(400).end();
};

exports.deleteInfo = async (req, res) => {
  const sessionId = req.body.session
  const email = await getUserEmailBySessionId(sessionId)
  if (email) {
    User.deleteUserData(email, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
  } else {
    res.status(400).end();
  }
};

exports.changeInfo = async (req, res) => {
  const sessionId = req.body.session
  const email = await getUserEmailBySessionId(sessionId)
  const newData = req.body
  newData.oldEmail = email
  newData.postalCode = newData.postalCode.split(" ").join("")
  newData.phone = newData.phone.split(" ").join("")
  const validUserData = utilities.userChangeDataValidation(newData);

  if (validUserData.isValid) {
    User.changeUserData(newData, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
  }
  else {
    res.send({
      status: validUserData.isValid,
      msg: Object.values(validUserData.msg).toString().replace(/,/g, '\n')

    })
  }

}

exports.newAccount = (req, res) => {
  const validUserData = utilities.userRegisterationValidation(req.body);
  if (req.body && validUserData.isValid) {
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
      status: validUserData.isValid,
      msg: Object.values(validUserData.msg).toString().replace(/,/g, '\n')
    });
  }
}

exports.changePassword = async (req, res) => {
  const sessionId = req.body.session
  const email = await getUserEmailBySessionId(sessionId)
  const { password, newPassword1, newPassword2 } = req.body
  if (!password || !newPassword1 || !newPassword1) {
    res.send({ status: false, msg: 'De tre inputfälten måste fyllas för att kunna byta ditt lösenord!' })
    return;
  }
  if (newPassword1 !== newPassword2) {
    res.send({ status: false, msg: 'Var vänlig att se till så att du skriver ditt nya lösenord på exakt samma sätt två gånger.' })
    return;
  }
  if (!utilities.isValidPassword(newPassword1)) {
    res.send({ status: false, msg: 'Ditt nya lösenord är inte giltigt, det måste innehålla stor bokstav, siffror och vara 8 bokstäver långt.' })
    return;
  }
  const emailAndPasswords = { 'email': email, 'oldPassword': password, 'newPassword': newPassword1 }
  User.changePassword(emailAndPasswords, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};

exports.uploadImg = async (req, res) => {
  const email = req.body.session ? await getUserEmailBySessionId(req.body.session) : false;
  const img = req.files.img;
  if (email && img) {
    User.changeImg({ img, email }, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    })
  } else {
    res.status(403).end();
  }
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
  const email = req.body.session ? await getUserEmailBySessionId(req.body.session) : false
  if (email) {
    User.retrieveImg(email, (err, data) => {
      if (err) {
        res.status(204).send({
          message: err.message,
        });
      } else {
        res.writeHead(200, { 'Content-Disposition': `inline;filename=${data.name}` }).end(data.img);
      }
    })
  } else {
    res.status(403).end();
  }
}