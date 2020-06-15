const sql = require("./db");

const User = function (user) {
  this.email = user.email;
    this.password = user.password;
    this.f_name = user.f_name;
    this.l_name = user.l_name;
    this.p_nr = JSON.stringify(user.p_nr);
    this.address = user.address;
    this.city = user.city;
    this.postal_code = JSON.stringify(user.postal_code).substr(0,3)+ ' '+JSON.stringify(user.postal_code).substr(3,5);
    this.telephone = '0'+JSON.stringify(user.telephone).substr(0,2)+' '+JSON.stringify(user.telephone).substr(2,3)+' '+JSON.stringify(user.telephone).substr(5,5);
    this.img = user.img;
    this.l_update = JSON.stringify(user.l_update).substring(1,11);
    
};

User.getPersonalInfoFromDatabase = (result) => {
  sql.query("SELECT * FROM users", (err, res) => {
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


module.exports = User;