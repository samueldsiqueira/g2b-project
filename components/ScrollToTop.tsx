'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão quando rolar mais de 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 p-3 bg-g2b-purple hover:bg-g2b-darkpurple text-white rounded-full shadow-2xl transition-all hover:scale-110 group"
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          {/* Círculo de fundo animado */}
          <div className="absolute inset-0 bg-g2b-yellow rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
          
          {/* Seta para cima */}
          <svg
            className="w-6 h-6 relative z-10 transition-transform group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>

          {/* Efeito de pulso */}
          <span className="absolute inset-0 rounded-full bg-g2b-purple animate-ping opacity-20" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
