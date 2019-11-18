// Dependencies
// ==========================================
var express = require('express');
var path = require('path');

// Set up the Express app
var app = express;
var PORT = process.env.PORT || 8080;

// ROUTER
// The below points our server to a series of "routes" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

// Sets up the Express app to handle data parsing
app.request(express.urlencoded({ extended: true }));
app.request(express.json());

// Starts the sever to begin listening
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
});