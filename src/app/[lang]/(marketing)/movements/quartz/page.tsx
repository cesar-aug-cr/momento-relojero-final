import type { Metadata } from 'next';
import Link from 'next/link';
import { Battery, ArrowLeft } from 'lucide-react';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  return {
    title: (dict as any).meta.movements.quartz.title,
    description: (dict as any).meta.movements.quartz.description,
    openGraph: { title: (dict as any).meta.movements.quartz.title, description: (dict as any).meta.movements.quartz.description },
  };
}

export default async function QuartzPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const content = (dict as any).pages.movements.quartz;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <section className="relative bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-golden relative z-10">
          <Link href={`/${lang}/movements`} className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {dict.megaMenu.learn.movements.title}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Battery className="w-12 h-12" />
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
            {content.advantages.benefits.map((b: any, i: any) => (
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
          <h2 className="text-3xl font-bold mb-8">{content.famousExamples.title}</h2>
          <div className="space-y-4">
            {content.famousExamples.models.map((w: any, i: any) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl shadow-luxury">
                <h3 className="text-xl font-bold">{w.brand} {w.model}</h3>
                <p className="text-blue-600 font-semibold">{w.price}</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2">{w.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{content.conclusion.title}</h2>
          <p className="text-lg leading-relaxed text-white/90">{content.conclusion.content}</p>
        </div>
      </section>
    </div>
  );
}
