const btnMostrarMais = document.querySelector(".container-mais");
const btnMostrarMenos = document.querySelector(".graficos__button--menos");
const div = document.querySelector(".graficos");
const info = document.querySelector('.site-info');

document.addEventListener("DOMContentLoaded", nav);

function nav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

btnMostrarMais.addEventListener("click", () => {
  btnMostrarMais.style.display = "none";
  div.classList.remove("animate");
  btnMostrarMenos.style.display = "block";
  div.scrollIntoView();
});

btnMostrarMenos.addEventListener("click", () => {
  btnMostrarMenos.style.display = "none";
  div.classList.add("animate");
  btnMostrarMais.style.display = "block";
  info.scrollIntoView();
});
