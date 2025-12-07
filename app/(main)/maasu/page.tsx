import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container, Section, Card } from '@/components/ui';
import { Users, Calendar, Target } from 'lucide-react';

export default function MAAUSPage() {
  const conferences = [
    {
      title: 'MAASUx',
      description: 'An innovative conference experience focused on leadership and cultural awareness.',
      icon: Users
    },
    {
      title: 'Leadership Summit',
      description: 'Developing the next generation of APIDA leaders through intensive workshops and networking.',
      icon: Target
    },
    {
      title: 'Spring Conference',
      description: 'Our annual flagship conference bringing together students from across the region.',
      icon: Calendar
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Header Section */}
      <Section variant="accent" spacing="lg">
        <Container>
          <Box sx={{ maxWidth: '56rem', mx: 'auto', textAlign: 'center' }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '1.875rem', sm: '2.5rem', md: '3rem', lg: '3.75rem' },
                fontWeight: 700,
                mb: { xs: 2, sm: 3 }
              }}
            >
              <Box component="span" sx={{ color: 'primary.main' }}>MAASU</Box> Conference
            </Typography>
            
            {/* Mission Statement */}
            <Paper 
              elevation={3}
              sx={{
                p: { xs: 3, sm: 4, md: 6 },
                bgcolor: 'white',
                mt: { xs: 4, sm: 6 }
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 2
                }}
              >
                Mission Statement
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  color: 'text.secondary',
                  lineHeight: 1.8
                }}
              >
                To create and polish leaders in the APIDA community through keynote presentations, 
                professional development workshops, panels, and cultural discussions.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Section>

      {/* Conferences Section */}
      <Section variant="default" spacing="lg">
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
              Our <Box component="span" sx={{ color: 'primary.main' }}>Conferences</Box>
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ maxWidth: '80rem', mx: 'auto' }}>
            {conferences.map((conference, index) => {
              const Icon = conference.icon;
              return (
                <Grid key={index} size={{ xs: 12, md: 4 }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8
                      }
                    }}
                  >
                    <Box sx={{ p: { xs: 3, sm: 4 }, textAlign: 'center' }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'primary.main', 
                          borderRadius: '50%', 
                          width: 64,
                          height: 64,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2
                        }}
                      >
                        <Icon style={{ width: 32, height: 32, color: 'white' }} />
                      </Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 700,
                          mb: 2
                        }}
                      >
                        {conference.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.6
                        }}
                      >
                        {conference.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
