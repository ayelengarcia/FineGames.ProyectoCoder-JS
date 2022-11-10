// OBJETOS CLASS Y ARRAY
const IVA = 1.21;

class Juego {
  constructor(titulo, precio, descuento, categoria, img) {
    this.titulo = titulo;
    this.precio = parseFloat(precio);
    this.descuento = parseInt(descuento);
    this.categoria = categoria;
    this.img = img;
  }
  totalDescuento() {
    return ((this.precio / 100) * this.descuento).toFixed(2);
  }
  precioDescuento() {
    return "USD " + (this.precio - this.totalDescuento()).toFixed(2);
  }
  precioFinal() {
    return "USD " + ((this.precio - this.totalDescuento()) * IVA).toFixed(2);
  }
}

const juego1 = new Juego(
  "Shadow Tactis - Aiko's choice",
  4.99,
  60,
  "Oferta",
  "assets/shadow-tactics.webp"
);
const juego2 = new Juego(
  "Mount & Blade II: Bannerlord",
  37.49,
  20,
  "Oferta",
  "assets/MountBladeIIBannerlord.webp"
);
const juego3 = new Juego(
  "Unrailed!",
  4.99,
  70,
  "Oferta",
  "assets/download-unrailed.webp"
);
const juego4 = new Juego(
  "Partisans 1941",
  13.99,
  70,
  "Oferta",
  "assets/Partisans1941.webp"
);
const juego5 = new Juego(
  "Wildcat Gun Machine",
  5.99,
  40,
  "Oferta",
  "assets/download-wildcat.webp"
);
const juego6 = new Juego("Destiny 2", 0, 0, "Gratuito", "assets/Destiny2.webp");
const juego7 = new Juego(
  "Rumbleverse™",
  0,
  0,
  "Gratuito",
  "assets/Rumbleverse.webp"
);
const juego8 = new Juego("Fall Guys", 0, 0, "Gratuito", "assets/FallGuys.webp");
const juego9 = new Juego("Fortnite", 0, 0, "Gratuito", "assets/Fornite.webp");
const juego10 = new Juego(
  "Genshin Impact",
  0,
  0,
  "Gratuito",
  "assets/GenshinImpact.webp"
);
const juego11 = new Juego(
  "Grand Theft Auto V: Premium Edition",
  10.99,
  0,
  "Popular",
  "assets/GTAV.webp"
);
const juego12 = new Juego(
  "VALORANT",
  0,
  0,
  "Popular Gratuito",
  "assets/VALORANT.webp"
);
const juego13 = new Juego(
  "Rising Storm 2: Vietnam",
  4.99,
  100,
  "Popular Oferta Gratuito",
  "assets/RisingStorm2.webp"
);
const juego14 = new Juego("Among Us", 0.99, 0, "Popular", "assets/amogus.webp");
const juego15 = new Juego(
  "League of Legends",
  0,
  0,
  "Popular Gratuito",
  "assets/GenshinImpact.webp"
);

const JUEGOS = [
  juego1,
  juego2,
  juego3,
  juego4,
  juego5,
  juego6,
  juego7,
  juego8,
  juego9,
  juego10,
  juego11,
  juego12,
  juego13,
  juego14,
  juego15,
];
