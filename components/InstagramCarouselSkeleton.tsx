import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function InstagramCarouselSkeleton() {
  return (
    <Box sx={{ maxWidth: '72rem', mx: 'auto' }}>
      <Grid container spacing={3}>
        {[1, 2, 3].map((i) => (
          <Grid key={i} size={{ xs: 12, md: 6, lg: 4 }}>
            <Paper elevation={2} sx={{ overflow: 'hidden' }}>
              <Skeleton variant="rectangular" width="100%" height={500} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
