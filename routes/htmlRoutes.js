const db = require("../models");
const path = require("path");
const apiRoutes = require("./apiRoutes.js");

function getCharacteristicsObj(_cb) {
  return new Promise ((resolve, reject) => {
    db.AttributeType.findAll({
      include: [{model: db.Characteristic}]
    }).then((Characteristics) => {
      let mushCharacteristics = {};
      console.log(Characteristics[0]);
      Characteristics.forEach((entry) => {
          mushCharacteristics[entry.dataValues.id] = entry.dataValues;
      });
      console.log(JSON.stringify(mushCharacteristics, null, 2));
      resolve(mushCharacteristics);
    });
  });
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
      let mushroom = { icons: Icons }
          mushroom.attributes = await getCharacteristicsObj();
          console.log(mushroom);
          res.render("guide", {
            mushroom: mushroom,
          });
      });
  });

  app.post("/guide", function(req, res) {
    console.log(req.body);

    db.Mushroom.findAll({
      include: [{
        model: db.Characteristic,
        through: {
          mushroom_characteristic: {
            where: {
              CharacteristicId: parseInt(req.body.attributes[0])
            }
          }
        }
      }]
    }).then((response) => {
      let shroomHolder = {};
      response.forEach((mushroom) => {
        name = mushroom.dataValues.commonName
        shroomHolder[name] = mushroom.dataValues;
        shroomHolder[name].tally = 0;
        let characteristicsArray = [];
        shroomHolder[name].Characteristics.forEach((characteristic) => {
          characteristicsArray.push(characteristic.dataValues.id);
        });
        req.body.attributes.forEach((characteristicToMatch) => {
          if(characteristicsArray.includes(characteristicToMatch))
          shroomHolder[name].tally++
        });
      });
      let sortedArr = []
      for(let shroom in shroomHolder) {
        let mushroom = shroomHolder[shroom];
        let unplaced = true;
        let bottom = 0;
        let top = sortedArr.length -1
        let currentPos = top/2;
        if(sortedArr.length === 0) {
          sortedArr.push(mushroom);
          unplaced = false;
        }
        else 
          while(unplaced) {
            if(sortedArr[currentPos].tally < mushroom.tally && mushroom.tally < sortedArr[currentPos + 1].tally) {
              sortedArr.splice(currentPos, 0, mushroom);
              unplaced = false;
            }
            else if(currentPos === top && mushroom.tally >= sortedArr[currentPos].tally) {
              sortedArr.push(mushroom);
              unplaced = false;
            }
            else if(currentPos === bottom && mushroom.tally <= sortedArr[currentPos].tally) {
              sortedArr.shift(mushroom);
              unplaced = false;
            }
            else if(sortedArr[currentPos].tally > mushroom.tally) {
              top = top/2;
            }
            else 
              bottom = top/2;
          }
      }
      
      res.json(sortedArr[sortedArr.length -1]);
    });
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

  // function isLoggedIn(req, res, next) {

  //   if (req.isAuthenticated())

  //     return next();

  //   res.redirect('/login');

  // }

};
