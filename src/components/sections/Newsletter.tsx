'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { MultiStepNewsletterForm } from '@/components/conversion/MultiStepNewsletterForm'

export const Newsletter: React.FC = () => {
  return (
    <Section id="newsletter" className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <SectionHeader
        title="Join Our Watch Community"
        description="Get exclusive insights, collecting tips, and the latest watch news delivered to your inbox"
      />

      <div className="max-w-4xl mx-auto">
        <MultiStepNewsletterForm />
      </div>

      {/* Trust indicators */}
      <div className="mt-2xl text-center">
        <div className="flex flex-wrap justify-center gap-xl text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-sm">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center gap-sm">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Unsubscribe anytime</span>
          </div>
          <div className="flex items-center gap-sm">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>10,000+ subscribers</span>
          </div>
        </div>
      </div>
    </Section>
  )
}

Newsletter.displayName = 'Newsletter'
