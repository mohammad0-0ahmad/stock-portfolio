const connection = require("./db");
const encrypt = require("../utilities/encrypt")
const utilities = require("../utilities/user.utilities")
const fs = require("fs");
const Sessions = require('./sessions.modell')



const USERS_IMGS_PATH = './fileSystem/files/usersImgs/';

const isEmailAlreadyExist = (email) => {
  const sql = `SELECT CASE WHEN EXISTS (SELECT * FROM users WHERE email='${email}' LIMIT 1) THEN 'true' ELSE 'false' END AS result`;
  return new Promise((resolve) => {
    connection.query(sql, (err, res) => {
      if (res[0].result === 'true') {
        resolve(true);
      }
      resolve(false);
    })
  })
}
const isPersonalNumberAlreadyExist = (personalNumber) => {
  const sql = `SELECT CASE WHEN EXISTS (SELECT * FROM users WHERE p_nr='${personalNumber}' LIMIT 1) THEN 'true' ELSE 'false' END AS result`;
  return new Promise((resolve) => {
    connection.query(sql, (err, res) => {
      if (res[0].result === 'true') {
        resolve(true);
      }
      resolve(false);
    })
  })
}

const User = function (user) {
  this.email = user.email;
  this.f_name = user.f_name;
  this.l_name = user.l_name;
  this.p_nr = JSON.stringify(user.p_nr);
  this.address = user.address;
  this.city = user.city;
  this.postal_code = JSON.stringify(user.postal_code).substr(0, 3) + ' ' + JSON.stringify(user.postal_code).substr(3, 5);
  this.telephone = '0' + JSON.stringify(user.telephone).substr(0, 2) + ' ' + JSON.stringify(user.telephone).substr(2, 3) + ' ' + JSON.stringify(user.telephone).substr(5, 5);
  this.l_update = JSON.stringify(user.l_update).substring(1, 11);

};

User.getUserData = (result, email) => {
  const sql = `SELECT email, f_name, l_name, p_nr, address, city, postal_code, telephone, l_update FROM users WHERE email = '${email}'`
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    res = res.map((user) => new User(user))

    result(null, res);

  });
};

User.deleteUserData = (result, email) => {
  const sql = `DELETE FROM users WHERE email = '${email}'`
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    else {
      console.log("userinfo", res);
      fs.rmdirSync(USERS_IMGS_PATH + email, { recursive: true });


    };
  })
}

User.changeUserData = async (result, newData) => {
  let sql = `SELECT p_nr from users WHERE email = '${newData.oldEmail}'`;
  connection.query(sql, async (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    else {
      let currentPersonalNumber = res[0].p_nr
      let newPersonalNumber = false;
      currentPersonalNumber != newData.personNumber ? newPersonalNumber = true : newPersonalNumber = false
      let readyToUpdatePersonalNumber = true;
      if (newPersonalNumber) {
        readyToUpdatePersonalNumber = ! await isPersonalNumberAlreadyExist(newData.personNumber)
      }

      let newEmail = false;
      let readyToUpdateEmail = true;

      newData.oldEmail !== newData.email ? newEmail = true : newEmail = false
      if (newEmail) {
        readyToUpdateEmail = ! await isEmailAlreadyExist(newData.email)
      }
      if (readyToUpdateEmail && readyToUpdatePersonalNumber) {
        const sql = `UPDATE users SET f_name='${newData.firstName}', l_name='${newData.lastName}',
     p_nr='${newData.personNumber}', address='${newData.address}', city='${newData.city}',
       postal_code='${newData.zipCode}', telephone='${newData.phone}', email='${newData.email}' WHERE email = '${newData.oldEmail}'`
        connection.query(sql, (err, res) => {
          if (err) {
            console.log("Error", err);
            result(null, err);
            return;
          }
          else {
            result(null, res);
          }

        })
      }
    }
  })
}

User.addNewUser = async (userData, result) => {
  const { email, password, f_name, l_name, p_nr, address, city, postal_code, telephone } = userData;
  const availbleEmail = ! await isEmailAlreadyExist(email);
  const availblePersonalNumber = ! await isPersonalNumberAlreadyExist(p_nr);
  if (availbleEmail && availblePersonalNumber) {
    const newUser = {
      email,
      password: await encrypt.hash(password),
      f_name,
      l_name,
      p_nr: parseInt(p_nr),
      address,
      city,
      postal_code: parseInt(postal_code),
      telephone: parseInt(telephone)
    }
    const sql = 'INSERT INTO users SET ?';
    connection.query(sql, newUser, (err, res) => {
      if (err) {
        console.log("Error", err);
        result(null, err);
      } else {
        console.log("userinfo", res);
        result(null, { status: true, msg: 'Ditt konto har skapats.' });
      }
    });
  } else {
    result(null, { status: false, msg: `E-post | personnummer är redan kopplad med ett konto.` })
  }
}

User.changePassword = async (result, emailPassword) => {
  let sql = `SELECT password from users WHERE email='${emailPassword.email}'`
  connection.query(sql, async (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    else {
      const passwordMatching = await encrypt.compare(emailPassword.oldPassword, res[0].password)

      if (passwordMatching) {
        const newHashedPassword = await encrypt.hash(emailPassword.newPassword)
        sql = `UPDATE  users set password='${newHashedPassword}' WHERE email='${emailPassword.email}'`
        connection.query(sql, async (err, res) => {
          if (err) {
            console.log("Error", err);
            result(null, err);
            return;
          }
          else {
            result(null, { status: true, msg: 'Ditt lösenord har ändrats.' });
          }
        })
      }
      else {
        result(null, { status: true, msg: 'Ditt gamla lösenord stämde inte.' });
      }

    }
  });
}

User.changeImg = async (img, email, result) => {
  fs.mkdirSync(USERS_IMGS_PATH + email, { recursive: true })
  img.mv(`${USERS_IMGS_PATH + email}/img.${img.name.split('.').pop()}`, (err) => {
    if (err) {
      result(null, { status: false, msg: 'Det gick inte att byta profilbild.' })
    } else {
      result(null, { status: true, msg: 'Din profilbild har bytts.' })
    }
  })
}

User.login = ({ email, password }, result) => {
  const sql = `SELECT email,password FROM users where email='${email}' LIMIT 1`
  connection.query(sql, async (err, res) => {
    if (err) {
      console.log(err)
      result(err, null);
    } else {
      if (res.length) {
        const correctPassword = await encrypt.compare(password, res[0].password);
        const session = await Sessions.createSession(email);
        if (correctPassword && session) {
          result(null, { status: true, session });
          return;
        }
      }
      result(null, { status: false, msg: 'Felaktiga inloggningsuppgifter.' });
    }
  })
}

User.retrieveImg = (email, result) => {
  try {
    var img = fs.readFileSync(`${USERS_IMGS_PATH + email}/img.png`);
    result(null, img)
  } catch (err) {
    result({ message: 'Not found' }, null)
  }
}
module.exports = { User, isEmailAlreadyExist };
