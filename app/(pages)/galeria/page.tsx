'use client';

import { Gallery } from '@/components/gallery/Gallery';

export default function GaleriaPage() {
  return (
    <main className="min-h-screen py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center font-ebgaramond text-[#AC9054] mb-8 md:mb-12">Galería</h1>
        <Gallery />
      </div>
    </main>
  );
}