'use client';

import { Card } from '@/components/ui/card';

const values = [
  {
    title: "Excelencia",
    description: "Nos esforzamos por superar las expectativas en cada detalle, desde la selección de ingredientes hasta la presentación final."
  },
  {
    title: "Innovación",
    description: "Combinamos técnicas tradicionales con tendencias culinarias modernas para crear experiencias únicas."
  },
  {
    title: "Compromiso",
    description: "Trabajamos incansablemente para hacer de cada evento un momento inolvidable para nuestros clientes."
  }
];

export function Values() {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Los principios que guían nuestro trabajo y nos permiten ofrecer experiencias excepcionales
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <Card key={index} className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </Card>
        ))}
      </div>
    </>
  );
}