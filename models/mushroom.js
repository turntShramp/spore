module.exports = function(sequelize, DataTypes) {
    let Mushroom = sequelize.define("Mushroom", {
        nameLatin: DataTypes.STRING,
        nameCommon: DataTypes.STRING,
        toxic: DataTypes.BOOLEAN,
        medicinal: DataTypes.BOOLEAN,
        neutral: DataTypes.BOOLEAN
    });

    Mushroom.associate = function(models) {
        Mushroom.belongsToMany(models.User, {
            through: models.Finding
        });
    }
    return Mushroom
}