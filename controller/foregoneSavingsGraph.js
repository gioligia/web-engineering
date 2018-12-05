var ctx = document.getElementById("foregoneSavingsGraph").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: 'dataset 1',
            data: [90, 90, 88.7, 91.8, 92],
            borderColor: '#ff6b6b' ,
            borderWidth: 1,
            fill: false,
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
        scales: {
            yAxes: [{
              display: false,
                ticks: {
                    beginAtZero: false
                },
                gridLines: {
                  display: false
                }
            }],
            xAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }]
        },
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        legend: {
            display: false
        }
    }
});
