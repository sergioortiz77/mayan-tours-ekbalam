import React from 'react';
import { Language, PageContent } from '../data/content';
import { ALL_PHOTOS, GALLERY_GROUPS, GalleryPhoto } from '../data/gallery';

interface GallerySectionProps {
  content: PageContent['gallery'];
  lang: Language;
}

/**
 * Galería por grupos, con visor a pantalla completa.
 *
 * ── Por qué columnas y no rejilla ───────────────────────────────────────────
 * Las fotos vienen de teléfonos: hay verticales de 1200×1600 y apaisadas de
 * 1600×720 mezcladas. Una rejilla de celdas iguales obligaría a recortar, y el
 * recorte automático decapita a la gente — que es justo lo que hay que enseñar
 * en un sitio de tours. `columns-*` deja que cada foto conserve su proporción y
 * empaqueta sola; en móvil es una sola columna, o sea una pila.
 *
 * ── Por qué <img> y no next/image ───────────────────────────────────────────
 * Las imágenes ya vienen optimizadas a WebP y a 1600 px como máximo desde el
 * repositorio. `next/image` volvería a procesarlas en el CDN de imágenes de
 * Netlify, que consume del cupo del plan gratuito sin mejorar un archivo que ya
 * está servido a su tamaño final. Además el proyecto no tiene `next.config.js`,
 * así que esto se mantiene sin configuración y sobrevive a un cambio de host.
 */
export const GallerySection: React.FC<GallerySectionProps> = ({ content, lang }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = React.useCallback(() => setOpenIndex(null), []);
  const go = React.useCallback((delta: number) => {
    setOpenIndex((i) => (i === null ? i : (i + delta + ALL_PHOTOS.length) % ALL_PHOTOS.length));
  }, []);

  // Teclado y bloqueo del scroll de fondo mientras el visor está abierto.
  React.useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, go]);

  // Deslizar con el dedo: en un visor de fotos en teléfono no es un extra.
  const touchStartX = React.useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const indexOf = (photo: GalleryPhoto) => ALL_PHOTOS.indexOf(photo);
  const current = openIndex === null ? null : ALL_PHOTOS[openIndex];

  return (
    <section id="galeria" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
            {content.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            {content.title}
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">{content.subtitle}</p>
        </div>

        <div className="space-y-14">
          {GALLERY_GROUPS.map((group) => {
            const label = content.groups[group.id];

            return (
              <div key={group.id}>
                <div className="mb-6 border-l-2 border-amber-500/60 pl-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-400 tracking-tight">
                    {label.title}
                  </h3>
                  <p className="text-stone-400 text-sm sm:text-base mt-1 max-w-2xl">
                    {label.subtitle}
                  </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                  {group.photos.map((photo) => {
                    const i = indexOf(photo);

                    return (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => setOpenIndex(i)}
                        className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 group"
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt[lang]}
                          width={photo.w}
                          height={photo.h}
                          loading={i < 3 ? 'eager' : 'lazy'}
                          decoding="async"
                          className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {current && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt[lang]}
          className="fixed inset-0 z-[60] bg-stone-950/97 backdrop-blur-sm flex flex-col"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Barra superior: contador y cierre, despejando la muesca del teléfono */}
          <div
            className="flex items-center justify-between gap-4 px-4 py-3"
            style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top, 0px))' }}
          >
            <span className="text-xs font-semibold tracking-widest text-stone-400 tabular-nums">
              {openIndex + 1} {content.viewerCounter} {ALL_PHOTOS.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={content.viewerClose}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-stone-800/90 text-stone-200 text-xl leading-none hover:bg-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              ✕
            </button>
          </div>

          {/* La foto manda: ocupa lo que quede entre las dos barras */}
          <div className="flex-1 min-h-0 flex items-center justify-center px-4">
            <img
              src={current.src}
              alt={current.alt[lang]}
              width={current.w}
              height={current.h}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
            />
          </div>

          {/* Pie: el texto y, debajo, los controles al alcance del pulgar */}
          <div
            className="px-4 py-4 space-y-4"
            style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))' }}
          >
            <p className="text-center text-sm text-stone-300 max-w-2xl mx-auto">
              {current.alt[lang]}
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={content.viewerPrev}
                className="w-14 h-12 flex items-center justify-center rounded-xl bg-stone-800/90 text-stone-100 text-xl hover:bg-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={content.viewerNext}
                className="w-14 h-12 flex items-center justify-center rounded-xl bg-stone-800/90 text-stone-100 text-xl hover:bg-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
