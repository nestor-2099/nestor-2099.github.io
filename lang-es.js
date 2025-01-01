const websiteES = {
  "menu": {
    "home": "Inicio",
    "about": "Acerca de mí",
    "experience": "Áreas de experiencia",
    "portfolio": "Mi portafolio",
    "games": "Videojuegos",
    "mugen": "M.U.G.E.N.",
    "wip": "Trabajo en progreso",
  },
  "btn": {
    "show-more": "Cargar más"
  },
  "hero": {
    "title": "Hola, soy Néstor",
    "subtitle": "Desarrollador Front-End Web <span>|</span><br> Desarrollador de Videojuegos"
  },
  "about": {
    "title": "Acerca de mí",
    "paragraph": "<p>Me enfoco en desarrollo web Front-End, trabajando en plataformas de contenido, sitios de promoción, sitios informativos, CMS, landing pages, experiencias web interactivas y videojuegos.</p>"+
									"<p>Busco colaborar en el desarrollo de experiencias cautivadoras que brinden valor a su público, considerando las limitaciones como un impulso para el área creativa y la resolución de problemas.</p>"+
									"<p>Entre los proyectos personales que he realizado, se encuentran contenido para el motor M.U.G.E.N., la plataforma de entretenimiento y el canal de YouTube Power Items, y Redd's Runaway, un videojuego Run &amp; Gun procedural inspirado por las festividades de Halloween y día de muertos.</p>"
  },
  "experience": {
    "title": "Áreas de experiencia"
  },
  "portfolio": {
    "title": "Mi portafolio"
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
  "footer": {
    "text-1": "Sitio diseñado por Néstor García",
    "text-2": "Las marcas, logotipos e ilustraciones mostradas son propiedad de sus respectivos dueños, utilizadas únicamente con fines ilustrativos"
  }
}

const experienceArrayES = {
  "1": {
    "name": "Front-End",
    "icon": "bx-code-alt",
    "bullets": [
      "Uso de tecnologías y frameworks como Gulp, Pug (HTML), Stylus, Less, Tailwind (CSS), jQuery y React (Javascript) para desarrollos.",
      "Maquetado de sitios web responsivos.",
      "Validación de desempeño y velocidad de carga.",
      "Conexión con API's.",
      "Uso de Hubspot para sitios web y blogs dinámicos."
    ],
  },
  "2": {
    "name": "Game Dev",
    "icon": "bx-joystick",
    "bullets": [
      "Uso del motor de videojuegos Godot.",
      "Diseño técnico de videojuegos: Game Design, UX, UI, mecánicas.",
      "Desarrollo de proyectos de forma iterativa e incremental (Scrum, sprints).",
      "Publicación en línea mediante las plataformas Steam, itch.io y Play Store.",
      "Visión enfocada en narrativa, atmósfera visual y gameplay cautivante."
    ],
  },
  "3": {
    "name": "Back-End",
    "icon": "bx-code-curly",
    "bullets": [
      "Desarrollo de sitios web con el lenguaje PHP.",
      "Uso de frameworks como Codeigniter y Laravel (patrón Modelo/Vista/Controlador).",
      "Desarrollo modular de funciones.",
      "Construcción de portales con CMS personalizados.",
      "Implementación de localización para el contenido de sitios web (ENG/ESP)."
    ],
  }
}

const projectArrayES = {
  "1": {
    "url": "https://traxion.global/es/",
    "name": "Traxión",
    "date": "2024",
    "type": "Black & Orange",
    "thumb": "./img/thumb-traxion-2024.png",
    "img": "./img/traxion-2024.png",
    "description": "<p>Colaboración en el desarrollo de una variedad de unidades de negocio de Grupo Traxión, agilizado mediante el uso de módulos desarrollados con Pug y Tailwind, integrados con Hubspot.</p>"
  },

  "2": {
    "url": "https://www.defontana.com/cl",
    "name": "Defontana",
    "date": "2023",
    "type": "Black & Orange",
    "thumb": "./img/thumb-defontana-oct23.png",
    "img": "./img/defontana-oct23.png",
    "description": "<p>Sitio desarrollado con Gulp, Pug, Tailwind, preparado para su integración con Hubspot, presentando una serie de efectos parallax atractivos para el usuario.</p>"
  },

  "3": {
    "url": "https://universidad.tecmilenio.mx/preparatoria",
    "name": "Universidad Tecmilenio",
    "date": "2023",
    "type": "Black & Orange",
    "thumb": "./img/thumb-tecmilenio-2023.png",
    "img": "./img/tecmilenio-2023.png",
    "description": "<p>Desarrollo de módulos en 6 divisiones de negocio para la comunidad Tecmilenio, con sitios preparados para su implementación y alimentación en Hubspot.</p>"
  },

  "4": {
    "url": "https://hobmanuals.com/",
    "name": "Hob Manuals",
    "date": "2023",
    "type": "Black & Orange",
    "thumb": "./img/thumb-hobmanuals-sep23.png",
    "img": "./img/hobmanuals-sep23.png",
    "description": "<p>Sitio desarrollado con Gulp, Pug, Tailwind, preparado para su integración con Hubspot.</p>"
  },

  "5": {
    "url": "https://www.black-n-orange.com/",
    "name": "Black & Orange",
    "date": "2023",
    "type": "Black & Orange",
    "thumb": "./img/thumb-black-n-orange.png",
    "img": "./img/black-n-orange.png",
    "description": "<p>Sitio desarrollado con el uso de Tailwind, aprovechando al máximo las capacidades del framework para actualizaciones próximas y un desarrollo con la menor cantidad de scripts posibles, utilizando Javascript. Implementación de animaciones.</p>"
  },

  "6": {
    "url": "https://web.talana.com/",
    "name": "Talana",
    "date": "2023",
    "type": "Black & Orange",
    "thumb": "./img/thumb-talana.jpg",
    "img": "./img/talana.jpg",
    "description": "<p>Sitio web  desarrollado a la par de landing pages con módulos reusables y personalizados. Desarrollo de calculadora de salarios con retroalimentación gráfica.</p>"
  },

  "7": {
    "url": "https://content.tecsalud.mx/cancer-de-mama",
    "name": "Landing TecSalud",
    "date": "2022",
    "type": "Black & Orange",
    "thumb": "./img/thumb-tecsalud_2022.png",
    "img": "./img/tecsalud_2022.png",
    "description": "<p>Landing Page desarrollada con secciones modularizadas, de tal forma que puedan ser reutilizadas en un futuro. Implementación de videos de Facebook y YouTube.</p>"
  },

  "8": {
    "url": "https://residencesrancholapuerta.com/",
    "name": "Rancho La Puerta",
    "date": "2022",
    "type": "Black & Orange",
    "thumb": "./img/thumb-espiritu_2022.png",
    "img": "./img/espiritu_2022.png",
    "description": "<p>Página desarrollada con una variedad de elementos diferentes para mostrar información a los clientes (carruseles, tabs, modales, formularios). Módulos hospedados en la plataforma Hubspot.</p>"
  },

  "9": {
    "url": "https://www.kurabiotech.com/",
    "name": "Kura",
    "date": "2022",
    "type": "Black & Orange",
    "thumb": "./img/thumb-kura.jpg",
    "img": "./img/kura.jpg",
    "description": "<p>Sitio web desarrollado con secciones modularizadas, de tal forma que puedan ser reutilizadas en un futuro. Uso de elementos gráficos por medio de capas de color.</p>"
  },

  "10": {
    "url": "https://www.temis-apps.com/",
    "name": "Temis",
    "date": "2022",
    "type": "Black & Orange",
    "thumb": "./img/thumb-temis_2022.png",
    "img": "./img/temis_2022.png",
    "description": "<p>Desarrollo de sitio web y blog, enfoque principal en mostrar funcionalidades a los usuarios potenciales por medio de material visual dinámico (imágenes, videos).</p>"
  },

  "11": {
    "url": "https://poweritems.com.mx/",
    "name": "Power Items 3.0",
    "date": "2021",
    "type": "Proyecto Personal",
    "thumb": "./img/thumb-power-items-3.jpg",
    "img": "./img/power-items-3.jpg",
    "description": "<p>Actualización final de la plataforma, enfocada en crear una Single-Page App. Implementación realizada con Laravel (PHP, framework MVC) y React, junto con una actualización de la PWA implementada previamente en la plataforma.</p>"
  },

  "12": {
    "url": "https://bewolfstudio.com/",
    "name": "BeWolf Studio",
    "date": "2020",
    "type": "BeWolf Studio",
    "thumb": "./img/thumb-bewolf-studio.jpg",
    "img": "./img/bewolf-studio.jpg",
    "description": "<p>Sitio web programado para mostrar proyectos personales en el área de videojuegos. Desarrollo realizado con CodeIgniter (Modelo Vista Controlador), implementando funciones de localización de idioma y Presskit para obtener más información de los juegos presentados. Template por Colorlib.</p>"
  },

  "13": {
    "url": "https://marqcopeques.com/",
    "name": "MarqCó Peques",
    "date": "2019",
    "type": "Ingenia Agency",
    "thumb": "./img/thumb-ingenia-2019-marqco.jpg",
    "img": "./img/ingenia-2019-marqco.jpg",
    "description": "<p>Desarrollo web Front-End. Trabajo realizado con HTML, CSS y Javascript. Uso de las herramientas de automatización y frameworks Gulp Pug, Less, Stylus, NodeJS, jQuery. Creación de componentes reutilizables. Desarrollo de la versión 1.0 del sitio web, la cual incluye tanto secciones informativas como un diseñador de muebles básico; progreso en diseñador de muebles avanzado.</p>"
  },

  "14": {
    "url": "",
    "name": "Herdez Hoy Toca",
    "date": "2019",
    "type": "Ingenia Agency",
    "thumb": "./img/thumb-ingenia-2019-herdez.jpg",
    "img": "./img/ingenia-2019-herdez.jpg",
    "description": "<p>Desarrollo web Front-End. Trabajo realizado con HTML, CSS y Javascript. Uso de las herramientas de automatización y frameworks Gulp Pug, Less, Stylus, NodeJS, jQuery. Creación de componentes reutilizables. Encargado principal del apartado Front-End del proyecto, el cual incluía una Progressive Web App para mayor visibilidad.</p>"
  },

  "15": {
    "url": "https://poweritems.com.mx/",
    "name": "Power Items 2.0",
    "date": "2019",
    "type": "Proyecto Personal",
    "thumb": "./img/thumb-power-items-2.jpg",
    "img": "./img/power-items-2.jpg",
    "description": "<p>Actualización de nuestra plataforma digital de entretenimiento, enfocada en dos áreas: renovación de la identidad visual y optimización del desempeño funcional de la plataforma. Realizado con NodeJS, mediante HTML (Pug), CSS (Less) y JS (jQuery). Implementación con Codeigniter (PHP, framework MVC) y preparación de una Progressive Web App para móviles.</p>"
  },

  "16": {
    "url": "https://poweritems.com.mx/",
    "name": "Power Items",
    "date": "2017",
    "type": "Proyecto Personal",
    "thumb": "./img/thumb-power-items-1.jpg",
    "img": "./img/power-items-1.jpg",
    "description": "<p>Plataforma de entretenimiento digital 'Power Items', activa desde el 20 de mayo de 2017, y alimentada periódicamente, abarcando diversos temas como videojuegos, cine, series, música, libros, reflexión, lugares y más. Desarrollo de portal web y CMS.</p>"
  },

  "17": {
    "url": "https://ligamx.net/",
    "name": "Liga MX",
    "date": "2017",
    "type": "Ingenia Agency",
    "thumb": "./img/thumb-liga-mx.jpg",
    "img": "./img/liga-mx.jpg",
    "description": "<p>Maquetado de secciones y componentes reutilizables. Enfoque principal en tablas de marcadores de equipos.</p>"
  },

  "18": {
    "url": "https://grupobimbo.com/es",
    "name": "Grupo Bimbo",
    "date": "2016-2017",
    "type": "Ingenia Agency",
    "thumb": "./img/thumb-grupo-bimbo.jpg",
    "img": "./img/grupo-bimbo.jpg",
    "description": "<p>Desarrollo web Front-End. Trabajo realizado con HTML, CSS y Javascript. Uso de las herramientas de automatización y frameworks Gulp Pug, Less, Stylus, NodeJS, jQuery. Creación de componentes reutilizables. Enfoque principal en línea del tiempo y secciones informativas.</p>"
  },

  "19": {
    "url": "",
    "name": "El álbum de Laura",
    "date": "2014",
    "type": "Proyecto Personal",
    "thumb": "./img/thumb-album-laura.jpg",
    "img": "./img/album-laura.jpg",
    "description": "<p>Creado en el año 2014, 'El álbum de Laura' fue una historia interactiva de horror desarrollada de manera progresiva durante varias semanas de Octubre y Noviembre, haciendo uso de un sitio web y Facebook. El sitio sufriría cambios estéticos hasta su fecha de culminación, momento en el que se activaba un nuevo mensaje al público.</p>"
  },

  "20": {
    "url": "https://web.archive.org/web/20140516191837/http://caminosdelalibertad.com.mx/",
    "name": "Caminos de la Libertad",
    "date": "2014",
    "type": "GB Mobile",
    "thumb": "./img/thumb-caminos-libertad.jpg",
    "img": "./img/caminos-libertad.jpg",
    "description": "<p>Plataforma de contenido preparada para una fácil navegación, tanto por el público que visita el portal como por la administradora de contenido. Desarrollo realizado con CodeIgniter, bajo la arquitectura Modelo Vista Controlador.</p>"
  },

  "21": {
    "url": "",
    "name": "Alka-Seltzer Boost",
    "date": "2013",
    "type": "GB Mobile",
    "thumb": "./img/thumb-alka-seltzer.jpg",
    "img": "./img/alka-seltzer.jpg",
    "description": "<p>Enfoque en las animaciones e interacciones que habitan el sitio. Desarrollo realizado con CodeIgniter, bajo la arquitectura Modelo Vista Controlador.</p>"
  },

  "22": {
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
    "description": "<p>Inspired by Marvel Vs. Capcom 2 & 3</p>",
    "thumb": "./img/shuma-01.png",
    "release": "2022-02-20",
    "update": "2022-02-22",
  },
  "2": {
    "url": "https://mugenguild.com/forum/topics/fiona-versus-series-style-177008.0.html",
    "name": "Fiona Belli",
    "origin": "Haunting Ground",
    "description": "<p>Versus series fighting system</p>",
    "thumb": "./img/fiona-01.png",
    "release": "2016-10-31",
    "update": "2016-10-31",
  },
  "3": {
    "url": "https://mugenguild.com/forum/topics/chris-redfield-public-version-release-154705.0.html",
    "name": "Chris Redfield",
    "origin": "Resident Evil, Marvel Vs. Capcom 3",
    "description": "<p>Inspired by Marvel Vs. Capcom 3</p>",
    "thumb": "./img/chris-01.png",
    "release": "2013-10-31",
    "update": "2013-10-31",
  },
  "4": {
    "url": "https://infinitymugenteam.com/nestor/chars/legacy/ViewtifulJoe_CFAS.zip",
    "name": "Viewtiful Joe",
    "origin": "Viewtiful Joe, Tatsunoko Vs. Capcom",
    "description": "<p>Versus series fighting system</p>",
    "thumb": "./img/vjoe-01.png",
    "release": "2012",
    "update": "2012",
  },
  "5": {
    "url": "https://infinitymugenteam.com/nestor/chars/legacy/Leo_CFAS.zip",
    "name": "Leo",
    "origin": "Red Earth, Capcom Fighting Evolution",
    "description": "<p>Versus series fighting system</p>",
    "thumb": "./img/leo-01.png",
    "release": "2012",
    "update": "2012",
  },
  "6": {
    "url": "https://infinitymugenteam.com/nestor/chars/legacy/Ryu_CFAS.zip",
    "name": "Ryu",
    "origin": "Street Fighter, Marvel Vs. Capcom, Tatsunoko Vs. Capcom",
    "description": "<p>Versus series fighting system</p>",
    "thumb": "./img/ryu-01.png",
    "release": "2012",
    "update": "2012",
  },
  "7": {
    "url": "http://www.infinitymugenteam.com/Forum_345/index.php?topic=42358.0",
    "name": "Marvel Vs. Capcom UDB Demo",
    "origin": "Marvel Vs. Capcom series",
    "description": "<p>Versus series fighting game demo</p>",
    "thumb": "./img/mvc-udb-01.png",
    "release": "2014-01-02",
    "update": "2014-01-02",
  },
  "8": {
    "url": "https://www.infinitymugenteam.com/Forum_345/index.php?topic=49147.msg563207",
    "name": "Megaman Robot Master Mayhem contributor",
    "origin": "Megaman, Marvel Vs. Capcom",
    "description": "<p>Versus series fighting game, contributed with Axl, FireMan, WoodMan (base release)</p>",
    "thumb": "./img/rmm-01.png",
    "release": "2012",
    "update": "2024",
  },
  "9": {
    "url": "https://infinitymugenteam.com/nestor/versus-lifebars_2016-07-10.zip",
    "name": "Versus series lifebars",
    "origin": "Original Lifebar set",
    "description": "<p>Lifebar add-on</p>",
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

