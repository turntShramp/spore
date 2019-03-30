module.exports = function((sequelize, DataTypes) {
    const mushroom = sequelize.define("mushroom", {
        nameLatin: DataTypes.STRING,
        nameCommon: DataTypes.STRING,
        toxic: DataTypes.BOOLEAN,
        medicinal: DataTypes.BOOLEAN,
        neutral: DataTypes.BOOLEAN
    });
}