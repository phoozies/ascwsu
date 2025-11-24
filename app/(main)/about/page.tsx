import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container, Section } from '@/components/ui';
import EventCarousel from '@/components/EventCarousel';
import { annualEvents } from '@/lib/eventsData';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Header Section */}
      <Section variant="default" spacing="lg">
        <Container>
          <Box sx={{ maxWidth: '80rem', mx: 'auto' }}>
            <Grid container spacing={4} alignItems="flex-start">
              {/* Logo */}
              <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Image 
                  src="/asc_logo_white_border.png" 
                  alt="ASC Logo" 
                  width={300}
                  height={300}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '300px' }}
                />
              </Grid>
              
              {/* Content */}
              <Grid size={{ xs: 12, md: 8 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '1.875rem', sm: '2.5rem', md: '3rem', lg: '3.75rem' },
                    fontWeight: 700,
                    mb: { xs: 2, sm: 3 }
                  }}
                >
                  About <Box component="span" sx={{ color: 'primary.main' }}>Asian Student Conference</Box>
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  ASC is a WSU Multi-Cultural Agency that aims to unite Asian Americans or students with Asian interest within campus by providing college students with network, socials, leadership events encouraging/educating about Asian culture and heritage throughout campus!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Section>

      {/* Annual Events Section */}
      <Section variant="accent" spacing="lg" fullHeight>
        <Container>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.875rem', sm: '2.25rem', md: '3rem' },
                fontWeight: 700,
                mb: { xs: 1.5, sm: 2 }
              }}
            >
              Our Annual <Box component="span" sx={{ color: 'primary.main' }}>Events</Box>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                color: 'text.secondary',
                maxWidth: '42rem',
                mx: 'auto'
              }}
            >
              Throughout the year, ASC hosts exciting events that celebrate Asian culture, 
              build community, and create lasting memories for all our members.
            </Typography>
          </Box>
          <EventCarousel events={annualEvents} />
        </Container>
      </Section>
    </Box>
  );
}
