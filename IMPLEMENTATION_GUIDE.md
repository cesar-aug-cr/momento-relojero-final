# Implementation Guide - New Features

## Exit Intent Popup Usage

### Basic Implementation (Already on Homepage)
The exit intent popup is already implemented on the homepage. To add it to other pages:

```tsx
import { ExitIntentPopup } from '@/components/conversion/ExitIntentPopup';

export default function YourPage() {
  return (
    <>
      <ExitIntentPopup lang="es" />
      {/* Your page content */}
    </>
  );
}
```

### Custom Configuration
```tsx
<ExitIntentPopup
  lang="es"
  title="¡Espera! Custom title"
  description="Custom description"
  incentive="🎁 Your custom incentive"
  dismissDays={3}  // Days before showing again
  minTimeOnPage={10}  // Minimum seconds on page
/>
```

---

## Social Proof Components

### Testimonials
```tsx
import { SocialProof } from '@/components/conversion/SocialProof';

<SocialProof variant="testimonials" lang="es" />
```

### Trust Badges
```tsx
<SocialProof variant="trust-badges" lang="es" />
```

### Statistics
```tsx
<SocialProof variant="stats" lang="es" />
```

### Custom Testimonials
```tsx
const myTestimonials = [
  {
    id: '1',
    name: 'Juan Pérez',
    role: 'Coleccionista',
    content: 'Excelente recurso!',
    rating: 5,
    location: 'Madrid'
  }
];

<SocialProof
  variant="testimonials"
  testimonials={myTestimonials}
  lang="es"
/>
```

---

## Structured Data for SEO

### Homepage (Already Implemented)
```tsx
import { StructuredData, getOrganizationSchema, getWebsiteSchema } from '@/lib/structured-data';

const orgSchema = getOrganizationSchema('es');
const webSchema = getWebsiteSchema('es');

<StructuredData data={[orgSchema, webSchema]} />
```

### Article Pages
```tsx
const articleSchema = getArticleSchema({
  title: "Guía Completa de Relojes de Buceo",
  description: "Todo sobre relojes de buceo",
  datePublished: "2024-11-16",
  url: "https://momentorelojero.com/es/dive-watches",
  lang: "es"
});

<StructuredData data={articleSchema} />
```

### FAQ Pages
```tsx
const faqSchema = getFAQSchema([
  {
    question: "¿Qué es un reloj automático?",
    answer: "Un reloj automático se carga con el movimiento de la muñeca..."
  }
]);

<StructuredData data={faqSchema} />
```

---

## Analytics Tracking

### Automatic Tracking (Scroll & Time)
Wrap your app with AnalyticsProvider:

```tsx
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';

<AnalyticsProvider>
  {children}
</AnalyticsProvider>
```

### Manual Event Tracking
```tsx
import { trackCTAClick, trackEvent } from '@/lib/analytics';

// Track button clicks
<button onClick={() => trackCTAClick('subscribe', 'homepage')}>
  Subscribe
</button>

// Track custom events
trackEvent('watch_comparison', {
  watch1: 'Rolex',
  watch2: 'Omega'
});
```

---

## Golden Ratio Design System

### Use CSS Classes
```tsx
<div className="container-golden py-golden-xl">
  <h1 className="text-golden-4xl">Heading</h1>
  <p className="text-golden-base">Body text</p>
</div>
```

### Grid Layouts
```tsx
<div className="golden-grid-2">
  <div>Primary content (61.8%)</div>
  <div>Sidebar (38.2%)</div>
</div>
```

---

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

---

## Testing

```bash
# Development
npm run dev

# Build test
npm run build

# Production preview
npm start
```

---

## Deployment Checklist

- [ ] Update environment variables
- [ ] Test exit intent popup
- [ ] Verify structured data (view page source)
- [ ] Check analytics events (browser console)
- [ ] Test mobile responsiveness
- [ ] Verify dark mode
- [ ] Run Lighthouse audit
- [ ] Test all forms

---

For complete documentation, see `IMPROVEMENTS.md`
