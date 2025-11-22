import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    title: 'Types & Styles of Watches | Momento Relojero',
    description: 'Explore every watch category: Dive, Dress, Chronograph, Pilot, Field, and GMT watches with iconic examples and buying advice.',
  };
}

export default async function WatchTypesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="bg-white dark:bg-dark-bg">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 to-orange-600 dark:from-amber-900 dark:to-orange-900">
        <div className="container-golden py-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-xl">
            {dict.watchStyles.hero?.title || 'Types & Styles of Watches'}
          </h1>
          <p className="text-xl text-white/90 mb-2xl max-w-3xl mx-auto">
            {dict.watchStyles.hero?.description || 'Discover your perfect watch style from dive watches to dress watches'}
          </p>
        </div>
      </section>

      <section className="py-5xl">
        <div className="container-golden">
          <div className="space-y-4xl">
            {dict.watchStyles.styles.map((style: any, index: number) => (
              <div key={style.category} id={style.category.toLowerCase().replace(/\s+/g, '-')} className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-gray-50 to-white dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-3xl border border-gray-200 dark:border-dark-border hover:border-accent-gold dark:hover:border-accent-gold transition-all">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-lg">{style.category}</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl">{style.description}</p>

                  <div className="mb-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-lg">{dict.watchStyles.keyFeaturesTitle || 'Key Features'}</h3>
                    <ul className="grid md:grid-cols-2 gap-md">
                      {style.keyFeatures.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-sm">
                          <span className="text-accent-gold mt-1">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-lg">{dict.watchStyles.iconicModelsTitle || 'Iconic Models'}</h3>
                    <div className="grid md:grid-cols-2 gap-lg">
                      {style.iconicModels.map((model: any) => (
                        <div key={model.name} className="bg-white dark:bg-dark-bg rounded-xl p-lg border border-gray-200 dark:border-dark-border">
                          <div className="font-bold text-gray-900 dark:text-white mb-xs">{model.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{model.note}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-md items-center">
                    <span className="px-lg py-md bg-accent-gold/10 text-accent-gold-dark dark:text-accent-gold rounded-lg font-semibold">
                      {dict.watchStyles.priceRangeLabel || 'Price Range'}: {style.priceRange}
                    </span>
                    <span className="px-lg py-md bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 rounded-lg">
                      {dict.watchStyles.idealForLabel || 'Ideal for'}: {style.idealFor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-xl">
            {dict.watchStyles.cta?.title || 'Explore Complications'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl max-w-2xl mx-auto">
            {dict.watchStyles.cta?.description || 'Learn about watch complications - functions beyond basic timekeeping'}
          </p>
          <Link href={`/${lang}/watch-features`} className="inline-flex items-center gap-sm px-xl py-lg bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold rounded-lg transition-all duration-377 hover:shadow-gold text-lg">
            {dict.watchStyles.cta?.button || 'Discover Complications'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
