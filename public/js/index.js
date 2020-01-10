//NASA API
var factAPIkey = "CpOF579ndJum1XP4s6XcPnWTQHLo9faqr4hORNMH";
var nasaFact ="https://api.nasa.gov/planetary/apod?api_key=" + factAPIkey;

//Mars API
var marsQuery = "https://api.nasa.gov/insight_weather/?api_key=" + factAPIkey + "&feedtype=json&ver=1.0";

//Movies
var astronautMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=astronaut"
var spaceMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=space"
var planetMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=planet"
var marsMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=mars"
var earthMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=earth"
var rocketMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=rocket"
var starsMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=stars"

//Books
var planetBooks = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=planet&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";
var marsBooks = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=mars&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";
var galaxyBooks = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=galaxy&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";

// The API object contains methods for each kind of request we'll make
var API = {

  //NASA fact of the day
  getNasaFact: function(response) {
    return $.ajax({
      headers: {"Content-Type": "application/json",},
      type: "GET",
      url: nasaFact,
      data: JSON.stringify(response)
    }).then(function (response) {
      $("#nasa").
      append(`
      <img id="fact" width="600px" src="${response.url}">
      <br> <h1>${response.title}</h1>
      <br>${response.explanation}`);
    });
  },

  getMovieAstronautList: function(response) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/, *",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": "86400",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,TRACE",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
      },
      type: "GET",
      url: astronautMovies,
    }).then(function (response) {
      for(let i = 0; i < 3; i++ ){
      let r = response.Search[0];
      r = response.Search[Math.floor(Math.random() * response.Search.length)];
      $("#movie-list").
      prepend(`
      <div class="api-item">
      <h3>${r.Title}</h3>
      <br><button class="fav" data="${r.Title}">add to favorites</button>
      <br><img style="width:200px; float:none"src="${r.Poster}">
      </div>
      <br>
      `);
    }
  });
  },

  getMovieSpaceList: function(response) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/, *",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": "86400",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,TRACE",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
      },
      type: "GET",
      url: spaceMovies,
    }).then(function (response) {
      for(let i = 0; i < 3; i++ ){
      let r = response.Search[0];
      r = response.Search[Math.floor(Math.random() * response.Search.length)];
      $("#movie-list").
      prepend(`
      <div class="api-item">
      <h3>${r.Title}</h3>
      <br><button class="fav" data="${r.Title}">add to favorites</button>
      <br><img style="width:200px; float:none"src="${r.Poster}">
      </div>
      <br>
      `);
    }
  });
  },

  getMovieMarsList: function(response) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/, *",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": "86400",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,TRACE",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
      },
      type: "GET",
      url: marsMovies,
    }).then(function (response) {
      for(let i = 0; i < 3; i++ ){
      let r = response.Search[0];
      r = response.Search[Math.floor(Math.random() * response.Search.length)];
      $("#movie-list").
      prepend(`
      <div class="api-item">
      <h3>${r.Title}</h3>
      <br><button class="fav" data="${r.Title}">add to favorites</button>
      <br><img style="width:200px; float:none"src="${r.Poster}">
      </div>
      <br>
      `);
    }
  });
  },

  getBookPlanetList: function(response) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/, *",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": "86400",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,TRACE",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
      },
      type: "GET",
      url: planetBooks,
    }).then(function (response) {
      for(let i = 0; i < 3; i++ ){
      let r = response.items[0];
      r = response.items[Math.floor(Math.random() * response.items.length)];
      $("#book-list").
      prepend(`
      <div class="api-item">
      <h3>${r.volumeInfo.title}</h3>
      <br><button class="fav" data="${r.volumeInfo.title}">add to favorites</button>
      <br><img class="thumbnail" src="${r.volumeInfo.imageLinks.thumbnail}">
      <br> ${r.volumeInfo.description}
      </div>
      <br>
      `);
    }
  });
},

getBookMarsList: function(response) {
  return $.ajax({
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/, *",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Max-Age": "86400",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,TRACE",
      "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    },
    type: "GET",
    url: marsBooks,
  }).then(function (response) {
    for(let i = 0; i < 3; i++ ){
    let r = response.items[0];
    r = response.items[Math.floor(Math.random() * response.items.length)];
    $("#book-list").
    prepend(`
    <div class="api-item">
    <h3>${r.volumeInfo.title}</h3>
    <br><button class="fav" data="${r.volumeInfo.title}">add to favorites</button>
    <br><img class="thumbnail" src="${r.volumeInfo.imageLinks.thumbnail}">
    <br> ${r.volumeInfo.description}
    </div>
    <br>
    `);
  }
});
},  

getBookGalaxyList: function(response) {
  return $.ajax({
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/, *",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Max-Age": "86400",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,TRACE",
      "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    },
    type: "GET",
    url: galaxyBooks,
  }).then(function (response) {
    for(let i = 0; i < 3; i++ ){
    let r = response.items[0];   
    r = response.items[Math.floor(Math.random() * response.items.length)];
    $("#book-list").
    prepend(`
    <div class="api-item">
    <h3>${r.volumeInfo.title}</h3>
    <br><button class="fav" data="${r.volumeInfo.title}">add to favorites</button>
    <br><img class="thumbnail" src="${r.volumeInfo.imageLinks.thumbnail}">
    <br> ${r.volumeInfo.description}
    </div>
    <br>
    `);
  }
});
},

};

API.getNasaFact();

//////////on click movie button functions
$(document).on("click", "#movie-astronaut", function(){
  console.log("astronaut movie was clicked!");
  event.preventDefault();
  API.getMovieAstronautList();
})

$(document).on("click", "#movie-space", function(){
  console.log("space movie was clicked!");
  event.preventDefault();
  API.getMovieSpaceList();
})

$(document).on("click", "#movie-planet", function(){
  console.log("planet movie was clicked!");
  event.preventDefault();
  API.getMoviePlanetList();
})

$(document).on("click", "#movie-mars", function(){
  console.log("mars movie was clicked!");
  event.preventDefault();
  API.getMovieMarsList();
})

////////on click book button functions
$(document).on("click", "#book-planet", function(){
  console.log("planet book was clicked!");
  event.preventDefault();
  API.getBookPlanetList();
})

$(document).on("click", "#book-mars", function(){
  console.log("mars book was clicked!");
  event.preventDefault();
  API.getBookMarsList();
})

$(document).on("click", "#book-galaxy", function(){
  console.log("galaxy book was clicked!");
  event.preventDefault();
  API.getBookGalaxyList();
})

$(document).on("click", "#book-astronaut", function(){
  console.log("astronaut book was clicked!");
  event.preventDefault();
  API.getBookAstronautList();
})

//////////add favorites button - post to myPort
$(document).on("click", ".fav", function(){
  console.log("fav button was clicked")
  var newFav = {
    Data: $(this).attr("data"),
    userID: "2",
    Type: "movie",
    userInfoId: 1,
  } 
  console.log(typeof newFav)
  console.log(newFav)

  $.post("/api/myport/", newFav, function(data){
    console.log("post request complete");
console.log(data)
  })
})

$(document).on("click", "#view-favs", function(){
  $.get("/api/myport/", function(data){
    // console.log(data)
    console.log("myport get request complete")
  })
})

