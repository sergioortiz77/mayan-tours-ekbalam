import React from 'react';
import { PageContent, GUIDE_INFO } from '../data/content';

interface HeroProps {
  content: PageContent['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const text = encodeURIComponent('Hola Jesús Alfredo, me gustaría consultar disponibilidad para una visita guiada en Ek Balam.');
  const whatsappUrl = `https://wa.me/${GUIDE_INFO.phone}?text=${text}`;

  return (
    <section className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white pt-16 pb-24 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{content.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-100 leading-tight mb-6">
            {content.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 underline decoration-amber-500/40 decoration-4">
              {content.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-stone-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            {content.subtitle}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#arqueologia"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base shadow-lg shadow-amber-500/20 transition-all hover:scale-105 text-center"
            >
              {content.ctaPrimary}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-900/30 transition-all hover:scale-105 flex items-center justify-center gap-2.5 text-center border border-emerald-500/30"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>{content.ctaSecondary}</span>
            </a>
          </div>

          {/* Quick Value Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-stone-800 text-left">
            <div className="bg-stone-900/60 p-3.5 rounded-xl border border-stone-800/80">
              <div className="text-amber-400 font-bold text-sm mb-1">📜 NOM-08 SECTUR</div>
              <div className="text-xs text-stone-400">{content.features.cert}</div>
            </div>
            <div className="bg-stone-900/60 p-3.5 rounded-xl border border-stone-800/80">
              <div className="text-amber-400 font-bold text-sm mb-1">⭐ 12 Años</div>
              <div className="text-xs text-stone-400">{content.features.exp}</div>
            </div>
            <div className="bg-stone-900/60 p-3.5 rounded-xl border border-stone-800/80">
              <div className="text-emerald-400 font-bold text-sm mb-1">🌿 Guía Nativo</div>
              <div className="text-xs text-stone-400">{content.features.native}</div>
            </div>
            <div className="bg-stone-900/60 p-3.5 rounded-xl border border-stone-800/80">
              <div className="text-emerald-400 font-bold text-sm mb-1">🗣️ 4 Idiomas</div>
              <div className="text-xs text-stone-400">{content.features.langs}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
