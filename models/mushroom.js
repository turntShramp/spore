module.exports = function(sequelize, DataTypes) {
    let Mushroom = sequelize.define("Mushroom", {
        latinName: DataTypes.STRING,
        commonName: DataTypes.STRING,
        pronunciation: DataTypes.STRING,
        content: DataTypes.TEXT,
        mushroom_photo: DataTypes.STRING,
        thumbnail_photo: DataTypes.STRING,
    }, {timestamps: false});

    Mushroom.associate = function(models) {
        Mushroom.belongsToMany(models.User, {
            through: models.Finding,
        });

        Mushroom.belongsToMany(models.Icon, {
            through: "mushroom_icon"
        });

        Mushroom.belongsToMany(models.Characteristic, {
            through: "mushroom_characteristic"
        });
    }
    return Mushroom
}