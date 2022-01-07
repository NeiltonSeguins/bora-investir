import { data } from './data.js';
import { getEmbedLink, getThumb} from './youtube.js';

function setVideo(index) {
    iframe.src = getEmbedLink(videos[index].id, true);
    setAtivo(index);
    sleep(1000);
    tituloVideo.innerHTML = `${index + 1}. ${videos[index].titulo}`;
}

function setAtivo(index) {
    itens.forEach(item => {
        item.style.backgroundColor = null;
        item.style.border = 'solid 2px #80ED99';
    });
    itens[index].classList.add('.youtube-playlist__lista__item--ativo');
    itens[index].style.backgroundColor = 'rgba(128, 237, 153, 60%)';
    itens[index].style.border = 'solid 2px #23013D';
}

function avancar(index) {
    if (index + 1 < videos.length) {
        setVideo(index + 1);
        return true;
    }
    return false;
}

function voltar(index) {
    if (index - 1 >= 0) {
        setVideo(index - 1);
        return true;
    }
    return false;
}

function sleep(milliseconds) {
    //Fonte: https://www.sitepoint.com/delay-sleep-pause-wait/
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

let index = 0;

const url = new URL(window.location);
const categoria = url.searchParams.get('categoria');

if (categoria == null) {
    window.location.href = '../'
}

const playlist = data[categoria];

const videos = playlist.videos;

const tituloPlaylist = document.querySelector('.playlist__titulo');
const lista = document.querySelector('.youtube-playlist__lista');
const tituloVideo = document.querySelector('.youtube-playlist__video__titulo');
const iframe = document.querySelector('.youtube-playlist__video').querySelector('iframe');

iframe.src = getEmbedLink(videos[index].id, false);
tituloPlaylist.innerHTML = playlist.titulo;
tituloVideo.innerHTML = `${index + 1}. ${videos[index].titulo}`;

const botaoEsquerdo = document.getElementById('playlist-left-button');
const botaoDireito = document.getElementById('playlist-right-button');

botaoDireito.addEventListener('click', () => {
    if (avancar(index)) {
        index++;
    }
});

botaoEsquerdo.addEventListener('click', () => {
    if (voltar(index)) {
        index--;
    }
})

for (let i=0; i<videos.length; i++) {
    const video = document.createElement('div');
    video.classList.add('youtube-playlist__lista__item');
    
    video.innerHTML = `<div class=youtube-playlist__lista__item__thumb></div>
                        <h3 class=youtube-playlist__lista__item__titulo>${i+1}. ${videos[i].titulo}</h3>`

    const thumb = video.querySelector('.youtube-playlist__lista__item__thumb');
    thumb.style.backgroundImage = `url('${getThumb(videos[i].id)}')`;
    
    lista.appendChild(video);
    
    video.addEventListener('click', () => {
        setVideo(i);
        index = i;
    });
}

const itens = document.querySelectorAll('.youtube-playlist__lista__item');
setAtivo(index, itens);