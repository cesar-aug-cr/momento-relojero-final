import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { FacebookPixel } from '@/components/analytics/FacebookPixel'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { i18n, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'Momento Relojero | Tu Recurso Completo de Relojería',
  description: 'Descubre el arte de la relojería con guías completas sobre relojes mecánicos, marcas de lujo, movimientos y consejos expertos. Perfecto para principiantes y entusiastas.',
  keywords: [
    'relojes',
    'coleccionismo de relojes',
    'relojería',
    'relojes mecánicos',
    'relojes de lujo',
    'marcas de relojes',
    'movimientos de relojes',
    'relojes automáticos',
    'cuidado de relojes',
    'watches',
    'horology',
  ],
  authors: [{ name: 'Momento Relojero' }],
  creator: 'Momento Relojero',
  publisher: 'Momento Relojero',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://momentorelojero.com',
    title: 'Momento Relojero | Tu Recurso Completo de Relojería',
    description: 'Descubre el arte de la relojería con guías completas sobre relojes mecánicos, marcas de lujo, movimientos y consejos expertos.',
    siteName: 'Momento Relojero',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Momento Relojero - Watch Collecting Resource',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momento Relojero | Tu Recurso Completo de Relojería',
    description: 'Descubre el arte de la relojería con guías completas sobre relojes mecánicos, marcas de lujo y consejos expertos.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-dark-bg text-dark-text antialiased selection:bg-accent-gold selection:text-black`}>
        <Header currentLang={lang} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer currentLang={lang} dict={dict.footer} />
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FB_PIXEL_ID || ''} />
      </body>
    </html>
  )
}
