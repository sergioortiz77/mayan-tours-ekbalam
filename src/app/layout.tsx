import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mayan Tours Ek Balam | Guía Nativo y Experiencias Mayas',
  description: 'Guía oficial certificado SECTUR NOM-08 Jesús Alfredo Chan Chan. Tours en Ek Balam, talleres tradicionales de cacao y bordado, ceremonias mayas y traslados.',
  keywords: ['Ek Balam', 'Guía de turistas Ek Balam', 'Yucatán', 'Mayan Tours Ek Balam', 'Jesús Alfredo Chan', 'Tours arqueológicos', 'Talleres comunitarios maya'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-stone-950 text-stone-100 antialiased">
        {children}
      </body>
    </html>
  );
}
