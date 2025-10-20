'use client';

import { useLanguage } from '@/locales/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 rounded-md text-sm font-semibold transition-all ${
          language === 'pt'
            ? 'bg-g2b-yellow text-g2b-darkpurple'
            : 'text-white hover:bg-white/10'
        }`}
        aria-label="Português"
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-semibold transition-all ${
          language === 'en'
            ? 'bg-g2b-yellow text-g2b-darkpurple'
            : 'text-white hover:bg-white/10'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
