"use client";

import { useState } from "react";

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

export default function Catalog({ initialPerfumes }) {
  const [search, setSearch] = useState("");
  const query = normalize(search.trim());
  const perfumes = initialPerfumes.filter((perfume) => matchesSearch(perfume, query));

  return (
    <>
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Perfumes importados</p>
          <h1>Catalogo actualizado</h1>
          <p className="hero__text">Busca por nombre, linea o variante y consulta precios vigentes en pesos argentinos.</p>
        </div>
        <div className="hero__stats" aria-label="Resumen del catalogo">
          <strong>{initialPerfumes.length}</strong>
          <span>productos disponibles</span>
        </div>
      </header>

      <main className="catalog-shell">
        <section className="toolbar" aria-label="Herramientas de busqueda">
          <label className="search" htmlFor="searchInput">
            <span>Buscar perfume</span>
            <input
              id="searchInput"
              type="search"
              placeholder="Ej: Yara, Club de nuit, Khamrah..."
              autoComplete="off"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
          <p className="result-count" aria-live="polite">
            {perfumes.length} de {initialPerfumes.length} productos
          </p>
        </section>

        <section className="catalog" aria-label="Listado de perfumes">
          {perfumes.map((perfume) => (
            <article className="perfume-card" key={perfume.id}>
              <div className="perfume-card__media">
                <img src={perfume.image} alt={perfume.name} loading="lazy" />
              </div>
              <div className="perfume-card__body">
                <span className="perfume-card__line">{perfume.line}</span>
                <h2>{perfume.name}</h2>
                <div className="perfume-card__meta">
                  <span className="pill">{perfume.variant}</span>
                  <span className="pill">Importado</span>
                </div>
                <div className="perfume-card__footer">
                  <span className="price">{priceFormatter.format(perfume.price)}</span>
                  <span className="status">Disponible</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {perfumes.length === 0 ? (
          <section className="empty-state">
            <h2>No encontre perfumes</h2>
            <p>Proba con otra palabra o revisa que el nombre este bien escrito.</p>
          </section>
        ) : null}
      </main>
    </>
  );
}
