import { forwardRef } from 'react';
import MuiSkeleton, { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

export interface SkeletonProps extends Omit<MuiSkeletonProps, 'variant'> {
  variant?: 'default' | 'circular' | 'text' | 'rectangular';
}

const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ variant = 'default', ...props }, ref) => {
    const muiVariant = variant === 'default' ? 'rectangular' : variant;
    
    return (
      <MuiSkeleton
        ref={ref}
        variant={muiVariant}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
