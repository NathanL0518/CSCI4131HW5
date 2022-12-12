
// "borrowed" from MDN's geolocation API example
function geoFindMe() {
    console.log("calling geofindme");
    const status = document.querySelector('#weatherStatus');
    
    function success(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        const latitude_input = document.querySelector("#latitude-input");
        const longitude_input = document.querySelector("#longitude-input");

        longitude_input.value = longitude;
        latitude_input.value = latitude;
        console.log(`${latitude}, ${longitude}`);
        status.textContent = "";
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
}

WEATHER_CODES = {
0:  'Clear sky',
1:  'Mainly clear',
2:  'Partly cloudy',
3:  'Overcast',
45: 'Fog',
48: 'Depositing Rime fog',
51: 'Light Drizzle',
53: 'Moderate Drizzle',
55: 'Dense Drizzle',
57: 'Light Freezing Drizzle',
57: 'Dense Freezing Drizzle',
61: 'Slight Rain',
63: 'Moderate Rain',
65: 'Heavy Rain',
66: 'Light Freezing Rain',
67: 'Heavy Freezing Rain',
71: 'Slight Snow fall',
73: 'Moderate Snow fall',
75: 'Heavy Snow fall',
77: 'Snow grains',
80: 'Slight Rain showers',
81: 'Moderate Rain showers',
82: 'Violent Rain showers',
85: 'Slight Snow showers slight and heavy',
86: 'Heavy Snow showers slight and heavy',
95: 'Thunderstorm',
96: 'Thunderstorm with slight hail',
99: 'Thunderstorm with heavy hail',
}

async function getWeather() {
    let latitude = document.getElementById("latitude-input").value
    let longitude = document.getElementById("longitude-input").value
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&timezone=America%2FChicago`
    let data = fetch(url).then(response => response.json()).then(data => {
        let weather = WEATHER_CODES[data.current_weather.weathercode];
        let temp = data.current_weather.temperature;
        let temperature = document.getElementById("temp-display");
        let weather_display = document.getElementById("cloud-cover-display");
        temperature.innerHTML = `Temperature: ${temp} Degree Fahrenheit`;
        weather_display.innerHTML = `Current Weather: ${weather}`;
    }).catch(error => {
        console.log(error);
    })
    let sun_url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`
    let time = fetch(sun_url).then(response => response.json()).then(data => {
        let sunrise = data.results.sunrise;
        let sunset = data.results.sunset;
        let sunrise_display = document.getElementById("sunrise-display");
        let sunset_display = document.getElementById("sunset-display");
        let date = new Date(sunrise);
        sunrise_display.innerHTML = `Sunrise: ${date.toLocaleTimeString()}`;
        date = new Date(sunset);
        sunset_display.innerHTML = `Sunset: ${date.toLocaleTimeString()}`;
    }).catch(error => {
        console.log(error);
    })
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
document.querySelector("#get-weather-btn").addEventListener('click', getWeather);
