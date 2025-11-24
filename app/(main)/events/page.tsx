'use client';

import { Suspense } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
    <Box sx={{ minHeight: '100vh' }}>
      {/* This Month's Events Carousel */}
      <Section variant="accent" spacing="lg">
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: 3, sm: 4 } }}>
            <Star style={{ width: 32, height: 32, color: 'var(--old-gold)', marginRight: 12 }} />
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '1.875rem', md: '2.25rem' },
                fontWeight: 700
              }}
            >
              Upcoming Events
            </Typography>
            <Star style={{ width: 32, height: 32, color: 'var(--old-gold)', marginLeft: 12 }} />
          </Box>

          <Suspense fallback={<InstagramCarouselSkeleton />}>
            <InstagramCarousel posts={instagramPosts} />
          </Suspense>
        </Container>
      </Section>
    </Box>
  );
}
