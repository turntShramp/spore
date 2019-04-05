module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        name: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        username: {
            type: DataTypes.TEXT
        },
 
        about: {
            type: DataTypes.TEXT
        },
 
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
 
        last_login: {
            type: DataTypes.DATE
        },
 
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });

    User.associate = function(models) {
        User.belongsToMany(models.Mushroom, {
            through: models.Finding
            }
        );
    }

    return User;
}