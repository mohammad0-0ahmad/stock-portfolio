const connection = require("./db");

const Preferred_Industry = function (industry) {
    this.industry = industry.industry_name;
    this.value = industry.user_email;
};

Preferred_Industry.getIndustries = (result,email) => {
    const sql = `SELECT i.name, 
    case WHEN EXISTS (SELECT * FROM prefferd_industries WHERE user_email = '${email}' AND industry_name = i.name LIMIT 1) 
    THEN 'true' ELSE 'false' END AS preffered 
    from industries AS i`
    connection.query(sql, (err, res) => {
        if (err) {
            console.log("Error:", err.message);
            result(null, 'Wrong request...');
        } else {
            console.log("industries:", res);
            result(null, res);
        }
    });
};
module.exports = Preferred_Industry;
