# Quick Start Guide - Momento Relojero

## Get Running in 3 Steps

### Step 1: Start Development Server
```bash
npm run dev
```

Open your browser to **http://localhost:3000**

### Step 2: Explore the Website
Navigate through all sections:
- Hero with animations
- About section
- Watch Types comparison
- Watch Brands by category
- Resources (care guides & buying guides)
- Newsletter signup (try the multi-step form!)

### Step 3: Customize Content

#### Edit Watch Data
Open `src/lib/data.ts` and modify:
```typescript
export const watchBrands: WatchBrand[] = [
  {
    id: 'rolex',
    name: 'Rolex',
    category: 'luxury',
    description: 'Your description here',
    founded: 1905,
    origin: 'Switzerland',
  },
  // Add more brands...
]
```

#### Change Colors
Edit `src/app/globals.css`:
```css
@theme {
  --color-gold-500: #D4AF37;  /* Change to your brand color */
}
```

#### Update Copy
Edit section components in `src/components/sections/`:
- `Hero.tsx` - Main headline
- `About.tsx` - About text
- `Newsletter.tsx` - Form copy

## Common Tasks

### Add Analytics IDs
Edit `.env.local`:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789
```

### Test Newsletter Form
1. Go to Newsletter section
2. Fill out step 1 (name & email)
3. Select interests in step 2
4. Choose preferences in step 3
5. Submit!

The form data is logged to console in development mode.

### Toggle Dark Mode
Click the Sun/Moon icon in the header. Your preference is saved to localStorage.

### Build for Production
```bash
npm run build
npm start
```

## File Locations

| What | Where |
|------|-------|
| Homepage | `src/app/page.tsx` |
| Watch Data | `src/lib/data.ts` |
| Colors & Styles | `src/app/globals.css` |
| Newsletter Form | `src/components/conversion/MultiStepNewsletterForm.tsx` |
| API Endpoint | `src/app/api/newsletter/route.ts` |
| SEO Metadata | `src/app/layout.tsx` |

## Need Help?

Check the full `README.md` or `PROJECT_SUMMARY.md` for detailed information.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts, and your site will be live in minutes!

---

Enjoy your new watch website! 🕒✨
