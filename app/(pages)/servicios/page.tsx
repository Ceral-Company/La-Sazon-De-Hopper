'use client';

import { ServiceCard } from '@/components/service-card/ServiceCard';

const services = [
  {
    title: "Catering",
    description: "Servicio integral para eventos de cualquier escala. Nos encargamos de la logística, presentación y atención, asegurando una experiencia fluida y sin preocupaciones.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    features: ["Menús personalizados",
    ],
    quoteLink: "https://www.youtube.com/watch?v=f0UiOZK_amY"
  },
  {
    title: "Taquizas",
    description: "Organización completa de taquizas con atención personalizada, montaje profesional y servicio eficiente para garantizar la comodidad de tus invitados.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    features: ["Menús personalizados"],
    quoteLink: "https://www.youtube.com/watch?v=W_Fpw_hbAPg"
  },
  {
    title: "Barras",
    description: "Montaje y operación de barras temáticas con personal capacitado, ideal para dar un toque dinámico y organizado a tu evento.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    features: ["Menús personalizados"],
    quoteLink: "https://example.com/barras"
  },
  {
    title: "Coffee Break",
    description: "Coordinación de pausas ejecutivas con atención puntual, discreta y profesional, perfecta para reuniones corporativas y capacitaciones.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    features: ["Menús personalizados"],
    quoteLink: "https://example.com/coffee-break"
  },
  {
    title: "Postres",
    description: "Servicio de exhibición y atención para estaciones de postres, cuidando cada detalle de presentación y atención al cliente.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    features: ["Menús personalizados"],
    quoteLink: "https://example.com/postres"
  },
  {
    title: "Eventos Especiales",
    description: "Diseño, coordinación y ejecución de eventos únicos. Nos adaptamos a tus necesidades para que cada detalle esté perfectamente cuidado.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    features: ["Menús personalizados"],
    quoteLink: "https://example.com/eventos-especiales"
  }
];

export default function Servicios() {
  return (
    <main className="min-h-screen py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center font-ebgaramond text-[#AC9054] mb-8 md:mb-12">Nuestros Servicios</h1>
        
        <div className="space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </main>
  );
}
