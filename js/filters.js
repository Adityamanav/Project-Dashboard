// Search + Category + Status filtering logic

let currentFilters = {
  search: "",
  category: "all",
  status: "all"
};

function applyFilters() {
  let filtered = [...projects];

  // Search
  if (currentFilters.search) {
    const q = currentFilters.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  // Category
  if (currentFilters.category !== "all") {
    filtered = filtered.filter((p) => p.category === currentFilters.category);
  }

  // Status
  if (currentFilters.status !== "all") {
    filtered = filtered.filter((p) => p.status === currentFilters.status);
  }

  renderProjects(filtered);
  updateStats(filtered);
}

function setupFilters() {
  // Search
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener(
      "input",
      debounce((e) => {
        currentFilters.search = e.target.value.trim();
        applyFilters();
      }, 180)
    );
  }

  // Category chips (event delegation)
  const catContainer = document.getElementById("category-chips");
  if (catContainer) {
    catContainer.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;

      catContainer.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilters.category = chip.dataset.category;
      applyFilters();
    });
  }

  // Status chips
  const statusContainer = document.getElementById("status-chips");
  if (statusContainer) {
    statusContainer.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;

      statusContainer.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilters.status = chip.dataset.status;
      applyFilters();
    });
  }
}
