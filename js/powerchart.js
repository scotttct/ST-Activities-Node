var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Avg Power in WATTS Over Time',
            backgroundColor: '#0C7C71',
            borderColor: '#29697C',
            data: [110, 125, 118, 128, 125, 130, 134, 135, 138, 135, 140, 139]
        }]
    },

    // Configuration options go here
    options: {}
});