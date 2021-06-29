// calls express
const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
// sets up the express server in node
const app = express();

// sets an initial variable port and a default (8080)
const PORT = process.env.PORT || 8080;

// set express to handle parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// router points to the route files and tells the server how to respond
// is require okay or should these be app.use?
require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// listener starts the server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
