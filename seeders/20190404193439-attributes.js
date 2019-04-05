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
      return queryInterface.bulkInsert('Attribute', [
        {
        description: "gills (fan like)",
        type: "hymenium"
        },
        {
        description: "false gills (wrinkles of veins)",
        type: "hymenium"
        },
        {
        description: "teeth (spines, spikes, etc.)",
        type: "hymenium"
        },
        {
        description: "sponge/pores",
        type: "hymenium"
        },
        {
        description: "not applicable",
        type: "hymenium"
        },
        {
        description: "ink-like (when mature)",
        type: "gillCharacteristics"
        },
        {
        description: "watery (droplets)",
        type: "gillCharacteristics"
        },
        {
        description: "noticeably apart (distance between gills)",
        type: "gillCharacteristics"
        },
        {
        description: "split lengthwise",
        type: "gillCharacteristics"
        },
        {
        description: "reduced (wrinkles or veins)",
        type: "gillCharacteristics"
        },
        {
        description: "forked (dichotomoically)",
        type: "gillCharacteristics"
        },
        {
        description: "surface spotted",
        type: "gillCharacteristics"
        },
        {
        description: "serrated edge",
        type: "gillCharacteristics"
        },
        {
        description: "noticeably close (distance between gills)",
        type: "gillCharacteristics"
        },
        {
        description: "attached, not clearly decurrent",
        type: "gillAttachment"
        },
        {
        description: "free without collar",
        type: "gillAttachment"
        },
        {
        description: "clearly decurrent",
        type: "gillAttachment"
        },
        {
        description: "free, joined by collar",
        type: "gillAttachment"
        },
        {
        description: "brown",
        type: "spore print"
        },
        {
        description: "black",
        type: "spore print"
        },
        {
        description: "ocher",
        type: "spore print"
        },
        {
        description: "burnt orange",
        type: "spore print"
        },
        {
        description: "red",
        type: "spore print"
        },
        {
        description: "orange",
        type: "spore print"
        },
        {
        description: "tan",
        type: "spore print"
        },
        {
        description: "gray",
        type: "spore print"
        },
        {
        description: "off white",
        type: "spore print"
        },
        {
        description: "white",
        type: "spore print"
        },
        {
        description: "pink",
        type: "spore print"
        },
        {
        description: "yellow",
        type: "spore print"
        },
        {
        description: "purple",
        type: "spore print"
        },
        {
        description: "blue",
        type: "spore print"
        },
        {
        description: "cedar",
        type: "smell"
        },
        {
        description: "maple",
        type: "smell"
        },
        {
        description: "fruity",
        type: "smell"
        },
        {
        description: "mettalic, pungent",
        type: "smell"
        },
        {
        description: "earthy",
        type: "smell"
        },
        {
        description: "none",
        type: "smell"
        },
        {
        description: "iodine",
        type: "smell"
        },
        {
        description: "mouldy",
        type: "smell"
        },
        {
        description: "acetylene gas",
        type: "smell"
        },
        {
        description: "barn dust",
        type: "smell"
        },
        {
        description: "bitter almond",
        type: "smell"
        },
        {
        description: "blossoms obtrusive",
        type: "smell"
        },
        {
        description: "blossoms pleasant",
        type: "smell"
        },
        {
        description: "carbolic",
        type: "smell"
        },
        {
        description: "carrion, feces",
        type: "smell"
        },
        {
        description: "cocoa",
        type: "smell"
        },
        {
        description: "epilentin acid",
        type: "smell"
        },
        {
        description: "flour",
        type: "smell"
        },
        {
        description: "garlic",
        type: "smell"
        },
        {
        description: "cucumber",
        type: "smell"
        },
        {
        description: "musk",
        type: "smell"
        },
        {
        description: "radish",
        type: "smell"
        },
        {
        description: "soap",
        type: "smell"
        },
        {
        description: "spicy, aromatic",
        type: "smell"
        },
        {
        description: "greasy, slimy",
        type: "stipe"
        },
        {
        description: "guttation droplets",
        type: "stipe"
        },
        {
        description: "rough, scapy",
        type: "stipe"
        },
        {
        description: "veil remains",
        type: "stipe"
        },
        {
        description: "frosted",
        type: "stipe"
        },
        {
        description: "flakey",
        type: "stipe"
        },
        {
        description: "rooting",
        type: "stipe"
        },
        {
        description: "woolly",
        type: "stipe"
        },
        {
        description: "bulbous base or clavate",
        type: "stipe"
        },
        {
        description: "eccentric",
        type: "stipe"
        },
        {
        description: "furrows, groves",
        type: "stipe"
        },
        {
        description: "velvety",
        type: "stipe"
        },
        {
        description: "snake-like pattern",
        type: "stipe"
        },
        {
        description: "hollow",
        type: "stipe"
        },
        {
        description: "without ring",
        type: "annulus"
        },
        {
        description: "descending, hanging veil",
        type: "annulus"
        },
        {
        description: "ascending, funnel-like",
        type: "annulus"
        },
        {
        description: "creased lenthwise",
        type: "annulus"
        },
        {
        description: "loose with age",
        type: "annulus"
        },
        {
        description: "firm",
        type: "annulus"
        },
        {
        description: "multiple",
        type: "annulus"
        },
        {
        description: "honeycomb pattern",
        type: "pileus"
        },
        {
        description: "guttation droplets",
        type: "pileus"
        },
        {
        description: "funnel-like indentation",
        type: "pileus"
        },
        {
        description: "velvety to toetulose",
        type: "pileus"
        },
        {
        description: "papillae in middle of cap",
        type: "pileus"
        },
        {
        description: "concentrically zoned",
        type: "pileus"
        },
        {
        description: "saddle-shaped or lobed",
        type: "pileus"
        },
        {
        description: "serrated margin",
        type: "pileus"
        },
        {
        description: "fine-grained surface",
        type: "pileus"
        },
        {
        description: "honeycomb pattern",
        type: "pileus"
        },
        {
        description: "velum remains",
        type: "pileus"
        },
        {
        description: "broadly humped",
        type: "pileus"
        },
        {
        description: "nipple-like",
        type: "pileus"
        },
        {
        description: "frosted",
        type: "pileus"
        },
        {
        description: "brain-like",
        type: "pileus"
        },
        {
        description: "shaggy",
        type: "pileus"
        },
        {
        description: "scaly",
        type: "pileus"
        },
        {
        description: "greasy, slimy",
        type: "pileus"
        },
        {
        description: "hygrophanous, moist and multicolored",
        type: "pileus"
        },
        {
        description: "ink-like",
        type: "pileus"
        },
        {
        description: "radial folds",
        type: "pileus"
        },
        {
        description: "reds",
        type: "fleshColor"
        },
        {
        description: "tans",
        type: "fleshColor"
        },
        {
        description: "grays",
        type: "fleshColor"
        },
        {
        description: "yellows",
        type: "fleshColor"
        },
        {
        description: "oranges",
        type: "fleshColor"
        },
        {
        description: "browns",
        type: "fleshColor"
        },
        {
        description: "blacks",
        type: "fleshColor"
        },
        {
        description: "blues",
        type: "fleshColor"
        },
        {
        description: "purples",
        type: "fleshColor"
        },
        {
        description: "greens",
        type: "fleshColor"
        },
        {
        description: "whites",
        type: "fleshColor"
        },
        {
        description: "pinks",
        type: "fleshColor"
        },
        {
        description: "white, whitish",
        type: "fluidColor"
        },
        {
        description: "white, then reddening",
        type: "fluidColor"
        },
        {
        description: "white, then graying",
        type: "fluidColor"
        },
        {
        description: "white, then gray-greening",
        type: "fluidColor"
        },
        {
        description: "red",
        type: "fluidColor"
        },
        {
        description: "black, to gray",
        type: "fluidColor"
        },
        {
        description: "colorless, clear",
        type: "fluidColor"
        },
        {
        description: "white, then yellowing",
        type: "fluidColor"
        },
        {
        description: "wart wreaths",
        type: "volva"
        },
        {
        description: "skin remains",
        type: "volva"
        },
        {
        description: "torus",
        type: "volva"
        },
        {
        description: "club like",
        type: "volva"
        },
        {
        description: "square, rhombic",
        type: "pore"
        },
        {
        description: "elongated",
        type: "pore"
        },
        {
        description: "round, very fine",
        type: "pore"
        },
        {
        description: "labyrinthine",
        type: "pore"
        },
        {
        description: "round, visible without magnifying glass",
        type: "pore"
        },
        {
        description: "watery",
        type: "pore"
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
