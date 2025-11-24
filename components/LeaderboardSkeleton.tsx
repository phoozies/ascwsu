import { Card } from '@/components/ui';
import Skeleton from '@/components/ui/Skeleton';

export default function LeaderboardSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(5)].map((_, i) => (
        <Card key={i} variant="elevated" className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 flex-1">
              <Skeleton className="w-12 h-8" />
              <Skeleton className="h-6 w-48" />
            </div>
            <div className="text-right">
              <Skeleton className="h-8 w-16 ml-auto mb-2" />
              <Skeleton className="h-4 w-12 ml-auto" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
