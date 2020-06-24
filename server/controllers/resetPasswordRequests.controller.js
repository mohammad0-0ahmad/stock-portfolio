const model = require('../models/resetPasswordRequests.model')
const isValidEmail = require('../utilities/user.utilities').isValidEmail;
const utilities = require("../utilities/user.utilities");

exports.createRequest = (req, res) => {
    const email = req.body.email;
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    if (email && isValidEmail(email)) {
        model.makeRequest({ email, host }, (err, data) => {
            if (err) {
                console.log(err.message)
                res.status(500).end();
            } else {
                res.send(data);
            }
        })
    } else {
        res.status(400).send({status:false,msg:'Felaktig e-post adress.'});
    }
}

exports.checkRequest = (req, res) => {
    const requestId = req.body.request;
    if (requestId) {
        model.isValidRequest(requestId, (data) => {
            res.send(data);
        })
    }
}

exports.changePassword = async (req, res) => {
    const requestId = req.body.request
    const newPassword = req.body.newPassword
    if (req.body.newPassword !== req.body.newPasswordConfirmation) {
        res.send({ status: false, msg: 'Var vänlig att se till så att du skriver ditt nya lösenord på exakt samma sätt två gånger.' })
        return
    }
    if (!utilities.updateFunctions.validPassword(newPassword)) {
        res.send({ status: false, msg: 'Ditt nya lösenord är ogiltigt, det måste innehålla stor bokstav, siffror och vara 8 bokstäver långt.' })
        return
    }
    model.setNewPassword({ requestId, newPassword }, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
            });
        } else {
            res.send(data);
        }
    });
};