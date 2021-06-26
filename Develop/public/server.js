// calls express
const express = require('express');

// sets up the express server in node
const app = express();

// sets an initial variable port and a default (8080)
const PORT = process.env.PORT || 8080;

// set express to handle parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router points to the route files and tells the server how to respond

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// listener starts the server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
