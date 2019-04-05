var db = require("../models");

module.exports = function (app, passport) {
  // Get all examples
  app.get("/api/examples", isLoggedIn, function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/admin", isLoggedIn, function (req, res) {
    const postMushroom = req.body;
    let newMushroom = {
      latinName: postMushroom.latinName,
      commonName: postMushroom.commonName,
      pronunciation: postMushroom.pronunciation,
      content: postMushroom.content,
      mushroom_photo: postMushroom.mushroom_photo,
      thumbnail_photo: postMushroom.thumbnail_photo
    }
    db.Mushroom.create(newMushroom).then(function (mushroom) {
      mushroom.addAllIcon
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", isLoggedIn, function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/user',

    failureRedirect: '/login'
  }

  ));

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/user',

    failureRedirect: '/login'
}

));

  app.get("/logout", function (req, res) {
    req.session.destroy(function (err) {

      res.redirect('/');

    });
  })

  function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

      return next();

    res.redirect('/login');

  }

};
