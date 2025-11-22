import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Hand, RefreshCw, Sparkles } from 'lucide-react';
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
    title: 'How Watches Work: Understanding Movements | Momento Relojero',
    description: 'Learn how watch movements work. Explore quartz, manual-wind, automatic, solar, kinetic, and Spring Drive movements with detailed explanations.',
  };
}

export default async function HowWatchesWorkPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="bg-white dark:bg-dark-bg">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-900 dark:to-pink-900">
        <div className="container-golden py-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-xl">
            {dict.movementTypes.hero?.title || 'How Watches Work'}
            <span className="block mt-sm text-white/90">{dict.movementTypes.hero?.subtitle || 'The Heart of Every Timepiece'}</span>
          </h1>
          <p className="text-xl text-white/90 mb-2xl max-w-3xl mx-auto">
            {dict.movementTypes.hero?.description || 'Discover the fascinating mechanisms that power watches'}
          </p>
        </div>
      </section>

      {/* Quartz Movement */}
      <section id="quartz" className="py-5xl">
        <div className="container-golden">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-md mb-xl">
              <Zap className="w-12 h-12 text-yellow-500" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{dict.movementTypes.quartz.name}</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl">{dict.movementTypes.quartz.description}</p>

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-2xl mb-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.quartz.howItWorksTitle || 'How It Works'}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{dict.movementTypes.quartz.howItWorks}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-xl mb-2xl">
              <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.quartz.prosTitle || 'Pros'}</h3>
                <ul className="space-y-sm">
                  {dict.movementTypes.quartz.pros.map((pro: string) => (
                    <li key={pro} className="flex items-start gap-sm">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-xl border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.quartz.consTitle || 'Cons'}</h3>
                <ul className="space-y-sm">
                  {dict.movementTypes.quartz.cons.map((con: string) => (
                    <li key={con} className="flex items-start gap-sm">
                      <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                      <span className="text-gray-700 dark:text-gray-300">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-dark-bg-secondary rounded-xl p-xl border border-gray-200 dark:border-dark-border">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.quartz.famousExamplesTitle || 'Famous Examples'}</h3>
              <div className="flex flex-wrap gap-md">
                {dict.movementTypes.quartz.famousExamples.map((example: string) => (
                  <span key={example} className="px-lg py-md bg-white dark:bg-dark-bg-tertiary rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manual-Wind Movement */}
      <section id="mechanical" className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-md mb-xl">
              <Hand className="w-12 h-12 text-accent-gold" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{dict.movementTypes.manual.name}</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl">{dict.movementTypes.manual.description}</p>

            <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-2xl mb-2xl border border-amber-200 dark:border-amber-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.manual.howItWorksTitle || 'How It Works'}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{dict.movementTypes.manual.howItWorks}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-xl mb-2xl">
              <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.manual.prosTitle || 'Pros'}</h3>
                <ul className="space-y-sm">
                  {dict.movementTypes.manual.pros.map((pro: string) => (
                    <li key={pro} className="flex items-start gap-sm">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-xl border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.manual.consTitle || 'Cons'}</h3>
                <ul className="space-y-sm">
                  {dict.movementTypes.manual.cons.map((con: string) => (
                    <li key={con} className="flex items-start gap-sm">
                      <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                      <span className="text-gray-700 dark:text-gray-300">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-xl border border-gray-200 dark:border-dark-border">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.manual.iconicModelsTitle || 'Iconic Models'}</h3>
              <div className="grid md:grid-cols-2 gap-md">
                {dict.movementTypes.manual.famousExamples.map((example: string) => (
                  <span key={example} className="px-lg py-md bg-gray-50 dark:bg-dark-bg-secondary rounded-lg text-gray-700 dark:text-gray-300">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automatic Movement */}
      <section id="automatic" className="py-5xl">
        <div className="container-golden">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-md mb-xl">
              <RefreshCw className="w-12 h-12 text-blue-500" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{dict.movementTypes.automatic.name}</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl">{dict.movementTypes.automatic.description}</p>

            <div className="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-2xl mb-2xl border border-purple-200 dark:border-purple-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.automatic.howItWorksTitle || 'How It Works'}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{dict.movementTypes.automatic.howItWorks}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-xl mb-2xl">
              <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.automatic.prosTitle || 'Pros'}</h3>
                <ul className="space-y-sm">
                  {dict.movementTypes.automatic.pros.map((pro: string) => (
                    <li key={pro} className="flex items-start gap-sm">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-xl border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.automatic.consTitle || 'Cons'}</h3>
                <ul className="space-y-sm">
                  {dict.movementTypes.automatic.cons.map((con: string) => (
                    <li key={con} className="flex items-start gap-sm">
                      <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                      <span className="text-gray-700 dark:text-gray-300">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-dark-bg-secondary rounded-xl p-xl border border-gray-200 dark:border-dark-border">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-md">{dict.movementTypes.automatic.legendaryExamplesTitle || 'Legendary Examples'}</h3>
              <div className="grid md:grid-cols-2 gap-md">
                {dict.movementTypes.automatic.famousExamples.map((example: string) => (
                  <span key={example} className="px-lg py-md bg-white dark:bg-dark-bg-tertiary rounded-lg text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Movement Types */}
      <section id="other" className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden">
          <div className="text-center mb-3xl">
            <Sparkles className="w-16 h-16 text-accent-gold mx-auto mb-lg" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-lg">
              {dict.movementTypes.other?.title || 'Other Movement Technologies'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {dict.movementTypes.other?.subtitle || 'Innovative hybrid and alternative movement types'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-xl">
            {Object.entries(dict.movementTypes.other?.types || {}).map(([key, movement]: [string, any]) => (
              <div key={key} className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-2xl border border-gray-200 dark:border-dark-border hover:border-accent-gold dark:hover:border-accent-gold transition-all">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-md">{movement.name}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-lg">{movement.description}</p>
                <div className="grid md:grid-cols-2 gap-md">
                  <div className="bg-gray-50 dark:bg-dark-bg-secondary rounded-lg p-md">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{dict.movementTypes.other?.exampleLabel || 'Example'}:</span>
                    <p className="text-gray-900 dark:text-white font-medium">{movement.example}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-md border border-green-200 dark:border-green-800">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{dict.movementTypes.other?.benefitLabel || 'Benefit'}:</span>
                    <p className="text-gray-900 dark:text-white font-medium">{movement.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-5xl">
        <div className="container-golden text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-xl">
            {dict.movementTypes.cta?.title || 'Explore Watch Styles'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl max-w-2xl mx-auto">
            {dict.movementTypes.cta?.description || 'Now that you understand movements, discover the different watch styles and categories'}
          </p>
          <Link
            href={`/${lang}/watch-types`}
            className="inline-flex items-center gap-sm px-xl py-lg bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold rounded-lg transition-all duration-377 hover:shadow-gold text-lg"
          >
            {dict.movementTypes.cta?.button || 'Discover Watch Types'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
