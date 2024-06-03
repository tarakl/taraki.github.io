document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el contexto del canvas
    var ctx = document.getElementById('myChart').getContext('2d');
    // Crea la instancia de Chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Solar', 'Eólica', 'Hidroeléctrica', 'Geotérmica', 'Nuclear'],
            datasets: [{
                label: 'Costo en $/kWh',
                data: [0.05, 0.06, 0.03, 0.08, 0.07],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
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
            }
        }
    });
});