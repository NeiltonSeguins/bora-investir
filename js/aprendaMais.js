const secao = document.querySelector('.aprenda-mais');
const botao = document.querySelector('.aprenda-mais__botao');
const hiddenCards = document.querySelectorAll('.hidden');

const matchMediaMax = window.matchMedia("(max-width: 768px)");
const matchMediaMin = window.matchMedia("(min-width: 769px)");

function ajustar() {
    if (matchMediaMax.matches) {
        hiddenCards.forEach(card => {
            card.style.display = 'none';
            botao.innerText = 'Mais';
            botao.onclick = show;
        });
    }
    
    if (matchMediaMin.matches) {
        hiddenCards.forEach(card => {
            card.style.display = 'block';
        });
    }
}

ajustar();
window.onresize = ajustar;

function show() {
    hiddenCards.forEach(card =>  {
        card.style.display = 'block';
        botao.innerText = 'Menos';
        botao.onclick = hide;
    });
}

function hide() {
    hiddenCards.forEach(card =>  {
        card.style.display = 'none';
        botao.innerText = 'Mais';
        secao.scrollIntoView();
        botao.onclick = show;
    });
}