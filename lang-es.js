const websiteES = {
  "menu": {
    "home": "Inicio",
    "about": "Acerca de mí",
    "portfolio": "Desarrollo Web",
    "games": "Videojuegos",
    "mugen": "M.U.G.E.N.",
    "wip": "Trabajo En Progreso",
    "events": "Eventos"
  },
  "btn": {
    "show-more": "Cargar más"
  },
  "hero": {
    "header": "Hola, soy Néstor García",
    "title": "Front-End Developer | Experiencia con JavaScript, HTML, CSS | Desarrollo web y de videojuegos en CDMX",
  },
  "about": {
    "title": "Acerca de mí",
    "paragraph": "<p>¡Gracias por tu visita! A lo largo de mi carrera he trabajado en plataformas de contenido, sitios de promoción, sitios informativos, CMS, landing pages, experiencias web interactivas y videojuegos.</p>"+
								"<p>Busco colaborar en el desarrollo de experiencias cautivantes que brinden valor a su público, considerando las limitaciones como un impulso para el área creativa y la resolución de problemas.</p>"+
								"<p>Es así que he participado en proyectos para Alka-Seltzer, Caminos de la Libertad, Bimbo, Liga MX, TecSalud, Universidad Anáhuac, Talana y Tecmilenio, entre otros.</p>"+
								"<p>Entre mis proyectos personales he programado contenido para el motor M.U.G.E.N. inspirado por Capcom, la plataforma de entretenimiento y el canal de YouTube Power Items, y Redd's Runaway, un videojuego Run &amp; Gun procedural inspirado por las festividades de Halloween y día de muertos para Windows, disponible en Steam.</p>",
    "download": "Descargar Curriculum Vitae"
  },
  "portfolio": {
    "title": "Desarrollo web"
  },
  "games": {
    "title": "Videojuegos",
    "platforms": "Plataformas:&nbsp;"
  },
  "mugen": {
    "title": "M.U.G.E.N.",
    "origin": "Origen:&nbsp;",
    "release": "Fecha de lanzamiento:&nbsp;",
    "update": "Última actualización:&nbsp;"
  },
  "wip": {
    "title": "Trabajo en progreso (W.I.P.)",
    "origin": ""
  },
  "events": {
    "title": "Eventos"
  },
  "footer": {
    "text-1": "Sitio diseñado por Néstor García",
    "text-2": "Las marcas, logotipos e ilustraciones mostradas son propiedad de sus respectivos dueños, utilizadas únicamente con fines ilustrativos"
  }
}

const experienceArrayES = {
  "1": {
    "name": "Front-End Web",
    "icon": "bx-code-alt",
    "bullets": [
      "Tecnología y frameworks: HTML, CSS, Javascript, NodeJS, Gulp, Pug, Stylus, Less, Tailwind, Bootstrap, jQuery, React, Hubspot, BitBucket.",
      "Maquetado de sitios web responsivos.",
      "Comprobación de desempeño y velocidad de carga.",
      "Conexión con API's.",
      "Uso de Javascript para sitios dinámicos.",
      "Implementación de localización para el contenido de sitios web (ENG/ESP) por medio de archivos Javascript.",
      "Uso de Hubspot para sitios web y blogs dinámicos."
    ],
  },
  "2": {
    "name": "Game Dev",
    "icon": "bx-joystick",
    "bullets": [
      "Tecnología y frameworks: Godot, Steam, GodotSteam, Google Drive, Trello, Photoshop, Aseprite, DaVinci Resolve, Audacity, GitLab.",
      "Diseño técnico de videojuegos: Game Design, UX, UI, mecánicas.",
      "Desarrollo de proyectos de forma iterativa e incremental (Scrum, sprints).",
      "Publicación en línea mediante las plataformas Steam, itch.io y Play Store.",
      "Visión enfocada en narrativa, atmósfera visual y gameplay cautivante."
    ],
  },
  "3": {
    "name": "Back-End Web",
    "icon": "bx-code-curly",
    "bullets": [
      "Tecnología y frameworks: PHP, Codeigniter, Laravel, Github.",
      "Uso del patrón Modelo/Vista/Controlador (MVC).",
      "Desarrollo modular de funciones.",
      "Construcción de portales con CMS personalizados.",
      "Implementación de localización para el contenido de sitios web (ENG/ESP)."
    ],
  }
}

