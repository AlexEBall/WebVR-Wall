const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const api = require('../apis/api');
const Profile = require("../models/profile");

// this is my /api route example from export.index on api.js in /server/api
router.get('/', function(req, res){
  res.json(api.index);
  // res.render('index');
});


// test object to send to db 
var data = {
  userID: "1",
  storyInterview: "This is a brief story of my life and how I got here",
  city: "Los Angeles",
  state: "CA",
  country: "USA",
  socialMedia: "http://instagram/mj",
  profileImage: "profileimage.jpg",
  VR3660Image: "VR360image.jpg",
  category: "scientist"
};

router.get("/test", function(req, res) {
// Save a new data using the data object
 Profile.create(data)
  .then(function(test) {
    // If saved successfully, print the new test document to the console
    console.log(test);
    res.json(test);
  })
  .catch(function(err) {
    // If an error occurs, log the error message
    console.log(err.message);
  });
});

// route for retrieving all profiles from the db
router.get("/main", function(req, res) {
  // find all profiles
  Profile
    .find({})
    .then(function(dbProfiles) {
      // If all Users are successfully found, send them back to the client
      res.json(dbProfiles);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// route for retrieving all profiles from the db
router.get("/category", function(req, res) {
  // find all profiles
  Profile
    .find({
    	category: 'scientist'
    })
    .then(function(dbProfiles) {
      // If all Users are successfully found, send them back to the client
      res.json(dbProfiles);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});


// Route for saving a new profile to db
router.post("/new", function(req, res) {
  // Create a new profile in the db
  Profile
    .create(req.body)
    .then(function(dbNewProfile) {
      // If the User was updated successfully, send it back to the client
      res.json(dbNewProfile);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});



/*  other way to try mongoose CRUD 

// GET ALL
router.get('/', function(req, res, next) {
  db.Profile.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

// GET SINGLE BY ID 
router.get('/:id', function(req, res, next) {
  db.Profile.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// SAVE 
router.post('/', function(req, res, next) {
 db.Profile.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// UPDATE 
router.put('/:id', function(req, res, next) {
 db.Profile.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// DELETE 
router.delete('/:id', function(req, res, next) {
 db.Profile.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
*/



module.exports = router;