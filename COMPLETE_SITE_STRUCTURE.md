# Momento Relojero - Complete Multi-Page Website Structure

## Overview

This document outlines the complete, production-ready multi-page website structure for Momento Relojero, a comprehensive educational resource for watch enthusiasts.

## Design Philosophy

### Visual Design
- **Color Palette**: Deep navy/charcoal (#1A1A2E), luxurious gold (#D4AF37), warm browns and coppers
- **Typography**: Serif for headings (Playfair Display style), Clean sans-serif for body (Inter/Montserrat)
- **Golden Ratio**: Applied throughout (typography scale, layout proportions, spacing)
- **Components**: Glass morphism, hover effects, shadows, premium feel

### Navigation
- **Desktop**: Mega menu with dropdown sections showing all subsections
- **Mobile**: Collapsible accordion menu with clear hierarchy
- **Breadcrumbs**: On all pages for easy navigation
- **Header**: Fixed header with logo, mega menu, theme toggle

## Complete Page Structure

### ✅ COMPLETED PAGES

#### 1. Homepage (/)
- Location: `src/app/(marketing)/page.tsx`
- Status: Exists (needs Header component integration)
- Features: Hero, overview of all sections, featured content

#### 2. Enhanced Components Created
- `src/components/ui/PageHero.tsx` - Premium hero sections
- `src/components/ui/Breadcrumb.tsx` - Navigation breadcrumbs
- `src/components/ui/ContentLayout.tsx` - Golden ratio layouts with sidebar support
- `src/components/ui/ComparisonTable.tsx` - Feature comparison tables
- `src/components/ui/Timeline.tsx` - Historical timeline component
- `src/components/layout/MegaMenu.tsx` - Desktop mega menu navigation
- `src/components/layout/Header.tsx` - New premium header with mega menu

#### 3. Watch 101 Section

**Main Page** (`/watch-101`)
- Location: `src/app/(marketing)/watch-101/page.tsx`
- Status: ✅ EXISTS (original version, could be replaced with new design)

**Subsection Pages** - ✅ ALL CREATED:
- `/watch-101/anatomy` - Complete interactive anatomy guide
- `/watch-101/terminology` - Searchable glossary with all terms
- `/watch-101/water-resistance` - Comprehensive guide with comparison table
- `/watch-101/why-wear` - Compelling article on watch relevance

#### 4. Movements Section

**Main Page** (`/movements`)
- Location: `src/app/(marketing)/movements/page.tsx`
- Status: ✅ CREATED - Overview with comparison table

**Subsection Pages** - NEED TO CREATE:
- `/movements/quartz` - How quartz works, pros/cons
- `/movements/manual` - Manual winding explained
- `/movements/automatic` - Automatic movements deep dive
- `/movements/other` - Solar, Kinetic, Spring Drive

#### 5. Watch Types Section

**Main Page** (`/watch-types`)
- Location: `src/app/(marketing)/watch-types/page.tsx`
- Status: EXISTS (needs premium redesign)

**Individual Type Pages** - NEED TO CREATE:
- `/watch-types/dive` - Dive watches complete guide
- `/watch-types/dress` - Dress watches guide
- `/watch-types/chronograph` - Chronograph guide
- `/watch-types/pilot` - Pilot watches guide
- `/watch-types/field` - Field watches guide
- `/watch-types/gmt` - GMT watches guide
- `/watch-types/digital` - Digital & smartwatches guide

#### 6. Complications Section

**Main Page** (`/complications`)
- Location: `src/app/(marketing)/complications/page.tsx` (currently `/watch-features`)
- Status: EXISTS (needs rename and redesign)

**Subsection Pages** - NEED TO CREATE:
- `/complications/simple` - Date, Day-Date, Power Reserve
- `/complications/popular` - Chronograph, GMT, Moonphase, Annual Calendar
- `/complications/grand` - Perpetual Calendar, Tourbillon, Minute Repeater

#### 7. Brands Section

**Main Page** (`/brands`)
- Location: `src/app/(marketing)/brands/page.tsx` (currently `/world-of-watches`)
- Status: EXISTS (needs rename and redesign)

**Subsection Pages** - NEED TO CREATE:
- `/brands/history` - Timeline of horology with key moments
- `/brands/holy-trinity` - Patek Philippe, Audemars Piguet, Vacheron Constantin
- `/brands/luxury` - Rolex, Omega, Cartier, IWC, Jaeger-LeCoultre
- `/brands/entry-swiss` - Tissot, Hamilton, Longines, Mido
- `/brands/japanese` - Seiko, Citizen, Casio, Orient
- `/brands/microbrands` - Independent watchmakers

#### 8. Collecting Section

**Main Page** (`/collecting`)
- Location: `src/app/(marketing)/collecting/page.tsx` (currently `/collectors-corner`)
- Status: EXISTS (needs rename and redesign)

**Subsection Pages** - NEED TO CREATE:
- `/collecting/start` - 5-step guide to starting collection
- `/collecting/buying-guide` - New vs Pre-owned vs Vintage
- `/collecting/authenticity` - Spotting fakes guide
- `/collecting/reference-numbers` - Understanding reference numbers

#### 9. Care Section

**Main Page** (`/care`)
- Location: `src/app/(marketing)/care/page.tsx` (currently `/watch-care`)
- Status: EXISTS (needs redesign)

**Subsection Pages** - NEED TO CREATE:
- `/care/cleaning` - Safe cleaning methods
- `/care/servicing` - Why, when, and cost of servicing
- `/care/storage` - Watch boxes and winders
- `/care/straps` - DIY strap changing guide

#### 10. Blog

**Main Page** (`/blog`)
- Location: `src/app/(marketing)/blog/page.tsx`
- Status: EXISTS (needs premium redesign)

**Sample Blog Posts** - NEED TO CREATE:
- `/blog/[slug]` - Individual blog post page template
- 3-5 sample articles on various topics

### 🎨 Data Files Created

#### `src/lib/watch-data.ts`
Comprehensive data file containing:
- **WATCH_BRANDS** (16 brands): Holy Trinity, Luxury, Entry Swiss, Japanese
- **MOVEMENTS** (6 types): Quartz, Manual, Automatic, Solar, Kinetic, Spring Drive
- **WATCH_TYPES** (7 types): Dive, Dress, Chronograph, Pilot, Field, GMT, Digital
- **COMPLICATIONS** (11 items): Simple, Popular, Grand complications
- **WATCH_TERMINOLOGY** (28 terms): Essential vocabulary

## Implementation Priority

### Phase 1: Critical Infrastructure ✅ COMPLETED
1. ✅ Create comprehensive data files
2. ✅ Build reusable premium components
3. ✅ Create enhanced navigation with mega menu
4. ✅ Update global styles and typography

### Phase 2: Core Content Pages ⏳ IN PROGRESS
5. ✅ Complete Watch 101 subsection pages
6. ✅ Create movements overview page
7. ⏳ Create individual movement pages (quartz, manual, automatic, other)
8. ⏳ Create individual watch type pages (7 pages)

### Phase 3: Specialized Content 📋 PENDING
9. Create complications subsection pages (3 pages)
10. Create brand subsection pages (6 pages)
11. Create collecting subsection pages (4 pages)
12. Create care subsection pages (4 pages)

### Phase 4: Final Touches 📋 PENDING
13. Create blog post template and sample articles
14. Update main section overview pages with new design
15. Update homepage to use new Header component
16. Add metadata and SEO to all pages
17. Test responsive design on all pages
18. Create sitemap with all new pages

## Template for Remaining Pages

### Movement Page Template

```typescript
import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContentLayout } from '@/components/ui/ContentLayout';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { MOVEMENTS } from '@/lib/watch-data';

export const metadata: Metadata = {
  title: '[Movement Type] Movements | Momento Relojero',
  description: '[Description of movement type]',
};

export default function MovementTypePage() {
  const movementData = MOVEMENTS.find(m => m.type === '[movement-type]');

  return (
    <>
      <PageHero
        title="[Movement Type] Movements"
        subtitle="How Watches Work"
        description="[Hero description]"
        size="medium"
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <Breadcrumb
          items={[
            { label: 'Movements', href: '/movements' },
            { label: '[Movement Type]' }
          ]}
        />
      </div>

      <ContentLayout
        sidebar={
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
            {movementData && (
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-600 mb-1">Accuracy</div>
                  <div className="font-bold text-slate-900">{movementData.accuracy}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Maintenance</div>
                  <div className="font-bold text-slate-900">{movementData.maintenance}</div>
                </div>
              </div>
            )}
          </div>
        }
      >
        <div>
          {/* Page content with rich text, images, comparisons */}
        </div>
      </ContentLayout>
    </>
  );
}
```

### Watch Type Page Template

```typescript
import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContentLayout } from '@/components/ui/ContentLayout';
import { WATCH_TYPES } from '@/lib/watch-data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '[Watch Type] Watches Complete Guide | Momento Relojero',
  description: '[Description]',
};

export default function WatchTypePage() {
  const watchType = WATCH_TYPES.find(w => w.slug === '[slug]');

  return (
    <>
      <PageHero
        title={watchType?.name || '[Watch Type] Watches'}
        subtitle="Watch Types"
        description={watchType?.description}
        size="medium"
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <Breadcrumb
          items={[
            { label: 'Watch Types', href: '/watch-types' },
            { label: watchType?.name || '[Watch Type]' }
          ]}
        />
      </div>

      <ContentLayout
        sidebar={
          <div>
            <h3 className="font-bold text-lg mb-4">Key Features</h3>
            {watchType && (
              <ul className="space-y-2">
                {watchType.characteristics.map((char, idx) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <h4 className="font-bold text-sm mb-2">Price Range</h4>
              <p className="text-slate-700">{watchType?.priceRange}</p>
            </div>
          </div>
        }
      >
        <div>
          {/* Rich content about the watch type */}
        </div>
      </ContentLayout>
    </>
  );
}
```

### Brand Page Template

```typescript
import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContentLayout } from '@/components/ui/ContentLayout';
import { WATCH_BRANDS } from '@/lib/watch-data';

export default function BrandCategoryPage() {
  const brands = WATCH_BRANDS.filter(b => b.category === '[category]');

  return (
    <>
      <PageHero
        title="[Category Title]"
        subtitle="World of Watches"
        description="[Description]"
        size="medium"
      />

      <ContentLayout>
        <div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {brands.map((brand) => (
              <div key={brand.id} className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-amber-500 transition-all hover:shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{brand.name}</h3>
                <div className="text-sm text-slate-600 mb-4">
                  Founded {brand.founded} • {brand.origin}
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {brand.description}
                </p>
                <div className="mb-4">
                  <div className="text-sm font-bold text-slate-900 mb-2">Notable Models:</div>
                  <div className="flex flex-wrap gap-2">
                    {brand.notable.map((model, idx) => (
                      <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  <strong>Price Range:</strong> {brand.priceRange}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
```

## Key Files Reference

### Data Files
- `src/lib/watch-data.ts` - All watch data (brands, movements, types, complications)
- `src/lib/content-data.ts` - Existing content (may need updating)

### Components
- `src/components/ui/PageHero.tsx` - Premium hero sections
- `src/components/ui/Breadcrumb.tsx` - Breadcrumb navigation
- `src/components/ui/ContentLayout.tsx` - Layout with golden ratio
- `src/components/ui/ComparisonTable.tsx` - Comparison tables
- `src/components/ui/Timeline.tsx` - Timeline for history pages
- `src/components/layout/Header.tsx` - New header with mega menu
- `src/components/layout/MegaMenu.tsx` - Desktop mega menu

### Layout
- `src/app/layout.tsx` - Root layout (needs Header component update)

## Next Steps

1. **Update Layout**: Replace Navigation with Header component in `src/app/layout.tsx`
2. **Create Movement Pages**: Use template to create quartz, manual, automatic, other pages
3. **Create Watch Type Pages**: Create 7 individual watch type pages using data
4. **Create Brand Pages**: Create 6 brand category pages
5. **Create Collecting Pages**: Create 4 collecting guide pages
6. **Create Care Pages**: Create 4 care guide pages
7. **Update Main Pages**: Redesign main section overview pages
8. **Blog Posts**: Create blog post template and 3-5 sample articles
9. **Testing**: Test all pages responsive, navigation, SEO

## Design Consistency Checklist

For every page, ensure:
- ✅ Uses PageHero component for hero section
- ✅ Includes Breadcrumb for navigation
- ✅ Uses ContentLayout for proper proportions
- ✅ Has proper Metadata for SEO
- ✅ Includes sidebar with relevant quick links/info
- ✅ Has call-to-action sections linking to related content
- ✅ Uses consistent typography and spacing (Golden Ratio)
- ✅ Includes rich, educational content (500+ words)
- ✅ Has responsive design mobile-first
- ✅ Includes proper heading hierarchy (H1 > H2 > H3)

## URL Structure

```
/                              # Homepage
/watch-101                     # Watch 101 main
  /anatomy                     # ✅ Created
  /terminology                 # ✅ Created
  /water-resistance            # ✅ Created
  /why-wear                    # ✅ Created
/movements                     # ✅ Created
  /quartz                      # Need to create
  /manual                      # Need to create
  /automatic                   # Need to create
  /other                       # Need to create
/watch-types                   # Exists
  /dive                        # Need to create
  /dress                       # Need to create
  /chronograph                 # Need to create
  /pilot                       # Need to create
  /field                       # Need to create
  /gmt                         # Need to create
  /digital                     # Need to create
/complications                 # Exists (rename from watch-features)
  /simple                      # Need to create
  /popular                     # Need to create
  /grand                       # Need to create
/brands                        # Exists (rename from world-of-watches)
  /history                     # Need to create
  /holy-trinity                # Need to create
  /luxury                      # Need to create
  /entry-swiss                 # Need to create
  /japanese                    # Need to create
  /microbrands                 # Need to create
/collecting                    # Exists (rename from collectors-corner)
  /start                       # Need to create
  /buying-guide                # Need to create
  /authenticity                # Need to create
  /reference-numbers           # Need to create
/care                          # Exists (rename from watch-care)
  /cleaning                    # Need to create
  /servicing                   # Need to create
  /storage                     # Need to create
  /straps                      # Need to create
/blog                          # Exists
  /[slug]                      # Individual blog posts
```

## Total Page Count

- **Main Pages**: 9
- **Watch 101**: 4 subsections ✅
- **Movements**: 4 subsections (1 created)
- **Watch Types**: 7 subsections
- **Complications**: 3 subsections
- **Brands**: 6 subsections
- **Collecting**: 4 subsections
- **Care**: 4 subsections
- **Blog**: Template + 3-5 articles

**Total: ~45+ pages of rich, educational content**

## Status Summary

- ✅ **Infrastructure**: Complete (components, data, navigation)
- ✅ **Watch 101**: Complete (4/4 pages)
- ⏳ **Movements**: 25% complete (1/4 pages)
- ⏳ **Watch Types**: 0% complete (0/7 pages)
- ⏳ **Complications**: 0% complete (0/3 pages)
- ⏳ **Brands**: 0% complete (0/6 pages)
- ⏳ **Collecting**: 0% complete (0/4 pages)
- ⏳ **Care**: 0% complete (0/4 pages)
- ⏳ **Blog**: 0% complete

**Overall Progress: ~25% complete**

The foundation is solid. Continue creating pages using the templates and data provided. Each page should follow the same high-quality pattern with rich content, proper components, and consistent design.
