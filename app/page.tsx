import HeroSection from '@/components/sections/HeroSection';
import ValuesSection from '@/components/sections/ValuesSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuesSection />
      <CTASection />
    </div>
  );
}
