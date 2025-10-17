'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              Home
            </Link>
            <Link href="/sobre" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              Sobre
            </Link>
            <Link href="/solucoes" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              Soluções
            </Link>
            <Link href="/capacitacao" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              Capacitação
            </Link>
            <Link href="/assessoria" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              Assessoria
            </Link>
            <Link href="/biblioteca" className="text-white hover:text-g2b-yellow font-semibold transition-colors">
              Biblioteca
            </Link>
          </nav>

          {/* Contact Button Desktop */}
          <a 
            href="mailto:contato@g2b.com.br" 
            className="hidden md:block bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Contato
          </a>

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
          <nav className="md:hidden absolute top-full left-0 right-0 bg-g2b-purple border-t border-g2b-darkpurple shadow-lg">
            <div className="flex flex-col py-4">
              <Link 
                href="/" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/sobre" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/solucoes" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Soluções
              </Link>
              <Link 
                href="/capacitacao" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Capacitação
              </Link>
              <Link 
                href="/assessoria" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Assessoria
              </Link>
              <Link 
                href="/biblioteca" 
                className="text-white hover:bg-g2b-darkpurple px-6 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Biblioteca
              </Link>
              <a 
                href="mailto:contato@g2b.com.br" 
                className="bg-g2b-yellow text-g2b-darkpurple px-6 py-3 mx-6 mt-4 rounded-lg font-semibold text-center hover:bg-yellow-500 transition-colors"
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
