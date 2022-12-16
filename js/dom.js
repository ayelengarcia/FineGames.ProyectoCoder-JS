let ubicacionPrincipal = window.pageYOffset; //ocultarHeader
const items = document.querySelectorAll(".bread"); //submenu
const pantallaCompra = document.querySelector(".pantalla-compra");
const btnPantallaCompra = document.querySelector(".btnX");
const contenidoCompra = document.querySelector(".contenido-compra");
const tarjeta = document.querySelector(".tarjeta");
const formulario = document.querySelector(".forma-pago");
const btnExpandForm = document.querySelector(".bi-arrow-down");
const btnOcultarForm = document.querySelector(".bi-x");

const cardFront = document.querySelector(".delantera");
const cardBack = document.querySelector(".trasera");

const carritoIcon = document.getElementById("carritoIcon"); //btn-abrir
const btnCloseModal = document.querySelector(".btnCloseModal"); //btn-cerrar
const btnComprarModal = document.querySelector(".btnComprarModal");
const miModal = document.querySelector(".miModal"); //modalCarrito
const contenidoModal = document.querySelector(".modalBody");
let btnEliminar = document.querySelectorAll(".btnEliminar"); //QuitarJuegos

const Login = document.querySelector(".desplegable-login");
const LoginXs = document.querySelector(".log-xs");
Login.innerHTML = mostrarLogin();
LoginXs.innerHTML = mostrarLogin();

const footer = document.querySelector(".footer");
footer.innerHTML = mostrarFooter();

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

// RECORRER OBJETOS
const recorrerObjetos = (array, template, contenedor) => {
  contenedor.innerHTML = "";
  if (array.length > 0) {
    array.forEach((elemento) => {
      contenedor.innerHTML += template(elemento);
    });
  }
};

//Mostrar PrecioPublico (sin iva)
function mostrarCalculo(precio, descuento) {
  const calculo = new MetodoJuego(precio, descuento);
  return calculo.precioDescuento();
}

const actualizarCantidad = () => {
  let cantidad = CARRITO.reduce((acc, juego) => acc + juego.cantidad, 0);
  carritoIcon.innerHTML = `<span class="bi bi-bag-fill d-flex flex-nowrap align-items-center"><p class="ps-1 m-0 mt-1">${cantidad}</p></span>`;
};

//local Storage
let CARRITO;
let CARRITOLS = JSON.parse(localStorage.getItem("carritoGames"));

const guardarStorage = () => localStorage.setItem("carritoGames", JSON.stringify(CARRITO));

// Funciones Carrito
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
            toast(`${juego.cantidad} ${item.titulo}`);
          }
        });
      } else {
        item.cantidad = 1;
        CARRITO.push(item);
        let juego = item.titulo.toUpperCase();
        toast(`${juego} se agregó al 🛒`);
      }
      guardarStorage();
      mostrarCarrito();
      actualizarCantidad();
    });
  });
};

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
    contenidoModal.innerHTML = `<div class="vacio ms-4 ps-4">Tu carrito está vacío 😒</div>`;
  }
  guardarStorage();
  eliminarDelCarrito();
  mostrarTotalSinIVA();
};

//Storage Carrito
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
      CARRITO.map((juego) => {
        if (juego.id === btn.id && juego.cantidad >= 1) {
          juego.cantidad--;
        }
        if (juego.id === btn.id && juego.cantidad == 0) {
          CARRITO.splice(index, 1);
        }
      });
      guardarStorage();
      actualizarCantidad();
      mostrarCarrito();
    });
  });
}

function mostrarTotalSinIVA() {
  const total = CARRITO.reduce((acc, el) => acc + mostrarCalculo(el.precio, el.descuento) * el.cantidad, 0);
  const totalSinIva = document.querySelector(".totalSinIva");
  totalSinIva.innerText = "Total : US$." + total.toFixed(2);
}

//Modales Carrito y Pantalla de compra
const loading = () => `<img class="img-loading container" src="assets/loading.gif" >`;
carritoIcon.addEventListener("click", () => miModal.classList.remove("d-none"));
btnCloseModal.addEventListener("click", () => miModal.classList.add("d-none"));
btnPantallaCompra.addEventListener("click", () => pantallaCompra.classList.add("d-none"));

btnComprarModal.addEventListener("click", () => {
  const total = CARRITO.reduce((acc, el) => acc + mostrarCalculo(el.precio, el.descuento) * el.cantidad,0);
  const subtotal = document.querySelector(".subtotal");
  subtotal.innerHTML = "--";

  const totalIva = total * 1.21;
  const totalFinal = document.querySelector(".totalIva");
  totalFinal.innerHTML = "--";

  miModal.classList.add("d-none");
  pantallaCompra.classList.remove("d-none");
  contenidoCompra.innerHTML = loading();
  cardFront.innerHTML = mostrarCardFront();
  cardBack.innerHTML = mostrarCardBack();

  setTimeout(() => {
    CARRITO = JSON.parse(localStorage.getItem("carritoGames"));
    contenidoCompra.innerHTML = "";
    subtotal.innerHTML = `US$.` + total.toFixed(2);
    totalFinal.innerHTML = `US$.` + totalIva.toFixed(2);
    CARRITO.forEach((juego) => {
      contenidoCompra.innerHTML += contenidoPantallaCompra(juego);
    });
  }, 2000);
});

//Mostrar-ocultar form Tarjeta 
btnExpandForm.addEventListener("click", () => {
  formulario.classList.remove("d-none");
  formulario.classList.add("animate__fadeInDown");
  btnExpandForm.classList.add("d-none");
  btnOcultarForm.classList.remove("d-none");
});
btnOcultarForm.addEventListener("click", () => {
  formulario.classList.add("d-none");
  btnExpandForm.classList.remove("d-none");
  btnOcultarForm.classList.add("d-none");
});

