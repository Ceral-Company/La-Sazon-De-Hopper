'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Upper Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold font-ebgaramond text-[#DCBF6C] mb-6">La Sazón de Hopper</h3>
            <p className="text-gray-400">
              Creando experiencias gastronómicas memorables desde 2020. Calidad, innovación y servicio excepcional.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#ac8249] mb-6">Servicios</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/servicios" className="hover:text-white">Catering</Link></li>
              <li><Link href="/servicios" className="hover:text-white">Taquizas</Link></li>
              <li><Link href="/servicios" className="hover:text-white">Barras</Link></li>
              <li><Link href="/servicios" className="hover:text-white">Coffee Break</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#ac8249] mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
              <li><Link href="/galeria" className="hover:text-white">Galería</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>
          <div>
  <h4 className="text-lg font-semibold text-[#ac8249] mb-6">Contacto</h4>
  <div className="space-y-4 text-gray-400">
    
    {/* Teléfono */}
    <p className="flex items-center">
      <Phone className="w-5 h-5 mr-3" />
      +52 55 3819 0858
    </p>

    {/* Facebook */}
    <p className="flex items-center">
      <a 
        href="https://www.facebook.com/lasazondehopper"
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center hover:text-[#4267B2]"
      >
        <FaFacebook className="w-5 h-5 mr-3" />
        Facebook
      </a>
    </p>

    {/* Instagram */}
    <p className="flex items-center">
      <a 
        href="https://www.instagram.com/lasazondehopper/"
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center hover:text-[#C13584]"
      >
        <FaInstagram className="w-5 h-5 mr-3" />
        Instagram
      </a>
    </p>

    {/* WhatsApp */}
    <p className="flex items-center">
      <a 
        href="https://api.whatsapp.com/send?phone=+5538190858&text=Hola,%20%C2%A1Buen%20dia!%20%20Necesito%20que%20me%20apoyen%20para%20mi%20Evento" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center hover:text-[#25D366]"
      >
        <FaWhatsapp className="w-5 h-5 mr-3" />
        WhatsApp
      </a>
    </p>
  </div>
</div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Copyright  La Sazón de Hopper. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}