import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContentLayout } from '@/components/ui/ContentLayout';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { Droplets, AlertTriangle, CheckCircle, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Water Resistance Guide | Momento Relojero',
  description: 'Understanding watch water resistance ratings. Learn what 30m, 50m, 100m, and 200m+ really mean for your watch.',
};

export default async function WaterResistancePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang = 'es' } = await params;
  const activities = [
    'Hand Washing',
    'Rain/Splashes',
    'Showering',
    'Swimming (Pool)',
    'Swimming (Ocean)',
    'Snorkeling',
    'SCUBA Diving',
    'Deep Diving'
  ];

  const waterResistanceColumns = [
    {
      header: '30m (3 ATM)',
      items: [true, true, false, false, false, false, false, false],
    },
    {
      header: '50m (5 ATM)',
      items: [true, true, true, false, false, false, false, false],
    },
    {
      header: '100m (10 ATM)',
      items: [true, true, true, true, true, false, false, false],
    },
    {
      header: '200m+ (20 ATM)',
      items: [true, true, true, true, true, true, true, true],
      highlighted: true,
    },
  ];

  return (
    <>
      <PageHero
        title="Water Resistance Guide"
        subtitle="Watch 101"
        description="Understanding what water resistance ratings actually mean and how to protect your watch from moisture damage."
        size="medium"
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <Breadcrumb
          items={[
            { label: 'Watch 101', href: '/watch-101' },
            { label: 'Water Resistance' }
          ]}
        />
      </div>

      <ContentLayout
        sidebar={
          <div>
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-blue-600" />
                Quick Reference
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded border border-red-200">
                  <div className="font-bold text-red-900 text-sm mb-1">30m (3 ATM)</div>
                  <div className="text-xs text-red-700">Splash resistant only</div>
                </div>
                <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                  <div className="font-bold text-yellow-900 text-sm mb-1">50m (5 ATM)</div>
                  <div className="text-xs text-yellow-700">Shower safe</div>
                </div>
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="font-bold text-blue-900 text-sm mb-1">100m (10 ATM)</div>
                  <div className="text-xs text-blue-700">Swimming safe</div>
                </div>
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <div className="font-bold text-green-900 text-sm mb-1">200m+ (20 ATM)</div>
                  <div className="text-xs text-green-700">Diving certified</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-bold text-sm text-amber-900">Important</h4>
              </div>
              <p className="text-xs text-amber-700">
                Water resistance decreases over time. Test your watch annually and service gaskets every 2-3 years.
              </p>
            </div>
          </div>
        }
      >
        <div>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Water resistance is one of the most misunderstood aspects of watches. A rating of &quot;50 meters&quot; doesn&apos;t mean you can dive to 50 meters—it refers to static pressure testing in a laboratory. Here&apos;s what you really need to know.
          </p>

          <h2>Understanding Water Resistance Ratings</h2>

          <p>
            Watch manufacturers test water resistance in a pressurized chamber filled with water or air. The watch sits stationary while pressure increases. This static test doesn&apos;t account for real-world factors like temperature changes, movement, water pressure from swimming, or degraded gaskets. That&apos;s why the safe use cases are more conservative than the numbers suggest.
          </p>

          <h3>30 Meters (3 ATM / 3 Bar) - Splash Resistant</h3>
          <p>
            This minimal rating protects against accidental splashes like hand washing or light rain. Do NOT shower, swim, or submerge the watch. Many dress watches have this rating because water resistance wasn&apos;t a priority in their design. The case construction, crystal type, and gaskets (if present) provide basic moisture protection but won&apos;t withstand sustained water contact or pressure.
          </p>

          <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200 my-6">
            <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-red-900 mb-1">Not Safe For:</h4>
              <p className="text-sm text-red-700">Swimming, showering, water sports, or any submersion</p>
            </div>
          </div>

          <h3>50 Meters (5 ATM / 5 Bar) - Shower Safe</h3>
          <p>
            Suitable for showering and swimming in shallow water, though swimming is not recommended by most manufacturers. This rating means the watch has proper gaskets and screw-down or push-pull crown protection. Avoid operating the crown or pushers when wet, as this can compromise water resistance. Hot water (showers, hot tubs) can cause gaskets to expand and contract, potentially allowing moisture in over time.
          </p>

          <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200 my-6">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-yellow-900 mb-1">Use With Caution:</h4>
              <p className="text-sm text-yellow-700">Swimming okay but not ideal. Avoid hot showers and always rinse after saltwater exposure.</p>
            </div>
          </div>

          <h3>100 Meters (10 ATM / 10 Bar) - Swimming Safe</h3>
          <p>
            The minimum recommendation for regular swimming and water sports. This rating indicates robust construction with multiple gaskets, screw-down crown, and quality water-resistant materials. Suitable for recreational surface swimming, snorkeling (staying near the surface), and water sports like kayaking or sailing. Still not appropriate for diving or high-velocity water sports like water skiing, as the dynamic pressure can exceed the static rating.
          </p>

          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200 my-6">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-blue-900 mb-1">Safe For:</h4>
              <p className="text-sm text-blue-700">Swimming, snorkeling near surface, showering, water sports (recreational)</p>
            </div>
          </div>

          <h3>200 Meters+ (20 ATM / 20 Bar) - Dive Watch</h3>
          <p>
            Professional dive watches must meet ISO 6425 standards for underwater use. These watches feature screw-down crowns, reinforced case construction, unidirectional rotating bezels, and helium escape valves on professional models (300m+). They&apos;re tested beyond their rated depth and designed for SCUBA diving. Ratings of 300m, 500m, or even 1000m+ provide safety margins for recreational and professional diving.
          </p>

          <p>
            The helium escape valve (found on watches rated 500m+) allows helium molecules that penetrate the watch during saturation diving to escape safely during decompression, preventing crystal pop-off. Unless you&apos;re a commercial diver, you don&apos;t need this feature—but it&apos;s a mark of serious dive watch engineering.
          </p>

          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200 my-6">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-green-900 mb-1">Professional Use:</h4>
              <p className="text-sm text-green-700">SCUBA diving, saturation diving (with HEV), all water activities without restrictions</p>
            </div>
          </div>

          <h2>Activity Comparison Chart</h2>
          <p className="mb-6">
            This table shows which activities are safe at different water resistance levels. When in doubt, choose a higher rating than you think you need.
          </p>

          <ComparisonTable
            rowHeaders={activities}
            columns={waterResistanceColumns}
            className="my-8"
          />

          <h2>Maintaining Water Resistance</h2>

          <p>
            Water resistance is not permanent. Gaskets deteriorate, lubricants dry out, and case seals weaken over time. Follow these guidelines to maintain your watch&apos;s water resistance:
          </p>

          <ul>
            <li>
              <strong>Annual Testing:</strong> Have your watch pressure tested annually, especially before swimming season or diving trips. Watch servicing centers can perform this test in minutes.
            </li>
            <li>
              <strong>Gasket Replacement:</strong> Replace gaskets every 2-3 years, or whenever the watch is serviced. This inexpensive maintenance preserves water resistance.
            </li>
            <li>
              <strong>Crown Care:</strong> Always ensure the screw-down crown is fully tightened before water exposure. Never operate the crown or pushers underwater or when the watch is wet.
            </li>
            <li>
              <strong>Rinse After Saltwater:</strong> Saltwater is corrosive. Rinse your watch with fresh water after ocean swimming to prevent salt crystal buildup and gasket degradation.
            </li>
            <li>
              <strong>Avoid Extreme Temperature Changes:</strong> Don&apos;t jump into cold water immediately after a hot shower. Rapid temperature changes stress gaskets and can cause condensation inside the watch.
            </li>
            <li>
              <strong>Watch for Condensation:</strong> If you see condensation (fogging) under the crystal, even briefly, have your watch serviced immediately. Moisture inside can cause rust and damage the movement.
            </li>
          </ul>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg border border-slate-200 my-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Misconceptions</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-amber-600 mb-2">&quot;My 50m watch is fine for swimming&quot;</h4>
                <p className="text-slate-700">
                  While technically possible, 100m is the recommended minimum for swimming. The 50m rating provides minimal safety margin, and active swimming creates dynamic pressure exceeding static test conditions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-amber-600 mb-2">&quot;Leather straps can&apos;t get wet&quot;</h4>
                <p className="text-slate-700">
                  True. Even if your watch is water-resistant, leather straps will deteriorate when wet. Use rubber, silicone, or NATO straps for water activities and save leather for dry land.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-amber-600 mb-2">&quot;Water resistance lasts forever&quot;</h4>
                <p className="text-slate-700">
                  False. Gaskets compress and dry out, losing elasticity. Without maintenance, even a 300m dive watch&apos;s water resistance degrades to unsafe levels within 3-5 years. Regular servicing is essential.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Pro Tip: Buy More Water Resistance Than You Need</h3>
            <p className="text-amber-800 leading-relaxed">
              If you plan to swim occasionally, buy a 200m dive watch instead of settling for 100m. The extra rating provides peace of mind, accommodates degradation over time, and ensures safety during active swimming where dynamic pressure exceeds static ratings. It&apos;s easier to have too much water resistance than too little.
            </p>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
