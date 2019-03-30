module.exports = function(sequelize, DataTypes) {
    const Finding = sequelize.define("Finding", {
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING
    });

    Finding.associate(models.User, {
        foreignKey: {
            allowNull: false
        }
    });

    Finding.associate(models.Mushroom, {
        foreignKey: {
            allowNull: false
        }
    });

    return Finding;
}