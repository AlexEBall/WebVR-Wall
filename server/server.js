
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require("mongoose");

// prevent errors from Cross Origin Resource Sharing,
// set headers allowing CORS with middleware
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const routes = require("./routes/controller.js");
app.use("/", routes);
require("./routes")(app);

// get connection
var db = mongoose.connection;

const databaseUri = "mongodb://localhost/webvr-wall";
const collections = ["profile"];

// models required
const Profile = require('./models/profile');

/// bind connection to error event
db.on('error', function (err) { 
	console.log('MongoDB connection error:', err);
});

// log success once in mongoose
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

console.log("created new database: ", databaseUri)
console.log("connected to mongoose version", mongoose.version);


app.get('*', (req, res) => {
  var testHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
  res.sendFile(testHtmlPath);
})

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("App running port 3000!");
});

module.exports = app;