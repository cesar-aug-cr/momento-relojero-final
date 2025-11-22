'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationLink {
  label: string;
  href: string;
  subLinks?: { label: string; href: string; description: string }[];
}

const NAVIGATION_LINKS: NavigationLink[] = [
  {
    label: 'Watch 101',
    href: '/watch-101',
    subLinks: [
      { label: 'Anatomy of a Watch', href: '/watch-101#anatomy', description: 'Learn the essential parts' },
      { label: 'Terminology', href: '/watch-101#terminology', description: 'Common watch terms' },
      { label: 'Water Resistance', href: '/watch-101#water-resistance', description: 'What ratings mean' },
      { label: 'Why Wear a Watch?', href: '/watch-101#why-wear', description: 'Relevance today' },
    ],
  },
  {
    label: 'How Watches Work',
    href: '/how-watches-work',
    subLinks: [
      { label: 'Quartz Movement', href: '/how-watches-work#quartz', description: 'Battery-powered precision' },
      { label: 'Mechanical Movement', href: '/how-watches-work#mechanical', description: 'Traditional craftsmanship' },
      { label: 'Automatic Movement', href: '/how-watches-work#automatic', description: 'Self-winding watches' },
      { label: 'Other Movements', href: '/how-watches-work#other', description: 'Solar, Kinetic, Spring Drive' },
    ],
  },
  {
    label: 'Watch Types',
    href: '/watch-types',
    subLinks: [
      { label: 'Dive Watches', href: '/watch-types#dive', description: 'Built for underwater' },
      { label: 'Dress Watches', href: '/watch-types#dress', description: 'Elegant timepieces' },
      { label: 'Chronographs', href: '/watch-types#chronograph', description: 'Stopwatch function' },
      { label: 'Pilot Watches', href: '/watch-types#pilot', description: 'Aviation-inspired' },
      { label: 'Field Watches', href: '/watch-types#field', description: 'Rugged outdoor' },
      { label: 'GMT/Travel', href: '/watch-types#gmt', description: 'Dual timezone' },
    ],
  },
  {
    label: 'Complications',
    href: '/watch-features',
    subLinks: [
      { label: 'What is a Complication?', href: '/watch-features#intro', description: 'Beyond timekeeping' },
      { label: 'Simple Complications', href: '/watch-features#simple', description: 'Date, Day-Date' },
      { label: 'Popular Complications', href: '/watch-features#popular', description: 'Chronograph, GMT, Moon Phase' },
      { label: 'Grand Complications', href: '/watch-features#grand', description: 'Perpetual Calendar, Minute Repeater' },
    ],
  },
  {
    label: 'Brands & History',
    href: '/world-of-watches',
    subLinks: [
      { label: 'History of Horology', href: '/world-of-watches#history', description: 'From pocket to wrist' },
      { label: 'The Holy Trinity', href: '/world-of-watches#holy-trinity', description: 'Patek, AP, Vacheron' },
      { label: 'Iconic Luxury Brands', href: '/world-of-watches#luxury', description: 'Rolex, Omega' },
      { label: 'Swiss Entry-Level', href: '/world-of-watches#entry-swiss', description: 'Tissot, Hamilton, Longines' },
      { label: 'Japanese Giants', href: '/world-of-watches#japanese', description: 'Seiko, Casio, Citizen' },
    ],
  },
  {
    label: "Collector's Corner",
    href: '/collectors-corner',
    subLinks: [
      { label: 'Starting Your Collection', href: '/collectors-corner#start', description: '5-step guide' },
      { label: 'Buying Guide', href: '/collectors-corner#buying', description: 'New vs. Pre-owned vs. Vintage' },
      { label: 'Spotting Fakes', href: '/collectors-corner#fakes', description: 'Protect yourself' },
      { label: 'Reference Numbers', href: '/collectors-corner#references', description: 'What they mean' },
    ],
  },
  {
    label: 'Watch Care',
    href: '/watch-care',
    subLinks: [
      { label: 'Cleaning Your Watch', href: '/watch-care#cleaning', description: 'Safe methods' },
      { label: 'Servicing', href: '/watch-care#servicing', description: 'Why and when' },
      { label: 'Storage Solutions', href: '/watch-care#storage', description: 'Boxes and winders' },
      { label: 'Changing Straps', href: '/watch-care#strap-change', description: 'DIY guide' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

export const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    window.addEventListener('scroll', handleScroll);
    checkTheme();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = html.classList.contains('dark') ? 'light' : 'dark';

    if (newTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    localStorage.setItem('theme', newTheme);
    setIsDarkMode(newTheme === 'dark');
  };

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-377',
        isScrolled
          ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-luxury'
          : 'bg-transparent'
      )}
    >
      <div className="container-golden">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-sm group">
            <Clock className="w-8 h-8 text-accent-gold group-hover:rotate-12 transition-transform duration-377" />
            <span className="text-xl font-bold bg-gradient-to-r from-accent-gold to-accent-gold-dark bg-clip-text text-transparent">
              Momento Relojero
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-lg">
            {NAVIGATION_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'px-md py-sm text-sm font-medium transition-colors duration-233',
                    isActiveLink(link.href)
                      ? 'text-accent-gold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-accent-gold dark:hover:text-accent-gold'
                  )}
                >
                  {link.label}
                </Link>

                {/* Dropdown Menu */}
                {link.subLinks && activeDropdown === link.href && (
                  <div className="absolute top-full left-0 mt-xs min-w-[280px] bg-white dark:bg-dark-bg-secondary rounded-lg shadow-luxury-lg border border-gray-200 dark:border-dark-border overflow-hidden animate-fade-in">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-lg py-md hover:bg-gray-50 dark:hover:bg-dark-bg-tertiary transition-colors duration-233 border-b border-gray-100 dark:border-dark-border last:border-b-0"
                      >
                        <div className="font-medium text-gray-900 dark:text-gray-100 mb-xs">
                          {subLink.label}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {subLink.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-sm rounded-lg hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary transition-colors duration-233"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-accent-gold" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-sm rounded-lg hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-lg border-t border-gray-200 dark:border-dark-border animate-fade-in">
            {NAVIGATION_LINKS.map((link) => (
              <div key={link.href} className="mb-md">
                <Link
                  href={link.href}
                  className={cn(
                    'block px-md py-sm text-base font-medium rounded-lg transition-colors',
                    isActiveLink(link.href)
                      ? 'text-accent-gold bg-gray-50 dark:bg-dark-bg-tertiary'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-bg-tertiary'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.subLinks && (
                  <div className="ml-lg mt-xs space-y-xs">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-md py-xs text-sm text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full mt-md px-md py-sm rounded-lg bg-gray-100 dark:bg-dark-bg-tertiary hover:bg-gray-200 dark:hover:bg-dark-border transition-colors flex items-center justify-center gap-sm"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-5 h-5 text-accent-gold" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

Navigation.displayName = 'Navigation';
