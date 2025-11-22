# Next Steps Guide - Completing the Momento Relojero Redesign

This guide provides step-by-step instructions for completing the redesign of all remaining pages.

---

## Quick Reference: What's Done

✅ **Complete:**
- i18n infrastructure (dictionaries for es, en, fr)
- Homepage fully redesigned and internationalized
- ExitIntentPopup with i18n
- SocialProof component with i18n
- Golden Ratio CSS utilities
- Structured data for SEO
- Build configuration and optimization

⏳ **Remaining:**
- 8 main section landing pages
- ~20 subsection pages
- Header/Footer with language switcher
- Newsletter page update
- Dictionary expansion for all pages

---

## Priority 1: Main Section Landing Pages

### Template Pattern to Follow

Each section landing page should follow this structure:

```typescript
// Example: src/app/[lang]/(marketing)/watch-101/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';
// ... other imports

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.sections.watch101.meta.title,
    description: dict.sections.watch101.meta.description,
    // ... other metadata
  };
}

export default async function Watch101Page({
  params
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      {/* Page content using dict.sections.watch101.* */}
    </div>
  );
}
```

### Required Dictionary Structure for Each Section

Add to each language dictionary file:

```json
{
  "sections": {
    "watch101": {
      "meta": {
        "title": "...",
        "description": "..."
      },
      "hero": {
        "title": "...",
        "subtitle": "...",
        "description": "..."
      },
      "subsections": [
        {
          "title": "...",
          "description": "...",
          "href": "/watch-101/anatomy"
        }
      ]
    }
  }
}
```

---

## Section-by-Section Implementation Guide

### 1. Watch 101 - The Beginner's Hub
**File**: `src/app/[lang]/(marketing)/watch-101/page.tsx`

**Content Needed**:
- Hero section introducing watch basics
- 4 subsection cards:
  1. Anatomy of a Watch
  2. Watch Terminology
  3. Water Resistance Guide
  4. Why Wear Watches
- Beginner-friendly language
- Visual diagrams (if available)
- CTA to start with anatomy

**Dictionary Keys**:
```
sections.watch101.hero.title
sections.watch101.hero.description
sections.watch101.subsections[0-3].title
sections.watch101.subsections[0-3].description
sections.watch101.cta
```

---

### 2. How Watches Work - The Movements
**File**: `src/app/[lang]/(marketing)/how-watches-work/page.tsx`

**Content Needed**:
- Explanation of what a movement is
- 4 movement type cards:
  1. Quartz Movement
  2. Manual Wind Mechanical
  3. Automatic Mechanical
  4. Special Movements (Spring Drive, Solar, Kinetic)
- Comparison table
- Pros/cons for each type
- CTA to explore specific movements

---

### 3. Watch Types & Styles
**File**: `src/app/[lang]/(marketing)/watch-types/page.tsx`

**Content Needed**:
- Overview of watch categories
- 7 watch type cards:
  1. Dive Watches
  2. Dress Watches
  3. Chronographs
  4. Pilot Watches
  5. Field Watches
  6. GMT Watches
  7. Digital & Smartwatches
- Visual examples
- Use case scenarios
- Style guide section

---

### 4. Watch Features & Complications
**File**: `src/app/[lang]/(marketing)/watch-features/page.tsx`

**Content Needed**:
- What are complications
- Simple to complex hierarchy:
  - Date Display
  - Day-Date
  - Chronograph
  - GMT/Dual Time
  - Moon Phase
  - Annual Calendar
  - Perpetual Calendar
  - Tourbillon
  - Minute Repeater
- Interactive elements showing how they work
- Price implications

---

### 5. World of Watches - Brands & History
**File**: `src/app/[lang]/(marketing)/world-of-watches/page.tsx`

**Content Needed**:
- Brief history of watchmaking
- Brand categories:
  - The Holy Trinity (Patek Philippe, Audemars Piguet, Vacheron Constantin)
  - Luxury Sports (Rolex, Omega, Breitling)
  - Swiss Entry-Level (Tissot, Hamilton, Longines)
  - Japanese Excellence (Seiko, Grand Seiko, Citizen, Casio)
  - Independent Brands
- Timeline of watchmaking milestones
- Regional watchmaking centers

---

### 6. The Collector's Corner
**File**: `src/app/[lang]/(marketing)/collectors-corner/page.tsx`

