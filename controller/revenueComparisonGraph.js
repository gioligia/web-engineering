var ctx = document.getElementById("revenueComparisonGraph").getContext('2d');

var chart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["January", "February", "March"],
        datasets: [{
            label: 'Last Period',
            data: [44, 210, 350],
            backgroundColor: '#ffeaa7' ,
            borderColor: '#ffeaa7' ,
            borderWidth: 1
        },{
            label: 'Current Period',
            data: [55, 250, 400],
            backgroundColor: 'rgba(255, 99, 132, 0.8)' ,
            borderColor: 'rgba(255,99,132,1)' ,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
          position: 'bottom'
        }
    }
});
