const IVA = 1.21;

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
    return "US$ " + (this.precio - this.totalDescuento()).toFixed(2);
  }
  precioFinal() {
    return "US$ " + ((this.precio - this.totalDescuento()) * IVA).toFixed(2);
  }
}

//Juegos
const JUEGOS = [
  {
    id: "1",
    titulo: "Shadow Tactis - Aiko's choice",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 4.99",
    precio: 4.99,
    descuento: 60,
    categoria: "Oferta",
    img: "assets/shadow-tactics.webp",
  },

  {
    id: "2",
    titulo: "Mount & Blade II: Bannerlord",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 37.49",
    precio: 37.49,
    descuento: 20,
    categoria: "Oferta",
    img: "assets/MountBladeIIBannerlord.webp",
  },

  {
    id: "3",
    titulo: "Unrailed!",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 4.99",
    precio: 4.99,
    descuento: 70,
    categoria: "Oferta",
    img: "assets/download-unrailed.webp",
  },

  {
    id: "4",
    titulo: "Partisans 1941",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 13.99",
    precio: 13.99,
    descuento: 70,
    categoria: "Oferta",
    img: "assets/Partisans1941.webp",
  },

  {
    id: "5",
    titulo: "Wildcat Gun Machine",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 5.99",
    precio: 5.99,
    descuento: 40,
    categoria: "Oferta",
    img: "assets/download-wildcat.webp",
  },
  {
    id: "6",
    titulo: "Sins of a Solar Empire II",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 12.13",
    precio: 12.13,
    descuento: 30,
    categoria: "Oferta",
    img: "assets/SolarEmpire2.webp",
  },
  {
    id: "7",
    titulo: "Nira",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 1.99",
    precio: 1.99,
    descuento: 25,
    categoria: "Oferta",
    img: "assets/nira.webp",
  },
  {
    id: "8",
    titulo: "Ghostbusters: Spirits Unleashed",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 8.49",
    precio: 8.49,
    descuento: 25,
    categoria: "Oferta",
    img: "assets/Ghostbusters.webp",
  },
  {
    id: "9",
    titulo: "A Plague Tale: Requiem",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 29.99",
    precio: 29.99,
    descuento: 20,
    categoria: "Oferta",
    img: "assets/PlagueTale.webp",
  },
  {
    id: "10",
    titulo: "Tower Princess",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 3.99",
    precio: 3.99,
    descuento: 35,
    categoria: "Oferta",
    img: "assets/tower-princess.webp",
  },

  {
    id: "11",
    titulo: "Destiny 2",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/Destiny2.webp",
  },

  {
    id: "12",
    titulo: "Rumbleverse™",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/Rumbleverse.webp",
  },

  {
    id: "13",
    titulo: "Fall Guys",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/FallGuys.webp",
  },

  {
    id: "14",
    titulo: "Fortnite",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/Fornite.webp",
  },

  {
    id: "15",
    titulo: "Genshin Impact",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/GenshinImpact.webp",
  },
  {
    id: "16",
    titulo: "Brawlhalla",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/Brawlhalla.webp",
  },
  {
    id: "17",
    titulo: "Rocket League®",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/RocketLeague.webp",
  },
  {
    id: "18",
    titulo: "The Cycle: Frontier",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/Frontier.webp",
  },
  {
    id: "19",
    titulo: "EVE Online",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/uprising.webp",
  },
  {
    id: "20",
    titulo: "Dauntless",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/Dauntles.webp",
  },

  {
    id: "21",
    titulo: "Grand Theft Auto V: Premium Edition",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 10.99",
    precio: 10.99,
    descuento: 0,
    categoria: "Popular",
    img: "assets/GTAV.webp",
  },

  {
    id: "22",
    titulo: "VALORANT",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Popular",
    img: "assets/VALORANT.webp",
  },

  {
    id: "23",
    titulo: "Rising Storm 2: Vietnam",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 4.99",
    precio: 4.99,
    descuento: 100,
    categoria: "Popular",
    img: "assets/RisingStorm2.webp",
  },

  {
    id: "24",
    titulo: "Among Us",
    clase: "",
    altPrecio: "US$ 0.99",
    precio: 0.99,
    descuento: 0,
    categoria: "Popular",
    img: "assets/amogus.webp",
  },

  {
    id: "25",
    titulo: "League of Legends",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Popular",
    img: "assets/LeagueofLegends.webp",
  },
  {
    id: "26",
    titulo: "NARAKA: BLADEPOINT",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 9.99",
    precio: 9.99,
    descuento: 50,
    categoria: "Popular",
    img: "assets/Naraka.webp",
  },
  {
    id: "27",
    titulo: "Shadow of the Tomb Raider: Definitive Edition",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 39.99",
    precio: 39.99,
    descuento: 70,
    categoria: "Popular",
    img: "assets/TombRaider.webp",
  },
  {
    id: "28",
    titulo: "Cyberpunk 2077",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 50.00",
    precio: 50,
    descuento: 50,
    categoria: "Popular",
    img: "assets/CyberPunk.webp",
  },
  {
    id: "29",
    titulo: "World War Z Aftermath",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 19.99",
    precio: 19.99,
    descuento: 50,
    categoria: "Popular",
    img: "assets/Aftermath.webp",
  },
  {
    id: "30",
    titulo: "Overcooked! 2",
    clase: "text-decoration-line-through",
    altPrecio: "US$ 7.99",
    precio: 7.99,
    descuento: 75,
    categoria: "Popular",
    img: "assets/Overcooked2.webp",
  },
];

// Carousel
const CAROUSEL = [
  {
    class: "carousel-item active",
    intervalo: "7000",
    img: "assets/world-war.webp",
    alt: "World War Z",
    logo: "assets/LogoWorldWar.webp",
    titulo: "YA DISPONIBLE",
    texto:
      "Cambia el curso del apocalipsis zombi en consolas y en PC con cross-play completo. Únete con amigos o en solitario... ",
    precio: "Desde US$ 9.99",
    btn: `<a href="./index.html#carouselExampleControls-3">COMPRAR YA</a>`,
  },
  {
    class: "carousel-item",
    intervalo: "6000",
    img: "assets/sins-solar-empire-2.webp",
    alt: "Sins Solar Empire II",
    logo: "assets/sins2_logo_hero.webp",
    titulo: "ACCESO ANTICIPADO",
    texto:
      "El acceso anticipado de Sins Of a Solar Empire II comienza con una prueba técnica jugable.",
    precio: "Desde US$ 8.49",
    btn: `<a href="./index.html#carouselExampleControls">PRECOMPRAR YA</a>`,
  },
  {
    class: "carousel-item",
    intervalo: "6000",
    img: "assets/egs-genshin-impact-3-2.webp",
    alt: "Geshin Impact 3.2",
    logo: "assets/geshinlogo.webp",
    titulo: "LA VERSIÓN 3.2 YA DISPONIBLE",
    texto:
      "La actualización más reciente te traerá la gran final de la misión de Arconte de Sumeru, y prensentará a Nahida y Layla como personajes jugables.",
    precio: "Gratis",
    btn: `<a href="./index.html#carouselExampleControls-2">DESCARGAR</a>`,
  },
];
