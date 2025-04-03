'use client';
import { useState } from 'react';
import Link from 'next/link';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from '@/components/ui/sheet';
import Image from 'next/image';
import Logo from '@/assets/Colibri.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/galeria', label: 'Galería' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className="sticky top-0 w-full z-50 shadow-md bg-black font-ebgaramond">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="relative inline-flex items-center">
              <h1 className="font-ebgaramond font-semibold text-2xl text-[#AC9054] relative">
                La Sazón de Hopper
              </h1>
              <Image 
                src={Logo} 
                alt="Colibri Logo" 
                className="w-9 h-9 mb-4"

              />
            </div>
           

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} className="font-ebgaramond font-semibold text-lg text-[#DCBF6C] hover:text-[#AC9054]">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-6 w-6 text-[#DCBF6C]" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black text-white font-ebgaramond">
                  <SheetHeader>
                    <h1 className="text-white">Menu</h1>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-6">
                    {menuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-2 py-3 text-lg text-[#DCBF6C] hover:text-[#AC9054]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
