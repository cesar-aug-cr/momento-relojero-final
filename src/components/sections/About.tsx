'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Book, Award } from 'lucide-react'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'

const features = [
  {
    icon: Heart,
    title: 'Passion for Horology',
    description: 'We celebrate the artistry, engineering, and heritage of fine timepieces.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join thousands of watch enthusiasts sharing knowledge and experiences.',
  },
  {
    icon: Book,
    title: 'Educational Resources',
    description: 'Comprehensive guides for beginners and advanced collectors alike.',
  },
  {
    icon: Award,
    title: 'Curated Content',
    description: 'Expert insights on brands, movements, and collecting strategies.',
  },
]

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:golden-grid-2 gap-3xl items-center">
        {/* Left column - Content (61.8%) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-xl">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wide">
              About Momento Relojero
            </span>
            <h2 className="text-gradient mt-md mb-lg">
              Where Time Meets Passion
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-lg">
              Momento Relojero is your comprehensive resource for everything related to watches
              and watch collecting. Whether you&apos;re taking your first steps into horology or
              you&apos;re a seasoned collector, we provide the knowledge and community you need.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400">
              From understanding the intricate mechanics of a tourbillon to finding the perfect
              everyday timepiece, our mission is to make the world of watches accessible,
              educational, and inspiring for everyone.
            </p>
          </div>
        </motion.div>

        {/* Right column - Features (38.2%) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-lg"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="flex items-start gap-lg">
                    <div className="bg-gold-100 dark:bg-gold-900/30 p-md rounded-lg flex-shrink-0">
                      <Icon className="text-gold-600 dark:text-gold-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-sm">{feature.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}

About.displayName = 'About'
