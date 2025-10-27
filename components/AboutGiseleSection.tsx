'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutGiseleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-gisele" ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[700px]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/gisele/Gisele Blak Bernat (3).JPG"
                alt="Gisele Blak Bernat - CEO da G2B"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center rounded-lg shadow-xl"
              />
            </div>
          </motion.div>

          {/* Content Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-g2b-purple">
              Quem é Gisele Blak Bernat
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Engenheira civil, doutora, professora e consultora executiva em gestão de projetos, 
                <strong> Gisele Blak Bernat</strong> tem mais de 25 anos de experiência ajudando 
                organizações e pessoas a transformarem ideias em projetos com resultados reais.
              </p>

              <p>
                Como <strong>CEO da G2B</strong>, Gisele desenvolveu uma metodologia única que combina 
                treinamento executivo hands-on com consultoria estratégica aplicada. Sua abordagem foca 
                em resultados práticos e mensuráveis, adaptados à realidade de cada empresa.
              </p>

              <p>
                Com passagem por empresas como <strong>Odebrecht, Bechtel, Vivo</strong> e 
                <strong> Petrobras</strong>, além de atuar como <strong>professora convidada da FGV e 
                da UFRJ</strong>, Gisele acumula conhecimento técnico de ponta com uma visão estratégica 
                de negócios.
              </p>

              <p>
                <strong>Certificada PMP e DASSM</strong>, ela também foi <strong>premiada pelo PMI Rio 
                Awards</strong> por suas contribuições ao campo de gestão de projetos. Sua missão é 
                simplificar a complexidade dos projetos e tornar as melhores práticas acessíveis e 
                aplicáveis.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="#quem-e-gisele"
                className="inline-block bg-g2b-purple text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Conheça nossa CEO
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
