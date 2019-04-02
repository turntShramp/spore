module.exports = function(sequelize, DataTypes) {
    let Mushroom = sequelize.define("Mushroom", {
        latinName: DataTypes.STRING,
        commonName: DataTypes.STRING,
        pronunciation: DataTypes.STRING,
        content: DataTypes.TEXT,
    });

    Mushroom.associate = function(models) {
        Mushroom.belongsToMany(models.User, {
            through: models.Finding
        });
    }
    return Mushroom
}