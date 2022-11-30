function returnJuego(juego) {
  return `<div class="card col-3 p-0">
            <img src=${juego.img} class="card-img-top" alt="#" />
              <div class="card-body p-0 pt-2">
                <p class="mb-1">Juego base</p>
                <h6 class="card-title">${juego.titulo}</h6>
                <div class="row d-flex justify-content-around align-items-center ps-1">
                  <button id=${juego.id} class="col-7 btn-add" title="Click para agregar ${juego.titulo} al carrito."> 
                  Conseguir ! </button> <span class="m-0 p-0 col-5"> <p class="m-0 ${juego.clase}"> ${juego.altPrecio}</p> 
                  ${mostrarCalculo(juego.precio, juego.descuento)} </span>
                </div>
              </div>
          </div>`;
}

function returnCarousel(carousel) {
  return `<div class="${carousel.class}" data-bs-interval=${carousel.intervalo}>
          <img src=${carousel.img} class="d-block w-100 carousel" alt=${carousel.alt} />
          <div class="carousel-caption d-flex flex-column align-items-start px-4 py-0">
            <img src=${carousel.logo} alt="Logo" class="w-25 pb-1 pb-sm-4" />
            <h5>${carousel.titulo}</h5>
            <p class="d-none d-sm-flex w-50">
              ${carousel.texto}
            </p>
            <p class="mb-0">${carousel.precio}</p>
            <div class="btn d-flex justify-content-center align-items-center mb-3">
              ${carousel.btn}
            </div>
          </div>
        </div>`;
}

// contenido modal
function contenidoCarrito(juego) {
  return `<div class="mb-1 d-flex">
            <div class="m-0 col-5">
            <img src="${juego.img}" style="width: 8rem">
            </div>
            <div class="col-5 d-flex flex-column align-items-start">
              <p class="m-0" style="color:#999999">Juego base</p>
              <p class="pb-3 m-0 d-flex flex-wrap"> ${juego.titulo}</p>
              <p  class="m-0">Precio: ${mostrarCalculo(
                juego.precio,
                juego.descuento
              )}</p>
              <p class="m-0">Cantidad: ${juego.cantidad}</p>
            </div>
            <div class="col-1 d-flex align-items-end">
            <div id="${
              juego.id
            }" class="btnEliminar btn btn-danger">Quitar</div>  
            </div>
          </div> <hr>`;
}


