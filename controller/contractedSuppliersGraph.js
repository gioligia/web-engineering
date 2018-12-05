var ctx = document.getElementById("contractedSuppliersGraph").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
          label: 'dataset 1',
          data: [490, 318],
          backgroundColor: ['#1dd1a1', '#c8d6e5'] ,
        }],
        labels: ['contracted', 'missing']
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
