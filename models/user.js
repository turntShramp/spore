module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
    });

    User.associate = function(models) {
        User.belongsToMany(models.Mushroom, {
            through: models.Finding
            }
        );
    }

    return User;
}