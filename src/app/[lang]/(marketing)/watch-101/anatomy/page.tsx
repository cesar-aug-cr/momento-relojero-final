import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContentLayout } from '@/components/ui/ContentLayout';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anatomy of a Watch | Momento Relojero',
  description: 'Learn the essential parts and components of a wristwatch. Comprehensive visual guide to watch anatomy for beginners and enthusiasts.',
  openGraph: {
    title: 'Anatomy of a Watch - Essential Parts Explained',
    description: 'Comprehensive guide to watch components, from the case to the movement.',
  },
};

export default async function AnatomyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang = 'es' } = await params;
  const relatedPages = [
    { title: 'Watch Terminology', href: '/watch-101/terminology' },
    { title: 'How Watches Work', href: '/movements' },
    { title: 'Water Resistance Guide', href: '/watch-101/water-resistance' }
  ];

  return (
    <>
      <PageHero
        title="Anatomy of a Watch"
        subtitle="Watch 101"
        description="Understanding the essential parts and components that make up a wristwatch, from the case to the movement."
        size="medium"
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <Breadcrumb
          items={[
            { label: 'Watch 101', href: '/watch-101' },
            { label: 'Anatomy' }
          ]}
        />
      </div>

      <ContentLayout
        sidebar={
          <div>
            <h3 className="font-bold text-lg mb-4">On This Page</h3>
            <nav className="space-y-2">
              <a href="#case-components" className="block text-sm text-slate-600 hover:text-amber-600">Case Components</a>
              <a href="#dial-elements" className="block text-sm text-slate-600 hover:text-amber-600">Dial Elements</a>
              <a href="#movement-parts" className="block text-sm text-slate-600 hover:text-amber-600">Movement Parts</a>
              <a href="#bracelet-strap" className="block text-sm text-slate-600 hover:text-amber-600">Bracelet & Strap</a>
            </nav>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="font-bold text-sm mb-3 text-slate-900">Related Topics</h3>
              <div className="space-y-2">
                {relatedPages.map((page, idx) => (
                  <Link
                    key={idx}
                    href={page.href}
                    className="flex items-center gap-2 text-sm text-amber-600 hover:text-amber-700 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <div>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed" style={{ lineHeight: 1.618 }}>
            A wristwatch is a marvel of engineering precision, combining hundreds of tiny components working in perfect harmony. Understanding the anatomy of a watch helps you appreciate the craftsmanship and make informed decisions when buying or discussing timepieces.
          </p>

          <h2 id="case-components">Case Components</h2>

          <p>
            The case is the watch&apos;s protective housing, shielding the delicate movement from dust, moisture, and impact. Modern watch cases are typically made from stainless steel, titanium, precious metals, or ceramics.
          </p>

          <h3>Case Back</h3>
          <p>
            The bottom of the watch case, which can be solid (closed), transparent (exhibition or display back), or snap-on. Exhibition case backs allow you to admire the movement&apos;s intricate finishing and operation. Solid case backs often feature engravings, serial numbers, or technical specifications.
          </p>

          <h3>Bezel</h3>
          <p>
            The ring surrounding the crystal, which can be fixed or rotating. Rotating bezels are functional tools: unidirectional bezels on dive watches prevent accidentally increasing dive time (a safety feature), while bidirectional bezels on GMT watches help track multiple time zones. Bezels can be made from aluminum, ceramic, or precious metals, often with engraved or printed markings.
          </p>

          <h3>Crown</h3>
          <p>
            The knob used to wind the watch and set the time. On manual watches, regular winding via the crown stores energy in the mainspring. Automatic watches can also be wound manually through the crown. The crown typically has multiple positions: pushed in (normal position), pulled out one click (date setting), and pulled out fully (time setting). Many watches feature screw-down crowns that thread into the case for enhanced water resistance.
          </p>

          <h3>Pushers</h3>
          <p>
            Additional buttons on the case, most commonly found on chronographs. The typical chronograph has two pushers: one to start/stop the timing function and another to reset. Pushers may also control other complications like GMT hands, alarms, or perpetual calendar adjustments. Like crowns, some pushers screw down for water resistance.
          </p>

          <h3>Lugs</h3>
          <p>
            The protruding extensions of the case where the bracelet or strap attaches. Lug width (measured in millimeters) determines strap compatibility. The distance from top to bottom lugs (lug-to-lug measurement) is crucial for ensuring the watch fits your wrist properly—more important than case diameter for comfort.
          </p>

          <h3>Crystal</h3>
          <p>
            The transparent cover protecting the dial. Modern watches use three main crystal materials: acrylic (plastic, easily scratched but shatterproof), mineral glass (harder than acrylic but can shatter), and sapphire crystal (extremely scratch-resistant, second only to diamond in hardness). Sapphire is standard on luxury watches. Some crystals have anti-reflective (AR) coating to improve legibility.
          </p>

          <h2 id="dial-elements">Dial Elements</h2>

          <p>
            The dial (or face) is where you read the time and access complications. It&apos;s often the most visually striking part of the watch, showcasing the manufacturer&apos;s design philosophy.
          </p>

          <h3>Hour Markers</h3>
          <p>
            Indicate the hours, either as applied metal indices, printed markers, or Roman/Arabic numerals. Applied indices are three-dimensional metal pieces attached to the dial, offering depth and luxury. Many markers feature luminous material for low-light visibility. The marker at 12 o&apos;clock is often distinguished by a different shape (double marker or triangle).
          </p>

          <h3>Hands</h3>
          <p>
            Show hours, minutes, and seconds. Hand styles vary greatly: dauphine (tapered and faceted), baton (straight bars), sword (pointed), Mercedes (Rolex&apos;s signature circular-tipped hour hand), and many more. Hands are typically filled with Super-LumiNova or similar luminous material. The counterweight on the seconds hand balances it for smooth operation.
          </p>

          <h3>Sub-dials</h3>
          <p>
            Smaller dials within the main dial, displaying additional information like chronograph functions (elapsed seconds, minutes, hours), running seconds, power reserve, or moon phase. Their arrangement and size are key elements of the watch&apos;s visual design. Common configurations include bi-compax (two sub-dials) and tri-compax (three sub-dials).
          </p>

          <h3>Date Window</h3>
          <p>
            An aperture showing the current date, most commonly positioned at 3, 4, or 6 o&apos;clock. The date disc rotates beneath the dial. Some watches feature magnification (cyclops lens) over the date for easier reading. More complex watches may show the day of the week, month, or even complete perpetual calendar information.
          </p>

          <h3>Luminous Material</h3>
          <p>
            Applied to hands and markers for visibility in darkness. Modern watches use Super-LumiNova or Chromalight, which absorb light and glow without radioactive materials. Vintage watches may have tritium (T on the dial) or radium (radioactive, no longer used). Different colors (green, blue, white) affect brightness and duration.
          </p>

          <h2 id="movement-parts">Movement Parts</h2>

          <p>
            The movement (or caliber) is the engine of the watch—the mechanism that keeps time. Understanding these components helps you appreciate the complexity and craftsmanship.
          </p>

          <h3>Mainspring</h3>
          <p>
            The coiled spring that stores energy in mechanical watches. When wound, it gradually unwinds, releasing energy to power the watch. A fully wound mainspring provides the watch&apos;s power reserve (typically 38-80 hours for modern automatics, though some high-end pieces exceed 7 days). The barrel houses and protects the mainspring.
          </p>

          <h3>Gear Train</h3>
          <p>
            A series of interconnected gears that transfer energy from the mainspring to the escapement while reducing speed. The gear train includes the barrel wheel, center wheel (makes one rotation per hour), third wheel, fourth wheel (makes one rotation per minute, driving the seconds hand), and escape wheel. Proper lubrication and precise tolerances are critical for efficiency.
          </p>

          <h3>Escapement</h3>
          <p>
            The heart of mechanical timekeeping, controlling the release of energy in precise increments. The escape wheel&apos;s teeth alternately catch and release against the pallet fork&apos;s jewels, creating the characteristic tick-tock sound. This converts the mainspring&apos;s continuous force into controlled impulses. The Swiss lever escapement is the most common type in modern watches.
          </p>

          <h3>Balance Wheel</h3>
          <p>
            Oscillates back and forth at a constant rate (typically 28,800 beats per hour or 4Hz), dividing time into equal segments. The balance wheel&apos;s hairspring (or balance spring) causes it to oscillate. Its precision determines the watch&apos;s accuracy. Adjusting the hairspring&apos;s effective length regulates the rate. Free-sprung balances (without a regulator) are considered superior.
          </p>

          <h3>Rotor (Automatic Watches)</h3>
          <p>
            A weighted semicircular component that spins freely with wrist movement, winding the mainspring automatically. The rotor typically winds in both directions via a reversing mechanism. It&apos;s often decorated with Geneva stripes, perlage, or brand engravings visible through exhibition case backs. The rotor&apos;s weight and bearing quality affect winding efficiency.
          </p>

          <h3>Jewels</h3>
          <p>
            Synthetic rubies or sapphires used as low-friction bearings for pivots. They reduce wear on the movement&apos;s rotating parts. Typical automatic movements have 17-31 jewels. More jewels don&apos;t necessarily mean better quality—unnecessary jewels are sometimes added for marketing. Each jewel serves a specific purpose, primarily in the gear train, escapement, and automatic winding mechanism.
          </p>

          <h2 id="bracelet-strap">Bracelet & Strap</h2>

          <p>
            The attachment system that secures the watch to your wrist affects both comfort and style. Your choice can completely transform the watch&apos;s character.
          </p>

          <h3>Bracelet</h3>
          <p>
            Metal links forming an integrated band. Common styles include Oyster (three-link, sporty), Jubilee (five-link, dressier), President (semicircular three-link, luxurious), and mesh/Milanese (interwoven, elegant). Bracelets offer durability, tool-free adjustment (microadjustment or tool-less clasp systems), and a cohesive look. Solid end links connect seamlessly to the case, while folded/hollow links are lighter and less expensive.
          </p>

          <h3>Strap</h3>
          <p>
            Non-metal bands offer versatility and comfort. Leather straps (calf, alligator, ostrich, etc.) provide classic elegance but require replacement as they wear. Rubber/silicone straps are waterproof and sporty. NATO straps (one-piece nylon) are casual, affordable, and offer redundancy (if one spring bar fails, the watch stays on your wrist). Canvas and perlon are breathable summer options.
          </p>

          <h3>Clasp Types</h3>
          <p>
            Tang buckle: Traditional pin-and-hole closure (like a belt). Deployment clasp: Folds open and clicks closed, reducing leather wear and preventing drops. Butterfly clasp: Symmetrical folding design. Diver&apos;s extension: Allows bracelet expansion over wetsuits. Glidelock: Tool-free micro-adjustment in 2mm increments.
          </p>

          <h3>Spring Bars</h3>
          <p>
            Spring-loaded pins that attach straps/bracelets to the case lugs. Drilled lugs (holes in the lugs) make spring bar changes easier. Quick-release spring bars have integrated levers for tool-free strap changes. Using a proper spring bar tool prevents scratching the case or losing the watch.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Pro Tip: Lug-to-Lug Matters More Than Case Diameter</h3>
            <p className="text-amber-800 leading-relaxed">
              When determining if a watch will fit your wrist, the lug-to-lug measurement is more important than case diameter. A 42mm watch with short lugs (48mm lug-to-lug) may fit a 6.5-inch wrist perfectly, while a 40mm watch with long lugs (52mm lug-to-lug) may overhang. Measure your wrist and ensure the lugs don&apos;t extend past your wrist&apos;s edges.
            </p>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Next Steps in Your Watch Journey</h2>
            <p className="text-slate-700 mb-6">
              Now that you understand watch anatomy, explore these related topics to deepen your knowledge:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPages.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.href}
                  className="p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-600 mb-1">
                    {page.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
