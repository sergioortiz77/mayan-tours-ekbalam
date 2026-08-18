'use client';

import React, { useState } from 'react';
import { Language, CONTENT_BY_LANG } from '../data/content';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutGuide } from '../components/AboutGuide';
import { ToursSection } from '../components/ToursSection';
import { WorkshopsSection } from '../components/WorkshopsSection';
import { TransportSection } from '../components/TransportSection';
import { ComplementarySection } from '../components/ComplementarySection';
import { VisitorGuide } from '../components/VisitorGuide';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { Footer } from '../components/Footer';

export default function HomePage() {
  const [lang, setLang] = useState<Language>('es');
  const t = CONTENT_BY_LANG[lang];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      <Navbar
        currentLang={lang}
        onSelectLang={setLang}
        content={t.nav}
      />
      <main>
        <Hero content={t.hero} />
        <AboutGuide content={t.about} />
        <ToursSection content={t.tours} />
        <WorkshopsSection content={t.workshops} />
        <TransportSection content={t.transport} />
        <ComplementarySection content={t.complementary} />
        <VisitorGuide content={t.visitorGuide} />
        <FAQSection content={t.faq} />
        <ContactSection content={t.contact} />
      </main>
      <Footer content={t.footer} />
      <WhatsAppFloat />
    </div>
  );
}
