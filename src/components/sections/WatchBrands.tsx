'use client'

import { motion } from 'framer-motion'
import { Crown, DollarSign, Medal } from 'lucide-react'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { watchBrands } from '@/lib/data'

const categoryInfo = {
  luxury: {
    icon: Crown,
    color: 'gold',
    title: 'Luxury Brands',
    description: 'Premium Swiss manufacturers with exceptional craftsmanship',
  },
  affordable: {
    icon: DollarSign,
    color: 'blue',
    title: 'Value Brands',
    description: 'Quality timepieces accessible to enthusiasts',
  },
  heritage: {
    icon: Medal,
    color: 'purple',
    title: 'Heritage Brands',
    description: 'Historic watchmakers with rich traditions',
  },
}

export const WatchBrands: React.FC = () => {
  const categories = ['luxury', 'affordable', 'heritage'] as const

  return (
    <Section id="watch-brands">
      <SectionHeader
        title="Notable Watch Brands"
        description="Explore the manufacturers that have shaped the watch industry"
      />

      {categories.map((category) => {
        const categoryData = categoryInfo[category]
        const Icon = categoryData.icon
        const brandsInCategory = watchBrands.filter((b) => b.category === category)

        return (
          <div key={category} className="mb-3xl last:mb-0">
            <div className="flex items-center gap-md mb-xl">
              <div className="bg-gold-100 dark:bg-gold-900/30 p-md rounded-lg">
                <Icon className="text-gold-600 dark:text-gold-400" size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">{categoryData.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{categoryData.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {brandsInCategory.map((brand, index) => (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover>
                    <CardHeader>
                      <CardTitle>{brand.name}</CardTitle>
                      <div className="text-sm text-slate-500 dark:text-slate-400 mb-sm">
                        {brand.origin} • Est. {brand.founded}
                      </div>
                      <CardDescription>{brand.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )
      })}
    </Section>
  )
}

WatchBrands.displayName = 'WatchBrands'
