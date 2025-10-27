'use client';

import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaTelegram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const socialLinks = [
	{ icon: FaInstagram, url: 'https://www.instagram.com/g2b_gestaodeprojetos/', label: 'Instagram' },
	{ icon: FaLinkedin, url: 'https://www.linkedin.com/in/gisele-blak-bernat/', label: 'LinkedIn' },
	{ icon: FaYoutube, url: 'https://www.youtube.com/@g2b425', label: 'YouTube' },
	{ icon: FaTelegram, url: 'http://t.me/g2b_gestaodeprojetos', label: 'Telegram' },
	{ icon: FaEnvelope, url: 'mailto:contato@g2b.com.br', label: 'Email' },
	{ icon: FaWhatsapp, url: 'https://wa.me/5521999999999', label: 'WhatsApp' },
];

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 0, minutes: 0, seconds: 0 });

	useEffect(() => {
		// Fixed target date: November 3, 2025 at 23:59:59 UTC
		const countdownDate = new Date('2025-11-03T23:59:59Z');

		const timer = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate.getTime() - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				clearInterval(timer);
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			} else {
				setTimeLeft({ days, hours, minutes, seconds });
			}
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const TimeUnit = ({ value, label }) => (
		<div className='flex flex-col items-center'>
			<motion.div
				className='text-6xl font-bold text-white'
				animate={{ scale: [1, 1.05, 1] }}
				transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
			>
				{String(value).padStart(2, '0')}
			</motion.div>
			<div className='text-sm font-normal text-g2b-yellow'>{label}</div>
		</div>
	);

	return (
		<div className='flex gap-4'>
			<TimeUnit value={timeLeft.days} label='Dias' />
			<div className='text-6xl font-bold text-g2b-yellow'>:</div>
			<TimeUnit value={timeLeft.hours} label='Horas' />
			<div className='text-6xl font-bold text-g2b-yellow'>:</div>
			<TimeUnit value={timeLeft.minutes} label='Minutos' />
			<div className='text-6xl font-bold text-g2b-yellow'>:</div>
			<TimeUnit value={timeLeft.seconds} label='Segundos' />
		</div>
	);
};

export default function ConstructionPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-g2b-purple to-g2b-red flex flex-col items-center justify-center text-white p-4'>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='text-center mb-8'
			>
				<motion.div
					animate={{ scale: [1, 1.05, 1] }}
					transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
					className='w-48 h-48 bg-white rounded-full flex items-center justify-center mx-auto mb-6'
				>
					<Image src='/images/logo_g2b.png' alt='G2B Logo' width={128} height={128} />
				</motion.div>
				<h1 className='text-4xl font-bold mb-4 text-g2b-yellow'>Treinamento Executivo & Assessoria Empresarial</h1>
				{/* <p className='text-xl text-gray-200 mb-8'>Treinamento Executivo & Assessoria Empresarial</p> */}
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
				className='mb-12'
			>
				<Countdown />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
				className='text-center'
			>
				<h2 className='text-2xl font-semibold mb-4 text-g2b-yellow'>
					Enquanto o site não fica pronto, siga-nos nas redes sociais e canais!
				</h2>
				<div className='flex justify-center gap-6'>
					{socialLinks.map((social, index) => {
						const Icon = social.icon;
						return (
							<motion.a
								key={social.label}
								href={social.url}
								target='_blank'
								rel='noopener noreferrer'
								className='text-g2b-yellow hover:text-white transition-all duration-300'
								aria-label={social.label}
								title={social.label}
								whileHover={{ scale: 1.2, rotate: 5 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
							>
								<Icon size={40} />
							</motion.a>
						);
					})}
				</div>
			</motion.div>
		</div>
	);
}
