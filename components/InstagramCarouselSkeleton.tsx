import { Card } from '@/components/ui';
import Skeleton from '@/components/ui/Skeleton';

export default function InstagramCarouselSkeleton() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} variant="elevated" className="overflow-hidden">
            <Skeleton className="w-full h-[500px]" />
          </Card>
        ))}
      </div>
    </div>
  );
}
