import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const meta = (dict as any).meta;
  return {
    title: meta.watchTypes.field.title,
    description: meta.watchTypes.field.description,
    openGraph: { title: meta.watchTypes.field.title, description: meta.watchTypes.field.description },
  };
}

export default async function FieldPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const content = (dict.pages as any).watchTypes.field;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <section className="relative bg-gradient-to-r from-green-800 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-golden relative z-10">
          <Link href={`/${lang}/watch-types`} className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {dict.megaMenu.watches.title}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Compass className="w-12 h-12" />
            <h1 className="text-5xl md:text-6xl font-bold">{content.hero.title}</h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">{content.hero.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-golden max-w-4xl">
          <p className="text-lg leading-relaxed">{content.intro}</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container-golden max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">{content.whatMakes.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.whatMakes.features.map((f, i) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl shadow-luxury">
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2">{f.description}</p>
                <p className="text-sm text-slate-500">{f.detail}</p>
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
          <h2 className="text-3xl font-bold mb-8">{content.icons.title}</h2>
          <div className="space-y-4">
            {content.icons.models.map((w, i) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl shadow-luxury">
                <h3 className="text-xl font-bold">{w.brand} {w.model}</h3>
                <p className="text-blue-600 font-semibold">{w.price}</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2">{w.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{content.philosophy.title}</h2>
          <p className="text-lg leading-relaxed">{content.philosophy.content}</p>
        </div>
      </section>
    </div>
  );
}
