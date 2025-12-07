import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Section } from '@/components/ui';
import { ShoppingBag } from 'lucide-react';

export default function MerchPage() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Section variant="accent" spacing="lg">
        <Container>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              textAlign: 'center',
              py: { xs: 6, sm: 8, md: 12 }
            }}
          >
            <Box 
              sx={{ 
                bgcolor: 'primary.main', 
                borderRadius: '50%', 
                width: { xs: 80, sm: 96 },
                height: { xs: 80, sm: 96 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3
              }}
            >
              <ShoppingBag style={{ width: 48, height: 48, color: 'white' }} />
            </Box>
            
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '1.875rem', sm: '2.5rem', md: '3rem', lg: '3.75rem' },
                fontWeight: 700,
                mb: 2
              }}
            >
              ASC <Box component="span" sx={{ color: 'primary.main' }}>Merch</Box>
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 600,
                color: 'text.secondary',
                mb: 2
              }}
            >
              Coming Soon!
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: 'text.secondary',
                maxWidth: '42rem',
                lineHeight: 1.6
              }}
            >
              We're working on bringing you exclusive ASC merchandise! Stay tuned for updates on our social media and check back soon to shop our collection.
            </Typography>
          </Box>
        </Container>
      </Section>
    </Box>
  );
}
