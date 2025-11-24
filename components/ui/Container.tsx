import { forwardRef } from 'react';
import MuiContainer, { ContainerProps as MuiContainerProps } from '@mui/material/Container';

export interface ContainerProps extends Omit<MuiContainerProps, 'maxWidth'> {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'lg', ...props }, ref) => {
    const maxWidth = 
      size === 'sm' ? 'md' :
      size === 'md' ? 'lg' :
      size === 'lg' ? 'xl' : false;

    return (
      <MuiContainer
        ref={ref}
        maxWidth={maxWidth}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export default Container;
