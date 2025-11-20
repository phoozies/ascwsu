import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'accent' | 'dark';
  spacing?: 'sm' | 'md' | 'lg';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', spacing = 'lg', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white',
      accent: 'bg-gray-50',
      dark: 'bg-gray-900 text-white',
    };
    
    const spacings = {
      sm: 'py-12',
      md: 'py-16 lg:py-20',
      lg: 'py-20 lg:py-28',
    };

    return (
      <section
        ref={ref}
        className={cn(variants[variant], spacings[spacing], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
