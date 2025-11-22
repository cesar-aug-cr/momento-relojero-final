'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Clock } from 'lucide-react'
import { Button } from './Button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Watch Types', href: '#watch-types' },
  { name: 'Brands', href: '#watch-brands' },
  { name: 'Resources', href: '#resources' },
  { name: 'Newsletter', href: '#newsletter' },
]

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container-golden">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-sm group cursor-pointer"
          >
            <div className="bg-gold-500 p-sm rounded-lg group-hover:scale-110 transition-transform">
              <Clock className="text-slate-900" size={24} />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              Momento Relojero
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-xl">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-gold-500',
                  isScrolled
                    ? 'text-slate-700 dark:text-slate-300'
                    : 'text-white hover:text-gold-400'
                )}
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                'p-sm rounded-lg transition-all hover:scale-110',
                isScrolled
                  ? 'bg-slate-100 dark:bg-slate-800'
                  : 'bg-white/10 backdrop-blur-sm'
              )}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="text-gold-400" size={20} />
              ) : (
                <Moon className={isScrolled ? 'text-slate-700' : 'text-white'} size={20} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-md md:hidden">
            <button
              onClick={toggleTheme}
              className="p-sm rounded-lg bg-white/10 backdrop-blur-sm"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="text-gold-400" size={20} />
              ) : (
                <Moon className={isScrolled ? 'text-slate-700' : 'text-white'} size={20} />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'p-sm rounded-lg',
                isScrolled
                  ? 'text-slate-700 dark:text-white'
                  : 'text-white'
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-lg space-y-md">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="block px-lg py-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

Header.displayName = 'Header'
