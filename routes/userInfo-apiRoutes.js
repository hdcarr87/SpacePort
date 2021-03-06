var db = require("../models");

module.exports = function(app) {
  //post the user ID from the text box on the homepage that the user creates
    app.post("/api/email", function(req, res) {
      console.log(req.body)
        db.userInfo.create(req.body).then(function(dbuserInfo){
            res.json(dbuserInfo);
        });
      });

      app.post("/api/login", function(req, res){
        console.log(req.body)
        db.userInfo.findAll({
          where : {
            email: req.body.email, 
            password: req.body.password
          }
        }
         ).then(function(userLogin){
          res.json(userLogin)
        })
      })   

    }


    //post create route to save the password into the database for each userID
    
    //post create route to tie the type of user to the userInfor table.  This should also tie to the ajax calls and what types of books, news, and movies will be posted to the options display (?) page
    //app.post("/")
    //post update route to update the userInfo.  Should be able to update ID, type or password

    //destroy route so users can delete there account.  This should clear their info on the favorites table too.  Use a join for this
