import { forwardRef } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export interface SectionProps extends BoxProps<'section'> {
  variant?: 'default' | 'accent' | 'dark';
  spacing?: 'sm' | 'md' | 'lg';
  fullHeight?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ variant = 'default', spacing = 'lg', fullHeight = true, sx, children, ...props }, ref) => {
    const bgColor = 
      variant === 'default' ? 'background.default' :
      variant === 'accent' ? 'grey.50' : 'grey.900';
    
    const textColor = variant === 'dark' ? 'white' : 'text.primary';
    
    const py = spacing === 'sm' ? { xs: 6, lg: 8 } :
              spacing === 'md' ? { xs: 8, lg: 10 } :
              { xs: 10, lg: 14 };

    return (
      <Box
        ref={ref}
        component="section"
        sx={{
          bgcolor: bgColor,
          color: textColor,
          ...(fullHeight ? {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            scrollSnapAlign: 'start'
          } : {
            py
          }),
          ...sx
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Section.displayName = 'Section';

export default Section;
