module.exports = (app) => {
    const industries = require("../controllers/industries.controller");
    app.get("/industries", industries.getIndustries);
  };
  