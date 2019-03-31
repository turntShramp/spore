module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Finding", {
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING
    });
}