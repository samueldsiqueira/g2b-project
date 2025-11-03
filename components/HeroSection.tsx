'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const menuItems = [
	{ label: 'Quem é Gisele Blak Bernat', href: '#quem-e-gisele' },
	{ label: 'Sobre a G2B', href: '#sobre-g2b' },
	{ label: 'Oficinas', href: '#oficinas' },
	{ label: 'Soluções', href: '#solucoes' },
	{ label: 'Palestras', href: '#palestras' },
	{ label: 'Mentoria', href: '#mentoria' },
	{ label: 'Conteúdos', href: '#conteudos' },
];

export default function HeroSection() {
	const [particles, setParticles] = useState<Array<{ x: number; y: number; id: number }>>([]);

	useEffect(() => {
		// Generate particles only on client side
		const newParticles = [...Array(20)].map((_, i) => ({
			id: i,
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
		}));
		setParticles(newParticles);
	}, []);

	return (
		<section
			id='hero'
			className='min-h-screen bg-gradient-to-br from-g2b-purple via-g2b-purple-dark to-purple-900 relative overflow-hidden'
		>
			{/* Animated background particles */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{particles.map((particle) => (
					<motion.div
						key={particle.id}
						className='absolute w-2 h-2 bg-g2b-yellow/20 rounded-full'
						initial={{
							x: particle.x,
							y: particle.y,
						}}
						animate={{
							x: [particle.x, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), particle.x],
							y: [particle.y, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000), particle.y],
							scale: [1, 1.5, 1],
							opacity: [0.2, 0.5, 0.2],
						}}
						transition={{
							duration: Math.random() * 10 + 10,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				))}
			</div>

			{/* Logo mobile - centered with animation */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='absolute top-8 left-1/2 -translate-x-1/2 z-10 lg:hidden'
			>
				<Image src='/gisele/logo_branca_sem_fundo.png' alt='G2B Logo' width={120} height={120} className='' />
			</motion.div>

			{/* Logo and Navigation - aligned vertically with staggered animation */}
			<div className='absolute left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block'>
				{/* Logo with pulse animation */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.6,
					}}
					className='mb-8'
				>
					<Image src='/gisele/logo_branca_sem_fundo.png' alt='G2B Logo' width={480} height={480} className='' />
				</motion.div>

				{/* Navigation with staggered animation */}
				<motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
					<ul className='flex flex-col gap-6'>
						{menuItems.map((item, index) => (
							<motion.li
								key={item.href}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: 0.5 + index * 0.1,
									duration: 0.5,
									type: 'spring',
									stiffness: 100,
								}}
								whileHover={{ x: 5, scale: 1.05 }}
							>
								<Link
									href={item.href}
									className='text-g2b-yellow hover:text-white transition-colors duration-300 text-3xl font-bold'
								>
									{item.label}
								</Link>
							</motion.li>
						))}
						<motion.li
							className='mt-4'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.2, duration: 0.5 }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							{/* <Link
								href='#agendar'
								className='inline-block bg-g2b-yellow text-g2b-purple px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-300'
							>
								Agendar diagnóstico
							</Link> */}
						</motion.li>
					</ul>
				</motion.nav>
			</div>

			<div className='min-h-screen flex items-center'>
				<div className='w-full lg:ml-[380px] lg:mr-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-0'>
						{/* Content Left */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className='text-white space-y-8'
						>
							<motion.h1
								className='text-4xl lg:text-5xl xl:text-8xl font-bold leading-tight'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5 }}
							>
								<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
									Soluções que transformam ideias em projetos com resultados reais
								</motion.span>
								<motion.span
									className='block mt-4'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.9, duration: 0.8 }}
								></motion.span>
							</motion.h1>

							<motion.div
								className='flex flex-col sm:flex-row gap-4'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.1, duration: 0.6 }}
							>
								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									<Link
										href='#agendar'
										className='inline-block bg-g2b-yellow text-g2b-purple px-8 py-4 rounded-md font-semibold text-xl hover:bg-yellow-400 transition-colors duration-300 text-center shadow-lg hover:shadow-xl'
									>
										Agendar diagnóstico gratuito
									</Link>
								</motion.div>
								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									{/* <Link
										href='#oficinas'
										className='inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-g2b-purple transition-colors duration-300 text-center'
									>
										Conheça as Oficinas G2B
									</Link> */}
								</motion.div>
							</motion.div>

							{/* <motion.p
								className='text-sm lg:text-base text-gray-300 mt-6'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.3, duration: 0.8 }}
							>
								Projetos, Riscos, Suprimentos, Sustentabilidade e IA — tudo em um método que une estratégia, prática e resultado.
							</motion.p> */}
						</motion.div>

						{/* Image Right with floating animation */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className='relative h-[800px] lg:h-[1050px] -mr-8 lg:-mr-16'
						>
							<motion.div
								className='relative w-full h-full overflow-visible'
								animate={{ y: [0, -10, 0] }}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							>
								<Image
									src='/gisele/png-sem-fundo/gisele-sem-fundo-2.png'
									alt='Gisele Blak Bernat'
									fill
									sizes='(max-width: 768px) 100vw, 60vw'
									className='object-contain object-center scale-x-[-1] scale-125'
									priority
								/>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
