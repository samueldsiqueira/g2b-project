'use client';

import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
	{ label: 'Quem é Gisele Blak Bernat', href: '#quem-e-gisele' },
	{ label: 'Sobre a G2B', href: '#sobre-g2b' },
	{ label: 'Oficinas', href: '#oficinas' },
	{ label: 'Soluções', href: '#solucoes' },
	{ label: 'Palestras', href: '#palestras' },
	{ label: 'Mentoria', href: '#mentoria' },
	{ label: 'Conteúdos', href: '#conteudos' },
];

export default function Navigation() {
	const [activeItem, setActiveItem] = useState('');

	return (
		<nav className='absolute left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block'>
			<ul className='flex flex-col gap-6'>
				{menuItems.map((item) => (
					<li key={item.href}>
						<Link
							href={item.href}
							onClick={() => setActiveItem(item.href)}
							className={`text-white hover:text-g2b-yellow transition-colors duration-300 text-sm font-light ${
								activeItem === item.href ? 'text-g2b-yellow' : ''
							}`}
						>
							{item.label}
						</Link>
					</li>
				))}
				<li className='mt-4'>
					{/* <Link
            href="#agendar"
            className="inline-block bg-g2b-yellow text-g2b-purple px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-300"
          >
            Agendar diagnóstico
          </Link> */}
				</li>
			</ul>
		</nav>
	);
}
