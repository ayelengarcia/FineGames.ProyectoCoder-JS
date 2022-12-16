const returnJuego = (juego) => {
  return `<div class="card col-3 p-0">
            <img src=${juego.img} class="card-img-top" alt="#"/>
              <div class="card-body p-0 pt-2">
                <p class="mb-1">Juego base</p>
                <h6 class="card-title">${juego.titulo}</h6>
                <div class="row d-flex justify-content-around align-items-center ps-1">
                  <button id=${juego.id} class="col-7 btn-add" title="Click para agregar ${juego.titulo} al carrito."> 
                  Conseguir ! </button> <span class="m-0 p-0 col-5"> <p class="m-0 ${juego.clase}"> ${juego.altPrecio}<p> 
                  US$ ${mostrarCalculo(juego.precio, juego.descuento)} </span>
                </div>
              </div>
          </div>`;
}

const returnCarousel = (carousel) => {
  return `<div class="${carousel.class}" data-bs-interval=${carousel.intervalo}>
          <img src=${carousel.img} class="d-block w-100 carousel" alt=${carousel.alt} />
          <div class="carousel-caption d-flex flex-column align-items-start px-4 py-0">
            <img src=${carousel.logo} alt="Logo" class="w-25 pb-1 pb-sm-4" />
            <h5>${carousel.titulo}</h5>
            <p class="d-none d-sm-flex w-50">${carousel.texto}</p>
            <p class="mb-0">${carousel.precio}</p>
            <div class="btn d-flex justify-content-center align-items-center mb-3">
            <a href="${carousel.link}">${carousel.btn}</a></div>
          </div>
        </div>`;
}

const contenidoCarrito = (juego) => {
  return `<div class="mb-1 d-flex">
            <div class="m-0 col-5"> <img src="${juego.img}" style="width: 8rem"> </div>
            <div class="col-5 d-flex flex-column align-items-start">
              <p class="m-0" style="color:#999999">Juego base</p>
              <p class="pb-3 m-0 d-flex flex-wrap"> ${juego.titulo}</p>
              <p  class="m-0">US$ Unidad : ${mostrarCalculo(juego.precio, juego.descuento)}</p>
              <p class="m-0">Cantidad : ${juego.cantidad}</p>
            </div>
            <div class="col-1 d-flex align-items-end">
            <div id="${juego.id}" class="btnEliminar btn btn-danger">Quitar</div></div>
          </div> <hr>`;
}

const contenidoPantallaCompra = (juego) => {
  return `<td class="col-2 pb-2"><img src="${juego.img}" style="width: 2rem"></td>
          <td class="col-4 pb-2">${juego.titulo}</td>
          <td class="col-2 pb-2">${juego.descuento}%</td>
          <td class="col-1 pb-2">${juego.cantidad}</td>
          <td class="col-3 pb-2">US$.${mostrarCalculo(juego.precio, juego.descuento) * juego.cantidad}</td>`;
}

const mostrarFooter = () => {
  return `<div class="col-12 my-3 redes ">
            <i class="bi bi-instagram pe-3"></i>
            <i class="bi bi-twitter"></i>
          </div>
          <hr>
          <div class="col-12 mb-4">© 2022, Fine Games, Inc. Todos los derechos reservados. Fine, Fine Games, el logotipo de Fine Games, Fortnite, el logotipo de Fortnite, Unreal, Unreal Engine, el logotipo de Unreal Engine, Unreal Tournament y el logotipo de Unreal Tournament son marcas comerciales o marcas registradas de Fine Games, Inc. en los Estados Unidos de América y en otros lugares. Las otras marcas o nombres de productos son marcas registradas de sus respectivos dueños. Las transacciones que no provienen de los Estados Unidos se realizan a través de Fine Games International, S.à r.l.
          </div>
          <div class="col-xs-12 col-sm-6">
            <ul class="d-flex flex-wrap legal px-0 pt-2 my-2">
              <li class="me-3 pt-2">Términos de servicio</li>
              <li class="me-3 pt-2">Política de privacidad</li>
              <li class="pt-2">Política de reembolso de la tienda</li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-6 d-flex justify-content-end">
            <img class="p-2 pb-4" src="assets/Fine-gameswhite.webp" alt="Logo">
          </div>`;
}

