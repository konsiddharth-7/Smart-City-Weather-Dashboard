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
    const forecastDiv = document.getElementById("forecastData");

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    let forecastHTML = "<h2>5-Day Forecast</h2>";

    for (let i = 0; i < data.list.length; i += 8) {
        forecastHTML += `
            <div class="forecast-card">
                <p>${data.list[i].dt_txt}</p>
                <p>Temp: ${data.list[i].main.temp} °C</p>
                <p>${data.list[i].weather[0].main}</p>
            </div>
        `;
    }

    forecastDiv.innerHTML = forecastHTML;
}
