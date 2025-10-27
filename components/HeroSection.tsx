'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-g2b-purple relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-8 z-10">
        <Image 
          src="/images/logo_g2b.png" 
          alt="G2B Logo" 
          width={120} 
          height={120}
          className="drop-shadow-lg"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-24 lg:py-0">
          {/* Content Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8 lg:pl-32"
          >
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Oficinas e Soluções que transformam projetos em resultados reais. 
              <span className="block mt-4">
                Treinamentos mão na massa + consultoria aplicada à realidade da sua empresa.
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#agendar"
                className="inline-block bg-g2b-yellow text-g2b-purple px-8 py-4 rounded-md font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300 text-center"
              >
                Agendar diagnóstico gratuito
              </Link>
              <Link
                href="#oficinas"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-g2b-purple transition-colors duration-300 text-center"
              >
                Conheça as Oficinas G2B
              </Link>
            </div>

            <p className="text-sm lg:text-base text-gray-300 mt-6">
              Projetos, Riscos, Suprimentos, Sustentabilidade e IA — tudo em um método que une estratégia, prática e resultado.
            </p>
          </motion.div>

          {/* Image Right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/gisele/Gisele Blak Bernat (10).JPG"
                alt="Gisele Blak Bernat"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center rounded-lg shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
