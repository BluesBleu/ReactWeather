//axios to call API
var axios = require('axios');

//string to get data
var key = "8b4166e2b199146ab10bc258ea5fce5a";
var firstWeb = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
var secondWeb = "&mode=json&units=imperial&cnt=5&appid=";

function getWeather (city) {
	return axios.get(firstWeb + city + secondWeb + key)
}

var helper = {
	getWeatherArray: function (city) {
		return getWeather(city);
	}
};

module.exports = helper;