**Content Needed**:
- Starting your collection
- Topics:
  1. Buying Guide (New vs Pre-Owned)
  2. Budget Planning
  3. Spotting Fakes
  4. Understanding Reference Numbers
  5. Building a Balanced Collection
  6. Investment Potential
  7. Where to Buy Safely
- Resources and tools
- Community recommendations

---

### 7. Watch Care & Maintenance
**File**: `src/app/[lang]/(marketing)/watch-care/page.tsx`

**Content Needed**:
- Daily care tips
- Sections:
  1. Cleaning Your Watch
  2. Servicing Schedule
  3. Storage Solutions
  4. Strap/Bracelet Changes
  5. Water Resistance Maintenance
  6. Dealing with Magnetization
  7. When to See a Watchmaker
- DIY vs Professional care
- Cost estimates

---

### 8. Blog, Reviews & News
**File**: `src/app/[lang]/(marketing)/blog/page.tsx`

**Content Needed**:
- Latest posts grid
- Categories:
  - Watch Reviews
  - Industry News
  - Buying Guides
  - Opinion Pieces
  - Comparison Articles
- Search and filter functionality
- Pagination
- Newsletter signup CTA

---

## Priority 2: Update Header & Footer

### Header with Language Switcher
**File**: `src/components/layout/Header.tsx`

**Add**:
```typescript
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

// In header component
<LanguageSwitcher currentLang={lang} />
```

