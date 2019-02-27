var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'transparent',
            borderColor: 'blue',
            data: [0, 10, 5, 2, 20, 30, 45,0, 10, 5, 2, 20],
        }]
    },

    // Configuration options go here
    options: {}
});