const projectArrayES = {
  "1": {
    "url": "https://boardwalkcustombuilders.com/",
    "name": "Boardwalk Custom Builders",
    "date": "2025",
    "type": "Black & Orange",
    "thumb": "./img/thumb-boardwalk.jpg",
    "img": "./img/boardwalk.jpg",
    "description": "<p>Desarrollo de portal web utilizando WordPress y Elementor para una variedad de secciones, con el objetivo de dar a conocer los servicios de Boardwalk.</p>"
  },

  "2": {
    "url": "https://malekservice.com/",
    "name": "Malek Service",
    "date": "2025",
    "type": "Black & Orange",
    "thumb": "./img/thumb-malek.jpg",
    "img": "./img/malek.jpg",
    "description": "<p>Sitio web desarrollado con WordPress, dirigido a la conversión de nuevos clientes para el negocio. Uso de Elementor para los elementos personalizados del proyecto.</p>"
  },

  "3": {
    "url": "https://www.valorpyme.cl/",
    "name": "Valor PyME",
    "date": "2025",
    "type": "Black & Orange",
    "thumb": "./img/thumb-valor-pyme.jpg",
    "img": "./img/valor-pyme.jpg",
    "description": "<p>Desarrollo constante de módulos para Valor PyME, generando nuevas plantillas con una optimización constante y para su posterior reutilización en nuevas páginas. Implementación de carruseles y módulos con funcionalidades incrementales acorde a las necesidades del cliente y sus usuarios.</p>"
  },
  
  "4": {
    "url": "https://traxion.global/es/",
    "name": "Traxión",
    "date": "2024",
    "type": "Black & Orange",
    "thumb": "./img/thumb-traxion-2024.png",
    "img": "./img/traxion-2024.png",
    "description": "<p>Colaboración en el desarrollo de una variedad de unidades de negocio de Grupo Traxión, agilizado mediante el uso de módulos desarrollados con Pug y Tailwind, integrados con Hubspot.</p>"
  },

  "5": {
    "url": "https://www.defontana.com/cl",
    "name": "Defontana",
    "date": "2023",
    "type": "Black & Orange",
    "thumb": "./img/thumb-defontana-oct23.png",
    "img": "./img/defontana-oct23.png",
    "description": "<p>Sitio desarrollado con Gulp, Pug, Tailwind, preparado para su integración con Hubspot, presentando una serie de efectos parallax atractivos para el usuario.</p>"
  },

  "6": {
    "url": "https://universidad.tecmilenio.mx/preparatoria",
    "name": "Universidad Tecmilenio",
    "date": "2023",
    "type": "Black & Orange",
    "thumb": "./img/thumb-tecmilenio-2023.png",
    "img": "./img/tecmilenio-2023.png",
    "description": "<p>Desarrollo de módulos en 6 divisiones de negocio para la comunidad Tecmilenio, con sitios preparados para su implementación y alimentación en Hubspot.</p>"
  },

  "7": {
    "url": "https://hobmanuals.com/",
    "name": "Hob Manuals",
    "date": "2023",
    "type": "Black & Orange",
    "thumb": "./img/thumb-hobmanuals-sep23.png",
    "img": "./img/hobmanuals-sep23.png",
    "description": "<p>Sitio desarrollado con Gulp, Pug, Tailwind, preparado para su integración con Hubspot.</p>"
  },

  "8": {
    "url": "https://www.black-n-orange.com/",
    "name": "Black & Orange",
    "date": "2023",
    "type": "Black & Orange",
    "thumb": "./img/thumb-black-n-orange.png",
    "img": "./img/black-n-orange.png",
    "description": "<p>Sitio desarrollado con el uso de Tailwind, aprovechando al máximo las capacidades del framework para actualizaciones próximas y un desarrollo con la menor cantidad de scripts posibles, utilizando Javascript. Implementación de animaciones.</p>"
  },

  "9": {
    "url": "https://web.talana.com/",
    "name": "Talana",
    "date": "2023",
    "type": "Black & Orange",
    "thumb": "./img/thumb-talana.jpg",
    "img": "./img/talana.jpg",
    "description": "<p>Sitio web  desarrollado a la par de landing pages con módulos reusables y personalizados. Desarrollo de calculadora de salarios con retroalimentación gráfica.</p>"
  },

  "10": {
    "url": "https://content.tecsalud.mx/cancer-de-mama",
    "name": "Landing TecSalud",
    "date": "2022",
    "type": "Black & Orange",
    "thumb": "./img/thumb-tecsalud_2022.png",
    "img": "./img/tecsalud_2022.png",
    "description": "<p>Landing Page desarrollada con secciones modularizadas, de tal forma que puedan ser reutilizadas en un futuro. Implementación de videos de Facebook y YouTube.</p>"
  },

  "11": {
    "url": "https://residencesrancholapuerta.com/",
    "name": "Rancho La Puerta",
    "date": "2022",
    "type": "Black & Orange",
    "thumb": "./img/thumb-espiritu_2022.png",
    "img": "./img/espiritu_2022.png",
    "description": "<p>Página desarrollada con una variedad de elementos diferentes para mostrar información a los clientes (carruseles, tabs, modales, formularios). Módulos hospedados en la plataforma Hubspot.</p>"
  },

  "12": {
    "url": "https://www.kurabiotech.com/",
    "name": "Kura",
    "date": "2022",
    "type": "Black & Orange",
    "thumb": "./img/thumb-kura.jpg",
    "img": "./img/kura.jpg",
    "description": "<p>Sitio web desarrollado con secciones modularizadas, de tal forma que puedan ser reutilizadas en un futuro. Uso de elementos gráficos por medio de capas de color.</p>"
  },

  "13": {
    "url": "https://www.temis-apps.com/",
    "name": "Temis",
    "date": "2022",
    "type": "Black & Orange",
    "thumb": "./img/thumb-temis_2022.png",
    "img": "./img/temis_2022.png",
    "description": "<p>Desarrollo de sitio web y blog, enfoque principal en mostrar funcionalidades a los usuarios potenciales por medio de material visual dinámico (imágenes, videos).</p>"
  },

  "14": {
    "url": "https://poweritems.com.mx/",
    "name": "Power Items 3.0",
    "date": "2021",
    "type": "Proyecto Personal",
    "thumb": "./img/thumb-power-items-3.jpg",
    "img": "./img/power-items-3.jpg",
    "description": "<p>Actualización final de la plataforma, enfocada en crear una Single-Page App. Implementación realizada con Laravel (PHP, framework MVC) y React, junto con una actualización de la PWA implementada previamente en la plataforma.</p>"
  },

  "15": {
    "url": "https://bewolfstudio.com/",
    "name": "BeWolf Studio",
    "date": "2020",
    "type": "BeWolf Studio",
    "thumb": "./img/thumb-bewolf-studio.jpg",
    "img": "./img/bewolf-studio.jpg",
    "description": "<p>Sitio web programado para mostrar proyectos personales en el área de videojuegos. Desarrollo realizado con CodeIgniter (Modelo Vista Controlador), implementando funciones de localización de idioma y Presskit para obtener más información de los juegos presentados. Template por Colorlib.</p>"
  },

  "16": {
    "url": "https://marqcopeques.com/",
    "name": "MarqCó Peques",
    "date": "2019",
    "type": "Ingenia Agency",
    "thumb": "./img/thumb-ingenia-2019-marqco.jpg",
    "img": "./img/ingenia-2019-marqco.jpg",
    "description": "<p>Desarrollo web Front-End. Trabajo realizado con HTML, CSS y Javascript. Uso de las herramientas de automatización y frameworks Gulp Pug, Less, Stylus, NodeJS, jQuery. Creación de componentes reutilizables. Desarrollo de la versión 1.0 del sitio web, la cual incluye tanto secciones informativas como un diseñador de muebles básico; progreso en diseñador de muebles avanzado.</p>"
  },

  "17": {
    "url": "",
    "name": "Herdez Hoy Toca",
    "date": "2019",
    "type": "Ingenia Agency",
    "thumb": "./img/thumb-ingenia-2019-herdez.jpg",
    "img": "./img/ingenia-2019-herdez.jpg",
    "description": "<p>Desarrollo web Front-End. Trabajo realizado con HTML, CSS y Javascript. Uso de las herramientas de automatización y frameworks Gulp Pug, Less, Stylus, NodeJS, jQuery. Creación de componentes reutilizables. Encargado principal del apartado Front-End del proyecto, el cual incluía una Progressive Web App para mayor visibilidad.</p>"
  },

  "18": {
    "url": "https://poweritems.com.mx/",
    "name": "Power Items 2.0",
    "date": "2019",
    "type": "Proyecto Personal",
    "thumb": "./img/thumb-power-items-2.jpg",
    "img": "./img/power-items-2.jpg",
    "description": "<p>Actualización de nuestra plataforma digital de entretenimiento, enfocada en dos áreas: renovación de la identidad visual y optimización del desempeño funcional de la plataforma. Realizado con NodeJS, mediante HTML (Pug), CSS (Less) y JS (jQuery). Implementación con Codeigniter (PHP, framework MVC) y preparación de una Progressive Web App para móviles.</p>"
  },

  "19": {
    "url": "https://poweritems.com.mx/",
    "name": "Power Items",
    "date": "2017",
    "type": "Proyecto Personal",
    "thumb": "./img/thumb-power-items-1.jpg",
    "img": "./img/power-items-1.jpg",
    "description": "<p>Plataforma de entretenimiento digital 'Power Items', activa desde el 20 de mayo de 2017, y alimentada periódicamente, abarcando diversos temas como videojuegos, cine, series, música, libros, reflexión, lugares y más. Desarrollo de portal web y CMS.</p>"
  },

  "20": {
    "url": "https://ligamx.net/",
    "name": "Liga MX",
    "date": "2017",
    "type": "Ingenia Agency",
    "thumb": "./img/thumb-liga-mx.jpg",
    "img": "./img/liga-mx.jpg",
    "description": "<p>Maquetado de secciones y componentes reutilizables. Enfoque principal en tablas de marcadores de equipos.</p>"
  },

  "21": {
    "url": "https://grupobimbo.com/es",
    "name": "Grupo Bimbo",
    "date": "2016-2017",
    "type": "Ingenia Agency",
    "thumb": "./img/thumb-grupo-bimbo.jpg",
    "img": "./img/grupo-bimbo.jpg",
    "description": "<p>Desarrollo web Front-End. Trabajo realizado con HTML, CSS y Javascript. Uso de las herramientas de automatización y frameworks Gulp Pug, Less, Stylus, NodeJS, jQuery. Creación de componentes reutilizables. Enfoque principal en línea del tiempo y secciones informativas.</p>"
  },

  "22": {
    "url": "",
    "name": "El álbum de Laura",
    "date": "2014",
    "type": "Proyecto Personal",
    "thumb": "./img/thumb-album-laura.jpg",
    "img": "./img/album-laura.jpg",
    "description": "<p>Creado en el año 2014, 'El álbum de Laura' fue una historia interactiva de horror desarrollada de manera progresiva durante varias semanas de Octubre y Noviembre, haciendo uso de un sitio web y Facebook. El sitio sufriría cambios estéticos hasta su fecha de culminación, momento en el que se activaba un nuevo mensaje al público.</p>"
  },

  "23": {
    "url": "https://web.archive.org/web/20140516191837/http://caminosdelalibertad.com.mx/",
    "name": "Caminos de la Libertad",
    "date": "2014",
    "type": "GB Mobile",
    "thumb": "./img/thumb-caminos-libertad.jpg",
    "img": "./img/caminos-libertad.jpg",
    "description": "<p>Plataforma de contenido preparada para una fácil navegación, tanto por el público que visita el portal como por la administradora de contenido. Desarrollo realizado con CodeIgniter, bajo la arquitectura Modelo Vista Controlador.</p>"
  },

  "24": {
    "url": "",
    "name": "Alka-Seltzer Boost",
    "date": "2013",
    "type": "GB Mobile",
    "thumb": "./img/thumb-alka-seltzer.jpg",
    "img": "./img/alka-seltzer.jpg",
    "description": "<p>Enfoque en las animaciones e interacciones que habitan el sitio. Desarrollo realizado con CodeIgniter, bajo la arquitectura Modelo Vista Controlador.</p>"
  },

  "25": {
    "url": "",
    "name": "Dove Men NFL",
    "date": "2013",
    "type": "GB Mobile",
    "thumb": "./img/thumb-dove-men.jpg",
    "img": "./img/dove-men.jpg",
    "description": "<p>Recurso principal en el desarrollo completo del proyecto (sitio web, CMS). Desarrollo realizado con CodeIgniter, bajo la arquitectura Modelo Vista Controlador.</p>"
  },
  
  
}


