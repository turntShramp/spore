'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("AttributeTypes",[
      {
        id: "hymenium",
        title: "Hymenium",
        subTitle: "gill type..."
      },
      {
        id: "gillCharacteristics",
        title: "Gill Characteristics",
        subTitle: "if present..."
      },
      {
        id: "gillAttachment",
        title: "Gill Attachment",
        subTitle: "if present"
      },
      {
        id: "sporePrint",
        title: "Spore Print",
        subTitle: "white, brown..."
      },
      {
        id: "smell",
        title: "Smell",
        subTitle: "apricot, aniseed..."
      },
      {
        id: "stipe",
        title: "Stipe",
        subTitle: "stem characteristics..."
      },
      {
        id: "annulus",
        title: "Annulus",
        subTitle: "veil/ring characteristics"
      },
      {
        id: "pileus",
        title: "Pileus",
        subTitle: "cap characteristics"
      },
      {
        id: "fleshColor",
        title: "Flesh Color",
        subTitle: "bluing, blackening, etc..."
      },
      {
        id: "fluidColor",
        title: "Fluid Color",
        subTitle: "white, red, etc..."
      },
      {
        id: "volva",
        title: "Volva",
        subTitle: "stem bulb charateristics..."
      },
      {
        id: "pore",
        title: "Pore",
        subTitle: "elongated, watery, etc..."
      }
    ]).then((hymenium) => {
        return queryInterface.bulkInsert("Attributes", [
          {
            description: "gills (fan like)",
            AttributeTypeId: "hymenium"
            },
            {
            description: "false gills (wrinkles of veins)",
            AttributeTypeId: "hymenium"
            },
            {
            description: "teeth (spines, spikes, etc.)",
            AttributeTypeId: "hymenium"
            },
            {
            description: "sponge/pores",
            AttributeTypeId: "hymenium"
            },
            {
            description: "not applicable",
            AttributeTypeId: "hymenium"
            },
            {
              description: "ink-like (when mature)",
              AttributeTypeId: "gillCharacteristics"
              },
              {
              description: "watery (droplets)",
              AttributeTypeId: "gillCharacteristics"
              },
              {
              description: "noticeably apart (distance between gills)",
              AttributeTypeId: "gillCharacteristics"
              },
              {
              description: "split lengthwise",
              AttributeTypeId: "gillCharacteristics"
              },
              {
              description: "reduced (wrinkles or veins)",
              AttributeTypeId: "gillCharacteristics"
              },
              {
              description: "forked (dichotomoically)",
              AttributeTypeId: "gillCharacteristics"
              },
              {
              description: "surface spotted",
              AttributeTypeId: "gillCharacteristics"
              },
              {
              description: "serrated edge",
              AttributeTypeId: "gillCharacteristics"
              },
              {
              description: "noticeably close (distance between gills)",
              AttributeTypeId: "gillCharacteristics"
              },
              {
              description: "attached, not clearly decurrent",
              AttributeTypeId: "gillAttachment"
              },
              {
              description: "free without collar",
              AttributeTypeId: "gillAttachment"
              },
              {
              description: "clearly decurrent",
              AttributeTypeId: "gillAttachment"
              },
              {
              description: "free, joined by collar",
              AttributeTypeId: "gillAttachment"
              },
              {
              description: "brown",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "black",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "ocher",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "burnt orange",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "red",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "orange",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "tan",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "gray",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "off white",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "white",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "pink",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "yellow",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "purple",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "blue",
              AttributeTypeId: "sporePrint"
              },
              {
              description: "cedar",
              AttributeTypeId: "smell"
              },
              {
              description: "maple",
              AttributeTypeId: "smell"
              },
              {
              description: "fruity",
              AttributeTypeId: "smell"
              },
              {
              description: "mettalic, pungent",
              AttributeTypeId: "smell"
              },
              {
              description: "earthy",
              AttributeTypeId: "smell"
              },
              {
              description: "none",
              AttributeTypeId: "smell"
              },
              {
              description: "iodine",
              AttributeTypeId: "smell"
              },
              {
              description: "mouldy",
              AttributeTypeId: "smell"
              },
              {
              description: "acetylene gas",
              AttributeTypeId: "smell"
              },
              {
              description: "barn dust",
              AttributeTypeId: "smell"
              },
              {
              description: "bitter almond",
              AttributeTypeId: "smell"
              },
              {
              description: "blossoms obtrusive",
              AttributeTypeId: "smell"
              },
              {
              description: "blossoms pleasant",
              AttributeTypeId: "smell"
              },
              {
              description: "carbolic",
              AttributeTypeId: "smell"
              },
              {
              description: "carrion, feces",
              AttributeTypeId: "smell"
              },
              {
              description: "cocoa",
              AttributeTypeId: "smell"
              },
              {
              description: "epilentin acid",
              AttributeTypeId: "smell"
              },
              {
              description: "flour",
              AttributeTypeId: "smell"
              },
              {
              description: "garlic",
              AttributeTypeId: "smell"
              },
              {
              description: "cucumber",
              AttributeTypeId: "smell"
              },
              {
              description: "musk",
              AttributeTypeId: "smell"
              },
              {
              description: "radish",
              AttributeTypeId: "smell"
              },
              {
              description: "soap",
              AttributeTypeId: "smell"
              },
              {
              description: "spicy, aromatic",
              AttributeTypeId: "smell"
              },
              {
              description: "greasy, slimy",
              AttributeTypeId: "stipe"
              },
              {
              description: "guttation droplets",
              AttributeTypeId: "stipe"
              },
              {
              description: "rough, scapy",
              AttributeTypeId: "stipe"
              },
              {
              description: "veil remains",
              AttributeTypeId: "stipe"
              },
              {
              description: "frosted",
              AttributeTypeId: "stipe"
              },
              {
              description: "flakey",
              AttributeTypeId: "stipe"
              },
              {
              description: "rooting",
              AttributeTypeId: "stipe"
              },
              {
              description: "woolly",
              AttributeTypeId: "stipe"
              },
              {
              description: "bulbous base or clavate",
              AttributeTypeId: "stipe"
              },
              {
              description: "eccentric",
              AttributeTypeId: "stipe"
              },
              {
              description: "furrows, groves",
              AttributeTypeId: "stipe"
              },
              {
              description: "velvety",
              AttributeTypeId: "stipe"
              },
              {
              description: "snake-like pattern",
              AttributeTypeId: "stipe"
              },
              {
              description: "hollow",
              AttributeTypeId: "stipe"
              },
              {
              description: "without ring",
              AttributeTypeId: "annulus"
              },
              {
              description: "descending, hanging veil",
              AttributeTypeId: "annulus"
              },
              {
              description: "ascending, funnel-like",
              AttributeTypeId: "annulus"
              },
              {
              description: "creased lenthwise",
              AttributeTypeId: "annulus"
              },
              {
              description: "loose with age",
              AttributeTypeId: "annulus"
              },
              {
              description: "firm",
              AttributeTypeId: "annulus"
              },
              {
              description: "multiple",
              AttributeTypeId: "annulus"
              },
              {
              description: "honeycomb pattern",
              AttributeTypeId: "pileus"
              },
              {
              description: "guttation droplets",
              AttributeTypeId: "pileus"
              },
              {
              description: "funnel-like indentation",
              AttributeTypeId: "pileus"
              },
              {
              description: "velvety to toetulose",
              AttributeTypeId: "pileus"
              },
              {
              description: "papillae in middle of cap",
              AttributeTypeId: "pileus"
              },
              {
              description: "concentrically zoned",
              AttributeTypeId: "pileus"
              },
              {
              description: "saddle-shaped or lobed",
              AttributeTypeId: "pileus"
              },
              {
              description: "serrated margin",
              AttributeTypeId: "pileus"
              },
              {
              description: "fine-grained surface",
              AttributeTypeId: "pileus"
              },
              {
              description: "honeycomb pattern",
              AttributeTypeId: "pileus"
              },
              {
              description: "velum remains",
              AttributeTypeId: "pileus"
              },
              {
              description: "broadly humped",
              AttributeTypeId: "pileus"
              },
              {
              description: "nipple-like",
              AttributeTypeId: "pileus"
              },
              {
              description: "frosted",
              AttributeTypeId: "pileus"
              },
              {
              description: "brain-like",
              AttributeTypeId: "pileus"
              },
              {
              description: "shaggy",
              AttributeTypeId: "pileus"
              },
              {
              description: "scaly",
              AttributeTypeId: "pileus"
              },
              {
              description: "greasy, slimy",
              AttributeTypeId: "pileus"
              },
              {
              description: "hygrophanous, moist and multicolored",
              AttributeTypeId: "pileus"
              },
              {
              description: "ink-like",
              AttributeTypeId: "pileus"
              },
              {
              description: "radial folds",
              AttributeTypeId: "pileus"
              },
              {
              description: "reds",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "tans",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "grays",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "yellows",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "oranges",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "browns",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "blacks",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "blues",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "purples",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "greens",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "whites",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "pinks",
              AttributeTypeId: "fleshColor"
              },
              {
              description: "white, whitish",
              AttributeTypeId: "fluidColor"
              },
              {
              description: "white, then reddening",
              AttributeTypeId: "fluidColor"
              },
              {
              description: "white, then graying",
              AttributeTypeId: "fluidColor"
              },
              {
              description: "white, then gray-greening",
              AttributeTypeId: "fluidColor"
              },
              {
              description: "red",
              AttributeTypeId: "fluidColor"
              },
              {
              description: "black, to gray",
              AttributeTypeId: "fluidColor"
              },
              {
              description: "colorless, clear",
              AttributeTypeId: "fluidColor"
              },
              {
              description: "white, then yellowing",
              AttributeTypeId: "fluidColor"
              },
              {
              description: "wart wreaths",
              AttributeTypeId: "volva"
              },
              {
              description: "skin remains",
              AttributeTypeId: "volva"
              },
              {
              description: "torus",
              AttributeTypeId: "volva"
              },
              {
              description: "club like",
              AttributeTypeId: "volva"
              },
              {
              description: "square, rhombic",
              AttributeTypeId: "pore"
              },
              {
              description: "elongated",
              AttributeTypeId: "pore"
              },
              {
              description: "round, very fine",
              AttributeTypeId: "pore"
              },
              {
              description: "labyrinthine",
              AttributeTypeId: "pore"
              },
              {
              description: "round, visible without magnifying glass",
              AttributeTypeId: "pore"
              },
              {
              description: "watery",
              AttributeTypeId: "pore"
              }
        ]);
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