const mostrarLogin = () => {
  return `<ul class="p-0 m-0 d-flex justify-content-end flex-column align-items-end mt-5">
            <li class="px-3 pt-3">👤 Brujula</li>
            <hr class="p-0 w-100" />
            <li class="px-3 pb-3">Mi cuenta</li>
            <li class="pt-0 px-3 pb-3">Salir</li>
          </ul>`;
}

const mostrarCardFront = () => {
  return `
        <div class="col-12 d-flex justify-content-end logo-marca">
          <img src="assets/visa.png" width="60rem">
        </div>

        <img class="col-2 chip pt-0 pb-3" src="assets/chip-tarjeta.png">

        <div class="grupo col-12">
          <p class="m-0">Número Tarjeta</p>
          <p id="numeroCard">#### #### #### ####</p>
        </div>

        <div class="grupo col-7">
          <p class="m-0">Nombre Titular</p>
          <p id="nombreCard">COSME FULANITO</p>
        </div>

        <div class="grupo col-5">
          <p class="m-0">Expiracion</p>
          <p class="expiracion"><span id="mesCard">MM</span> / <span id="añoCard">AA</span></p>
        </div>`;
}

const mostrarCardBack=()=> {
  return `
        <div class="barra-magnetica" style="background-color:black; height: 40px;"></div>

        <div class="col-8 grupo px-4 pt-2">
          <p>Firma</p>
          <div class="firma p-0 m-0" style="background-color:antiquewhite; color: black; height: 25px;">
            <p id="firmaCard" class="ps-2">firma Titular</p>
          </div>
        </div>

        <div class="col-4 grupo px-4 py-2 pb-0">
          <p>CCV</p>
          <p id="ccvCard" class="px-1" style="background-color:white; color:black; height: 25px;"></p>
        </div>

        <p class="leyenda px-4 pt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem.</p>
        <span class=" px-4">www.tubanco.com </span>`;
}

const contenidoMes=()=> {
  return `<option value="Mes" disabled selected>Mes</option>
           <option value="01">01</option>
           <option value="02">02</option>
           <option value="03">03</option>
           <option value="04">04</option>
           <option value="05">05</option>
           <option value="06">06</option>
           <option value="07">07</option>
           <option value="08">08</option>
           <option value="09">09</option>
           <option value="10">10</option>
           <option value="11">11</option>
           <option value="12">12</option>`;
}

const contenidoAño=()=> {
  return `<option value="Año" disabled selected>Año</option>
           <option value="2022">2022</option>
           <option value="2023">2023</option>
           <option value="2024">2024</option>
           <option value="2025">2025</option>
           <option value="2026">2026</option>
           <option value="2027">2027</option>
           <option value="2028">2028</option>
           <option value="2029">2029</option>
           <option value="2030">2030</option>
           <option value="2031">2031</option>
           <option value="2032">2032</option>`;
}

const retornError=()=> {
  return `<div class="col-sm-10 col-lg-5 container-fluid d-flex flex-column align-items-center retorn-error my-5">
          <img src="assets/pacman.gif" alt="gif" class="py-4">
          <p>⛔ ERROR AL CARGAR LOS PRODUCTOS</p>
          <p >Espera unos instantes e intentalo nuevamente!</p>
        </div>`;
}

class MetodoJuego {
  constructor(precio, descuento, cantidad) {
    this.precio = parseFloat(precio);
    this.descuento = parseInt(descuento);
    this.cantidad = parseInt(cantidad);
  }
  totalDescuento() {
    return ((this.precio / 100) * this.descuento).toFixed(2);
  }
  precioDescuento() {
    return (this.precio - this.totalDescuento()).toFixed(2);
  }
}