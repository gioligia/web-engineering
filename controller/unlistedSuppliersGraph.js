var ctx = document.getElementById("unlistedSuppliersGraph").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
          label: 'dataset 1',
          data: [318, 490],
          backgroundColor: ['#ff6b6b', '#c8d6e5'] ,
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
        rotation: 0.5 * Math.PI,
    }
});
