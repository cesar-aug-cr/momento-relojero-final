import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowLeft } from 'lucide-react';
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
    title: meta.watchTypes.dress.title,
    description: meta.watchTypes.dress.description,
    openGraph: {
      title: meta.watchTypes.dress.title,
      description: meta.watchTypes.dress.description,
    },
  };
}

export default async function DressWatchesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const content = (dict.pages as any).watchTypes.dress;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-golden relative z-10">
          <Link href={`/${lang}/watch-types`} className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {dict.megaMenu.watches.title}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-12 h-12" />
            <h1 className="text-5xl md:text-6xl font-bold">{content.hero.title}</h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl">{content.hero.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-golden max-w-4xl">
          <div className="bg-white dark:bg-card rounded-xl p-8 shadow-luxury">
            <h2 className="text-3xl font-bold mb-6">{content.hero.subtitle}</h2>
            <p className="text-lg leading-relaxed mb-6">{content.intro}</p>
            <p className="text-lg leading-relaxed">{content.history.content}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container-golden max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">{content.whatMakes.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
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
          <h2 className="text-3xl font-bold mb-8">{content.whenToWear.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.whenToWear.occasions.map((occasion, i) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl shadow-luxury hover-lift">
                <h3 className="text-lg font-bold mb-2">{occasion.event}</h3>
                <p className="text-slate-600 dark:text-slate-300">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">{content.icons.title}</h2>
          <div className="space-y-4">
            {content.icons.models.map((watch, i) => (
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
          <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">{content.rules.title}</h2>
            <ul className="space-y-3">
              {content.rules.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <span className="text-lg">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{content.vs.title}</h2>
          <p className="text-lg leading-relaxed text-slate-200">{content.vs.content}</p>
        </div>
      </section>
    </div>
  );
}
