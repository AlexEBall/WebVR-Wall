
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const routes = require("./routes/controller.js");

// set headers prevent errors from Cross Origin Resource Sharing
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// app.set('view engine', '');
// app.set('views', path.join(__dirname, '../webvr-wall'));
// app.use(express.static(path.join(__dirname, '../webvr-wall')));
// app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use("/", routes);
require("./routes")(app);

// models required
const Profile = require('./models/profile');
const config = require('./config/database');

// get connection
const db = mongoose.connection;

const mongoDB = "mongodb://localhost/webvr-wall";
const collections = ["profile"];

mongoose.Promise = Promise;
mongoose.connect(mongoDB);
// mongoose.connect(config.url);

db.on('error', function (err) { 
	console.log('MongoDB connection error:', err);
});

db.once("open", function() {
  console.log("Mongoose connected to version", mongoose.version);
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
 console.log('running at localhost: ' + port);
});



module.exports = app;