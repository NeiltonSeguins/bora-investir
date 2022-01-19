import { cor1, cor2, cor3, cor4, cor5, cor6, cor7 } from './cores.js';
import { h2, h3 } from './controller.js';

export const grafico4 = () => {
    h2.innerHTML = "Quais são os tipos de investimentos conhecidos?";
    h3.innerHTML = "Boa parte dos maranhenses <span>não conhece</span> nenhum tipo de investimento.";

    const ctx = document.getElementById('grafico').getContext('2d');
    const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [{
                label: 'Não conhece nenhum tipo',
                data: [56.52],
                backgroundColor: cor1,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label: 'Outras respostas',
                data: [13.04],
                backgroundColor: cor2,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label: 'Caderneta de poupança',
                data: [10.87],
                backgroundColor: cor3,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label: 'Fundos de investimento',
                data: [8.7],
                backgroundColor: cor4,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label:  'Tesouro direto',
                data: [4.35],
                backgroundColor: cor5,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label:  'Compra e venda de imóveis',
                data: [4.35],
                backgroundColor: cor6,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label:  'Ações na bolsa de valores',
                data: [2.17],
                backgroundColor: cor7,
                categoryPercentage: 1,
                barPercentage: 0.7
            }]
        },
        plugins: [ChartDataLabels],
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Tipos de investimentos conhecidos (%)",
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
            barPercentage: 0.7
        }
    });
}