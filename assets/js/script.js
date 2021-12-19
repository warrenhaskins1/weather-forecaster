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


//OW api key
var apiKey = "faa5fe30b142609b2f606bb45d574316";

//OW api url = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityVal + "&appid=" + apiKey

//Step 1. Get var for search field 
var city = document.getElementById("#citySearch");

//Step 2. Get the value from the search field to use in your url
var cityVal = document.getElementById("#citySearch").value;

//Step 3. Setup your fetch call. Reference mini project
//We have our search form so write the function to handle events that occur with that search form.

function citySearchHandler(event) {
    event.preventDefault();

    //We need our input value. We can set a message if theres no input value and assign our url to window.location
    if (!cityVal) {
        console.error("Please provide a city name!");
        return;
    }

    location.assign(url);
    console.log(url);
}
city.addEventListener("submit", citySearchHandler);











//We will need one call for the current weather/one call for the future forecast/one call for the uv index based on lat/long.
//Next we will call the api using the fetch function and see if we can return some data to the console


