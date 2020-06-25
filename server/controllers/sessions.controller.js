const Sessions = require('../models/sessions.model')

exports.verifySession = (req, res) => {
    Sessions.verification(req.body.session , (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
            });
        } else {
            res.send(data);
        }
    });
}