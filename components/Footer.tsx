'use client';

import { useLanguage } from '../locales/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-g2b-darkpurple text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-g2b-yellow">G2B</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t.footer.about}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-g2b-yellow">{t.footer.links}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {t.nav.solutions}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('training')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Capacitação
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('consulting')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Assessoria
                </button>
              </li>
              <li>
                <a 
                  href="http://g2blog2b.wordpress.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-g2b-yellow">{t.footer.contact}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <strong>{t.footer.email}:</strong><br />
                <a href="mailto:contato@g2b.com.br" className="hover:text-white transition-colors">
                  contato@g2b.com.br
                </a>
              </li>
              <li>
                <strong>{t.footer.hr}:</strong><br />
                <a href="mailto:rh@g2b.com.br" className="hover:text-white transition-colors">
                  rh@g2b.com.br
                </a>
              </li>
              <li className="pt-2">
                <strong>{t.footer.location}:</strong><br />
                {t.footer.locationText}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} G2B - {t.footer.about.split('.')[0]}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
