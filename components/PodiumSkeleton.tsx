import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function PodiumSkeleton() {
  return (
    <Grid container spacing={3} sx={{ maxWidth: '48rem', mx: 'auto' }}>
      {/* 2nd Place */}
      <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 2, md: 1 } }}>
        <Paper 
          elevation={8} 
          sx={{ 
            borderRadius: 4, 
            p: 3, 
            textAlign: 'center',
            transform: { md: 'translateY(32px)' }
          }}
        >
          <Skeleton variant="circular" width={64} height={64} sx={{ mx: 'auto', mb: 2 }} />
          <Skeleton height={32} width={48} sx={{ mx: 'auto', mb: 1 }} />
          <Skeleton height={24} width={128} sx={{ mx: 'auto', mb: 1 }} />
          <Skeleton height={32} width={80} sx={{ mx: 'auto' }} />
        </Paper>
      </Grid>

      {/* 1st Place */}
      <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 1, md: 2 } }}>
        <Paper 
          elevation={12}
          sx={{ 
            background: 'linear-gradient(135deg, var(--old-gold) 0%, #ca8a04 100%)',
            borderRadius: 4, 
            p: 3, 
            textAlign: 'center',
            transform: 'scale(1.05)'
          }}
        >
          <Skeleton variant="circular" width={80} height={80} sx={{ mx: 'auto', mb: 2, bgcolor: 'rgba(255,255,255,0.3)' }} />
          <Skeleton height={40} width={48} sx={{ mx: 'auto', mb: 1, bgcolor: 'rgba(255,255,255,0.3)' }} />
          <Skeleton height={28} width={144} sx={{ mx: 'auto', mb: 1, bgcolor: 'rgba(255,255,255,0.3)' }} />
          <Skeleton height={36} width={96} sx={{ mx: 'auto', bgcolor: 'rgba(255,255,255,0.3)' }} />
        </Paper>
      </Grid>

      {/* 3rd Place */}
      <Grid size={{ xs: 12, md: 4 }} sx={{ order: 3 }}>
        <Paper 
          elevation={8}
          sx={{ 
            borderRadius: 4, 
            p: 3, 
            textAlign: 'center',
            transform: { md: 'translateY(48px)' }
          }}
        >
          <Skeleton variant="circular" width={64} height={64} sx={{ mx: 'auto', mb: 2 }} />
          <Skeleton height={32} width={48} sx={{ mx: 'auto', mb: 1 }} />
          <Skeleton height={24} width={128} sx={{ mx: 'auto', mb: 1 }} />
          <Skeleton height={32} width={80} sx={{ mx: 'auto' }} />
        </Paper>
      </Grid>
    </Grid>
  );
}
