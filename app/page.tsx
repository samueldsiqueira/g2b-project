'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../locales/LanguageContext';
import ModernHeader from '../components/ModernHeader';
import ServicesCarousel from '../components/ServicesCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';

export default function ModernHome() {
	const { t } = useLanguage();
	const { scrollYProgress } = useScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

	const services = [
		{
			id: 1,
			title: 'Capacitação',
			description: 'Cursos e treinamentos especializados para sua equipe crescer e se desenvolver.',
			icon: (
				<svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
					/>
				</svg>
			),
			sectionId: 'training',
			color: 'bg-g2b-purple',
		},
		{
			id: 2,
			title: 'Assessoria',
			description: 'Consultoria especializada para governança corporativa e compliance.',
			icon: (
				<svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
					/>
				</svg>
			),
			sectionId: 'consulting',
			color: 'bg-g2b-lightpurple',
		},
		{
			id: 3,
			title: 'Sobre Gisele',
			description: 'Conheça a fundadora e CEO da G2B, sua formação e experiência.',
			icon: (
				<svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
					/>
				</svg>
			),
			sectionId: 'gisele',
			color: 'bg-g2b-yellow',
		},
		{
			id: 4,
			title: 'Entre em Contato',
			description: 'Fale conosco para soluções personalizadas para sua organização.',
			icon: (
				<svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
					/>
				</svg>
			),
			sectionId: 'contact',
			color: 'bg-gradient-to-r from-g2b-purple to-g2b-lightpurple',
		},
	];

	const testimonials = [
		{
			id: 1,
			name: 'Maria Silva',
			role: 'Diretora de Compliance',
			company: 'Empresa XYZ',
			text: 'A G2B transformou nossa abordagem de governança corporativa. Os treinamentos são excepcionais e a assessoria é de altíssimo nível.',
		},
		{
			id: 2,
			name: 'João Santos',
			role: 'CEO',
			company: 'Tech Solutions',
			text: 'Parceria estratégica que nos ajudou a implementar as melhores práticas de compliance e governança. Recomendo fortemente!',
		},
		{
			id: 3,
			name: 'Ana Costa',
			role: 'Gerente de RH',
			company: 'Indústria ABC',
			text: 'Os cursos de capacitação elevaram o nível técnico de nossa equipe. Investimento com retorno garantido.',
		},
	];

	const stats = [
		{ number: '10+', label: 'Anos de Experiência' },
		{ number: '500+', label: 'Clientes Atendidos' },
		{ number: '1000+', label: 'Treinamentos Realizados' },
		{ number: '98%', label: 'Satisfação' },
	];

	return (
		<div className='min-h-screen bg-white'>
			<ModernHeader />
			<WhatsAppFloat />
			<ScrollToTop />

			{/* Hero Section com Parallax */}
			<section id='hero' className='relative min-h-screen flex items-center justify-center overflow-hidden'>
				{/* Background com gradiente */}
				<div className='absolute inset-0 bg-gradient-to-br from-g2b-darkpurple via-g2b-purple to-g2b-lightpurple' />

				{/* Overlay com pattern */}
				<div className='absolute inset-0 opacity-10'>
					<div
						className='absolute inset-0'
						style={{
							backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
							backgroundSize: '40px 40px',
						}}
					/>
				</div>

				<motion.div style={{ opacity, scale }} className='relative z-10 max-w-7xl mx-auto px-6 text-center'>
					{/* Logo Grande */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='mb-8 flex flex-col items-center'
					>
						<motion.div
							className='relative'
							animate={{
								scale: [1, 1.02, 1],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						>
							<Image
								src='/images/brand_colored.svg'
								alt='G2B Logo'
								width={1200}
								height={400}
								className='w-auto h-96 md:h-[32rem] lg:h-[40rem] xl:h-[48rem]'
								priority
							/>
						</motion.div>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6'
					>
						{t.home.hero.title} <span className='text-g2b-yellow'>{t.home.hero.titleHighlight}</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed'
					>
						{t.home.hero.subtitle}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='flex flex-col sm:flex-row gap-6 justify-center'
					>
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href='mailto:contato@g2b.com.br'
							className='bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl'
						>
							{t.home.hero.ctaPrimary}
						</motion.a>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => {
								document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
							}}
							className='bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all border-2 border-white/30'
						>
							{t.home.hero.ctaSecondary}
						</motion.button>
					</motion.div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
				>
					<div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
						<div className='w-1 h-3 bg-white rounded-full mt-2' />
					</div>
				</motion.div>
			</section>

			{/* Stats Section */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className='text-center'
							>
								<div className='text-4xl md:text-5xl font-bold text-g2b-purple mb-2'>{stat.number}</div>
								<div className='text-g2b-gray font-semibold'>{stat.label}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id='about' className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-16 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h2 className='text-4xl md:text-5xl font-bold text-g2b-purple mb-6'>{t.home.about.title}</h2>
							<div className='space-y-4 text-lg text-g2b-gray leading-relaxed'>
								<p>{t.home.about.text1}</p>
								<p>{t.home.about.text2}</p>
								<div className='bg-gradient-to-r from-g2b-yellow/20 to-g2b-purple/10 border-l-4 border-g2b-yellow p-6 rounded-lg mt-6'>
									<p className='font-bold text-g2b-purple text-xl mb-2'>{t.home.about.motto}</p>
									<p className='text-g2b-gray'>{t.home.about.mottoSubtitle}</p>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='relative'
						>
							<div className='bg-white rounded-3xl p-8 shadow-2xl'>
								<Image
									src='/images/parceiros_logos.png'
									alt={t.home.about.partners}
									width={527}
									height={85}
									className='w-full h-auto'
								/>
								<p className='text-center text-g2b-purple font-bold mt-6 text-lg'>{t.home.about.partners}</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Gisele Blak Bernat Section */}
			<section id='gisele' className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='bg-gradient-to-r from-g2b-purple to-g2b-darkpurple rounded-3xl shadow-2xl overflow-hidden'>
						<div className='p-8 md:p-12'>
							<div className='text-center mb-12'>
								<h2 className='text-3xl md:text-4xl font-bold text-white mb-2'>Gisele Blak Bernat</h2>
								<p className='text-xl text-g2b-yellow font-semibold'>Fundadora e CEO da G2B</p>
							</div>

							<div className='grid md:grid-cols-3 gap-8'>
								{/* Foto */}
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									className='md:col-span-1'
								>
									<div className='relative'>
										<div className='rounded-2xl overflow-hidden shadow-2xl'>
											<Image
												src='/images/gisele1.png'
												alt='Gisele Blak Bernat'
												width={400}
												height={533}
												className='w-full h-auto'
											/>
										</div>
										{/* Social Links */}
										<div className='mt-6 flex flex-wrap gap-3 justify-center'>
											<a
												href='https://www.linkedin.com/in/gisele-blak-bernat'
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded-lg hover:bg-[#006399] transition-all shadow-lg'
											>
												<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
													<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
												</svg>
												<span className='font-semibold text-sm'>LinkedIn</span>
											</a>

											<a
												href='https://www.instagram.com/g2b.treinamento'
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center gap-2 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all shadow-lg'
											>
												<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
													<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
												</svg>
												<span className='font-semibold text-sm'>Instagram</span>
											</a>

											<a
												href='https://www.youtube.com/@g2b425'
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center gap-2 bg-[#FF0000] text-white px-4 py-2 rounded-lg hover:bg-[#CC0000] transition-all shadow-lg'
											>
												<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
													<path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
												</svg>
												<span className='font-semibold text-sm'>YouTube</span>
											</a>

											<a
												href='mailto:contato@g2b.com.br'
												className='flex items-center gap-2 bg-g2b-yellow text-g2b-darkpurple px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all shadow-lg'
											>
												<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
													/>
												</svg>
												<span className='font-semibold text-sm'>Email</span>
											</a>
										</div>
									</div>
								</motion.div>

								{/* Conteúdo */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									className='md:col-span-2'
								>
									<div className='space-y-6 text-white leading-relaxed'>
										<p className='text-lg'>
											Gisele Blak Bernat é <strong>Mestre em Engenharia Civil de Produção</strong> com ênfase em Sistemas de
											Gestão, Produção e Qualidade pela UFF. <strong>Master Certificate in Project Management</strong> pela{' '}
											<strong>ESI &amp; George Washington University</strong>. Membro do PMI Chapter Rio com{' '}
											<strong>certificação Project Management Professional (PMP)</strong> desde 2002.
										</p>

										<p className='text-lg'>
											Programa Internacional de Desarollo Gerencial pela Telefônica Móviles &amp; IEDE, na Espanha. MBA Executivo
											de Gestão de Negócios pelo IBMEC. Bacharel em Ciências com Dignidade Acadêmica &quot;cum laude&quot; pela
											UFRJ (Engenheira Civil).
										</p>

										<div className='bg-white/10 backdrop-blur-sm border-l-4 border-g2b-yellow p-6 rounded-lg'>
											<h3 className='font-bold text-g2b-yellow mb-3 text-xl'>Experiência Acadêmica</h3>
											<p>
												Professora do Programa de Aperfeiçoamento em Gestão de Projetos do COPPEAD, da Pós-Graduação em Gestão e
												Gerenciamento de Projetos da Escola Politécnica da UFRJ e dos cursos de MBA em Gestão de Projetos e MBA em
												Gestão de Negócios Imobiliários e da Construção Civil da FGV. Autora de diversos artigos em congressos e
												coautora do livro Capacitação em Gerenciamento de Projetos pela editora Brasport.
											</p>
										</div>

										<p className='text-lg'>
											Em 2010, foi convidada a integrar a Diretoria Executiva do IPMA Brasil® (International Project Management
											Association) e realizou trabalho voluntário como Diretora de Marketing da instituição.
										</p>

										<div className='bg-white/10 backdrop-blur-sm border-l-4 border-g2b-yellow p-6 rounded-lg'>
											<h3 className='font-bold text-g2b-yellow mb-3 text-xl'>Experiência Profissional</h3>
											<p>
												Mais de dez anos em gerenciamento de projetos de grande porte em empresas de Engenharia Civil e de
												Telecomunicações, tendo participado como Gerente de Projetos da execução do Parque Gráfico do Jornal O
												Globo pela Odebrecht e do <em>start-up</em> da Intelig Telecom pela Bechtel Método Telecom, bem como
												projetos de implantação da rede GSM, implantação de plataformas de serviços de valor agregado (Caixa
												Postal, MMS, GTW VAS) e lançamento de produtos de marketing na Telefônica Celular/Vivo.
											</p>
										</div>

										<p className='text-lg'>
											Atualmente é sócia e Diretora Executiva da G2B Treinamento Executivo &amp; Assessoria Empresarial LTDA.,
											tendo atuado como Consultora e Gerente de Projetos para diversos clientes de grande porte.
										</p>
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Solutions/Services Section with Carousel */}
			<section id='solutions' className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-6'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl md:text-5xl font-bold text-g2b-purple mb-6'>{t.home.solutions.title}</h2>
						<p className='text-xl text-g2b-gray max-w-3xl mx-auto'>{t.home.solutions.subtitle}</p>
					</motion.div>

					<ServicesCarousel services={services} />
				</div>
			</section>

			{/* Training Section */}
			<section id='training' className='py-20 bg-gradient-to-br from-g2b-purple to-g2b-darkpurple text-white'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
							<h2 className='text-4xl md:text-5xl font-bold mb-6'>Capacitação de Excelência</h2>
							<p className='text-xl text-gray-200 mb-8 leading-relaxed'>
								Desenvolvemos programas de treinamento personalizados para elevar o conhecimento e as competências da sua equipe.
							</p>
							<ul className='space-y-4 mb-8'>
								<li className='flex items-start'>
									<svg className='w-6 h-6 text-g2b-yellow mr-3 mt-1 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
										<path
											fillRule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clipRule='evenodd'
										/>
									</svg>
									<span className='text-lg'>Cursos presenciais e online</span>
								</li>
								<li className='flex items-start'>
									<svg className='w-6 h-6 text-g2b-yellow mr-3 mt-1 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
										<path
											fillRule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clipRule='evenodd'
										/>
									</svg>
									<span className='text-lg'>Instrutores especializados</span>
								</li>
								<li className='flex items-start'>
									<svg className='w-6 h-6 text-g2b-yellow mr-3 mt-1 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
										<path
											fillRule='evenodd'
											d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
											clipRule='evenodd'
										/>
									</svg>
									<span className='text-lg'>Certificação reconhecida</span>
								</li>
							</ul>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' });
								}}
								className='inline-block bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105'
							>
								Conheça nossos cursos
							</motion.button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='relative'
						>
							<div className='bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20'>
								<div className='grid grid-cols-2 gap-4'>
									{['Governança', 'Compliance', 'Auditoria', 'Gestão de Riscos'].map((topic, index) => (
										<div key={index} className='bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-colors'>
											<div className='text-3xl font-bold text-g2b-yellow mb-2'>{index + 1}</div>
											<div className='font-semibold'>{topic}</div>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Consulting Section */}
			<section id='consulting' className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='order-2 lg:order-1'
						>
							<div className='bg-gradient-to-br from-g2b-lightpurple to-g2b-purple rounded-3xl p-8 text-white shadow-2xl'>
								<h3 className='text-2xl font-bold mb-6'>Nossos Serviços de Assessoria</h3>
								<div className='space-y-4'>
									{[
										'Implementação de Governança Corporativa',
										'Programas de Compliance',
										'Gestão de Riscos',
										'Auditoria Interna',
										'Due Diligence',
										'Consultoria Estratégica',
									].map((service, index) => (
										<div key={index} className='flex items-center bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors'>
											<svg className='w-5 h-5 text-g2b-yellow mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
												<path
													fillRule='evenodd'
													d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
													clipRule='evenodd'
												/>
											</svg>
											<span>{service}</span>
										</div>
									))}
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='order-1 lg:order-2'
						>
							<h2 className='text-4xl md:text-5xl font-bold text-g2b-purple mb-6'>Assessoria Especializada</h2>
							<p className='text-xl text-g2b-gray mb-8 leading-relaxed'>
								Nossa equipe de especialistas oferece consultoria de alto nível para transformar a governança e compliance da sua
								organização.
							</p>
							<p className='text-lg text-g2b-gray mb-8 leading-relaxed'>
								Trabalhamos lado a lado com você para desenvolver e implementar soluções customizadas que atendam às necessidades
								específicas do seu negócio.
							</p>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									document.getElementById('consulting')?.scrollIntoView({ behavior: 'smooth' });
								}}
								className='inline-block bg-g2b-lightpurple hover:bg-g2b-purple text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105'
							>
								Solicite uma consultoria
							</motion.button>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-6'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl md:text-5xl font-bold text-g2b-purple mb-6'>O que dizem nossos clientes</h2>
						<p className='text-xl text-g2b-gray max-w-3xl mx-auto'>
							Veja como ajudamos empresas a alcançar excelência em governança e compliance
						</p>
					</motion.div>

					<TestimonialCarousel testimonials={testimonials} />
				</div>
			</section>

			{/* Contact CTA Section */}
			<section
				id='contact'
				className='py-20 bg-gradient-to-r from-g2b-darkpurple via-g2b-purple to-g2b-lightpurple text-white relative overflow-hidden'
			>
				{/* Background pattern */}
				<div className='absolute inset-0 opacity-10'>
					<div
						className='absolute inset-0'
						style={{
							backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
							backgroundSize: '40px 40px',
						}}
					/>
				</div>

				<div className='relative z-10 max-w-4xl mx-auto px-6 text-center'>
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
						<h2 className='text-4xl md:text-5xl font-bold mb-6'>{t.home.cta.title}</h2>
						<p className='text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed'>{t.home.cta.subtitle}</p>
						<div className='flex flex-col sm:flex-row gap-6 justify-center'>
							<motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								href='mailto:contato@g2b.com.br'
								className='bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl'
							>
								{t.home.cta.button}
							</motion.a>
							<motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								href='https://wa.me/5511999999999'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all border-2 border-white/30 flex items-center justify-center gap-2'
							>
								<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
								</svg>
								WhatsApp
							</motion.a>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
