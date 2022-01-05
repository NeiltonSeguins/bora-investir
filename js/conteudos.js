import { getEmbedLink, getThumb } from "./playlist/youtube.js";

const idsVideos = ['dJyJ77GkhBE', 't0RzA9-9RX0', 'D9i-0SxQeSU', 'J25ZMPx7J1s'];

const containers = document.querySelectorAll('.conteudos__lista__item');
const iframe = document.querySelector('.conteudos__video').querySelector('iframe');

let i = 0;
containers.forEach(container => {
    const id = idsVideos[i];
    if (id) {
        container.style.backgroundImage = `url('${getThumb(idsVideos[i])}')`;
    } else {
        container.style.backgroundImage = null;
        container.style.cursor = 'default';
    }
    
    container.addEventListener('click', () => {
        const index = Array.prototype.indexOf.call(containers, container);
        const id = idsVideos[index];
        if (id) {
            const link = getEmbedLink(id, true);
            if (iframe.src != link) {
                iframe.src = link;
            }
            containers.forEach(c => {
                c.classList.remove('conteudos__lista__item--ativo');
            });
            container.classList.add('conteudos__lista__item--ativo');
        }
    });
    i++;
});