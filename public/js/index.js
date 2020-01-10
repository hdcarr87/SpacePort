console.log("js here");

////Cors request handler
// (async () => {
//   const res = await fetch('http://localhost:3000/api/posts', {
//     method: 'DELETE'
//   })

//   console.log(await res.json())
// })();

var movieSearch = $('#search-input').val();

//API query and key variables
//NASA API
var factAPIkey = "CpOF579ndJum1XP4s6XcPnWTQHLo9faqr4hORNMH";
var nasaFact ="https://api.nasa.gov/planetary/apod?api_key=" + factAPIkey;

var marsQuery = "https://api.nasa.gov/insight_weather/?api_key=" + factAPIkey + "&feedtype=json&ver=1.0";

var astronautMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=astronaut"
var spaceMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=space"
var planetMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=planet"
var marsMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=mars"
var earthMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=earth"
var rocketMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=rocket"
var starsMovies = "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=ec0b3a6b&s=stars"

var planetBooks = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=planet&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";

// The API object contains methods for each kind of request we'll make
var API = {

  //random fact and picture call
  getRandomFact: function(response) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "GET",
      url: nasaFact,
      data: JSON.stringify(response)
    }).then(function (response) {

      //appends to nasa div in index.html
      $("#nasa").append(`<img id="fact" width="200px" src="${response.url}"><br> <h1>${response.title}</h1><br>${response.explanation}`);

    });
  },

  //generate random list
  getMovieList: function(response) {
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
      // data: JSON.stringify(response)
    }).then(function (response) {

      for(let i = 0; i < 3; i++ ){

      let r = response.Search[0];
      r = response.Search[Math.floor(Math.random() * response.Search.length)];

      //appends to movie div in index.html
      $("#movie-list").append(`<img src="${r.Poster}"><br> <h1>${r.Title}</h1>`);

    }
  });
  },

  //generate random list
  getBookList: function(response) {
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
      // data: JSON.stringify(response)
    }).then(function (response) {

      console.log(response)
      console.log(response.items[0].volumeInfo.title)

      for(let i = 0; i < 3; i++ ){

      let r = response.items[0];
      r = response.items[Math.floor(Math.random() * response.items.length)];

      //appends to movie div in index.html
      $("#book-list").append(`<img width="150px" src="${r.volumeInfo.imageLinks.thumbnail}"><br> <h1>${r.volumeInfo.title}</h1><br>${r.volumeInfo.description}`);

    }
  });
},
};

API.getRandomFact();

API.getBookList();

$(document).on("click", "#astronaut", function(){
  console.log("astronaut was clicked!");
  event.preventDefault();
  API.getMovieList();
})
