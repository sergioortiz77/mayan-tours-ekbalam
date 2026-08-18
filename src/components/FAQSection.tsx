import React from 'react';
import { PageContent } from '../data/content';

interface FAQProps {
  content: PageContent['faq'];
}

export const FAQSection: React.FC<FAQProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
            {content.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {content.title}
          </h2>
        </div>

        <div className="space-y-4">
          {content.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-stone-100 hover:text-amber-400 text-base sm:text-lg transition-colors"
                >
                  <span>{item.question}</span>
                  <span className="ml-4 text-xl text-stone-400">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-stone-300 text-sm leading-relaxed border-t border-stone-800/80 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
