// ====================================================
// 🎯 CURSO INTERACTIVO DE FÍSICA: script.js
// ====================================================
// Autor: Néstor Fabio Montoya Palacios
// Estructura modular, comentada y visual para estudiar fácil 👨‍🏫
// ====================================================

document.addEventListener("DOMContentLoaded", () => {

  // =========================================
  // 🚦 1. OBTENER DATOS DEL CURSO (courseData)
  // =========================================
  // El objeto debe estar definido en secciones.js
  let data = {};
  if (typeof courseData !== "undefined") {
    data = courseData; // Encontrado como global
  } else if (typeof window.courseData !== "undefined") {
    data = window.courseData; // Encontrado en window
  } else {
    alert("❌ No se ha encontrado el objeto 'courseData' en secciones.js.\n\n💡 Verifica que el archivo secciones.js esté correctamente cargado y define:\nconst courseData = { ... }");
    return;
  }

  // Validación básica de estructura
  if (!data.sections) {
    alert("⚠️ El objeto 'courseData' NO tiene el arreglo 'sections'.\n\nRevisa que la estructura sea:\nconst courseData = { ... sections: [ ... ] }");
    return;
  }
  const sections = data.sections;

  // =========================================
  // 🔗 2. REFERENCIAS A ELEMENTOS CLAVE
  // =========================================

  // Menú lateral (secciones y lecciones)
  const sidebarMenu = document.getElementById("sidebar-menu");
  // Área principal de contenido
  const contentArea = document.getElementById("content-area");
  // Loader animado de carga
  const loader = document.getElementById("loader");
  // Botón de alternancia modo claro/oscuro
  const themeToggle = document.getElementById("theme-toggle");
  // Botón abrir/cerrar menú lateral
  const sidebarToggle = document.getElementById("sidebar-toggle");
  // Botón menú en móviles
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  // Elemento completo sidebar
  const sidebar = document.getElementById("sidebar");
  // Fondo oscuro overlay para menú móvil
  const sidebarOverlay = document.getElementById("sidebar-overlay");

  // =========================================
  // 🌞 3. MODO CLARO/OSCURO INICIAL (SIEMPRE CLARO AL INICIO)
  // =========================================

  // Siempre inicia en modo claro (elimina cualquier 'dark-mode' en <body>)
  document.body.classList.remove("dark-mode");

  // Función que actualiza el texto/ícono del botón según modo actual
  function actualizarBotonModo() {
    if (document.body.classList.contains("dark-mode")) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span>Modo Claro</span>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span>Modo Oscuro</span>';
    }
  }
  // Inicializa el botón correctamente al cargar
  actualizarBotonModo();

  // Listener para alternar el modo visual
  themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    actualizarBotonModo();
  });

  // =========================================
  // 🧩 4. CREAR EL MENÚ LATERAL DINÁMICAMENTE
  // =========================================
  function crearMenuLateral() {
    sidebarMenu.innerHTML = ""; // Limpia el menú

    sections.forEach(section => {
      // Título de la sección
      const p = document.createElement("p");
      p.className = "menu-section-title";
      p.innerHTML = `${section.icon ? `<i class="${section.icon}"></i>` : ""} ${section.title}`;
      sidebarMenu.appendChild(p);

      // Lista de lecciones
      const ul = document.createElement("ul");
      ul.className = "menu-list";
      section.lessons.forEach(lesson => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.className = "menu-item";
        a.dataset.lessonId = lesson.id;
        a.dataset.file = lesson.file;
        a.dataset.difficulty = lesson.difficulty || "";
        a.innerHTML = `
          ${lesson.icon ? `<i class="${lesson.icon}"></i>` : ""}
          <span>${lesson.title}</span>
        `;
        a.title = lesson.description || lesson.title;

        // Evento click: carga la lección
        a.addEventListener("click", e => {
          e.preventDefault();
          cargarLeccion(lesson, section);
          activarMenuItem(a);
          cerrarSidebar();
        });

        li.appendChild(a);
        ul.appendChild(li);
      });
      sidebarMenu.appendChild(ul);
    });
  }

  // =========================================
  // ✅ 5. ACTIVAR VISUALMENTE ITEM SELECCIONADO
  // =========================================
  function activarMenuItem(item) {
    document.querySelectorAll(".menu-item").forEach(a => a.classList.remove("active"));
    if (item) item.classList.add("active");
  }

  // =========================================
  // 📖 6. CARGAR UNA LECCIÓN EN EL ÁREA PRINCIPAL
  // =========================================
  async function cargarLeccion(lesson, section) {
    mostrarLoader("Cargando...", "📖 Preparando lección...");
    try {
      // Traer el HTML de la lección
      const resp = await fetch(lesson.file);
      if (!resp.ok) throw new Error("Archivo no encontrado");
      const html = await resp.text();

      // Inyectar el contenido y metadatos
      contentArea.innerHTML = `
        <div class="lesson-header" style="border-left: 8px solid ${section.color || "#0450e7"};">
          <h2>${lesson.icon ? `<i class="${lesson.icon}"></i>` : ""} ${lesson.title}</h2>
          <div class="lesson-meta">
            <span><i class="fas fa-signal"></i> ${lesson.difficulty || "N/A"}</span>
            <span><i class="fas fa-clock"></i> ${lesson.duration || "?"}</span>
            ${lesson.hasSimulation ? `<span class="badge-sim"><i class="fas fa-vr-cardboard"></i> Simulación</span>` : ""}
          </div>
          <div class="lesson-desc">${lesson.description || ""}</div>
        </div>
        <div class="lesson-content">
          ${html}
        </div>
      `;

      // Reprocesar MathJax si hay ecuaciones
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      }
      // Resaltar bloques de código (si tienes highlight.js)
      if (window.hljs) {
        document.querySelectorAll("pre code").forEach(block => {
          window.hljs.highlightBlock(block);
        });
      }
    } catch (err) {
      contentArea.innerHTML = `
        <div class="error-message">
          <h3><i class="fas fa-exclamation-triangle"></i> Error al cargar la lección</h3>
          <p>No se pudo cargar el archivo <code>${lesson.file}</code>. Verifica que exista en la carpeta <b>temas/</b>.</p>
        </div>
      `;
    }
    ocultarLoader();
  }

  // =========================================
  // ⏳ 7. MOSTRAR / OCULTAR LOADER ANIMADO
  // =========================================
  function mostrarLoader(texto, subtexto) {
    if (!loader) return;
    loader.style.display = "flex";
    if (texto) document.getElementById("loader-text").textContent = texto;
    if (subtexto) document.getElementById("loader-subtext").textContent = subtexto;
  }
  function ocultarLoader() {
    if (loader) loader.style.opacity = "0";
    setTimeout(() => { if (loader) loader.style.display = "none"; }, 380);
  }

  // =========================================
  // 🪟 8. ABRIR/CERRAR MENÚ LATERAL (RESPONSIVE)
  // =========================================
  function abrirSidebar() {
    document.body.classList.add("sidebar-open");
    sidebarOverlay.style.display = "block";
  }
  function cerrarSidebar() {
    document.body.classList.remove("sidebar-open");
    sidebarOverlay.style.display = "none";
  }
  sidebarToggle?.addEventListener("click", abrirSidebar);
  mobileMenuToggle?.addEventListener("click", abrirSidebar);
  sidebarOverlay?.addEventListener("click", cerrarSidebar);

  // =========================================
  // 🏁 9. ACCIONES RÁPIDAS EN BIENVENIDA
  // =========================================
  document.getElementById("start-course-btn")?.addEventListener("click", () => {
    const first = document.querySelector(".menu-item");
    if (first) first.click();
  });
  document.getElementById("welcome-start-btn")?.addEventListener("click", () => {
    const first = document.querySelector(".menu-item");
    if (first) first.click();
  });
  document.getElementById("welcome-random-sim-btn")?.addEventListener("click", () => {
    const simulaciones = Array.from(document.querySelectorAll(".menu-item")).filter(a => {
      const l = buscarLeccionPorId(a.dataset.lessonId);
      return l && l.hasSimulation;
    });
    if (simulaciones.length > 0) {
      const random = simulaciones[Math.floor(Math.random() * simulaciones.length)];
      random.click();
    } else {
      alert("¡Aún no hay simulaciones interactivas agregadas!");
    }
  });
  document.getElementById("simulations-btn")?.addEventListener("click", () => {
    const sim = Array.from(document.querySelectorAll(".menu-item")).find(a => {
      const l = buscarLeccionPorId(a.dataset.lessonId);
      return l && l.hasSimulation;
    });
    if (sim) sim.click();
    else alert("No se encontraron simulaciones interactivas aún.");
  });

  // =========================================
  // 🌟 10. DESTACADOS VISUALES Y ESTADÍSTICAS
  // =========================================
  function renderHighlights() {
    const container = document.getElementById("physics-highlights");
    if (!container) return;
    container.innerHTML = "";
    // Hasta 3 destacados (primer tema de primeras secciones)
    sections.slice(0, 3).forEach(section => {
      if (section.lessons[0]) {
        const lesson = section.lessons[0];
        const card = document.createElement("div");
        card.className = "highlight-card";
        card.innerHTML = `
          <div class="card-icon"><i class="${lesson.icon} highlight-icon"></i></div>
          <div class="card-content"><h4>${lesson.title}</h4><p>${lesson.description || ""}</p></div>
          <div class="card-arrow"><i class="fas fa-chevron-right"></i></div>
        `;
        card.addEventListener("click", () => {
          cargarLeccion(lesson, section);
          activarMenuItem(document.querySelector(`.menu-item[data-lesson-id="${lesson.id}"]`));
          cerrarSidebar();
        });
        container.appendChild(card);
      }
    });
  }
  function renderStats() {
    const container = document.getElementById("course-stats");
    if (!container) return;
    let numLessons = 0, numSim = 0;
    sections.forEach(sec => sec.lessons.forEach(l => {
      numLessons++; if (l.hasSimulation) numSim++;
    }));
    container.innerHTML = `
      <h3 class="stats-title"><i class="fas fa-chart-bar"></i> Contenido del Curso</h3>
      <div class="stats-grid">
        <div class="stats-card"><span>${sections.length}</span><small>Secciones</small></div>
        <div class="stats-card"><span>${numLessons}</span><small>Lecciones</small></div>
        <div class="stats-card"><span>${numSim}</span><small>Simulaciones</small></div>
      </div>
    `;
  }

  // =========================================
  // 🆔 11. UTILIDAD: BUSCAR LECCIÓN POR ID
  // =========================================
  function buscarLeccionPorId(id) {
    for (const sec of sections) {
      for (const l of sec.lessons) {
        if (l.id === id) return l;
      }
    }
    return null;
  }

  // =========================================
  // 🚀 12. INICIALIZACIÓN FINAL DE LA INTERFAZ
  // =========================================
  crearMenuLateral();   // Construye el menú lateral del curso
  renderHighlights();   // Muestra destacados en portada
  renderStats();        // Muestra stats globales
  setTimeout(ocultarLoader, 900); // Oculta el loader tras cargar

  // =========================================
  // 💡 ACCESIBILIDAD Y MEJORAS EXTRA
  // =========================================

  // Permitir cerrar menú lateral con ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarSidebar();
  });

  // Puedes agregar aquí más mejoras visuales si lo deseas
  // Por ejemplo: animaciones al cargar lecciones, efectos, etc.

});
// ================================
// 🎉 FIN DEL SCRIPT PRINCIPAL
// ================================
