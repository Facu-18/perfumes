const catalog = document.querySelector("#catalog");
const emptyState = document.querySelector("#emptyState");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const totalProducts = document.querySelector("#totalProducts");
const perfumes = window.perfumes;

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const matchesSearch = (perfume, query) => {
  if (!query) return true;
  const searchableText = normalize(`${perfume.name} ${perfume.line} ${perfume.variant}`);
  return searchableText.includes(query);
};

const renderPerfumes = (items) => {
  catalog.innerHTML = items
    .map(
      (perfume) => `
        <article class="perfume-card">
          <div class="perfume-card__media">
            <img src="${perfume.image}" alt="${perfume.name}" loading="lazy" onerror="this.src=''; this.alt='Imagen no disponible';" />
          </div>
          <div class="perfume-card__body">
            <span class="perfume-card__line">${perfume.line}</span>
            <h2>${perfume.name}</h2>
            <div class="perfume-card__meta">
              <span class="pill">${perfume.variant}</span>
              <span class="pill">Importado</span>
            </div>
            <div class="perfume-card__footer">
              <span class="price">${priceFormatter.format(perfume.price)}</span>
              <span class="status">Disponible</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  resultCount.textContent = `${items.length} de ${perfumes.length} productos`;
  emptyState.hidden = items.length > 0;
};

const handleSearch = () => {
  const query = normalize(searchInput.value.trim());
  renderPerfumes(perfumes.filter((perfume) => matchesSearch(perfume, query)));
};

totalProducts.textContent = perfumes.length;
searchInput.addEventListener("input", handleSearch);
renderPerfumes(perfumes);
