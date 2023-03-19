/* ---my API key: 5ca3856d54d3b8e8a1608e763137dcaa  */

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Selma&appid=5ca3856d54d3b8e8a1608e763137dcaa&units=imperial'

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      /* console.log(data); testing still */
      setWeatherValues(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    /*console.log(error);*/
  }
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function convertMPHtoKPH(mph) {
  return mph * 1.60934;
}

function setWeatherValues(weatherData) {
  const weatherIcon = document.querySelector("#weather-icon");
  const captionDesc = document.querySelector("#description");
  const temp = document.querySelector("#temperature");
  const windSpeed = document.querySelector("#windspeed");

  weatherData.weather.map((weather, index) => {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[index].icon}.png`;
    const desc = weather.description;
    const capitalized = desc
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = capitalized;
    windSpeed.textContent = convertMPHtoKPH(weatherData.wind.speed).toFixed(1);

    const tempCelsius = convertToCelsius(weatherData.main.temp).toFixed(0);
    temp.innerHTML = tempCelsius;
  });
}

apiFetch();


function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32
  return fahrenheit;
};

function convertKphToMph(kph) {
  return kph * 0.6214;
};

function computeWindChillFactor(temp, windspeed){
  return 35.75 + (0.6215 * temp) + (0.4275 * temp * (Math.pow(windspeed, 0.16))) - (35.75*(Math.pow(windspeed,0.16)))
}

document.addEventListener("DOMContentLoaded", () => {
  const temperature = convertToF(
    parseFloat(document.getElementById("temperature").innerHTML)
  );
  const windSpeed = convertKphToMph(
    parseFloat(document.getElementById("windspeed").innerHTML)
  );
  if(temperature <= 50 && windSpeed > 3){
    const windChillFactor = computeWindChillFactor(temperature, windSpeed);
    document.getElementById("windchill").innerHTML =  windChillFactor.toFixed(2);
  }else{
    document.getElementById("windchill").innerHTML = "N/A";
  }
});
getWeather();


/*let temperature = parseFloat(document.querySelector(".temperature").innerHTML);
let windSpeed = parseFloat(document.querySelector(".windSpeed").innerHTML);

temperature = (temperature * 9/5) + 32;
if (temperature <= 50 && windSpeed > 3.0) {
  let windChillFactor = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  document.querySelector(".windChill").innerHTML = windChillFactor.toFixed(2) + "°F";
} else {
  document.querySelector(".windChill").innerHTML = "N/A";
}*/
