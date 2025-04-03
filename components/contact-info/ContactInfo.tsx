'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function ContactInfo() {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold  text-[#71542A] mb-6">Información de Contacto</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="w-5 h-5 text-[#ac8249] mr-3" />
          <p> +52 55 3819 0858 </p>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 text-[#ac8249] mr-3" />
          <p>sazonhopper@gmail.com</p>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-[#ac8249] mr-3" />
          <p>Ciudad de México, México</p>
        </div>
      </div>
    </Card>
  );
}