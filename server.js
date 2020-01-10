require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

//PREFLIGHT request
const isPreflight = (req) => {
  return (
    req.method === 'OPTIONS' &&
    req.headers['origin'] &&
    req.headers['access-control-request-method']
  )
}
///////////////////

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Headers: Content-Type")
// });

/////////////////////////

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/favorites-apiroutes")(app);
require("./routes/userInfo-apiRoutes")(app);
require("./routes/htmlRoutes")(app, path);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
