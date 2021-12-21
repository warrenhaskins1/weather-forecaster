var apiKey = "faa5fe30b142609b2f606bb45d574316";
var cityFormEl = document.querySelector('#city-form');
var cityInputEl = document.querySelector('#cityname');
//Display
var currentWeather = document.getElementById("#currentWeather");
var currentTemp = document.getElementById("temp");
var currentWind = document.getElementById("wind");
var currentHumidity = document.getElementById("humidity");
var currentUV = document.getElementById("UV");
var cityDate = document.getElementById("cityDate");
var cityName = document.getElementById("cityName");
//forecast
var forecastContainerEl = document.querySelector("#forecast-container");

var cities = [];

//Search function
var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityname = cityInputEl.value.trim();
    console.log(cityname);
    if (cityname) {
        getWeather(cityname);
        // getForecast(cityname);

        // repoContainerEl.textContent = '';
        cityInputEl.value = '';
    } else {
        alert('Please enter a City');
    }
    saveCitySearch();
    previousSearch(city);

    var saveCitySearch = function () {
        localStorage.setItems("cities", JSON.stringify(cities));
    }
};

// var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&units=imperial&appid=" + apiKey;

// var url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=" + apiKey;
var getWeather = function (city) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.coord.lat);
            console.log(data.coord.lon);
            var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + (data.coord.lat) + "&lon=" + (data.coord.lon) + "&exclude=hourly&units=imperial&appid=" + apiKey
            fetch(url2)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    //Remember to also include the cityID approach to the forecast
                    displayForecast(data, city);
                    function displayForecast(data) {
                        currentUV.innerHTML = "UV Index: " + (data.current.uvi);
                        var forecast = data.daily;

                        for (var i = 4; i < forecast.length; i++) {
                            var dailyForecast = forecast[i];

                            var forecastEl = document.createElement("div");
                            forecastEl.classList = "card bg-dark text-light m-3";
                            console.log(dailyForecast);

                            var forecastDate = document.createElement("h5")
                            forecastDate.textContent = moment.unix(dailyForecast.dt).format("MMM D, YYYY");
                            forecastDate.classList = "card-header text-center"
                            forecastEl.appendChild(forecastDate);
                            console.log(forecastDate);

                            
                        }
                    }
                });
            
            displayWeather(data, city);
            function displayWeather(data) {
                //need to display name and date
                //get unix date and convert since data.dt is supplied from the api
                var currentDate = new Date(data.dt * 1000);
                var date = currentDate.toLocaleDateString("en-US", { timeZoneName: "short" });
                cityName.innerHTML = (data.name);
                cityDate.innerHTML = date;
                currentTemp.innerHTML = "Temperature: " + (data.main.temp) + " F";
                currentWind.innerHTML = "Wind: " + (data.wind.speed) + " mph";
                currentHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";
                //var forecastContainerEl = document.querySelector("#forecast-container");
            }

        });

        








}
cityFormEl.addEventListener('submit', formSubmitHandler);