var db = require("../models");

module.exports = function(app) {
  // Get all favorites and show on page
  app.get("/api/myport", function(req, res) {
    var query = {};
    if (req.query.)
    db.spacePort.findAll({ favorites }).then(function(dbspacePort) {
      res.json(dbspacePort);
    });
  });

  // post favorite to the favorites db
  app.post("/api/examples", function(movie, title) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete a favorite
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });



};
