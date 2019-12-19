// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

//API query and key variables
//NASA API
var factAPIkey = "CpOF579ndJum1XP4s6XcPnWTQHLo9faqr4hORNMH";
var nasaFact ="https://api.nasa.gov/planetary/apod?api_key=" + factAPIkey;
var marsQuery = "https: //api.nasa.gov/insight_weather/?api_key=" + factAPIkey + "&feedtype=json&ver=1.0";

var movieQuery = "http://www.omdbapi.com/?apikey=ec0b3a6b&s=astronaut"

// The API object contains methods for each kind of request we'll make
var API = {

  //random fact api
  getRandomFact: function(response) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET",
      url: nasaFact,
      data: JSON.stringify(response)
    });
  },

  displayRandomFact: function(response) {
    $("#nasa").append(`<img id="fact" src="${response.url}"><br> <h1>${response.title}</h1>`);
  },

  getMovieList: function(response) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET",
      url: nasaFact,
      data: JSON.stringify(response)
    });
  }
};

var nasaAPI = {
  getExamples: function() {
    return $.ajax({
      
      url: nasaFact,
      type: "GET"
    }).then(function (response) {

      console.log(response);
      console.log(response.url);
      console.log(response.title);

      $("#nasa").append(`<img id="fact" src="${response.url}"><br> <h1>${response.title}</h1>`);

    });
  },
};



// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
