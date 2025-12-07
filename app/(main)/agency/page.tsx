import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container, Section, Card } from '@/components/ui';
import { Users } from 'lucide-react';
import Image from 'next/image';

export default function AgencyPage() {
  const activeOrgs = [
    { name: 'Associated Malaysian Students of Wichita', abbr: 'AMSOW', logo: '/amsow_logo.png' },
    { name: 'Asian Student Conference Dance', abbr: 'ASD', logo: '/ascd_logo.png' },
    { name: 'Chi Sigma Tau National Fraternity Inc.', abbr: 'XΣT', logo: '/cst_logo.png' },
    { name: 'Japanese Cultural Association', abbr: 'JCA', logo: '/jca_logo.png' },
    { name: 'Sigma Psi Zeta Sorority Inc.', abbr: 'ΣΨΖ', logo: '/spz_logo.png' },
    { name: 'Society of Asian Scientists and Engineers', abbr: 'SASE', logo: '/sase_logo.jpg' },
    { name: 'Vietnamese Student Association', abbr: 'VSA', logo: '/vsa_logo.png' },
  ];

  const inactiveOrgs = [
    { name: 'Korean Student Association', abbr: 'KSA', logo: '/ksa_logo.png' },
    { name: 'Thai, Laos, & Cambodian Association', abbr: 'TLC', logo: '/tlc_logo.png' },
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
              Agency <Box component="span" sx={{ color: 'primary.main' }}>Organizations</Box>
            </Typography>
            
            {/* Description */}
            <Paper 
              elevation={3}
              sx={{
                p: { xs: 3, sm: 4, md: 6 },
                bgcolor: 'white',
                mt: { xs: 4, sm: 6 }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Users style={{ width: 48, height: 48, color: 'var(--old-gold)' }} />
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  color: 'text.secondary',
                  lineHeight: 1.8
                }}
              >
                Asian Student Conference serves as the Agency organization under the jurisdiction of 
                Wichita State University Student Government Association and Student Engagement and Belonging. 
                These organizations are designated to ASC by SGA and SEB. ASC holds a responsibility to support 
                these organizations through collaboration, attendance, and finances. Collaboration and involvement 
                among these organizations should serve the purpose of supporting the ASC purpose statement.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Section>

      {/* Active Organizations Section */}
      <Section variant="default" spacing="lg">
        <Container>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.875rem', sm: '2.25rem', md: '3rem' },
                fontWeight: 700
              }}
            >
              Active <Box component="span" sx={{ color: 'primary.main' }}>Organizations</Box>
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ maxWidth: '80rem', mx: 'auto' }}>
            {activeOrgs.map((org, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
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
                        width: '100%',
                        height: 150,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        position: 'relative'
                      }}
                    >
                      <Image 
                        src={org.logo}
                        alt={`${org.abbr} Logo`}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 1,
                        color: 'primary.main'
                      }}
                    >
                      {org.abbr}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.5
                      }}
                    >
                      {org.name}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Inactive Organizations Section */}
      <Section variant="accent" spacing="lg">
        <Container>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.875rem', sm: '2.25rem', md: '3rem' },
                fontWeight: 700
              }}
            >
              Inactive <Box component="span" sx={{ color: 'grey.500' }}>Organizations</Box>
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ maxWidth: '80rem', mx: 'auto' }}>
            {inactiveOrgs.map((org, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    opacity: 0.7
                  }}
                >
                  <Box sx={{ p: { xs: 3, sm: 4 }, textAlign: 'center' }}>
                    <Box 
                      sx={{ 
                        width: '100%',
                        height: 150,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        position: 'relative',
                        filter: 'grayscale(100%)'
                      }}
                    >
                      <Image 
                        src={org.logo}
                        alt={`${org.abbr} Logo`}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 1,
                        color: 'grey.500'
                      }}
                    >
                      {org.abbr}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.5
                      }}
                    >
                      {org.name}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
