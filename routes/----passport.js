// var LocalStrategy = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// var db = require("../models");

// // load the auth variables
// var configAuth = require('../config/passport/auth');

// module.exports = function(passport) {

//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//     });

//     passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user) {
//             done(err, user);
//         });
//     });

//     // =========================================================================
//     // FACEBOOK ================================================================
//     // =========================================================================
//     passport.use(new FacebookStrategy({

//             // pull in our app id and secret from our auth.js file
//             clientID: configAuth.facebookAuth.clientID,
//             clientSecret: configAuth.facebookAuth.clientSecret,
//             callbackURL: configAuth.facebookAuth.callbackURL,
//             profileFields: ['id', 'name', 'displayName', 'email', 'hometown']
//         },

//         // facebook will send back the token and profile
//         function(accesstoken, tokenSecret, profile, done) {
//             process.nextTick(function() {
//                 // Could be an existing user or a new user
//                 // profile.username is used as the username
//                 // console.log(accesstoken);
//                 db.Users.findOrCreate({
//                     where: {
//                         id: profile.id,
//                         token: accesstoken,
//                         display_name: profile.name.givenName,
//                         email: profile.emails[0].value,
//                         first_name: profile.name.givenName,
//                         last_name: profile.name.familyName
//                     }
//                 }).spread(function(user) {
//                     return done(null, user);
//                 });
//             });
//         }));
// };