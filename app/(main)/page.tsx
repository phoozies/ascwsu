import LandingSection from '@/components/sections/LandingSection';
import GoalsSection from '@/components/sections/GoalsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingSection />
      <GoalsSection />
    </div>
  );
}
