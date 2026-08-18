import React from 'react';
import { PageContent } from '../data/content';

interface ComplementaryProps {
  content: PageContent['complementary'];
}

export const ComplementarySection: React.FC<ComplementaryProps> = ({ content }) => {
  return (
    <section className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
            {content.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800">
            <div className="text-3xl mb-3">🏡</div>
            <h3 className="text-lg font-bold text-white mb-2">{content.lodgingTitle}</h3>
            <p className="text-xs text-stone-300 leading-relaxed">{content.lodgingDesc}</p>
          </div>
          <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800">
            <div className="text-3xl mb-3">🧶</div>
            <h3 className="text-lg font-bold text-white mb-2">{content.craftsTitle}</h3>
            <p className="text-xs text-stone-300 leading-relaxed">{content.craftsDesc}</p>
          </div>
          <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="text-lg font-bold text-white mb-2">{content.ceremonyTitle}</h3>
            <p className="text-xs text-stone-300 leading-relaxed">{content.ceremonyDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
