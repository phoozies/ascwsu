'use client';

import { Users, Sparkles } from 'lucide-react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

interface EmptyStateProps {
  icon?: 'users' | 'sparkles';
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
}

export default function EmptyState({ 
  icon = 'sparkles', 
  title, 
  description, 
  action 
}: EmptyStateProps) {
  const Icon = icon === 'users' ? Users : Sparkles;

  return (
    <Paper elevation={2} sx={{ p: 6, textAlign: 'center' }}>
      <Box sx={{ maxWidth: '28rem', mx: 'auto' }}>
        <Box
          sx={{
            width: 96,
            height: 96,
            backgroundColor: 'grey.100',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3,
          }}
        >
          <Icon style={{ width: 48, height: 48, color: '#9CA3AF' }} />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
          {description}
        </Typography>
        {action && (
          <Button
            variant="contained"
            href={action.href}
            component={Link}
            sx={{
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'var(--old-gold-dark)',
              },
            }}
          >
            {action.label}
          </Button>
        )}
      </Box>
    </Paper>
  );
}
