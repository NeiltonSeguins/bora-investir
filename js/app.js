const btnMostrarMais = document.querySelector(".container-mais");
const btnMostrarMenos = document.querySelector(".graficos__button--menos");
const div = document.querySelector("#show-graphs");

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
  div.style.display = "flex";
  btnMostrarMenos.style.display = "block";
});

btnMostrarMenos.addEventListener("click", () => {
  btnMostrarMenos.style.display = "none";
  div.style.display = "none";
  btnMostrarMais.style.display = "block";
});
