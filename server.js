var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Set up Express
var app = express();

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Open Server
var PORT = process.env.PORT || 8080;

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

