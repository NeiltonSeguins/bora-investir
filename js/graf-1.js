let ctx = document.getElementById('grafico1').getContext('2d')

let grafico = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Masculino',
            'Feminino'
        ],
        datasets: [{
            data: [63, 37],
            backgroundColor: [
                '#57CC99',
                '#2D556F'
            ],
        }]
    },
    plugins: [ChartDataLabels],
    options: {
        rotation: -135,
        plugins: {
            datalabels: {
                font: {
                    size: 15,
                    weight: 'bold'
                },
                color: '#fff',
                formatter: function(value) {
                    return value + '%';
                },
            },
            legend: {
                position: 'bottom'
            },
        },
    },
})