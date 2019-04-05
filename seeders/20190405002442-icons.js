'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Icon', [
        {
          id: "bacon",
          fAwesomeClass: "fas fa-bacon",
          description: "Delicious"
        },
        {
          id: "carrot",
          fAwesomeClass: "fas fa-carrot",
          description: "Edible as is"
        },
        {
          id: "utensils",
          fAwesomeClass: "fas fa-utensils",
          description: "Edible with preparation"
        },
        {
          id: "tp",
          fAwesomeClass: "fas fa-toilet-paper",
          description: "Causes gastrointestinal problems"
        },
        {
          id: "caution",
          fAwesomeClass: "fas fa-exclamation-triangle",
          description: "Caution, can cause serious illness"
        },
        {
          id: "danger",
          fAwesomeClass: "fas fa-exclamation-triangle",
          description: "Danger, can cause serious illness or death"
        },
        {
          id: "unknown",
          fAwesomeClass: "fas fa-question",
          description: "Unknown"
        },
        {
          id: "bottle",
          fAwesomeClass: "fas fa-prescription-bottle-alt",
          description: "Medicinal as is"
        },
        {
          id: "mortar",
          fAwesomeClass: "fas fa-mortar-pestle",
          description: "Medicinal with preparation"
        },
        {
          id: "summer",
          fAwesomeClass: "fas fa-sun",
          description: "Summer months"
        },
        {
          id: "winter",
          fAwesomeClass: "fas fa-snowflake",
          description: "Winter months"
        },
        {
          id: "spring",
          fAwesomeClass: "fas fa-seedling",
          description: "Spring months"
        },
        {
          id: "fall",
          fAwesomeClass: "fas fa-canadian-maple-leaf",
          description: "Fall months"
        },
        {
          id: "cloud",
          fAwesomeClass: "fas fa-cloud-rain",
          description: "Prefers moist conditions"
        },
        {
          id: "tree",
          fAwesomeClass: "fas fa-tree",
          description: "Prefers coniferous forests"
        },
        {
          id: "branch",
          fAwesomeClass: "fas fa-pagelines",
          description: "Prefers deciduous forests"
        },
      ])
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
