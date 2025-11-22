import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Crown, Star } from 'lucide-react';
import { WATCH_BRANDS, WATCH_HISTORY } from '@/lib/content-data';

export const metadata: Metadata = {
  title: 'World of Watches: Brands & History | Momento Relojero',
  description: 'Explore watch history and discover brands from the Holy Trinity to Japanese giants.',
};

export default async function WorldOfWatchesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang = 'es' } = await params;
  return (
    <div className="bg-white dark:bg-dark-bg">
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-rose-600">
        <div className="container-golden py-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-xl">The World of Watches</h1>
          <p className="text-xl text-white/90 mb-2xl max-w-3xl mx-auto">
            Journey through horological history and discover the brands that shaped the industry
          </p>
        </div>
      </section>

      <section id="history" className="py-5xl">
        <div className="container-golden">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3xl text-center">The History of Horology</h2>
          <div className="max-w-5xl mx-auto space-y-3xl">
            {Object.values(WATCH_HISTORY).map((period) => (
              <div key={period.era} className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-3xl border border-amber-200 dark:border-amber-800">
                <div className="flex items-center gap-md mb-lg">
                  <span className="px-lg py-md bg-accent-gold text-gray-900 rounded-lg font-bold">{period.era}</span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{period.event}</h3>
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-lg leading-relaxed">{period.story}</p>
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-lg">
                  <span className="font-semibold">Significance:</span> {period.significance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="holy-trinity" className="py-5xl bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl justify-center">
            <Crown className="w-12 h-12 text-accent-gold" />
            <h2 className="text-4xl font-bold text-white">The Holy Trinity</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-2xl max-w-6xl mx-auto">
            {WATCH_BRANDS.holyTrinity.map((brand) => (
              <div key={brand.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-md">{brand.name}</h3>
                <div className="space-y-md text-white/80 mb-lg">
                  <p><span className="text-accent-gold font-semibold">Founded:</span> {brand.founded}</p>
                  <p><span className="text-accent-gold font-semibold">Specialty:</span> {brand.specialty}</p>
                  <p><span className="text-accent-gold font-semibold">Price:</span> {brand.priceRange}</p>
                  <p><span className="text-accent-gold font-semibold">Iconic:</span> {brand.iconicModel}</p>
                </div>
                <div className="bg-accent-gold/10 rounded-lg p-md">
                  <p className="text-sm text-white/90">{brand.notableAchievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="luxury" className="py-5xl">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl">
            <Star className="w-12 h-12 text-accent-gold" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Iconic Luxury Brands</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-2xl max-w-5xl">
            {WATCH_BRANDS.iconicLuxury.map((brand) => (
              <div key={brand.name} className="bg-gray-50 dark:bg-dark-bg-secondary rounded-2xl p-3xl border border-gray-200 dark:border-dark-border">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-lg">{brand.name}</h3>
                <div className="space-y-md mb-xl">
                  <p><span className="font-semibold">Founded:</span> {brand.founded}</p>
                  <p><span className="font-semibold">Specialty:</span> {brand.specialty}</p>
                  <p><span className="font-semibold">Iconic Models:</span> {brand.iconicModels}</p>
                  <p className="text-accent-gold-dark dark:text-accent-gold font-semibold">{brand.achievement}</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-lg">
                  <p className="text-sm">{brand.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-xl">Start Your Collection</h2>
          <Link href={`/${lang}/collectors-corner`} className="inline-flex items-center gap-sm px-xl py-lg bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold rounded-lg transition-all duration-377 text-lg">
            Collector Guide
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
