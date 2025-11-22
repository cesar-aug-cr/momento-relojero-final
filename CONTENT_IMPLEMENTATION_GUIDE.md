# Momento Relojero - Complete Content Implementation Guide

## Overview
This guide provides the complete multilingual content structure for all pages on Momento Relojero in Spanish, English, and French.

## Content Status

### ✅ COMPLETED (Spanish only)
- Dive Watches - Full professional content
- Dress Watches - Full professional content
- Chronographs - Full professional content

### 🔄 IN PROGRESS
- Pilot Watches
- Field Watches
- GMT Watches
- Digital Watches
- Movement Pages (Quartz, Manual, Automatic, Other)
- Watch 101 Pages (Main, Anatomy, Terminology, Water Resistance, Why Wear)
- World of Watches
- Collectors Corner
- Watch Care
- Watch Features
- Blog
- Newsletter

## JSON Structure

All content follows this structure in `src/i18n/locales/{lang}.json`:

```json
{
  "pages": {
    "watchTypes": {
      "{type}": {
        "hero": {
          "title": "Page Title",
          "subtitle": "Subtitle",
          "description": "Hero description"
        },
        "intro": "Opening paragraph (200+ words)",
        "whatMakes": {
          "title": "Section Title",
          "intro": "Section intro",
          "features": [
            {
              "title": "Feature Name",
              "description": "Short desc",
              "detail": "Detailed explanation"
            }
          ]
        },
        "history": {
          "title": "History Title",
          "content": "or paragraphs": ["para1", "para2"]
        },
        "popular": {
          "title": "Popular Models Title",
          "models": [
            {
              "brand": "Brand Name",
              "model": "Model Name",
              "price": "$X - $Y",
              "wr": "Water resistance (for dive)",
              "highlight": "Key selling point"
            }
          ]
        }
        // ... additional sections as needed
      }
    }
  }
}
```

## Page Component Structure

Each page should follow this pattern:

```typescript
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.watchTypes.{type}.title,
    description: dict.meta.watchTypes.{type}.description,
    openGraph: {
      title: dict.meta.watchTypes.{type}.title,
      description: dict.meta.watchTypes.{type}.description,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const content = dict.pages.watchTypes.{type};

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-10 md:py-14">
        <div className="container-golden text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {content.hero.title}
          </h1>
          <p className="text-xl text-white/90 mb-1">
            {content.hero.subtitle}
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12">
        <div className="container-golden max-w-5xl">
          <p className="text-lg text-navy-700 dark:text-navy-300 leading-relaxed mb-6">
            {content.intro}
          </p>

          {/* Additional sections... */}
        </div>
      </section>
    </div>
  );
}
```

## Priority Implementation Order

1. **Watch Types** (Highest traffic from mega menu)
   - Dive ✅
   - Dress ✅
   - Chronograph ✅
   - Pilot (next)
   - Field
   - GMT
   - Digital

2. **Movement Pages** (Educational foundation)
   - Quartz
   - Manual
   - Automatic
   - Other (Solar, Kinetic, Spring Drive)

3. **Watch 101** (Beginner entry point)
   - Main page
   - Anatomy
   - Terminology
   - Water Resistance
   - Why Wear

4. **Collecting & Care**
   - Collectors Corner
   - Watch Care
   - World of Watches
   - Watch Features

5. **Supporting Pages**
   - Blog
   - Newsletter

## Content Guidelines

### Word Count Targets
- Main intro paragraph: 150-250 words
- Section paragraphs: 80-120 words
- Feature details: 30-50 words
- Model highlights: 15-25 words

### Tone & Style
- **Spanish (Primary)**: Warm, enthusiastic, educational. Use "tú" form.
- **English**: Professional but accessible, friendly expert.
- **French**: Elegant, refined, maintaining formality with "vous".

### SEO Meta Titles
- Format: "[Topic]: [Benefit] | Momento Relojero"
- Length: 50-60 characters
- Include primary keyword

### SEO Meta Descriptions
- Length: 150-160 characters
- Include call-to-action or benefit
- Natural keyword inclusion

## Next Steps

1. Complete remaining watch type content in Spanish
2. Translate all watch types to English and French
3. Add movement page content (all languages)
4. Update page components to use translations
5. Test all pages in all languages
6. Add remaining sections

---

**Status**: Document created [Date]
**Last Updated**: [Date]
