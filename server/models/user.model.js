const sql = require("./db");

const User = function (user) {
  this.email = user.email;
    this.f_name = user.f_name;
    this.l_name = user.l_name;
    this.p_nr = JSON.stringify(user.p_nr);
    this.address = user.address;
    this.city = user.city;
    this.postal_code = JSON.stringify(user.postal_code).substr(0,3)+ ' '+JSON.stringify(user.postal_code).substr(3,5);
    this.telephone = '0'+JSON.stringify(user.telephone).substr(0,2)+' '+JSON.stringify(user.telephone).substr(2,3)+' '+JSON.stringify(user.telephone).substr(5,5);
    this.l_update = JSON.stringify(user.l_update).substring(1,11);
    
};

User.getUserData = (result,email) => {
  const sqlas = `SELECT email, f_name, l_name, p_nr, address, city, postal_code, telephone, l_update FROM users WHERE email = '${email}'`
  sql.query(sqlas, (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    res=res.map((user) => new User(user))
    console.log("userinfo", res);

    result(null, res);

  });
};

User.deleteUserData = (result,email) => {
  const sqlas = `DELETE FROM users WHERE email = '${email}'`
  sql.query(sqlas, (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("userinfo", res);

    result(null, res);

  });
};

User.changeUserData = (result,query) => {
  const sqlas = `UPDATE users SET f_name='${query.f_name}', l_name='${query.l_name}', p_nr='${query.p_nr}', address='${query.address}', city='${query.city}', postal_code='${query.postal_code}', telephone='${query.telephone}' WHERE email = '${query.email}'`
  sql.query(sqlas, (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("userinfo", res);

    result(null, res);

  });
};


module.exports = User;