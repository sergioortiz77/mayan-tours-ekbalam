# 📊 Bitácora de Ingeniería Senior & Gobernanza FinOps

> **Proyecto:** Mayan Tours Ek Balam (`mayan-tours-ekbalam`)  
> **Entorno:** Staging / Production (Netlify & GitHub CI/CD)  
> **Responsable:** Sergio Ortiz (`@sergioortiz77`)  
> **Última Actualización:** 2026-08-18  
> **Estado Financiero Global:** 🟢 Tier Gratuito / Dentro del Presupuesto Target ($0.00 / mes)

---

## 1. 🌐 Inventario de Recursos e Infraestructura (FinOps Footprint)

Monitoreo de límites de uso de capa gratuita y umbrales de alerta para prevenir sobrecostos en la nube.

| Proveedor | Servicio / Recurso | Tier Actual | Límite Gratuito Mensual | Consumo Actual | Umbral de Alerta (80%) | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: |
| **Netlify** | Build Minutes | Starter (Free) | 300 min / mes | ~3 min | 240 min | 🟢 OK |
| **Netlify** | Bandwidth (CDN Edge) | Starter (Free) | 100 GB / mes | < 0.1 GB | 80 GB | 🟢 OK |
| **Netlify** | Concurrent Builds | Starter | 1 build | 1 build | 1 build | 🟢 OK |
| **GitHub** | Actions / CI Workflows | Free | 2,000 min / mes | 0 min (Webhook Directo) | 1,600 min | 🟢 OK |
| **GitHub** | Storage / Git LFS | Free | 500 MB LFS | < 50 MB | 400 MB | 🟢 OK |

---

## 2. 📈 Dashboard de Métricas de Eficiencia & Economía Unitaria (FinOps KPIs)

Métricas clave para correlacionar costo de infraestructura vs. rendimiento técnico del proyecto.

* **Costo por Compilación (Cost per Build):** `$0.00` (Optimizado mediante compresión de assets y caché de Next.js).
* **Tiempo Promedio de Build:** `~45 segundos` (Next.js 14 SSG/ISR).
* **Costo de Tráfico por Visitante:** `$0.00 / 1k visitas`.
* **Presupuesto Objetivo (Monthly Budget Target):** `$0.00 / mes` (Capa gratuita de startups/demos).

---

## 3. 📝 Registro de Decisiones de Arquitectura e Impacto en Costos (ADR & Change Log)

Registro formal de cambios de infraestructura, justificación técnica y su impacto en FinOps.

### [ADR-001] — 2026-08-18: Configuración de CI/CD Directo vía Webhooks (Netlify + GitHub)
* **Contexto:** Se requería un pipeline automatizado para que cada `git push` a `main` despliegue la versión de muestra automáticamente.
* **Decisión:** Se implementó una **Deploy Key SSH** y un **Webhook de GitHub hacia Netlify Build Hook**, omitiendo GitHub Actions complejas.
* **Impacto en FinOps:** 
  * 📉 **Ahorro de Minutos CI:** $0 en GitHub Actions (consumo 0 min).
  * ⚡ **Eficiencia de Build:** Builds incrementales usando `@netlify/plugin-nextjs` con cacheo eficiente de `.next/cache`.
* **Estado:** 🟢 Aprobado e Implementado.

---

## 4. 🚀 Registro de Ejecución Diaria / Sprint Log

| Fecha | Ticket / ID | Autor | Descripción del Cambio Técnico | Impacto FinOps / Infra | Estado |
| :--- | :--- | :--- | :--- | :--- | :---: |
| 2026-08-18 | INF-001 | @sergioortiz77 | Creación de repo remoto y push inicial del proyecto. | Repositorio activo en `sergioortiz77/mayan-tours-ekbalam`. | 🟢 Done |
| 2026-08-18 | INF-002 | @sergioortiz77 | Conexión con Netlify y emisión de Deploy Key SSH. | Creación del sitio `mayan-tours-ekbalam.netlify.app`. | 🟢 Done |
| 2026-08-18 | INF-003 | @sergioortiz77 | Automatización CI/CD con Webhook en GitHub. | Despliegue en tiempo real con cero sobrecosto de CI. | 🟢 Done |

---

## 5. 🛠️ Backlog de Optimización y Mitigación de Costos (FinOps Backlog)

Acciones preventivas para asegurar que el proyecto escale sin disparar costos de servidor o transferencia.

> [!TIP]
> **Prioridad:** P0 (Bloqueante) | P1 (Alta) | P2 (Media) | P3 (Baja/Mantenimiento)

- [ ] **[P1] Optimización de Imágenes Next.js (`next/image`)**: Configurar `unoptimized: true` o proveedor externo (Cloudinary / Imgix) si el uso de compresión Edge en Netlify supera el límite mensual gratuito de Netlify Image CDN.
- [ ] **[P2] Monitoreo de Purga de Caché**: Implementar estrategia de revalidación basada en demandas (ISR) para reducir cargas innecesarias de builds completos.
- [ ] **[P3] Política de Retención de Deploys de Previsualización**: Limpiar builds de preview antiguos automáticamente para optimizar almacenamiento en el panel de Netlify.

---

## 6. 🚨 Registro de Anomalías y Control de Incidencias de Recurso

| Fecha | Recurso Afectado | Causa de la Anomalía / Spike | Costo Incurrido | Acción Correctiva / Post-mortem |
| :--- | :--- | :--- | :--- | :--- |
| 2026-08-18 | Netlify Build #1 | Fallo de SSH al no tener Deploy Key registrada. | $0.00 | Se generó e instaló la clave RSA pública en GitHub API. |

---

## 🔒 Reglas de Gobernanza FinOps para el Equipo de Ingeniería

1. **Keep-It-Static First:** Preferir generación estática (SSG/ISR) en Next.js antes que SSR costoso para minimizar ejecuciones de Serverless Functions.
2. **Asset Budget:** Ninguna imagen entregada al cliente debe superar los 200 KB. Formatos obligatorios: `WebP` o `AVIF`.
3. **Commit Governance:** Evitar `push` compulsivos con pequeños cambios de formato para no agotar la cuota mensual de 300 minutos de compilación de Netlify. Usar builds locales (`npm run build`) para validar antes de hacer push.
