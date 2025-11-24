'use client';

import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui';

interface LeaderboardItemProps {
  rank: number;
  name: string;
  points: number;
  variant?: 'default' | 'prominent';
}

export default function LeaderboardItem({ rank, name, points, variant = 'default' }: LeaderboardItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3,
        rootMargin: '50px 0px 50px 0px',
      }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const isProminent = variant === 'prominent';

  return (
    <div
      ref={itemRef}
      className={`transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <Card 
        variant="elevated" 
        className={`p-6 ${isProminent ? 'ring-2 ring-[var(--old-gold)] shadow-2xl scale-105 border-l-4 border-l-[var(--old-gold)]' : ''}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className={`${isProminent ? 'text-3xl' : 'text-2xl'} font-bold ${isProminent ? 'text-[var(--old-gold)]' : 'text-gray-400'} w-12`}>
              #{rank}
            </div>
            <h3 className={`${isProminent ? 'text-2xl' : 'text-xl'} font-bold text-gray-900`}>{name}</h3>
          </div>
          <div className="text-right">
            <div className={`${isProminent ? 'text-3xl' : 'text-2xl'} font-bold text-[var(--old-gold)]`}>
              {points}
            </div>
            <div className="text-sm text-gray-600">points</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
