var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public.html"));
  });

  app.get("/story/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/read.html"));
  });


  app.get("/snippets/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/read.html"));
  });

};
