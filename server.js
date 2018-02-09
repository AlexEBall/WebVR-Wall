const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const routes = require("./server/routes/api/profile");  // added /api/profile might change

require("dotenv").config(); // added

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENVIROMENT === "PRODUCTION"){   // added
    app.use(express.static("client/build"));
}

app.use("/api", routes); // added /api

const configDB = require('./server/config/database');

mongoose.Promise = global.Promise;
mongoose.connect(configDB.url);

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