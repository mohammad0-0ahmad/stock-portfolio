const sql = require("./db");

const User = function (user) {
  (this.email = user.email),
    (this.password = user.password),
    (this.f_name = user.f_name),
    (this.l_name = user.l_name),
    (this.p_nr = user.p_nr),
    (this.address = user.address),
    (this.city = user.city),
    (this.postal_code = user.postal_code),
    (this.telephone = user.telephone),
    (this.img = user.img),
    (this.l_update = user.l_update);
    
};

User.getAll = (result) => {
  sql.query("SELECT * FROM users", (err, res) => {
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