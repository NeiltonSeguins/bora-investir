ctx = document.getElementById('graf-2').getContext('2d');

grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [{
            label: '16 a 24 anos',
            data: [21.74],
            backgroundColor: '#23013D',
            borderWidth: 1,
        },
        {
            label: '25 a 34 anos',
            data: [21.74],
            backgroundColor: '#372149'
        },
        {
            label: '35 a 44 anos',
            data: [28.26],
            backgroundColor: '#50049A'
        },
        {
            label: '45 a 59 anos',
            data: [17.39],
            backgroundColor: '#72449E'
        },
        {
            label:  'Mais de 60 anos',
            data: [8.7],
            backgroundColor: '#8A29C9'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Grupo de Investimento por Idade (%)",
            },
            legend: {
                position: 'bottom'
            }
        },
        barPercentage: 0.7
    }
});