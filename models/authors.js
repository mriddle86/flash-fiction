module.exports = function(sequelize, DataTypes) {
    var authors = sequelize.define("authors", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            default: "password",
            validate: {
                len: [6]
            }
        },
    }, {
        timestamps: false
    });

    return authors;
};