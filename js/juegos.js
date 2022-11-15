// OBJETOS CLASS Y ARRAY

//Juegos
class ValorJuego {
  constructor(precio, descuento) {
    this.precio = parseFloat(precio);
    this.descuento = parseInt(descuento);
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

const JUEGOS = [
  {
    titulo: "Shadow Tactis - Aiko's choice",
    clase: "text-decoration-line-through",
    altPrecio: "USD 4.99",
    precio: 4.99,
    descuento: 60,
    categoria: "Oferta",
    img: "assets/shadow-tactics.webp",
  },

  {
    titulo: "Mount & Blade II: Bannerlord",
    clase: "text-decoration-line-through",
    altPrecio: "USD 37.49",
    precio: 37.49,
    descuento: 20,
    categoria: "Oferta",
    img: "assets/MountBladeIIBannerlord.webp",
  },

  {
    titulo: "Unrailed!",
    clase: "text-decoration-line-through",
    altPrecio: "USD 4.99",
    precio: 4.99,
    descuento: 70,
    categoria: "Oferta",
    img: "assets/download-unrailed.webp",
  },

  {
    titulo: "Partisans 1941",
    clase: "text-decoration-line-through",
    altPrecio: "USD 13.99",
    precio: 13.99,
    descuento: 70,
    categoria: "Oferta",
    img: "assets/Partisans1941.webp",
  },

  {
    titulo: "Wildcat Gun Machine",
    clase: "text-decoration-line-through",
    altPrecio: "USD 5.99",
    precio: 5.99,
    descuento: 40,
    categoria: "Oferta",
    img: "assets/download-wildcat.webp",
  },

  {
    titulo: "Destiny 2",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/Destiny2.webp",
  },

  {
    titulo: "Rumbleverse™",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/Rumbleverse.webp",
  },

  {
    titulo: "Fall Guys",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/FallGuys.webp",
  },

  {
    titulo: "Fortnite",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/Fornite.webp",
  },

  {
    titulo: "Genshin Impact",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Gratuito",
    img: "assets/GenshinImpact.webp",
  },

  {
    titulo: "Grand Theft Auto V: Premium Edition",
    clase: "text-decoration-line-through",
    altPrecio: "USD 10.99",
    precio: 10.99,
    descuento: 0,
    categoria: "Popular",
    img: "assets/GTAV.webp",
  },

  {
    titulo: "VALORANT",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Popular Gratuito",
    img: "assets/VALORANT.webp",
  },

  {
    titulo: "Rising Storm 2: Vietnam",
    clase: "text-decoration-line-through",
    altPrecio: "USD 4.99",
    precio: 4.99,
    descuento: 100,
    categoria: "Popular Oferta Gratuito",
    img: "assets/RisingStorm2.webp",
  },

  {
    titulo: "Among Us",
    clase: "",
    altPrecio: "USD 0.99",
    precio: 0.99,
    descuento: 0,
    categoria: "Popular",
    img: "assets/amogus.webp",
  },

  {
    titulo: "League of Legends",
    clase: "",
    altPrecio: "Gratis",
    precio: 0,
    descuento: 0,
    categoria: "Popular Gratuito",
    img: "assets/LeagueofLegends.webp",
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
    precio: "Desde USD 9.99",
    btn: "COMPRAR YA",
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
    precio: "Desde USD 8.49",
    btn: "PRECOMPRAR YA",
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
    btn: "DESCARGAR YA",
  },
];
