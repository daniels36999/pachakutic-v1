# Guamote Informativo — Juan Altamirano

Sitio informativo de una sola página construido con React + Vite, CSS y Lucide React. No utiliza backend, base de datos ni servicios externos para almacenar información.

## Requisitos
- Node.js 20 o superior
- npm

## Instalar y ejecutar
```bash
npm install
npm run dev
```
Vite mostrará una URL local (normalmente `http://localhost:5173`).

## Compilar
```bash
npm run build
npm run preview
```

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub. Si usas otro nombre, cambia `base` en `vite.config.js` por `'/NOMBRE-DEL-REPOSITORIO/'`.
2. Sube todos los archivos a la rama `main`.
3. En GitHub, abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **GitHub Actions**.
5. Cada push a `main` ejecutará `.github/workflows/deploy.yml` y publicará `dist`.

## Personalizar el contenido
- **Datos del candidato:** `src/data/candidate.js`
- **Propuestas del alcalde:** `src/data/proposals.js`
- **Perfiles del equipo:** `src/data/candidates.js`
- **Estilos y colores:** `src/styles/variables.css` y `src/styles/global.css`
- **Fotografía principal:** coloca la foto real en `public/images/candidato/juan-altamirano.jpg` y cambia `photo` en `candidate.js`.
- **Fotografías de concejales:** coloca archivos en `public/images/concejales/` y actualiza `photo` en `candidates.js`.
- **Contacto y redes:** `src/data/candidate.js`; por defecto se muestran marcadores para completar porque no se proporcionaron datos oficiales.
- **Propuestas:** revisa las fuentes y actualiza los objetos en `proposals.js`. Se mantienen separadas las propuestas del alcalde y las atribuidas al plan de concejales.

## Imágenes
El proyecto no genera rostros ficticios. Mientras no se incorporen fotos reales, se muestra un placeholder visual. Las imágenes reales usan `object-fit: cover` para conservar proporciones; las que están fuera de la primera pantalla usan carga diferida.

## Notas
- El contenido visible se basa en `BIBLIOGRAFIAS-DIPTICO.docx`. Se conservaron los nombres, cargos, años y propuestas disponibles; cuando faltan datos se indica que deben completarse.
- Los títulos de sección y las etiquetas son editables. Revisa cuidadosamente la información y el material legal/electoral antes de publicar.
