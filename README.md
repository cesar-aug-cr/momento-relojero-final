# Momento Relojero

A comprehensive, modern website about watches and watch collecting built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### Design & UX
- **Golden Ratio Design System**: All spacing, typography, and layout proportions follow the golden ratio (φ = 1.618)
- **Dark Mode Support**: Beautiful dark theme with smooth transitions
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Framer Motion animations throughout
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation

### Content Sections
- **Hero Section**: Engaging introduction with gradient background and stats
- **About**: Information about the site and mission
- **Watch Types**: Detailed comparison of mechanical, automatic, quartz, and smartwatches
- **Watch Brands**: Categorized by luxury, affordable, and heritage brands
- **Resources**: Care guides, buying guides, and additional educational content
- **Newsletter**: Multi-step subscription form with validation

### Technical Features
- **Next.js 14**: Latest App Router with React Server Components
- **TypeScript**: Full type safety throughout
- **Tailwind CSS**: Utility-first styling with custom golden ratio tokens
- **Multi-Step Form**: Newsletter signup with localStorage persistence and analytics
- **Analytics Ready**: Google Analytics 4 and Facebook Pixel integration
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Performance**: Optimized for Core Web Vitals

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. (Optional) Add your analytics IDs to `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
NEXT_PUBLIC_FB_PIXEL_ID=your-fb-pixel-id
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── newsletter/          # Newsletter subscription endpoint
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles with golden ratio system
├── components/
│   ├── analytics/               # Google Analytics, Facebook Pixel
│   ├── conversion/              # Multi-step newsletter form
│   ├── sections/                # Page sections (Hero, About, etc.)
│   └── ui/                      # Reusable UI components
├── hooks/
│   ├── useLocalStorage.ts       # localStorage persistence
│   └── useMultiStepForm.ts      # Multi-step form logic
├── lib/
│   ├── analytics.ts             # Analytics tracking utilities
│   ├── data.ts                  # Watch data and content
│   ├── utils.ts                 # General utilities
│   └── validations.ts           # Zod schemas for forms
└── types/
    └── index.ts                 # TypeScript type definitions
```

## Golden Ratio Design System

The entire design follows the golden ratio (1.618):

### Typography Scale
- Body: 1rem (16px)
- H5: 1.618rem (25.89px)
- H4: 2.618rem (41.89px)
- H3: 4.236rem (67.78px)

### Spacing Scale
- xs: 0.382rem (6.11px)
- sm: 0.618rem (9.89px)
- md: 1rem (16px)
- lg: 1.618rem (25.89px)
- xl: 2.618rem (41.89px)
- 2xl: 4.236rem (67.78px)
- 3xl: 6.854rem (109.66px)

### Layout
- Two-column: 61.8% / 38.2%
- Container max-width: 1618px

## Multi-Step Newsletter Form

The newsletter form implements best practices:
- **3 Steps**: Personal info → Interests → Preferences
- **Progressive Disclosure**: Only shows relevant fields
- **Early Email Capture**: Collects email in step 1
- **localStorage Persistence**: Saves progress automatically
- **Form Abandonment Tracking**: Monitors incomplete submissions
- **Validation**: Zod schemas with inline error messages
- **Accessibility**: Full keyboard navigation and screen reader support

## Analytics Integration

### Google Analytics 4
Add your measurement ID to `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Facebook Pixel
Add your pixel ID to `.env.local`:
```
NEXT_PUBLIC_FB_PIXEL_ID=your-pixel-id
```

### Tracked Events
- Page views
- Newsletter signups (per step)
- Form abandonment
- CTA clicks

## Customization

### Content
Edit watch data in `src/lib/data.ts`:
- `watchTypes`: Types of watches
- `watchBrands`: Brand information
- `watchMovements`: Movement types
- `complications`: Watch complications
- `careGuides`: Maintenance tips
- `buyingGuides`: Purchase recommendations

### Styling
Modify the design system in `tailwind.config.ts` and `src/app/globals.css`

### Theme Colors
Update the color palette in `tailwind.config.ts`:
```typescript
colors: {
  gold: { ... },
  slate: { ... },
}
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Other Platforms
Build the project:
```bash
npm run build
```

The output will be in `.next/` directory. Deploy as a Node.js application.

## Performance Optimization

- Images: Use Next.js `<Image>` component with optimization
- Code Splitting: Automatic with Next.js App Router
- Fonts: Optimized with `next/font`
- CSS: Purged unused styles with Tailwind
- Analytics: Loaded with `afterInteractive` strategy

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Accessibility

- Semantic HTML5 elements
- ARIA labels and descriptions
- Keyboard navigation
- Focus indicators
- Screen reader tested
- Color contrast ratios meet WCAG 2.1 AA

## Future Enhancements

Potential features to add:
- Blog section with CMS integration
- User authentication
- Watch collection tracker
- Community forums
- Watch comparison tool
- Price tracking
- Dealer locator

## Contributing

This is a showcase project. Feel free to fork and customize for your own use.

## License

MIT License - feel free to use this project as a template for your own websites.

## Support

For issues or questions, please open an issue in the repository.

---

Built with passion for horology and modern web development.
