import { cor1, cor2 } from "./cores.js";
import { h2, h3 } from "./controller.js";

export const grafico1 = () => {
    h2.innerHTML = "Quem mais investe é a população masculina ou feminina?";
    h3.innerHTML = "No Maranhão <span>63%</span> da população <span>masculina</span> investe, enquanto a <span>feminina</span> fica atrás, somando <span>37%.</span>";

    const ctx = document.getElementById('grafico').getContext('2d');
    const grafico = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Masculino',
                'Feminino'
            ],
            datasets: [{
                data: [63, 37],
                backgroundColor: [
                    cor1,
                    cor2
                ],
            }]
        },
        plugins: [ChartDataLabels],
        options: {
            rotation: -136,
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
                    position: 'bottom',
                    labels: {
                        boxWidth: 30,
                    },
                },
            },
        },
    })
}