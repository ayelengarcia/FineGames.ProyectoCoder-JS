const carritoIcon = document.getElementById("carritoIcon"); //selected carrito
const miModal = document.querySelector(".miModal");
const contenidoModal = document.querySelector(".modalBody");
const btnCloseModal = document.querySelector(".btnCloseModal");
let ubicacionPrincipal = window.pageYOffset; //ocultarHeader
const items = document.querySelectorAll(".bread"); //borderSelected submenu
const contenedorJuegos = document.querySelector(".contenedor-juegos"); // Juegos Store
const contenedorCarousel = document.querySelector(".carousel-inner"); // Carrousel principal
const contenedorCategorias = document.querySelectorAll(".categorias");
const contenidoSlide = document.querySelector(".contenidoSlide");
const contenidoSlide2 = document.querySelector(".contenidoSlide2");
const contenidoSlide3 = document.querySelector(".contenidoSlide3");
const contenidoSlide4 = document.querySelector(".contenidoSlide4");
const contenidoSlide5 = document.querySelector(".contenidoSlide5");
const contenidoSlide6 = document.querySelector(".contenidoSlide6");
let btnEliminar = document.querySelectorAll(".btnEliminar");

carritoIcon.addEventListener("click", () => {
  miModal.classList.remove("d-none");
});
btnCloseModal.addEventListener("click", () => {
  miModal.classList.add("d-none");
});

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

// ----------------------- FUNCTIONS STORE-------------------------------//

// RECORRER OBJETOS
const recorrerObjetos = (array, template, contenedor) => {
  contenedor.innerHTML = "";
  if (array.length > 0) {
    array.forEach((elemento) => {
      contenedor.innerHTML += template(elemento);
    });
  }
};

recorrerObjetos(CAROUSEL, returnCarousel, contenedorCarousel);
recorrerObjetos(JUEGOS, returnJuego, contenedorJuegos);
recorrerObjetos(mostrarPorCategoria("Oferta"), returnJuego, contenidoSlide);
recorrerObjetos(mostrarPorCategoria("Oferta").splice(5),returnJuego,contenidoSlide2);
recorrerObjetos(mostrarPorCategoria("Gratuito"), returnJuego, contenidoSlide3);
recorrerObjetos(mostrarPorCategoria("Gratuito").splice(5),returnJuego,contenidoSlide4);
recorrerObjetos(mostrarPorCategoria("Popular"), returnJuego, contenidoSlide5);
recorrerObjetos(
  mostrarPorCategoria("Popular").splice(5),
  returnJuego,
  contenidoSlide6
);

function mostrarPorCategoria(categoria) {
  let juegosCategoria = categoria;
  let encontrado = JUEGOS.filter(
    (juego) => juego.categoria === juegosCategoria
  );
  return encontrado;
}

//Mostrar PrecioPublico (sin iva)
function mostrarCalculo(precio, descuento) {
  const calculo = new MetodoJuego(precio, descuento);
  return calculo.precioDescuento();
}

//local Storage
let CARRITO;
const CARRITOLS = JSON.parse(localStorage.getItem("carritoGames"));

// Agregar a Carrito
const btnAdd = document.querySelectorAll(".btn-add");
const agregarAlCarrito = (array) => {
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
agregarAlCarrito(JUEGOS);

const actualizarCantidad = () => {
  let cantidad = CARRITO.reduce((acc, juego) => acc + juego.cantidad, 0);
  carritoIcon.innerText = " " + cantidad;
};

const mostrarCarrito = () => {
  CARRITO = JSON.parse(localStorage.getItem("carritoGames"));
  if (contenidoModal) {
    let contenido = "";
    CARRITO.forEach((juego) => {
      contenido += contenidoCarrito(juego);
    });
    contenidoModal.innerHTML = contenido;
  }if (CARRITO.length === 0) {
    contenidoModal.innerText = "Tu carrito está vacío 😒";
  }
  guardarStorage();
  eliminarDelCarrito();
};

function guardarStorage() {
  localStorage.setItem("carritoGames", JSON.stringify(CARRITO));
}

if (CARRITOLS) {
CARRITO = CARRITOLS;
actualizarCantidad();
mostrarCarrito();
} 

function eliminarDelCarrito() {
  btnEliminar = document.querySelectorAll(".btnEliminar");

  btnEliminar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = CARRITO.findIndex((juego) => juego.id === btn.id);

      if (index > -1) {
        CARRITO.splice(index, 1);
      }
      guardarStorage();
      actualizarCantidad();
      mostrarCarrito();
    });
  });
}
eliminarDelCarrito();

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
