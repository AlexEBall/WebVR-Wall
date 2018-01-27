const express = require('express');
const router  = express.Router();

// setup mongoose connection
const databaseUri = "mongodb://localhost/webvr-wall";
const collections = ["profiles"];

const mongoose = require("mongoose");
const db = mongoose.connection;
const Profile = require("../models/profiles.js");

/*if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}*/

const main_api = require('../apis/main_api');

router.get('/', main_api.index);

module.exports = router;