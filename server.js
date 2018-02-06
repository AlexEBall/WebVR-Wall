const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const routes = require("./server/routes");

// app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static("client/build"));

app.use("/", routes);

const configDB = require('./server/config/database');

mongoose.Promise = global.Promise;
mongoose.connect(configDB.url);


/*if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
*/

const db = mongoose.connection;

db.on('error', function(err) {
    console.log('MongoDB connection error:', err);
});

db.once("open", function() {
    console.log("Mongoose connected to version", mongoose.version);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log(`🌎  ==> API server listening on PORT ${PORT}!`);
});