const gamesArrayES = {
  "1": {
    "url": "https://hagenhb.itch.io/chopped-tomato",
    "name": "Chopped Tomato",
    "date": "2024",
    "platforms": "Web",
    "type": "Game Jam",
    "thumb": "./img/thumb-chopped-tomato-01.png",
    "description": "<p>Videojuego Survival con tiempo para navegadores web creado para el Mini Game Jam 34, desarrollado en un equipo de 3 personas. Enfoque principal en la gestión del equipo, lógica del personaje, colisiones y la invocación de enemigos en el escenario.</p>"
  },
  
  "2": {
    "url": "https://nestor-2099.itch.io/city-of-darkness-top-down-shooter",
    "name": "City of Darkness",
    "date": "2022",
    "platforms": "PC, Web",
    "type": "Game Jam",
    "thumb": "./img/thumb-city-darkness.png",
    "description": "<p>Videojuego Top-Down Shooter para Windows y HTML5 desarrollado en 48 horas, para participar en el Wowie Jam 4.0 - 'Collaborate with AI'. Desarrollado con Godot Engine. Enfoque principal: creación de torretas autodirigidas que puedan recibir mejoras continuas.</p>"
  },

  "3": {
    "url": "https://nestor-2099.itch.io/beware-of-the-rude-dog",
    "name": "Beware of the Rude Dog",
    "date": "2021",
    "platforms": "PC, Web",
    "type": "Game Jam",
    "thumb": "./img/thumb-beware-dog.jpg",
    "description": "<p>Videojuego Escape/Survival para Windows y HTML5 desarrollado en 48 horas, para participar en el Wowie Jam 3.0 - 'Failure is progress'. Regeneración de objetos en tiempo real.</p>"
  },

  "4": {
    "url": "https://nestor-2099.itch.io/dungeon-mayhem",
    "name": "Dungeon Mayhem",
    "date": "2020",
    "platforms": "PC, Web",
    "type": "Game Jam",
    "thumb": "./img/thumb-dungeon-mayhem.jpg",
    "description": "<p>Videojuego Tower Defense 2D desarrollado en el motor Godot para PC. Regalo para el también desarrollador de juegos Alexandress, como parte del Secret Santa Jam 2020.</p>"
  },
  
  "5": {
    "url": "https://steam.pm/app/1411770",
    "name": "Redd\'s Runaway",
    "date": "2020",
    "platforms": "PC",
    "type": "Videojuego comercial",
    "thumb": "./img/thumb-redds-runaway.jpg",
    "description": "<p>Videojuego Run & Gun procedural 2D desarrollado en el motor Godot para PC, con ayuda de artistas y músicos profesionales. Inspirado por las tradiciones de Halloween y Día de Muertos.</p>"
  },
  
  "6": {
    "url": "https://nestor-2099.itch.io/gravity-spark",
    "name": "Gravity Spark",
    "date": "2020",
    "platforms": "PC, Android, macOS",
    "type": "Game Jam",
    "thumb": "./img/thumb-gravity-spark.jpg",
    "description": "<p>Videojuego Shooter Multidireccional para Windows y Mac desarrollado en 48 horas, para participar en el GMTK Game Jam 2020 - 'Out Of Control'. Software usado: Godot, Aseprite, GIMP, Audacity.</p>"
  },

  "7": {
    "url": "",
    "name": "Loa",
    "date": "2015",
    "platforms": "Android",
    "type": "Descargable",
    "thumb": "./img/thumb-loa.jpg",
    "description": "<p>Videojuego para Android, desarrollado por medio del motor de videojuegos Unity. Publicado por Duck Media Digital/GB Mobile.</p>"
  },

  "8": {
    "url": "https://appadvice.com/app/kokus/1085303357",
    "name": "Kokus",
    "date": "2015",
    "platforms": "iOS",
    "type": "Descargable",
    "thumb": "./img/thumb-kokus.jpg",
    "description": "<p>Videojuego para iOS, desarrollado por medio del motor de videojuegos Unity. Publicado por Duck Media Digital/GB Mobile. Uso del acelerómetro del dispositivo, incluía 3 niveles que concluían en un screamer para sorprender al jugador.</p>"
  },

  "9": {
    "url": "https://youtu.be/mTRzgQYvGeU",
    "name": "Abadon",
    "date": "2012",
    "platforms": "PC",
    "type": "Proyecto de titulación",
    "thumb": "./img/thumb-abadon.jpg",
    "description": "<p>Videojuego Beat 'Em Up Multijugador en Tercera Dimensión; proyecto de titulación para la Escuela Superior de Cómputo (ESCOM), el cuál incluye tanto la parte teórica como una demostración jugable de dos niveles. Herramientas: Microsoft Visual C#, XNA 4.0.</p>"
  },
  
}

