'use client'

import { motion } from 'framer-motion'
import { Watch, Zap, Cpu, Battery } from 'lucide-react'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { watchTypes } from '@/lib/data'

const iconMap: Record<string, any> = {
  mechanical: Watch,
  automatic: Watch,
  quartz: Battery,
  smartwatch: Cpu,
}

export const WatchTypes: React.FC = () => {
  return (
    <Section id="watch-types" className="bg-slate-50 dark:bg-slate-900">
      <SectionHeader
        title="Types of Watches"
        description="Understand the different watch categories and find what suits your lifestyle"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        {watchTypes.map((type, index) => {
          const Icon = iconMap[type.id] || Watch
          return (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{type.name}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </div>
                    <div className="bg-gold-100 dark:bg-gold-900/30 p-md rounded-lg">
                      <Icon className="text-gold-600 dark:text-gold-400" size={24} />
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-lg">
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-sm">
                        Advantages
                      </h4>
                      <ul className="space-y-xs">
                        {type.pros.map((pro, i) => (
                          <li key={i} className="text-sm flex items-start">
                            <span className="text-green-500 mr-sm">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-sm">
                        Considerations
                      </h4>
                      <ul className="space-y-xs">
                        {type.cons.map((con, i) => (
                          <li key={i} className="text-sm flex items-start">
                            <span className="text-red-500 mr-sm">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-lg border-t border-slate-200 dark:border-slate-700">
                    <p className="text-sm">
                      <span className="font-semibold">Best for:</span> {type.bestFor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

WatchTypes.displayName = 'WatchTypes'
