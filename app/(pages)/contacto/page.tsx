'use client';

import { ContactForm } from '@/components/contact-form/ContactForm';
import { ContactInfo } from '@/components/contact-info/ContactInfo';
import { SocialLinks } from '@/components/social-links/SocialLinks';

export default function Contacto() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center font-ebgaramond text-[#ac8249] mb-12">Contáctanos</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </main>
  );
}