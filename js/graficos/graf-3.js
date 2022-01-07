import { cor1, cor2, cor3, cor4, cor5, cor6, cor7 } from './cores.js';
import { h2, h3 } from './controller.js';

export const grafico3 = () => {
    h2.innerHTML = "O maranhense conseguiu economizar no último ano?";
    h3.innerHTML = "Infelizmente, <span>a grande maioria</span> dos respondentes <span>não conseguiu economizar</span>";

    const ctx = document.getElementById('grafico').getContext('2d');
    const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [{
                label: 'Não conseguiu economizar',
                data: [63.04],
                backgroundColor: cor1,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label: 'Diminuiu gastos',
                data: [17.39],
                backgroundColor: cor2,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label: 'Outras respostas',
                data: [4.35],
                backgroundColor: cor3,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label: 'Trabalhou mais',
                data: [4.35],
                backgroundColor: cor4,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label:  'Evitou compras desnecessárias',
                data: [4.35],
                backgroundColor: cor5,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label:  'Controlou despesas',
                data: [4.35],
                backgroundColor: cor6,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label:  'Pesquisou preços',
                data: [2.17],
                backgroundColor: cor7,
                categoryPercentage: 1,
                barPercentage: 0.7
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Conseguiu economizar (%)",
                },
                legend: {
                    position: 'bottom',
                    align: 'start',
                    labels: {
                        boxWidth: 30,
                    },
                }
            },
            barPercentage: 0.7
        }
    });
}