const mugenArrayES = {
  "1": {
    "url": "https://www.infinitymugenteam.com/Forum_345/index.php?topic=48637.msg561596;topicseen#new",
    "name": "Shuma-Gorath",
    "origin": "Doctor Strange, Marvel Vs. Capcom 2",
    "description": "<p>Inspirado por Marvel Vs. Capcom 2 & 3</p>",
    "thumb": "./img/shuma-01.png",
    "release": "2022-02-20",
    "update": "2022-02-22",
  },
  "2": {
    "url": "https://mugenguild.com/forum/topics/fiona-versus-series-style-177008.0.html",
    "name": "Fiona Belli",
    "origin": "Haunting Ground",
    "description": "<p>Sistema de pelea de la serie Versus</p>",
    "thumb": "./img/fiona-01.png",
    "release": "2016-10-31",
    "update": "2016-10-31",
  },
  "3": {
    "url": "https://mugenguild.com/forum/topics/chris-redfield-public-version-release-154705.0.html",
    "name": "Chris Redfield",
    "origin": "Resident Evil, Marvel Vs. Capcom 3",
    "description": "<p>Inspirado por Marvel Vs. Capcom 3</p>",
    "thumb": "./img/chris-01.png",
    "release": "2013-10-31",
    "update": "2013-10-31",
  },
  "4": {
    "url": "https://infinitymugenteam.com/nestor/chars/legacy/ViewtifulJoe_CFAS.zip",
    "name": "Viewtiful Joe",
    "origin": "Viewtiful Joe, Tatsunoko Vs. Capcom",
    "description": "<p>Sistema de pelea de la serie Versus</p>",
    "thumb": "./img/vjoe-01.png",
    "release": "2012",
    "update": "2012",
  },
  "5": {
    "url": "https://infinitymugenteam.com/nestor/chars/legacy/Leo_CFAS.zip",
    "name": "Leo",
    "origin": "Red Earth, Capcom Fighting Evolution",
    "description": "<p>Sistema de pelea de la serie Versus</p>",
    "thumb": "./img/leo-01.png",
    "release": "2012",
    "update": "2012",
  },
  "6": {
    "url": "https://infinitymugenteam.com/nestor/chars/legacy/Ryu_CFAS.zip",
    "name": "Ryu",
    "origin": "Street Fighter, Marvel Vs. Capcom, Tatsunoko Vs. Capcom",
    "description": "<p>Sistema de pelea de la serie Versus</p>",
    "thumb": "./img/ryu-01.png",
    "release": "2012",
    "update": "2012",
  },
  "7": {
    "url": "http://www.infinitymugenteam.com/Forum_345/index.php?topic=42358.0",
    "name": "Marvel Vs. Capcom UDB Demo",
    "origin": "Serie Marvel Vs. Capcom",
    "description": "<p>Demo de juego de pelea de serie Versus</p>",
    "thumb": "./img/mvc-udb-01.png",
    "release": "2014-01-02",
    "update": "2014-01-02",
  },
  "8": {
    "url": "https://www.infinitymugenteam.com/Forum_345/index.php?topic=49147.msg563207",
    "name": "Contribuidor Megaman Robot Master Mayhem",
    "origin": "Megaman, Marvel Vs. Capcom",
    "description": "<p>Juego de pelea de serie Versus, contribución con Axl, FireMan, WoodMan (lanzamiento inicial)</p>",
    "thumb": "./img/rmm-01.png",
    "release": "2012",
    "update": "2024",
  },
  "9": {
    "url": "https://infinitymugenteam.com/nestor/versus-lifebars_2016-07-10.zip",
    "name": "Lifebars Versus series",
    "origin": "Set de lifebar original",
    "description": "<p>Add-on de lifebar</p>",
    "thumb": "./img/vs-lb-01.png",
    "release": "2012",
    "update": "2012",
  },

}

