var ctx = document.getElementById("customerRetentionGraph").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: 'dataset 1',
            data: [90, 90, 88.7, 91.8, 92, 95, 93.2, 90.6, 91.6, 96, 91.3, 92],
            borderColor: 'rgba(255,99,132,1)' ,
            borderWidth: 1,
            fill: false,
        }]
    },
    options: {
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
        },
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: function(tooltipItems, data) {
              return data.datasets[0].data[tooltipItems.index] + '%';
            }
          }
        }
    }
});
