var exports = module.exports = { }

exports.chatindex = function(req, res) {
	res.render('chat.handlebars', {
		testdata: "Hello1"
	});
}

exports.login = function(req, res) {
	//Trying code to replace jQuery updates with Chat model and Chat/Message persistance.
	console.log("test login: " + req.body.nickname); 
	//console.log(io);
}
