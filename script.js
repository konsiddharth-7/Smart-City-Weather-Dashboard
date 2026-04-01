async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const loading = document.getElementById("loading");
    const weatherDiv = document.getElementById("weatherData");

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    loading.style.display = "block";
    weatherDiv.innerHTML = "";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        loading.style.display = "none";

        weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].main}</p>
        `;

    } catch (error) {
        loading.style.display = "none";
        weatherDiv.innerHTML = "Error fetching weather data";
    }
}
