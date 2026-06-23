"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

export default function AdminPanel({ initialPerfumes }) {
  const router = useRouter();
  const [perfumes, setPerfumes] = useState(initialPerfumes);
  const [password, setPassword] = useState("");
  const [query, setQuery] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const filteredPerfumes = perfumes.filter((perfume) =>
    `${perfume.name} ${perfume.line} ${perfume.variant}`.toLowerCase().includes(query.toLowerCase().trim())
  );

  const updatePrice = (id, price) => {
    setPerfumes((current) => current.map((perfume) => (perfume.id === id ? { ...perfume, price } : perfume)));
  };

  const savePrices = async () => {
    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/perfumes", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password
        },
        body: JSON.stringify({ perfumes })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "No se pudieron guardar los precios.");
      }

      setMessage(result.mode === "github" ? "Precios guardados en el repo. Vercel va a redesplegar el sitio." : "Precios guardados en el JSON local.");
      router.refresh();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="admin-shell">
      <section className="admin-hero">
        <div>
          <p className="eyebrow">Panel de admin</p>
          <h1>Editar precios</h1>
          <p className="hero__text">Actualiza los precios del mismo JSON que usa el catalogo.</p>
        </div>
        <a className="admin-link" href="/">Ver catalogo</a>
      </section>

      <section className="admin-tools">
        <label className="search" htmlFor="adminSearch">
          <span>Buscar producto</span>
          <input id="adminSearch" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nombre, linea o variante" />
        </label>
        <label className="search" htmlFor="adminPassword">
          <span>Clave admin</span>
          <input id="adminPassword" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Solo si esta configurada" />
        </label>
        <button className="save-button" type="button" onClick={savePrices} disabled={saving}>
          {saving ? "Guardando..." : "Guardar cambios"}
        </button>
      </section>

      {message ? <p className="admin-message">{message}</p> : null}

      <section className="price-table" aria-label="Listado editable de precios">
        {filteredPerfumes.map((perfume) => (
          <article className="price-row" key={perfume.id}>
            <img src={perfume.image} alt="" loading="lazy" />
            <div>
              <strong>{perfume.name}</strong>
              <span>{perfume.line} · {perfume.variant}</span>
            </div>
            <label>
              <span>Precio</span>
              <input
                type="number"
                min="0"
                step="100"
                value={perfume.price}
                onChange={(event) => updatePrice(perfume.id, Number(event.target.value))}
              />
            </label>
            <p>{priceFormatter.format(perfume.price || 0)}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
