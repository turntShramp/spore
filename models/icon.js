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
        },
    }, {timestamps: false});

    Icon.associate = function(models) {
        Icon.belongsToMany(models.Mushroom, {
            through: "mushroom_icon"
        });
    }

    return Icon;
}