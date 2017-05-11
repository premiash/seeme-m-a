module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('user', {

        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },

        firstname: { type: Sequelize.STRING, notEmpty: true },

        lastname: { type: Sequelize.STRING, notEmpty: true },

        username: { type: Sequelize.TEXT },

        age: { type: Sequelize.TEXT },

        age_pref_min: { type: Sequelize.INTEGER },

        age_pref_max: { type: Sequelize.INTEGER },

        location: { type: Sequelize.STRING },

        is_male: { type: Sequelize.BOOLEAN },

        seeking_male: { type: Sequelize.BOOLEAN },

        email: { type: Sequelize.STRING, validate: { isEmail: true } },

        password: { type: Sequelize.STRING, allowNull: false },

        last_login: { type: Sequelize.DATE },

        status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' }
    });
    return User;
}