import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Container, Section } from '@/components/ui';

const goals = [
  {
    number: '01',
    title: 'Unite Asian-Americans',
    description: 'To unite college Asian-Americans and/or students of Asian culture interests.',
  },
  {
    number: '02',
    title: 'Develop Leadership',
    description: 'To develop leadership skills among our members.',
  },
  {
    number: '03',
    title: 'Celebrate Heritage',
    description: 'To educate and participate in the education and celebration of the Asian heritage.',
  },
];

export default function GoalsSection() {
  return (
    <Section variant="default" spacing="lg">
      <Container>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: { xs: 1.5, sm: 2 }
            }}
          >
            Our <Box component="span" sx={{ color: 'primary.main' }}>Goals</Box>
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              color: 'text.secondary',
              maxWidth: '48rem',
              mx: 'auto'
            }}
          >
            ASC strives to foster college students participation with respect to the following goals
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '64rem', mx: 'auto', display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3, md: 4 } }}>
          {goals.map((goal) => (
            <Paper
              key={goal.number}
              elevation={3}
              sx={{
                position: 'relative',
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: { xs: 3, sm: 4 },
                borderLeft: 4,
                borderColor: 'primary.main',
                transition: 'all 0.3s',
                '&:hover': {
                  boxShadow: 8,
                  '& .goal-badge': {
                    transform: 'scale(1.1) rotate(6deg)',
                  },
                  '& .hover-overlay': {
                    opacity: 1,
                  },
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 1.5, sm: 2, md: 3 } }}>
                {/* Number Badge */}
                <Box
                  className="goal-badge"
                  sx={{
                    width: { xs: 48, sm: 56, md: 64 },
                    height: { xs: 48, sm: 56, md: 64 },
                    background: 'linear-gradient(135deg, var(--old-gold) 0%, var(--old-gold-dark) 100%)',
                    borderRadius: { xs: 2, sm: 3 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: { xs: '1.125rem', sm: '1.25rem' },
                    boxShadow: 3,
                    transition: 'transform 0.3s',
                    flexShrink: 0,
                  }}
                >
                  {goal.number}
                </Box>

                {/* Content */}
                <Box sx={{ flexGrow: 1 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      fontWeight: 700,
                      mb: { xs: 1, sm: 1.5 }
                    }}
                  >
                    {goal.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    {goal.description}
                  </Typography>
                </Box>
              </Box>

              {/* Hover Effect */}
              <Box
                className="hover-overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(212, 175, 55, 0.05), transparent)',
                  borderRadius: { xs: 3, sm: 4 },
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  pointerEvents: 'none',
                }}
              />
            </Paper>
          ))}
        </Box>
      </Container>
    </Section>
  );
}
