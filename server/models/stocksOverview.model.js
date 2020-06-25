const connection = require("./db");

exports.getUserStocksOverview = (owner, result) => {
    const sql = `SELECT c.industry,GROUP_CONCAT(DISTINCT c.name SEPARATOR ',') AS companies,SUM(s.value) AS value FROM stocks AS s, companies AS c 
    WHERE s.company_id = c.id 
    AND s.owner = '${owner}'
    GROUP BY c.industry  ORDER BY s.value DESC`;
    connection.query(sql, (err, res) => {
        if (err) {
            console.log("Error:", err.message);
            result('Wrong request...', null);
        } else {
            res = reorganizeStocksOverview(res)
            result(null, res);
        }
    });
}

const reorganizeStocksOverview = (data) => {
    if (data.length) {
        const MAX_INDUSTRIES_TO_SHOW = 4;
        let result = [];
        if (data.length > MAX_INDUSTRIES_TO_SHOW) {
            for (let i = 0; i < MAX_INDUSTRIES_TO_SHOW; i++) {
                result.push(data[0])
                data.splice(0, 1);
            }
            let lastItem = {
                industry: 'Övrigt',
                companies: '',
                value: 0
            }
            let companiesArr = [];
            data.map((row) => {
                lastItem.value += row.value
                companiesArr.push(row.companies.split(','))
                return '';
            })
            lastItem.companies = companiesArr.toString();
            result.push(lastItem)
            data = result;
        }

        let userTotalBalance = 0;
        result = data.map((row) => {
            userTotalBalance += row.value;
            row.value = row.value.toLocaleString('en').replace(/,/g, ' ');
            let companiesArr = row.companies.split(',');
            if (companiesArr.length > 2) {
                row.companies = `${companiesArr[0]},${companiesArr[1]} +${companiesArr.length - 2}`
            }
            row.companies = row.companies.replace(',', ', ');
            return row;
        })

        return {
            currency: 'SEK',
            totalBalance: userTotalBalance.toLocaleString('en'),
            industries: result
        };
    } else {
        return {
            currency: 'SEK',
            totalBalance: '0',
            industries: []
        };
    }
}