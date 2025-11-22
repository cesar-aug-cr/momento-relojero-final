# Momento Relojero - Deployment Guide

## Quick Start (Local Development)

```bash
# Navigate to project directory
cd "C:\Users\Cesar\Documents\AI SITES\Momento Relojero"

# Start development server
npm run dev

# Open browser to:
# http://localhost:3000
```

## Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Production will run on:
# http://localhost:3000
```

## Deploy to Vercel (Recommended - FREE)

### Option 1: GitHub Integration (Easiest)

1. **Create GitHub Repository**
   ```bash
   cd "C:\Users\Cesar\Documents\AI SITES\Momento Relojero"
   git init
   git add .
   git commit -m "Initial commit: Complete Momento Relojero rebuild"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/momento-relojero.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your site is live.

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd "C:\Users\Cesar\Documents\AI SITES\Momento Relojero"
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (Your account)
# - Link to existing project? No
# - Project name? momento-relojero
# - Directory? ./
# - Override settings? No
```

## Environment Variables

After deployment, add these environment variables in Vercel dashboard:

### Required for Analytics:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXXX
```

**To get these IDs**:
1. **Google Analytics 4**:
   - Go to https://analytics.google.com
   - Create property (if needed)
   - Get Measurement ID from Admin > Data Streams

2. **Facebook Pixel**:
   - Go to https://business.facebook.com/events_manager
   - Create Pixel (if needed)
   - Copy Pixel ID

### Required for Newsletter (when ready):

Choose one email service:

**Option A: Resend (Recommended)**
```env
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXX
```

**Option B: SendGrid**
```env
SENDGRID_API_KEY=SG.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Option C: Mailchimp**
```env
MAILCHIMP_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-usXX
MAILCHIMP_AUDIENCE_ID=XXXXXXXXXX
```

## Custom Domain Setup (Vercel)

1. **Add Domain in Vercel**:
   - Go to Project Settings > Domains
   - Add your domain (e.g., momentorelojero.com)

2. **Update DNS Records** (at your domain registrar):

   **For Apex Domain** (momentorelojero.com):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For WWW Subdomain** (www.momentorelojero.com):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (can take up to 48 hours, usually 1-2 hours)

4. **SSL Certificate**: Vercel automatically provisions and renews SSL certificates

## Alternative Hosting Options

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd "C:\Users\Cesar\Documents\AI SITES\Momento Relojero"
netlify deploy --prod

# Follow prompts
```

### Deploy to AWS Amplify

1. Go to https://console.aws.amazon.com/amplify
2. Click "New app" > "Host web app"
3. Connect your GitHub repository
4. AWS Amplify will auto-detect Next.js
5. Click "Save and deploy"

### Deploy to Railway

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Railway will auto-detect Next.js
5. Click "Deploy"

## Newsletter API Setup

### Update Newsletter Route

Edit `src/app/api/newsletter/route.ts`:

**For Resend**:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Send welcome email
    await resend.emails.send({
      from: 'Momento Relojero <hello@momentorelojero.com>',
      to: body.email,
      subject: 'Welcome to Momento Relojero!',
      html: `<h1>Welcome ${body.firstName}!</h1>...`,
    });

    // Add to audience list
    await resend.contacts.create({
      email: body.email,
      firstName: body.firstName,
      audienceId: 'YOUR_AUDIENCE_ID',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
```

**For SendGrid**:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await sgMail.send({
      to: body.email,
      from: 'hello@momentorelojero.com',
      subject: 'Welcome to Momento Relojero!',
      html: `<h1>Welcome ${body.firstName}!</h1>...`,
    });

    // Add to contact list via SendGrid API

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
```

## Performance Monitoring

### Enable Vercel Analytics (FREE)

1. Go to Project Settings > Analytics
2. Enable "Vercel Analytics"
3. Get real-time performance metrics

### Enable Vercel Speed Insights

1. Install package:
   ```bash
   npm install @vercel/speed-insights
   ```

2. Add to `layout.tsx`:
   ```typescript
   import { SpeedInsights } from '@vercel/speed-insights/next';

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <SpeedInsights />
         </body>
       </html>
     );
   }
   ```

## SEO Optimization Checklist

Before going live:

- [ ] Update `sitemap.ts` with production URL
- [ ] Add `robots.txt` in public folder
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site in Google Search Console
- [ ] Add Open Graph image (`/public/og-image.jpg`)
- [ ] Add favicon and touch icons
- [ ] Set up Google Analytics 4
- [ ] Set up Facebook Pixel (if using)
- [ ] Test all pages with Google Lighthouse
- [ ] Test mobile responsiveness
- [ ] Check all internal links
- [ ] Verify dark mode works correctly

## Pre-Launch Testing

```bash
# Run production build locally
npm run build
npm start

# Test checklist:
# - Navigate all 8 main sections
# - Test newsletter form (all 3 steps)
# - Toggle dark mode
# - Test mobile menu
# - Check all dropdown menus
# - Verify newsletter signup works
# - Test analytics events (check browser console)
```

## Post-Launch Tasks

1. **Submit to Search Engines**:
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters

2. **Set Up Monitoring**:
   - UptimeRobot: https://uptimerobot.com (FREE)
   - Monitor site uptime

3. **Create Social Media Profiles**:
   - Twitter: @momentorelojero
   - Instagram: @momentorelojero
   - YouTube: @momentorelojero
   - Facebook: /momentorelojero

4. **Start Content Calendar**:
   - Plan weekly blog posts
   - Schedule social media posts
   - Create email newsletter campaigns

## Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart development server after adding variables
- For Vercel: redeploy after adding variables

### Newsletter Form Not Submitting

- Check browser console for errors
- Verify API route is accessible: `http://localhost:3000/api/newsletter`
- Ensure email service API key is correct

## Support Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Vercel Documentation**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Hook Form**: https://react-hook-form.com

## Success!

Your Momento Relojero website is now ready for the world. Share your passion for horology and build a community of watch enthusiasts!

🎉 **Congratulations on launching!** 🎉
