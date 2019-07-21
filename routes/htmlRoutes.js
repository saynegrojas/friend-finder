const path = require('path');

module.exports = function(app) {

    //HTML get requests
    //code handles when users visit a page
    //joins directory to HTML
    app.get("/survey", (req,res) => {
        res.sendFile(path.join(__dirname, "../app/public/survey.html" ));
        
    });
    //home HTML
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "../app/public/home.html" ));
    });
}