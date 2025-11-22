import type { Metadata } from 'next';
import Link from 'next/link';
import { Timer, ArrowLeft } from 'lucide-react';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const meta = (dict as any).meta;

  return {
    title: meta.watchTypes.chronograph.title,
    description: meta.watchTypes.chronograph.description,
    openGraph: {
      title: meta.watchTypes.chronograph.title,
      description: meta.watchTypes.chronograph.description,
    },
  };
}

export default async function ChronographPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const content = (dict.pages as any).watchTypes.chronograph;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <section className="relative bg-gradient-to-r from-red-700 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-golden relative z-10">
          <Link href={`/${lang}/watch-types`} className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {dict.megaMenu.watches.title}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Timer className="w-12 h-12" />
            <h1 className="text-5xl md:text-6xl font-bold">{content.hero.title}</h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">{content.hero.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-golden max-w-4xl">
          <div className="bg-white dark:bg-card rounded-xl p-8 shadow-luxury">
            <h2 className="text-3xl font-bold mb-6">{content.hero.subtitle}</h2>
            <p className="text-lg leading-relaxed mb-6">{content.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container-golden max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">{content.whatMakes.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.whatMakes.features.map((feature, i) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl shadow-luxury">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2">{feature.description}</p>
                <p className="text-sm text-slate-500">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{content.history.title}</h2>
          <p className="text-lg leading-relaxed">{content.history.content}</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">{content.legends.title}</h2>
          <div className="space-y-4">
            {content.legends.models.map((watch, i) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl shadow-luxury">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{watch.brand} {watch.model}</h3>
                    <p className="text-blue-600 font-semibold">{watch.price}</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300">{watch.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">{content.types.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.types.categories.map((type, i) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl shadow-luxury">
                <h3 className="text-xl font-bold mb-2">{type.type}</h3>
                <p className="text-slate-600 dark:text-slate-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50 dark:bg-amber-900/20">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{content.using.title}</h2>
          <ol className="space-y-4">
            {content.using.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <p className="text-lg pt-1">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/20 rounded-lg">
            <p className="text-red-800 dark:text-red-200"><strong>{dict.megaMenu.learn.title}:</strong> {content.using.warning}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{content.tachymeter.title}</h2>
          <p className="text-lg leading-relaxed">{content.tachymeter.content}</p>
        </div>
      </section>
    </div>
  );
}
