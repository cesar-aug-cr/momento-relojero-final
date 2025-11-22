import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Info, Droplets, TrendingUp } from 'lucide-react';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);

  return {
    title: 'Watch 101: Beginner\'s Guide to Watches | Momento Relojero',
    description: 'Start your watch journey here. Learn watch anatomy, essential terminology, water resistance ratings, and why watches matter in the modern age. Perfect for beginners.',
    openGraph: {
      title: 'Watch 101: Complete Beginner\'s Guide to Watches',
      description: 'Learn watch anatomy, terminology, water resistance, and more. The perfect starting point for watch enthusiasts.',
    },
  };
}

export default async function Watch101Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="bg-white dark:bg-dark-bg">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900">
        <div className="container-golden py-5xl text-center">
          <div className="inline-flex items-center gap-sm px-lg py-sm bg-white/10 border border-white/20 rounded-full mb-xl backdrop-blur-sm">
            <Info className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">{dict.watchAnatomy.hero?.badge || 'Beginner-Friendly Guide'}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-xl">
            {dict.watchAnatomy.hero?.title || 'Watch 101'}
            <span className="block mt-sm text-white/90">{dict.watchAnatomy.hero?.subtitle || 'The Beginner\'s Hub'}</span>
          </h1>

          <p className="text-xl text-white/90 mb-2xl max-w-3xl mx-auto">
            {dict.watchAnatomy.hero?.description || 'Welcome to the world of horology. Start your journey here with essential knowledge every watch enthusiast should know.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-md">
            <a
              href="#anatomy"
              className="px-lg py-md bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all duration-377"
            >
              {dict.watchAnatomy.hero?.anatomyLink || 'Anatomy Guide'}
            </a>
            <a
              href="#terminology"
              className="px-lg py-md bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-377 border border-white/20"
            >
              {dict.watchAnatomy.hero?.terminologyLink || 'Terminology'}
            </a>
            <a
              href="#water-resistance"
              className="px-lg py-md bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-377 border border-white/20"
            >
              {dict.watchAnatomy.hero?.waterResistanceLink || 'Water Resistance'}
            </a>
          </div>
        </div>
      </section>

      {/* Anatomy of a Watch */}
      <section id="anatomy" className="py-5xl">
        <div className="container-golden">
          <div className="text-center mb-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-lg">
              {dict.watchAnatomy.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {dict.watchAnatomy.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {dict.watchAnatomy.parts.map((part: any, index: number) => (
              <div
                key={part.name}
                className="bg-gray-50 dark:bg-dark-bg-secondary rounded-xl p-xl border border-gray-200 dark:border-dark-border hover:border-accent-gold dark:hover:border-accent-gold transition-all duration-377 hover:shadow-luxury animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-md mb-md">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-xs">
                      {part.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-md">{part.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{part.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Terminology */}
      <section id="terminology" className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden">
          <div className="text-center mb-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-lg">
              {dict.watchTerminology.title || 'Essential Watch Terminology'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {dict.watchTerminology.subtitle || 'Master the language of horology with these fundamental terms'}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-lg">
            {dict.watchTerminology.terms.map((item: any, index: number) => (
              <div
                key={item.term}
                className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-xl border border-gray-200 dark:border-dark-border hover:border-accent-gold dark:hover:border-accent-gold transition-all duration-377 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-md">
                  {item.term}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-md text-lg leading-relaxed">
                  {item.definition}
                </p>
                <div className="flex items-start gap-sm p-md bg-accent-gold/5 border-l-4 border-accent-gold rounded">
                  <span className="font-semibold text-accent-gold-dark dark:text-accent-gold text-sm">
                    {dict.watchTerminology.exampleLabel || 'Example'}:
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item.example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Resistance Guide */}
      <section id="water-resistance" className="py-5xl">
        <div className="container-golden">
          <div className="text-center mb-3xl">
            <Droplets className="w-16 h-16 text-blue-500 mx-auto mb-lg" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-lg">
              {dict.waterResistance.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-md">
              {dict.waterResistance.subtitle}
            </p>
            <p className="text-lg font-semibold text-red-600 dark:text-red-400">
              {dict.waterResistance.critical || 'Critical: Water resistance ratings are NOT depth ratings!'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-xl">
            {dict.waterResistance.ratings.map((rating: any, index: number) => (
              <div
                key={rating.rating}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-2xl border border-blue-200 dark:border-blue-800 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-lg">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-md md:mb-0">
                    {rating.rating}
                  </h3>
                  <div className="flex flex-wrap gap-sm">
                    <span className="px-md py-xs text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
                      ✓ {rating.suitableFor}
                    </span>
                    <span className="px-md py-xs text-sm font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full">
                      ✗ {rating.notFor}
                    </span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-gray-900 dark:text-white">{dict.waterResistance.realityLabel || 'Reality'}:</span>{' '}
                  {rating.reality}
                </p>
              </div>
            ))}

            {/* Important Note */}
            <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-400 dark:border-amber-600 rounded-xl p-2xl">
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-400 dark:bg-amber-600 flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-md">
                    {dict.waterResistance.importantNoteTitle || 'Critical Maintenance Note'}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {dict.waterResistance.importantNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wear a Watch */}
      <section id="why-wear" className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden">
          <div className="text-center mb-3xl">
            <TrendingUp className="w-16 h-16 text-accent-gold mx-auto mb-lg" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-lg">
              Why Wear a Watch in the Digital Age?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              In a world of smartphones, why do watches remain relevant and deeply personal?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-3xl">
              {[
                {
                  title: 'Style & Personal Expression',
                  description:
                    'A watch is jewelry that serves a purpose. It completes an outfit and expresses your personal taste, from sporty to elegant.',
                },
                {
                  title: 'Craftsmanship & Heritage',
                  description:
                    'Mechanical watches represent centuries of horological innovation. Owning one connects you to this rich tradition.',
                },
                {
                  title: 'Investment & Heirloom',
                  description:
                    'Quality watches can appreciate in value and become cherished heirlooms passed down through generations.',
                },
                {
                  title: 'Conversation Starter',
                  description:
                    'Fellow enthusiasts recognize quality timepieces. Your watch can open doors to fascinating conversations.',
                },
                {
                  title: 'Digital Detox',
                  description:
                    'Check the time without pulling out your phone and falling into the notification trap. Stay present.',
                },
                {
                  title: 'Functionality Beyond Time',
                  description:
                    'Dive watches, GMT watches, chronographs - specialized tools designed for specific purposes and lifestyles.',
                },
              ].map((reason, index) => (
                <div
                  key={reason.title}
                  className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-xl border border-gray-200 dark:border-dark-border hover:border-accent-gold dark:hover:border-accent-gold transition-all duration-377 hover:shadow-luxury animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-md">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold-light/10 rounded-xl p-2xl text-center border border-accent-gold/20">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-lg">
                &quot;A watch is more than a tool to tell time. It&apos;s a story on your wrist.&quot;
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Whether you choose a $50 Casio or a $50,000 Patek Philippe, the joy of wearing a watch you love is universal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-5xl">
        <div className="container-golden text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-xl">
            {(dict.watchAnatomy as any).cta?.title || 'Ready to Dive Deeper?'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl max-w-2xl mx-auto">
            {(dict.watchAnatomy as any).cta?.description || 'Now that you know the basics, explore how watches actually work'}
          </p>
          <Link
            href={`/${lang}/how-watches-work`}
            className="inline-flex items-center gap-sm px-xl py-lg bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold rounded-lg transition-all duration-377 hover:shadow-gold text-lg"
          >
            {(dict.watchAnatomy as any).cta?.button || 'Learn About Watch Movements'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
