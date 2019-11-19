// ===============================================================================
// LOAD DATA
// We are linking our routes to the "data" sources.
// This data sources hold an array of information on friends-data
// ===============================================================================

var friendData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        console.log(newFriend);

        // Add the json the user sent to the friends array
        friendData.push(newFriend);

        // We then display the JSON to the users
        res.json(newcharacter);
    });

};