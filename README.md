# Catalogo de Perfumes

App Next.js con catalogo publico y panel de admin para editar precios desde `/admin`.

## Variables para Vercel

- `GITHUB_TOKEN`: token de GitHub con permiso para escribir contents del repo.
- `GITHUB_REPOSITORY`: repo en formato `usuario/repositorio`.
- `GITHUB_BRANCH`: rama a actualizar. Por defecto usa `master`.
- `ADMIN_PASSWORD`: clave opcional para proteger el guardado de precios.

En local, si no hay `GITHUB_TOKEN`, el panel escribe directamente `data/perfumes.json`.
