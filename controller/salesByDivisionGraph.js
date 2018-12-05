var ctx = document.getElementById("salesByDivisionGraph").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
          data: [100, 60, 25],
          backgroundColor: ['#ff9ff3', '#48dbfb', '#ff9f43'] ,
        }],
        labels: ['Women', 'Men', 'Kids'],
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
