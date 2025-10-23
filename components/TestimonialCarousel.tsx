'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface TestimonialCarouselProps {
  testimonials: {
    id: number;
    name: string;
    role: string;
    company: string;
    text: string;
    image?: string;
  }[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                {testimonial.image && (
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-g2b-purple">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="text-g2b-purple text-6xl mb-4">"</div>
                <p className="text-lg md:text-xl text-g2b-gray leading-relaxed mb-6 max-w-3xl">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-bold text-g2b-purple text-lg">{testimonial.name}</p>
                  <p className="text-g2b-gray">{testimonial.role}</p>
                  <p className="text-g2b-lightpurple font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #6B46C1;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          background: #6B46C1;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #F59E0B;
        }
      `}</style>
    </div>
  );
}
