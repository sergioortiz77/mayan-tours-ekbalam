# 🧠 Bitácora de Memoria Persistente del Proyecto (`PROJECT_LOG.md`)

> **ATENCIÓN PARA EL ASISTENTE IA (Antigravity):** Lee este archivo al iniciar cualquier nueva sesión o chat en este workspace. Contiene el estado real, la infraestructura conectada y el historial completo para no pedir información repetida al usuario.

---

## 📌 1. Ficha Técnica y Estado del Proyecto

| Parámetro | Valor / Estado |
| :--- | :--- |
| **Nombre del Proyecto** | `mayan-tours-ekbalam` |
| **Directorio Local** | `/home/sergio/Documentos/Proyectos/mayan-tours-ekbalam` |
| **Stack Técnico** | Next.js 14 (App Router), TypeScript, Tailwind CSS, React 18, PostCSS |
| **Repositorio GitHub** | [github.com/sergioortiz77/mayan-tours-ekbalam](https://github.com/sergioortiz77/mayan-tours-ekbalam) |
| **Propietario GitHub** | `@sergioortiz77` (Sergio Ortiz - `sergio.ortiz.77@gmail.com`) |
| **Rama Principal** | `main` |
| **Plataforma de Deploy** | Netlify |
| **URL Producción en Vivo** | [https://mayan-tours-ekbalam.netlify.app](https://mayan-tours-ekbalam.netlify.app) |
| **Panel de Netlify** | [app.netlify.com/projects/mayan-tours-ekbalam](https://app.netlify.com/projects/mayan-tours-ekbalam) |
| **Netlify Site ID** | `59b8c64c-6baa-4955-ba5c-eb616ed010f0` |
| **Estado CI/CD** | 🟢 Automático / En vivo (Deploy Key SSH + Webhook de GitHub hacia Netlify) |

---

## 🔄 2. Automatización CI/CD y Autorunner (Mecanismo Activo)

* **Disparador:** Cada `git push origin main` envía un evento Webhook a Netlify.
* **Autenticación SSH:** Netlify clona el código usando la Deploy Key registrada en GitHub (`Key ID: 160562652`).
* **Hook URL:** `https://api.netlify.com/build_hooks/6a83f7bb9fe689a20692c0ac`
* **Tiempo estimado de Deploy:** ~45 segundos por build.
* **Costo de CI/CD:** $0.00 (Webhook directo, consumo 0 min de GitHub Actions).

---

## 🗺️ 3. Mapa de Arquitectura del Código (`src/`)

```text
src/
├── app/
│   ├── globals.css      # Estilos globales y utilidades Tailwind CSS
│   ├── layout.tsx       # Layout principal HTML5 / SEO Metadata
│   └── page.tsx         # Landing Page principal (ensamblado de componentes)
├── components/
│   ├── Navbar.tsx               # Navegación principal y menú móvil
│   ├── Hero.tsx                 # Sección de portada y llamado a la acción
│   ├── ToursSection.tsx         # Catálogo de tours y experiencias en Ek Balam
│   ├── VisitorGuide.tsx         # Guía para el visitante (horarios, recomendaciones)
│   ├── WorkshopsSection.tsx     # Talleres artesanales y gastronómicos mayas
│   ├── TransportSection.tsx     # Opciones de transporte y llegada
│   ├── AboutGuide.tsx           # Perfil del guía local
│   ├── ComplementarySection.tsx # Experiencias complementarias
│   ├── ContactSection.tsx       # Formulario y ubicación
│   ├── FAQSection.tsx           # Preguntas frecuentes
│   ├── WhatsAppFloat.tsx        # Botón flotante directo a WhatsApp
│   └── Footer.tsx               # Pie de página y enlaces
└── data/
    └── content.ts               # Copywriting, datos de tours y configuración textual
```

---

## 📜 4. Historial Cronológico de Cambios e Hitos (Session History)

### 🗓️ 2026-08-18 — Setup Inicial de Infraestructura y Despliegue en Vivo
1. **Inicialización Git:** Se creó `.gitignore` y se inicializó la rama `main` local.
2. **Creación de Repositorio:** Se creó el repo público `sergioortiz77/mayan-tours-ekbalam` en GitHub.
3. **Despliegue en Netlify:** Se enlazó la cuenta `sergio.ortiz.77@gmail.com`, se generó la Deploy Key SSH y se creó el sitio en Netlify.
4. **Configuración de Autorunner:** Se agregó el Webhook de Push en GitHub apuntando al Build Hook de Netlify.
5. **Verificación de Enlace:** Se verificó el despliegue exitoso con código HTTP 200 en `https://mayan-tours-ekbalam.netlify.app`.
6. **Bitácora de Memoria & FinOps:** Se crearon `PROJECT_LOG.md` y `FINOPS_BITACORA.md`.

---

## 📋 5. Roadmap y Próximos Pasos (Pending Backlog)

- [ ] **Diseño & UI/UX:** Revisión visual del diseño en pantallas móviles y desktop.
- [ ] **Imágenes y Contenido:** Validar sustitución de assets temporales por fotografías reales de Ek Balam.
- [ ] **Flujo de Reservas por WhatsApp:** Verificar parámetros del mensaje predeterminado en `WhatsAppFloat.tsx`.
- [ ] **SEO & Meta Tags:** Personalizar los metadatos OpenGraph (OG images, Twitter cards, meta descripción).
- [ ] **Dominio Personalizado (Opcional):** Configurar DNS si se decide enlazar un dominio propio en Netlify.

---

## 🤖 6. Instrucciones para la IA en Futuras Sesiones

1. **Cero Preguntas Redundantes:** No le pidas al usuario la URL del repo ni de Netlify; ya están registradas en la Sección 1 de este archivo.
2. **Despliegue Automático:** Al hacer cambios en el código, recuerda realizar `git commit` y `git push origin main` para que el autorunner actualice el sitio en vivo.
3. **Gobernanza FinOps:** Mantén el costo en $0.00 respetando la capa gratuita de Netlify y optimizando imágenes antes de subirlas.
