'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  sectionId: string;
  color: string;
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
            >
              <div 
                onClick={() => handleScroll(service.sectionId)}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 h-full border-2 border-transparent hover:border-g2b-purple group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-g2b-purple mb-4">
                  {service.title}
                </h3>
                <p className="text-g2b-gray leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="text-g2b-purple font-semibold group-hover:text-g2b-yellow transition-colors inline-flex items-center">
                  Saiba mais
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                </span>
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
