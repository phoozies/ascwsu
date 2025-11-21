'use client';

import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui';

interface LeaderboardItemProps {
  rank: number;
  name: string;
  points: number;
}

export default function LeaderboardItem({ rank, name, points }: LeaderboardItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasAnimated(true);
          } else if (hasAnimated) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
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
  }, [hasAnimated]);

  return (
    <div
      ref={itemRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(rank - 4) * 50}ms` }}
    >
      <Card variant="elevated" className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold text-gray-400 w-12">
              #{rank}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[var(--old-gold)]">
              {points}
            </div>
            <div className="text-sm text-gray-600">points</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
