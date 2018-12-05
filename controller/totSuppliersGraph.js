var ctx = document.getElementById("totSuppliersGraph").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
          label: 'dataset 1',
          data: [804],
          backgroundColor: ['#0abde3'] ,
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
