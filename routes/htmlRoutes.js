const db = require("../models");
const path = require("path");
const apiRoutes = require("./apiRoutes.js");

function getCharacteristicsObj(_cb) {
  return new Promise ((resolve, reject) => {
    db.AttributeType.findAll({
      include: [{model: db.Characteristic}]
    }).then((Characteristics) => {
      let mushCharacteristics = {};
      Characteristics.forEach((entry) => {
          mushCharacteristics[entry.dataValues.id] = entry.dataValues;
      });
      resolve(mushCharacteristics);
    });
  });
}

function getMatchedShroom(shroomsObj) {
  let bestMatches;
  for(key in shroomsObj) {
    if(bestMatches === undefined)
      bestMatches = [shroomsObj[key]];
    else if(bestMatches[0].tally.length < shroomsObj[key].tally.length)
      bestMatches = [shroomsObj[key]];
    else if(bestMatches[0].tally.length === shroomsObj[key].tally.length)
      bestMatches.push(shroomsObj[key]);
  }
  return bestMatches;
}

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
    db.Icon.findAll({}).then(async (Icons) => {
      let elements = { icons: Icons }
          elements.attributes = await getCharacteristicsObj();
          res.render("guide", {
            mushroom: elements,
          });
      });
    });
    
    app.post("/guide", function(req, res) {
    console.log(req.body);
    
    db.Characteristic.findAll({
      where: {
        id: req.body.attributes
      },
      include: [
        {
          model: db.Mushroom,
          include: [
            {model: db.Characteristic}
          ]
        }
      ]
        // include: [{
          //   model: db.Characteristic
          // }]
        }).then((response) => {
          let shroomTally = {};
          response.forEach((queryPoint) => {
            queryPoint.Mushrooms.forEach((mushroom) => {
              if(!shroomTally[mushroom.commonName]) {
                shroomTally[mushroom.commonName] = {};
                shroomTally[mushroom.commonName].mushroom = mushroom;
                shroomTally[mushroom.commonName].tally = [queryPoint];
                shroomTally[mushroom.commonName].characteristicNotPresent = [];
                console.log("shrooms object: " + JSON.stringify(shroomTally, null, 2));
              }
              else
                shroomTally[mushroom.commonName].tally.push(queryPoint);
            });
          });
          

          let matched = getMatchedShroom(shroomTally);
          matched.forEach((shroom) => {
            response.forEach((characteristic) => {
              if(!shroom.tally.includes(characteristic))
              shroom.characteristicNotPresent.push(characteristic);
            });
          });
      
      res.json(matched);

    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  // function isLoggedIn(req, res, next) {

  //   if (req.isAuthenticated())

  //     return next();

  //   res.redirect('/login');

  // }

};
