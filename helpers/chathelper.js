var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var exports = module.exports = {}

exports.chatindex = function(req, res) {
    res.render('chat.handlebars', {
        layout: "inapp",
        stylesheet: "profile.css",
        swipeStyle: "profile.css"
    });
}

exports.login = function(req, res) {

    // var session = passport.session();
    // console.log(session);

    //Trying code to replace jQuery updates with Chat model and Chat/Message persistance.
    // socket.emit("new user", $nickBox.val(), function(data) {
    //      if (data) {
    //          $("#nickWrap").hide();
    //          $("#contentwrap").show();
    //      } else {
    //          $nickError.html("That username is already taken! Try again.");
    //      }
    //  });
    console.log("test login: " + req.body.nickname);
    console.log("Current logged in user" + req.user);
}