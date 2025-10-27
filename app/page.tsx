'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutGiseleSection from '@/components/AboutGiseleSection';

export default function HomePage() {
	return (
		<div className="relative">
			<Navigation />
			<HeroSection />
			<AboutGiseleSection />
		</div>
	);
}
