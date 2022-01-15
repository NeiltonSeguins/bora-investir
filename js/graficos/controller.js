import { grafico1 } from "./graf-1.js";
import { grafico2 } from "./graf-2.js";
import { grafico3 } from "./graf-3.js";
import { grafico4 } from "./graf-4.js";
import { grafico5 } from "./graf-5.js";

function createNewCanvas(width, height) {
    //Substitui canvas, permitindo chamada de novo gráfico
    const div = document.querySelector('.graficos__grafico');
    div.innerHTML = `<canvas id="grafico" width="${width}" height="${height}"></canvas>`
}

function proximo() {
    if (index + 1 < graficos.length) {
        index++;
        createNewCanvas(350, 400);
        atual = graficos[index];
        atual();
    }
}

function anterior() {
    if (index - 1 >= 0) {
        index--;
        createNewCanvas(350, 400);
        atual = graficos[index]
        atual();
    }
}

export const h2 = document.querySelector('.graficos__titulo');
export const h3 = document.querySelector('.graficos__info--h3')

const graficos = [grafico1, grafico2, grafico3, grafico4, grafico5];

let index = 0;
let atual = graficos[index];
atual();

const botaoEsquerdo = document.getElementById('seta-esquerda');
const botaoDireito = document.getElementById('seta-direita');
botaoEsquerdo.onclick = anterior;
botaoDireito.onclick = proximo;