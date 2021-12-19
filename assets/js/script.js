// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

//Get API key from OpenWeather/refer to  https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys) on how to use.

// API key name: wgh-weather-app:846ad021dd6cd6d13bdaab14c7c02811
var apiKey ="846ad021dd6cd6d13bdaab14c7c02811" 

//Start by getting our search button/search-form and a function to call our submitEventHandler
var searchFormEl = document.querySelector("#city-search-form");

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector("#citySearch").value;

    if (!searchInputVal) {
        console.error("Please enter the name of the city you'd like the forecast for!");
        return;
    }

    //to build our query string refer to the openweather docs for examples
    var queryString = "./data/2.5/weather?q=" + searchInputVal + "&appid=" +apiKey;

    location.assign(queryString);
}
searchFormEl.addEventListener("submit", handleSearchFormSubmit);