const wipsArrayES = {
  "1": {
    "url": "",
    "name": "Spin-Off Runaway",
    "origin": "Videojuego comercial",
    "description": "<p>Videojuego top-down shooter dentro del mundo de Redd's Runaway, desarrollado en Godot Engine</p>",
    "thumb": "./img/spinoff-runaway-01.png",
  },
  "2": {
    "url": "",
    "name": "Morrigan",
    "origin": "DarkStalkers, Marvel Vs. Capcom",
    "description": "<p>Personaje MUGEN | Sistema de pelea: Versus series</p>",
    "thumb": "./img/morrigan-01.png",
  },
  "3": {
    "url": "",
    "name": "Batsu",
    "origin": "Rival Schools, Tatsunoko Vs. Capcom",
    "description": "<p>Personaje MUGEN | Sistema de pelea: Versus series</p>",
    "thumb": "./img/batsu-01.png",
  },
  "4": {
    "url": "",
    "name": "Rouge",
    "origin": "Power Stone",
    "description": "<p>Personaje MUGEN | Sistema de pelea: Versus series</p>",
    "thumb": "./img/rouge-01.png",
  },
  "5": {
    "url": "",
    "name": "Leon S. Kennedy",
    "origin": "Resident Evil",
    "description": "<p>Personaje MUGEN | Sistema de pelea: Versus series</p>",
    "thumb": "./img/leon-01.png",
  },

}


