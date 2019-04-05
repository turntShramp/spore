module.exports = function(sequelize, DataTypes) {
    let Attribute = sequelize.define("Attribute", {
        description: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        }
    });

    Attribute.associate = function(models) {
        Attribute.belongsToMany(models.Mushroom, {
            through: "Mushroom_Attribute"
        });
    }

    return Attribute;
}

// hymenium: DataTypes.STRING,
//         gill_characteristics: DataTypes.STRING,
//         gill_attachment: DataTypes.STRING,
//         spore_print: DataTypes.STRING,
//         smell: DataTypes.STRING,
//         stipe: DataTypes.STRING,
//         annulus: DataTypes.STRING,
//         pileus: DataTypes.STRING,
//         flesh_color: DataTypes.STRING,
//         fluid_color: DataTypes.STRING,
//         volva: DataTypes.STRING,
//         pores: DataTypes.STRING