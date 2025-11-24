import { Users, Calendar, Award, Heart } from 'lucide-react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container, Section } from '@/components/ui';

const values = [
  {
    icon: Users,
    title: 'Community',
    description: 'Building lasting connections and fostering a sense of belonging among Asian students at WSU.',
  },
  {
    icon: Calendar,
    title: 'Cultural Celebration',
    description: 'Honoring and sharing the rich diversity of Asian cultures through events and activities.',
  },
  {
    icon: Award,
    title: 'Leadership',
    description: 'Empowering members to develop leadership skills and make a positive impact on campus.',
  },
  {
    icon: Heart,
    title: 'Service',
    description: 'Giving back to our community through volunteer work and meaningful initiatives.',
  },
];

export default function ValuesSection() {
  return (
    <Section variant="accent" spacing="lg">
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Our Core Values
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '42rem',
              mx: 'auto'
            }}
          >
            The principles that guide our mission and unite our community
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Grid key={value.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Paper
                  elevation={2}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: 8,
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                      backgroundColor: 'primary.main',
                      opacity: 0.1,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <Icon style={{ width: 32, height: 32, color: 'var(--old-gold)', position: 'absolute' }} />
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 1.5
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ color: 'text.secondary' }}
                  >
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