//Girar Tarjeta
cardFront.addEventListener("click", () => {
  cardFront.classList.add("d-none");
  cardBack.classList.remove("d-none");
  cardBack.classList.add("animate__flipInY");
});

cardBack.addEventListener("click", () => {
  cardFront.classList.remove("d-none");
  cardBack.classList.add("d-none");
  cardFront.classList.add("animate__flipInY");
});

//VALIDACION Formu Compra
const contenidoForm = document.getElementById("form");
const nombreTitular = document.querySelector(".nombreTitular");
const msjNombre = document.querySelector(".msjNombre");
const numeroTarjeta = document.querySelector(".numeroTarjeta");
const msjNumero = document.querySelector(".msjNumero");
const mesExp = document.querySelector(".mesExp");
const añoExp = document.querySelector(".añoExp");
const CCV = document.querySelector(".ccv");
const msjExpira = document.querySelector(".msjExpira");
const email = document.querySelector(".email");
const msjEmail = document.querySelector(".msjEmail");
const acuerdoLic = document.querySelector(".acuerdoLic");

mesExp.innerHTML = contenidoMes();
añoExp.innerHTML = contenidoAño();
acuerdoLic.innerHTML = `Al hacer click en "Realizar compra" a continuación, declaro que soy mayor de 18 años, que soy un usuario autorizado de este método de pago y que acepto el Acuerdo de licencia de usuario final.`;

const btnRealizarCompra = document.querySelector(".btn-confirm-buy");
let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regExpNum = /([0-9]{4})/;


contenidoForm.addEventListener("input", (e) => {
  e.preventDefault();

  if (nombreTitular.value.length < 6) {
    nombreTitular.classList.remove("succes");
    msjNombre.classList.remove("d-none");
  } else {
    nombreTitular.classList.add("succes");
    msjNombre.classList.add("d-none");
  }

  if (regExpNum.test(numeroTarjeta.value)) {
    numeroTarjeta.classList.add("succes");
    msjNumero.classList.add("d-none");
  } else {
    numeroTarjeta.classList.remove("succes");
    msjNumero.classList.remove("d-none");
  }

  if (mesExp.value == "Mes") {
    mesExp.classList.remove("succes");
    msjExpira.classList.remove("d-none");
  } else if (añoExp.value == "Año") {
    añoExp.classList.remove("succes");
    msjExpira.classList.remove("d-none");
  } else if (CCV.value == "") {
    CCV.classList.remove("succes");
    msjExpira.classList.remove("d-none");
  } else {
    mesExp.classList.add("succes");
    añoExp.classList.add("succes");
    CCV.classList.add("succes");
    msjExpira.classList.add("d-none");
  }

  if (regExp.test(email.value)) {
    email.classList.add("succes");
    msjEmail.classList.add("d-none");
  } else {
    email.classList.remove("succes");
    msjEmail.classList.remove("d-none");
  }
});

btnRealizarCompra.addEventListener("click", () => {
  if (!nombreTitular.value.length < 6 &&
    regExpNum.test(numeroTarjeta.value) &&
    mesExp.value != "Mes" &&
    añoExp.value != "Año" &&
    CCV.value != "" &&
    regExp.test(email.value)) {
    CARRITO = [];
    guardarStorage()
    confirmCompra();
  } else {
    cancelCompra();
  }
});


//Eventos input dinamico con Tarjeta
nombreTitular.addEventListener("input", () => {
  const nombreCard = document.getElementById("nombreCard");
  const firmaCard = document.getElementById("firmaCard");
  nombreCard.innerHTML = nombreTitular.value.toUpperCase();
  firmaCard.innerHTML = nombreTitular.value;
});

numeroTarjeta.addEventListener("input", () => {
  const numeroCard = document.getElementById("numeroCard");
  numeroCard.innerHTML = numeroTarjeta.value;
})

mesExp.addEventListener("input", () => {
  const mesCard = document.getElementById("mesCard")
  mesCard.innerHTML = mesExp.value;
})

añoExp.addEventListener("input", () => {
  const añoCard = document.getElementById("añoCard");
  añoCard.innerHTML = añoExp.value;
});

CCV.addEventListener("keyup", () => {
  const ccvCard = document.getElementById("ccvCard");
  ccvCard.textContent = CCV.value;
  cardFront.classList.add("d-none");
  cardBack.classList.remove("d-none");
});

//librerias
const toast = (text) => {
  Toastify({
    text: text,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, red , brown)",
    },
  }).showToast();
};

const confirmCompra = () => {
  let timerInterval;
  Swal.fire({
    title: "Estamos procesando tu compra !",
    html: "<b></b>",
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = "Enviaremos tu carrito a tu casilla de correo.";
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
    color: "white",
    background: "black",
    backdrop: `
    rgba(108, 13, 13, 0.546)
    center top
    no-repeat
  `,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire({
        title: "Compra exitosa ✔",
        text: "Hemos enviado tus productos a tu casilla de correo. Gracias por tu compra !",
        imageUrl: "assets/pacman2.gif",
        confirmButtonColor: "#bc0b37",
        color: "white",
        background: "black",
        backdrop: ` rgba(108, 13, 13, 0.546)
                    center top
                    no-repeat`,
      });
    }
  });
}

const cancelCompra = () => {
  Swal.fire({
    icon: "error",
    title: "Datos incorrectos.",
    text: "Por favor, rellena todos los campos !",
    showConfirmButton: false,
    timer: 2000,
    color: "white",
    background: "black",
    backdrop: ` rgba(108, 13, 13, 0.546)
                    center top
                    no-repeat`,
  });
}