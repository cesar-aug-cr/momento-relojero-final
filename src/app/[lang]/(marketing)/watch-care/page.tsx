import type { Metadata } from 'next';
import { Sparkles, Wrench, Archive, SwatchBook } from 'lucide-react';
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
    title: 'Watch Care & Maintenance | Momento Relojero',
    description: 'Learn how to clean, service, store, and maintain your watches. Essential care guide for watch owners.',
  };
}

export default async function WatchCarePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="bg-white dark:bg-dark-bg">
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="container-golden py-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-xl">{dict.watchCareFull.hero?.title || 'Watch Care & Maintenance'}</h1>
          <p className="text-xl text-white/90 mb-2xl max-w-3xl mx-auto">
            {dict.watchCareFull.hero?.description || 'Protect your investment with proper care, cleaning, servicing, and storage techniques'}
          </p>
        </div>
      </section>

      <section id="cleaning" className="py-5xl">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl">
            <Sparkles className="w-12 h-12 text-blue-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{dict.watchCareFull.cleaning.title}</h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-2xl">
            {dict.watchCareFull.cleaning.methods.map((method: any) => (
              <div key={method.material} className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-3xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-lg">{method.material}</h3>
                <div className="mb-xl">
                  <div className="font-semibold text-gray-900 dark:text-white mb-md">{dict.watchCareFull.cleaning.processLabel || 'Process'}:</div>
                  <ol className="space-y-sm">
                    {method.process.map((step: string, index: number) => (
                      <li key={step} className="flex items-start gap-md">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 text-accent-gold-dark dark:text-accent-gold flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                {method.warning && (
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-lg mb-md">
                    <span className="font-semibold text-red-600 dark:text-red-400">{dict.watchCareFull.cleaning.warningLabel || 'Warning'}:</span> {method.warning}
                  </div>
                )}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">{dict.watchCareFull.cleaning.frequencyLabel || 'Frequency'}:</span> {method.frequency}
                </div>
                {method.lifespan && (
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-sm">
                    <span className="font-semibold">{dict.watchCareFull.cleaning.lifespanLabel || 'Expected Lifespan'}:</span> {method.lifespan}
                  </div>
                )}
                {method.note && (
                  <div className="text-sm text-gray-600 dark:text-gray-400 italic mt-sm">{method.note}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicing" className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl">
            <Wrench className="w-12 h-12 text-orange-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{dict.watchCareFull.servicing.title}</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-dark-bg-tertiary rounded-2xl p-3xl border border-gray-200 dark:border-dark-border mb-3xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-lg">{dict.watchCareFull.servicing.whyServiceTitle || 'Why Service Your Watch?'}</h3>
              <ul className="space-y-md">
                {dict.watchCareFull.servicing.whyService.map((reason: string) => (
                  <li key={reason} className="flex items-start gap-sm">
                    <span className="text-accent-gold mt-1">✓</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-xl mb-3xl">
              <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-xl border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-md">{dict.watchCareFull.servicing.frequency.quartzLabel || 'Quartz Watches'}</h4>
                <p className="text-gray-700 dark:text-gray-300">{dict.watchCareFull.servicing.frequency.quartz}</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-xl border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-md">{dict.watchCareFull.servicing.frequency.mechanicalLabel || 'Mechanical Watches'}</h4>
                <p className="text-gray-700 dark:text-gray-300">{dict.watchCareFull.servicing.frequency.mechanical}</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-xl border border-amber-200 dark:border-amber-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-md">{dict.watchCareFull.servicing.frequency.vintageLabel || 'Vintage Watches'}</h4>
                <p className="text-gray-700 dark:text-gray-300">{dict.watchCareFull.servicing.frequency.vintage}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-white dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-3xl border border-gray-200 dark:border-dark-border">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-lg">{dict.watchCareFull.servicing.whatHappensTitle || 'What Happens During Service'}</h3>
              <ol className="space-y-md">
                {dict.watchCareFull.servicing.whatHappens.map((step: string, index: number) => (
                  <li key={step} className="flex items-start gap-md">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold text-gray-900 flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="storage" className="py-5xl">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl">
            <Archive className="w-12 h-12 text-green-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{dict.watchCareFull.storage.title}</h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-xl mb-3xl">
            {dict.watchCareFull.storage.options.map((option: any) => (
              <div key={option.solution} className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-2xl border border-gray-200 dark:border-dark-border">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-md">{option.solution}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-lg">{option.description}</p>
                <div className="space-y-md text-sm">
                  <p><span className="font-semibold">{dict.watchCareFull.storage.bestForLabel || 'Best For'}:</span> {option.bestFor}</p>
                  <p><span className="font-semibold">{dict.watchCareFull.storage.priceLabel || 'Price'}:</span> {option.priceRange}</p>
                  {option.settings && <p><span className="font-semibold">{dict.watchCareFull.storage.settingsLabel || 'Settings'}:</span> {option.settings}</p>}
                  {option.features && <p className="text-gray-600 dark:text-gray-400">{option.features}</p>}
                  {option.note && <p className="text-gray-600 dark:text-gray-400 italic">{option.note}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-5xl mx-auto bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-3xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-lg">{dict.watchCareFull.storage.tipsTitle || 'Storage Best Practices'}</h3>
            <ul className="space-y-md">
              {dict.watchCareFull.storage.tips.map((tip: string) => (
                <li key={tip} className="flex items-start gap-sm">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="strap-change" className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl">
            <SwatchBook className="w-12 h-12 text-purple-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{dict.watchCareFull.strapChange.title}</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-bg-tertiary rounded-2xl p-3xl border border-gray-200 dark:border-dark-border mb-3xl">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-lg">
                <span className="font-semibold">{dict.watchCareFull.strapChange.toolsLabel || 'Tools Needed'}:</span> {dict.watchCareFull.strapChange.tools}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-lg">{dict.watchCareFull.strapChange.processTitle || 'Step-by-Step Process'}</h3>
              <ol className="space-y-lg">
                {dict.watchCareFull.strapChange.process.map((step: string, index: number) => (
                  <li key={step} className="flex items-start gap-md">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <span className="text-lg text-gray-700 dark:text-gray-300 pt-2">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-2xl border border-purple-200 dark:border-purple-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-lg">{dict.watchCareFull.strapChange.tipTitle || 'Pro Tip'}</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-lg">{dict.watchCareFull.strapChange.tip}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">{dict.watchCareFull.strapChange.lugWidthLabel || 'Lug Width'}:</span> {dict.watchCareFull.strapChange.lugWidth}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
