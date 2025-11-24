import { forwardRef } from 'react';
import Paper, { PaperProps } from '@mui/material/Paper';
import Box from '@mui/material/Box';

export interface CardProps extends Omit<PaperProps, 'variant'> {
  variant?: 'default' | 'bordered' | 'elevated';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', sx, children, ...props }, ref) => {
    const elevation = variant === 'elevated' ? 2 : variant === 'bordered' ? 0 : 1;
    const borderStyle = variant === 'bordered' ? '2px solid' : 'none';

    return (
      <Paper
        ref={ref}
        elevation={elevation}
        sx={{
          p: { xs: 2, sm: 3 },
          transition: 'all 0.2s',
          border: borderStyle,
          borderColor: 'grey.200',
          ...sx
        }}
        {...props}
      >
        <Box>{children}</Box>
      </Paper>
    );
  }
);

Card.displayName = 'Card';

export default Card;
