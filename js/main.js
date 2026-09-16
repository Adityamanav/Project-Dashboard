// Entry point

document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  renderCategoryChips();
  setupFilters();
  applyFilters(); // initial render
});
