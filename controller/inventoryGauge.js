var ctx = document.getElementById("inventoryGauge").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
          label: 'dataset 1',
          data: [25, 25, 25, 25],
          backgroundColor: ['#55efc4', '#81ecec', '#74b9ff', '#a29bfe'] ,
        }]
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
        events: []
    }
});