**LanguageSwitcher Component**:
```typescript
// src/components/ui/LanguageSwitcher.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

const languages = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
};

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: string) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-sm px-md py-sm rounded-lg hover:bg-gray-100 dark:hover:bg-dark-border transition-colors">
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{languages[currentLang as keyof typeof languages]}</span>
      </button>

      <div className="absolute right-0 mt-sm hidden group-hover:block bg-white dark:bg-dark-bg-tertiary rounded-lg shadow-luxury-lg border border-gray-200 dark:border-dark-border py-sm min-w-[150px]">
        {Object.entries(languages).map(([code, name]) => (
          <button
            key={code}
            onClick={() => switchLanguage(code)}
            className={`w-full text-left px-lg py-sm hover:bg-gray-100 dark:hover:bg-dark-border transition-colors ${
              code === currentLang ? 'bg-accent-gold/10 text-accent-gold font-semibold' : ''
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
```

### Footer Update
**File**: `src/components/layout/Footer.tsx`

**Add**:
- Language switcher in footer
- Translated footer links
- Translated copyright text
- Use `getDictionary(lang)` for all content

---

## Priority 3: Dictionary Expansion

### What to Add to Each Dictionary

#### es.json, en.json, fr.json Structure:

```json
{
  // Existing content...

  "pages": {
    "watch101": {
      "meta": {
        "title": "...",
        "description": "..."
      },
      "hero": {
        "badge": "...",
        "title": "...",
        "description": "..."
      },
      "subsections": {
        "anatomy": {
          "title": "...",
          "description": "...",
          "content": "..."
        },
        "terminology": {
          "title": "...",
          "description": "..."
        },
        "waterResistance": {
          "title": "...",
          "description": "..."
        },
        "whyWear": {
          "title": "...",
          "description": "..."
        }
      }
    },
    "howWatchesWork": {
      // Similar structure
    },
    "watchTypes": {
      // Similar structure
    }
    // ... for all sections
  },

  "components": {
    "header": {
      "home": "...",
      "sections": "...",
      "language": "..."
    },
    "footer": {
      "tagline": "...",
      "sections": {
        "learn": "...",
        "resources": "..."
      },
      "legal": {
        "privacy": "...",
        "terms": "..."
      },
      "copyright": "..."
    }
  }
}
```

---

## Priority 4: Subsection Pages

### Pattern for Subsection Pages

Example: `src/app/[lang]/(marketing)/watch-101/anatomy/page.tsx`

```typescript
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';
import { PageHero } from '@/components/ui/PageHero';
import { ContentLayout } from '@/components/ui/ContentLayout';

export default async function WatchAnatomyPage({
  params
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const content = dict.pages.watch101.subsections.anatomy;

  return (
    <>
      <PageHero
        title={content.title}
        description={content.description}
        breadcrumbs={[
          { name: dict.nav.home, href: `/${lang}` },
          { name: dict.sections.watch101.title, href: `/${lang}/watch-101` },
          { name: content.title, href: `/${lang}/watch-101/anatomy` },
        ]}
      />

      <ContentLayout>
        {/* Page content */}
      </ContentLayout>
    </>
  );
}
```

---

## Development Workflow

### 1. Start with Dictionary Updates
Before coding any page:
1. Add all needed translations to es.json
2. Translate to en.json
3. Translate to fr.json
4. Test that getDictionary() returns expected data

### 2. Create Page Component
1. Copy homepage pattern
2. Replace static content with dictionary references
3. Add proper TypeScript types
4. Test with all 3 languages

### 3. Test Build
```bash
npm run build
```
Check for TypeScript errors and build issues.

### 4. Visual QA
- Test responsive design
- Verify dark mode
- Check all 3 language versions
- Validate links work
- Ensure animations smooth

---

## Useful Code Snippets

### Get Current Language in Client Component
```typescript
'use client';

import { useParams } from 'next/navigation';

export function MyClientComponent() {
  const params = useParams();
  const lang = params.lang as string || 'es';

  // Use lang...
}
```

### Link to Different Language Version
```typescript
import Link from 'next/link';

<Link href={`/${lang}/watch-101`}>
  {dict.sections.watch101.title}
</Link>
```

### Conditional Content by Language
```typescript
{lang === 'es' ? (
  <SpanishOnlyContent />
) : (
  <InternationalContent />
)}
```

---

## Quality Checklist Per Page

Before marking a page complete:

- [ ] Content in all 3 languages
- [ ] Metadata (title, description) set
- [ ] Structured data added (if applicable)
- [ ] All links work
- [ ] Responsive on mobile, tablet, desktop
- [ ] Dark mode works
- [ ] Animations smooth
- [ ] No console errors
- [ ] TypeScript compiles
- [ ] Passes npm run build
- [ ] Golden Ratio spacing used
- [ ] Accessibility attributes present
- [ ] Images have alt text
- [ ] Forms validate properly
- [ ] CTAs strategically placed

---

## Timeline Estimate

### By Page Type:
- **Section Landing Page**: 2-3 hours each (8 pages = 16-24 hours)
- **Subsection Page**: 1-2 hours each (20 pages = 20-40 hours)
- **Header/Footer Update**: 2-3 hours
- **Dictionary Expansion**: 8-12 hours

### Total: 46-79 hours of development

### Suggested Phases:
1. **Week 1**: Complete all 8 section landing pages
2. **Week 2**: Update header/footer + expand dictionaries
3. **Week 3**: Complete subsection pages
4. **Week 4**: Polish, testing, optimization

---

## Common Pitfalls to Avoid

1. **Don't forget `await params`** - Next.js 15 requires it
2. **Always default to 'es'** - `const { lang = 'es' } = await params;`
3. **Test all 3 languages** - Don't just test Spanish
4. **Use absolute paths** - `/es/page` not `./page`
5. **Don't hardcode text** - Always use dictionaries
6. **Check dark mode** - Test with both themes
7. **Mobile-first** - Design for mobile, enhance for desktop
8. **Don't skip accessibility** - ARIA labels, semantic HTML
9. **Test build frequently** - Catch errors early
10. **Keep dictionaries organized** - Use nested structure

---

## Resources

### Documentation:
- Next.js 15: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- React Hook Form: https://react-hook-form.com/
- Zod: https://zod.dev/

### Design References:
- Homepage: `src/app/[lang]/(marketing)/page.tsx`
- Golden Ratio CSS: `src/styles/golden-ratio.css`
- Conversion Components: `src/components/conversion/`

### Translation Tools:
- DeepL: https://www.deepl.com/ (Better than Google Translate for European languages)
- Watch terminology: Keep consistent across languages

---

## Getting Help

If you encounter issues:

1. **Build Errors**: Check TypeScript types and ensure all dictionaries have matching structure
2. **i18n Issues**: Verify language routing in middleware.ts
3. **Styling Issues**: Check if Golden Ratio utilities are being applied
4. **Performance Issues**: Use Next.js Image component, check bundle size

---

## Final Notes

The foundation is solid. The homepage demonstrates the pattern to follow. Maintain consistency across all pages for:
- Design language
- Component reuse
- Dictionary structure
- Code organization
- Accessibility standards

Good luck with the remaining pages! 🚀

---

**Remember**: Quality over speed. It's better to have 8 perfect section pages than 20 rushed ones.
