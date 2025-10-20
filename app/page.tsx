'use client';

import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/locales/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-g2b-purple to-g2b-darkpurple text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.home.hero.title} <span className="text-g2b-yellow">{t.home.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              {t.home.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contato@g2b.com.br" 
                className="bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
              >
                {t.home.hero.ctaPrimary}
              </a>
              <Link 
                href="/sobre" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border-2 border-white/30"
              >
                {t.home.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-g2b-purple mb-6">
                {t.home.about.title}
              </h2>
              <div className="space-y-4 text-g2b-gray leading-relaxed">
                <p>{t.home.about.text1}</p>
                <p>{t.home.about.text2}</p>
                <div className="bg-g2b-yellow/10 border-l-4 border-g2b-yellow p-4 rounded">
                  <p className="font-semibold text-g2b-purple">
                    {t.home.about.motto}
                  </p>
                  <p className="text-sm text-g2b-gray mt-1">{t.home.about.mottoSubtitle}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-g2b-purple/5 rounded-2xl p-8 backdrop-blur">
                <Image 
                  src="/images/parceiros_logos.png" 
                  alt={t.home.about.partners}
                  width={527} 
                  height={85}
                  className="w-full h-auto"
                />
                <p className="text-center text-g2b-gray font-semibold mt-4">{t.home.about.partners}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-g2b-purple mb-4">
              {t.home.solutions.title}
            </h2>
            <p className="text-lg text-g2b-gray max-w-2xl mx-auto">
              {t.home.solutions.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Capacitação */}
            <Link href="/capacitacao" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 h-full border-2 border-transparent hover:border-g2b-purple">
                <div className="w-16 h-16 bg-g2b-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-g2b-purple mb-4">{t.home.solutions.training.title}</h3>
                <p className="text-g2b-gray mb-6 leading-relaxed">
                  {t.home.solutions.training.description}
                </p>
                <span className="text-g2b-purple font-semibold group-hover:text-g2b-yellow transition-colors">
                  {t.home.solutions.training.cta}
                </span>
              </div>
            </Link>

            {/* Assessoria */}
            <Link href="/assessoria" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 h-full border-2 border-transparent hover:border-g2b-purple">
                <div className="w-16 h-16 bg-g2b-lightpurple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-g2b-lightpurple mb-4">{t.home.solutions.consulting.title}</h3>
                <p className="text-g2b-gray mb-6 leading-relaxed">
                  {t.home.solutions.consulting.description}
                </p>
                <span className="text-g2b-lightpurple font-semibold group-hover:text-g2b-yellow transition-colors">
                  {t.home.solutions.consulting.cta}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-g2b-purple to-g2b-darkpurple text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.home.cta.title}
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            {t.home.cta.subtitle}
          </p>
          <a 
            href="mailto:contato@g2b.com.br" 
            className="inline-block bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            {t.home.cta.button}
          </a>
        </div>
      </section>
    </Layout>
  );
}
