import React from 'react';
import { PageContent } from '../data/content';

interface FooterProps {
  content: PageContent['footer'];
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-stone-100 font-bold text-base mb-1">{content.brand}</div>
            <p className="text-stone-400">{content.tagline}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-stone-300 font-medium mb-1">{content.communityMessage}</p>
            <p className="text-stone-500">
              © {new Date().getFullYear()} {content.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
