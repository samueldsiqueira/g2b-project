'use client';

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
