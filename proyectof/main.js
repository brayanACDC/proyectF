const products = [
  {
    nombre_libro: "El Último Dragón",
    img: "https://qph.cf2.quoracdn.net/main-qimg-7bd067ca8385d8657e9d602d64fcbfad-pjlq",
    categoria: "fantasia",
    codigo: "LpHHH90",
    precio: 75000,
    descripcion:
      "En un mundo dominado por la oscuridad, un joven héroe se alza para enfrentar al último dragón y restaurar la paz y la justicia en su reino.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Templo",
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/ca/f9/caf930e5a8e6cfb8992ecddc0c6e6120.jpg",
    categoria: "misterio",
    codigo: "LpJJJ12",
    precio: 55000,
    descripcion:
      "Una expedición arqueológica desentierra un antiguo secreto oculto bajo las ruinas de un templo perdido, desatando una serie de eventos inexplicables y peligros mortales.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Secreto del Bosque",
    img: "https://img.huffingtonpost.es/files/image_720/uploads/2022/12/11/6395adbeab6e4.jpeg",
    categoria: "fantasia",
    codigo: "LpKKK23",
    precio: 49000,
    descripcion:
      "Una joven valiente se aventura en un bosque encantado en busca de su hermano perdido, descubriendo un mundo de magia y peligros ocultos en lo más profundo del bosque.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Destino del indio",
    img: "https://images.cdn2.buscalibre.com/fit-in/360x360/ad/4d/ad4df4ba516014a9fc39a0288a70957f.jpg",
    categoria: "fantasia",
    codigo: "LpTTT12",
    precio: 72000,
    descripcion:
      "Un guerrero legendario se enfrenta a su destino final en una batalla épica por el alma de su reino, enfrentándose a enemigos mortales y desafíos imposibles en su lucha por la libertad y la justicia.",
    disponibilidad: false,
  },
  {
    nombre_libro: "La Reina del Desierto",
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/1d/1e/1d1e531640c86ae960135c34fb1556ff.jpg",
    categoria: "aventura",
    codigo: "LpNNN56",
    precio: 65000,
    descripcion:
      "Una joven guerrera se convierte en la última esperanza de su pueblo cuando un ejército invasor amenaza con destruir su hogar en el desierto, enfrentándose a peligros mortales y desafíos imposibles en su lucha por la libertad.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Lago de Tota",
    img: "https://tavapy.gov.py/biblioteca/wp-content/uploads/2022/03/71ff77s0XoL-1.jpg",
    categoria: "misterio",
    codigo: "LpOOO67",
    precio: 54000,
    descripcion:
      "Una serie de extrañas desapariciones en un tranquilo pueblo a orillas de un lago desatan una investigación policial llena de giros inesperados y oscuros secretos.",
    disponibilidad: false,
  },
  {
    nombre_libro: "El Último Amanecer",
    img: "https://cdn.kobo.com/book-images/491d5e80-a317-4ec4-9cfd-8e3cf7d4317b/1200/1200/False/harry-potter-y-la-camara-secreta-1.jpg",
    categoria: "ciencia ficcion",
    codigo: "LpPPP78",
    precio: 69000,
    descripcion:
      "En un futuro distópico donde el sol se está apagando, un grupo de valientes astronautas se embarca en una misión desesperada para salvar a la humanidad de la extinción, enfrentándose a peligros cósmicos y desafíos imposibles en el espacio profundo.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Castillo",
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/1b/18/1b189c515f10fc5fdec628c8db9f2473.jpg",
    categoria: "misterio",
    codigo: "LpQQQ89",
    precio: 55000,
    descripcion:
      "Un oscuro secreto se esconde tras los muros de un antiguo castillo, atrayendo a un grupo de investigadores que se ven envueltos en una red de misterios y traiciones.",
    disponibilidad: false,
  },
  {
    nombre_libro: "La Hija del Rey",
    img: "https://qph.cf2.quoracdn.net/main-qimg-7bd067ca8385d8657e9d602d64fcbfad-pjlq",
    categoria: "fantasia",
    codigo: "LpRRR90",
    precio: 67000,
    descripcion:
      "Una joven princesa se embarca en una aventura épica para reclamar su derecho al trono, enfrentándose a enemigos mortales y desafíos imposibles en su camino hacia el poder.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Secreto del Valle de la Muerte",
    img: "https://i.pinimg.com/736x/5e/b0/83/5eb083698297b7c649dd152ab40d0417.jpg",
    categoria: "misterio",
    codigo: "LpSSS01",
    precio: 49000,
    descripcion:
      "Un detective brillante investiga una serie de extrañas desapariciones en un tranquilo valle rural, descubriendo una red de secretos oscuros y peligros mortales que amenazan con destruir todo lo que conoce.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Último Susurro del Silencio",
    img: "https://images.cdn1.buscalibre.com/fit-in/360x360/99/00/9900e33bfd93383e19d7b1ce4ff6e05b.jpg",
    categoria: "suspenso",
    codigo: "LpMMM45",
    precio: 59000,
    descripcion:
      "Un oscuro secreto del pasado regresa para atormentar a una pequeña comunidad, desencadenando una serie de eventos que pondrán a prueba la voluntad y el coraje de sus habitantes.",
    disponibilidad: true,
  },
  {
    nombre_libro: "La Promesa del Guerrero",
    img: "https://images.cdn1.buscalibre.com/fit-in/360x360/0a/24/0a242d78fef6863b4dbaf98a8f9700d0.jpg",
    categoria: "fantasia",
    codigo: "LpAAB12",
    precio: 62000,
    descripcion:
      "Un guerrero renegado hace una promesa de venganza contra un imperio corrupto, enfrentándose a enemigos mortales y desafíos imposibles en su búsqueda de justicia y redención.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Bosque",
    img: "https://images.cdn2.buscalibre.com/fit-in/360x360/0b/31/b84f932fa751b23dadf3bf127d4a0b4e.jpg",
    categoria: "fantasia",
    codigo: "LpAAC23",
    precio: 59000,
    descripcion:
      "Una joven valiente se aventura en un bosque encantado en busca de su hermano perdido, descubriendo un mundo de magia y peligros ocultos en lo más profundo del bosque.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Destino del Guerrero Chifurro",
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/f8/7a/f87a3f21cf7fd134e8f3db688a906e1e.jpg",
    categoria: "fantasia",
    codigo: "LpAAD34",
    precio: 72000,
    descripcion:
      "Un guerrero legendario se enfrenta a su destino final en una batalla épica por el alma de su reino, enfrentándose a enemigos mortales y desafíos imposibles en su lucha por la libertad y la justicia.",
    disponibilidad: false,
  },
  {
    nombre_libro: "La Reina del Desierto sin Agua",
    img: "https://images.cdn2.buscalibre.com/fit-in/360x360/60/da/60da1012243b073e6acd846160db8905.jpg",
    categoria: "aventura",
    codigo: "LpAAE45",
    precio: 65000,
    descripcion:
      "Una joven guerrera se convierte en la última esperanza de su pueblo cuando un ejército invasor amenaza con destruir su hogar en el desierto, enfrentándose a peligros mortales y desafíos imposibles en su lucha por la libertad.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Lago Calima",
    img: "https://images.booksense.com/images/168/299/9781338299168.jpg",
    categoria: "misterio",
    codigo: "LpAAF56",
    precio: 54000,
    descripcion:
      "Una serie de extrañas desapariciones en un tranquilo pueblo a orillas de un lago desatan una investigación policial llena de giros inesperados y oscuros secretos.",
    disponibilidad: false,
  },
  {
    nombre_libro: "El Último Amanecer del Cielo",
    img: "https://m.media-amazon.com/images/I/A1hhGzpHssL._AC_UF1000,1000_QL80_.jpg",
    categoria: "ciencia ficcion",
    codigo: "LpAAG67",
    precio: 69000,
    descripcion:
      "En un futuro distópico donde el sol se está apagando, un grupo de valientes astronautas se embarca en una misión desesperada para salvar a la humanidad de la extinción, enfrentándose a peligros cósmicos y desafíos imposibles en el espacio profundo.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Castillo de la Noche",
    img: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781338299199&w=&h=570",
    categoria: "misterio",
    codigo: "LpAAH78",
    precio: 55000,
    descripcion:
      "Un oscuro secreto se esconde tras los muros de un antiguo castillo, atrayendo a un grupo de investigadores que se ven envueltos en una red de misterios y traiciones.",
    disponibilidad: false,
  },
  {
    nombre_libro: "La Hija del Rey",
    img: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781338299205&w=&h=570",
    categoria: "fantasia",
    codigo: "LpAAI89",
    precio: 67000,
    descripcion:
      "Una joven princesa se embarca en una aventura épica para reclamar su derecho al trono, enfrentándose a enemigos mortales y desafíos imposibles en su camino hacia el poder.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Secreto del Valle Verde",
    img: "https://img.remediosdigitales.com/000602/hp_y_la_piedra_filosofal_20_by_grafik-d8aomyb/450_1000.jpg",
    categoria: "misterio",
    codigo: "LpAAJ90",
    precio: 49000,
    descripcion:
      "Un detective brillante investiga una serie de extrañas desapariciones en un tranquilo valle rural, descubriendo una red de secretos oscuros y peligros mortales que amenazan con destruir todo lo que conoce.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Último Susurro de Silencio",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyK6-K68oCYRG8iWwwtqArJxuSP403vC1MaMMsBsgRAwdRsnjQuzelj1uUZguuSMHPmvARpCO2b6sWmAha8OQ8qqM1uV4XrnVSrj4hgfWHokzwxpKvZqRkpqd58q0u8mSS-91_RSJJX8GX/s1600/HarryPotterMisterioPrincipe.jpg",
    categoria: "suspenso",
    codigo: "LpAAK01",
    precio: 59000,
    descripcion:
      "Un oscuro secreto del pasado regresa para atormentar a una pequeña comunidad, desencadenando una serie de eventos que pondrán a prueba la voluntad y el coraje de sus habitantes.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Último Guerrero de la Noche",
    img: "https://images.cdn2.buscalibre.com/fit-in/360x360/1e/00/1e003ca055c2ca66e8dedb056ea2a688.jpg",
    categoria: "ciencia ficcion",
    codigo: "LpAAL12",
    precio: 75000,
    descripcion:
      "En un mundo asolado por la guerra, un joven huérfano descubre su destino como el último guerrero de una antigua profecía, enfrentándose a monstruos y magia oscura en su búsqueda de la verdad.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Secreto del lago",
    img: "https://www.bloghogwarts.com/wp-content/uploads/2014/07/harry-potter-6.jpeg",
    categoria: "fantasia",
    codigo: "LpAAM23",
    precio: 49000,
    descripcion:
      "Una joven valiente se aventura en un bosque encantado en busca de su hermano perdido, descubriendo un mundo de magia y peligros ocultos en lo más profundo del bosque.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Destino del Guerrero",
    img: "https://img1.od-cdn.com/ImageType-100/3450-1/%7B633251A3-C8FD-4FB3-A190-95E07EA18B30%7DIMG100.JPG",
    categoria: "fantasia",
    codigo: "LpAAN34",
    precio: 72000,
    descripcion:
      "Un guerrero legendario se enfrenta a su destino final en una batalla épica por el alma de su reino, enfrentándose a enemigos mortales y desafíos imposibles en su lucha por la libertad y la justicia.",
    disponibilidad: false,
  },
  {
    nombre_libro: "La Reina del Desierto de la Arena",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcCUYbqSNb92ZRFBzPAVn8EeWSnES66mUstj1Uia34tb6uP3c5YmmiqxCt4RvulyR_U79Vd_8PtO8JHz6dl-qd_b-UW5naNr7JaWadE2TYwZLCVN6cLMIwM1uRRZT00_ZVen2MqbwD6LU/s1600/hp7usa.jpg",
    categoria: "aventura",
    codigo: "LpAAO45",
    precio: 65000,
    descripcion:
      "Una joven guerrera se convierte en la última esperanza de su pueblo cuando un ejército invasor amenaza con destruir su hogar en el desierto, enfrentándose a peligros mortales y desafíos imposibles en su lucha por la libertad.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Lago Nes",
    img: "https://68.media.tumblr.com/9cbbaa54d3d178ada985e7ec9343fe26/tumblr_mqutu1vhDf1r9ecgko1_1280.jpg",
    categoria: "misterio",
    codigo: "LpAAP56",
    precio: 54000,
    descripcion:
      "Una serie de extrañas desapariciones en un tranquilo pueblo a orillas de un lago desatan una investigación policial llena de giros inesperados y oscuros secretos.",
    disponibilidad: false,
  },
  {
    nombre_libro: "El Último Amanecer del Sol",
    img: "https://images.ctfassets.net/usf1vwtuqyxm/2DCs73x6P8seNobQ9zBSbO/1a5dfd6ed5fc0ed9545370470fc3d74c/English_Harry_Potter_1_Epub_9781781100219.jpg?w=914&q=70&fm=webp",
    categoria: "ciencia ficcion",
    codigo: "LpAAQ67",
    precio: 69000,
    descripcion:
      "En un futuro distópico donde el sol se está apagando, un grupo de valientes astronautas se embarca en una misión desesperada para salvar a la humanidad de la extinción, enfrentándose a peligros cósmicos y desafíos imposibles en el espacio profundo.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Castillo de Arena",
    img: "https://i.kinja-img.com/gawker-media/image/upload/s--AUsfSKba--/c_scale,f_auto,fl_progressive,q_80,w_800/18eqlwy2pur67jpg.jpg",
    categoria: "misterio",
    codigo: "LpAAR78",
    precio: 55000,
    descripcion:
      "Un oscuro secreto se esconde tras los muros de un antiguo castillo, atrayendo a un grupo de investigadores que se ven envueltos en una red de misterios y traiciones.",
    disponibilidad: false,
  },
  {
    nombre_libro: "La Hija del Rey",
    img: "https://img.huffingtonpost.es/files/image_720/uploads/2023/01/12/63bfe8eaf3eb7.jpeg",
    categoria: "fantasia",
    codigo: "LpAAS89",
    precio: 67000,
    descripcion:
      "Una joven princesa se embarca en una aventura épica para reclamar su derecho al trono, enfrentándose a enemigos mortales y desafíos imposibles en su camino hacia el poder.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Secreto del Valle de los Negros",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8t5_keAXWH1cdt2IygA5fYjqr7K44xjR5S-hQPthbYLX4rBaCnnoUgDs3HN5nErl7KU&usqp=CAU",
    categoria: "misterio",
    codigo: "LpAAT90",
    precio: 49000,
    descripcion:
      "Un detective brillante investiga una serie de extrañas desapariciones en un tranquilo valle rural, descubriendo una red de secretos oscuros y peligros mortales que amenazan con destruir todo lo que conoce.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Último Susurro de Pepe",
    img: "https://i0.wp.com/harrypotterfanzone.com/wp-content/2009/06/gof-us-jacket-art.jpg",
    categoria: "suspenso",
    codigo: "LpAAU01",
    precio: 59000,
    descripcion:
      "Un oscuro secreto del pasado regresa para atormentar a una pequeña comunidad, desencadenando una serie de eventos que pondrán a prueba la voluntad y el coraje de sus habitantes.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Último Guerrero del Dia",
    img: "https://s-media-cache-ak0.pinimg.com/736x/ca/56/2e/ca562e816d8fb8c0f3419ca481d6d159.jpg",
    categoria: "ciencia ficcion",
    codigo: "LpAAV12",
    precio: 75000,
    descripcion:
      "En un mundo asolado por la guerra, un joven huérfano descubre su destino como el último guerrero de una antigua profecía, enfrentándose a monstruos y magia oscura en su búsqueda de la verdad.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Secreto del monte",
    img: "https://hips.hearstapps.com/hmg-prod/images/harry-potter-y-la-orden-del-fe-nix-1539935567.jpg?crop=1xw:1xh;center,top&resize=980:*",
    categoria: "fantasia",
    codigo: "LpAAW23",
    precio: 49000,
    descripcion:
      "Una joven valiente se aventura en un bosque encantado en busca de su hermano perdido, descubriendo un mundo de magia y peligros ocultos en lo más profundo del bosque.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Destino del Guerrero Hecarim",
    img: "https://hips.hearstapps.com/hmg-prod/images/harry-potter-y-las-reliquias-de-la-muerte-1539936942.jpg?crop=1xw:1xh;center,top&resize=980:*",
    categoria: "fantasia",
    codigo: "LpAAX34",
    precio: 72000,
    descripcion:
      "Un guerrero legendario se enfrenta a su destino final en una batalla épica por el alma de su reino, enfrentándose a enemigos mortales y desafíos imposibles en su lucha por la libertad y la justicia.",
    disponibilidad: false,
  },
  {
    nombre_libro: "La Reina del Desierto de Madagascar",
    img: "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1528056185/content-items/002/378/541/piedra_filosofal-original.jpg?1528056185",
    categoria: "aventura",
    codigo: "LpAAY45",
    precio: 65000,
    descripcion:
      "Una joven guerrera se convierte en la última esperanza de su pueblo cuando un ejército invasor amenaza con destruir su hogar en el desierto, enfrentándose a peligros mortales y desafíos imposibles en su lucha por la libertad.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Lago sin Agua",
    img: "https://covers.alibrate.com/b/59872e9ccba2bce50c1cbcde/41f0db5f-8975-49b5-8ddf-142e7394ff44/share",
    categoria: "misterio",
    codigo: "LpAAZ56",
    precio: 54000,
    descripcion:
      "Una serie de extrañas desapariciones en un tranquilo pueblo a orillas de un lago desatan una investigación policial llena de giros inesperados y oscuros secretos.",
    disponibilidad: false,
  },
  {
    nombre_libro: "El Último Amanecer del sin Dientes",
    img: "https://www.itsup.edu.ec/library/fetch.php?height=328&id=28978&db=0",
    categoria: "ciencia ficcion",
    codigo: "LpAAA67",
    precio: 69000,
    descripcion:
      "En un futuro distópico donde el sol se está apagando, un grupo de valientes astronautas se embarca en una misión desesperada para salvar a la humanidad de la extinción, enfrentándose a peligros cósmicos y desafíos imposibles en el espacio profundo.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Castillo de Drakula",
    img: "https://luchostore.com/wp-content/uploads/2020/07/2301.webp",
    categoria: "misterio",
    codigo: "LpAAB78",
    precio: 55000,
    descripcion:
      "Un oscuro secreto se esconde tras los muros de un antiguo castillo, atrayendo a un grupo de investigadores que se ven envueltos en una red de misterios y traiciones.",
    disponibilidad: false,
  },
  {
    nombre_libro: "La Hija del Rey",
    img: "https://imagessl9.casadellibro.com/a/l/s5/49/9788416367849.webp",
    categoria: "fantasia",
    codigo: "LpAAC89",
    precio: 67000,
    descripcion:
      "Una joven princesa se embarca en una aventura épica para reclamar su derecho al trono, enfrentándose a enemigos mortales y desafíos imposibles en su camino hacia el poder.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Secreto del Valle",
    img: "https://www.polifemo.com/static/img/portadas/_visd_0000JPG01RUP.jpg",
    categoria: "misterio",
    codigo: "LpAAD90",
    precio: 49000,
    descripcion:
      "Un detective brillante investiga una serie de extrañas desapariciones en un tranquilo valle rural, descubriendo una red de secretos oscuros y peligros mortales que amenazan con destruir todo lo que conoce.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Último Susurro",
    img: "https://contrapunto.cl/15333/harry-potter-y-el-caliz-de-fuego.jpg",
    categoria: "suspenso",
    codigo: "LpAAE01",
    precio: 59000,
    descripcion:
      "Un oscuro secreto del pasado regresa para atormentar a una pequeña comunidad, desencadenando una serie de eventos que pondrán a prueba la voluntad y el coraje de sus habitantes.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Último Guerrero Dragon",
    img: "https://img.wattpad.com/38e6f671939da66ab03762c644347c36f8933ea9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f432d557a6e556b61506534566e673d3d2d3336393635363937342e313461313231383033323963643161653834303839353630363539352e6a7067?s=fit&w=720&h=720",
    categoria: "ciencia ficcion",
    codigo: "LpAAF12",
    precio: 75000,
    descripcion:
      "En un mundo asolado por la guerra, un joven huérfano descubre su destino como el último guerrero de una antigua profecía, enfrentándose a monstruos y magia oscura en su búsqueda de la verdad.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Secreto del toto",
    img: "https://www.mrbooks.com/mrbooks/portadas/9789585234079.webp",
    categoria: "fantasia",
    codigo: "LpAAG23",
    precio: 49000,
    descripcion:
      "Una joven valiente se aventura en un bosque encantado en busca de su hermano perdido, descubriendo un mundo de magia y peligros ocultos en lo más profundo del bosque.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Destino del Guerrero Dragon",
    img: "https://http2.mlstatic.com/D_NQ_NP_775728-MLA43460553522_092020-O.webp",
    categoria: "fantasia",
    codigo: "LpAAH34",
    precio: 72000,
    descripcion:
      "Un guerrero legendario se enfrenta a su destino final en una batalla épica por el alma de su reino, enfrentándose a enemigos mortales y desafíos imposibles en su lucha por la libertad y la justicia.",
    disponibilidad: false,
  },
  {
    nombre_libro: "La Reina del Desierto sin Tesorros ni Tierras",
    img: "https://m.media-amazon.com/images/I/91-m-29l27L._AC_UF1000,1000_QL80_.jpg",
    categoria: "aventura",
    codigo: "LpAAI45",
    precio: 65000,
    descripcion:
      "Una joven guerrera se convierte en la última esperanza de su pueblo cuando un ejército invasor amenaza con destruir su hogar en el desierto, enfrentándose a peligros mortales y desafíos imposibles en su lucha por la libertad.",
    disponibilidad: true,
  },
  {
    nombre_libro: "El Misterio del Lago de Pripra",
    img: "https://assets.afcdn.com/story/20170201/1041695_w300h439cx149cy220.jpg",
    categoria: "misterio",
    codigo: "LpAAJ56",
    precio: 54000,
    descripcion:
      "Una serie de extrañas desapariciones en un tranquilo pueblo a orillas de un lago desatan una investigación policial llena de giros inesperados y oscuros secretos.",
    disponibilidad: false,
  },
];
// comienza el codigo para la funcion de mostrar lo del array
const itemsPerPage = 15;
let currentPage = 1;

