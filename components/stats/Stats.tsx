'use client';

import { Award, Users, Clock, ChefHat } from 'lucide-react';
import { Card } from '@/components/ui/card';

const stats = [
  {
    icon: <Award size={32} />,
    value: "+840",
    label: "Eventos Realizados"
  },
  {
    icon: <Users size={32} />,
    value: "+10,000",
    label: "Invitados Atendidos"
  },
  {
    icon: <Clock size={32} />,
    value: "5",
    label: "Años de Experiencia"
  },
  {
    icon: <ChefHat size={32} />,
    value: "5",
    label: "Chefs Expertos"
  }
];

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 text-center border-2 border-[#DCBF6C]">
          <div className="text-[#AC9054] mb-4">{stat.icon}</div>
          <div className="text-2xl md:text-3xl text-[#DCBF6C] font-bold mb-2">{stat.value}</div>
          <div className="text-black text-lg md:text-xl font-ebgaramond">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
}