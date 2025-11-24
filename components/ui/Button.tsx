import { forwardRef } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', ...props }, ref) => {
    const muiVariant: 'contained' | 'outlined' | 'text' = 
      variant === 'primary' || variant === 'secondary' ? 'contained' :
      variant === 'outline' ? 'outlined' : 'text';
    
    const color = variant === 'secondary' ? 'secondary' : 'primary';

    return (
      <MuiButton
        ref={ref}
        variant={muiVariant}
        color={color}
        size={size}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
