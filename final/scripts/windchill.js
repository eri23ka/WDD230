/*--- Wheather ---*/
const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Santa+Cruz&appid=5ca3856d54d3b8e8a1608e763137dcaa'

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
  }
function convertMPHtoKPH(mph) {
    return mph * 1.60934;
  }
  
  function extractWeatherInfo(weatherData){
    let weatherList = [];
    let dates = [];
    dates.push(weatherData.list[0].dt_txt.split(" ")[0]);
    weatherList.push(weatherData.list[0]);
    weatherData.list.forEach(data => {
      if(!dates.includes(data.dt_txt.split(" ")[0]) && (weatherList.length < 4)){
        dates.push(data.dt_txt.split(" ")[0]);
        weatherList.push(data);
      }
    });
   return {weatherList, dates};
  }
  
  function setWeatherValues(data) {
    data.weatherList.map((weatherData, index) => {
      const weatherIcon = document.querySelector("#weather-icon-"+index);
      const captionDesc = document.querySelector("#description-"+index);
      const temp = document.querySelector("#temperature-"+index);
      const humidity = document.querySelector("#humidity-"+index);
  
      const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      const desc = weatherData.weather[0].description;
      const capitalized = desc
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" ");
  
      weatherIcon.setAttribute("src", iconsrc);
      weatherIcon.setAttribute("alt", desc);
      captionDesc.textContent = capitalized;
  
      const tempCelsius = convertToCelsius(weatherData.main.temp).toFixed(0);
      temp.innerHTML = "Temp : " + tempCelsius;
  
      humidity.innerHTML = "Humidity : " + weatherData.main.humidity + "%";
      if(index==2){
        const forecastDate = document.querySelector("#forecast-date");
        forecastDate.innerHTML = new Intl.DateTimeFormat("en-UK", { dateStyle: "medium" }).format(
          new Date(weatherData.dt_txt)
        );
      }
    });
  }

  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
       /* console.log(data); testing still */
        const cleanData = extractWeatherInfo(data);
        setWeatherValues(cleanData);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      /*console.log(error); */
    }
  }
  
  apiFetch();