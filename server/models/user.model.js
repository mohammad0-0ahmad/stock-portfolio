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
  const sql = `DELETE FROM users WHERE email = '${ email }'`
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    else {
      console.log("userinfo", res);
      fs.rmdirSync(USERS_IMGS_PATH +  email , { recursive: true });


    };
  })
}
User.changeUserData = async (result, query) => {
  const currentEmail = 'magnus2@gmail.com'
  let currentPersonalNumber;
  let newPersonalNumber;
  let validPersonalNumber;
  let readyToChangePersonalNumber = true;
  let newEmail;
  let validMail;
  let readyToChangeEmail = true;

  let sql = `SELECT p_nr from users WHERE email = '${currentEmail}'`
  connection.query(sql, async (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    else {
      currentPersonalNumber = res[0].p_nr

      currentPersonalNumber != query.p_nr ? newPersonalNumber = true : newPersonalNumber = false
      if (newPersonalNumber) {
        validPersonalNumber = utilities.updateFunctions.validPersonalNumber(query.p_nr)

        if (validPersonalNumber) {
          readyToChangePersonalNumber = ! await isPersonalNumberAlreadyExist(query.p_nr)
        }
        else {
          readyToChangePersonalNumber = false
        }
      }

      currentEmail !== query.email ? newEmail = true : newEmail = false
      if (newEmail) {
        validMail = utilities.updateFunctions.validEmail(query.email)

        if (validMail) {
          readyToChangeEmail = ! await isEmailAlreadyExist(query.email)
        }
        else {
          readyToChangeEmail = false
        }
      }
      const validPostalCode = utilities.updateFunctions.validPostalCode(query.postal_code)
      const validTelephone = utilities.updateFunctions.validTelephone(query.telephone)

      if (readyToChangePersonalNumber && readyToChangeEmail && validPostalCode && validTelephone) {
        sql = `UPDATE users SET f_name='${query.f_name}', l_name='${query.l_name}',
     p_nr='${query.p_nr}', address='${query.address}', city='${query.city}',
       postal_code='${query.postal_code}', telephone='${query.telephone}', email='${query.email}' WHERE email = '${currentEmail}'`
        connection.query(sql, (err, res) => {
          if (err) {
            console.log("Error", err);
            result(null, err);
            return;
          }

          result(null, res);

        });
      }
      else {

        result(null, {
          status: false, msg: `Något är fel. Det kan vara personnumret eller mailet som är upptaget.
        Det kan också vara så att du angett fel postnummer eller telefonnummer. Kontrollera all data igen!` })
      }
    }
  });


};

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
