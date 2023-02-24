let temperature = parseFloat(document.querySelector(".temperature").innerHTML);
let windSpeed = parseFloat(document.querySelector(".windSpeed").innerHTML);

temperature = (temperature * 9/5) + 32;
if (temperature <= 50 && windSpeed > 3.0) {
  let windChillFactor = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  document.querySelector(".windChill").innerHTML = windChillFactor.toFixed(2) + "°F";
} else {
  document.querySelector(".windChill").innerHTML = "N/A";
}
