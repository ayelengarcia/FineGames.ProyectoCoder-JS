let ubicacionPrincipal = window.pageYOffset; //ocultarHeader

let link = document.getElementById("link"); //borderSelected submenu
let link2 = document.getElementById("link2"); //borderSelected submenu
contador = 0; //borderSelected submenu

let carrito = document.getElementById("carrito"); //selected carrito
contador = 0; //selected carrito

const contenedorJuegos = document.querySelector(".contenedor-juegos"); // RECORRER JUEGOS

//ocultarHeader
window.onscroll = function ocultarHeader() {
  let desplazar = window.pageYOffset;

  if (ubicacionPrincipal >= desplazar) {
    document.getElementById("header").style.top = "0";
    document.getElementById("header").style.transitionDuration = "1s";
  } else {
    document.getElementById("header").style.top = "-52px";
    document.getElementById("header").style.transitionDuration = "1s";
  }
  ubicacionPrincipal = desplazar;
};

//borderSelected submenu
link.addEventListener("click", () => {
  if (contador == 1) {
    link2.classList.remove("border");
    contador = 0;
  } else {
    link.classList.add("border");
    contador = 1;
  }
});

link2.addEventListener("click", () => {
  if (contador == 0) {
    link.classList.remove("border");
    link2.classList.add("border");
    contador = 1;
  } else {
    link2.classList.add("border");
    contador = 0;
  }
});

//selected carrito
carrito.addEventListener("click", () => {
  if (contador == 0) {
    document.getElementById("carrito").style.color = "#bc0b37";
    contador = 1;
  } else {
    document.getElementById("carrito").style.color = "#ffffff";
    contador = 0;
  }
});

// ----------------------- FUNCTIONS STORE-------------------------------//

// RECORRER JUEGOS
function allGamesHTML(array) {
  let contenido = "";
  if (array.length > 0) {
    array.forEach((juego) => {
      contenido += retornJuego(juego);
    });
    contenedorJuegos.innerHTML = contenido;
  }
}
allGamesHTML(JUEGOS);

//FIND
function buscarJuegos() {
  let resultado = [];

  let prod = prompt("Ingresa el juego que buscas:");
  let encontrado = JUEGOS.find((producto) => producto.titulo === prod);
  if (encontrado !== undefined) {
    resultado.push(encontrado);
    return allGamesHTML(resultado);
  } else {
    alert("⛔ No se encontro el Juego!");
  }
};

//SORT
function ordenarJuegos() {
  let orden = prompt("Elige el órden que deseas. (A ó Z)");

  if (orden.toLocaleUpperCase() === "A") {
    let productosOrdenados = JUEGOS.sort((a, b) => {
      if (a.titulo > b.titulo) {
        return 1;
      } else if (a.titulo < b.titulo) {
        return -1;
      }
      return 0;
    });
    allGamesHTML(productosOrdenados);
  } else if (orden.toLocaleUpperCase() === "Z") {
    let productosOrdenados = JUEGOS.sort((a, b) => {
      if (a.titulo < b.titulo) {
        return 1;
      } else if (a.titulo > b.titulo) {
        return -1;
      }
      return 0;
    });
    allGamesHTML(productosOrdenados);
  } else {
    alert("⛔ Ingresa un tipo de ordenamiento válido: A ó Z");
  }
}

//FILTER
function filtrarJuegos() {
  let nombreJuego = prompt("Ingresa parte del nombre:");
  let encontrados = JUEGOS.filter(
    (juego) =>
      juego.titulo.toLowerCase().includes(nombreJuego) ||
      juego.titulo.toUpperCase().includes(nombreJuego)
  );

  if (encontrados.length > 0) {
    return allGamesHTML(encontrados);
  } else {
    alert("⛔No se encontraron juegos coincidentes.");
  }
}

//FIND & SPLICE
function quitarJuegos() {
  let nombreJuego = prompt("Ingresa el Juego que quieres quitar:");
  let index = JUEGOS.findIndex((juego) => juego.titulo === nombreJuego);

  if (index > -1) {
    JUEGOS.splice(index, 1);
    return allGamesHTML(JUEGOS);
  } else {
    alert("⛔No se encontraron juegos coincidentes.");
  }
}
