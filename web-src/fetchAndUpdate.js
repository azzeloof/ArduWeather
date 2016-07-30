// ArduWeather
// Adam Zeloof
// http://adam.zeloof.xyz
// 7/30/2016

var windspeedmph = 0;
var windgustmph = 0;
var windgustdir = 0;
var windspdmph_avg2m = 0;
var winddir_avg2m = 0;
var windgustmph_10m = 0;
var windgustdir_10m = 0;
var humidity = 0;
var tempf = 0;
var rainin = 0;
var dailyrainin = 0;
var pressure = 0;
var batt_lvl = 0;
var light_lvl = 0;

function pullData() {
    $.getJSON("ARDUINO URL", function(result) {
        weather = result;
        windspeedmph = weather.windspeedmph;
        windgustmph = weather.windgustmph;
        windgustdir = weather.windgustdir;
        windspdmph_avg2m = weather.windspdmph_avg2m;
        winddir_avg2m = weather.winddir_avg2m;
        windgustmph_10m = weather.windgustmph_10m;
        windgustdir_10m = weather.windgustdir_10m;
        humidity = weather.humidity;
        tempf = weather.tempf;
        rainin = weather.rainin;
        dailyrainin = weather.dailyrainin;
        pressure = weather.pressure;
        batt_lvl = weather.bat_lvl;
        light_lvl = weather.light_lvl;
    });
}

function updateLocal() {
    pullData();

    tempData.setValue(0, 1, Math.round(tempf));
    humidityData.setValue(0, 1, Math.round(humidity));
    pressureData.setValue(0, 1, Math.round(pressure) / 1000);
    lightData.setValue(0, 1, light_lvl);
    windData.setValue(0, 1, windspeedmph);
    rainData.setValue(0, 1, dailyrainin);

    tempGauge.draw(tempData, tempOptions);
    humidityGauge.draw(humidityData, humidityOptions);
    pressureGauge.draw(pressureData, pressureOptions);
    lightGauge.draw(lightData, lightOptions);
    windGauge.draw(windData, windOptions);
    rainGauge.draw(rainData, rainOptions);

    setTimeout(updateLocal, 5000);
};

function updateHistorical() {
    pullData();
    temp1hrData.setValue(12, 1, tempf);
    for (i=0; i<12; i++) {
      var value = weather.history.hour.tempf[i];
      temp1hrData.setValue(i, 1, value);
    }
    pressure1hrData.setValue(12, 1, pressure/1000);
    for (i=0; i<12; i++) {
      var value = weather.history.hour.pressure[i]/1000;
      pressure1hrData.setValue(i, 1, value);
    }
    humidity1hrData.setValue(12, 1, humidity);
    for (i=0; i<12; i++) {
      var value = weather.history.hour.humidity[i];
      humidity1hrData.setValue(i, 1, value);
    }
    light1hrData.setValue(12, 1, light_lvl);
    for (i=0; i<12; i++) {
      var value = weather.history.hour.light[i];
      light1hrData.setValue(i, 1, value);
    }

    temp24hrData.setValue(24, 1, tempf);
    for (i=0; i<24; i++) {
      var value = weather.history.day.tempf[i];
      temp24hrData.setValue(i, 1, value);
    }
    pressure24hrData.setValue(24, 1, pressure/1000);
    for (i=0; i<24; i++) {
      var value = weather.history.day.pressure[i]/1000;
      pressure24hrData.setValue(i, 1, value);
    }
    humidity24hrData.setValue(24, 1, humidity);
    for (i=0; i<24; i++) {
      var value = weather.history.day.humidity[i];
      humidity24hrData.setValue(i, 1, value);
    }
    light24hrData.setValue(24, 1, light_lvl);
    for (i=0; i<24; i++) {
      var value = weather.history.day.light[i];
      light24hrData.setValue(i, 1, value);
    }
    temp1hrChart.draw(temp1hrData, temp1hrOptions);
    pressure1hrChart.draw(pressure1hrData, pressure1hrOptions);
    humidity1hrChart.draw(humidity1hrData, humidity1hrOptions);
    light1hrChart.draw(light1hrData, light1hrOptions);

    temp24hrChart.draw(temp24hrData, temp24hrOptions);
    pressure24hrChart.draw(pressure24hrData, pressure24hrOptions);
    humidity24hrChart.draw(humidity24hrData, humidity24hrOptions);
    light24hrChart.draw(light24hrData, light24hrOptions);

    setTimeout(updateHistorical, 5000);
}

$(document).ready(function() {
    $.getJSON("http://api.wunderground.com/api/68b5cab22065cb20/astronomy/q/USA/Sergeantsville.json", function(result) {
        var sunriseData = result.moon_phase.sunrise;
        var sunsetData = result.moon_phase.sunset;
        var moonriseData = result.moon_phase.moonrise;
        var moonsetData = result.moon_phase.moonset;
        $("#sunriseTime").html("<p>Sunrise: " + sunriseData.hour + ":" + sunriseData.minute + "</p>");
        $("#sunsetTime").html("<p>Sunset: " + sunsetData.hour + ":" + sunsetData.minute + "</p>");
        $("#moonriseTime").html("<p>Moonrise: " + moonriseData.hour + ":" + moonriseData.minute + "</p>");
        $("#moonsetTime").html("<p>Moonset: " + moonsetData.hour + ":" + moonsetData.minute + "</p>");

    });
});
