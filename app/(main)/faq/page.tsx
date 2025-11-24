import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Container, Section } from '@/components/ui';

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I get involved?",
      answer: "Getting involved with ASC is easy! Attend our events throughout the semester, follow us on social media for updates, and consider becoming a paid member to unlock additional benefits. Check out our events calendar and join us at our next gathering!",
    },
    {
      question: "How do I become a Paid Member?",
      answer: "To become a paid member, fill out our membership form and pay the membership fee. As a paid member, you'll earn ASCore points for attending events, get priority for MAASU Conference, receive discounts on events and merchandise, and be eligible for Member of the Month recognition!",
    },
    {
      question: "I have gone to multiple ASC events but my ASCore is not there",
      answer: "If you've attended events but don't see your ASCore points, make sure you're a paid member first - points only accumulate for paid members. If you are a paid member and still don't see your points, please reach out to our board members or send us a message through our contact form. We update the leaderboard regularly, so there may be a short delay.",
    },
    {
      question: "What is Big/Little?",
      answer: "Big/Little is our mentorship program where experienced members (Bigs) are paired with newer members (Littles) to help them navigate ASC, make connections, and feel more involved in the community. It's a great way to build lasting friendships and get the most out of your ASC experience!",
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Section variant="accent" spacing="lg">
        <Container>
          {/* Header */}
          <Box sx={{ maxWidth: '48rem', mx: 'auto', textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '1.875rem', sm: '2.5rem', md: '3rem', lg: '3.75rem' },
                fontWeight: 700,
                mb: { xs: 2, sm: 3 }
              }}
            >
              FAQ <Box component="span" sx={{ color: 'primary.main' }}>&amp; Help</Box>
            </Typography>
          </Box>

          {/* FAQ Cards */}
          <Box sx={{ maxWidth: '64rem', mx: 'auto', display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3 }, mb: { xs: 4, sm: 6 } }}>
            {faqs.map((faq, index) => (
              <Paper 
                key={index} 
                elevation={2}
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: 8,
                  },
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    fontWeight: 700,
                    mb: { xs: 1.5, sm: 2 }
                  }}
                >
                  {faq.question}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  {faq.answer}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Still Have Questions Card */}
          <Box sx={{ maxWidth: '64rem', mx: 'auto', my: { xs: 6, sm: 8, md: 12 } }}>
            <Paper 
              elevation={2}
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: 8,
                },
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    fontWeight: 700,
                    mb: { xs: 1.5, sm: 2 }
                  }}
                >
                  Still have questions?
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  Feel free to reach out to our board members or contact us through our social media channels. We&apos;re here to help!
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Section>
    </Box>
  );
}
