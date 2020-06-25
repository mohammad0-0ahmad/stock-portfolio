const connection = require("./db");

const PreferredIndustry = {}

PreferredIndustry.getIndustries = (email, result) => {
  const sql = `SELECT i.name, 
    case WHEN EXISTS (SELECT * FROM preferred_industries WHERE user_email = '${email}' AND industry_name = i.name LIMIT 1) 
    THEN 'true' ELSE 'false' END AS preferred 
    from industries AS i`;
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("Error:", err.message);
      result(null, "Wrong request...");
    } else {
      res = res.map((row) => {
        row.preferred = row.preferred === "true" ? true : false;
        return row;
      });
      result(null, res);
    }
  });
};

PreferredIndustry.change = ({ email, industries }, result) => {
  let preferredIndustries = industries.filter(
    (industry) => industry.preferred === true
  );
  preferredIndustries = preferredIndustries.map((industry) => [
    email,
    industry.name,
  ]);

  const sql = `DELETE FROM preferred_industries WHERE user_email='${email}'`;
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("Error:", err.message);
      result("Wrong request...", null);
    } else {
      if (preferredIndustries.length) {
        const sql = `INSERT INTO preferred_industries VALUES ?`;
        connection.query(sql, [preferredIndustries], (err, res) => {
          if (err) {
            console.log("Error:", err.message);
            result("Wrong request...", err);
            return;
          }
        });
      }
      result(null, {
        status: true,
        msg: "Det gick bra med att byta dina föredragna industrier.",
      });
    }
  });
};

module.exports = PreferredIndustry;