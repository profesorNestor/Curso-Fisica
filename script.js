// ====================================================
// 🎯 CURSO INTERACTIVO DE FÍSICA: script.js (REVISADO)
// ====================================================
// Autor: Néstor Fabio Montoya Palacios
// Versión mejorada y corregida con estructura visual 👨‍🏫
// ====================================================

document.addEventListener("DOMContentLoaded", () => {

  // 🚦 1. Obtener Datos del Curso
  let data = {};
  if (typeof courseData !== "undefined") {
    data = courseData;
  } else if (typeof window.courseData !== "undefined") {
    data = window.courseData;
  } else {
    alert("❌ No se encontró el objeto 'courseData'. Verifica secciones.js.");
    return;
  }
  if (!data.sections) {
    alert("⚠️ 'courseData' no tiene 'sections'. Revisa estructura interna.");
    return;
  }
  const sections = data.sections;

  // 🔗 2. Elementos del DOM
  const sidebarMenu = document.getElementById("sidebar-menu");
  const contentArea = document.getElementById("content-area");
  const loader = document.getElementById("loader");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");

  // 🌞 3. Iniciar en Modo Claro
  document.body.classList.remove("dark-mode");

  // 🧹 4. Crear Menú Lateral
  function crearMenuLateral() {
    sidebarMenu.innerHTML = "";
    sections.forEach(section => {
      const p = document.createElement("p");
      p.className = "menu-section-title";
      p.innerHTML = `${section.icon ? `<i class="${section.icon}"></i>` : ""} ${section.title}`;
      sidebarMenu.appendChild(p);

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
        a.innerHTML = `${lesson.icon ? `<i class="${lesson.icon}"></i>` : ""} <span>${lesson.title}</span>`;
        a.title = lesson.description || lesson.title;

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

  // ✅ 5. Activar Item de Menú
  function activarMenuItem(item) {
    document.querySelectorAll(".menu-item").forEach(a => a.classList.remove("active"));
    if (item) item.classList.add("active");
  }

  // 📖 6. Cargar Lección
  async function cargarLeccion(lesson, section) {
    mostrarLoader("Cargando...", "📖 Preparando lección...");
    try {
      const resp = await fetch(lesson.file);
      if (!resp.ok) throw new Error("Archivo no encontrado");
      const html = await resp.text();
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
        <div class="lesson-content">${html}</div>`;

      if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise();
      if (window.hljs) document.querySelectorAll("pre code").forEach(b => hljs.highlightBlock(b));

    } catch (err) {
      contentArea.innerHTML = `<div class="error-message">
        <h3><i class="fas fa-exclamation-triangle"></i> Error al cargar la lección</h3>
        <p>No se pudo cargar <code>${lesson.file}</code>.</p></div>`;
    }
    ocultarLoader();
  }

  // ⏳ 7. Loader
  function mostrarLoader(texto, subtexto) {
    if (!loader) return;
    loader.style.display = "flex";
    document.getElementById("loader-text").textContent = texto;
    document.getElementById("loader-subtext").textContent = subtexto;
  }
  function ocultarLoader() {
    if (loader) loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 380);
  }

  //    8. Menú Lateral Responsive
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

  // 🏋️ 9. Botones de Inicio
  document.getElementById("start-course-btn")?.addEventListener("click", () => document.querySelector(".menu-item")?.click());
  document.getElementById("welcome-start-btn")?.addEventListener("click", () => document.querySelector(".menu-item")?.click());
  document.getElementById("welcome-random-sim-btn")?.addEventListener("click", () => {
    const simulaciones = Array.from(document.querySelectorAll(".menu-item")).filter(a => buscarLeccionPorId(a.dataset.lessonId)?.hasSimulation);
    if (simulaciones.length > 0) simulaciones[Math.floor(Math.random() * simulaciones.length)].click();
    else alert("¡Aún no hay simulaciones!");
  });
  document.getElementById("simulations-btn")?.addEventListener("click", () => {
    const sim = Array.from(document.querySelectorAll(".menu-item")).find(a => buscarLeccionPorId(a.dataset.lessonId)?.hasSimulation);
    if (sim) sim.click();
    else alert("No se encontraron simulaciones aún.");
  });

  // 🌟 10. Destacados y Estadísticas
  function renderHighlights() {
    const container = document.getElementById("physics-highlights");
    if (!container) return;
    container.innerHTML = "";
    sections.slice(0, 3).forEach(section => {
      const lesson = section.lessons[0];
      if (lesson) {
        const card = document.createElement("div");
        card.className = "highlight-card";
        card.innerHTML = `
          <div class="card-icon"><i class="${lesson.icon} highlight-icon"></i></div>
          <div class="card-content"><h4>${lesson.title}</h4><p>${lesson.description || ""}</p></div>
          <div class="card-arrow"><i class="fas fa-chevron-right"></i></div>`;
        card.addEventListener("click", () => {
          cargarLeccion(lesson, section);
          activarMenuItem(document.querySelector(`.menu-item[data-lesson-id='${lesson.id}']`));
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
      numLessons++;
      if (l.hasSimulation) numSim++;
    }));
    container.innerHTML = `
      <h3 class="stats-title"><i class="fas fa-chart-bar"></i> Contenido del Curso</h3>
      <div class="stats-grid">
        <div class="stats-card"><span>${sections.length}</span><small>Secciones</small></div>
        <div class="stats-card"><span>${numLessons}</span><small>Lecciones</small></div>
        <div class="stats-card"><span>${numSim}</span><small>Simulaciones</small></div>
      </div>`;
  }

  // 🆑 11. Buscar Lección por ID
  function buscarLeccionPorId(id) {
    for (const sec of sections) for (const l of sec.lessons) if (l.id === id) return l;
    return null;
  }

  // 🚀 12. Inicialización
  crearMenuLateral();
  renderHighlights();
  renderStats();
  setTimeout(ocultarLoader, 900);

  // 💡 Extras: cerrar con ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarSidebar();
  });

});
// 🎉 Fin del Script Principal
