// Analytics utility functions for tracking conversions and events

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Core event tracking function
 * Sends events to Google Analytics 4, Facebook Pixel, and console in development
 */
export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, data);
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, data);
  }
};

/**
 * Track page views for single-page applications
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_path: url,
    });
  }
};

/**
 * Track newsletter signup progress through multi-step form
 */
export const trackNewsletterSignup = (step: number, data?: Record<string, any>) => {
  trackEvent('newsletter_signup', {
    step,
    step_name: getStepName(step),
    ...data,
  });
};

/**
 * Track form abandonment for recovery campaigns
 */
export const trackFormAbandonment = (formName: string, step: number, data?: Record<string, any>) => {
  trackEvent('form_abandonment', {
    form_name: formName,
    step,
    step_name: getStepName(step),
    ...data,
  });
};

/**
 * Track CTA button clicks with location context
 */
export const trackCTAClick = (ctaName: string, location: string, data?: Record<string, any>) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    location,
    ...data,
  });
};

/**
 * Track scroll depth to measure content engagement
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    percentage,
    milestone: getMilestone(percentage),
  });
};

/**
 * Track time on page for engagement metrics
 */
export const trackTimeOnPage = (seconds: number, pagePath: string) => {
  trackEvent('time_on_page', {
    seconds,
    minutes: Math.floor(seconds / 60),
    page_path: pagePath,
    engagement_tier: getEngagementTier(seconds),
  });
};

/**
 * Track exit intent popup interactions
 */
export const trackExitIntent = (action: 'shown' | 'dismissed' | 'converted', data?: Record<string, any>) => {
  trackEvent(`exit_intent_${action}`, data);
};

/**
 * Track social proof element views
 */
export const trackSocialProof = (type: 'testimonial' | 'stat' | 'badge', data?: Record<string, any>) => {
  trackEvent('social_proof_view', {
    proof_type: type,
    ...data,
  });
};

/**
 * Track internal link clicks for navigation analysis
 */
export const trackInternalNavigation = (fromPage: string, toPage: string, linkText: string) => {
  trackEvent('internal_navigation', {
    from_page: fromPage,
    to_page: toPage,
    link_text: linkText,
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, context: string) => {
  trackEvent('external_link_click', {
    url,
    context,
    domain: new URL(url).hostname,
  });
};

/**
 * Track video engagement
 */
export const trackVideoEngagement = (
  action: 'play' | 'pause' | 'complete' | 'progress',
  videoTitle: string,
  data?: Record<string, any>
) => {
  trackEvent('video_engagement', {
    action,
    video_title: videoTitle,
    ...data,
  });
};

/**
 * Track search queries for content optimization
 */
export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent('site_search', {
    search_term: query,
    results_count: resultsCount,
  });
};

/**
 * Track conversion funnel steps
 */
export const trackFunnelStep = (
  funnelName: string,
  stepNumber: number,
  stepName: string,
  data?: Record<string, any>
) => {
  trackEvent('funnel_step', {
    funnel_name: funnelName,
    step_number: stepNumber,
    step_name: stepName,
    ...data,
  });
};

/**
 * Track ecommerce events (if selling products)
 */
export const trackEcommerce = (action: 'view_item' | 'add_to_cart' | 'purchase', data: Record<string, any>) => {
  trackEvent(action, {
    currency: 'USD',
    ...data,
  });
};

// Helper functions

function getStepName(step: number): string {
  const stepNames: Record<number, string> = {
    0: 'email_capture',
    1: 'profile_info',
    2: 'interests',
    3: 'completion',
  };
  return stepNames[step] || `step_${step}`;
}

function getMilestone(percentage: number): string {
  if (percentage >= 90) return '90%';
  if (percentage >= 75) return '75%';
  if (percentage >= 50) return '50%';
  if (percentage >= 25) return '25%';
  return '0%';
}

function getEngagementTier(seconds: number): string {
  if (seconds >= 300) return 'highly_engaged'; // 5+ minutes
  if (seconds >= 120) return 'engaged'; // 2+ minutes
  if (seconds >= 30) return 'moderate'; // 30+ seconds
  return 'low';
}

/**
 * Initialize scroll depth tracking
 */
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  let maxScroll = 0;
  const milestones = [25, 50, 75, 90];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    if (scrolled > maxScroll) {
      maxScroll = scrolled;

      milestones.forEach((milestone) => {
        if (scrolled >= milestone && !tracked.has(milestone)) {
          tracked.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Initialize time on page tracking
 */
export const initTimeTracking = (pagePath: string) => {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();
  let tracked30s = false;
  let tracked2m = false;

  const checkTime = () => {
    const elapsed = (Date.now() - startTime) / 1000;

    if (elapsed >= 30 && !tracked30s) {
      tracked30s = true;
      trackTimeOnPage(30, pagePath);
    }

    if (elapsed >= 120 && !tracked2m) {
      tracked2m = true;
      trackTimeOnPage(120, pagePath);
    }
  };

  const interval = setInterval(checkTime, 5000);

  const handleUnload = () => {
    const totalTime = (Date.now() - startTime) / 1000;
    if (totalTime >= 5) {
      trackTimeOnPage(totalTime, pagePath);
    }
  };

  window.addEventListener('beforeunload', handleUnload);

  return () => {
    clearInterval(interval);
    window.removeEventListener('beforeunload', handleUnload);
  };
};
