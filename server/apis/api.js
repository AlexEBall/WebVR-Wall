/*
exports.index = function(req, res) {
    res.send("<p></p>");
};*/

//adding the /profiles route to /api router
router.route(‘/profiles)

//retrieve all profiles from db
.get(function(req, res) {

Profile.find(function(err, comments) {
	if (err)
		res.send(err);
		res.json(profile)
	});
})

//post new profile to the db
.post(function(req, res) {

var profile = new Profile();
	profile.author = req.body.author;
	profile.text = req.body.text;
	profile.save(function(err) {

	if (err)
		res.send(err);
		res.json({ message: ‘Profile successfully added!’ });
	});
});
