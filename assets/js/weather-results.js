var apiKey = "faa5fe30b142609b2f606bb45d574316";

var cityFormEl = document.querySelector('#city-form');
//var languageButtonsEl = document.querySelector('#language-buttons');
var cityInputEl = document.querySelector('#cityname');


//Display
var currentWeather = document.getElementById("#currentWeather");
var currentTemp = document.getElementById("temp");
var currentWind = document.getElementById("wind");
var currentHumidity = document.getElementById("humidity");
var currentUV = document.getElementById("UV");
var cityDate = document.getElementById("cityDate");
var cityName = document.getElementById("cityName");


var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityname = cityInputEl.value.trim();
    console.log(cityname);
    if (cityname) {
        getWeather(cityname);

        // repoContainerEl.textContent = '';
        cityInputEl.value = '';
    } else {
        alert('Please enter a City');
    }
};
//For uv index use onecall
//Example https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//We want to use exclude={parts} to exclude certain values. Comma seperated. The only value we car about is the daily so our exclude list would look like exclude=hourly,current,minutely,alerts
var getWeather = function (city) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

    // var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&units=imperial&appid=" + apiKey;


    // var url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=" + apiKey;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.dt);
            console.log(data.main);
            console.log(data.wind.speed);
            console.log(data.main.temp);
            console.log(data.main.humidity);
            console.log(data.coord.lat);
            console.log(data.coord.lon);
            //save data as a variable and then put the ur directly into the request with the data.coord.lat/lon values appended into th eurl string below

            //Remember to also include the cityID approach to the forecast
            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + (data.coord.lat) + "&lon=" + (data.coord.lon) + "&exclude=hourly,minutely,alerts&units=imperial&appid=" + apiKey)

                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    // console.log(data.daily.uvi);
                    // console.log(data.daily[0]);
                    // console.log(data.daily[0].uvi);
                    console.log(data.current.uvi)

                });
            displayWeather(data);
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
                //Ask about this in class
                currentUV.innerHTML = "UV Index: " + (data.current.uvi);
            }
        });

    //Get 5 day forecast
    //OW has api for forecast for up to 4 days which should work but ony hourly (96hours) and by city id.
    //new fetch api using city id in parameters!!!Scratch that only in paid version.
    //Use One Call Api we can use that fo rour uvIndex




    //Store search to localStorage



}
cityFormEl.addEventListener('submit', formSubmitHandler);

