var db = require("../models");
const path = require("path");

function createMembersArr(idArr, modelName) {
  let modelMembers = [];

  idArr.forEach((memberId) => {
    db[modelName].findOne({where: {id: memberId}})
      .then((member) => modelMembers.push(member));
  });
  return modelMembers;
}

function getAttributesObj(_cb) {
  return new Promise ((resolve, reject) => {
    db.Characteristic.findAll().then((Attributes) => {
      let mushAttributes = {};
      Attributes.forEach((entry) => {
        if(!mushAttributes[entry.AttributeTypeId])
          mushAttributes[entry.AttributeTypeId] = [];
        mushAttributes[entry.AttributeTypeId].push(entry);
      });
      resolve(mushAttributes);
    });
  });
}

module.exports = function (app) {

    // Load admin page
  app.get("/api/admin", function(req, res) {
    db.Icon.findAll({}).then(async (Icons) => {
      let mushroom = { icons: Icons }
          mushroom.attributes = await getAttributesObj();
          res.render("admin", {
            mushroom: mushroom,
          });
      });
  });

  // Create a new mushroom
  app.post("/api/admin", function(req, res) {

    const postMushroom = req.body.mushroom;

    let newMushroom = {
      latinName: postMushroom.latinName,
      commonName: postMushroom.commonName,
      pronunciation: postMushroom.pronunciation,
      content: postMushroom.content,
      mushroom_photo: postMushroom.mushroom_photo,
      // thumbnail_photo: postMushroom.thumbnail_photo
    }

    // let iconsArr = createMembersArr(postMushroom.icons, "Icon");
    // let attributesArr = createMembersArr(postMushroom.attributes, "Attribute")
    let iconsArr = [];
    let attributesArr = [];

    console.log(postMushroom);

    postMushroom.attributes.forEach((attribute) => {
      if(attribute.includes("icon"))
        iconsArr.push(attribute.slice(4));
      else {
        console.log(attribute);
        attributesArr.push(parseInt(attribute));
      }
    });
    // add new mushroom to database
    console.log(db.Mushroom.prototype);
    db.Mushroom.create(newMushroom).then(async function(mushroom) {
      //add association with icons
      let mushroomAttributes = await mushroom.setCharacteristics(attributesArr);
      let mushroomIcons = await mushroom.setIcons(iconsArr);
      console.log(attributesArr);
      res.json({
        mushroom: mushroom,
        icons: mushroomIcons,
        attributes: mushroomAttributes,
       });
    });
  });

  app.get("/api/admin")

  // Delete an example by id
//   app.delete("/api/examples/:id", isLoggedIn, function (req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
//       res.json(dbExample);
//     });
//   });

//   app.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/user',

//     failureRedirect: '/login'
//   }

//   ));

//   app.post('/signin', passport.authenticate('local-signin', {
//     successRedirect: '/user',

//     failureRedirect: '/login'
// }

// ));

//   app.get("/logout", function (req, res) {
//     req.session.destroy(function (err) {

//       res.redirect('/');

//     });
//   })

//   function isLoggedIn(req, res, next) {

//     if (req.isAuthenticated())

//       return next();

//     res.redirect('/login');

//   }

};
