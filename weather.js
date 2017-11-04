var API_KEY = "abcdb27121596f68a22d48fce91a570c";
// var celc = false;
// var wdata;
var loc;

// function displayTemp(fTemp,cTemp){
//   if(cTemp) return (fTemp -32) * (5/9) + "C";
//   return fTemp + "F"
// }

$(function() {
  $.getJSON("https://ipinfo.io", function(data) {
    //console.log("assigning the data....");
    loc = data.loc.split(",");
    //console.log(loc);

    $.getJSON(
      "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" +
        loc[0] +
        "&lon=" +
        loc[1] +
        "&APPID=" +
        API_KEY,
      function(wdata) {
        //console.log("Show my weather data :" , wdata.name);
        var api =
          "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" +
          loc[0] +
          "&lon=" +
          loc[1] +
          "&APPID=" +
          API_KEY;
        var currentLocation = wdata.name;
        var currentWeather = wdata.weather[0].description;
        var currentTemp = wdata.main.temp;
        var currentHighTemp = wdata.main.temp_max;
        var currentLowTemp = wdata.main.temp_min;
        var currentPressure = wdata.main.pressure;
        var currentHumidity = wdata.main.humidity;
        var currentWeatherIcon = wdata.weather[0].icon;
        var currentWeatherIconURL =
          "https://openweathermap.org/img/w/" + currentWeatherIcon + ".png";

        $("#currentLocation").html(currentLocation);
        $("#currentWeather").html(currentWeather);
        $("#currentTemp").html(currentTemp);
        $("#currentHighTemp").html(currentHighTemp);
        $("#currentLowTemp").html(currentLowTemp);
        $("#currentPressure").html(currentPressure);
        $("#currentHumidity").html(currentHumidity);
        $("#currentWeatherIconURL").html(currentWeatherIconURL);
        $("#tempclass").prepend(
          '<div><img src="' + currentWeatherIconURL + '"</div>'
        );
        console.log(currentHumidity);
      }
    );
  });
});
