var ctx = document.getElementById("inventoryGraph").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: 'dataset 1',
            data: [11.1, 10.8, 11.4, 12.8, 11.3, 11.7, 10.1, 12, 10.5, 11.0, 12, 12.5],
            borderColor: 'rgba(255,99,132,1)' ,
            borderWidth: 1,
            fill: false,
        }]
    },
    options: {
        scales: {
            yAxes: [{
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
              return data.datasets[0].data[tooltipItems.index] + 'K';
            }
          }
        }
    }
});
