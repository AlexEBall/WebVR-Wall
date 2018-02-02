
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const routes = require("./routes/api");

// app.set('view engine', '');
// app.set('views', path.join(__dirname, '../webvr-wall'));
// app.use(express.static(path.join(__dirname, '../webvr-wall')));
// app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static("client/build"));

// add routes for api and views
app.use("/", routes);

const Profile = require('./models/profile');
const config = require('./config/database');

const db = mongoose.connection;
// const mongoDB = "mongodb://MJOAN:Management1!@ds117758.mlab.com:17758/webvr-wall" || "mongodb://localhost/webvr-wall";
const collections = ["profile"];

var Promise = require("bluebird");
mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/webvr-wall",
);

db.on('error', function (err) { 
	console.log('MongoDB connection error:', err);
});

db.once("open", function() {
  console.log("Mongoose connected to version", mongoose.version);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`🌎  ==> API server listening on PORT ${PORT}!`);
});
