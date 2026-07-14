var cityInput = document.getElementById("city");
var addInput = document.getElementById("add");
var cityOutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
var windOutput = document.getElementById("wind");

const APIkey = "9e3f273ae0717bb6baaf4c781d236964";

function convertToCel(value) {
  return (value - 273).toFixed(2);
}

async function GetWeather() {
  var weatherResult = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${APIkey}&lang=fa`)).json();
  setInfo(weatherResult);
}

function setInfo(data) {
  var cityName = data["name"];
  var description = data["weather"][0]["description"];
  var temp = data["main"]["temp"];
  var wind = data["wind"]["speed"];

  cityOutput.innerHTML = `City : ${cityName}`;
  descOutput.innerHTML = `Description : ${description}`;
  tempOutput.innerHTML = `Temprature : ${convertToCel(temp)}`;
  windOutput.innerHTML = `Wind Speed : ${wind} km/h`;
}
addInput.addEventListener("click", GetWeather);
