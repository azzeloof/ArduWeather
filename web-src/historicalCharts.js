// ArduWeather
// Adam Zeloof
// http://adam.zeloof.xyz
// 7/30/2016

google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
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

    temp1hrOptions = {
        title: 'Temperature',
        curveType: 'function',
        vAxes: {
          0: {title: '°F'}
        },
        hAxes : {
          0: {title: 'Minutes'}
        },
        legend: {
            position: 'none'
        }
    };
    humidity1hrOptions = {
        title: 'Humidity',
        curveType: 'function',
        vAxes: {
          0: {title: '%'}
        },
        hAxes : {
          0: {title: 'Minutes'}
        },
        legend: {
            position: 'none'
        }
    };
    pressure1hrOptions = {
        title: 'Pressure',
        curveType: 'function',
        vAxes: {
          0: {title: 'kPa'}
        },
        hAxes : {
          0: {title: 'Minutes'}
        },
        legend: {
            position: 'none'
        }
    };
    light1hrOptions = {
        title: 'Light',
        curveType: 'function',
        vAxes: {
          0: {title: 'Light'}
        },
        hAxes : {
          0: {title: 'Minutes'}
        },
        legend: {
            position: 'none'
        }
    };

    temp24hrOptions = {
        title: 'Temperature',
        curveType: 'function',
        vAxes: {
          0: {title: '°F'}
        },
        hAxes : {
          0: {title: 'Hours'}
        },
        legend: {
            position: 'none'
        }
    };
    humidity24hrOptions = {
        title: 'Humidity',
        curveType: 'function',
        vAxes: {
          0: {title: '%'}
        },
        hAxes : {
          0: {title: 'Hours'}
        },
        legend: {
            position: 'none'
        }
    };
    pressure24hrOptions = {
        title: 'Pressure',
        curveType: 'function',
        vAxes: {
          0: {title: 'kPa'}
        },
        hAxes : {
          0: {title: 'Hours'}
        },
        legend: {
            position: 'none'
        }
    };
    light24hrOptions = {
        title: 'Light',
        curveType: 'function',
        vAxes: {
          0: {title: 'Light'}
        },
        hAxes : {
          0: {title: 'Hours'}
        },
        legend: {
            position: 'none'
        }
    };

    temp1hrChart = new google.visualization.LineChart(document.getElementById('temp1hrChart'));
    humidity1hrChart = new google.visualization.LineChart(document.getElementById('humidity1hrChart'));
    pressure1hrChart = new google.visualization.LineChart(document.getElementById('pressure1hrChart'));
    light1hrChart = new google.visualization.LineChart(document.getElementById('light1hrChart'));

    temp24hrChart = new google.visualization.LineChart(document.getElementById('temp24hrChart'));
    humidity24hrChart = new google.visualization.LineChart(document.getElementById('humidity24hrChart'));
    pressure24hrChart = new google.visualization.LineChart(document.getElementById('pressure24hrChart'));
    light24hrChart = new google.visualization.LineChart(document.getElementById('light24hrChart'));

    temp1hrChart.draw(temp1hrData, temp1hrOptions);
    humidity1hrChart.draw(humidity1hrData, humidity1hrOptions);
    pressure1hrChart.draw(pressure1hrData, pressure1hrOptions);
    light1hrChart.draw(light1hrData, light1hrOptions);

    temp24hrChart.draw(temp24hrData, temp24hrOptions);
    humidity24hrChart.draw(humidity24hrData, humidity24hrOptions);
    pressure24hrChart.draw(pressure24hrData, pressure24hrOptions);
    light24hrChart.draw(light24hrData, light24hrOptions);
}
