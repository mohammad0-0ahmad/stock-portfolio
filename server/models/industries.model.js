const connection = require("./db");

const Preferred_Industry = function (industry) {
  this.industry = industry.industry_name;
  this.value = industry.user_email;
};

Preferred_Industry.getIndustries = (result, email) => {
  const sql = `SELECT i.name, 
    case WHEN EXISTS (SELECT * FROM preferred_industries WHERE user_email = '${email}' AND industry_name = i.name LIMIT 1) 
    THEN 'true' ELSE 'false' END AS preffered 
    from industries AS i`;
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("Error:", err.message);
      result(null, "Wrong request...");
    } else {
      console.log("industries:", res);
      result(null, res);
    }
  });
};

Preferred_Industry.getChange = (result, { email, industries }) => {
  let preferredIndustries = industries.filter(
    (industry) => industry.preffered === true
  );
  preferredIndustries = preferredIndustries.map((industry) => [
    email,
    industry.name,
  ]);

  const sql = `DELETE FROM preferred_industries WHERE user_email='${email}'`;
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("Error:", err.message);
      result(null, "Wrong request...");
    } else {
      if (preferredIndustries.length) {
        const sql = `INSERT INTO preferred_industries VALUES ?`;
        connection.query(sql, [preferredIndustries], (err, res) => {
          if (err) {
            console.log("Error:", err.message);
            result(null, "Wrong request...");
          } else {
            result(null, "Done");
          }
        });
      }else{
        result(null, "Done");
      }
    }
  });
};
module.exports = Preferred_Industry;
