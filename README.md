Smart City Weather Dashboard

Project Description - 
The Smart City Weather Dashboard is a web application that provides real-time weather information for any city using the OpenWeatherMap API. In addition to weather data, the application provides clothing suggestions based on temperature and weather conditions to help users decide what to wear.

Purpose -
The purpose of this project is to demonstrate JavaScript concepts such as API integration, DOM manipulation, responsive UI design, and the use of Array Higher-Order Functions for searching, filtering, and sorting data.

Features Planned - 
Search weather by city (Search feature)
Get current weather data
Get 5-day weather forecast
Clothing suggestions based on temperature and weather
Dynamic weather icons based on weather conditions
Background color change based on temperature
Auto-detect user location using Geolocation API
Filter forecast by weather condition (Rain, Clear, Clouds) (Filter feature)
Sort forecast by temperature (Sort feature)
Responsive design for mobile, tablet, and desktop
Loading indicator while fetching API data

APIs Used - 
OpenWeatherMap API – For weather data
https://openweathermap.org/api
Geolocation API – To get user's current location from the browser
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

Technologies Used - 
HTML
CSS
JavaScript
OpenWeatherMap API
Geolocation API
GitHub

JavaScript Features to be Used - 
The project will use JavaScript Array Higher-Order Functions such as:
map() – To display forecast data
filter() – To filter weather conditions
sort() – To sort temperature data
find() – To search for specific city/weather data

Setup Instructions - 
Clone the GitHub repository
Open the project folder
Create a file named config.js
Add your OpenWeatherMap API key:
const API_KEY = "your_api_key_here";
Open index.html in your browser

How the Project Will Work (Plan) - 
User enters a city name or allows location access
The app fetches weather data from the OpenWeatherMap API
The app displays current weather and a 5-day forecast
The app provides clothing suggestions based on weather conditions
The background color changes based on temperature
The user can filter forecast data by weather condition
The user can sort forecast data by temperature

Future Improvements - 
Hourly forecast
Air Quality Index
Save favorite cities
Dark mode / Light mode
Local storage for saving preferences
