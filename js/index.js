let ubicacionPrincipal = window.pageYOffset; //ocultarHeader
let items = document.querySelectorAll("ol li a"); //borderSelected submenu
let carrito = document.getElementById("carrito"); //selected carrito
let contador = 0; //selected carrito
const contenedorJuegos = document.querySelector(".contenedor-juegos"); // RECORRER JUEGOS
const contenedorCarousel = document.querySelector(".carousel-inner"); // RECORRER CAROUSEL
const verMas = document.getElementById("verMas"); //btnVer más
const IVA = 1.21;

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
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("li .active").classList.remove("active");
    item.classList.add("active");
  });
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

// RECORRER CAROUSEL
function recorrerCarousel(array) {
  let contenido = "";
  if (array.length > 0) {
    array.forEach((carousel) => {
      contenido += retornCarousel(carousel);
    });
    contenedorCarousel.innerHTML = contenido;
  }
}
recorrerCarousel(CAROUSEL);

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

//PrecioPublico (sin iva)
function mostrarCalculo(precio, descuento) {
  const calculo = new ValorJuego(precio, descuento);
  return calculo.precioDescuento();
}

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
}

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
