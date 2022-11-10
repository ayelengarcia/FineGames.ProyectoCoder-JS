function retornJuego(juego) {
  return `<div class="col-2 card p-0" style="width: 12rem">
              <img src=${juego.img} class="card-img-top" alt="#" />
              <div class="card-body p-0 pt-2">
                <p class="mb-1">Juego base</p>
                <h6 class="card-title">${juego.titulo}</h6>
                <a href="#" class="btn">Descargar</a><span class="ms-2">${juego.precioDescuento()}</span>
              </div>
          </div>`;
}
