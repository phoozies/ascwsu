'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ReactGA from 'react-ga4';

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (measurementId) {
      ReactGA.initialize(measurementId);
    }
  }, [measurementId]);

  useEffect(() => {
    if (pathname && measurementId) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      ReactGA.send({ hitType: 'pageview', page: url });
    }
  }, [pathname, searchParams, measurementId]);

  return null;
}
