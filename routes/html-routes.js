var path = require("path");

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    //INDEX
    app.get("/", function(req, res) {
        db.stories.findAll({
            orderBy: [
                ['id', 'DESC']
            ],
            limit: 5
                //offset: req.params.offset
        }).then(function(dbStories) {
            var data = {
                stories: dbStories
            }
            res.render("index", data);
        });
    });

    //GET STORY
    app.get("/story/:id", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/read.html"));
    });

    //GET SNIPPET
    app.get("/snippets/:id", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/read.html"));
    });

};