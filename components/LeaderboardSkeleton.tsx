import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Paper from '@mui/material/Paper';

export default function LeaderboardSkeleton() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <Paper key={i} elevation={2} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1 }}>
              <Skeleton width={48} height={32} />
              <Skeleton width={192} height={24} />
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Skeleton width={64} height={32} sx={{ ml: 'auto', mb: 1 }} />
              <Skeleton width={48} height={16} sx={{ ml: 'auto' }} />
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
