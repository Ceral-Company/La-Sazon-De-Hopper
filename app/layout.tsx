import './globals.css';
import Icono from '@/assets/favicon.ico'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'La Sazón de Hopper - Catering Premium y Eventos',
  description: 'Servicios de catering de lujo, taquizas premium y eventos exclusivos en México',
  icons: {
    icon: '@/assets/favicon.ico', // Ruta de la imagen en public/
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}