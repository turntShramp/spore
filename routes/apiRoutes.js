var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
<<<<<<< HEAD
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
=======
  app.post("/api/admin", function(req, res) {
    const postMushroom = req.body;
    let newMushroom = {
      latinName: postMushroom.latinName,
      commonName: postMushroom.commonName,
      pronunciation: postMushroom.pronunciation,
      content: postMushroom.content,
      mushroom_photo: postMushroom.mushroom_photo,
      thumbnail_photo: postMushroom.thumbnail_photo
    }
    db.Mushroom.create(newMushroom).then(function(mushroom) {
      mushroom.addAllIcon
>>>>>>> master
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
