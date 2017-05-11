var exports = module.exports = {};
var db = require('../models');

exports.signup = function(req, res) {
    var css = {
        stylesheet: "sign.css"
    };
    res.render('signup.handlebars', css);
};

exports.signin = function(req, res) {
    var css = {
        stylesheet: "sign.css"
    };
    res.render('signin.handlebars', css);
};

exports.swipe = function(req, res) {




    db.user.findAll({

        where: {
            id: {
                $ne: req.user.id
            }
        },
        where: {
            age: {
                $between: [req.user.age_pref_min, req.user.age_pref_max]
            }
        },
        where: {
            age_pref_min: {
                $lt: req.user.age
            }
        },
        where: {
            age_pref_max: {
                $gt: req.user.age
            }
        },
        where: {
            is_male: req.user.seeking_male
        },
        where: {
            seeking_male: req.user.is_male
        }
    }).then(function(usersToSwipeOn) {

        var hbsObject = {
            layout: 'inapp',
            stylesheet: "profile.css",
            swipeStyle: "swipe.css",
            users: usersToSwipeOn
        };
        console.log(hbsObject.users[0]);
        res.render('swipe.handlebars', hbsObject);
    });
};

exports.profile = function(req, res) {

    var obj = {
        layout: 'inapp',
        stylesheet: "profile.css",
        swipeStyle: "profile.css",
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        username: req.user.username,
        password: req.user.password,
        age: req.user.age,
        location: req.user.location,
        is_male: req.user.is_male,
        seeking_male: req.user.seeking_male,
        age_pref_min: req.user.age_pref_min,
        age_pref_max: req.user.age_pref_max
    };
    // console.log("seeking_male baby" + req.user.age_pref_max);
    res.render('profile.handlebars', obj);
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/signin');
    });
};