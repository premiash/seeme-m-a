var db = require("../models");


module.exports = function(app) {

    app.get("/api/match", function(req, res) {
        // searches all users
        db.User.findAll({
            // filters out any user with the same user ID
            // not equal
            where: {
                id: {
                    $ne: req.user.id
                }
            },
            // filters out any user that has an age preference outside the controlling users age 
            where: {
                age: {
                    $between: [req.user.age_pref_min, req.user.age_pref_max]
                }
            },
            // filters out any user that is younger than the controlling users minimum age preference
            where: {
                age_pref_min: {
                    $lt: req.user.age
                }
            },
            // filters out any user that is older than the controlling users maximum age preference
            where: {
                age_pref_max: {
                    $gt: req.user.age
                }
            },
            // filters out any user that is not seeking someone of the controlling user's gender
            where: {
                is_male: req.user.seeking_male
            },
            // filters out any user that is not the gender the controlling user is seeking
            where: {
                seeking_male: req.user.is_male
            },
            // sends filtered DB results as a json object to geoMatch.js for final location filtering
            //before sending to front end

        }).then(function(matches) {
            res.json(matches);
        });
    });
};