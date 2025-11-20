import Image from 'next/image';
import { Button, Container, Section } from '@/components/ui';

export default function HeroSection() {
  return (
    <Section variant="default" spacing="lg" className="pt-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d7a63e\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[var(--old-gold-light)] bg-opacity-20 rounded-full">
              <span className="text-[var(--old-gold-dark)] font-semibold text-sm">
                Est. 2024 • Wichita State University
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Asian Student
              <span className="block text-[var(--old-gold)]">Conference</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Building bridges, celebrating diversity, and fostering leadership 
              within the Asian community at Wichita State University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg">Join Our Community</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>

            <div className="flex items-center gap-8 pt-8 text-sm text-gray-600">
              <div>
                <div className="text-3xl font-bold text-[var(--old-gold)]">50+</div>
                <div>Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--old-gold)]">20+</div>
                <div>Events Annually</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--old-gold)]">1</div>
                <div>Strong Community</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--old-gold)] to-[var(--old-gold-dark)] opacity-20" />
              <Image
                src="/asc_logo_white_border.png"
                alt="ASC Community"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--old-gold)] rounded-full opacity-20 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--old-gold-dark)] rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
