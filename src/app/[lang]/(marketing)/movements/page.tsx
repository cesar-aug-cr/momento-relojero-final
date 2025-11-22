import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ContentLayout } from '@/components/ui/ContentLayout';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import Link from 'next/link';
import { Cog, Battery, Hand, Zap, Sun, Sparkles, ArrowRight } from 'lucide-react';
import { getDictionary } from '@/i18n/get-dictionary';
import { type Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);

  return {
    title: 'How Watches Work: Movement Types Explained | Momento Relojero',
    description: 'Understanding watch movements from quartz to mechanical. Learn how different movement types work, their pros and cons, and which is right for you.',
  };
}

export default async function MovementsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang = 'es' } = await params;
  const dict = await getDictionary(lang);
  const movementCards = [
    {
      type: 'quartz',
      name: dict.movementTypes?.quartz?.name || 'Quartz',
      icon: <Battery className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      href: '/movements/quartz',
      description: dict.movementTypes?.quartz?.description
    },
    {
      type: 'manual',
      name: dict.movementTypes?.manual?.name || 'Manual Wind',
      icon: <Hand className="w-8 h-8" />,
      color: 'from-amber-500 to-orange-500',
      href: '/movements/manual',
      description: dict.movementTypes?.manual?.description
    },
    {
      type: 'automatic',
      name: dict.movementTypes?.automatic?.name || 'Automatic',
      icon: <Cog className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      href: '/movements/automatic',
      description: dict.movementTypes?.automatic?.description
    },
    {
      type: 'solar',
      name: dict.movementTypes?.other?.types?.solar?.name || 'Solar',
      icon: <Sun className="w-8 h-8" />,
      color: 'from-yellow-500 to-amber-500',
      href: '/movements/other#solar',
      description: dict.movementTypes?.other?.types?.solar?.description
    },
    {
      type: 'kinetic',
      name: dict.movementTypes?.other?.types?.kinetic?.name || 'Kinetic',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      href: '/movements/other#kinetic',
      description: dict.movementTypes?.other?.types?.kinetic?.description
    },
    {
      type: 'springDrive',
      name: dict.movementTypes?.other?.types?.springDrive?.name || 'Spring Drive',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-indigo-500 to-violet-500',
      href: '/movements/other#spring-drive',
      description: dict.movementTypes?.other?.types?.springDrive?.description
    }
  ];

  const comparisonRows = dict.movementTypes?.comparison?.rows || [
    'Accuracy',
    'Maintenance',
    'Power Source',
    'Lifespan',
    'Price Range',
    'Prestige'
  ];

  const comparisonColumns = dict.movementTypes?.comparison?.columns || [
    {
      header: 'Quartz',
      items: [
        '±15 sec/month',
        'Battery every 2-5 years',
        'Battery',
        '20-30 years',
        'Low-Medium',
        'Utilitarian'
      ]
    },
    {
      header: 'Automatic',
      items: [
        '±5-15 sec/day',
        'Service every 5-7 years',
        'Wrist motion',
        'Generations',
        'Medium-Very High',
        'High'
      ],
      highlighted: true
    },
    {
      header: 'Manual',
      items: [
        '±5-15 sec/day',
        'Service every 5-7 years',
        'Hand winding',
        'Generations',
        'Medium-High',
        'Traditional'
      ]
    }
  ];

  return (
    <>
      <PageHero
        title={dict.movementTypes?.pageHero?.title || "How Watches Work"}
        subtitle={dict.movementTypes?.pageHero?.subtitle || "Understanding Movements"}
        description={dict.movementTypes?.pageHero?.description || "Explore the mechanical and electronic hearts that power timepieces. From battery-powered quartz to intricate mechanical movements, discover how each type works and which suits your needs."}
        size="large"
      />

      <ContentLayout maxWidth="wide">
        <div>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            {dict.movementTypes?.intro || "The movement (or caliber) is the engine of a watch—the mechanism that keeps time and powers all complications. Understanding movement types is essential for choosing the right watch and appreciating the engineering inside."}
          </p>

          <h2>{dict.movementTypes?.movementTypesTitle || "Movement Types"}</h2>
          <p className="mb-8">
            {dict.movementTypes?.movementTypesDescription || "Click any movement type to learn more about how it works, its advantages and disadvantages, and which watches use it."}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {movementCards.map((movement, idx) => (
              <Link
                key={idx}
                href={movement.href}
                className="group relative bg-white rounded-xl border-2 border-slate-200 hover:border-amber-500 p-8 transition-all hover:shadow-2xl overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${movement.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${movement.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {movement.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {movement.name}
                </h3>

                {movement.description && (
                  <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {movement.description}
                  </p>
                )}

                {/* Arrow */}
                <div className="flex items-center text-amber-600 font-medium">
                  <span>{dict.movementTypes?.learnMore || "Learn more"}</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <h2>{dict.movementTypes?.comparisonTitle || "Quick Comparison"}</h2>
          <p className="mb-6">
            {dict.movementTypes?.comparisonDescription || "Here's how the three main movement types compare across key factors:"}
          </p>

          <ComparisonTable
            rowHeaders={comparisonRows}
            columns={comparisonColumns}
            className="my-12"
          />

          <h2>{dict.movementTypes?.choosingTitle || "Choosing the Right Movement"}</h2>

          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">{dict.movementTypes?.chooseQuartzTitle || "Choose Quartz If:"}</h3>
              <ul className="space-y-2 text-blue-800">
                {(dict.movementTypes?.chooseQuartz || [
                  "You prioritize accuracy and convenience",
                  "Low maintenance is important",
                  "You're on a tight budget",
                  "You don't wear watches daily"
                ]).map((reason: string) => (
                  <li key={reason} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-4">{dict.movementTypes?.chooseAutomaticTitle || "Choose Automatic If:"}</h3>
              <ul className="space-y-2 text-purple-800">
                {(dict.movementTypes?.chooseAutomatic || [
                  "You appreciate mechanical craftsmanship",
                  "You wear your watch regularly",
                  "Long-term value matters",
                  "You enjoy the sweeping seconds hand"
                ]).map((reason: string) => (
                  <li key={reason} className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-4">{dict.movementTypes?.chooseManualTitle || "Choose Manual If:"}</h3>
              <ul className="space-y-2 text-amber-800">
                {(dict.movementTypes?.chooseManual || [
                  "You want a daily ritual",
                  "You prefer thinner watches",
                  "You appreciate tradition",
                  "You enjoy mechanical interaction"
                ]).map((reason: string) => (
                  <li key={reason} className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-12 my-16">
            <h2 className="text-3xl font-bold mb-6 text-white">{dict.movementTypes?.hierarchyTitle || "The Movement Hierarchy"}</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              {dict.movementTypes?.hierarchyParagraph1 || "In the watch world, there's an unspoken hierarchy. Mechanical movements (manual and automatic) are generally more prestigious than quartz, despite being less accurate. Why? Because they represent traditional craftsmanship, complex engineering, and human artistry. A mechanical movement might have 200+ components assembled by hand, each playing a specific role in timekeeping."}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {dict.movementTypes?.hierarchyParagraph2 || "That said, quartz movements revolutionized watchmaking and remain the most practical choice for most people. Grand Seiko has even elevated quartz to haute horlogerie status. The \"best\" movement is the one that fits your lifestyle, values, and budget."}
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">{dict.movementTypes?.ctaTitle || "Ready to Go Deeper?"}</h3>
            <p className="text-amber-800 leading-relaxed mb-6">
              {dict.movementTypes?.ctaDescription || "Now that you understand movement types, explore individual movement pages for detailed technical information, animations, and recommendations."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${lang}/movements/automatic`}
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors inline-flex items-center gap-2"
              >
                <Cog className="w-5 h-5" />
                <span>{dict.movementTypes?.automaticButton || "Automatic Movements"}</span>
              </Link>
              <Link
                href={`/${lang}/movements/quartz`}
                className="px-6 py-3 bg-white text-amber-600 border-2 border-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors inline-flex items-center gap-2"
              >
                <Battery className="w-5 h-5" />
                <span>{dict.movementTypes?.quartzButton || "Quartz Movements"}</span>
              </Link>
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