function displayProducts(page) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = products.slice(startIndex, endIndex);

  productsToDisplay.forEach((product) => {
    const productBox = document.createElement("div");
    productBox.classList.add("product-box");
    productBox.innerHTML = `
    <img src="${product.img}" alt="${product.nombre_libro}">
    <h3>${product.nombre_libro}</h3>
    <p>Categoría: ${product.categoria}</p>
    <p>Código: ${product.codigo}</p>
    <p>Precio: $${product.precio.toFixed(2)}</p>
    <p>${product.descripcion}</p>
    <p>${product.disponibilidad ? "Disponible" : "No Disponible"}</p>
`;
    productContainer.appendChild(productBox);
  });

  document.getElementById("prev-page").disabled = page === 1;
  document.getElementById("next-page").disabled = endIndex >= products.length;
}

document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayProducts(currentPage);
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  if (currentPage * itemsPerPage < products.length) {
    currentPage++;
    displayProducts(currentPage);
  }
});

// Inicializar la primera página
displayProducts(currentPage);

//Inicia el registro

// Espera a que se cargue el DOM antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el formulario de registro
  const form = document.getElementById("productForm");

  // Agrega un evento de escucha para el envío del formulario
  form.addEventListener("submit", function (event) {
    // Previene el comportamiento predeterminado de envío del formulario
    event.preventDefault();

    // Selecciona el contenedor de mensajes
    const messageElement = document.getElementById("message-container");

    // Resetear mensajes de error
    messageElement.innerText = "";

    // Obtener los valores de los campos del formulario
    const nombreInput = document.getElementById("nombre_libro");
    const imgInput = document.getElementById("img");
    const categoriaInput = document.getElementById("categoria");
    const precioInput = document.getElementById("precio");
    const descripcionInput = document.getElementById("descripcion");
    const disponibilidadInput = document.getElementById("disponibilidad");

    const nombre = nombreInput.value.trim();
    const img = imgInput.value.trim();
    const categoria = categoriaInput.value.trim();
    const precio = precioInput.value.trim();
    const descripcion = descripcionInput.value.trim();

    // Validar que todos los campos estén completados
    if (!nombre || !img || !categoria || !precio || !descripcion) {
      messageElement.innerText = "Por favor completa todos los campos.";
      return;
    }

    // Mostrar mensaje de "Registro exitoso"
    messageElement.innerText = "Registro exitoso.";
  });
});
