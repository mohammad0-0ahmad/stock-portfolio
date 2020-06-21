const connection = require('./db');
const isEmailExist = require('../models/user.model').isEmailAlreadyExist;
const encrypt = require("../utilities/encrypt");
const sendEmail = require('../utilities/mailer').sendResetPasswordEmail

let REQUEST_LENGTH = 30; // Minutes

const checkRequest = (requestId) => {
    const sql = `SELECT CASE WHEN EXISTS (SELECT * FROM reset_password_requests WHERE id='${requestId}' AND date > NOW()-INTERVAL ${REQUEST_LENGTH} MINUTE LIMIT 1) THEN 'true' ELSE 'false' END AS result`;
    return new Promise((resolve) => {
        connection.query(sql, (err, res) => {
            if (res[0].result === 'true') {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    })

}
const deleteRequest = (requestId) => {
    const sql = `DELETE FROM reset_password_requests WHERE id='${requestId}'`;
    connection.query(sql, (err) => {
        if (err) {
            console.log(`${requestId} has not been deleted.`);
        } else {
            console.log(`${requestId} has been deleted.`);
        }
    })
}

const getEmailByRequestId = (requestId) => {
    const sql = `SELECT user_email FROM reset_password_requests WHERE id='${requestId}' LIMIT 1`;
    return new Promise((resolve) => {
        connection.query(sql, (err, res) => {
            if (res.length) {
                resolve(res[0].user_email);
            } else {
                resolve(false);
            }
        })
    })
}

exports.makeRequest = async ({ email, host }, result) => {
    if (await isEmailExist(email)) {
        let id = await encrypt.hash(Math.floor(Date.now()) + email);
        console.log(id)
        id = await id.replace(/[\/?]/g,'');
        console.log(id)
        const sql = `INSERT INTO reset_password_requests (id,user_email) VALUES ('${id}','${email}')`
        connection.query(sql, (err) => {
            if (err) {
                console.log(err.message)
                result({ message: err.message }, null)
            } else {
                sendEmail(email, `http://${host}/reset-password/${id}`)
            }
        })
    } else {
        console.log(`${email} doesn't belong to any account.`)
    }
    // a mail will not be sent to unregistered email.
    result(null, { status: true, msg: 'Ett mejl är skickat till ditt e-postadress.\nKolla in i din e-postinkorg.' })
}

exports.isValidRequest = async (requestId, result) => {
    result({ status: await checkRequest(requestId) });
}

exports.setNewPassword = async ({ requestId, newPassword }, result) => {
    const validRequest = await checkRequest(requestId);
    if (validRequest) {
        const email = await getEmailByRequestId(requestId);
        const newHashedPassword = await encrypt.hash(newPassword);
        const sql = `UPDATE users set password='${newHashedPassword}' WHERE email='${email}'`
        connection.query(sql, (err) => {
            if (err) {
                console.log("Error", err);
                result({ message: 'Ditt lösenord har inte ändrats.' }, null);
                return;
            }
            else {
                deleteRequest(requestId)
                result(null, { status: true, msg: 'Ditt lösenord har ändrats.' });
            }
        })
    } else {
        result({ message: 'Ogiltig begäran.' }, null);
    }
}
