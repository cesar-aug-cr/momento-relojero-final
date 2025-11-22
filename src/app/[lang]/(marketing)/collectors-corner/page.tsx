import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, ShoppingCart, AlertTriangle, Hash } from 'lucide-react';
import { COLLECTOR_GUIDES } from '@/lib/content-data';

export const metadata: Metadata = {
  title: "Collector's Corner | Momento Relojero",
  description: 'Learn how to start your watch collection, buy smart, spot fakes, and understand reference numbers. Essential guide for collectors.',
};

export default async function CollectorsCornerPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang = 'es' } = await params;
  return (
    <div className="bg-white dark:bg-dark-bg">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-600">
        <div className="container-golden py-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-xl">The Collector&apos;s Corner</h1>
          <p className="text-xl text-white/90 mb-2xl max-w-3xl mx-auto">
            Build a meaningful watch collection with expert guidance from beginner to advanced collector
          </p>
        </div>
      </section>

      <section id="start" className="py-5xl">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl">
            <Target className="w-12 h-12 text-blue-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{COLLECTOR_GUIDES.startingCollection.title}</h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-2xl">
            {COLLECTOR_GUIDES.startingCollection.steps.map((step, index) => (
              <div key={step.step} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-3xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-lg mb-lg">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-gold text-gray-900 flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-md">{step.step}</h3>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-xl">{step.description}</p>
                    {step.questions && (
                      <div className="mb-lg">
                        <div className="font-semibold text-gray-900 dark:text-white mb-md">Ask Yourself:</div>
                        <ul className="space-y-sm">
                          {step.questions.map((q) => (
                            <li key={q} className="flex items-start gap-sm">
                              <span className="text-accent-gold mt-1">?</span>
                              <span className="text-gray-700 dark:text-gray-300">{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {step.tiers && (
                      <div className="space-y-md">
                        {step.tiers.map((tier) => (
                          <div key={tier.range} className="bg-white dark:bg-dark-bg-tertiary rounded-lg p-lg border border-gray-200 dark:border-dark-border">
                            <div className="font-bold text-accent-gold-dark dark:text-accent-gold mb-xs">{tier.range}</div>
                            <div className="text-gray-700 dark:text-gray-300">{tier.recommendation}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    {step.resources && (
                      <div className="mb-lg">
                        <div className="font-semibold text-gray-900 dark:text-white mb-md">Resources:</div>
                        <ul className="space-y-xs">
                          {step.resources.map((r) => (
                            <li key={r} className="text-gray-700 dark:text-gray-300 text-sm">• {r}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="bg-accent-gold/10 border-l-4 border-accent-gold rounded p-lg">
                      <p className="font-medium text-gray-900 dark:text-white">{step.advice || step.warning || step.note || step.ideal}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="buying" className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl">
            <ShoppingCart className="w-12 h-12 text-green-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{COLLECTOR_GUIDES.buyingGuide.title}</h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-2xl">
            {COLLECTOR_GUIDES.buyingGuide.options.map((option) => (
              <div key={option.type} className="bg-white dark:bg-dark-bg-tertiary rounded-2xl p-3xl border border-gray-200 dark:border-dark-border">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-xl">{option.type}</h3>
                <div className="grid md:grid-cols-2 gap-xl mb-xl">
                  <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-xl border border-green-200 dark:border-green-800">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-md">Pros</h4>
                    <ul className="space-y-sm">
                      {option.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-sm">
                          <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-xl border border-red-200 dark:border-red-800">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-md">Cons</h4>
                    <ul className="space-y-sm">
                      {option.cons.map((con) => (
                        <li key={con} className="flex items-start gap-sm">
                          <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                          <span className="text-gray-700 dark:text-gray-300">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-lg border border-blue-200 dark:border-blue-800 mb-md">
                  <span className="font-semibold">Best For:</span> {option.bestFor}
                </div>
                {option.trustedSources && (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Trusted Sources:</span> {option.trustedSources}
                  </div>
                )}
                {option.warning && (
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-400 dark:border-amber-600 rounded-lg p-lg mt-md">
                    <div className="flex items-start gap-md">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 dark:text-gray-300">{option.warning}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fakes" className="py-5xl">
        <div className="container-golden">
          <div className="flex items-center gap-md mb-3xl">
            <AlertTriangle className="w-12 h-12 text-red-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{COLLECTOR_GUIDES.spotFakes.title}</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-400 dark:border-red-600 rounded-2xl p-3xl mb-3xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-lg">Red Flags to Watch For</h3>
              <div className="space-y-lg">
                {COLLECTOR_GUIDES.spotFakes.redFlags.map((flag) => (
                  <div key={flag.indicator} className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-xl">
                    <h4 className="text-xl font-bold text-red-600 dark:text-red-400 mb-md">{flag.indicator}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{flag.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-3xl border border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-lg">Protection Tips</h3>
              <ul className="space-y-md">
                {COLLECTOR_GUIDES.spotFakes.protectionTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-sm">
                    <span className="text-green-600 dark:text-green-400 text-xl mt-1">✓</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-xl">Learn Proper Watch Care</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl max-w-2xl mx-auto">
            Protect your investment with proper maintenance and care techniques
          </p>
          <Link href={`/${lang}/watch-care`} className="inline-flex items-center gap-sm px-xl py-lg bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold rounded-lg transition-all duration-377 hover:shadow-gold text-lg">
            Watch Care Guide
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
