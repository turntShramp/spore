'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("Mushrooms", [
      {
        "identity": "blacktrumpet", 
        "latinName":"craterellus cornucopioides", 
        "commonName":"black trumpet", 
        "pronunciation":"/blak, ?tr?mp?t/", 
        "content":"a fragrant, dark brown or black, edible mushroom that is related to the chanterelle, is found especially in temperate forests of the northern hemisphere, and has a hollow, trumpet or funnel-shaped fruiting body, related to chanterelles, black trumpets are hollow and drier.", 
        "mushroom_photo":"", 
        "thumbnail_photo":""
      },
      {
        "identity": "chanterelle",
        "latinName":"cantharellus cibarius", 
        "commonName":"chanterelle", 
        "pronunciation":"/SH\u00e4n(t)e'rel/", 
        "content":"an edible woodland mushroom with a yellow funnel-shape cap and a faint smell of apricots, found in both Eurasia and North America.", 
        "mushroom_photo":"", 
        "thumbnail_photo":""
      },
      {
        "identity": "lionsmane", 
        "latinName":"hericium erinaceus", 
        "commonName":"lion's mane", 
        "pronunciation":"//?l??n's m?n/", 
        "content":"a white, globe-shaped fungi that have long, shaggy spines. People can eat them or take them in the form of supplements. Research suggests that they may offer a range of health benefits, including reduced inflammation and improved cognitive and heart health.", 
        "mushroom_photo":"", 
        "thumbnail_photo":""
      }]).then((nothing) => {
      return queryInterface.bulkInsert("mushroom_characteristic", [
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00", 
          "CharacteristicId":5, 
          "MushroomId":1
        },
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00", 
          "CharacteristicId":5, 
          "MushroomId":2
        },
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00", 
          "CharacteristicId":10, 
          "MushroomId":1
        },
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00", 
          "CharacteristicId":10, 
          "MushroomId":2
        },
      {"createdAt":"0000-00-00 00:00:00", "updatedAt":"0000-00-00 00:00:00", "CharacteristicId":10, "MushroomId":3},
      {"createdAt":"0000-00-00 00:00:00", "updatedAt":"0000-00-00 00:00:00", "CharacteristicId":35, "MushroomId":2}])
    }).then((nothing) => { 
      return queryInterface.bulkInsert("mushroom_icon", [
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00",
          "IconId": "bacon",
          "MushroomId": 3
        },
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00",
          "IconId": "bacon",
          "MushroomId": 1
        },
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00",
          "IconId": "bottle",
          "MushroomId": 1
        },
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00",
          "IconId": "branch",
          "MushroomId": 1
        },
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00",
          "IconId": "carrot",
          "MushroomId": 1
        },
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00",
          "IconId": "cloud",
          "MushroomId": 1
        },
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00",
          "IconId": "carrot",
          "MushroomId": 2
        },
        {
          "createdAt":"0000-00-00 00:00:00", 
          "updatedAt":"0000-00-00 00:00:00",
          "IconId": "cloud",
          "MushroomId": 2
        },
      ])
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
