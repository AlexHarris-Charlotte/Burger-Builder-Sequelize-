const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models");

const port = 8080;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// need to require routes
const apiRoutes = require("./routes/apiRoutes.js");

app.use(apiRoutes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`);
  });
});
