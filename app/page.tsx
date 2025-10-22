'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../locales/LanguageContext';
import ModernHeader from '../components/ModernHeader';
import ServicesCarousel from '../components/ServicesCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function ModernHome() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const services = [
    {
      id: 1,
      title: 'Capacitação',
      description: 'Cursos e treinamentos especializados para sua equipe crescer e se desenvolver.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: '/capacitacao',
      color: 'bg-g2b-purple',
    },
    {
      id: 2,
      title: 'Assessoria',
      description: 'Consultoria especializada para governança corporativa e compliance.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      link: '/assessoria',
      color: 'bg-g2b-lightpurple',
    },
    {
      id: 3,
      title: 'Biblioteca',
      description: 'Acesso a recursos e materiais exclusivos para seu aprendizado contínuo.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      link: '/biblioteca',
      color: 'bg-g2b-yellow',
    },
    {
      id: 4,
      title: 'Soluções',
      description: 'Soluções personalizadas para as necessidades específicas da sua organização.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: '/solucoes',
      color: 'bg-gradient-to-r from-g2b-purple to-g2b-lightpurple',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Diretora de Compliance',
      company: 'Empresa XYZ',
      text: 'A G2B transformou nossa abordagem de governança corporativa. Os treinamentos são excepcionais e a assessoria é de altíssimo nível.',
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'CEO',
      company: 'Tech Solutions',
      text: 'Parceria estratégica que nos ajudou a implementar as melhores práticas de compliance e governança. Recomendo fortemente!',
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Gerente de RH',
      company: 'Indústria ABC',
      text: 'Os cursos de capacitação elevaram o nível técnico de nossa equipe. Investimento com retorno garantido.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Clientes Atendidos' },
    { number: '1000+', label: 'Treinamentos Realizados' },
    { number: '98%', label: 'Satisfação' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <WhatsAppFloat />

      {/* Hero Section com Parallax */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-g2b-darkpurple via-g2b-purple to-g2b-lightpurple" />
        
        {/* Overlay com pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            {t.home.hero.title}{' '}
            <span className="text-g2b-yellow">{t.home.hero.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {t.home.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:contato@g2b.com.br"
              className="bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl"
            >
              {t.home.hero.ctaPrimary}
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all border-2 border-white/30"
            >
              {t.home.hero.ctaSecondary}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-g2b-purple mb-2">
                  {stat.number}
                </div>
                <div className="text-g2b-gray font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-g2b-purple mb-6">
                {t.home.about.title}
              </h2>
              <div className="space-y-4 text-lg text-g2b-gray leading-relaxed">
                <p>{t.home.about.text1}</p>
                <p>{t.home.about.text2}</p>
                <div className="bg-gradient-to-r from-g2b-yellow/20 to-g2b-purple/10 border-l-4 border-g2b-yellow p-6 rounded-lg mt-6">
                  <p className="font-bold text-g2b-purple text-xl mb-2">
                    {t.home.about.motto}
                  </p>
                  <p className="text-g2b-gray">{t.home.about.mottoSubtitle}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/images/parceiros_logos.png"
                  alt={t.home.about.partners}
                  width={527}
                  height={85}
                  className="w-full h-auto"
                />
                <p className="text-center text-g2b-purple font-bold mt-6 text-lg">
                  {t.home.about.partners}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions/Services Section with Carousel */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-g2b-purple mb-6">
              {t.home.solutions.title}
            </h2>
            <p className="text-xl text-g2b-gray max-w-3xl mx-auto">
              {t.home.solutions.subtitle}
            </p>
          </motion.div>

          <ServicesCarousel services={services} />
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-gradient-to-br from-g2b-purple to-g2b-darkpurple text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Capacitação de Excelência
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Desenvolvemos programas de treinamento personalizados para elevar o conhecimento e as competências da sua equipe.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-g2b-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Cursos presenciais e online</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-g2b-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Instrutores especializados</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-g2b-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Certificação reconhecida</span>
                </li>
              </ul>
              <Link
                href="/capacitacao"
                className="inline-block bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                Conheça nossos cursos
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {['Governança', 'Compliance', 'Auditoria', 'Gestão de Riscos'].map((topic, index) => (
                    <div key={index} className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                      <div className="text-3xl font-bold text-g2b-yellow mb-2">{index + 1}</div>
                      <div className="font-semibold">{topic}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-g2b-lightpurple to-g2b-purple rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Nossos Serviços de Assessoria</h3>
                <div className="space-y-4">
                  {[
                    'Implementação de Governança Corporativa',
                    'Programas de Compliance',
                    'Gestão de Riscos',
                    'Auditoria Interna',
                    'Due Diligence',
                    'Consultoria Estratégica',
                  ].map((service, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
                      <svg className="w-5 h-5 text-g2b-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-g2b-purple mb-6">
                Assessoria Especializada
              </h2>
              <p className="text-xl text-g2b-gray mb-8 leading-relaxed">
                Nossa equipe de especialistas oferece consultoria de alto nível para transformar a governança e compliance da sua organização.
              </p>
              <p className="text-lg text-g2b-gray mb-8 leading-relaxed">
                Trabalhamos lado a lado com você para desenvolver e implementar soluções customizadas que atendam às necessidades específicas do seu negócio.
              </p>
              <Link
                href="/assessoria"
                className="inline-block bg-g2b-lightpurple hover:bg-g2b-purple text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                Solicite uma consultoria
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-g2b-purple mb-6">
              O que dizem nossos clientes
            </h2>
            <p className="text-xl text-g2b-gray max-w-3xl mx-auto">
              Veja como ajudamos empresas a alcançar excelência em governança e compliance
            </p>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-g2b-darkpurple via-g2b-purple to-g2b-lightpurple text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.home.cta.title}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
              {t.home.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:contato@g2b.com.br"
                className="bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl"
              >
                {t.home.cta.button}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all border-2 border-white/30 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
