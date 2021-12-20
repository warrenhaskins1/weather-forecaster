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


//Step 1. Get var for search field 
var city = document.getElementById("#citySearch");
var currentWeather = document.getElementById("#currentWeather");
var
//Step 2. Get the value from the search field to use in your url


//Step 3. Setup your fetch call. Reference mini project
//We have our search form so write the function to handle events that occur with that search form.

// function citySearchHandler(event) {
//     event.preventDefault();

//     var cityVal = document.getElementById("#citySearch").value;

//     if (cityVal) {
//         getWeather(cityVal);

//         currentWeather.textContent = "";
//         city.value = "";
//     } else {
//         alert("Please enter a city name.")
//     }
// };
// city.addEventListener("submit", citySearchHandler);

// var previousButton = function (event) {
//     //This refers to our previous city weather searches. use data-attribute to access.
//     var previous = event.target.getAttribute("data-value");
//     //if theres no previous we wont attempt to fetch
//     if (previous) {
//         getPrevious(previous);

//         currentWeather.textContent = "";
//     }
// };

//Here is where we call our api fetch request getWeather

 function getWeather(cityVal) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityVal + "&appid=" + apiKey;
    fetch(url)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayRepos(data, user);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
};
 
        

getWeather();













//We will need one call for the current weather/one call for the future forecast/one call for the uv index based on lat/long.
//Next we will call the api using the fetch function and see if we can return some data to the console


