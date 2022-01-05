function getEmbedLink(id, autoplay) {
    if (autoplay) {
        return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    return `https://www.youtube.com/embed/${id}`;
}

function getThumb(id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

const data = {
    "tesouroDireto": {
        titulo: "Tesouro Direto",
        videos: [
            {
                titulo: "O que é o Tesouro Direto? - Com certeza não é o que você está pensando.",
                id: "I7ySlkbGnig"
            }, 
            {
                titulo: "TESOURO DIRETO EM 3 PASSOS SIMPLES [para iniciantes]",
                id: "kwEuar3rJB0"
            },
            {
                titulo: "TUDO SOBRE TESOURO DIRETO! De 30 reais a UM MILHÃO!",
                id: "FrfbwyTl1so"
            },
            {
                titulo: "TESOURO DIRETO | O MELHOR TÍTULO PÚBLICO PARA INVESTIR!",
                id: "C0HoWPoGzkk"   
            }, 
            {
                titulo: "TESOURO DIRETO: 5 PASSOS PRÁTICOS pra investir todo mês!",
                id: "71WEvV8s46k"
            }
        ]
    },
    "cdb": {
        titulo: "Certificado de Depósito Bancário",
        videos: [
            {
                titulo: "Quer saber o que é CDB?",
                id: "5qBiwikm8Ys"
            },
            {
                titulo: "O que é CDB? E como investir NA PRÁTICA!",
                id: "_gZPnxywhjI"
            },
            {
                titulo: "Como investir em CDB? Saiba tudo sobre esse INVESTIMENTO!",
                id: "7TUWWN6AIeY"
            },
            {
                titulo: "O QUE É CDB: rendimento, como funciona e por que investir (2021) - Gustavo Cerbasi",
                id: "moErZPk_RFw"
            },
            {
                titulo: "INVESTIR em CDB com SEGURANÇA 🔒 Saiba TUDO: tipos, como escolher, rentabilidade, riscos e impostos",
                id: "f43Gx1Irxy0"
            },
        ]
    }
}

let index = 0;

const url = new URL(window.location);
const categoria = url.searchParams.get('categoria');
const playlist = data[categoria];

const videos = playlist.videos;

const tituloPlaylist = document.querySelector('.playlist__titulo');
const lista = document.querySelector('.youtube-playlist__lista');
const tituloVideo = document.querySelector('.youtube-playlist__video__titulo');
const iframe = document.querySelector('.youtube-playlist__video').querySelector('iframe');

tituloPlaylist.innerHTML = playlist.titulo;
tituloVideo.innerHTML = `${index + 1}. ${videos[index].titulo}`;

iframe.src = getEmbedLink(videos[index].id, false);

for (let i=0; i<videos.length; i++) {
    const video = document.createElement('div');
    video.classList.add('youtube-playlist__lista__item');
    
    video.innerHTML = `<div class=youtube-playlist__lista__item__thumb></div>
                        <h3 class=youtube-playlist__lista__item__titulo>${i+1}. ${videos[i].titulo}</h3>`

    const thumb = video.querySelector('.youtube-playlist__lista__item__thumb');
    thumb.style.backgroundImage = `url('${getThumb(videos[i].id)}')`;
    
    lista.appendChild(video);
    
    video.addEventListener('click', () => {
        tituloVideo.innerHTML = `${i + 1}. ${videos[i].titulo}`;
        iframe.src = getEmbedLink(videos[i].id, true);
        
        const itens = document.querySelectorAll('.youtube-playlist__lista__item');

        itens.forEach(item => {
            item.style.backgroundColor = null;
            item.style.border = 'solid 2px #80ED99';
        });
        
        itens[i].classList.add('.youtube-playlist__lista__item--ativo');
        itens[i].style.backgroundColor = 'rgba(128, 237, 153, 60%)';
        itens[i].style.border = 'solid 2px #23013D';

        index = i;
        localStorage.setItem('index', index);
    });
}

const itens = document.querySelectorAll('.youtube-playlist__lista__item');
itens[index].classList.add('.youtube-playlist__lista__item--ativo');
itens[index].style.backgroundColor = 'rgba(128, 237, 153, 60%)';
itens[index].style.border = 'solid 2px #23013D';