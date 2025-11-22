'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Book,
  Cog,
  Grid3x3,
  Gem,
  Building2,
  Heart,
  Shield,
  FileText,
  ChevronDown,
  Watch
} from 'lucide-react';

interface MegaMenuItem {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

interface MegaMenuSection {
  label: string;
  items: MegaMenuItem[];
}

const MEGA_MENU_SECTIONS: Record<string, MegaMenuSection[]> = {
  learn: [
    {
      label: 'Fundamentals',
      items: [
        {
          title: 'Watch 101',
          href: '/watch-101',
          description: 'Essential basics for beginners',
          icon: <Book className="w-5 h-5" />
        },
        {
          title: 'Anatomy of a Watch',
          href: '/watch-101/anatomy',
          description: 'Parts and components explained',
          icon: <Watch className="w-5 h-5" />
        },
        {
          title: 'Terminology',
          href: '/watch-101/terminology',
          description: 'Essential watch vocabulary',
          icon: <FileText className="w-5 h-5" />
        }
      ]
    },
    {
      label: 'Movements',
      items: [
        {
          title: 'How Watches Work',
          href: '/movements',
          description: 'Understanding watch movements',
          icon: <Cog className="w-5 h-5" />
        },
        {
          title: 'Quartz',
          href: '/movements/quartz',
          description: 'Battery-powered precision',
          icon: <Cog className="w-5 h-5" />
        },
        {
          title: 'Manual Wind',
          href: '/movements/manual',
          description: 'Hand-wound mechanical',
          icon: <Cog className="w-5 h-5" />
        },
        {
          title: 'Automatic',
          href: '/movements/automatic',
          description: 'Self-winding mechanical',
          icon: <Cog className="w-5 h-5" />
        },
        {
          title: 'Solar & Others',
          href: '/movements/other',
          description: 'Solar, Kinetic, Spring Drive',
          icon: <Cog className="w-5 h-5" />
        }
      ]
    }
  ],
  watches: [
    {
      label: 'Types & Styles',
      items: [
        {
          title: 'Watch Types',
          href: '/watch-types',
          description: 'Explore all watch styles',
          icon: <Grid3x3 className="w-5 h-5" />
        },
        {
          title: 'Dive Watches',
          href: '/watch-types/dive',
          description: 'Built for underwater',
          icon: <Shield className="w-5 h-5" />
        },
        {
          title: 'Dress Watches',
          href: '/watch-types/dress',
          description: 'Elegant & formal',
          icon: <Gem className="w-5 h-5" />
        },
        {
          title: 'Chronographs',
          href: '/watch-types/chronograph',
          description: 'Stopwatch function',
          icon: <Watch className="w-5 h-5" />
        },
        {
          title: 'Pilot Watches',
          href: '/watch-types/pilot',
          description: 'Aviation timepieces',
          icon: <Watch className="w-5 h-5" />
        },
        {
          title: 'Field Watches',
          href: '/watch-types/field',
          description: 'Military-inspired',
          icon: <Shield className="w-5 h-5" />
        },
        {
          title: 'GMT Watches',
          href: '/watch-types/gmt',
          description: 'Travel & time zones',
          icon: <Watch className="w-5 h-5" />
        },
        {
          title: 'Digital',
          href: '/watch-types/digital',
          description: 'Digital & smartwatches',
          icon: <Watch className="w-5 h-5" />
        }
      ]
    },
    {
      label: 'Complications',
      items: [
        {
          title: 'Watch Features',
          href: '/complications',
          description: 'Beyond basic timekeeping',
          icon: <Gem className="w-5 h-5" />
        },
        {
          title: 'Popular Complications',
          href: '/complications/popular',
          description: 'GMT, Chronograph, Moonphase',
          icon: <Gem className="w-5 h-5" />
        }
      ]
    }
  ],
  brands: [
    {
      label: 'World of Watches',
      items: [
        {
          title: 'Brand Overview',
          href: '/brands',
          description: 'Explore watch manufacturers',
          icon: <Building2 className="w-5 h-5" />
        },
        {
          title: 'History of Horology',
          href: '/brands/history',
          description: 'Timeline of watchmaking',
          icon: <Book className="w-5 h-5" />
        },
        {
          title: 'The Holy Trinity',
          href: '/brands/holy-trinity',
          description: 'Patek, AP, Vacheron Constantin',
          icon: <Gem className="w-5 h-5" />
        },
        {
          title: 'Luxury Brands',
          href: '/brands/luxury',
          description: 'Rolex, Omega, Cartier & more',
          icon: <Building2 className="w-5 h-5" />
        }
      ]
    }
  ],
  collecting: [
    {
      label: 'Collector\'s Corner',
      items: [
        {
          title: 'Getting Started',
          href: '/collecting/start',
          description: 'Begin your collection',
          icon: <Heart className="w-5 h-5" />
        },
        {
          title: 'Buying Guide',
          href: '/collecting/buying-guide',
          description: 'New, pre-owned, vintage',
          icon: <Shield className="w-5 h-5" />
        },
        {
          title: 'Spotting Fakes',
          href: '/collecting/authenticity',
          description: 'Authentication tips',
          icon: <Shield className="w-5 h-5" />
        }
      ]
    },
    {
      label: 'Watch Care',
      items: [
        {
          title: 'Maintenance',
          href: '/care',
          description: 'Keep your watches running',
          icon: <Cog className="w-5 h-5" />
        },
        {
          title: 'Servicing',
          href: '/care/servicing',
          description: 'When and why to service',
          icon: <Cog className="w-5 h-5" />
        }
      ]
    }
  ]
};

interface MegaMenuProps {
  className?: string;
  currentLang?: string;
}

export const MegaMenu: FC<MegaMenuProps> = ({ className, currentLang = 'es' }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Helper to add language prefix to hrefs
  const withLang = (href: string) => `/${currentLang}${href}`;

  const menuItems = [
    { label: 'Learn', key: 'learn' },
    { label: 'Watches', key: 'watches' },
    { label: 'Brands', key: 'brands' },
    { label: 'Collecting', key: 'collecting' }
  ];

  return (
    <nav className={cn('hidden lg:block', className)}>
      <ul className="flex items-center space-x-8">
        {menuItems.map((item) => (
          <li
            key={item.key}
            className="relative"
            onMouseEnter={() => setActiveMenu(item.key)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors py-2',
                activeMenu === item.key
                  ? 'text-amber-600'
                  : 'text-slate-700 hover:text-amber-600'
              )}
            >
              {item.label}
              <ChevronDown className={cn(
                'w-4 h-4 transition-transform',
                activeMenu === item.key && 'rotate-180'
              )} />
            </button>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {activeMenu === item.key && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full pt-2 z-50"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-slate-200 dark:border-gray-700 p-6 min-w-[600px]">
                    <div className="grid grid-cols-2 gap-8">
                      {MEGA_MENU_SECTIONS[item.key]?.map((section, idx) => (
                        <div key={idx}>
                          <h3 className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                            {section.label}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((menuItem, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  href={withLang(menuItem.href)}
                                  className={cn(
                                    'flex items-start gap-3 p-2 rounded-lg transition-colors group',
                                    pathname === withLang(menuItem.href)
                                      ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-100'
                                      : 'hover:bg-slate-50 dark:hover:bg-gray-700'
                                  )}
                                >
                                  <div className={cn(
                                    'mt-0.5',
                                    pathname === withLang(menuItem.href)
                                      ? 'text-amber-600'
                                      : 'text-slate-400 group-hover:text-amber-600'
                                  )}>
                                    {menuItem.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className={cn(
                                      'font-medium text-sm mb-0.5',
                                      pathname === withLang(menuItem.href)
                                        ? 'text-amber-900 dark:text-amber-100'
                                        : 'text-slate-900 dark:text-slate-100 group-hover:text-amber-900 dark:group-hover:text-amber-100'
                                    )}>
                                      {menuItem.title}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                      {menuItem.description}
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}

        {/* Direct Links */}
        <li>
          <Link
            href={withLang('/blog')}
            className={cn(
              'text-sm font-medium transition-colors',
              pathname?.startsWith(withLang('/blog'))
                ? 'text-amber-600'
                : 'text-slate-700 dark:text-slate-300 hover:text-amber-600'
            )}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MegaMenu.displayName = 'MegaMenu';
