import { cor1, cor2, cor3, cor4, cor5 } from './cores.js';
import { h2, h3 } from './controller.js';

export const grafico2 = () => {
    h2.innerHTML = "Qual é em média a idade do investidor maranhense?";
    h3.innerHTML = "Adultos com idade entre <span>25 a 34 anos</span> são os principais investidores.";

    const ctx = document.getElementById('grafico').getContext('2d');
    const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [''],
            fullSize: true,
            datasets: [{
                label: '16 a 24 anos',
                data: [21.74],
                backgroundColor: cor1,
                categoryPercentage: 1,
                barPercentage: 0.6
            },
            {
                label: '25 a 34 anos',
                data: [21.74],
                backgroundColor: cor2,
                categoryPercentage: 1,
                barPercentage: 0.6
            },
            {
                label: '35 a 44 anos',
                data: [28.26],
                backgroundColor: cor3,
                categoryPercentage: 1,
                barPercentage: 0.6
            },
            {
                label: '45 a 59 anos',
                data: [17.39],
                backgroundColor: cor4,
                categoryPercentage: 1,
                barPercentage: 0.6
            },
            {
                label:  'Mais de 60 anos',
                data: [8.7],
                backgroundColor: cor5,
                categoryPercentage: 1,
                barPercentage: 0.6
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Grupo de Investimento por Idade (%)",
                },
                legend: {
                    position: 'bottom',
                    align: 'start',
                    labels: {
                        boxWidth: 30,
                    },
                }
            },
            barPercentage: 0.7,
            responsive: true
        },
    });
    }