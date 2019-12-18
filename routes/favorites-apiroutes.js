var db = require("../models");

module.exports = function(app) {
//route to get userID currently in use
    app.post("/api/userID", function(req, res) {
        db.userFavorties.create(req.body).then(function(dbuserFavorites){
            res.json(dbuserFavorites);
        });
    });    
}
//post create route for when a new favorite is added

//delete route for when a favorite is removed

//join route with destroy on the userInfo routes so that favorites for this userID is deleted if the user deletes account