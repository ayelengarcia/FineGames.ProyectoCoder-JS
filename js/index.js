const contenedorCarousel = document.querySelector(".carousel-inner"); // Carrousel principal

const contenedorJuegos = document.querySelector(".explorar");

const btnCarousel = document.querySelectorAll(".btn-carousel");
const btnCarousel2 = document.querySelectorAll(".btn-carousel2");
const btnCarousel3 = document.querySelectorAll(".btn-carousel3");
const btnCarouselOcultar = document.querySelectorAll(".ocultar");

const contenidoSlide = document.querySelector(".contenidoSlide");
const contenidoSlide2 = document.querySelector(".contenidoSlide2");
const contenidoSlide3 = document.querySelector(".contenidoSlide3");

const URLcarousel = "bbdd/carousel.json";
const URLjuegos = "bbdd/juegos.json";
const CAROUSEL = [];
const JUEGOS = [];

fetch(URLcarousel)
  .then((response) => (data = response.json()))
  .then((data) => CAROUSEL.push(...data))
  .then(() => recorrerObjetos(CAROUSEL, returnCarousel, contenedorCarousel));

fetch(URLjuegos)
  .then((response) => (data = response.json()))
  .then((data) => JUEGOS.push(...data))
  .then(() => recorrerObjetos(mostrarPorCategoria("Oferta"), returnJuego, contenidoSlide))
  .then(() => recorrerObjetos(mostrarPorCategoria("Gratuito"), returnJuego, contenidoSlide2))
  .then(() => recorrerObjetos(mostrarPorCategoria("Popular"), returnJuego, contenidoSlide3))
  .then(() => recorrerBtnsCarrousel(btnCarousel, contenidoSlide))
  .then(() => recorrerBtnsCarrousel(btnCarousel2, contenidoSlide2))
  .then(() => recorrerBtnsCarrousel(btnCarousel3, contenidoSlide3))
  .then(() => vistaButtonsCarousel())
  .then(() => agregarAlCarrito(JUEGOS))
  .catch(error => contenedorJuegos.innerHTML = retornError())

function mostrarPorCategoria(categoria) {
  let juegosCategoria = categoria;
  let encontrado = JUEGOS.filter((juego) => juego.categoria === juegosCategoria);
  return encontrado;
}

function recorrerBtnsCarrousel(button, slideCarrousel) {
  button.forEach((btn, i) => {
    button[i].addEventListener("click", () => {
      let posicion = i;
      let operacion = posicion * -50;

      slideCarrousel.style.transform = `translateX(${operacion}%)`;
      slideCarrousel.style.transition = "1s";

      button.forEach((btn, i) => button[i].classList.remove("activo"));
      button[i].classList.add("activo");
    });
  });
}


function vistaButtonsCarousel() {
  if (window.innerWidth > 768) {
    btnCarouselOcultar.forEach((btn, i) => btnCarouselOcultar[i].classList.add("d-none"));
  } else if (window.innerWidth < 768) {
    btnCarouselOcultar.forEach((btn, i) => btnCarouselOcultar[i].classList.remove("d-none"));
  }
  window.onresize = function (event) {
    if (window.innerWidth > 768) {
      btnCarouselOcultar.forEach((btn, i) => btnCarouselOcultar[i].classList.add("d-none"));
    } else {
      btnCarouselOcultar.forEach((btn, i) => btnCarouselOcultar[i].classList.remove("d-none"));
    }
  };
}