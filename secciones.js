// ==========================================
// 🌟 CONFIGURACIÓN GENERAL DEL CURSO INTERACTIVO DE FÍSICA
// Archivo: secciones.js
// Estructura modular de datos para el menú y navegación del curso
// ==========================================

const courseData = {

  // ------------------------------------------
  // 📖 INFORMACIÓN GENERAL DEL CURSO
  // ------------------------------------------
  info: {
    title: "Curso Interactivo de Física",
    subtitle: "Fundamentos para Secundaria",
    author: "M.Sc. Néstor Fabio Montoya Palacios",
    version: "1.0.0",
    totalSections: 21, // Corregido: hay 21 secciones
    totalLessons: 140, // Corregido: conteo real de todas las lecciones
    description: "Curso completo e interactivo de física para secundaria con simulaciones, juegos, visualizaciones y recursos multimedia que abarca desde magnitudes y medidas hasta circuitos eléctricos y métodos de análisis."
  },

  // ------------------------------------------
  // 📂 SECCIONES TEMÁTICAS DEL CURSO (ARRAY)
  // ------------------------------------------
  sections: [
    // ==========================================
    // 🔯 SECCIÓN 1: MAGNITUDES Y MEDIDAS
    // ==========================================
    {
      id: "magnitudes-medidas",
      title: "🔯 MAGNITUDES Y MEDIDAS",
      icon: "fas fa-ruler",
      description: "Fundamentos de medición en física",
      color: "#3b82f6", // Color decorativo para la interfaz
      lessons: [
        // ----------- Lección 1.1 -----------
        {
          id: "magnitudes",
          title: "Magnitudes Físicas",
          icon: "fas fa-ruler",
          file: "temas/magnitudes.html",
          description: "Introducción a magnitudes fundamentales y derivadas",
          keywords: ["magnitudes", "unidades", "medición"],
          difficulty: "básico",
          duration: "30 min"
        },
        // ----------- Lección 1.2 -----------
        {
          id: "sistema-internacional",
          title: "Sistema Internacional",
          icon: "fas fa-globe",
          file: "temas/sistema-internacional.html",
          description: "Sistema Internacional de Unidades y su uso",
          keywords: ["SI", "unidades", "estándares"],
          difficulty: "básico",
          duration: "25 min"
        },
        // ----------- Lección 1.3 -----------
        {
          id: "prefijos-si",
          title: "Prefijos del S.I.",
          icon: "fas fa-superscript",
          file: "temas/prefijos-si.html",
          description: "Prefijos del SI: múltiplos y submúltiplos",
          keywords: ["prefijos", "notación", "factores"],
          difficulty: "básico",
          duration: "20 min"
        },
        // ----------- Lección 1.4 -----------
        {
          id: "conversion-medidas",
          title: "Conversión de Medidas",
          icon: "fas fa-exchange-alt",
          file: "temas/conversion-medidas.html",
          description: "Técnicas de conversión entre unidades",
          keywords: ["conversiones", "factores", "equivalencias"],
          difficulty: "intermedio",
          duration: "35 min"
        }
      ]
    },



    // ==========================================
    // 🧬 SECCIÓN 2: VECTORES
    // ==========================================
    {
      id: "vectores",
      title: "🧬 VECTORES",
      icon: "fas fa-arrows-alt",
      description: "Representación gráfica y operaciones vectoriales",
      color: "#059669", // Color decorativo para la interfaz
      lessons: [
        // ----------- Lección 2.1 -----------
        {
          id: "vectores-intro",
          title: "Introducción a Vectores",
          icon: "fas fa-arrows-alt",
          file: "temas/vectores-intro.html",
          description: "Conceptos de magnitud, dirección y sentido",
          keywords: ["vectores", "dirección", "sentido"],
          difficulty: "básico",
          duration: "40 min",
          hasSimulation: true
        },
        // ----------- Lección 2.2 -----------
        {
          id: "suma-vectores",
          title: "Suma y Resta de Vectores",
          icon: "fas fa-plus",
          file: "temas/suma-vectores.html",
          description: "Técnicas de suma y resta gráfica y analítica",
          keywords: ["suma", "resta", "resultante"],
          difficulty: "intermedio",
          duration: "45 min",
          hasSimulation: true
        },
        // ----------- Lección 2.3 -----------
        {
          id: "metodo-triangulo",
          title: "Método del Triángulo",
          icon: "fas fa-play",
          file: "temas/metodo-triangulo.html",
          description: "Suma de vectores por el método del triángulo",
          keywords: ["triángulo", "suma", "vectores"],
          difficulty: "intermedio",
          duration: "30 min",
          hasSimulation: true
        },
        // ----------- Lección 2.4 -----------
        {
          id: "metodo-paralelogramo",
          title: "Método del Paralelogramo",
          icon: "fas fa-object-group",
          file: "temas/metodo-paralelogramo.html",
          description: "Suma gráfica por paralelogramo",
          keywords: ["paralelogramo", "suma", "vectores"],
          difficulty: "intermedio",
          duration: "35 min",
          hasSimulation: true
        },
        // ----------- Lección 2.5 -----------
        {
          id: "producto-escalar",
          title: "Producto Escalar",
          icon: "fas fa-dot-circle",
          file: "temas/producto-escalar.html",
          description: "Producto escalar y aplicaciones geométricas",
          keywords: ["escalar", "dot product"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        // ----------- Lección 2.6 -----------
        {
          id: "producto-vectorial",
          title: "Producto Vectorial",
          icon: "fas fa-times",
          file: "temas/producto-vectorial.html",
          description: "Producto vectorial y regla de la mano derecha",
          keywords: ["cross product", "vectorial"],
          difficulty: "avanzado",
          duration: "45 min"
        },
        // ----------- Lección 2.7 -----------
        {
          id: "vectores-unitarios",
          title: "Vectores Unitarios",
          icon: "fas fa-hat-wizard",
          file: "temas/vectores-unitarios.html",
          description: "Sistemas de coordenadas cartesianas y base unitarias",
          keywords: ["unitarios", "coordenadas", "base"],
          difficulty: "intermedio",
          duration: "35 min"
        }
      ]
    },

    // ==========================================
    // 🏃‍♂️ SECCIÓN 3: CINEMÁTICA
    // ==========================================
    {
      id: "cinematica",
      title: "🏃‍♂️ CINEMÁTICA",
      icon: "fas fa-running",
      description: "Estudio del movimiento sin considerar sus causas.",
      color: "#7c3aed", // Color decorativo para la interfaz
      lessons: [
        // ----------- Lección 3.1 -----------
        {
          id: "sistema-referencia",
          title: "Sistema de Referencia",
          icon: "fas fa-compass",
          file: "temas/sistema-referencia.html",
          description: "Sistemas de referencia y observadores.",
          keywords: ["referencia", "relatividad", "sistema"],
          difficulty: "básico",
          duration: "30 min"
        },
        // ----------- Lección 3.2 -----------
        {
          id: "trayectoria-movimiento",
          title: "Trayectoria y Movimiento",
          icon: "fas fa-route",
          file: "temas/trayectoria-movimiento.html",
          description: "Descripción de la trayectoria y tipos de movimiento.",
          keywords: ["trayectoria", "movimiento", "desplazamiento"],
          difficulty: "básico",
          duration: "30 min"
        },
        // ----------- Lección 3.3 -----------
        {
          id: "posicion-velocidad",
          title: "Posición y Velocidad",
          icon: "fas fa-map-marker-alt",
          file: "temas/posicion-velocidad.html",
          description: "Representación gráfica del movimiento.",
          keywords: ["posición", "velocidad", "gráficas"],
          difficulty: "intermedio",
          duration: "40 min"
        },
        // ----------- Lección 3.4 -----------
        {
          id: "aceleracion",
          title: "Aceleración",
          icon: "fas fa-tachometer-alt",
          file: "temas/aceleracion.html",
          description: "Concepto de aceleración media e instantánea.",
          keywords: ["aceleración", "cambio de velocidad"],
          difficulty: "intermedio",
          duration: "40 min"
        },
        // ----------- Lección 3.5 -----------
        {
          id: "mru",
          title: "Movimiento Rectilíneo Uniforme (MRU)",
          icon: "fas fa-long-arrow-alt-right",
          file: "temas/mru.html",
          description: "Análisis gráfico y ecuaciones del MRU.",
          keywords: ["MRU", "velocidad constante"],
          difficulty: "intermedio",
          duration: "45 min",
          hasSimulation: true
        },
        // ----------- Lección 3.6 -----------
        {
          id: "mrua",
          title: "Movimiento Uniformemente Acelerado (MRUA)",
          icon: "fas fa-chart-line",
          file: "temas/mrua.html",
          description: "Ecuaciones y gráficas del MRUA.",
          keywords: ["aceleración constante", "MRUA"],
          difficulty: "avanzado",
          duration: "50 min",
          hasSimulation: true
        },
        // ----------- Lección 3.7 -----------
        {
          id: "caida-libre",
          title: "Caída Libre y Gravedad",
          icon: "fas fa-arrow-down",
          file: "temas/caida-libre.html",
          description: "Movimiento vertical con aceleración gravitacional.",
          keywords: ["gravedad", "caída libre"],
          difficulty: "avanzado",
          duration: "50 min",
          hasSimulation: true
        },
        // ----------- Lección 3.8 -----------
        {
          id: "movimiento-parabolico",
          title: "Movimiento Parabólico",
          icon: "fas fa-rocket",
          file: "temas/movimiento-parabolico.html",
          description: "Componentes, trayectoria y alcance del proyectil.",
          keywords: ["parábola", "trayectoria", "alcance"],
          difficulty: "avanzado",
          duration: "60 min",
          hasSimulation: true
        }
      ]
    },

       // ==========================================
    // 🔄 SECCIÓN 4: MOVIMIENTO CIRCULAR Y PARABÓLICO
    // ==========================================
    {
      id: "movimiento-circular-parabolico",
      title: "🔄 MOVIMIENTO CIRCULAR Y PARABÓLICO",
      icon: "fas fa-sync",
      description: "Estudio del MCU, aceleración centrípeta y movimiento parabólico.",
      color: "#9333ea", // Color decorativo para la interfaz
      lessons: [
        // ----------- Lección 4.1 -----------
        {
          id: "mcu",
          title: "Movimiento Circular Uniforme",
          icon: "fas fa-sync-alt",
          file: "temas/mcu.html",
          description: "Movimiento circular con velocidad constante.",
          keywords: ["circular", "uniforme", "velocidad angular"],
          difficulty: "intermedio",
          duration: "40 min",
          hasSimulation: true
        },
        // ----------- Lección 4.2 -----------
        {
          id: "aceleracion-centripeta",
          title: "Aceleración Centrípeta",
          icon: "fas fa-compact-disc",
          file: "temas/aceleracion-centripeta.html",
          description: "Cálculo y dirección de la aceleración centrípeta.",
          keywords: ["aceleración", "centrípeta", "MCU"],
          difficulty: "avanzado",
          duration: "35 min",
          hasSimulation: true
        },
        // ----------- Lección 4.3 -----------
        {
          id: "movimiento-parabolico",
          title: "Movimiento Parabólico",
          icon: "fas fa-archway",
          file: "temas/movimiento-parabolico.html",
          description: "Estudio del movimiento de proyectiles.",
          keywords: ["proyectil", "trayectoria", "parabólico"],
          difficulty: "avanzado",
          duration: "50 min",
          hasSimulation: true
        },
        // ----------- Lección 4.4 -----------
        {
          id: "componentes-parabolico",
          title: "Componentes del Movimiento Parabólico",
          icon: "fas fa-vector-square",
          file: "temas/componentes-parabolico.html",
          description: "Descomposición horizontal y vertical del movimiento.",
          keywords: ["componentes", "horizontal", "vertical"],
          difficulty: "avanzado",
          duration: "45 min"
        },
        // ----------- Lección 4.5 -----------
        {
          id: "alcance-altura",
          title: "Alcance y Altura Máxima",
          icon: "fas fa-arrows-alt-v",
          file: "temas/alcance-altura.html",
          description: "Cálculo del alcance horizontal y la altura máxima.",
          keywords: ["alcance", "altura", "trayectoria"],
          difficulty: "avanzado",
          duration: "35 min"
        },
        // ----------- Lección 4.6 -----------
        {
          id: "tiempo-vuelo",
          title: "Tiempo de Vuelo",
          icon: "fas fa-hourglass-half",
          file: "temas/tiempo-vuelo.html",
          description: "Duración total del vuelo del proyectil.",
          keywords: ["tiempo", "vuelo", "parabólico"],
          difficulty: "intermedio",
          duration: "30 min"
        }
      ]
    },

        // ==========================================
    // 🧲 SECCIÓN 5: LEYES DE NEWTON
    // ==========================================
    {
      id: "leyes-newton",
      title: "🧲 LEYES DE NEWTON",
      icon: "fas fa-atom",
      description: "Estudio de las tres leyes del movimiento formuladas por Newton y su aplicación en la dinámica.",
      color: "#2563eb", // Color decorativo para la interfaz
      lessons: [
        // ----------- Lección 5.1 -----------
        {
          id: "primera-ley",
          title: "Primera Ley de Newton",
          icon: "fas fa-pause-circle",
          file: "temas/primera-ley.html",
          description: "Ley de la inercia y su interpretación física.",
          keywords: ["newton", "primera ley", "inercia"],
          difficulty: "básico",
          duration: "30 min",
          hasSimulation: true
        },
        // ----------- Lección 5.2 -----------
        {
          id: "segunda-ley",
          title: "Segunda Ley de Newton",
          icon: "fas fa-forward",
          file: "temas/segunda-ley.html",
          description: "Relación entre fuerza, masa y aceleración.",
          keywords: ["newton", "segunda ley", "fuerza"],
          difficulty: "intermedio",
          duration: "40 min",
          hasSimulation: true
        },
        // ----------- Lección 5.3 -----------
        {
          id: "tercera-ley",
          title: "Tercera Ley de Newton",
          icon: "fas fa-retweet",
          file: "temas/tercera-ley.html",
          description: "Acción y reacción entre cuerpos en interacción.",
          keywords: ["newton", "tercera ley", "reacción"],
          difficulty: "intermedio",
          duration: "30 min",
          hasSimulation: true
        },
        // ----------- Lección 5.4 -----------
        {
          id: "fuerzas-friccion",
          title: "Fuerzas de Fricción",
          icon: "fas fa-grip-lines",
          file: "temas/fuerzas-friccion.html",
          description: "Estudio de la fricción estática y cinética.",
          keywords: ["fricción", "fuerza", "superficies"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        // ----------- Lección 5.5 -----------
        {
          id: "planos-inclinados",
          title: "Fuerzas en Planos Inclinados",
          icon: "fas fa-angle-up",
          file: "temas/planos-inclinados.html",
          description: "Aplicación de las leyes de Newton en planos inclinados.",
          keywords: ["planos", "fuerza", "inclinación"],
          difficulty: "avanzado",
          duration: "40 min"
        }
      ]
    },

       // ==========================================
    // ⚡ SECCIÓN 6: TRABAJO Y ENERGÍA
    // ==========================================
    {
      id: "trabajo-energia",
      title: "⚡ TRABAJO Y ENERGÍA",
      icon: "fas fa-bolt",
      description: "Estudio del trabajo mecánico, la energía cinética, potencial y el teorema del trabajo y energía.",
      color: "#f59e0b", // Color decorativo para la interfaz
      lessons: [
        // ----------- Lección 6.1 -----------
        {
          id: "trabajo",
          title: "Trabajo Mecánico",
          icon: "fas fa-tools",
          file: "temas/trabajo.html",
          description: "Concepto físico de trabajo y su cálculo.",
          keywords: ["trabajo", "fuerza", "desplazamiento"],
          difficulty: "intermedio",
          duration: "40 min",
          hasSimulation: true
        },
        // ----------- Lección 6.2 -----------
        {
          id: "energia",
          title: "Energía Mecánica",
          icon: "fas fa-battery-full",
          file: "temas/energia.html",
          description: "Concepto de energía, tipos y conservación.",
          keywords: ["energía", "cinética", "potencial"],
          difficulty: "intermedio",
          duration: "35 min",
          hasSimulation: true
        },
        // ----------- Lección 6.3 -----------
        {
          id: "energia-cinetica",
          title: "Energía Cinética",
          icon: "fas fa-running",
          file: "temas/energia-cinetica.html",
          description: "Fórmulas y aplicaciones de la energía cinética.",
          keywords: ["energía", "movimiento", "masa"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        // ----------- Lección 6.4 -----------
        {
          id: "energia-potencial",
          title: "Energía Potencial",
          icon: "fas fa-arrow-up",
          file: "temas/energia-potencial.html",
          description: "Tipos de energía potencial: gravitacional y elástica.",
          keywords: ["potencial", "gravedad", "resorte"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        // ----------- Lección 6.5 -----------
        {
          id: "teorema-trabajo-energia",
          title: "Teorema del Trabajo y Energía",
          icon: "fas fa-equals",
          file: "temas/teorema-trabajo-energia.html",
          description: "Relación entre trabajo y cambio de energía cinética.",
          keywords: ["teorema", "trabajo", "energía"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        // ----------- Lección 6.6 -----------
        {
          id: "potencia",
          title: "Potencia Mecánica",
          icon: "fas fa-tachometer-alt",
          file: "temas/potencia.html",
          description: "Trabajo realizado por unidad de tiempo.",
          keywords: ["potencia", "trabajo", "tiempo"],
          difficulty: "intermedio",
          duration: "25 min"
        },
        // ----------- Lección 6.7 -----------
        {
          id: "rendimiento",
          title: "Rendimiento Energético",
          icon: "fas fa-percentage",
          file: "temas/rendimiento.html",
          description: "Cálculo del rendimiento de una máquina o proceso.",
          keywords: ["rendimiento", "energía", "eficiencia"],
          difficulty: "avanzado",
          duration: "30 min"
        }
      ]
    },

        // ==========================================
    // 💥 SECCIÓN 7: CANTIDAD DE MOVIMIENTO Y CHOQUES
    // ==========================================
    {
      id: "cantidad-movimiento",
      title: "💥 CANTIDAD DE MOVIMIENTO Y CHOQUES",
      icon: "fas fa-bowling-ball",
      description: "Estudio de la cantidad de movimiento lineal, su conservación y los distintos tipos de choques.",
      color: "#dc2626", // Color rojo intenso para resaltar la sección
      lessons: [
        // ----------- Lección 7.1 -----------
        {
          id: "cantidad-movimiento",
          title: "Cantidad de Movimiento",
          icon: "fas fa-arrow-right",
          file: "temas/cantidad-movimiento.html",
          description: "Definición y fórmula de la cantidad de movimiento.",
          keywords: ["momento lineal", "masa", "velocidad"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        // ----------- Lección 7.2 -----------
        {
          id: "conservacion-movimiento",
          title: "Conservación de la Cantidad de Movimiento",
          icon: "fas fa-balance-scale",
          file: "temas/conservacion-movimiento.html",
          description: "Principio de conservación y su aplicación.",
          keywords: ["conservación", "sistemas aislados"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        // ----------- Lección 7.3 -----------
        {
          id: "choques-elasticos",
          title: "Choques Elásticos",
          icon: "fas fa-compress-arrows-alt",
          file: "temas/choques-elasticos.html",
          description: "Interacciones que conservan energía cinética.",
          keywords: ["choques", "energía cinética", "momentum"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        // ----------- Lección 7.4 -----------
        {
          id: "choques-inelasticos",
          title: "Choques Inelásticos",
          icon: "fas fa-expand-arrows-alt",
          file: "temas/choques-inelasticos.html",
          description: "Interacciones donde no se conserva la energía cinética.",
          keywords: ["choques", "energía", "deformación"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        // ----------- Lección 7.5 -----------
        {
          id: "impulso",
          title: "Impulso y Teorema del Impulso",
          icon: "fas fa-hand-rock",
          file: "temas/impulso.html",
          description: "Relación entre fuerza, tiempo e impulso.",
          keywords: ["impulso", "fuerza", "tiempo"],
          difficulty: "intermedio",
          duration: "30 min"
        }
      ]
    },

       // ==========================================
    // 🧷 SECCIÓN 8: ESTÁTICA Y EQUILIBRIO
    // ==========================================
    {
      id: "estatica-equilibrio",
      title: "🧷 ESTÁTICA Y EQUILIBRIO",
      icon: "fas fa-balance-scale-left",
      description: "Análisis de cuerpos en equilibrio y condiciones para la estática.",
      color: "#4b5563", // Color neutro para simbolizar balance/estabilidad
      lessons: [
        // ----------- Lección 8.1 -----------
        {
          id: "equilibrio-translacional",
          title: "Equilibrio Translacional",
          icon: "fas fa-arrows-alt-h",
          file: "temas/equilibrio-translacional.html",
          description: "Condición de equilibrio cuando la suma de las fuerzas es cero.",
          keywords: ["equilibrio", "fuerzas", "estática"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        // ----------- Lección 8.2 -----------
        {
          id: "equilibrio-rotacional",
          title: "Equilibrio Rotacional",
          icon: "fas fa-redo",
          file: "temas/equilibrio-rotacional.html",
          description: "Condición de equilibrio cuando la suma de torques es cero.",
          keywords: ["torque", "rotación", "momento de fuerza"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        // ----------- Lección 8.3 -----------
        {
          id: "torque",
          title: "Torque o Momento de Fuerza",
          icon: "fas fa-undo",
          file: "temas/torque.html",
          description: "Definición y cálculo del torque aplicado sobre un cuerpo.",
          keywords: ["torque", "palanca", "fuerza"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        // ----------- Lección 8.4 -----------
        {
          id: "centro-masa",
          title: "Centro de Masa",
          icon: "fas fa-dot-circle",
          file: "temas/centro-masa.html",
          description: "Ubicación y significado físico del centro de masa.",
          keywords: ["centro", "masa", "equilibrio"],
          difficulty: "avanzado",
          duration: "30 min"
        },
        // ----------- Lección 8.5 -----------
        {
          id: "aplicaciones-estatica",
          title: "Aplicaciones de la Estática",
          icon: "fas fa-tools",
          file: "temas/aplicaciones-estatica.html",
          description: "Resolución de problemas con poleas, vigas y estructuras.",
          keywords: ["poleas", "estructuras", "condiciones de equilibrio"],
          difficulty: "avanzado",
          duration: "45 min"
        }
      ]
    },

        // ==========================================
    // 🌍 SECCIÓN 9: LEY DE LA GRAVITACIÓN UNIVERSAL
    // ==========================================
    {
      id: "gravitacion-universal",
      title: "🌍 LEY DE LA GRAVITACIÓN UNIVERSAL",
      icon: "fas fa-globe-americas",
      description: "Estudio de la interacción gravitacional entre cuerpos y su formulación matemática según Newton.",
      color: "#0f766e",
      lessons: [
        {
          id: "gravedad-newton",
          title: "Gravedad según Newton",
          icon: "fas fa-apple-alt",
          file: "temas/gravedad-newton.html",
          description: "Descripción de la ley de la gravitación universal y sus fundamentos.",
          keywords: ["gravedad", "newton", "atracción", "masa"],
          difficulty: "intermedio",
          duration: "30 min",
          hasSimulation: true
        },
        {
          id: "ley-gravitacional",
          title: "Ley de la Gravitación Universal",
          icon: "fas fa-balance-scale",
          file: "temas/ley-gravitacional.html",
          description: "Fórmula de Newton para la fuerza gravitacional entre masas.",
          keywords: ["ley", "gravitacional", "fuerza", "distancia"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "campo-gravitacional",
          title: "Campo Gravitacional",
          icon: "fas fa-wind",
          file: "temas/campo-gravitacional.html",
          description: "Concepto de campo gravitacional y su intensidad.",
          keywords: ["campo", "gravedad", "fuerza", "intensidad"],
          difficulty: "avanzado",
          duration: "30 min"
        },
        {
          id: "gravedad-superficial",
          title: "Gravedad en la Superficie Terrestre",
          icon: "fas fa-globe",
          file: "temas/gravedad-superficial.html",
          description: "Valor de la gravedad en la Tierra y factores que la afectan.",
          keywords: ["superficie", "gravedad", "tierra"],
          difficulty: "intermedio",
          duration: "25 min"
        },
        {
          id: "satelites-orbitas",
          title: "Satélites y Órbitas",
          icon: "fas fa-satellite",
          file: "temas/satelites-orbitas.html",
          description: "Estudio del movimiento de satélites y órbitas circulares.",
          keywords: ["satélites", "órbitas", "gravedad"],
          difficulty: "avanzado",
          duration: "40 min",
          hasSimulation: true
        },
        {
          id: "aplicaciones-gravitacion",
          title: "Aplicaciones de la Gravitación",
          icon: "fas fa-tools",
          file: "temas/aplicaciones-gravitacion.html",
          description: "Ejemplos y cálculos prácticos en problemas gravitacionales.",
          keywords: ["gravedad", "aplicaciones", "física"],
          difficulty: "avanzado",
          duration: "35 min"
        }
      ]
    },

    // ==========================================
    // 🌀 SECCIÓN 10: DINÁMICA ROTACIONAL Y MOMENTO DE INERCIA
    // ==========================================
    {
      id: "dinamica-rotacional",
      title: "🌀 DINÁMICA ROTACIONAL Y MOMENTO DE INERCIA",
      icon: "fas fa-compact-disc",
      description: "Estudio del movimiento rotacional, torque, momento de inercia y analogías con la dinámica lineal.",
      color: "#0ea5e9",
      lessons: [
        {
          id: "movimiento-rotacional",
          title: "Movimiento Rotacional",
          icon: "fas fa-sync-alt",
          file: "temas/movimiento-rotacional.html",
          description: "Descripción del movimiento rotacional y sus variables angulares.",
          keywords: ["rotación", "ángulo", "velocidad angular"],
          difficulty: "intermedio",
          duration: "40 min",
          hasSimulation: true
        },
        {
          id: "torque-rotacional",
          title: "Torque (Momento de Fuerza)",
          icon: "fas fa-undo",
          file: "temas/torque-rotacional.html",
          description: "Cálculo del torque y su relación con la rotación.",
          keywords: ["torque", "fuerza", "palanca"],
          difficulty: "intermedio",
          duration: "35 min",
          hasSimulation: true
        },
        {
          id: "momento-inercia",
          title: "Momento de Inercia",
          icon: "fas fa-circle-notch",
          file: "temas/momento-inercia.html",
          description: "Definición y fórmulas del momento de inercia para distintos cuerpos.",
          keywords: ["inercia", "masa", "rotación"],
          difficulty: "avanzado",
          duration: "45 min"
        },
        {
          id: "segunda-ley-rotacional",
          title: "Segunda Ley de Newton Rotacional",
          icon: "fas fa-cogs",
          file: "temas/segunda-ley-rotacional.html",
          description: "Analogía de la dinámica lineal con la rotacional.",
          keywords: ["segunda ley", "rotación", "torque", "inercia"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        {
          id: "energia-rotacional",
          title: "Energía Rotacional",
          icon: "fas fa-battery-quarter",
          file: "temas/energia-rotacional.html",
          description: "Cálculo de energía rotacional y conservación de la energía.",
          keywords: ["energía", "rotación", "cinética"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        {
          id: "analogias-lineal-rotacional",
          title: "Analogías Lineal vs Rotacional",
          icon: "fas fa-exchange-alt",
          file: "temas/analogias-lineal-rotacional.html",
          description: "Comparación de fórmulas y conceptos entre dinámica lineal y rotacional.",
          keywords: ["analogías", "lineal", "rotacional"],
          difficulty: "avanzado",
          duration: "30 min"
        }
      ]
    },


    // ==========================================
    // 🔟 SECCIÓN 11: MECÁNICA DE FLUIDOS
    // ==========================================
    {
      id: "mecanica-fluidos",
      title: "🔟 MECÁNICA DE FLUIDOS",
      icon: "fas fa-water",
      description: "Estudio de la presión, empuje, principios de Pascal, Arquímedes y Bernoulli aplicados a los fluidos en reposo y en movimiento.",
      color: "#0284c7",
      lessons: [
        {
          id: "introduccion-fluidos",
          title: "Introducción a la Mecánica de Fluidos",
          icon: "fas fa-info-circle",
          file: "temas/introduccion-fluidos.html",
          description: "Propiedades fundamentales de los fluidos: densidad, presión, viscosidad, etc.",
          keywords: ["fluidos", "densidad", "presión", "viscosidad"],
          difficulty: "básico",
          duration: "30 min"
        },
        {
          id: "presion-fluidos",
          title: "Presión en Fluidos",
          icon: "fas fa-tint",
          file: "temas/presion-fluidos.html",
          description: "Definición, unidades, cálculo de presión en un punto de un fluido en reposo.",
          keywords: ["presión", "fluidos", "pascal"],
          difficulty: "intermedio",
          duration: "35 min",
          hasSimulation: true
        },
        {
          id: "presion-hidrostatica",
          title: "Presión Hidrostática",
          icon: "fas fa-arrow-down",
          file: "temas/presion-hidrostatica.html",
          description: "Cálculo de presión debido al peso del fluido en reposo.",
          keywords: ["presión", "hidrostática", "profundidad"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "principio-pascal",
          title: "Principio de Pascal",
          icon: "fas fa-compress",
          file: "temas/principio-pascal.html",
          description: "Transmisión de la presión en un fluido incompresible.",
          keywords: ["pascal", "presión", "hidráulica"],
          difficulty: "intermedio",
          duration: "25 min",
          hasSimulation: true
        },
        {
          id: "principio-arquimedes",
          title: "Principio de Arquímedes",
          icon: "fas fa-life-ring",
          file: "temas/principio-arquimedes.html",
          description: "Cálculo del empuje sobre un cuerpo sumergido.",
          keywords: ["empuje", "arquimedes", "flotabilidad"],
          difficulty: "intermedio",
          duration: "35 min",
          hasSimulation: true
        },
        {
          id: "flujo-bernoulli",
          title: "Flujo y Teorema de Bernoulli",
          icon: "fas fa-wind",
          file: "temas/flujo-bernoulli.html",
          description: "Relación entre velocidad, presión y altura en fluidos en movimiento.",
          keywords: ["flujo", "bernoulli", "velocidad", "presión"],
          difficulty: "avanzado",
          duration: "40 min",
          hasSimulation: true
        },
        {
          id: "aplicaciones-fluidos",
          title: "Aplicaciones de la Mecánica de Fluidos",
          icon: "fas fa-cogs",
          file: "temas/aplicaciones-fluidos.html",
          description: "Ejemplos prácticos: frenos hidráulicos, jeringas, dinamómetros, tubos Venturi.",
          keywords: ["aplicaciones", "fluidos", "hidráulica", "venturi"],
          difficulty: "avanzado",
          duration: "30 min"
        }
      ]
    },

    // ==========================================
    // 🌡️ SECCIÓN 12: TEMPERATURA Y CALOR
    // ==========================================
    {
      id: "temperatura-calor",
      title: "🌡️ TEMPERATURA Y CALOR",
      icon: "fas fa-thermometer-half",
      description: "Estudio del concepto de temperatura, escalas térmicas y transferencia de calor.",
      color: "#f97316",
      lessons: [
        {
          id: "concepto-temperatura",
          title: "Concepto de Temperatura",
          icon: "fas fa-temperature-high",
          file: "temas/concepto-temperatura.html",
          description: "Definición de temperatura y su interpretación microscópica.",
          keywords: ["temperatura", "energía cinética", "moléculas"],
          difficulty: "básico",
          duration: "25 min"
        },
        {
          id: "escalas-temperatura",
          title: "Escalas de Temperatura",
          icon: "fas fa-thermometer-three-quarters",
          file: "temas/escalas-temperatura.html",
          description: "Estudio de las escalas Celsius, Kelvin y Fahrenheit.",
          keywords: ["escalas", "celsius", "kelvin", "fahrenheit"],
          difficulty: "básico",
          duration: "30 min"
        },
        {
          id: "conversion-escalas",
          title: "Conversión entre Escalas",
          icon: "fas fa-exchange-alt",
          file: "temas/conversion-escalas.html",
          description: "Fórmulas para convertir entre las escalas térmicas.",
          keywords: ["conversión", "temperatura", "fórmulas"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "calor-concepto",
          title: "Concepto de Calor",
          icon: "fas fa-fire",
          file: "temas/calor-concepto.html",
          description: "Definición de calor y diferencia con temperatura.",
          keywords: ["calor", "energía", "transferencia"],
          difficulty: "básico",
          duration: "25 min"
        },
        {
          id: "formas-transferencia",
          title: "Formas de Transferencia de Calor",
          icon: "fas fa-radiation",
          file: "temas/formas-transferencia.html",
          description: "Conducción, convección y radiación.",
          keywords: ["transferencia", "conducción", "convección", "radiación"],
          difficulty: "intermedio",
          duration: "40 min",
          hasSimulation: true
        },
        {
          id: "equilibrio-termico",
          title: "Equilibrio Térmico",
          icon: "fas fa-balance-scale-right",
          file: "temas/equilibrio-termico.html",
          description: "Condiciones y leyes del equilibrio térmico.",
          keywords: ["equilibrio", "temperatura", "termodinámica"],
          difficulty: "intermedio",
          duration: "30 min"
        }
      ]
    },



    // ==========================================
    // 🔥 SECCIÓN 13: CALORIMETRÍA
    // ==========================================
    {
      id: "calorimetria",
      title: "🔥 CALORIMETRÍA",
      icon: "fas fa-temperature-high",
      description: "Estudio del intercambio de calor, calor específico, calor latente y principios fundamentales de la calorimetría.",
      color: "#ea580c",
      lessons: [
        {
          id: "calor",
          title: "Concepto de Calor",
          icon: "fas fa-fire",
          file: "temas/calor.html",
          description: "Definición de calor como transferencia de energía térmica.",
          keywords: ["calor", "energía", "temperatura"],
          difficulty: "básico",
          duration: "30 min"
        },
        {
          id: "calor-especifico",
          title: "Calor Específico",
          icon: "fas fa-water",
          file: "temas/calor-especifico.html",
          description: "Cantidad de calor necesaria para elevar la temperatura de una sustancia.",
          keywords: ["calor específico", "masa", "temperatura"],
          difficulty: "intermedio",
          duration: "35 min",
          hasSimulation: true
        },
        {
          id: "capacidad-calorifica",
          title: "Capacidad Calorífica",
          icon: "fas fa-thermometer-half",
          file: "temas/capacidad-calorifica.html",
          description: "Relación entre la cantidad de calor absorbido y el cambio de temperatura.",
          keywords: ["capacidad", "calorífica", "cambio térmico"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "calor-latente",
          title: "Calor Latente",
          icon: "fas fa-snowflake",
          file: "temas/calor-latente.html",
          description: "Calor absorbido o liberado durante un cambio de estado sin variar la temperatura.",
          keywords: ["latente", "fusión", "evaporación"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "ecuacion-calorimetrica",
          title: "Ecuación Calorimétrica",
          icon: "fas fa-equals",
          file: "temas/ecuacion-calorimetrica.html",
          description: "Aplicación de la ecuación Q = mcΔT en problemas de transferencia de calor.",
          keywords: ["ecuación", "calorimetría", "transferencia de calor"],
          difficulty: "intermedio",
          duration: "40 min"
        },
        {
          id: "mezcla-termica",
          title: "Mezcla Térmica",
          icon: "fas fa-mug-hot",
          file: "temas/mezcla-termica.html",
          description: "Equilibrio térmico entre dos o más cuerpos en contacto.",
          keywords: ["mezcla", "térmica", "equilibrio térmico"],
          difficulty: "intermedio",
          duration: "30 min"
        }
      ]
    },



    // ==========================================
    // 🎵 SECCIÓN 14: OSCILACIONES Y MOVIMIENTO ARMÓNICO SIMPLE
    // ==========================================
    {
      id: "oscilaciones",
      title: "🎵 OSCILACIONES Y MOVIMIENTO ARMÓNICO SIMPLE",
      icon: "fas fa-wave-square",
      description: "Estudio de movimientos periódicos, oscilatorios y del movimiento armónico simple (MAS).",
      color: "#8b5cf6",
      lessons: [
        {
          id: "oscilaciones-intro",
          title: "Introducción a las Oscilaciones",
          icon: "fas fa-random",
          file: "temas/oscilaciones-intro.html",
          description: "Concepto de oscilación, tipos y sistemas oscilantes.",
          keywords: ["oscilaciones", "movimiento periódico", "frecuencia"],
          difficulty: "básico",
          duration: "30 min"
        },
        {
          id: "mas",
          title: "Movimiento Armónico Simple",
          icon: "fas fa-wave-square",
          file: "temas/mas.html",
          description: "Definición, características y ecuación del MAS.",
          keywords: ["MAS", "oscilador armónico", "amplitud"],
          difficulty: "intermedio",
          duration: "35 min",
          hasSimulation: true
        },
        {
          id: "elongacion-velocidad-aceleracion",
          title: "Elongación, Velocidad y Aceleración en el MAS",
          icon: "fas fa-arrows-alt-v",
          file: "temas/elongacion-velocidad-aceleracion.html",
          description: "Relación entre las variables del movimiento armónico simple.",
          keywords: ["elongación", "velocidad", "aceleración"],
          difficulty: "intermedio",
          duration: "40 min",
          hasSimulation: true
        },
        {
          id: "graficas-mas",
          title: "Gráficas del MAS",
          icon: "fas fa-chart-line",
          file: "temas/graficas-mas.html",
          description: "Representación gráfica del movimiento armónico simple.",
          keywords: ["gráficas", "posición", "tiempo", "fase"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "dinamica-mas",
          title: "Dinámica del MAS",
          icon: "fas fa-balance-scale-right",
          file: "temas/dinamica-mas.html",
          description: "Fuerzas involucradas y energía en el MAS.",
          keywords: ["fuerza restauradora", "energía cinética", "energía potencial"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        {
          id: "pendulo-simple",
          title: "Péndulo Simple",
          icon: "fas fa-clock",
          file: "temas/pendulo-simple.html",
          description: "Estudio del movimiento oscilatorio de un péndulo simple.",
          keywords: ["péndulo", "oscilaciones", "gravedad"],
          difficulty: "intermedio",
          duration: "35 min",
          hasSimulation: true
        }
      ]
    },


    // ==========================================
    // 🌊 SECCIÓN 15: ONDAS
    // ==========================================
    {
      id: "ondas",
      title: "🌊 ONDAS",
      icon: "fas fa-wave-square",
      description: "Estudio de la naturaleza, tipos, propiedades y comportamiento de las ondas mecánicas y electromagnéticas.",
      color: "#0ea5e9",
      lessons: [
        {
          id: "introduccion-ondas",
          title: "Introducción a las Ondas",
          icon: "fas fa-water",
          file: "temas/introduccion-ondas.html",
          description: "Definición, clasificación y ejemplos cotidianos de ondas.",
          keywords: ["ondas", "clasificación", "ejemplos"],
          difficulty: "básico",
          duration: "30 min"
        },
        {
          id: "ondas-mecanicas",
          title: "Ondas Mecánicas",
          icon: "fas fa-cogs",
          file: "temas/ondas-mecanicas.html",
          description: "Transmisión de ondas a través de medios materiales.",
          keywords: ["mecánicas", "medio", "vibración"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "ondas-electromagneticas",
          title: "Ondas Electromagnéticas",
          icon: "fas fa-bolt",
          file: "temas/ondas-electromagneticas.html",
          description: "Propagación sin necesidad de medio material.",
          keywords: ["electromagnéticas", "vacío", "luz"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "caracteristicas-ondas",
          title: "Características de las Ondas",
          icon: "fas fa-ruler-horizontal",
          file: "temas/caracteristicas-ondas.html",
          description: "Longitud de onda, frecuencia, amplitud, periodo y velocidad.",
          keywords: ["frecuencia", "amplitud", "velocidad"],
          difficulty: "intermedio",
          duration: "40 min"
        },
        {
          id: "ecuacion-onda-armonica",
          title: "Ecuación de una Onda Armónica",
          icon: "fas fa-wave-square",
          file: "temas/ecuacion-onda-armonica.html",
          description: "Expresión matemática de una onda armónica.",
          keywords: ["ecuación", "onda armónica", "modelo matemático"],
          difficulty: "avanzado",
          duration: "35 min"
        },
        {
          id: "superposicion-interferencia",
          title: "Superposición e Interferencia",
          icon: "fas fa-layer-group",
          file: "temas/superposicion-interferencia.html",
          description: "Principio de superposición y tipos de interferencia.",
          keywords: ["interferencia", "constructiva", "destructiva"],
          difficulty: "avanzado",
          duration: "30 min"
        },
        {
          id: "reflexion-refraccion",
          title: "Reflexión y Refracción",
          icon: "fas fa-retweet",
          file: "temas/reflexion-refraccion.html",
          description: "Cambios de dirección de una onda al encontrar obstáculos o medios distintos.",
          keywords: ["reflexión", "refracción", "medios"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "difraccion-ondas",
          title: "Difracción de Ondas",
          icon: "fas fa-expand-arrows-alt",
          file: "temas/difraccion-ondas.html",
          description: "Desviación de ondas al pasar por rendijas o bordes.",
          keywords: ["difracción", "obstáculos", "bordes"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "ondas-estacionarias",
          title: "Ondas Estacionarias",
          icon: "fas fa-grip-lines-vertical",
          file: "temas/ondas-estacionarias.html",
          description: "Formación y características de las ondas estacionarias.",
          keywords: ["nodos", "antinodos", "resonancia"],
          difficulty: "avanzado",
          duration: "35 min"
        },
        {
          id: "ondas-cuerdas",
          title: "Ondas en Cuerdas",
          icon: "fas fa-guitar",
          file: "temas/ondas-cuerdas.html",
          description: "Vibraciones en cuerdas fijas y relación con frecuencia y longitud.",
          keywords: ["cuerda", "frecuencia", "longitud"],
          difficulty: "avanzado",
          duration: "30 min"
        }
      ]
    },


    // ==========================================
    // 🔍 SECCIÓN 17: ÓPTICA GEOMÉTRICA
    // ==========================================
    {
      id: "optica-geometrica",
      title: "🔍 ÓPTICA GEOMÉTRICA",
      icon: "fas fa-lightbulb",
      description: "Estudio de la propagación rectilínea de la luz, reflexión, refracción y formación de imágenes con espejos y lentes.",
      color: "#f59e0b",
      lessons: [
        {
          id: "naturaleza-luz",
          title: "Naturaleza de la Luz",
          icon: "fas fa-sun",
          file: "temas/naturaleza-luz.html",
          description: "Naturaleza dual de la luz: modelo corpuscular y ondulatorio.",
          keywords: ["luz", "naturaleza", "modelo"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "indice-refraccion",
          title: "Índice de Refracción",
          icon: "fas fa-ruler-combined",
          file: "temas/indice-refraccion.html",
          description: "Definición y cálculo del índice de refracción en distintos medios.",
          keywords: ["refracción", "índice", "velocidad de la luz"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "leyes-snell",
          title: "Leyes de Snell",
          icon: "fas fa-random",
          file: "temas/leyes-snell.html",
          description: "Leyes que rigen la reflexión y refracción de la luz.",
          keywords: ["Snell", "reflexión", "refracción"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "espejos-planos",
          title: "Espejos Planos",
          icon: "fas fa-mirror",
          file: "temas/espejos-planos.html",
          description: "Formación de imágenes en espejos planos.",
          keywords: ["espejos", "imágenes", "reflexión"],
          difficulty: "básico",
          duration: "30 min"
        },
        {
          id: "espejos-esfericos",
          title: "Espejos Esféricos",
          icon: "fas fa-circle",
          file: "temas/espejos-esfericos.html",
          description: "Propiedades de los espejos cóncavos y convexos.",
          keywords: ["esféricos", "cóncavo", "convexo"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        {
          id: "lentes",
          title: "Lentes: Convergentes y Divergentes",
          icon: "fas fa-glasses",
          file: "temas/lentes.html",
          description: "Funcionamiento y aplicaciones de lentes delgados.",
          keywords: ["lentes", "convergentes", "divergentes"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        {
          id: "formacion-imagenes",
          title: "Formación de Imágenes",
          icon: "fas fa-image",
          file: "temas/formacion-imagenes.html",
          description: "Cálculos de posición, tamaño y tipo de imagen.",
          keywords: ["imagen", "posición", "aumento"],
          difficulty: "avanzado",
          duration: "35 min"
        }
      ]
    },


    // ==========================================
    // 🌈 SECCIÓN 18: ÓPTICA FÍSICA
    // ==========================================
    {
      id: "optica-fisica",
      title: "🌈 ÓPTICA FÍSICA",
      icon: "fas fa-wave-square",
      description: "Estudio de la luz como onda electromagnética y fenómenos como interferencia, difracción y polarización.",
      color: "#a855f7",
      lessons: [
        {
          id: "principio-huygens",
          title: "Principio de Huygens",
          icon: "fas fa-bullseye",
          file: "temas/principio-huygens.html",
          description: "Explicación de la propagación ondulatoria de la luz según Huygens.",
          keywords: ["huygens", "onda", "propagación"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "experimento-young",
          title: "Experimento de Young",
          icon: "fas fa-stream",
          file: "temas/experimento-young.html",
          description: "Demostración de la naturaleza ondulatoria de la luz mediante doble rendija.",
          keywords: ["young", "interferencia", "rendija"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "interferencia",
          title: "Interferencia de Ondas Luminosas",
          icon: "fas fa-wave-square",
          file: "temas/interferencia.html",
          description: "Superposición de ondas luminosas y patrones de interferencia.",
          keywords: ["interferencia", "ondas", "superposición"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "difraccion",
          title: "Difracción de la Luz por una Rendija",
          icon: "fas fa-grip-lines-vertical",
          file: "temas/difraccion.html",
          description: "Estudio del patrón de difracción generado por una rendija.",
          keywords: ["difracción", "patrón", "rendija"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        {
          id: "redes-difraccion",
          title: "Redes de Difracción",
          icon: "fas fa-border-style",
          file: "temas/redes-difraccion.html",
          description: "Funcionamiento y uso de redes de difracción para análisis espectral.",
          keywords: ["difracción", "red", "espectro"],
          difficulty: "avanzado",
          duration: "35 min"
        },
        {
          id: "polarizacion",
          title: "Polarización de la Luz",
          icon: "fas fa-columns",
          file: "temas/polarizacion.html",
          description: "Naturaleza transversal de la luz y su polarización.",
          keywords: ["polarización", "transversal", "filtro"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "aplicaciones-optica-fisica",
          title: "Aplicaciones de la Óptica Física",
          icon: "fas fa-tools",
          file: "temas/aplicaciones-optica-fisica.html",
          description: "Aplicaciones en espectroscopía, holografía e interferometría.",
          keywords: ["óptica", "aplicaciones", "holografía"],
          difficulty: "avanzado",
          duration: "30 min"
        }
      ]
    },

    // ==========================================
    // ⚡ SECCIÓN 19: ELECTROSTÁTICA
    // ==========================================
    {
      id: "electrostatica",
      title: "⚡ ELECTROSTÁTICA",
      icon: "fas fa-bolt",
      description: "Estudio de las cargas eléctricas, su interacción y los conceptos fundamentales del campo eléctrico y la ley de Coulomb.",
      color: "#f97316",
      lessons: [
        {
          id: "carga-electrica",
          title: "Carga Eléctrica",
          icon: "fas fa-charging-station",
          file: "temas/carga-electrica.html",
          description: "Naturaleza, tipos de carga y propiedades de la carga eléctrica.",
          keywords: ["carga", "eléctrica", "propiedades"],
          difficulty: "básico",
          duration: "30 min"
        },
        {
          id: "ley-coulomb",
          title: "Ley de Coulomb",
          icon: "fas fa-balance-scale",
          file: "temas/ley-coulomb.html",
          description: "Fórmula y aplicación de la ley de Coulomb para calcular la fuerza entre cargas.",
          keywords: ["coulomb", "fuerza", "cargas"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "campo-electrico",
          title: "Campo Eléctrico",
          icon: "fas fa-broadcast-tower",
          file: "temas/campo-electrico.html",
          description: "Definición, representación y cálculo del campo eléctrico.",
          keywords: ["campo", "eléctrico", "vector"],
          difficulty: "intermedio",
          duration: "40 min",
          hasSimulation: true
        },
        {
          id: "lineas-campo",
          title: "Líneas de Campo Eléctrico",
          icon: "fas fa-project-diagram",
          file: "temas/lineas-campo.html",
          description: "Visualización de la dirección y sentido del campo eléctrico mediante líneas de campo.",
          keywords: ["líneas", "campo", "visualización"],
          difficulty: "básico",
          duration: "30 min"
        },
        {
          id: "potencial-electrico",
          title: "Potencial Eléctrico",
          icon: "fas fa-bolt-lightning",
          file: "temas/potencial-electrico.html",
          description: "Definición de potencial eléctrico, relación con el trabajo y energía.",
          keywords: ["potencial", "voltaje", "energía"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "superficies-equipotenciales",
          title: "Superficies Equipotenciales",
          icon: "fas fa-layer-group",
          file: "temas/superficies-equipotenciales.html",
          description: "Características de las superficies donde el potencial eléctrico es constante.",
          keywords: ["equipotencial", "potencial constante"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "energia-electrostatica",
          title: "Energía Potencial Electroestática",
          icon: "fas fa-battery-half",
          file: "temas/energia-electrostatica.html",
          description: "Cálculo de la energía potencial entre cargas eléctricas.",
          keywords: ["energía", "potencial", "cargas"],
          difficulty: "avanzado",
          duration: "40 min"
        }
      ]
    },

    // ==========================================
    // 🔋 SECCIÓN 20: CIRCUITOS ELÉCTRICOS
    // ==========================================
    {
      id: "circuitos-electricos",
      title: "🔋 CIRCUITOS ELÉCTRICOS",
      icon: "fas fa-plug",
      description: "Estudio de los elementos, leyes y análisis de circuitos eléctricos simples y combinados.",
      color: "#eab308",
      lessons: [
        {
          id: "circuito-basico",
          title: "Circuito Eléctrico Básico",
          icon: "fas fa-bolt",
          file: "temas/circuito-basico.html",
          description: "Componentes fundamentales de un circuito: fuente, conductores, resistencias.",
          keywords: ["circuito", "corriente", "resistencia"],
          difficulty: "básico",
          duration: "30 min"
        },
        {
          id: "ley-ohm",
          title: "Ley de Ohm",
          icon: "fas fa-equals",
          file: "temas/ley-ohm.html",
          description: "Relación entre voltaje, corriente y resistencia.",
          keywords: ["ohm", "voltaje", "corriente"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "resistencias-serie",
          title: "Resistencias en Serie",
          icon: "fas fa-stream",
          file: "temas/resistencias-serie.html",
          description: "Cálculo de la resistencia total en una conexión en serie.",
          keywords: ["serie", "resistencia", "corriente"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "resistencias-paralelo",
          title: "Resistencias en Paralelo",
          icon: "fas fa-project-diagram",
          file: "temas/resistencias-paralelo.html",
          description: "Análisis de la conexión en paralelo de resistencias.",
          keywords: ["paralelo", "resistencia", "voltaje"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "potencia-electrica",
          title: "Potencia Eléctrica",
          icon: "fas fa-lightbulb",
          file: "temas/potencia-electrica.html",
          description: "Cálculo de la potencia disipada por resistencias.",
          keywords: ["potencia", "energía", "eléctrico"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "leyes-kirchhoff",
          title: "Leyes de Kirchhoff",
          icon: "fas fa-random",
          file: "temas/leyes-kirchhoff.html",
          description: "Ley de corrientes y ley de voltajes para análisis de mallas y nodos.",
          keywords: ["kirchhoff", "ley", "mallas", "nodos"],
          difficulty: "avanzado",
          duration: "40 min"
        },
        {
          id: "circuitos-mixtos",
          title: "Circuitos Mixtos",
          icon: "fas fa-network-wired",
          file: "temas/circuitos-mixtos.html",
          description: "Análisis de circuitos con resistencias en serie y paralelo combinadas.",
          keywords: ["circuito mixto", "resistencia"],
          difficulty: "avanzado",
          duration: "40 min"
        }
      ]
    },




       // ==========================================
    // 🔧 SECCIÓN 21: MÉTODO DE MALLAS Y NODOS
    // ==========================================
    {
      id: "mallas-nodos",
      title: "🔧 MÉTODO DE MALLAS Y NODOS",
      icon: "fas fa-project-diagram",
      description: "Análisis de circuitos eléctricos usando el método de mallas (corrientes) y nodos (voltajes).",
      color: "#4b5563",
      lessons: [
        {
          id: "introduccion-metodos",
          title: "Introducción a los Métodos",
          icon: "fas fa-info-circle",
          file: "temas/introduccion-metodos.html",
          description: "Fundamentos y diferencias entre análisis por mallas y nodos.",
          keywords: ["mallas", "nodos", "circuitos"],
          difficulty: "intermedio",
          duration: "25 min"
        },
        {
          id: "ley-kirchhoff-mallas",
          title: "Ley de Kirchhoff para Mallas",
          icon: "fas fa-route",
          file: "temas/ley-kirchhoff-mallas.html",
          description: "Aplicación de la Ley de voltajes en el análisis de mallas.",
          keywords: ["kirchhoff", "voltaje", "mallas"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "ejemplo-mallas",
          title: "Ejemplo: Método de Mallas",
          icon: "fas fa-drafting-compass",
          file: "temas/ejemplo-mallas.html",
          description: "Ejercicio resuelto paso a paso usando el método de mallas.",
          keywords: ["ejemplo", "mallas", "resuelto"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "ley-kirchhoff-nodos",
          title: "Ley de Kirchhoff para Nodos",
          icon: "fas fa-random",
          file: "temas/ley-kirchhoff-nodos.html",
          description: "Aplicación de la Ley de corrientes para analizar nodos.",
          keywords: ["kirchhoff", "corriente", "nodos"],
          difficulty: "intermedio",
          duration: "30 min"
        },
        {
          id: "ejemplo-nodos",
          title: "Ejemplo: Método de Nodos",
          icon: "fas fa-network-wired",
          file: "temas/ejemplo-nodos.html",
          description: "Resolución de un circuito mediante el método de nodos.",
          keywords: ["nodos", "ejercicio", "resuelto"],
          difficulty: "intermedio",
          duration: "35 min"
        },
        {
          id: "comparacion-metodos",
          title: "Comparación entre Métodos",
          icon: "fas fa-exchange-alt",
          file: "temas/comparacion-metodos.html",
          description: "Ventajas, desventajas y cuándo usar mallas o nodos.",
          keywords: ["comparación", "análisis", "circuitos"],
          difficulty: "avanzado",
          duration: "20 min"
        }
      ]
    }

  ]
};


