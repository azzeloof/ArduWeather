// ArduWeather
// Adam Zeloof
// http://adam.zeloof.xyz
// 7/30/2016

google.charts.load('current', {
    'packages': ['gauge']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    tempData = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Temp. °F', 0]
    ]);

    humidityData = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Humidity', 0]
    ]);

    pressureData = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Pressure', 0]
    ]);

    lightData = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['UV Index', 0]
    ]);

    tempOptions = {
        width: 800,
        height: 240,
        greenColor: '#336BFF',
        greenFrom: 0,
        greenTo: 32,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 80,
        yellowTo: 90,
        minorTicks: 5,
        min: 0,
        max: 100,
    };

    humidityOptions = {
        width: 800,
        height: 240,
        greenFrom: 30,
        greenTo: 40,
        redFrom: 40,
        redTo: 100,
        yellowFrom: 0,
        yellowTo: 30,
        minorTicks: 5
    };

    pressureOptions = {
        width: 800,
        height: 240,
        min: 95,
        max:105,
        majorTicks: ['95','','','','','','','','','','105'],
        minorTicks: 5
    };

    lightOptions = {
        width: 800,
        height: 240,
        min: 0,
        max: 10,
        majorTicks: ['0','','','','','','','','','','10'],
        minorTicks: 5
    };

    tempGauge = new google.visualization.Gauge(document.getElementById('tempGauge'));
    humidityGauge = new google.visualization.Gauge(document.getElementById('humidityGauge'));
    pressureGauge = new google.visualization.Gauge(document.getElementById('pressureGauge'));
    lightGauge = new google.visualization.Gauge(document.getElementById('lightGauge'));

    tempGauge.draw(tempData, tempOptions);
    humidityGauge.draw(humidityData, humidityOptions);
    pressureGauge.draw(pressureData, pressureOptions);
    lightGauge.draw(lightData, lightOptions);
}
