// ArduWeather
// Adam Zeloof
// http://adam.zeloof.xyz
// 7/30/2016

google.charts.load('current', {
    'packages': ['gauge', 'corechart']
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

    rainData = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Depth (in)', 0]
    ])

    windData = google .visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Speed (mph)', 0]
    ])

    temp1hrData = google.visualization.arrayToDataTable([
        ['Minutes', ''],
        ['-60', 0],
        ['-55', 0],
        ['-50', 0],
        ['-45', 0],
        ['-40', 0],
        ['-35', 0],
        ['-30', 0],
        ['-25', 0],
        ['-20', 0],
        ['-15', 0],
        ['-10', 0],
        ['-5', 0],
        ['0', 0]
    ]);
    humidity1hrData = google.visualization.arrayToDataTable([
        ['Minutes', ''],
        ['-60', 0],
        ['-55', 0],
        ['-50', 0],
        ['-45', 0],
        ['-40', 0],
        ['-35', 0],
        ['-30', 0],
        ['-25', 0],
        ['-20', 0],
        ['-15', 0],
        ['-10', 0],
        ['-5', 0],
        ['0', 0]
    ]);
    pressure1hrData = google.visualization.arrayToDataTable([
        ['Minutes', ''],
        ['-60', 0],
        ['-55', 0],
        ['-50', 0],
        ['-45', 0],
        ['-40', 0],
        ['-35', 0],
        ['-30', 0],
        ['-25', 0],
        ['-20', 0],
        ['-15', 0],
        ['-10', 0],
        ['-5', 0],
        ['0', 0]
    ]);
    light1hrData = google.visualization.arrayToDataTable([
        ['Minutes', ''],
        ['-60', 0],
        ['-55', 0],
        ['-50', 0],
        ['-45', 0],
        ['-40', 0],
        ['-35', 0],
        ['-30', 0],
        ['-25', 0],
        ['-20', 0],
        ['-15', 0],
        ['-10', 0],
        ['-5', 0],
        ['0', 0]
    ]);

    temp24hrData = google.visualization.arrayToDataTable([
        ['Hours', ''],
        ['-24', 0],
        ['-23', 0],
        ['-22', 0],
        ['-21', 0],
        ['-20', 0],
        ['-19', 0],
        ['-18', 0],
        ['-17', 0],
        ['-16', 0],
        ['-15', 0],
        ['-14', 0],
        ['-13', 0],
        ['-12', 0],
        ['-11', 0],
        ['-10', 0],
        ['-9', 0],
        ['-8', 0],
        ['-7', 0],
        ['-6', 0],
        ['-5', 0],
        ['-4', 0],
        ['-3', 0],
        ['-2', 0],
        ['-1', 0],
        ['0', 0]
    ]);
    humidity24hrData = google.visualization.arrayToDataTable([
        ['Hours', ''],
        ['-24', 0],
        ['-23', 0],
        ['-22', 0],
        ['-21', 0],
        ['-20', 0],
        ['-19', 0],
        ['-18', 0],
        ['-17', 0],
        ['-16', 0],
        ['-15', 0],
        ['-14', 0],
        ['-13', 0],
        ['-12', 0],
        ['-11', 0],
        ['-10', 0],
        ['-9', 0],
        ['-8', 0],
        ['-7', 0],
        ['-6', 0],
        ['-5', 0],
        ['-4', 0],
        ['-3', 0],
        ['-2', 0],
        ['-1', 0],
        ['0', 0]
    ]);
    pressure24hrData = google.visualization.arrayToDataTable([
        ['Hours', ''],
        ['-24', 0],
        ['-23', 0],
        ['-22', 0],
        ['-21', 0],
        ['-20', 0],
        ['-19', 0],
        ['-18', 0],
        ['-17', 0],
        ['-16', 0],
        ['-15', 0],
        ['-14', 0],
        ['-13', 0],
        ['-12', 0],
        ['-11', 0],
        ['-10', 0],
        ['-9', 0],
        ['-8', 0],
        ['-7', 0],
        ['-6', 0],
        ['-5', 0],
        ['-4', 0],
        ['-3', 0],
        ['-2', 0],
        ['-1', 0],
        ['0', 0]
    ]);
    light24hrData = google.visualization.arrayToDataTable([
        ['Hours', ''],
        ['-24', 0],
        ['-23', 0],
        ['-22', 0],
        ['-21', 0],
        ['-20', 0],
        ['-19', 0],
        ['-18', 0],
        ['-17', 0],
        ['-16', 0],
        ['-15', 0],
        ['-14', 0],
        ['-13', 0],
        ['-12', 0],
        ['-11', 0],
        ['-10', 0],
        ['-9', 0],
        ['-8', 0],
        ['-7', 0],
        ['-6', 0],
        ['-5', 0],
        ['-4', 0],
        ['-3', 0],
        ['-2', 0],
        ['-1', 0],
        ['0', 0]
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
        max: 105,
        majorTicks: ['95', '', '', '', '', '', '', '', '', '', '105'],
        minorTicks: 5
    };

    lightOptions = {
        width: 800,
        height: 240,
        min: 0,
        max: 10,
        majorTicks: ['0', '', '', '', '', '', '', '', '', '', '10'],
        minorTicks: 5
    };

    windOptions = {
      width: 800,
      height: 240,
      min: 0,
      max: 10,
      majorTicks: ['0', '', '', '', '', '', '', '', '', '', '40'],
      minorTicks: 5
    };

    rainOptions = {
      title: "Rain (inches)",
      width: 200,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };

    temp1hrOptions = {
        title: 'Temperature',
        curveType: 'function',
        vAxes: {
            0: {
                title: '°F'
            }
        },
        hAxes: {
            0: {
                title: 'Minutes'
            }
        },
        legend: {
            position: 'none'
        }
    };
    humidity1hrOptions = {
        title: 'Humidity',
        curveType: 'function',
        vAxes: {
            0: {
                title: '%'
            }
        },
        hAxes: {
            0: {
                title: 'Minutes'
            }
        },
        legend: {
            position: 'none'
        }
    };
    pressure1hrOptions = {
        title: 'Pressure',
        curveType: 'function',
        vAxes: {
            0: {
                title: 'kPa'
            }
        },
        hAxes: {
            0: {
                title: 'Minutes'
            }
        },
        legend: {
            position: 'none'
        }
    };
    light1hrOptions = {
        title: 'Light',
        curveType: 'function',
        vAxes: {
            0: {
                title: 'Light'
            }
        },
        hAxes: {
            0: {
                title: 'Minutes'
            }
        },
        legend: {
            position: 'none'
        }
    };

    temp24hrOptions = {
        title: 'Temperature',
        curveType: 'function',
        vAxes: {
            0: {
                title: '°F'
            }
        },
        hAxes: {
            0: {
                title: 'Hours'
            }
        },
        legend: {
            position: 'none'
        }
    };
    humidity24hrOptions = {
        title: 'Humidity',
        curveType: 'function',
        vAxes: {
            0: {
                title: '%'
            }
        },
        hAxes: {
            0: {
                title: 'Hours'
            }
        },
        legend: {
            position: 'none'
        }
    };
    pressure24hrOptions = {
        title: 'Pressure',
        curveType: 'function',
        vAxes: {
            0: {
                title: 'kPa'
            }
        },
        hAxes: {
            0: {
                title: 'Hours'
            }
        },
        legend: {
            position: 'none'
        }
    };
    light24hrOptions = {
        title: 'Light',
        curveType: 'function',
        vAxes: {
            0: {
                title: 'Light'
            }
        },
        hAxes: {
            0: {
                title: 'Hours'
            }
        },
        legend: {
            position: 'none'
        }
    };

    tempGauge = new google.visualization.Gauge(document.getElementById('tempGauge'));
    humidityGauge = new google.visualization.Gauge(document.getElementById('humidityGauge'));
    pressureGauge = new google.visualization.Gauge(document.getElementById('pressureGauge'));
    lightGauge = new google.visualization.Gauge(document.getElementById('lightGauge'));
    rainGauge = new google.visualization.ColumnChart(document.getElementById('rainGauge'));
    windGauge = new google.visualization.Gauge(document.getElementById('windGauge'));

    temp1hrChart = new google.visualization.LineChart(document.getElementById('temp1hrChart'));
    humidity1hrChart = new google.visualization.LineChart(document.getElementById('humidity1hrChart'));
    pressure1hrChart = new google.visualization.LineChart(document.getElementById('pressure1hrChart'));
    light1hrChart = new google.visualization.LineChart(document.getElementById('light1hrChart'));

    temp24hrChart = new google.visualization.LineChart(document.getElementById('temp24hrChart'));
    humidity24hrChart = new google.visualization.LineChart(document.getElementById('humidity24hrChart'));
    pressure24hrChart = new google.visualization.LineChart(document.getElementById('pressure24hrChart'));
    light24hrChart = new google.visualization.LineChart(document.getElementById('light24hrChart'));

    tempGauge.draw(tempData, tempOptions);
    humidityGauge.draw(humidityData, humidityOptions);
    pressureGauge.draw(pressureData, pressureOptions);
    lightGauge.draw(lightData, lightOptions);
    rainGauge.draw(rainData, rainOptions);
    windGauge.draw(windData, windOptions);

    temp1hrChart.draw(temp1hrData, temp1hrOptions);
    humidity1hrChart.draw(humidity1hrData, humidity1hrOptions);
    pressure1hrChart.draw(pressure1hrData, pressure1hrOptions);
    light1hrChart.draw(light1hrData, light1hrOptions);

    temp24hrChart.draw(temp24hrData, temp24hrOptions);
    humidity24hrChart.draw(humidity24hrData, humidity24hrOptions);
    pressure24hrChart.draw(pressure24hrData, pressure24hrOptions);
    light24hrChart.draw(light24hrData, light24hrOptions);
}
