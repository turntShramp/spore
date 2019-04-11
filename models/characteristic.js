module.exports = function(sequelize, DataTypes) {
    let Characteristic = sequelize.define("Characteristic", {
        description: {
            type: DataTypes.STRING
        }
    }, {timestamps: false});

    Characteristic.associate = function(models) {
        Characteristic.belongsToMany(models.Mushroom, {
            through: "mushroom_characteristic"
        });
    }

    return Characteristic;
}

// hymenium: DataTypes.STRING,
//         gill_characteristic: DataTypes.STRING,
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