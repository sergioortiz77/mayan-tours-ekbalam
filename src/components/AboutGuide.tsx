import React from 'react';
import { PageContent, GUIDE_INFO } from '../data/content';

interface AboutGuideProps {
  content: PageContent['about'];
}

export const AboutGuide: React.FC<AboutGuideProps> = ({ content }) => {
  return (
    <section id="sobre-el-guia" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-stone-800 to-stone-950 p-6 sm:p-8 border border-stone-700/80 shadow-2xl overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-600 via-emerald-600 to-amber-400 flex items-center justify-center text-3xl font-extrabold text-white shadow-inner">
                  JC
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{GUIDE_INFO.name}</h3>
                  <p className="text-xs font-semibold text-amber-400">{GUIDE_INFO.brand}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{GUIDE_INFO.location}</p>
                </div>
              </div>

              {/* Official Credential Tag */}
              <div className="bg-stone-800/80 rounded-2xl p-4 border border-stone-700 mb-6">
                <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                  <span>Certificación Federal Oficial</span>
                  <span className="text-emerald-400 font-semibold">Vigente</span>
                </div>
                <div className="text-sm font-bold text-stone-100 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full" />
                  Norma Oficial Mexicana SECTUR NOM-08
                </div>
                <div className="text-xs text-stone-400 mt-2">
                  Acreditación de Guía General de Turistas para Zonas Arqueológicas y Patrimonio Cultural.
                </div>
              </div>

              {/* Languages List */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider">Idiomas de atención:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-stone-800 text-amber-300 text-xs rounded-lg border border-stone-700 font-medium">Español (Nativo)</span>
                  <span className="px-2.5 py-1 bg-stone-800 text-amber-300 text-xs rounded-lg border border-stone-700 font-medium">Maya Yucateco (Nativo)</span>
                  <span className="px-2.5 py-1 bg-stone-800 text-emerald-300 text-xs rounded-lg border border-stone-700 font-medium">English (Fluent)</span>
                  <span className="px-2.5 py-1 bg-stone-800 text-emerald-300 text-xs rounded-lg border border-stone-700 font-medium">Français (Courant)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative and Stats */}
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              {content.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              {content.title}
            </h2>
            <p className="text-amber-400/90 font-medium text-lg mb-6">
              {content.subtitle}
            </p>

            <div className="space-y-4 text-stone-300 text-base leading-relaxed mb-8">
              <p>{content.bioParagraph1}</p>
              <p>{content.bioParagraph2}</p>
            </div>

            {/* Community Quote */}
            <blockquote className="border-l-4 border-amber-500 pl-4 py-2 my-6 bg-stone-800/40 rounded-r-xl italic text-stone-200 text-sm">
              &ldquo;{content.quote}&rdquo;
            </blockquote>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800">
              <div className="p-3 bg-stone-950/50 rounded-xl border border-stone-800 text-center">
                <div className="text-2xl font-black text-amber-400">{content.stats.experience}</div>
                <div className="text-xs text-stone-400 mt-1">{content.stats.experienceLabel}</div>
              </div>
              <div className="p-3 bg-stone-950/50 rounded-xl border border-stone-800 text-center">
                <div className="text-2xl font-black text-emerald-400">{content.stats.certification}</div>
                <div className="text-xs text-stone-400 mt-1">{content.stats.certificationLabel}</div>
              </div>
              <div className="p-3 bg-stone-950/50 rounded-xl border border-stone-800 text-center">
                <div className="text-2xl font-black text-amber-400">{content.stats.languages}</div>
                <div className="text-xs text-stone-400 mt-1">{content.stats.languagesLabel}</div>
              </div>
              <div className="p-3 bg-stone-950/50 rounded-xl border border-stone-800 text-center">
                <div className="text-2xl font-black text-emerald-400">{content.stats.community}</div>
                <div className="text-xs text-stone-400 mt-1">{content.stats.communityLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
