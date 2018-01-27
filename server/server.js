const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
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

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const routes = require("./routes/routes.js");
app.use("/", routes);
require('./routes')(app);

// models required
require("./models/profiles.js");

// get connection
var db = mongoose.connection;

/*if (process.env.MONGODB_URI) {
	console.log('remote')
	mongoose.connect(process.env.MONGODB_URI);
} else {
	console.log('remote')
	mongoose.connect(databaseUri);
}*/

const databaseUri = "mongodb://localhost/webvr-wall";
const collections = ["profiles"];

/// bind connection to error event
db.on('error', function (err) { 
	console.log('MongoDB connection error:', err);
});

// log success once in mongoose
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

console.log("created new database: ", databaseUri)

app.get('*', (req, res) => {
  var testHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
  res.sendFile(testHtmlPath);
})

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("App running port 3000!");
});

module.exports = app;