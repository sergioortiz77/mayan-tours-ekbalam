import React from 'react';
import { PageContent, GUIDE_INFO } from '../data/content';

interface TransportSectionProps {
  content: PageContent['transport'];
}

export const TransportSection: React.FC<TransportSectionProps> = ({ content }) => {
  const text = encodeURIComponent(content.whatsappMessage);
  const whatsappUrl = `https://wa.me/${GUIDE_INFO.phone}?text=${text}`;

  return (
    <section id="transporte" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
            {content.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            {content.title}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            {content.subtitle}
          </p>
        </div>

        {/* Vehicle Highlights Banner */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-8 sm:p-10 border border-stone-700/80 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg border border-emerald-500/30">
                  Unidad Propia
                </span>
                <span className="text-sm text-stone-300 font-semibold">
                  {GUIDE_INFO.vehicle}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {content.vehicleTitle}
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {content.vehicleDescription}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-950/40 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>{content.cta}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.routes.map((r, idx) => (
            <div key={idx} className="bg-stone-900 p-6 rounded-2xl border border-stone-800 hover:border-amber-500/30 transition-all">
              <span className="text-xs font-bold text-amber-400 block mb-1">{r.type}</span>
              <h4 className="text-base font-bold text-white mb-2">{r.destination}</h4>
              <p className="text-xs text-stone-400 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
