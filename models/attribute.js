module.exports = function(sequelize, DataTypes) {
    let Attribute = sequelize.define("Attribute", {
        hymenium: DataTypes.STRING,
        gill_characteristics: DataTypes.STRING,
        gill_attachment: DataTypes.STRING,
        spore_print: DataTypes.STRING,
        smell: DataTypes.STRING,
        stipe: DataTypes.STRING,
        annulus: DataTypes.STRING,
        pileus: DataTypes.STRING,
        flesh_color: DataTypes.STRING,
        fluid_color: DataTypes.STRING,
        volva: DataTypes.STRING,
        pores: DataTypes.STRING
    });

    Attribute.associate = function(models) {
        Attribute.belongsTo(models.Mushroom);
    }

    return Attribute;
}