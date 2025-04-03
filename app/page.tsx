'use client';
import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChefHat, Users, UtensilsCrossed, GlassWater, Coffee, ArrowRight } from 'lucide-react';
import { LuDessert } from "react-icons/lu";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import HeroSazon from '@/assets/Hero-Sazon.svg'
import LaSazon from '@/assets/La-Sazon.png'

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(interval);
          return value;
        }
        return prev + Math.ceil(value / 100); // Incremento gradual
      });
    }, 100); // Ajusta la velocidad

    return () => clearInterval(interval);
  }, [value]);

  return <motion.span>{count}</motion.span>;
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="relative h-[60vh] md:h-[85vh] flex items-center justify-center">
        <Image 
          src={HeroSazon} 
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="absolute inset-0 w-full h-full"/>
      </motion.section>


      {/* Services Preview */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesPreview.map((service, index) => (
              <Link href={service.link} key={index} className="group">
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110  transition-transform duration-700"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold font-ebgaramond mb-2">{service.title}</h3>
                    <p className="text-gray-200 mb-4 text-sm md:text-base">{service.description}</p>
                    <div className="flex items-center text-xl font-ebgaramond text-[#AC9054] group-hover:text-orange-300">
                      <span>Ver más</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-ebgaramond text-[#AC9054] mb-6">La Sazón de Hopper</h2>
              <p className="text-black text-base md:text-lg mb-8 leading-relaxed">
              Bienvenidos a La Sazón de Hopper, donde cada evento se convierte en una experiencia inolvidable.
              Nos especializamos en transformar momentos especiales en recuerdos memorables, fusionando la pasión por la gastronomía con la atención a los detalles.
              </p>

              <p className="text-black text-base md:text-lg mb-8 leading-relaxed">
              Nuestros más de 5 años de experiencia y más de +840 eventos realizados nos respaldan, con un 98% de clientes satisfechos que avalan nuestro compromiso con la excelencia.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#DCBF6C] mb-2">
                  +<Counter value={840} />
                </div>
                <div className="text-gray-600 text-sm md:text-base">Eventos Realizados</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#DCBF6C] mb-2">
                  <Counter value={98} />%
                </div>
                <div className="text-gray-600 text-sm md:text-base">Clientes Satisfechos</div>
              </div>
            </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
              src={LaSazon}
              alt="La Sazon De Hopper"
              className="w-full"
              layout="responsive"
              width={1920}
              height={1080}
            />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#DCBF6C] text-black p-4 md:p-6 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold mb-2">5 años</div>
                <div className="text-sm md:text-base">de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-ebgaramond text-[#AC9054] font-bold mb-4">Nuestros Servicios</h2>
      <p className="text-lg md:text-xl mx-8 text-black">
      Soluciones a medida para cualquier tipo de evento. Nos encargamos de cada detalle para que tu celebración sea única, especial y totalmente inolvidable.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {services.map((service, index) => (
        <Card 
          key={index} 
          className="group relative overflow-hidden border-2 border-[#DCBF6C] shadow-lg rounded-lg"
        >
          <div className="p-6 md:p-8 pb-16 mb-8">
            <div className="text-[#AC9054] mb-6">{service.icon}</div>
            <h3 className="text-2xl md:text-3xl font-ebgaramond font-bold mb-4">{service.title}</h3>
            <p className="text-black mb-6 text-sm md:text-base">{service.description}</p>
          </div>
          <div className="absolute bottom-4 left-4">
            <Link href="/servicios">
              <Button variant="outline" className="group-hover:bg-[#DCBF6C] group-hover:text-white border-2 border-[#DCBF6C] transition-colors">
                Más información
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* OBJETIVOS */}
      <section className="py-12 md:py-20 px-4 relative bg-gray-50 bg-fixed bg-cover bg-center" >
        <div className="absolute inset-0" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-ebgaramond text-[#DCBF6C]">OBJETIVOS</h2>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 p-4">
                  <Card className="p-6 md:p-8 bg-white/40 backdrop-blur-md text-black border-black h-full">
                    <div className="flex flex-col h-full">
                    <p className="font-bold font-ebgaramond text-3xl text-[#ac8249] mb-2">{testimonial.name}</p>
                    <p className="flex-grow italic text-sm md:text-base">"{testimonial.text}"</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </main>
  );
}

const servicesPreview = [
  {
    title: "Eventos",
    description: "En La Sazón de Hopper, nos especializamos en crear experiencias gastronómicas únicas y personalizadas para eventos.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    link: "/servicios"
  },
  {
    title: "Barras",
    description: "En La Sazón de Hopper, nuestras barras ofrecen la auténtica cocina mexicana en su máxima expresión.",
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    link: "/servicios"
  },
  {
    title: "Servicios Extra",
    description: "En La Sazón de Hopper, nos esforzamos por ofrecer servicios integrales para eventos y celebraciones. ",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    link: "/servicios"
  },
];

const services = [
  {
    icon: <ChefHat size={48} />,
    title: "Catering",
    description: "Creamos experiencias a la medida, cuidando cada detalle para que tu evento sea todo un éxito. Calidad, presentación y un servicio impecable."
  },
  {
    icon: <UtensilsCrossed size={48} />,
    title: "Taquizas",
    description: "Una opción dinámica y auténtica para cualquier ocasión. Perfecto para quienes buscan un ambiente relajado, sin perder la esencia de un gran evento."
  },
  {
    icon: <GlassWater size={48} />,
    title: "Barras",
    description: "Un toque de estilo y sofisticación para tu celebración. Opciones personalizadas que se adaptan a la temática y necesidades de tu evento."
  },
  {
    icon: <Coffee size={48} />,
    title: "Coffee Break",
    description: "El respiro perfecto en reuniones y conferencias. Un servicio diseñado para mantener la energía y la productividad de todos los asistentes."
  },
  {
    icon: <LuDessert size={48} />,
    title: "Postres",
    description: "Soluciones prácticas y elegantes para complementar cualquier tipo de evento. Ideal para crear momentos especiales con detalles únicos."
  },
  {
    icon: <Users size={48} />,
    title: "Eventos especiales",
    description: "Para eventos especiales, creamos experiencias únicas con detalles que marcan la diferencia y momentos que perduran en la memoria.."
  },
];

const testimonials = [
  {
    text: "Nuestra visión es llevar el cariño y la calidez de nuestra cocina a tu mesa, haciendo de cada evento un pedacito de nuestro hogar. Queremos que sientas el calor de una cocina que celebra la vida, el amor y los buenos momentos, tal como lo hacía la Señora Hopper.",
    name: "Visión",
  },
  {
    text: "En La Sazón de Hopper, nuestra misión es continuar el legado de la Señora Hopper, llevando su cariño y pasión por la cocina a cada plato que servimos. Nos esforzamos por ofrecer a nuestros clientes una experiencia gastronómica única, donde cada bocado cuente una historia y cada momento sea inolvidable.",
    name: "Misión",
  },
  {
    text: "Amor: Creemos en el poder del amor como ingrediente principal en cada platillo que preparamos. Tradición: Valoramos y respetamos las tradiciones culinarias que nos han sido heredadas. Calidez: Queremos que cada cliente se sienta como en casa en nuestro restaurante, recibiendo un trato cálido y amable.",
    name: "Valores",
  }
];