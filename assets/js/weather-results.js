var apiKey = "faa5fe30b142609b2f606bb45d574316";

var city = document.getElementById("#citySearch");
var currentWeather = document.getElementById("#currentWeather");
var currentTemp = document.getElementById("temp");
var currentWind = document.getElementById("wind");
var currentHumidity = document.getElementById("humidity");
var currentUV = document.getElementById("UV");

// var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityVal + "&appid=" + apiKey;

var url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=" +apiKey;

var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,hourly,minutely,alerts{part}&appid=" + apiKey;

//For uv index use onecall
//Example https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//We want to use exclude={parts} to exclude certain values. Comma seperated. The only value we car about is the daily so our exclude list would look like exclude=hourly,current,minutely,alerts
function getWeather() {
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.main);
      console.log(data.wind.speed);
      console.log(data.main.temp);
      console.log(data.main.humidity);
      displayWeather(data);
    });
    // fetch(url2)
    // .then(function (response) {
    //   return response.json();
    // })
    // .then(function (data) {
    //   console.log(data);
    //   console.log(data.daily.uvi);
    // });
}
getWeather();

function displayWeather(data) {
    currentTemp.innerHTML = "Temperature: " + (data.main.temp);
    currentWind.innerHTML = "Wind: " + (data.wind.speed) + " mph";
    currentHumidity.innerHTML = "Humidity: " + (data.main.humidity) +" %";
    currentUV.innerHTML = "UV Index: " +  + "";
}