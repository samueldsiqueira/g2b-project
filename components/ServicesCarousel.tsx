'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Service {
  id: number;
  title: string;
  description: string;
  icon?: JSX.Element;
  sectionId: string;
  color?: string;
  image?: string; // Nova propriedade para imagem
  buttonText?: string; // Texto customizável do botão
}

interface ServicesCarouselProps {
  services: Service[];
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="services-swiper pb-12"
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <div 
                onClick={() => handleScroll(service.sectionId)}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 h-[450px] overflow-hidden border-2 border-transparent hover:border-g2b-purple group cursor-pointer"
              >
                {/* Imagem de fundo ou cor sólida */}
                {service.image ? (
                  <div className="absolute inset-0">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay gradient para melhor legibilidade do texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                ) : (
                  <div className={`absolute inset-0 ${service.color || 'bg-g2b-purple'}`} />
                )}

                {/* Conteúdo */}
                <div className="relative h-full flex flex-col justify-between p-8">
                  {/* Ícone (opcional, aparece no topo) */}
                  {service.icon && (
                    <div
                      className={`w-16 h-16 ${service.image ? 'bg-white/20 backdrop-blur-sm' : service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      {service.icon}
                    </div>
                  )}

                  {/* Título e Descrição na parte inferior */}
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold ${service.image ? 'text-white' : 'text-g2b-purple'}`}>
                      {service.title}
                    </h3>
                    <p className={`leading-relaxed ${service.image ? 'text-white/90' : 'text-g2b-gray'}`}>
                      {service.description}
                    </p>
                    
                    {/* Botão Saiba Mais */}
                    <button className={`inline-flex items-center gap-2 font-semibold transition-all group-hover:translate-x-1 ${
                      service.image 
                        ? 'bg-g2b-yellow text-g2b-darkpurple px-6 py-3 rounded-full hover:bg-yellow-500' 
                        : 'text-g2b-purple group-hover:text-g2b-yellow'
                    }`}>
                      {service.buttonText || 'Saiba mais'}
                      <svg
                        className="w-5 h-5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .services-swiper .swiper-button-next,
        .services-swiper .swiper-button-prev {
          color: #6B46C1;
        }

        .services-swiper .swiper-pagination-bullet {
          background: #6B46C1;
        }

        .services-swiper .swiper-pagination-bullet-active {
          background: #F59E0B;
        }
      `}</style>
    </div>
  );
}
