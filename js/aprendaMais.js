const secao = document.querySelector('.aprenda-mais');
const botao = document.querySelector('.aprenda-mais__botao');
const hiddenCards = document.querySelectorAll('.aprenda-mais__item--hidden');

function show() {
    hiddenCards.forEach(card =>  {
        card.classList.remove('aprenda-mais__item--hidden');
        botao.innerText = 'Menos';
        botao.onclick = hide;
    });
}

function hide() {
    hiddenCards.forEach(card => {
        card.classList.add('aprenda-mais__item--hidden');
        botao.innerText = 'Mais';
        secao.scrollIntoView();
        botao.onclick = show;
    });
}

botao.onclick = show;