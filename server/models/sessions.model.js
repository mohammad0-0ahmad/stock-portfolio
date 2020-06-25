const connection = require("./db");
const encrypt = require("../utilities/encrypt")
const SESSION_LENGTH = 24; // hours
const SESSION_END_TIME = Date.now() - 3600 * SESSION_LENGTH * 1000;

exports.createSession = (email) => {
    return new Promise(async (resolve) => {
        const session = {
            id: await encrypt.hash(Math.floor(Date.now()) + email),
            user_email: email
        }
        const sql = 'INSERT INTO sessions SET ?';
        connection.query(sql, session, (err) => {
            if (err) {
                console.log(err.message)
                resolve(false);
            } else {
                resolve(session.id);
            }
        })
    })
}

exports.verification = (sessionId, result) => {
    const sql = `SELECT start_time FROM sessions where id='${sessionId}' LIMIT 1`
    connection.query(sql, (err, res) => {
        if (!err) {
            if (res.length) {
                if (res[0].start_time > SESSION_END_TIME) {
                    this.updateSessionStartTime(sessionId)
                    result(null, { status: true })
                    return;
                }
            }
        }
        result(null, { status: false })
    })
}

exports.updateSessionStartTime = (sessionId) => {
    connection.query(`UPDATE sessions SET start_time=now() WHERE id='${sessionId}'`);
}

exports.getUserEmail = (sessionId) => {
    return new Promise((resolve) => {
        connection.query(`SELECT user_email from sessions where id='${sessionId}' LIMIT 1`, (err, res) => {
            if (res.length) {
                resolve(res[0].user_email)
                return;
            }
            resolve(false)
        })
    })
}