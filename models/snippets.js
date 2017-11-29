module.exports = function(sequelize, DataTypes) {
    var snippets = sequelize.define("snippets", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        parentID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Author: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        authorID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 500]
            }
        },
        upVotes: {
            type: DataTypes.STRING,
            default: 0
        },
        downVotes: {
            type: DataTypes.INTEGER,
            default: 0
        }
    });

    return Authors;
};