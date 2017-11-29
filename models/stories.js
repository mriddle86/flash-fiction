module.exports = function(sequelize, DataTypes) {
    var stories = sequelize.define("stories", {
        title: {
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
        snippet: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        authorID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
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