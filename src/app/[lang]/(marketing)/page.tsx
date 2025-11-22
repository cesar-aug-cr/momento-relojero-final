import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  Cog,
  Watch,
  Star,
  Globe,
  Target,
  Wrench,
  BookOpen,
  ArrowRight,
  Shield,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { ExitIntentPopup } from '@/components/conversion/ExitIntentPopup';
import { SocialProof } from '@/components/conversion/SocialProof';
import { StructuredData, getOrganizationSchema, getWebsiteSchema } from '@/lib/structured-data';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';
import { HeroSection } from '@/components/home/HeroSection';
import { BentoGrid, BentoItem } from '@/components/ui/BentoGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'es': '/es',
        'en': '/en',
        'fr': '/fr',
      },
    },
  };
}

const SECTION_ICONS = {
  watch101: BookOpen,
  howWatchesWork: Cog,
  watchTypes: Watch,
  watchFeatures: Star,
  worldOfWatches: Globe,
  collectorsCorner: Target,
  watchCare: Wrench,
  blog: BookOpen,
} as const;

const SECTION_ROUTES = {
  watch101: '/watch-101',
  howWatchesWork: '/how-watches-work',
  watchTypes: '/watch-types',
  watchFeatures: '/watch-features',
  worldOfWatches: '/world-of-watches',
  collectorsCorner: '/collectors-corner',
  watchCare: '/watch-care',
  blog: '/blog',
} as const;

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);

  const organizationSchema = getOrganizationSchema(lang);
  const websiteSchema = getWebsiteSchema(lang);

  const sections = [
    {
      key: 'watch101' as const,
      title: dict.sections.watch101.title,
      description: dict.sections.watch101.description,
      colSpan: "md:col-span-2",
    },
    {
      key: 'howWatchesWork' as const,
      title: dict.sections.howWatchesWork.title,
      description: dict.sections.howWatchesWork.description,
      colSpan: "md:col-span-1",
    },
    {
      key: 'watchTypes' as const,
      title: dict.sections.watchTypes.title,
      description: dict.sections.watchTypes.description,
      colSpan: "md:col-span-1",
    },
    {
      key: 'watchFeatures' as const,
      title: dict.sections.watchFeatures.title,
      description: dict.sections.watchFeatures.description,
      colSpan: "md:col-span-2",
    },
    {
      key: 'worldOfWatches' as const,
      title: dict.sections.worldOfWatches.title,
      description: dict.sections.worldOfWatches.description,
      colSpan: "md:col-span-3",
    },
    {
      key: 'collectorsCorner' as const,
      title: dict.sections.collectorsCorner.title,
      description: dict.sections.collectorsCorner.description,
      colSpan: "md:col-span-1",
    },
    {
      key: 'watchCare' as const,
      title: dict.sections.watchCare.title,
      description: dict.sections.watchCare.description,
      colSpan: "md:col-span-1",
    },
    {
      key: 'blog' as const,
      title: dict.sections.blog.title,
      description: dict.sections.blog.description,
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <>
      <StructuredData data={[organizationSchema, websiteSchema]} />
      <ExitIntentPopup lang={lang} />

      <main className="bg-dark-bg min-h-screen">
        {/* Hero Section */}
        <HeroSection
          title={dict.hero.title}
          subtitle={dict.hero.subtitle}
          description={dict.hero.description}
          ctaText={dict.hero.cta_start}
          ctaLink={`/${lang}/watch-101`}
        />

        {/* Featured Masterpiece Section (New) */}
        <section className="py-24 relative overflow-hidden">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent-gold/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <img
                  src="/seagull-1962-plan-b-ltd-edition.jpg"
                  alt="Seagull 1962 Plan B Ltd Edition"
                  className="relative z-10 rounded-2xl shadow-2xl border border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-700"
                />
              </div>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-gold/30 text-accent-gold text-sm uppercase tracking-widest">
                  <Star className="w-4 h-4" />
                  {dict.sections.featuredMasterpiece.badge}
                </div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                  {dict.sections.featuredMasterpiece.title}
                </h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  {dict.sections.featuredMasterpiece.description}
                </p>
                <div className="flex gap-6">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-white">200+</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Years History</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-white">1000+</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Masterpieces</span>
                  </div>
                </div>
                <Link
                  href={`/${lang}/world-of-watches`}
                  className="inline-flex items-center gap-3 text-accent-gold hover:text-white transition-colors text-lg font-medium group"
                >
                  {dict.sections.featuredMasterpiece.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Navigation */}
        <section className="py-24 bg-dark-bg-secondary/50">
          <div className="container-wide">
            <SectionHeading
              title={dict.sections.title}
              subtitle={dict.sections.subtitle}
            />

            <BentoGrid>
              {sections.map((section, i) => {
                const Icon = SECTION_ICONS[section.key];
                return (
                  <BentoItem
                    key={section.key}
                    title={section.title}
                    description={section.description}
                    header={<Icon className="w-8 h-8 text-accent-gold mb-4" />}
                    className={section.colSpan}
                    href={`/${lang}${SECTION_ROUTES[section.key]}`}
                    icon={<Icon className="w-4 h-4" />}
                  />
                );
              })}
            </BentoGrid>
          </div>
        </section>

        {/* Horology Timeline (New) */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="container-wide text-center">
            <SectionHeading
              title={dict.sections.legacyOfTime.title}
              subtitle={dict.sections.legacyOfTime.subtitle}
            />

            <div className="relative mt-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {dict.sections.legacyOfTime.timeline.map((item: any, i: number) => (
                  <div key={i} className="group">
                    <div className="w-4 h-4 bg-accent-gold rounded-full mx-auto mb-6 ring-4 ring-dark-bg relative z-20 group-hover:scale-150 transition-transform" />
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-accent-gold/50 transition-colors">
                      <span className="text-4xl font-bold text-white/20 block mb-2">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/20 to-dark-bg z-0" />
          <div className="container-wide relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/10 mb-8">
              <Clock className="w-8 h-8 text-accent-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              {dict.newsletter.title}
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              {dict.newsletter.description}
            </p>
            <Link
              href={`/${lang}/newsletter`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-gold hover:bg-white text-dark-bg font-bold rounded-full transition-all hover:scale-105"
            >
              {dict.newsletter.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
