module.exports = function(sequelize, DataTypes) {
    var Matches = sequelize.define("Matches", {
        UID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        LID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mutual: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    });
    return Matches;
};