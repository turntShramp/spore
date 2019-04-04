module.exports = function(sequelize, DataTypes) {
    const Icon = sequelize.define("Icon", {
        name: {
            type: DataTypes.STRING,
            length: 30
        }
    });

    Icon.associate = function(models) {
        Icon.belongsToMany(models.Mushroom, {
            through: "Mushroom_Icon"
        });
    }

    return Icon;
}