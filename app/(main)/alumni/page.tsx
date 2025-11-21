import { Container, Section, Card, Button } from '@/components/ui';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

// Placeholder alumni data - you can replace with real data later
const featuredAlumni = [
  {
    name: 'Sarah Chen',
    class: 'Class of 2023',
    position: 'Software Engineer at Tech Corp',
    quote: 'ASC helped me develop leadership skills that I use every day in my career.',
    image: '/asc_logo_white_border.png',
  },
  {
    name: 'Michael Kim',
    class: 'Class of 2022',
    position: 'Medical Student at WSU',
    quote: 'The community and friendships I built through ASC are invaluable.',
    image: '/asc_logo_white_border.png',
  },
  {
    name: 'Priya Patel',
    class: 'Class of 2021',
    position: 'Marketing Director',
    quote: 'ASC gave me the confidence to pursue my dreams and make a difference.',
    image: '/asc_logo_white_border.png',
  },
];

export default function AlumniPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Featured Alumni */}
      <Section variant="default" spacing="lg">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Alumni
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredAlumni.map((alumnus) => (
              <Card key={alumnus.name} variant="elevated" className="overflow-hidden">
                <div className="aspect-square relative bg-gradient-to-br from-[var(--old-gold)] to-[var(--old-gold-dark)]" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {alumnus.name}
                  </h3>
                  <p className="text-sm text-[var(--old-gold)] font-medium mb-2">
                    {alumnus.class}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{alumnus.position}</p>
                  <p className="text-gray-700 italic">&ldquo;{alumnus.quote}&rdquo;</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
