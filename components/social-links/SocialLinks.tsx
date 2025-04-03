'use client';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function SocialLinks() {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-[#71542A] mb-6">Síguenos en Redes Sociales</h2>
      <div className="flex flex-col space-x-1">

        <a href="https://api.whatsapp.com/send?phone=+5538190858&text=Hola,%20%C2%A1Buen%20dia!%20%20Necesito%20que%20me%20apoyen%20para%20mi%20Evento." target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex-1 mb-4 w-full">
            <FaWhatsapp className="w-5 h-5 mr-2 text-[#ac8249]" />
            Whatsapp
          </Button>
        </a>

        <a href="https://www.facebook.com/lasazondehopper" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex-1 mb-4 w-full">
            <FaFacebook className="w-5 h-5 mr-2 text-[#ac8249]" />
            Facebook
          </Button>
        </a>

        <a href="https://www.instagram.com/lasazondehopper/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex-1 mb-4 w-full">
            <FaInstagram className="w-5 h-5 mr-2 text-[#ac8249]" />
            Instagram
          </Button>
        </a>

        <a href="https://www.tiktok.com/@lasazondehopper" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex-1 mb-4 w-full">
            <FaTiktok className="w-5 h-5 mr-2 text-[#ac8249]" />
            Tiktok
          </Button>
        </a>

        <a href="https://www.threads.net/@lasazondehopper" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex-1 mb-4 w-full">
            <FaThreads className="w-5 h-5 mr-2 text-[#ac8249]" />
            Threads
          </Button>
        </a>

      </div>
    </Card>
  );
}
