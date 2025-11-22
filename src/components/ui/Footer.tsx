'use client'

import { Clock, Mail, Github, Twitter, Instagram } from 'lucide-react'

const footerLinks = {
  resources: [
    { name: 'Watch Types', href: '#watch-types' },
    { name: 'Brand Guide', href: '#watch-brands' },
    { name: 'Care & Maintenance', href: '#resources' },
    { name: 'Buying Guide', href: '#resources' },
  ],
  community: [
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#newsletter' },
    { name: 'Blog', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
]

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-golden py-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2xl mb-3xl">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-sm mb-lg">
              <div className="bg-gold-500 p-sm rounded-lg">
                <Clock className="text-slate-900" size={24} />
              </div>
              <span className="text-xl font-bold text-white">
                Momento Relojero
              </span>
            </div>
            <p className="text-sm mb-lg">
              Your comprehensive resource for watch collecting, from beginner guides to expert insights.
            </p>
            <div className="flex gap-md">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-slate-800 p-sm rounded-lg hover:bg-gold-500 transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon className="group-hover:text-slate-900" size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-lg">Resources</h3>
            <ul className="space-y-md">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(link.href)
                    }}
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-lg">Community</h3>
            <ul className="space-y-md">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(link.href)
                    }}
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter CTA */}
          <div>
            <h3 className="text-white font-semibold mb-lg">Stay Updated</h3>
            <p className="text-sm mb-lg">
              Get the latest watch news and collecting tips delivered to your inbox.
            </p>
            <a
              href="#newsletter"
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick('#newsletter')
              }}
              className="inline-flex items-center gap-sm px-lg py-md bg-gold-500 text-slate-900 rounded-md font-semibold hover:bg-gold-600 transition-colors"
            >
              <Mail size={16} />
              Subscribe Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-xl border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-lg">
            <p className="text-sm">
              © {currentYear} Momento Relojero. All rights reserved.
            </p>
            <div className="flex gap-xl">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'
