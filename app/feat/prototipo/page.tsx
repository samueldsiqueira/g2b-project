'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutGiseleSection from '@/components/AboutGiseleSection';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
	return (
		<div className="relative">
			<HeroSection />
			<AboutGiseleSection />
			<WhatsAppButton />
		</div>
	);
}
