import { cor1, cor2, cor3, cor4, cor5, cor6 } from './cores.js';
import { h2, h3 } from './controller.js';

export const grafico2 = () => {
    h2.innerHTML = "Qual é em média a idade do investidor maranhense?";
    h3.innerHTML = "Adultos com idade entre <span>18 e 25 anos</span> são os principais investidores.";

    const ctx = document.getElementById('grafico').getContext('2d');
    const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [''],
            fullSize: true,
            datasets: [{
                label: '18 a 25 anos',
                data: [43.48],
                backgroundColor: cor1,
                categoryPercentage: 1,
                barPercentage: 0.6
            },
            {
                label: '40 a 50 anos',
                data: [17.39],
                backgroundColor: cor2,
                categoryPercentage: 1,
                barPercentage: 0.6
            },
            {
                label: '30 a 40 anos',
                data: [17.39],
                backgroundColor: cor3,
                categoryPercentage: 1,
                barPercentage: 0.6
            },
            {
                label: '25 a 30 anos',
                data: [8.7],
                backgroundColor: cor4,
                categoryPercentage: 1,
                barPercentage: 0.6
            },
            {
                label:  'Mais de 50 anos',
                data: [8.7],
                backgroundColor: cor5,
                categoryPercentage: 1,
                barPercentage: 0.6
            },
            {
                label:  'Menos de 18 anos',
                data: [4.35],
                backgroundColor: cor6,
                categoryPercentage: 1,
                barPercentage: 0.6
            }]
        },
        plugins: [ChartDataLabels],
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Grupo de Investimento por Idade (%)",
                },
                datalabels: {
                    font: {
                        weight: 'bold'
                    },
                    anchor: 'end',
                    align: 'end',
                    formatter: function(value) {
                        return value.toFixed(2) + '%';
                    },
                },
                legend: {
                    position: 'bottom',
                    align: 'start',
                    labels: {
                        boxWidth: 30,
                    },
                },
            },
            barPercentage: 0.7,
            responsive: true
        },
    });
    }