module.exports = function(sequelize, DataTypes) {
    let AttributeType = sequelize.define("AttributeType", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        subTitle: {
            type: DataTypes.STRING
        }
    });

    AttributeType.associate = function(models) {
        AttributeType.hasMany(models.Attribute);
    }
    return AttributeType;
}