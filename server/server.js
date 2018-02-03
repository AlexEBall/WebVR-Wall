const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const routes = require("./routes");

// app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.use("/", routes);

const Profile = require('./models/profile');
const Test = require('./models/test');
const config = require('./config/database');
const seedDB = require('./database/seedDB');

const db = mongoose.connection;
const collections = ["profile"];

mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/webvr-wall",
);

db.on('error', function(err) {
    console.log('MongoDB connection error:', err);
});

db.once("open", function() {
    console.log("Mongoose connected to version", mongoose.version);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`🌎  ==> API server listening on PORT ${PORT}!`);
});