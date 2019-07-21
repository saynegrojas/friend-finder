//link to friends array
const friends_array = require('../app/data/friends');

module.exports = function(app){

    //API get requests
    //handles when users visit a page
    //when users visit a page, they are shown a json of the data in the friends 
    app.get("/api/friends", (req,res) => {
        res.json(friends_array);
    });

    //API post requests
    //handles when a user submits a form -- submits data to server
    //user submits form data (json object)
    // json is pushed to related javascript array
    //server saves data to friends array
    app.post("/api/friends", (req, res) =>{
        friends_array.push(req.body);
        res.json(true);
    });
};