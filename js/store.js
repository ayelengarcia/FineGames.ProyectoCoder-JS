const contenedorJuegos = document.querySelector(".contenedor-juegos");
const inputSearch = document.querySelector("input#inputSearch");

const URLjuegos = "bbdd/juegos.json";
const JUEGOS = [];

fetch(URLjuegos)
  .then((response) => (data = response.json()))
  .then((data) => JUEGOS.push(...data))
  .then(() => recorrerObjetos(JUEGOS, returnJuego, contenedorJuegos))
  .then(() => agregarAlCarrito(JUEGOS))
  .catch(error => contenedorJuegos.innerHTML = retornError())


function filtrarJuegos() {
  let encontrados = JUEGOS.filter((juego) => juego.titulo.toUpperCase().includes(inputSearch.value.toUpperCase().trim())
  );
  if (encontrados.length > 0) {
    recorrerObjetos(encontrados, returnJuego, contenedorJuegos);
  } 
}


inputSearch.addEventListener("search", () => {
  inputSearch.value.trim() != "" ? filtrarJuegos() : recorrerObjetos(JUEGOS, returnJuego, contenedorJuegos)
  agregarAlCarrito(JUEGOS)
});