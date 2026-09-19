import React from 'react';
import { GUIDE_INFO } from '../data/content';

/**
 * Botón flotante de WhatsApp.
 *
 * ── Por qué no aparece desde el principio ───────────────────────────────────
 * Estaba tapando el texto del hero en teléfono: un botón fijo en la esquina se
 * monta sobre lo que haya debajo, y en la primera pantalla eso era el párrafo de
 * presentación. Darle margen al texto no lo arregla —el botón flota sobre TODO lo
 * que pase por esa esquina al desplazarse—, así que lo que cambia es CUÁNDO
 * aparece: se queda oculto mientras se ve el hero, que ya tiene su propio botón
 * de WhatsApp, y entra al pasar de largo. No se pierde ninguna vía de contacto.
 */
export const WhatsAppFloat: React.FC = () => {
  const text = encodeURIComponent('Hola Jesús, me gustaría consultar disponibilidad para reservar un tour en Ek Balam.');
  const whatsappUrl = `https://wa.me/${GUIDE_INFO.phone}?text=${text}`;

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Umbral relativo a la altura de la ventana en vez de a un píxel fijo: así
    // vale igual en un teléfono corto que en un escritorio alto, y no acopla
    // este componente a la altura del hero.
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <aside
      aria-label="WhatsApp Contact"
      aria-hidden={!visible}
      className={`fixed right-4 sm:right-6 z-50 flex items-center gap-3 group transition-opacity duration-300 motion-reduce:transition-none ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="hidden sm:block bg-stone-900/90 text-stone-100 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¿Dudas o Reservaciones? ¡Escríbenos!
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        /* Oculto para el lector de pantalla también lo es para el tabulador: si no,
           se puede enfocar un botón que no se ve. */
        tabIndex={visible ? 0 : -1}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-950/80 transition-transform hover:scale-110 active:scale-95 border-2 border-emerald-400/40"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </aside>
  );
};
