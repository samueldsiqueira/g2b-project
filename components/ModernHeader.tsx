'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '../locales/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModernHeader() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { t } = useLanguage();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			setIsMenuOpen(false);
		}
	};

	const navItems = [
		{ id: 'hero', label: t.nav.home },
		{ id: 'about', label: t.nav.about },
		{ id: 'solutions', label: t.nav.solutions },
		{ id: 'training', label: 'Capacitação' },
		{ id: 'consulting', label: 'Assessoria' },
		{ id: 'contact', label: t.nav.contact },
	];

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-6 py-4'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<motion.div whileHover={{ scale: 1.05 }} className='cursor-pointer' onClick={() => scrollToSection('hero')}>
						<Image
							src='/images/logo_fundo_transparente.png'
							alt='G2B Logo'
							width={300}
							height={100}
							className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-16'}`}
							style={{
								filter: 'drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.9)) drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5))',
							}}
							priority
						/>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center gap-8'>
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`font-semibold transition-all hover:scale-105 ${
									isScrolled ? 'text-g2b-gray hover:text-g2b-purple' : 'text-white hover:text-g2b-yellow'
								}`}
							>
								{item.label}
							</button>
						))}
					</nav>

					{/* CTA Button Desktop */}
					<div className='hidden lg:block'>
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href='mailto:contato@g2b.com.br'
							className={`px-6 py-3 rounded-lg font-semibold transition-all ${
								isScrolled
									? 'bg-g2b-purple text-white hover:bg-g2b-darkpurple'
									: 'bg-g2b-yellow text-g2b-darkpurple hover:bg-yellow-500'
							}`}
						>
							{t.nav.contact}
						</motion.a>
					</div>

					{/* Mobile Menu Button */}
					<button onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden p-2' aria-label='Toggle menu'>
						<svg
							className={`w-6 h-6 ${isScrolled ? 'text-g2b-purple' : 'text-white'}`}
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							{isMenuOpen ? (
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
							) : (
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.nav
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							className='lg:hidden mt-4 overflow-hidden'
						>
							<div className='flex flex-col gap-2 py-4 bg-white rounded-lg shadow-lg'>
								{navItems.map((item) => (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className='text-g2b-gray hover:text-g2b-purple hover:bg-gray-50 px-6 py-3 text-left transition-colors'
									>
										{item.label}
									</button>
								))}
								<a
									href='mailto:contato@g2b.com.br'
									className='bg-g2b-purple text-white px-6 py-3 mx-4 mt-2 rounded-lg font-semibold text-center hover:bg-g2b-darkpurple transition-colors'
								>
									{t.nav.contact}
								</a>
							</div>
						</motion.nav>
					)}
				</AnimatePresence>
			</div>
		</motion.header>
	);
}
