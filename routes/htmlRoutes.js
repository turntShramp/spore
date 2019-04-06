const db = require("../models");
const path = require("path");
const apiRoutes = require("./apiRoutes.js");

function getAttributesObj(_cb) {
  return new Promise ((resolve, reject) => {
    db.AttributeType.findAll({
      include: [{model: db.Attribute}]
    }).then((Attributes) => {
      let mushAttributes = {};
      console.log(Attributes[0]);
      Attributes.forEach((entry) => {
          mushAttributes[entry.dataValues.id] = entry.dataValues;
      });
      console.log(JSON.stringify(mushAttributes, null, 2));
      resolve(mushAttributes);
    });
  });
}

module.exports = function(app, passport) {
  // Load index(home) page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/login.html"));
  });
  // Load login page (default landing page)
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/login.html"));
  });
  
  // Load account page
  app.get("/user", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/user.html"));
  });

  // Load mushroom page
  app.get("/mushroom", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/mushroom.html"));
  });

  // Load map page
  app.get("/map", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/map.html"));
  });

  // Load guide page
  app.get("/guide", function(req, res) {
    db.Icon.findAll({}).then(async (Icons) => {
      let mushroom = { icons: Icons }
          mushroom.attributes = await getAttributesObj();
          console.log(mushroom);
          res.render("guide", {
            mushroom: mushroom,
          });
      });
  });

  app.post("/guide", function(req, res) {
    console.log(req.body);
    res.send("Thank you");

    db.Attributes.findAll({
      include: [{
        model: Mushroom,
        through: {
          attributes: [id],
          where: {AttributeId: req.body[0]}
        }
      }]
    }).then((response) => console.log(response));
  })

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

  function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

      return next();

    res.redirect('/login');

  }

};
