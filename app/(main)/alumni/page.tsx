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
      {/* Header Section */}
      <Section variant="default" spacing="lg" className="pt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-[var(--old-gold)]">Alumni</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Celebrating the achievements and continued impact of ASC members who 
              have gone on to make their mark in the world.
            </p>
          </div>
        </Container>
      </Section>

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

      {/* Alumni Network Section */}
      <Section variant="accent" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join the Alumni Network
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay connected with fellow alumni, mentor current students, and 
              continue supporting ASC&apos;s mission. Your experience and guidance 
              can help shape the next generation of leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Update Your Information</Button>
              <Button variant="outline" size="lg">
                Become a Mentor
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section variant="default" spacing="lg">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Alumni Testimonials
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card variant="bordered" className="p-8">
              <p className="text-lg text-gray-700 mb-4 italic">
                &ldquo;Being part of ASC was transformative. The skills I learned and 
                the connections I made have been instrumental in my professional 
                success. I&apos;m grateful for the opportunity to give back by mentoring 
                current members.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">- James Lee, Class of 2020</div>
            </Card>

            <Card variant="bordered" className="p-8">
              <p className="text-lg text-gray-700 mb-4 italic">
                &ldquo;ASC provided a home away from home. The friendships I formed 
                have lasted well beyond graduation, and the leadership opportunities 
                prepared me for my career in ways I never expected.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">- Emily Nguyen, Class of 2019</div>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
