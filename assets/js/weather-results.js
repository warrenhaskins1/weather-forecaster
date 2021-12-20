var apiKey = "faa5fe30b142609b2f606bb45d574316";

var city = document.getElementById("#citySearch");
var currentWeather = document.getElementById("#currentWeather");

// var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityVal + "&appid=" + apiKey;

var url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" +apiKey;
function getWeather() {
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

  getWeather();