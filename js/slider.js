function proximo() {
    if (index + 1 < cards.length) {
        index++;
        slide(cards[index]);
    }
}

function anterior() {
    if (index > 0) {
        index--;
        slide(cards[index]);
    }
}

function slide(card) {
    cards.forEach(c => {
        c.classList.add('tipo-investidor__cards__individual-card__titulo--hidden');
    });
    card.classList.remove('tipo-investidor__cards__individual-card__titulo--hidden');
}

var index = 0;
const cards = document.querySelectorAll('.tipo-investidor__cards__individual-card');
const setaEsquerda = document.querySelector('.slider__seta--esquerda');
const setaDireita = document.querySelector('.slider__seta--direita');

setaDireita.onclick = proximo;
setaEsquerda.onclick = anterior;