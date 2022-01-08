import { cor1, cor2, cor3, cor4, cor5, cor6, cor7 } from './cores.js';
import { h2, h3 } from './controller.js';

export const grafico5 = () => {
    h2.innerHTML = "Qual é a desvantagem em aplicar dinheiro para o maranhense?";
    h3.innerHTML = "Alguns consideram que <span>não há desvantagem</span>, mas outros afirmam que o <span>baixo retorno financeiro</span> é uma desvantagem.";

    const ctx = document.getElementById('grafico').getContext('2d');
    const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [{
                label: 'Não tem desvantagem',
                data: [28.26],
                backgroundColor: cor1,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label: 'O baixo retorno financeiro',
                data: [26.09],
                backgroundColor: cor2,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label: 'Não sabe',
                data: [19.57],
                backgroundColor: cor3,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label: 'Outras respostas',
                data: [6.52],
                backgroundColor: cor4,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label:  'Resgatar o dinheiro após um longo período',
                data: [6.52],
                backgroundColor: cor5,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label:  'Perder o investimento pela movimentação econômica',
                data: [4.35],
                backgroundColor: cor6,
                categoryPercentage: 1,
                barPercentage: 0.7
            },
            {
                label:  'Precisar de quantia mínima para investir',
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
                    text: "Desvantagem em aplicar dinheiro (%)",
                },
                datalabels: {
                    font: {
                        weight: 'bold'
                    },
                    anchor: 'end',
                    align: 'end',
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