//var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/home", function(req, res) {
   // db.userFavorites.findAll({}).then(function(userFavorites) {
     console.log(__dirname,"../home.html")
     res.sendFile(path.join(__dirname,"../public/home.html"))
      // res.render("index", {
      //   msg: "Welcome!",
      //   examples: userFavorites
      // });
    //});
  });

  app.get("/mars", function(req, res) {
    // db.userFavorites.findAll({}).then(function(userFavorites) {
      console.log(__dirname,"../mars.html")
      res.sendFile(path.join(__dirname,"../public/mars.html"))
       // res.render("index", {
       //   msg: "Welcome!",
       //   examples: userFavorites
       // });
     //});
   });

   app.get("/books", function(req, res) {
    // db.userFavorites.findAll({}).then(function(userFavorites) {
      console.log(__dirname,"../books.html")
      res.sendFile(path.join(__dirname,"../public/books.html"))
       // res.render("index", {
       //   msg: "Welcome!",
       //   examples: userFavorites
       // });
     //});
   });

   app.get("/movies", function(req, res) {
    // db.userFavorites.findAll({}).then(function(userFavorites) {
      console.log(__dirname,"../movies.html")
      res.sendFile(path.join(__dirname,"../public/movies.html"))
       // res.render("index", {
       //   msg: "Welcome!",
       //   examples: userFavorites
       // });
     //});
   });

   app.get("/news", function(req, res) {
    // db.userFavorites.findAll({}).then(function(userFavorites) {
      console.log(__dirname,"../news.html")
      res.sendFile(path.join(__dirname,"../public/news.html"))
       // res.render("index", {
       //   msg: "Welcome!",
       //   examples: userFavorites
       // });
     //});
   });

   app.get("/myport", function(req, res) {
    // db.userFavorites.findAll({}).then(function(userFavorites) {
      console.log(__dirname,"../MyPort.html")
      res.sendFile(path.join(__dirname,"../public/MyPort.html"))
       // res.render("index", {
       //   msg: "Welcome!",
       //   examples: userFavorites
       // });
     //});
   });

  // // Load example page and pass in an example by id
  // app.get("/userinfo/:id", function(req, res) {
  //   db.userInfo.findOne({ where: { id: req.params.id } }).then(function(userInfo) {
  //     res.render("example", {
  //       example: userInfo
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
