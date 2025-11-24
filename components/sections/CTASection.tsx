import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Section } from '@/components/ui';

export default function CTASection() {
  return (
    <Section variant="default" spacing="lg">
      <Container>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 6,
            background: 'linear-gradient(to right, var(--old-gold), var(--old-gold-dark))',
            p: { xs: 6, md: 8 },
            textAlign: 'center',
            color: 'white',
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 256,
              height: 256,
              backgroundColor: 'white',
              opacity: 0.05,
              borderRadius: '50%',
              transform: 'translate(50%, -50%)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 256,
              height: 256,
              backgroundColor: 'white',
              opacity: 0.05,
              borderRadius: '50%',
              transform: 'translate(-50%, 50%)',
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 10 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3rem' },
                fontWeight: 700,
                mb: 2
              }}
            >
              Ready to Join ASC?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 4,
                maxWidth: '42rem',
                mx: 'auto',
                opacity: 0.9
              }}
            >
              Become part of a vibrant community dedicated to celebrating Asian culture 
              and building lasting friendships at Wichita State University.
            </Typography>
            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: 'center'
              }}
            >
              <Button 
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'var(--old-gold)',
                  '&:hover': {
                    backgroundColor: 'grey.100',
                  },
                }}
              >
                Apply for Membership
              </Button>
              <Button 
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'var(--old-gold)',
                    borderColor: 'white',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
