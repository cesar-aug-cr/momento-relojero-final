import { TerminologyClient } from './terminology-client';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);

  return {
    title: `${dict.megaMenu.learn.fundamentals.terminology.title} | Momento Relojero`,
    description: dict.megaMenu.learn.fundamentals.terminology.description,
  };
}

export default async function TerminologyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);

  return <TerminologyClient lang={lang} dict={dict} />;
}
