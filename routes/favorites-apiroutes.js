var db = require("../models");

module.exports = function(app) {
//route to get userID currently in use
    app.post("/api/userID", function(req, res) {
        db.userFavorties.create(req.body).then(function(dbuserFavorites){
            res.json(dbuserFavorites);
        });
    });    

//post create route for when a new favorite is added
    app.post("/api/myport", function(req, res) {
        db.userFavorties.create(req.body).then(function(dbuserFavorites){
            res.json(dbuserFavorites);
        });
    });


//delete route for when a favorite is removed
    app.delete("/api/favorites/:id", function(req, res) {
        db.userFavorites.destroy( {
            where: {
                id: req.params.id
            }
        }).then(function(dbuserFavorites){
            res.json(dbuserFavorites);
        });
    });
//join route with destroy on the userInfo routes so that favorites for this userID is deleted if the user deletes account.
    app.delete("/api/favorties/userID", function(req, res) {
        db.userFavorties.destroy({
            where: {
                id: req.body.userID
            }
        }).then(function(dbuserFavorties) {
            res.json(dbuserFavorties);
        });
    });
}