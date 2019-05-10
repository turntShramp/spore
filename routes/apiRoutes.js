const db = require("../models");
const fs = require("fs");
const s3 = require("../aws/s3");
const multer = require("multer");

const upload = multer({ dest: 'uploads/'})

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

    console.log(postMushroom.mushPhoto);

    let newMushroom = {
      latinName: postMushroom.latinName,
      commonName: postMushroom.commonName,
      pronunciation: postMushroom.pronunciation,
      content: postMushroom.content,
      mushroom_photo: postMushroom.mushPhoto,
      thumbnail_photo: postMushroom.mushThumb,
      identity: postMushroom.commonName.split(' ').join('').toLowerCase()
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

  app.post("/api/storePhoto", upload.single('photo'), (req, res, next) => {

    console.log(req.file.path);

    fs.readFile(req.file.path, (err, data) => {
      const params = {
        Body: data,
        Bucket: "spore-bucket",
        Key: "images/" + req.body.path + "/" + req.body.name
      }
    
      s3.upload(params, (err, data) => {
        fs.unlink(req.file.path, err => console.error(err));

        if(err) console.log(err, err.stack);
        else res.send(data);
      });
    });

  });
  
};
