'use client';

import { Card } from '@/components/ui/card';

const images = [
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Paquete De Taquizas"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Barra De Micheladas"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Barra De Maruchan"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Barra De Charcuteria"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Barra De HotCakes"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Bar Cake"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Barra De Paletas"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Barra De Flautas"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Barra De Tostadas"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Barra De Pozole"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Barra De Tacos De Canasta"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Paqueta De Parrillada"
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033",
    alt: "Catering evento",
    category: "Paqueta De Hambuerguesas"
  },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden group">
          <div className="relative aspect-square">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
              <p className="text-white font-ebgaramond text-xl md:text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                {image.category}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}