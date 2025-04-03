'use client';

import { Stats } from '@/components/stats/Stats';
import SeñoraHopper from '@/assets/Señora-Hopper.png';
import HeroNosotros from '@/assets/NosotrosHero.svg'
import Image from 'next/image';

export default function Nosotros() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[79vh] flex items-center justify-center">
        {/* Imagen de fondo */}
        <Image 
          src={HeroNosotros} 
          alt="Nosotros Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        
        {/* Capa de oscurecimiento */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Contenido */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-ebgaramond text-[#AC9054] font-bold mb-4">
            ¿La Sazón De Hopper?
          </h1>
          <p className="text-lg md:text-xl">
            Detrás de cada platillo de ‘La Sazón de Hopper’ hay una historia de amor y tradición, heredada de la querida Señora Hopper. <br/>
            Ella era toda corazón, sabor y sonrisas, y creía que la cocina era mucho más que preparar comida; era una forma de abrazar a los suyos. <br/>
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className='ml-6'>
              <h2 className="text-5xl md:text-4xl font-ebgaramond font-bold text-[#AC9054] mb-6">Nuestra Historia</h2>
              <p className="text-black text-base md:text-lg mb-6 leading-relaxed">
              Detrás de cada platillo de ‘La Sazón de Hopper’ hay una historia de amor y tradición, heredada de la querida Señora Hopper.
              </p>

              <p className="text-black text-base md:text-lg mb-6 leading-relaxed">
              Ella era toda corazón, sabor y sonrisas y creía que la cocina era mucho más que preparar comida; era una forma de abrazar a los suyos. Desde pequeña, su hija estuvo a su lado, aprendiendo no solo a cocinar, sino a poner alma en cada receta.
              </p>

              <p className="text-black text-base md:text-lg leading-relaxed">
              Hoy, llevamos ese mismo cariño a tu mesa, haciendo de cada evento un pedacito de nuestro hogar. Ven y siente el calor de una cocina que celebra la vida, el amor y los buenos momentos, justo como lo hacía la Señora Hopper.
              Hopper.
              </p>
            </div>
            <div className="relative mt-8 md:mt-0">
            <Image 
              src={SeñoraHopper}
              alt="Equipo de chefs"
              className="w-full"
              layout="responsive"
              width={1920}
              height={1080}
            />
            </div>
          </div>

          <Stats />
         {/* <Values /> */} 
        </div>
      </section>
    </main>
  );
}