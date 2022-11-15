function retornJuego(juego) {
  return `<div class="card col-2 p-0" style="width: 12rem">
            <img src=${juego.img} class="card-img-top" alt="#" />
            <div class="card-body p-0 pt-2">
              <p class="mb-1">Juego base</p>
              <h6 class="card-title">${juego.titulo}</h6>
              <div class="row d-flex justify-content-around align-items-center ps-1">
                <a href="#" class="col-7 btn">Conseguir !</a><span class="m-0 p-0 col-5"> <p class="m-0 ${
                  juego.clase
                }"> ${juego.altPrecio}</p> ${mostrarCalculo(juego.precio, juego.descuento)} </span>
              </div>
            </div>
          </div>`;
}

function retornCarousel(carousel) {
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
