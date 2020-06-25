const industries = require("../models/industries.model");
const getUserEmailBySessionId = require("../models/sessions.model").getUserEmail;

exports.getIndustries = async (req, res) => {
  const sessionId = req.body.session;
  const email = await getUserEmailBySessionId(sessionId);
  if (email) {
    industries.getIndustries(email, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
  } else {
    res.status(400).send("");
  }
};

exports.changePreferredIndustry = async (req, res) => {
  const sessionId = req.body.session;
  const industries = req.body.industries
  const email = await getUserEmailBySessionId(sessionId);
  if (email) {
    industries.change({ email, industries }, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
  }
}