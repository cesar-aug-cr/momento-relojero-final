'use client';

import { FC, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initScrollTracking, initTimeTracking } from '@/lib/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

/**
 * Analytics Provider Component
 * Automatically tracks scroll depth and time on page for all pages
 */
export const AnalyticsProvider: FC<AnalyticsProviderProps> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize scroll tracking
    const cleanupScroll = initScrollTracking();

    // Initialize time tracking
    const cleanupTime = initTimeTracking(pathname);

    // Cleanup on unmount
    return () => {
      if (cleanupScroll) cleanupScroll();
      if (cleanupTime) cleanupTime();
    };
  }, [pathname]);

  return <>{children}</>;
};

AnalyticsProvider.displayName = 'AnalyticsProvider';
