'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutGiseleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="quem-e-gisele" ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-g2b-purple/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-g2b-yellow/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="relative h-[500px] lg:h-[700px]"
          >
            <motion.div 
              className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              animate={isInView ? { y: [0, -10, 0] } : {}}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  duration: 0.3
                }
              }}
            >
              <Image
                src="/gisele/png-sem-fundo/gisele-sem-fundo-1.png"
                alt="Gisele Blak Bernat - CEO da G2B"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center grayscale"
              />
            </motion.div>
          </motion.div>

          {/* Content Right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold"
            >
              <span className="block text-2xl lg:text-3xl xl:text-4xl text-gray-600 font-normal mb-2">Quem é</span>
              <span className="block text-g2b-red">Gisele</span>
              <span className="block text-g2b-red">Blak Bernat</span>
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              className="prose prose-lg max-w-none text-gray-700 space-y-4"
            >
              <motion.p variants={itemVariants}>
                Engenheira civil, doutora, professora e consultora executiva em gestão de projetos, 
                <strong> Gisele Blak Bernat</strong> tem mais de 25 anos de experiência ajudando 
                organizações e pessoas a transformarem ideias em projetos com resultados reais.
              </motion.p>

              <motion.p variants={itemVariants}>
                Como <strong>CEO da G2B</strong>, Gisele desenvolveu uma metodologia única que combina 
                treinamento executivo hands-on com consultoria estratégica aplicada. Sua abordagem foca 
                em resultados práticos e mensuráveis, adaptados à realidade de cada empresa.
              </motion.p>

              <motion.p variants={itemVariants}>
                Com passagem por empresas como <strong>Odebrecht, Bechtel, Vivo</strong> e 
                <strong> Petrobras</strong>, além de atuar como <strong>professora convidada da FGV e 
                da UFRJ</strong>, Gisele acumula conhecimento técnico de ponta com uma visão estratégica 
                de negócios.
              </motion.p>

              <motion.p variants={itemVariants}>
                <strong>Certificada PMP e DASSM</strong>, ela também foi <strong>premiada pelo PMI Rio 
                Awards</strong> por suas contribuições ao campo de gestão de projetos. Sua missão é 
                simplificar a complexidade dos projetos e tornar as melhores práticas acessíveis e 
                aplicáveis.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#quem-e-gisele"
                  className="inline-block bg-g2b-purple text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Conheça nossa CEO
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
