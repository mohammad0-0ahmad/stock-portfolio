const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3030;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./server/routes/industries.routes")(app);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});