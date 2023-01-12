// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '00d4ce58a1msh19e3675ba9932bfp112d71jsnedf0f0309046',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}







/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


// getWeatherData = (city) => {
//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '00d4ce58a1msh19e3675ba9932bfp112d71jsnedf0f0309046',
// 		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    
// 	}   

// };
// fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}`, options)
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));
 
// }




