let ubicacionPrincipal = window.pageYOffset; //ocultarHeader
const items = document.querySelectorAll(".bread"); //submenu

const carritoIcon = document.getElementById("carritoIcon"); //btn-abrir
const btnCloseModal = document.querySelector(".btnCloseModal"); //btn-cerrar
const miModal = document.querySelector(".miModal"); //modal
const contenidoModal = document.querySelector(".modalBody"); //contenido
let btnEliminar = document.querySelectorAll(".btnEliminar"); //quitar

const contenedorJuegos = document.querySelector(".contenedor-juegos"); // Juegos Store
const contenedorCarousel = document.querySelector(".carousel-inner"); // Carrousel principal

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
  .then(() => recorrerObjetos(JUEGOS, returnJuego, contenedorJuegos))
  .then(() => recorrerObjetos(mostrarPorCategoria("Oferta"), returnJuego, contenidoSlide))
  .then(() => recorrerObjetos(mostrarPorCategoria("Oferta").splice(5), returnJuego, contenidoSlide2))
  .then(() => recorrerObjetos(mostrarPorCategoria("Gratuito"), returnJuego, contenidoSlide3))
  .then(() => recorrerObjetos(mostrarPorCategoria("Gratuito").splice(5), returnJuego, contenidoSlide4))
  .then(() => recorrerObjetos(mostrarPorCategoria("Popular"), returnJuego, contenidoSlide5))
  .then(() => recorrerObjetos(mostrarPorCategoria("Popular").splice(5), returnJuego, contenidoSlide6))
  .then(() => agregarAlCarrito(JUEGOS));


//ocultarHeader
window.onscroll = () => {
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
items.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    items.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});

//abrir-cerrar modal
carritoIcon.addEventListener("click", () => {
  miModal.classList.remove("d-none");
});
btnCloseModal.addEventListener("click", () => {
  miModal.classList.add("d-none");
});

// RECORRER OBJETOS
const recorrerObjetos = (array, template, contenedor) => {
  contenedor.innerHTML = "";
  if (array.length > 0) {
    array.forEach((elemento) => {
      contenedor.innerHTML += template(elemento);
    });
  }
};

function mostrarPorCategoria(categoria) {
  let juegosCategoria = categoria;
  let encontrado = JUEGOS.filter((juego) => juego.categoria === juegosCategoria);
  return encontrado;
}

//Mostrar PrecioPublico (sin iva)
function mostrarCalculo(precio, descuento) {
  const calculo = new MetodoJuego(precio, descuento);
  return calculo.precioDescuento();
}

const actualizarCantidad = () => {
  let cantidad = CARRITO.reduce((acc, juego) => acc + juego.cantidad, 0);
  carritoIcon.innerText = " " + cantidad;
};

//local Storage
let CARRITO;
const CARRITOLS = JSON.parse(localStorage.getItem("carritoGames"));

function guardarStorage() {
  localStorage.setItem("carritoGames", JSON.stringify(CARRITO));
}

// Agregar a Carrito
const agregarAlCarrito = (array) => {
  const btnAdd = document.querySelectorAll(".btn-add");
  btnAdd.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = array.find((juego) => juego.id === btn.id);
      const existe = CARRITO.some((juego) => juego.id === btn.id);
      if (existe) {
        CARRITO.map((juego) => {
          if (juego.id === btn.id) {
            juego.cantidad++;
          }
        });
      } else {
        item.cantidad = 1;
        CARRITO.push(item);
      }
      guardarStorage();
      mostrarCarrito();
      actualizarCantidad();
    });
  });
};
// agregarAlCarrito(JUEGOS);

const mostrarCarrito = () => {
  CARRITO = JSON.parse(localStorage.getItem("carritoGames"));
  if (contenidoModal) {
    let contenido = "";
    CARRITO.forEach((juego) => {
      contenido += contenidoCarrito(juego);
    });
    contenidoModal.innerHTML = contenido;
  }
  if (CARRITO.length === 0) {
    contenidoModal.innerHTML = `<div class="ms-5 ps-4">Tu carrito está vacío 😒</div>`;
  }
  guardarStorage();
  eliminarDelCarrito();
  mostrarTotalSinIVA();
};

if (CARRITOLS) {
  CARRITO = CARRITOLS;
  actualizarCantidad();
  mostrarCarrito();
} else {
  CARRITO = [];
}

function eliminarDelCarrito() {
  btnEliminar = document.querySelectorAll(".btnEliminar");

  btnEliminar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = CARRITO.findIndex((juego) => juego.id === btn.id);
      const existe = CARRITO.some((juego) => juego.id === btn.id);

      if (existe) {
        CARRITO.map((juego) => {
          if (juego.id === btn.id && juego.cantidad > 0) {
            juego.cantidad--;
          } else if (juego.cantidad < 1) {
            index.cantidad = 1;
            CARRITO.splice(index, 1);
          }
        });
      }
      guardarStorage();
      actualizarCantidad();
      mostrarCarrito();
    });
  });
}

function mostrarTotalSinIVA() {
  const total = CARRITO.reduce((acc, el) => acc + mostrarCalculo(el.precio, el.descuento) * el.cantidad, 0);
  const totalSinIva = document.querySelector(".totalSinIva");
  totalSinIva.innerText = "Total : US$ " + (total.toFixed(2));
}

// //FIND
// function buscarJuegos() {
//   let resultado = [];

//   let prod = prompt("Ingresa el juego que buscas:");
//   let encontrado = JUEGOS.find((producto) => producto.titulo === prod);
//   if (encontrado !== undefined) {
//     resultado.push(encontrado);
//     return allGamesHTML(resultado);
//   } else {
//     alert("⛔ No se encontro el Juego!");
//   }
// }

// //SORT
// function ordenarJuegos() {
//   let orden = prompt("Elige el órden que deseas. (A ó Z)");

//   if (orden.toLocaleUpperCase() === "A") {
//     let productosOrdenados = JUEGOS.sort((a, b) => {
//       if (a.titulo > b.titulo) {
//         return 1;
//       } else if (a.titulo < b.titulo) {
//         return -1;
//       }
//       return 0;
//     });
//     allGamesHTML(productosOrdenados);
//   } else if (orden.toLocaleUpperCase() === "Z") {
//     let productosOrdenados = JUEGOS.sort((a, b) => {
//       if (a.titulo < b.titulo) {
//         return 1;
//       } else if (a.titulo > b.titulo) {
//         return -1;
//       }
//       return 0;
//     });
//     allGamesHTML(productosOrdenados);
//   } else {
//     alert("⛔ Ingresa un tipo de ordenamiento válido: A ó Z");
//   }
// }

// //FILTER
// function filtrarJuegos() {
//   let nombreJuego = prompt("Ingresa parte del nombre:");
//   let encontrados = JUEGOS.filter(
//     (juego) =>
//       juego.titulo.toLowerCase().includes(nombreJuego) ||
//       juego.titulo.toUpperCase().includes(nombreJuego)
//   );

//   if (encontrados.length > 0) {
//     return allGamesHTML(encontrados);
//   } else {
//     alert("⛔No se encontraron juegos coincidentes.");
//   }
// }

// //FIND & SPLICE
// function quitarJuegos() {
//   let nombreJuego = prompt("Ingresa el Juego que quieres quitar:");
//   let index = JUEGOS.findIndex((juego) => juego.titulo === nombreJuego);

//   if (index > -1) {
//     JUEGOS.splice(index, 1);
//     return allGamesHTML(JUEGOS);
//   } else {
//     alert("⛔No se encontraron juegos coincidentes.");
//   }
// }