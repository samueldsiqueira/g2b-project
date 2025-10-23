'use client';

import { motion } from 'framer-motion';

interface UrgencyBadgeProps {
  text?: string;
  type?: 'limited' | 'spots' | 'offer' | 'free';
}

export default function UrgencyBadge({ 
  text = '⚡ Agenda Limitada - Últimas Vagas', 
  type = 'limited' 
}: UrgencyBadgeProps) {
  
  const getColors = () => {
    switch (type) {
      case 'spots':
        return 'bg-orange-500 text-white';
      case 'offer':
        return 'bg-red-500 text-white';
      case 'free':
        return 'bg-green-500 text-white';
      default:
        return 'bg-g2b-yellow text-g2b-darkpurple';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="inline-block"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`${getColors()} px-6 py-2 rounded-full font-bold text-sm shadow-lg inline-flex items-center gap-2`}
      >
        {type === 'limited' && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        )}
        {text}
      </motion.div>
    </motion.div>
  );
}
