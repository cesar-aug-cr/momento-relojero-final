import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContentLayout } from '@/components/ui/ContentLayout';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import Link from 'next/link';
import { Anchor, Shield, Eye, Clock, ArrowRight } from 'lucide-react';
import { WATCH_TYPES } from '@/lib/watch-data';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.watchTypes.dive.title,
    description: dict.meta.watchTypes.dive.description,
    openGraph: {
      title: dict.meta.watchTypes.dive.title,
      description: dict.meta.watchTypes.dive.description,
    },
  };
}

export default async function DiveWatchesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const diveWatch = WATCH_TYPES.find(w => w.slug === 'dive');
  const content = dict.pages.watchTypes.dive;

  const featureIcons = [Shield, Clock, Eye, Anchor];

  return (
    <>
      <PageHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        size="large"
        gradient="from-blue-900 via-cyan-900 to-blue-900"
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <Breadcrumb
          items={[
            { label: dict.nav.watchTypes, href: `/${lang}/watch-types` },
            { label: content.hero.title }
          ]}
        />
      </div>

      <ContentLayout
        sidebar={
          <div>
            <h3 className="font-bold text-lg mb-4">{dict.pages.watchTypes.dive.sidebar?.specsTitle || 'Key Specifications'}</h3>
            {diveWatch && (
              <div className="space-y-4 mb-6">
                {diveWatch.characteristics.map((char, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-sm text-slate-700">{char}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
              <h4 className="font-bold text-sm text-blue-900 mb-2">{dict.pages.watchTypes.dive.sidebar?.priceRangeTitle || 'Price Range'}</h4>
              <p className="text-blue-800">{diveWatch?.priceRange}</p>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-bold text-sm text-amber-900 mb-2">{dict.pages.watchTypes.dive.sidebar?.bestForTitle || 'Best For'}</h4>
              <ul className="space-y-1">
                {diveWatch?.bestFor.map((use, idx) => (
                  <li key={idx} className="text-sm text-amber-800">• {use}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-bold text-sm mb-3">{dict.pages.watchTypes.dive.sidebar?.relatedTitle || 'Related Topics'}</h4>
              <div className="space-y-2">
                <Link href={`/${lang}/watch-101/water-resistance`} className="block text-sm text-blue-600 hover:text-blue-700">
                  → {dict.pages.watchTypes.dive.sidebar?.waterResistanceLink || 'Water Resistance Guide'}
                </Link>
                <Link href={`/${lang}/movements/automatic`} className="block text-sm text-blue-600 hover:text-blue-700">
                  → {dict.pages.watchTypes.dive.sidebar?.movementsLink || 'Automatic Movements'}
                </Link>
                <Link href={`/${lang}/care`} className="block text-sm text-blue-600 hover:text-blue-700">
                  → {dict.pages.watchTypes.dive.sidebar?.careLink || 'Watch Care Guide'}
                </Link>
              </div>
            </div>
          </div>
        }
      >
        <div>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            {content.intro}
          </p>

          <h2>{content.whatMakes.title}</h2>

          <p>
            {content.whatMakes.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            {content.whatMakes.features.map((feature, idx) => {
              const IconComponent = featureIcons[idx] || Shield;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-500 transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm mb-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              );
            })}
          </div>

          <h2>{content.history.title}</h2>

          {content.history.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <h2>{content.popular.title}</h2>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            {content.popular.models.map((watch, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-blue-500 transition-all hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{watch.brand}</h3>
                    <p className="text-blue-600 font-medium">{watch.model}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600">{content.popular.wrLabel || 'Water Resist.'}</div>
                    <div className="font-bold text-blue-600">{watch.wr}</div>
                  </div>
                </div>
                <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                  {watch.highlight}
                </p>
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-sm text-slate-600">{content.popular.priceLabel || 'Price Range'}</div>
                  <div className="font-bold text-slate-900">{watch.price}</div>
                </div>
              </div>
            ))}
          </div>

          <h2>{content.choosing.comparisonTitle}</h2>
          <p className="mb-6">
            {content.choosing.comparisonIntro}
          </p>

          <ComparisonTable
            rowHeaders={content.choosing.comparison.rows}
            columns={content.choosing.comparison.columns}
            className="my-12"
          />

          <h2>{content.choosing.title}</h2>

          <p>
            {content.choosing.intro}
          </p>

          {content.choosing.sections.map((section, idx) => (
            <div key={idx}>
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}

          <div className="bg-gradient-to-br from-blue-900 to-cyan-900 text-white rounded-xl p-12 my-16">
            <h2 className="text-3xl font-bold mb-6 text-white">{content.paradox.title}</h2>
            {content.paradox.content.map((paragraph, idx) => (
              <p key={idx} className="text-blue-100 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg my-12">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">{content.proTips.title}</h3>
            <ul className="space-y-3 text-amber-800">
              {content.proTips.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">•</span>
                  <span><strong>{tip.title}:</strong> {tip.content}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{content.relatedTypes?.title || 'Explore More Watch Types'}</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              {content.relatedTypes?.intro || 'Dive watches are just one category in the fascinating world of watch styles. Discover other types that might suit different occasions and preferences.'}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href={`/${lang}/watch-types/chronograph`}
                className="p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600 mb-1">
                  {dict.megaMenu.watches.typesAndStyles.chronograph.title}
                </h3>
                <p className="text-sm text-slate-600 mb-2">{dict.megaMenu.watches.typesAndStyles.chronograph.description}</p>
                <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${lang}/watch-types/gmt`}
                className="p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600 mb-1">
                  {dict.megaMenu.watches.typesAndStyles.gmt.title}
                </h3>
                <p className="text-sm text-slate-600 mb-2">{dict.megaMenu.watches.typesAndStyles.gmt.description}</p>
                <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${lang}/watch-types/dress`}
                className="p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600 mb-1">
                  {dict.megaMenu.watches.typesAndStyles.dress.title}
                </h3>
                <p className="text-sm text-slate-600 mb-2">{dict.megaMenu.watches.typesAndStyles.dress.description}</p>
                <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
