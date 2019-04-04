require("dotenv").config();
let env = require('dotenv').load();
let express = require("express");
let exphbs = require("express-handlebars");
let db = require("./models");
let app = express();
let passport = require('passport');
let session = require('express-session');
let SequelizeStore = require("connect-session-sequelize")(session.Store);
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);

const sporeStore = new SequelizeStore({ db: db.sequelize })

// Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(express.static("public"));
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// For Passport
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized:true, store: sporeStore })); // session secret
app.use(passport.initialize());
app.use(passport.session({ secret: 'keyboard cat', resave: false, saveUninitialized:true, store: sporeStore })); // persistent login sessions

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

sporeStore.sync();
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
