import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Sun, Cpu, ArrowLeft } from 'lucide-react';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  return {
    title: (dict as any).meta.movements.other.title,
    description: (dict as any).meta.movements.other.description,
    openGraph: { title: (dict as any).meta.movements.other.title, description: (dict as any).meta.movements.other.description },
  };
}

export default async function OtherPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const content = (dict as any).pages.movements.other;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <section className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-golden relative z-10">
          <Link href={`/${lang}/movements`} className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {dict.megaMenu.learn.movements.title}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Cpu className="w-12 h-12" />
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
          <div className="flex items-center gap-4 mb-8">
            <Sun className="w-10 h-10 text-yellow-600" />
            <h2 className="text-4xl font-bold">{content.technologies.solar.title}</h2>
          </div>
          <p className="text-lg leading-relaxed mb-6">{content.technologies.solar.howItWorks}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {content.technologies.solar.models.map((m: any, i: any) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl shadow-luxury">
                <h3 className="text-lg font-bold mb-2">{m.model}</h3>
                <p className="text-blue-600 font-semibold mb-2">{m.price}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{m.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-golden max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <Zap className="w-10 h-10 text-orange-600" />
            <h2 className="text-4xl font-bold">{content.technologies.kinetic.title}</h2>
          </div>
          <p className="text-lg leading-relaxed mb-6">{content.technologies.kinetic.description}</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container-golden max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">{content.technologies.springDrive.title}</h2>
          <p className="text-lg leading-relaxed mb-6 text-white/90">{content.technologies.springDrive.description}</p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {content.technologies.springDrive.models.map((m: any, i: any) => (
              <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">{m.model}</h3>
                <p className="text-blue-300 font-semibold mb-2">{m.price}</p>
                <p className="text-sm text-white/80">{m.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-golden max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{content.conclusion.title}</h2>
          <p className="text-lg leading-relaxed">{content.conclusion.content}</p>
        </div>
      </section>
    </div>
  );
}
