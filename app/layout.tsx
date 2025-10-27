import type { Metadata } from 'next';
import './globals.css';
import FontSwitcher from '@/components/FontSwitcher';

export const metadata: Metadata = {
	title: 'G2B - Treinamento Executivo & Assessoria Empresarial',
	description: 'Oficinas e Soluções que transformam projetos em resultados reais. Treinamentos mão na massa + consultoria aplicada à realidade da sua empresa.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR' className="font-lato">
			<body>
				{children}
				<FontSwitcher />
			</body>
		</html>
	);
}
