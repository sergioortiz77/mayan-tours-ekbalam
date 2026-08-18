import React from 'react';
import { PageContent, GUIDE_INFO } from '../data/content';

interface ContactSectionProps {
  content: PageContent['contact'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  const text = encodeURIComponent('Hola Jesús Alfredo, quisiera hacer una consulta y reservar para mi viaje a Ek Balam.');
  const whatsappUrl = `https://wa.me/${GUIDE_INFO.phone}?text=${text}`;

  return (
    <section id="contacto" className="py-20 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-stone-900 via-stone-800 to-stone-900 rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              {content.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              {content.title}
            </h2>
            <p className="text-stone-300 text-base sm:text-lg mb-8">
              {content.subtitle}
            </p>

            {/* Guide Info Box */}
            <div className="bg-stone-950/80 rounded-2xl p-6 border border-stone-800 mb-8 max-w-xl mx-auto text-left">
              <div className="font-bold text-lg text-white mb-1">{content.guideName}</div>
              <div className="text-xs text-amber-400 font-semibold mb-3">{content.guideRole}</div>
              
              <div className="space-y-2 text-xs sm:text-sm text-stone-300 pt-3 border-t border-stone-800">
                <div className="flex items-center gap-2">
                  <span className="text-stone-400">📍</span>
                  <span>{content.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">📱</span>
                  <span><strong>{content.whatsappLabel}:</strong> {content.phoneFormatted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✉️</span>
                  <span><strong>{content.emailLabel}:</strong> {content.email}</span>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base rounded-2xl shadow-xl shadow-emerald-950/50 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>{content.directChat}</span>
              </a>
              <a
                href={`mailto:${GUIDE_INFO.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm rounded-2xl border border-stone-600 transition-all"
              >
                <span>{content.email}</span>
              </a>
            </div>

            <p className="text-xs text-stone-400 mt-6">
              🔒 {content.speiNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
