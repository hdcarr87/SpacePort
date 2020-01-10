var db = require("../models");

module.exports = function(app) {
//route to get userID currently in use
    app.post("/api/userID", function(req, res) {
        db.userInfo.create(req.body).then(function(dbuserFavorites){
            res.json(dbuserFavorites);
        });
    });    

//post create route for when a new favorite is added
    app.post("/api/myport", function(req, res) {
    //    console.log(typeof req.body)
    //    console.log(typeof JSON.stringify(req.body))
            console.log("myPort route on server")
            console.log(req.body);
            //array for favorite name

//get route for getting favorites for the user
app.get("/api/myport", function(req, res){
    console.log("favorites get request")
    db.userFavorites.findAll({
        where: {
            userID: req.params.id
        }
    }).then(function(favorites){
        res.json(favorites)
        console.log(favorites)
    })
})

 db.userFavorites.create(req.body).then(function(dbuserFavorites){
            res.json("movie favorite from server");
        });
    });

//post add movie favorite
app.post("/api/favorites/:id", function (req, res) {
    db.userFavorites.create(req.body).then(function(dbuserFavorites){
        res.json(dbuserFavorites)
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
    app.delete("/api/favorites/userID", function(req, res) {
        db.userFavorites.destroy({
            where: {
                id: req.body.userID
            }
        }).then(function(dbuserFavorites) {
            res.json(dbuserFavorites);
        });
    });
}