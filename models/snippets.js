module.exports = function(sequelize, DataTypes) {
    var stories = sequelize.define("stories", {
        id: {
            type: DataTypes.INTEGER,
            autIncrement: true,
            primaryKey: true
        },
        storyID: {
            type: DataTypes.INTEGER
        },
        parentID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Author: {
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