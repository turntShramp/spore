const db = require("../models");
const path = require("path");

module.exports = function(app) {
  // Load index(home) page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/login.html"));
  });
  // Load login page (default landing page)
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/login.html"));
  });
  
  // Load account page
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/user.html"));
  });

  // Load mushroom page
  app.get("/mushroom", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/mushroom.html"));
  });

  // Load map page
  app.get("/map", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/map.html"));
  });

  // Load guide page
  app.get("/guide", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/guide.html"));
  });

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
};
