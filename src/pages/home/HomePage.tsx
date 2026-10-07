import type { Navigate } from '@/config/navigation';
import { CtaSection } from '@/components/sections/CtaSection';
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection';
import { FeaturedTeamSection } from './FeaturedTeamSection';
import { HeroSection } from './HeroSection';
import { StatsSection } from './StatsSection';
import { TechMarquee } from './TechMarquee';

export function HomePage({ onNavigate }: { onNavigate: Navigate }) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <TechMarquee />
      <StatsSection />
      <HowWeWorkSection onNavigate={onNavigate} />
      <FeaturedTeamSection onNavigate={onNavigate} />
      <CtaSection onNavigate={onNavigate} />
    </>
  );
}
