import type { Metadata } from 'next';
import Link from 'next/link';
import { Wind, ArrowLeft } from 'lucide-react';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.movements.manual.title,
    description: dict.meta.movements.manual.description,
    openGraph: { title: dict.meta.movements.manual.title, description: dict.meta.movements.manual.description },
  };
}

export default async function ManualPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const content = dict.movements.manual;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <section className="relative bg-gradient-to-r from-amber-700 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-golden relative z-10">
          <Link href={`/${lang}/movements`} className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {dict.megaMenu.learn.movements.title}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Wind className="w-12 h-12" />
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
          <h2 className="text-4xl font-bold mb-8">{content.advantages.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.advantages.benefits.map((b, i) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl shadow-luxury">
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{content.howToWind.title}</h2>
          <ol className="space-y-4">
            {content.howToWind.instructions.map((inst, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">{i + 1}</span>
                <div>
                  <h3 className="font-bold">{inst.step}</h3>
                  <p className="text-slate-600">{inst.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
