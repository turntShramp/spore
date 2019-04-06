'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("Mushrooms", [
      {
        latinName: "George",
        commonName: "Cassandra",
        pronunciation: "Can't",
        content: "Yummy",
        mushroom_photo: "mushroom.jpg",
        thumbnail_photo: "smallmushroom.jpg"
      }
    ]).then((nothing) => {
      queryInterface.bulkInsert("MushroomAttribute", [
        {
          MushroomId: 1,
          AttributeId: 50
        },
        {
          MushroomId: 1,
          AttributeId: 60
        },
        {
          MushroomId: 1,
          AttributeId: 70
        },
        {
          MushroomId: 1,
          AttributeId: 10
        },
        {
          MushroomId: 1,
          AttributeId: 30
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
