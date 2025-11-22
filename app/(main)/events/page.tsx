import { Container, Section, Card } from '@/components/ui';
import { Star, Calendar as CalendarIcon } from 'lucide-react';
import InstagramCarousel from '@/components/InstagramCarousel';
import Script from 'next/script';

const instagramPosts = [
  { url: 'https://www.instagram.com/p/DQo-aZ0gEqI/', id: 'DQo-aZ0gEqI' },
  { url: 'https://www.instagram.com/p/DRDsYHVidiq/', id: 'DRDsYHVidiq' },
  { url: 'https://www.instagram.com/p/DRC8Gd6iUSP/', id: 'DRC8Gd6iUSP' },
  { url: 'https://www.instagram.com/p/DQ-Ej4eCffT/', id: 'DQ-Ej4eCffT' },
  { url: 'https://www.instagram.com/p/DQrpM-5AJTE/', id: 'DQrpM-5AJTE' },
];

const upcomingEvents = [
  {
    date: '15',
    month: 'DEC',
    title: 'Cultural Night Celebration',
    time: '6:00 PM - 9:00 PM',
    location: 'WSU Student Center',
  },
  {
    date: '22',
    month: 'DEC',
    title: 'Year-End Social Gathering',
    time: '5:00 PM - 8:00 PM',
    location: 'Campus Commons',
  },
  {
    date: '10',
    month: 'JAN',
    title: 'Spring Semester Kickoff',
    time: '7:00 PM - 9:00 PM',
    location: 'RSC Ballroom',
  },
  {
    date: '18',
    month: 'JAN',
    title: 'Leadership Workshop',
    time: '4:00 PM - 6:00 PM',
    location: 'Lindquist Hall',
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* This Month's Events Carousel */}
      <Section variant="accent" spacing="lg">
        <Container>
          <div className="flex items-center justify-center mb-8">
            <Star className="w-8 h-8 text-[var(--old-gold)] mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Events</h2>
            <Star className="w-8 h-8 text-[var(--old-gold)] ml-3" />
          </div>

          <InstagramCarousel posts={instagramPosts} />
        </Container>
      </Section>
    </div>
  );
}
