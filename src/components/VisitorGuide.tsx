import React from 'react';
import { PageContent } from '../data/content';

interface VisitorGuideProps {
  content: PageContent['visitorGuide'];
}

export const VisitorGuide: React.FC<VisitorGuideProps> = ({ content }) => {
  return (
    <section id="guia-visitante" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Practical recommendations */}
          <div className="bg-stone-900 p-8 rounded-3xl border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg mb-6">
              🎒
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {content.recommendationsTitle}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
              {content.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold mt-0.5">✓</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* INAH / CULTUR Entry Fees */}
          <div className="bg-stone-900 p-8 rounded-3xl border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-6">
              🎟️
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {content.feesTitle}
            </h3>
            <p className="text-xs text-stone-400 mb-4">{content.feesInfo.title}</p>
            <div className="space-y-3 mb-6">
              <div className="p-3.5 bg-stone-950 rounded-xl border border-stone-800">
                <span className="text-xs text-stone-400 block">Extranjeros</span>
                <span className="text-base font-bold text-amber-400">{content.feesInfo.foreigner}</span>
              </div>
              <div className="p-3.5 bg-stone-950 rounded-xl border border-stone-800">
                <span className="text-xs text-stone-400 block">Mexicanos</span>
                <span className="text-base font-bold text-emerald-400">{content.feesInfo.national}</span>
              </div>
            </div>
            <p className="text-xs text-stone-400 italic bg-stone-800/40 p-3 rounded-xl">
              {content.feesInfo.note}
            </p>
          </div>

          {/* Payment & Cancellation Policies */}
          <div className="bg-stone-900 p-8 rounded-3xl border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg mb-6">
              💳
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {content.policiesTitle}
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-stone-300">
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
                <div className="font-bold text-stone-100 mb-1">Transferencia SPEI</div>
                <p className="text-xs text-stone-400">{content.paymentMethods}</p>
              </div>
              <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
                <div className="font-bold text-stone-100 mb-1">Anticipo y Liquidación</div>
                <p className="text-xs text-stone-400">{content.cancellationPolicy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
