import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import HeroSazon from '@/assets/Hero-Sazon.svg'
import Image from 'next/image';

export function ContactForm() {
  return (
    <Card className="p-8">
      <div className="flex flex-col items-center justify-center p-6 space-y-4">

        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
          <Button variant="outline" className="w-full">
            WhatsApp
          </Button>
        </a>

        <a href="https://maps.google.com/?q=Tu+Ubicacion" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
          <Button variant="outline" className="w-full">
            Google Maps
          </Button>
        </a>

        <a href="https://tutarjetadigital.com" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
          <Button variant="outline" className="w-full">
            Tarjeta Digital
          </Button>
        </a>

        {/* Logo debajo */}
        <div className="mt-8">
          <Image 
            src={HeroSazon} 
            alt="Logo de la empresa" 
            className="w-full h-full"
          />
        </div>

        </div>
    </Card>
  );
}