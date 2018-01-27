const express = require('express');
const router  = express.Router();

// setup mongoose connection
const databaseUri = "mongodb://localhost/webvr-wall";
const collections = ["profiles"];

const mongoose = require("mongoose");
const db = mongoose.connection;
const Profile = require("../models/profile.js");

/*
// adding /profiles  to /api  or /routes
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
*/

const main_api = require('../apis/main_api');

router.get('/', main_api.index);

module.exports = router;