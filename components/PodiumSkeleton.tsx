import Skeleton from '@/components/ui/Skeleton';

export default function PodiumSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {/* 2nd Place */}
      <div className="order-2 md:order-1">
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform md:translate-y-8">
          <Skeleton variant="circular" className="w-16 h-16 mx-auto mb-4" />
          <Skeleton className="h-8 w-12 mx-auto mb-2" />
          <Skeleton className="h-6 w-32 mx-auto mb-2" />
          <Skeleton className="h-8 w-20 mx-auto" />
        </div>
      </div>

      {/* 1st Place */}
      <div className="order-1 md:order-2">
        <div className="bg-gradient-to-br from-[var(--old-gold)] to-yellow-600 rounded-2xl shadow-2xl p-6 text-center transform scale-105">
          <Skeleton variant="circular" className="w-20 h-20 mx-auto mb-4 bg-white/30" />
          <Skeleton className="h-10 w-12 mx-auto mb-2 bg-white/30" />
          <Skeleton className="h-7 w-36 mx-auto mb-2 bg-white/30" />
          <Skeleton className="h-9 w-24 mx-auto bg-white/30" />
        </div>
      </div>

      {/* 3rd Place */}
      <div className="order-3">
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform md:translate-y-12">
          <Skeleton variant="circular" className="w-16 h-16 mx-auto mb-4" />
          <Skeleton className="h-8 w-12 mx-auto mb-2" />
          <Skeleton className="h-6 w-32 mx-auto mb-2" />
          <Skeleton className="h-8 w-20 mx-auto" />
        </div>
      </div>
    </div>
  );
}
