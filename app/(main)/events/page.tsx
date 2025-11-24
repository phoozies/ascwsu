'use client';

import { Suspense } from 'react';
import { Container, Section } from '@/components/ui';
import { Star } from 'lucide-react';
import InstagramCarousel from '@/components/InstagramCarousel';
import InstagramCarouselSkeleton from '@/components/InstagramCarouselSkeleton';

const instagramPosts = [
  { url: 'https://www.instagram.com/p/DQo-aZ0gEqI/', id: 'DQo-aZ0gEqI' },
  { url: 'https://www.instagram.com/p/DRDsYHVidiq/', id: 'DRDsYHVidiq' },
  { url: 'https://www.instagram.com/p/DRC8Gd6iUSP/', id: 'DRC8Gd6iUSP' },
  { url: 'https://www.instagram.com/p/DQ-Ej4eCffT/', id: 'DQ-Ej4eCffT' },
  { url: 'https://www.instagram.com/p/DQrpM-5AJTE/', id: 'DQrpM-5AJTE' },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* This Month's Events Carousel */}
      <Section variant="accent" spacing="lg">
        <Container>
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--old-gold)] mr-2 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--old-gold)] ml-2 sm:ml-3" />
          </div>

          <Suspense fallback={<InstagramCarouselSkeleton />}>
            <InstagramCarousel posts={instagramPosts} />
          </Suspense>
        </Container>
      </Section>
    </div>
  );
}
