function proximo() {
    if (index + 1 < cards.length) {
        index++;
        show(cards[index]);
    }
}

function anterior() {
    if (index > 0) {
        index--;
        show(cards[index]);
    }
}

function show(card) {
    cards.forEach(c => {
        c.style.display = 'none';
    });
    card.style.display = 'block';
}

function ajustar() {
    if (matchMediaMax.matches) {
        cards.forEach(card => {
            card.style.display = 'none';
        });
        cards[index].style.display = 'block';
    }
    
    if (matchMediaMin.matches) {
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }
}

var index = 0;
const cards = document.querySelectorAll('.tipo-investidor__cards__individual-card');
const setaEsquerda = document.querySelector('.slider__seta--esquerda');
const setaDireita = document.querySelector('.slider__seta--direita');

setaDireita.onclick = proximo;
setaEsquerda.onclick = anterior;
window.onresize = ajustar;