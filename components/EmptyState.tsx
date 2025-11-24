'use client';

import { Users, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui';

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
    <Card variant="elevated" className="p-12 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {action && (
          <a
            href={action.href}
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--old-gold)] text-white font-semibold rounded-lg hover:bg-[var(--old-gold-dark)] transition-colors"
          >
            {action.label}
          </a>
        )}
      </div>
    </Card>
  );
}
