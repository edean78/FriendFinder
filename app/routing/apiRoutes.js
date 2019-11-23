// ===============================================================================
// LOAD DATA
// We are linking our routes to the "data" sources.
// This data sources hold an array of information on friends-data
// ===============================================================================

var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

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

        var userData = req.body;
        var userScores = userData.scores;
        var scoresArr = [];
        var match = 0;

        console.log(userData);

        for (var i = 0; i < friendsData.length; i++) {
            var totalDiff = 0;
            for (var j = 0; j < userScores.length; index++) {
                totalDiff +=(math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userScores)))
            }
            scoresArr.push(totalDiff);
        }

        for (let i = 0; i < scoresArr.length; index++) {
            if(scoresArr[i] <= scoresArr[match]){
                match = i;
            }
        }

        var bestFriend = friendsData[match];
        // We then display the JSON to the users
        res.json(bestFriend);
        // Add the json the user sent to the friends array
        friendsData.push(userData);
        
    });

};