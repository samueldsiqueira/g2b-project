'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
  link?: string;
}

interface CertificationsSectionProps {
  partners?: Partner[];
}

export default function CertificationsSection({ partners }: CertificationsSectionProps) {
  // Dados de exemplo - podem ser substituídos quando tiver os logos reais
  const defaultPartners: Partner[] = [
    { name: 'PMI', logo: '/images/partners/pmi.png' },
    { name: 'ISO', logo: '/images/partners/iso.png' },
    { name: 'LGPD', logo: '/images/partners/lgpd.png' },
    { name: 'Partner 4', logo: '/images/partners/partner4.png' },
  ];

  const displayPartners = partners || defaultPartners;

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-g2b-purple mb-3">
            Certificações e Parcerias
          </h3>
          <p className="text-g2b-gray">
            Reconhecimento e credibilidade no mercado
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {displayPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-32 h-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                {/* Placeholder - quando tiver logos reais, usar Image do Next */}
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center border-2 border-gray-300">
                  <span className="text-gray-400 font-semibold text-sm text-center px-2">
                    {partner.name}
                  </span>
                </div>
                {/* Descomente quando tiver logos reais:
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
                */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: '🏆', text: '15+ Anos de Experiência' },
            { icon: '✅', text: '100% Satisfação Garantida' },
            { icon: '🔒', text: 'Dados Seguros e Confidenciais' },
            { icon: '⚡', text: 'Resultados Comprovados' },
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 border border-gray-200"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-semibold text-g2b-gray text-sm">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
