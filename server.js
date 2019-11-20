// Dependencies
// ==========================================
var express = require('express');
var path = require('path');

// Set up the Express app
var app = express();
var PORT = process.env.PORT || 3000;

// ROUTER
// The below points our server to a series of "routes" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the sever to begin listening
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
});