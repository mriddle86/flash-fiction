var db = require("../models");

module.exports = function(app) {
    // get story by ID
    app.get("/api/story/:id", function(req, res) {
        db.stories.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbStories) {
            res.json(dbstories);
        })
    });
    
    // get story by genre
    app.get("/api/genre/:genre", function(req, res) {
        db.stories.findOne({
            where: {
                genre: req.params.genre
            }
        }).then(function(dbStories) {
            res.json(dbstories);
        })
    });

    // get author by name
    app.get("/api/author/:name", function(req, res) {
        db.stories.findOne({
            where: {
                name: req.params.name
            }
        }).then(function(dbStories) {
            res.json(dbstories);
        })
    });

    // get snippets by parent
    app.get("/api/snippets/:id/:level", function(req, res) {
        db.snippets.findAll({
            where: {
                parentID: req.params.id,
                level: level
            }
        }).then(function(dbsnippets) {
            res.json(dbsnippets);
        })
    });

    // get latest stories
    app.get("/api/latest/:offset?", function(req, res) {
        db.stories.findAll({
            orderBy: [
                ['id', 'DESC']
            ],
            limit: 5
            //offset: req.params.offset
        }).then(function(dbsnippets) {
            res.json(dbsnippets);
        })
    });

    // adds new story
    app.post("/api/newStory", function (req, res){
    	console.log(req.body);
    	db.stories.create({
    		title: req.body.title,
    		snipppet: req.body.snippet,
    		author: req.body.author,
    		authorID: req.body.authorID,
    		genre: req.body.genre
    	})
    });

    // adds new author
    app.post("/api/newAuthor", function (req, res){
        console.log(req.body);
        db.stories.create({
            name: req.body.name
        })
    });

    // adds up votes
    app.put("/api/upVotesStories/:id/:level", function(req, res) {
        db.stories.increment('upVotes', {id: req.params.id})
    });

    app.put("/api/upVotesSnippets/:id/:level", function(req, res) {
        db.snippets.increment('upVotes', {id: req.params.id})
    });

    // add down votes
    app.put("/api/downVotesStories/:id/:level", function(req, res) {
        db.stories.increment('downVotes', {id: req.params.id})
    });

    app.put("/api/downVotesSnippets/:id/:level", function(req, res) {
        db.snippets.increment('downVotes', {id: req.params.id})
    });
};