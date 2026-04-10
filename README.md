# Smart City Weather Dashboard

## Project Description
The Smart City Weather Dashboard is a web application that provides real-time weather information for any city using the OpenWeatherMap API. In addition to weather data, the application provides clothing suggestions based on temperature and weather conditions to help users decide what to wear.

## Purpose
The purpose of this project is to demonstrate JavaScript concepts such as API integration, DOM manipulation, responsive UI design, and the use of Array Higher-Order Functions for searching, filtering, and sorting data.

## Features Planned
- Search weather by city (Search feature)
- Get current weather data
- Get 5-day weather forecast
- Clothing suggestions based on temperature and weather
- Dynamic weather icons based on weather conditions
- Background color change based on temperature
- Auto-detect user location using Geolocation API
- Filter forecast by weather condition (Rain, Clear, Clouds) (Filter feature)
- Sort forecast by temperature (Sort feature)
- Responsive design for mobile, tablet, and desktop
- Loading indicator while fetching API data

## APIs Used
1. OpenWeatherMap API – For weather data  
   https://openweathermap.org/api

2. Geolocation API – To get user's current location from the browser  
   https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

## Technologies Used
- HTML
- CSS
- JavaScript
- OpenWeatherMap API
- Geolocation API
- GitHub

## JavaScript Features to be Used
The project will use JavaScript Array Higher-Order Functions such as:
- `map()` – To display forecast data
- `filter()` – To filter weather conditions
- `sort()` – To sort temperature data
- `find()` – To search for specific city/weather data

## Setup Instructions
1. Clone the GitHub repository
2. Open the project folder
3. Create a file named `config.js`
4. Add your OpenWeatherMap API key:
   const API_KEY = "your_api_key_here";
5. Open index.html in your browser

## How the Project Will Work (Plan)
1. User enters a city name or allows location access
2. The app fetches weather data from the OpenWeatherMap API
3. The app displays current weather and a 5-day forecast
4. The app provides clothing suggestions based on weather conditions
5. The background color changes based on temperature
6. The user can filter forecast data by weather condition
7. The user can sort forecast data by temperature

## Best Practices Followed
- Write clean and readable code
- Use meaningful variable and function names
- Avoid code repetition (DRY principle)
- Handle API errors using try-catch
- Make regular GitHub commits
- Create responsive design for all devices
- Write modular JavaScript functions

## Future Improvements
- Hourly forecast
- Air Quality Index
- Save favorite cities
- Dark mode / Light mode
- Local storage for saving preferences
- Debouncing for search
- Pagination for forecast data

## Live Demo
https://smart-city-weather-dashboard-six.vercel.app/
