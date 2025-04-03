'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  quoteLink: string;
}

export function ServiceCard({ title, description, image, features, quoteLink }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden border-4 border-[#DCBF6C]">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div 
          className="h-[250px] md:h-[400px]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold font-ebgaramond text-[#AC9054]  mb-4">{title}</h2>
          <p className="text-black mb-6 text-sm md:text-base">{description}</p>
          <ul className="mb-6 space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center text-sm md:text-base">
                <span className="text-[#DCBF6C] mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
          <a href={quoteLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#AC9054] text-black hover:bg-[#DCBF6C] hover:text-white w-full md:w-auto">
              Solicitar cotización
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}
