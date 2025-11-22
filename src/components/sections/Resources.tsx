'use client'

import { motion } from 'framer-motion'
import { BookOpen, Shield, ShoppingCart, Wrench } from 'lucide-react'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { careGuides, buyingGuides } from '@/lib/data'

export const Resources: React.FC = () => {
  return (
    <Section id="resources" className="bg-slate-50 dark:bg-slate-900">
      <SectionHeader
        title="Essential Resources"
        description="Everything you need to start and grow your watch collection"
      />

      {/* Care & Maintenance */}
      <div className="mb-3xl">
        <div className="flex items-center gap-md mb-xl">
          <Wrench className="text-gold-500" size={28} />
          <h3 className="text-3xl font-bold">Care & Maintenance</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {careGuides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <CardHeader>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-sm">
                    {guide.tips.map((tip, i) => (
                      <li key={i} className="text-sm flex items-start">
                        <span className="text-gold-500 mr-sm flex-shrink-0">•</span>
                        <span className="text-slate-600 dark:text-slate-400">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Buying Guides */}
      <div>
        <div className="flex items-center gap-md mb-xl">
          <ShoppingCart className="text-gold-500" size={28} />
          <h3 className="text-3xl font-bold">Buying Guides</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {buyingGuides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-md">
                    <CardTitle className="text-2xl">{guide.category}</CardTitle>
                    <div className="bg-gold-100 dark:bg-gold-900/30 px-md py-sm rounded-md">
                      <span className="text-sm font-semibold text-gold-700 dark:text-gold-400">
                        {guide.budget}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-lg">
                    {guide.recommendations.map((rec, i) => (
                      <div key={i} className="border-l-2 border-gold-500 pl-lg">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-xs">
                          {rec.brand}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-sm">
                          {rec.reason}
                        </p>
                        <span className="text-xs font-medium text-gold-600 dark:text-gold-400">
                          {rec.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          <Card className="bg-gradient-to-br from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20 border-gold-200 dark:border-gold-800">
            <CardHeader>
              <div className="flex items-center gap-md">
                <BookOpen className="text-gold-600 dark:text-gold-400" size={32} />
                <div>
                  <CardTitle>Beginner&apos;s Guide</CardTitle>
                  <CardDescription>
                    Complete introduction to watch collecting
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-lg">
                Start your horological journey with our comprehensive beginner&apos;s guide covering
                terminology, what to look for, and how to make your first purchase.
              </p>
              <a
                href="#newsletter"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#newsletter')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-gold-600 dark:text-gold-400 font-semibold hover:underline"
              >
                Download Free Guide →
              </a>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center gap-md">
                <Shield className="text-blue-600 dark:text-blue-400" size={32} />
                <div>
                  <CardTitle>Authenticity Guide</CardTitle>
                  <CardDescription>
                    Learn to spot fakes and buy with confidence
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-lg">
                Protect yourself from counterfeits with expert tips on verification,
                trusted sellers, and red flags to watch out for.
              </p>
              <a
                href="#newsletter"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#newsletter')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}

Resources.displayName = 'Resources'
