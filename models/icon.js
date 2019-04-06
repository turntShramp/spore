module.exports = function(sequelize, DataTypes) {
    const Icon = sequelize.define("Icon", {
        id: {
            type: DataTypes.STRING,
            length: 30,
            primaryKey: true
        },
        fAwesomeClass: {
            type: DataTypes.STRING,
            length: 16,
        },
        description: {
            type:DataTypes.STRING,
        }
    });

    Icon.associate = function(models) {
        Icon.belongsToMany(models.Mushroom, {
            through: "Mushroom_Icon"
        });
    }

    return Icon;
}