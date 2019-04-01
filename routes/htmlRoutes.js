const db = require("../models");
const path = require("path");
const authController = require("../controllers/authcontroller.js")
var passport = require("passport");

module.exports = function(app) {


  app.get("/signup", authController.signup);

  app.get("/signin", authController.signin);

  app.get("/logout",authController.logout);

  // Load index(home) page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // Load login page (default landing page)
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  
  // Load account page
  app.get("/acct", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/acct.html"));
  });

  app.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/dashboard",
    failureRedirect: "/signup"
  }
  ));

  app.post("/signin", passport.authenticate("local-signin",{
    successRedirect: "/dashboard",
    failureRedirect: "/signin"
  }));

  // Load mushroom guide page
  app.get("/guide", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/guide.html"));
  });

  app.get("/dashboard", isLoggedIn, authController.dashboard);
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  // app.get("/speciesGuide/:id", function(req, res) {
  //   db.spore_devDB.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  function isLoggedIn(req,res,next){
    if (req.isAuthenticated())
    return next();
    res.redirect("/signin");
  }
};
