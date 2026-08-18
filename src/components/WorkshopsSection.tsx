import React from 'react';
import { PageContent, GUIDE_INFO } from '../data/content';

interface WorkshopsSectionProps {
  content: PageContent['workshops'];
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ content }) => {
  return (
    <section id="talleres" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
            {content.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            {content.title}
          </h2>
          <p className="text-stone-300 text-base sm:text-lg mb-4">
            {content.subtitle}
          </p>
          <div className="inline-block bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-xl text-xs sm:text-sm text-amber-300 font-medium">
            {content.note}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.items.map((item) => {
            const text = encodeURIComponent(item.whatsappMessage);
            const whatsappUrl = `https://wa.me/${GUIDE_INFO.phone}?text=${text}`;

            return (
              <div
                key={item.id}
                className="bg-stone-950/80 rounded-3xl p-8 border border-stone-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-semibold rounded-lg">
                      ⏱️ {item.duration}
                    </span>
                    <span className="text-base font-extrabold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-lg border border-emerald-800/40">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="bg-stone-900/90 rounded-xl p-3.5 border border-stone-800 text-xs text-amber-200/90 mb-6 flex items-center gap-2">
                    <span>✨</span>
                    <span>{item.highlight}</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-stone-800 hover:bg-emerald-600 text-stone-200 hover:text-white font-semibold text-xs rounded-xl transition-all border border-stone-700 hover:border-emerald-500"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Reservar este taller por WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
