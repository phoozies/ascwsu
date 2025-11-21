import HeroSection from '@/components/sections/HeroSection';
import GoalsSection from '@/components/sections/GoalsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GoalsSection />
    </div>
  );
}
