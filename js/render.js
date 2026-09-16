// Renders project cards and updates stats

function createCard(project) {
  const hasLink = project.link && project.link.trim() !== "";
  const statusClass = `card__status--${project.status}`;
  const statusLabel = capitalize(project.status.replace("-", " "));

  const card = document.createElement("article");
  card.className = `card${project.featured ? " card--featured" : ""}`;
  card.dataset.id = project.id;
  card.dataset.category = project.category;
  card.dataset.status = project.status;

  card.innerHTML = `
    <div class="card__top">
      <span class="card__number">#${formatId(project.id)}</span>
      <span class="card__status ${statusClass}">${statusLabel}</span>
    </div>

    <h3 class="card__title">${project.title}</h3>
    <p class="card__description">${project.description}</p>

    <div class="card__meta">
      <span class="badge badge--category">${project.category}</span>
      ${project.tech.map(t => `<span class="badge">${t}</span>`).join("")}
    </div>

    <div class="card__actions">
      <a
        href="${hasLink ? project.link : "#"}"
        class="btn btn--primary btn--sm preview-btn"
        data-link="${project.link || ""}"
        data-id="${project.id}"
        ${hasLink ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true"'}
        ${!hasLink ? 'tabindex="-1"' : ""}
      >
        ${hasLink ? "Preview Project →" : "Coming Soon"}
      </a>
    </div>
  `;

  // Prevent navigation when no link
  if (!hasLink) {
    const btn = card.querySelector(".preview-btn");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }

  return card;
}

function renderProjects(list) {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">🔍</div>
        <h3>No projects found</h3>
        <p>Try changing your search or filters.</p>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();
  list.forEach((p) => fragment.appendChild(createCard(p)));
  grid.appendChild(fragment);
}

function updateStats(list) {
  const total = projects.length;
  const completed = projects.filter((p) => p.status === "completed").length;
  const percent = Math.round((completed / total) * 100);

  // Header progress
  const fill = document.getElementById("progress-fill");
  const text = document.getElementById("progress-text");
  if (fill) fill.style.width = `${percent}%`;
  if (text) text.textContent = `${completed} / ${total} completed (${percent}%)`;

  // Main count
  const countEl = document.getElementById("projects-count");
  if (countEl) {
    countEl.textContent = `Showing ${list.length} of ${total} projects`;
  }
}

function getAllCategories() {
  const cats = new Set(projects.map((p) => p.category));
  return Array.from(cats).sort();
}

function renderCategoryChips() {
  const container = document.getElementById("category-chips");
  if (!container) return;

  const cats = getAllCategories();
  container.innerHTML = `
    <button class="chip active" data-category="all">All</button>
    ${cats.map((c) => `<button class="chip" data-category="${c}">${c}</button>`).join("")}
  `;
}
