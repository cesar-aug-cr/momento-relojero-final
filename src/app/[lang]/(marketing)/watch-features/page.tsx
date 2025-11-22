import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Timer, Moon, Sparkles } from 'lucide-react';
import { WATCH_COMPLICATIONS } from '@/lib/content-data';

export const metadata: Metadata = {
  title: 'Watch Features & Complications | Momento Relojero',
  description: 'Explore watch complications from simple date displays to grand complications like perpetual calendars, minute repeaters, and tourbillons.',
};

export default async function WatchFeaturesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang = 'es' } = await params;
  return (
    <div className="bg-white dark:bg-dark-bg">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="container-golden py-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-xl">Watch Features & Complications</h1>
          <p className="text-xl text-white/90 mb-2xl max-w-3xl mx-auto">
            Beyond telling time: Explore the fascinating functions that make watches true engineering marvels
          </p>
        </div>
      </section>

      <section id="intro" className="py-5xl">
        <div className="container-golden max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-lg">What is a Complication?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            In horology, a &quot;complication&quot; is any function beyond basic timekeeping (hours, minutes, seconds). From simple date displays to astronomical calculations, complications showcase the pinnacle of watchmaking artistry.
          </p>
        </div>
      </section>

      <section id="simple" className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl">
            <Calendar className="w-12 h-12 text-blue-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Simple Complications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-xl max-w-5xl">
            {WATCH_COMPLICATIONS.simple.map((comp) => (
              <div key={comp.name} className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-2xl border border-gray-200 dark:border-dark-border">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-md">{comp.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-lg">{comp.description}</p>
                <div className="space-y-sm text-sm">
                  <p><span className="font-semibold">Utility:</span> {comp.utility}</p>
                  <p className="text-gray-600 dark:text-gray-400 italic">{comp.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="popular" className="py-5xl">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl">
            <Timer className="w-12 h-12 text-purple-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Popular Complications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-xl max-w-6xl">
            {WATCH_COMPLICATIONS.popular.map((comp) => (
              <div key={comp.name} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-2xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-md">{comp.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-lg">{comp.description}</p>
                {comp.subdials && <p className="text-sm mb-md"><span className="font-semibold">Subdials:</span> {comp.subdials}</p>}
                <p className="text-sm mb-md"><span className="font-semibold">Utility:</span> {comp.utility}</p>
                {comp.iconic && <p className="text-sm text-accent-gold-dark dark:text-accent-gold"><span className="font-semibold">Iconic:</span> {comp.iconic}</p>}
                {comp.note && <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-md">{comp.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="grand" className="py-5xl bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl justify-center">
            <Sparkles className="w-12 h-12 text-accent-gold" />
            <h2 className="text-4xl font-bold text-white">Grand Complications</h2>
          </div>
          <p className="text-xl text-white/90 text-center mb-3xl max-w-3xl mx-auto">
            The pinnacle of horological achievement - complications that represent years of development and master craftsmanship
          </p>
          <div className="grid gap-2xl max-w-5xl mx-auto">
            {WATCH_COMPLICATIONS.grand.map((comp) => (
              <div key={comp.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-3xl border border-white/10 hover:border-accent-gold/50 transition-all">
                <div className="flex items-start justify-between mb-lg flex-wrap gap-md">
                  <h3 className="text-3xl font-bold text-white">{comp.name}</h3>
                  <span className="px-lg py-md bg-accent-gold/20 text-accent-gold rounded-lg font-semibold text-lg">{comp.priceRange}</span>
                </div>
                <p className="text-xl text-white/90 mb-xl">{comp.description}</p>
                <div className="grid md:grid-cols-2 gap-lg mb-lg">
                  <div>
                    <div className="text-sm font-semibold text-accent-gold mb-xs">Complexity</div>
                    <p className="text-white/80">{comp.complexity}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-accent-gold mb-xs">Utility / Significance</div>
                    <p className="text-white/80">{comp.utility}</p>
                  </div>
                </div>
                {comp.maintenance && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-lg mb-lg">
                    <div className="text-sm font-semibold text-red-400 mb-xs">Maintenance Note</div>
                    <p className="text-white/80">{comp.maintenance}</p>
                  </div>
                )}
                <div className="text-sm text-white/60">
                  <span className="font-semibold">Example:</span> {comp.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5xl">
        <div className="container-golden text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-xl">Explore Watch Brands</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl max-w-2xl mx-auto">
            Discover the brands that create these incredible complications
          </p>
          <Link href={`/${lang}/world-of-watches`} className="inline-flex items-center gap-sm px-xl py-lg bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold rounded-lg transition-all duration-377 hover:shadow-gold text-lg">
            Discover Watch Brands
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
