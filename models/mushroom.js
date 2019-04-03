module.exports = function(sequelize, DataTypes) {
    let Mushroom = sequelize.define("Mushroom", {
        latinName: DataTypes.STRING,
        commonName: DataTypes.STRING,
        pronunciation: DataTypes.STRING,
        content: DataTypes.TEXT,
        mushroom_photo: DataTypes.STRING,
        thumbnail_photo: DataTypes.STRING,
        dateFound: DataTypes.STRING,
        gpsCoordinates: DataTypes.STRING
    });

    Mushroom.associate = function(models) {
        Mushroom.belongsToMany(models.User, {
            through: models.Finding
        });
    }
    return Mushroom
}