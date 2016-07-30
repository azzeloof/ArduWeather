// ArduWeather
// Adam Zeloof
// http://adam.zeloof.xyz
// 7/30/2016

function refresh() {
    location.reload();
}

var weather;

var pressure1hrData;
var temp1hrData;
var humidity1hrData;
var light1hrData;

var temp1hrOptions;
var pressure1hrOptions;
var humidity1hrOptions;
var light1hrOptions;

var temp1hrChart;
var pressure1hrChart;
var humidity1hrChart;
var light1hrChart;

var tempData;
var humidityData;
var pressureData;
var lightData;
var windData;
var rainData;

var tempGauge;
var humidityGauge;
var pressureGauge;
var lightGauge;
var windGauge;
var rainGauge

var tempOptions;
var humidityOptions;
var pressureOptions;
var lightOptions;
var windOptions;
var rainOptions;

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById("clock").innerHTML =
        h + ":" + m;
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add a zero in front of numbers < 10
    return i;
}

function show(page) {
  document.getElementById('currentPage').style.display="none";
  document.getElementById('historicalPage').style.display="none";
  document.getElementById(page).style.display="block";
  updateLocal();
  updateHistorical();
}

function init() {
    startTime();
    //getAstroData();
}
