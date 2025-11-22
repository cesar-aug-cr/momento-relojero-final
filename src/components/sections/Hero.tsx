'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { trackCTAClick } from '@/lib/analytics'

export const Hero: React.FC = () => {
  const handleCTAClick = (ctaName: string) => {
    trackCTAClick(ctaName, 'hero')
    const element = document.getElementById(ctaName)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[61.8vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

      <div className="container-golden relative z-10 py-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-sm px-lg py-sm bg-gold-500/10 border border-gold-500/20 rounded-full mb-xl"
          >
            <Clock className="text-gold-400" size={16} />
            <span className="text-sm font-medium text-gold-400">
              Your Gateway to Horology
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white mb-lg"
          >
            Discover the Art of
            <br />
            <span className="text-gradient">Watch Collecting</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-2xl"
          >
            From mechanical masterpieces to modern smartwatches, explore comprehensive guides,
            expert insights, and curated resources for watch enthusiasts at every level.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-lg justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => handleCTAClick('watch-types')}
              className="group"
            >
              Start Learning
              <ArrowRight className="ml-sm group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleCTAClick('newsletter')}
              className="border-white text-white hover:bg-white"
            >
              Join Our Community
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-xl mt-3xl max-w-4xl mx-auto"
          >
            {[
              { value: '50+', label: 'Watch Brands' },
              { value: '100+', label: 'Guides & Articles' },
              { value: '10K+', label: 'Community Members' },
              { value: '24/7', label: 'Resources Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-sm">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            className="fill-white dark:fill-slate-950"
          />
        </svg>
      </div>
    </section>
  )
}

Hero.displayName = 'Hero'
