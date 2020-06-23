const connection = require("./db");

const Stock = function (stock) {
    this.company = stock.company;
    this.value = (stock.value).toLocaleString('en').replace(',', ' ') + ' SEK';
    this.type = stock.type;
    this.amount = stock.amount + ' St';
    this.nr = stock.reg_nr;
    this.ownership = stock.ownership + '%';
    this.votingPower = stock.voting_power + '%';
};

Stock.getUserStocks = (owner,result) => {
    const sql = `SELECT stocks.*,
    (SELECT vote_ability FROM stock_types WHERE symbol = type)*ownership AS voting_power 
    from (SELECT c.name AS company,s.value,s.type,s.amount,s.reg_nr,
    (s.value*100/(SELECT SUM(value) FROM stocks WHERE company_id=s.company_id)) As ownership
    FROM stocks AS s , companies AS c WHERE c.id = s.company_id AND s.owner='${owner}') AS stocks
    `;
    connection.query(sql, (err, res) => {
        if (err) {
            console.log("Error:", err.message);
            result(null, 'Wrong request...');
        } else {
            res = res.map((stock) => new Stock(stock));
            result(null, res);
        }
    });
};

module.exports = Stock;