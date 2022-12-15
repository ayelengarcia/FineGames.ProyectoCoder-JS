const contenedorCarousel = document.querySelector(".carousel-inner"); // Carrousel principal

const contenedorJuegos = document.querySelector(".explorar");

const contenidoSlide = document.querySelector(".contenidoSlide");
const contenidoSlide2 = document.querySelector(".contenidoSlide2");
const contenidoSlide3 = document.querySelector(".contenidoSlide3");
const contenidoSlide4 = document.querySelector(".contenidoSlide4");
const contenidoSlide5 = document.querySelector(".contenidoSlide5");
const contenidoSlide6 = document.querySelector(".contenidoSlide6");

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
  .then(() => recorrerObjetos(mostrarPorCategoria("Oferta").splice(5), returnJuego, contenidoSlide2))
  .then(() => recorrerObjetos(mostrarPorCategoria("Gratuito"), returnJuego, contenidoSlide3))
  .then(() => recorrerObjetos(mostrarPorCategoria("Gratuito").splice(5), returnJuego, contenidoSlide4))
  .then(() => recorrerObjetos(mostrarPorCategoria("Popular"), returnJuego, contenidoSlide5))
  .then(() => recorrerObjetos(mostrarPorCategoria("Popular").splice(5), returnJuego, contenidoSlide6))
  .then(() => agregarAlCarrito(JUEGOS))
  .catch(error => contenedorJuegos.innerHTML = retornError())

function mostrarPorCategoria(categoria) {
  let juegosCategoria = categoria;
  let encontrado = JUEGOS.filter(
    (juego) => juego.categoria === juegosCategoria
  );
  return encontrado;
}