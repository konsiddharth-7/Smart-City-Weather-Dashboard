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
        changeBackground(data.main.temp);
        if (data.cod !== 200) {
            weatherDiv.innerHTML = "City not found";
            loading.style.display = "none";
            return;
        }

        weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
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
        const icon = item.weather[0].icon;

        forecastHTML += `
            <div class="forecast-card">
                <p>${item.dt_txt.split(" ")[0]}</p>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
                <p>${item.main.temp} °C</p>
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

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function changeBackground(temp) {
    if (temp < 15) {
        document.body.style.background = "#007BFF"; 
    } else if (temp < 30) {
        document.body.style.background = "#28A745"; 
    } else {
        document.body.style.background = "#FF3B30"; 
    }
}
