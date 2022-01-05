const botoes = document.querySelectorAll('.aprenda-mais__item');

const categorias = ["tesouroDireto", "cdb"];

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const index = Array.prototype.indexOf.call(botoes, botao);
        const categoria = categorias[index];
        if (categoria) {
            window.location.href = `playlist.html?categoria=${categoria}`;
        } else {
            window.location.href = '#';
        }
    });
});