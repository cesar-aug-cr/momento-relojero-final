'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, ArrowRight, Mail } from 'lucide-react'

interface FooterProps {
  currentLang?: string
  dict: {
    tagline: string
    rights: string
    keepExploring: string
    subscribe: string
    stayUpdated: string
    newsletterDesc: string
    privacy: string
    terms: string
    contact: string
    followUs: string
    sections: {
      shop: string
      about: string
      journal: string
      support: string
    }
  }
}

export function Footer({ currentLang = 'es', dict }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg border-t border-white/10 pt-20 pb-10 font-mono">
      <div className="container mx-auto px-4">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <Link href={`/${currentLang}`} className="block">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-4">
                Momento Relojero
              </h2>
            </Link>
            <p className="text-xl text-gray-400 max-w-md font-light leading-relaxed">
              {dict?.tagline}
            </p>
            <div className="flex gap-6 pt-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent-gold hover:border-accent-gold transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-serif mb-4">{dict?.subscribe}</h3>
            <p className="text-gray-400 mb-8">{dict?.newsletterDesc}</p>
            <form className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-gold transition-colors"
                />
              </div>
              <button className="bg-accent-gold text-dark-bg px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                <span>{dict?.sections.shop}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-white/10">
          {[
            {
              title: dict?.sections.shop,
              links: ['New Arrivals', 'Best Sellers', 'Limited Editions', 'Accessories']
            },
            {
              title: dict?.sections.about,
              links: ['Our Story', 'Craftsmanship', 'Boutiques', 'Careers']
            },
            {
              title: dict?.sections.journal,
              links: ['News', 'Events', 'Interviews', 'Guides']
            },
            {
              title: dict?.sections.support,
              links: [dict?.contact, 'FAQ', 'Shipping', 'Returns']
            }
          ].map((section, i) => (
            <div key={i}>
              <h4 className="text-lg font-bold text-white mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-accent-gold transition-colors block py-1"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>&copy; {year} Momento Relojero. {dict?.rights}</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">{dict?.privacy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{dict?.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
