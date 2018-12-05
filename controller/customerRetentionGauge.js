var ctx = document.getElementById("customerRetentionGauge").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
          label: 'dataset 1',
          data: [92, 8],
          backgroundColor: ['#55efc4', '#c8d6e5'] ,
        }],
        labels: ['actual', 'missing']
    },
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        legend: {
            display: false
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        cutoutPercentage: 60,
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: function(tooltipItems, data) {
              return data.labels[tooltipItems.index] +': ' +data.datasets[0].data[tooltipItems.index] + '%';
            }
          }
        }
    }
});
