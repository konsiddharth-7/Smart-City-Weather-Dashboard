let forecastData = [];

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const loading = document.getElementById("loading");
    const weatherDiv = document.getElementById("weatherData");
    const forecastDiv = document.getElementById("forecastData");

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    loading.style.display = "block";
    weatherDiv.innerHTML = "";
    forecastDiv.innerHTML = "";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].main}</p>
        `;

        getForecast(city);

        loading.style.display = "none";

    } catch (error) {
        loading.style.display = "none";
        weatherDiv.innerHTML = "Error fetching weather data";
    }
}

async function getForecast(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    // FILTER (HOF)
    forecastData = data.list.filter(item => item.dt_txt.includes("18:00:00"));

    displayForecast(forecastData);
}

// MAP (HOF)
function displayForecast(dataArray) {
    const forecastDiv = document.getElementById("forecastData");

    let forecastHTML = "<h2>5-Day Forecast</h2>";

    dataArray.map(item => {
        forecastHTML += `
            <div class="forecast-card">
                <p>${item.dt_txt}</p>
                <p>Temp: ${item.main.temp} °C</p>
                <p>${item.weather[0].main}</p>
            </div>
        `;
    });

    forecastDiv.innerHTML = forecastHTML;
}

// FILTER BUTTON FUNCTION
function filterWeather(type) {
    const filteredData = forecastData.filter(item =>
        item.weather[0].main === type
    );
    displayForecast(filteredData);
}

// SORT FUNCTION
function sortTemp() {
    const sortedData = [...forecastData].sort((a, b) =>
        b.main.temp - a.main.temp
    );
    displayForecast(sortedData);
}
