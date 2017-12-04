var path = require("path");

var db = require("../models");

var Sequelize= require("sequelize");

var Op = Sequelize.Op

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

    //READ A STORY
    app.get("/read/:level/:id", function(req, res) {
        var current = null
        var prev = null
        var next = null
        if (req.params.level == 0) {
            db.stories.findOne({
                where: {
                    id: req.params.id
                }
            }).then(function(dbFirst) {
                current = dbFirst;
                db.snippets.findOne({
                    where: {
                        parentID: dbFirst.dataValues.id
                    }
                }).then(function(dbSecond) {
                    next = dbSecond;
                    var data = {
                        current: current,
                        prev: null,
                        next: next
                    }
                    res.render("read", data);
                })
            })
        } else if (req.params.level == 9) {
            db.snippets.findOne({
                where: {
                    id: req.params.id
                }
            }).then(function(dbFirst) {
                current = dbFirst;
                db.snippets.findOne({
                    where: {
                        id: dbFirst.dataValues.parentID
                    }
                }).then(function(dbSecond) {
                    prev = dbSecond;
                    var data = {
                        current: current,
                        prev: prev,
                        next: null
                    }
                    res.render("read", data);
                })
            })
        } else if (req.params.level == 1) {
            db.snippets.findOne({
                where: {
                    level: 1,
                    id: req.params.id
                }
            }).then(function(dbFirst) {
                current = dbFirst;
                db.snippets.findOne({
                    where: {
                        level: 2,
                        parentID: dbFirst.dataValues.id
                    }
                }).then(function(dbSecond) {
                    next = dbSecond;
                    db.stories.findOne({
                        where: {
                            id: dbFirst.dataValues.parentID
                        }
                    }).then(function(dbThird) {
                        prev = dbThird;
                        var data = {
                            current: current,
                            prev: prev,
                            next: next
                        }
                        console.log(data);
                        res.render("read", data);

                    })

                })
            })
        } else {
            db.snippets.findOne({
                where: {
                    id: req.params.id
                }
            }).then(function(dbFirst) {
                current = dbFirst;
                db.snippets.findOne({
                    where: {
                        parentID: dbFirst.dataValues.id
                    }
                }).then(function(dbSecond) {
                    next = dbSecond;
                    db.snippets.findOne({
                        where: {
                            level: {[Op.gt]:1},
                            id: dbFirst.dataValues.parentID
                        }
                    }).then(function(dbThird) {
                        prev = dbThird;
                        var data = {
                            current: current,
                            prev: prev,
                            next: next
                        }
                        console.log(data);
                        res.render("read", data);

                    })

                })
            })
        }
    });

    //GET SNIPPET
    app.get("/snippets/:id", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/read.html"));
    });

};