const eventsArrayES = {
  "1": {
    "url": "https://store.steampowered.com/curator/43874062/sale/MexicanEntertainmentSystem",
    "name": "Venta M.E.S.",
    "date": "2025",
    "type": "Mexican Entertainment System",
    "thumb": "./img/thumb-events-2025-mes.jpg",
    "img": "./img/events-2025-mes.jpg",
    "description": "<p>Participación en la venta Mexican Entertainment System, evento que concentra talento mexicano para promover y promocionar una amplia variedad de títulos independientes.</p><p>Agradecimiento especial a Blas David Castañeda y el equipo de Third World Productions por la invitación.</p>"
  },
  
  "2": {
    "url": "https://www.instagram.com/p/Cz7dbUmuf58/?img_index=1",
    "name": "EGS México SurvivAll",
    "date": "2023",
    "type": "Entertainment Gaming Show México",
    "thumb": "./img/thumb-events-2023-egs.jpg",
    "img": "./img/events-2023-egs.jpg",
    "description": "<p>Partidas presenciales y entrevistas relacionadas al título Redd's Runaway, con una fuerte afluencia de jugadores gracias a la participación del título en las dinámicas propuestas dentro del evento.</p><p>Agradecimiento especial a Jorge González por la invitación.</p>"
  },

  "3": {
    "url": "https://www.facebook.com/photo/?fbid=775403841262040&set=pcb.775403957928695",
    "name": "CeCeHachero Film Fest",
    "date": "2023",
    "type": "Festival Internacional de Cine del CCH de la UNAM",
    "thumb": "./img/thumb-events-2023-cecehachero.jpg",
    "img": "./img/events-2023-cecehachero.jpg",
    "description": "<p>Presentación de Redd's Runaway frente al foro asistente al CeCeHachero Film Fest 7, de la mano con partidas presenciales del juego y breves comentarios sobre su desarrollo.</p><p>Agradecimiento especial a Vania Tovilla Quesada por la invitación.</p>"
  },

  "4": {
    "url": "",
    "name": "Gaming Week México",
    "date": "2020",
    "type": "Gaming Week MX",
    "thumb": "./img/thumb-events-2020-gaming-week.jpg",
    "img": "./img/events-2020-gaming-week.jpg",
    "description": "<p>Presentación de Redd's Runaway en el Main Stage dentro de la sección KNOW MY GAME, con un breve video señalando las características del título como medio de difusión a nuevo público adentrándose al mundo de los videojuegos independientes de México.</p>"
  },
}