'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/locales/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-g2b-purple shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <Link href="/" className="text-3xl font-bold text-white hover:text-g2b-yellow transition-colors z-50">
            G2B
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/sobre" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/solucoes" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              {t.nav.solutions}
            </Link>
            <Link href="/capacitacao" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              {t.nav.training}
            </Link>
            <Link href="/assessoria" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              {t.nav.consulting}
            </Link>
            <Link href="/biblioteca" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              {t.nav.library}
            </Link>
          </nav>

          {/* Language Selector & Contact Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector - HIDDEN */}
            <div className="hidden">
              <LanguageSelector />
            </div>
            <a 
              href="mailto:contato@g2b.com.br" 
              className="bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white z-50 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden fixed top-[73px] left-0 right-0 bg-g2b-purple border-t border-g2b-darkpurple shadow-lg z-40 max-h-[calc(100vh-73px)] overflow-y-auto">
            <div className="flex flex-col py-4">
              <Link 
                href="/" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/sobre" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link 
                href="/solucoes" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.solutions}
              </Link>
              <Link 
                href="/capacitacao" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.training}
              </Link>
              <Link 
                href="/assessoria" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.consulting}
              </Link>
              <Link 
                href="/biblioteca" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.library}
              </Link>
              
              {/* Language Selector Mobile - HIDDEN */}
              <div className="hidden px-6 py-3">
                <LanguageSelector />
              </div>
              
              <a 
                href="mailto:contato@g2b.com.br" 
                className="bg-g2b-yellow text-g2b-darkpurple px-6 py-3 mx-6 mt-4 rounded-lg font-semibold text-center hover:bg-yellow-500 transition-colors"
              >
                {t.nav.contact}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
