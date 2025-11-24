import { Container, Section } from '@/components/ui';
import AlumniCarousel from '@/components/AlumniCarousel';

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
  {
    name: 'David Nguyen',
    class: 'Class of 2020',
    position: 'Data Scientist',
    quote: 'ASC connected me with mentors who shaped my career path.',
    image: '/asc_logo_white_border.png',
  },
  {
    name: 'Emily Liu',
    class: 'Class of 2019',
    position: 'Entrepreneur',
    quote: 'The leadership experience I gained at ASC was instrumental in starting my own business.',
    image: '/asc_logo_white_border.png',
  },
];

export default function AlumniPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Featured Alumni */}
      <Section variant="default" spacing="lg" className="pt-16">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Featured <span className="text-[var(--old-gold)]">Alumni</span>
          </h2>
          <AlumniCarousel alumni={featuredAlumni} />
        </Container>
      </Section>
    </div>
  );
}
