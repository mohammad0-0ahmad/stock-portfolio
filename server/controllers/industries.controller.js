const Preferred_Industries = require("../models/industries.model");

exports.getIndustries = (req, res) => {
  if (req.query.owner) {
    Preferred_Industries.getIndustries((err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    }, req.query.owner);
  } else {
    res.status(400).send("");
  }
};
