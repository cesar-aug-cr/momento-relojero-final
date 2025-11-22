import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContentLayout } from '@/components/ui/ContentLayout';
import { Heart, Smartphone, Gem, TrendingUp, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Wear a Watch in the Smartphone Era | Momento Relojero',
  description: 'Discover why mechanical watches remain relevant and cherished in the age of smartphones. Style, craftsmanship, and meaning beyond timekeeping.',
};

export default async function WhyWearPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang = 'es' } = await params;
  const reasons = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Emotional Connection',
      description: 'A watch becomes a companion, marking life\'s important moments and creating lasting memories.'
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'Mechanical Artistry',
      description: 'Hundreds of tiny components working in harmony—a masterpiece of engineering on your wrist.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Investment Value',
      description: 'Quality watches retain or appreciate in value, unlike disposable technology.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Signaling',
      description: 'A watch communicates taste, success, and attention to detail in seconds.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Personal Style',
      description: 'The most versatile accessory a man can wear, transforming any outfit.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Digital Detox',
      description: 'Check the time without unlocking your phone and falling into distractions.'
    }
  ];

  return (
    <>
      <PageHero
        title="Why Wear a Watch?"
        subtitle="Watch 101"
        description="In an age of smartphones, why do mechanical watches not only survive but thrive? Explore the enduring appeal of wristwatches."
        size="medium"
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <Breadcrumb
          items={[
            { label: 'Watch 101', href: '/watch-101' },
            { label: 'Why Wear a Watch' }
          ]}
        />
      </div>

      <ContentLayout>
        <div>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            &quot;I have a phone&quot; is the most common objection to wearing a watch. It&apos;s technically true—smartphones tell time accurately. But that misses the point entirely. Watches have transcended their utilitarian origins to become symbols of craftsmanship, style, and personal expression. Here&apos;s why watches matter more than ever.
          </p>

          <h2>The Case for Watches in the Modern World</h2>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-lg border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    {reason.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2>It&apos;s Not About Telling Time</h2>

          <p>
            The irony of modern watchmaking is that telling time is the least interesting thing a watch does. Smartphones are more accurate, always synchronized, and completely free. Yet the mechanical watch industry is thriving, with waitlists stretching years for certain models. Why?
          </p>

          <p>
            Because watches have evolved into something far more meaningful than timepieces. They&apos;re mechanical art, wearable history, and personal talismans. A Rolex Submariner isn&apos;t purchased for superior timekeeping—it&apos;s chosen for its design legacy, robust build quality, and the way it makes the owner feel. It&apos;s James Bond, Steve McQueen, and every adventure film hero condensed into 40mm of steel.
          </p>

          <h3>The Romance of Mechanical Engineering</h3>

          <p>
            Open the case back of an automatic watch and you enter a different world. Hundreds of components—gears, springs, jewels, screws—working together in a dance measured in fractions of millimeters. The balance wheel oscillates 28,800 times per hour, every hour, for years on end. The rotor spins with your wrist movement, winding the mainspring that powers everything.
          </p>

          <p>
            This isn&apos;t magic; it&apos;s physics and precision engineering refined over centuries. It&apos;s human ingenuity solving complex problems with elegant mechanical solutions. When you wear a mechanical watch, you&apos;re carrying a small miracle of craftsmanship—something increasingly rare in our digital, disposable world.
          </p>

          <h3>Style and Social Signaling</h3>

          <p>
            Men&apos;s fashion options are limited compared to women&apos;s. A watch is the most versatile and socially acceptable way for men to express personal style. It works with every outfit from jeans and a t-shirt to a tuxedo. It doesn&apos;t go out of fashion like clothing. And it communicates volumes about the wearer&apos;s taste, success, and priorities.
          </p>

          <p>
            A Patek Philippe signals old money and refined taste. A Rolex broadcasts success and achievement. A vintage Seiko shows appreciation for value and history. An independent watchmaker like F.P. Journe indicates deep horological knowledge. These signals are subtle but understood by those who know. In professional settings, a quality watch can open doors and create connections.
          </p>

          <h3>Investment and Heritage</h3>

          <p>
            Unlike smartphones that depreciate the moment you leave the store, quality watches retain value and often appreciate. A stainless steel Rolex Submariner purchased in 1990 for $2,000 sells today for $10,000-15,000. Vintage Patek Philippe models have auctioned for millions. Even if not investment-grade, a well-maintained Swiss watch can be worn for decades and passed to the next generation.
          </p>

          <p>
            This creates a completely different relationship with the object. You&apos;re not just buying a product; you&apos;re becoming a temporary custodian of something with history and future. Many watch enthusiasts wear pieces inherited from fathers or grandfathers. That iPhone in your pocket will be e-waste in five years. Your watch can last centuries.
          </p>

          <h3>Mindfulness and Intentionality</h3>

          <p>
            There&apos;s something meditative about winding a manual watch each morning. It creates a ritual, a moment of mindfulness before the day begins. Checking the time on your wrist is instant and unintrusive. Pulling out your phone invites distraction—notifications, messages, emails demanding attention. A watch lets you stay present.
          </p>

          <p>
            Many people discover that wearing a watch reduces phone dependency. You check the time without unlocking your device, avoiding the dopamine trap of social media and news. This small change can meaningfully improve focus and reduce digital addiction.
          </p>

          <h2>The Joy of Collecting</h2>

          <p>
            Watches are endlessly fascinating to collect. Different styles serve different occasions and outfits. Different movements offer unique characteristics. Different brands carry distinct histories and philosophies. The depth of watch collecting is bottomless—there&apos;s always something new to learn, another grail to pursue, another auction to follow.
          </p>

          <p>
            The watch community is vibrant and welcoming. Forums, YouTube channels, meetups, and watch shows connect enthusiasts worldwide. Sharing your collection, discussing new releases, and hunting for vintage pieces becomes a rewarding hobby that combines history, engineering, design, and commerce.
          </p>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-lg my-12">
            <h3 className="text-2xl font-bold mb-4">The Truth About Watch Addiction</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Fair warning: watches are addictive. What starts as &quot;I just need one nice watch&quot; quickly becomes a collection. You&apos;ll find yourself browsing forums at 2 AM, watching YouTube reviews, and making spreadsheets comparing specs. Your significant other will ask why you need another watch when you already have several.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The answer is simple: because each one is different. Because that vintage Speedmaster has the perfect patina. Because you need a GMT for traveling. Because you deserve it. Welcome to the obsession—we&apos;ve all been there.
            </p>
          </div>

          <h2>But Do You Actually Need a Watch?</h2>

          <p>
            No. You don&apos;t need a watch in the practical, utilitarian sense. Your smartphone tells better time. But you also don&apos;t <em>need</em> art on your walls, nice furniture, good coffee, or quality clothes. We surround ourselves with objects that bring joy, express identity, and make life richer.
          </p>

          <p>
            A watch is one of the few possessions that combines function, art, engineering, investment, and personal meaning. It&apos;s useful daily but also special enough for your wedding day. It&apos;s an heirloom in progress, a conversation starter, a confidence booster, and a mechanical miracle. That&apos;s why, in an age of smartphones, watches aren&apos;t just surviving—they&apos;re thriving.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Start Your Journey</h3>
            <p className="text-amber-800 leading-relaxed mb-4">
              If you&apos;re considering your first serious watch, congratulations—you&apos;re about to enter a fascinating world. Start with something you love aesthetically that fits your budget. Wear it daily. Notice how it makes you feel. Pay attention to the details. Soon you&apos;ll understand why watches matter.
            </p>
            <a
              href={`/${lang}/watch-types`}
              className="inline-block px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Explore Watch Types
            </a>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
