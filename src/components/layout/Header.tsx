'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Watch, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  currentLang?: string;
}

interface MegaMenuTranslations {
  learn: any;
  watches: any;
  brands: any;
  collecting: any;
  blog: any;
}

export const Header: FC<HeaderProps> = ({ currentLang = 'es' }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mega Menu Structure - Translations
  const megaMenuTranslations: Record<string, MegaMenuTranslations> = {
    es: {
      learn: {
        title: 'Aprender',
        fundamentals: {
          title: 'Fundamentos',
          items: [
            { title: 'Relojería 101', description: 'Lo esencial básico para principiantes', href: '/watch-101' },
            { title: 'Anatomía de un Reloj', description: 'Partes y componentes explicados', href: '/watch-101/anatomy' },
            { title: 'Terminología', description: 'Vocabulario esencial de relojería', href: '/watch-101/terminology' },
          ],
        },
        movements: {
          title: 'Movimientos',
          items: [
            { title: 'Cómo Funcionan los Relojes', description: 'Entendiendo los movimientos', href: '/how-watches-work' },
            { title: 'Cuarzo', description: 'Precisión a batería', href: '/movements/quartz' },
            { title: 'Cuerda Manual', description: 'Mecánico de cuerda manual', href: '/movements/manual' },
            { title: 'Automático', description: 'Mecánico de cuerda automática', href: '/movements/automatic' },
            { title: 'Solar y Otros', description: 'Solar, Kinetic, Spring Drive', href: '/movements/other' },
          ],
        },
      },
      watches: {
        title: 'Relojes',
        typesAndStyles: {
          title: 'Tipos y Estilos',
          items: [
            { title: 'Tipos de Relojes', description: 'Explora todos los estilos', href: '/watch-types' },
            { title: 'Relojes de Buceo', description: 'Construidos para bajo el agua', href: '/watch-types/dive' },
            { title: 'Relojes de Vestir', description: 'Elegantes y formales', href: '/watch-types/dress' },
            { title: 'Cronógrafos', description: 'Función de cronómetro', href: '/watch-types/chronograph' },
            { title: 'Relojes Aviador', description: 'Relojes de aviación', href: '/watch-types/pilot' },
            { title: 'Relojes de Campo', description: 'Inspirados militares', href: '/watch-types/field' },
            { title: 'Relojes GMT', description: 'Viajes y zonas horarias', href: '/watch-types/gmt' },
            { title: 'Digital', description: 'Digital y smartwatches', href: '/watch-types/digital' },
          ],
        },
        complications: {
          title: 'Complicaciones',
          items: [
            { title: 'Características de Relojes', description: 'Más allá de dar la hora', href: '/watch-features' },
          ],
        },
      },
      brands: {
        title: 'Marcas',
        worldOfWatches: {
          title: 'Mundo de los Relojes',
          items: [
            { title: 'Visión General de Marcas', description: 'Explora fabricantes de relojes', href: '/world-of-watches' },
            { title: 'Historia de la Relojería', description: 'Línea de tiempo de la relojería', href: '/world-of-watches#history' },
            { title: 'La Santa Trinidad', description: 'Patek, AP, Vacheron Constantin', href: '/world-of-watches#holy-trinity' },
            { title: 'Marcas de Lujo', description: 'Rolex, Omega, Cartier y más', href: '/world-of-watches#luxury' },
          ],
        },
      },
      collecting: {
        title: 'Coleccionismo',
        collectorsCorner: {
          title: 'Rincón del Coleccionista',
          items: [
            { title: 'Comenzar', description: 'Inicia tu colección', href: '/collectors-corner' },
            { title: 'Guía de Compra', description: 'Nuevo, usado, vintage', href: '/collectors-corner#buying-guide' },
            { title: 'Detectar Falsificaciones', description: 'Consejos de autenticación', href: '/collectors-corner#fakes' },
          ],
        },
        watchCare: {
          title: 'Cuidado de Relojes',
          items: [
            { title: 'Mantenimiento', description: 'Mantén tus relojes funcionando', href: '/watch-care' },
            { title: 'Servicio', description: 'Cuándo y por qué dar servicio', href: '/watch-care#servicing' },
          ],
        },
      },
      blog: {
        title: 'Blog',
      },
    },
    en: {
      learn: {
        title: 'Learn',
        fundamentals: {
          title: 'Fundamentals',
          items: [
            { title: 'Watch 101', description: 'Essential basics for beginners', href: '/watch-101' },
            { title: 'Anatomy of a Watch', description: 'Parts and components explained', href: '/watch-101/anatomy' },
            { title: 'Terminology', description: 'Essential watch vocabulary', href: '/watch-101/terminology' },
          ],
        },
        movements: {
          title: 'Movements',
          items: [
            { title: 'How Watches Work', description: 'Understanding watch movements', href: '/how-watches-work' },
            { title: 'Quartz', description: 'Battery-powered precision', href: '/movements/quartz' },
            { title: 'Manual Wind', description: 'Hand-wound mechanical', href: '/movements/manual' },
            { title: 'Automatic', description: 'Self-winding mechanical', href: '/movements/automatic' },
            { title: 'Solar & Others', description: 'Solar, Kinetic, Spring Drive', href: '/movements/other' },
          ],
        },
      },
      watches: {
        title: 'Watches',
        typesAndStyles: {
          title: 'Types & Styles',
          items: [
            { title: 'Watch Types', description: 'Explore all watch styles', href: '/watch-types' },
            { title: 'Dive Watches', description: 'Built for underwater', href: '/watch-types/dive' },
            { title: 'Dress Watches', description: 'Elegant & formal', href: '/watch-types/dress' },
            { title: 'Chronographs', description: 'Stopwatch function', href: '/watch-types/chronograph' },
            { title: 'Pilot Watches', description: 'Aviation timepieces', href: '/watch-types/pilot' },
            { title: 'Field Watches', description: 'Military-inspired', href: '/watch-types/field' },
            { title: 'GMT Watches', description: 'Travel & time zones', href: '/watch-types/gmt' },
            { title: 'Digital', description: 'Digital & smartwatches', href: '/watch-types/digital' },
          ],
        },
        complications: {
          title: 'Complications',
          items: [
            { title: 'Watch Features', description: 'Beyond basic timekeeping', href: '/watch-features' },
          ],
        },
      },
      brands: {
        title: 'Brands',
        worldOfWatches: {
          title: 'World of Watches',
          items: [
            { title: 'Brand Overview', description: 'Explore watch manufacturers', href: '/world-of-watches' },
            { title: 'History of Horology', description: 'Timeline of watchmaking', href: '/world-of-watches#history' },
            { title: 'The Holy Trinity', description: 'Patek, AP, Vacheron Constantin', href: '/world-of-watches#holy-trinity' },
            { title: 'Luxury Brands', description: 'Rolex, Omega, Cartier & more', href: '/world-of-watches#luxury' },
          ],
        },
      },
      collecting: {
        title: 'Collecting',
        collectorsCorner: {
          title: "Collector's Corner",
          items: [
            { title: 'Getting Started', description: 'Begin your collection', href: '/collectors-corner' },
            { title: 'Buying Guide', description: 'New, pre-owned, vintage', href: '/collectors-corner#buying-guide' },
            { title: 'Spotting Fakes', description: 'Authentication tips', href: '/collectors-corner#fakes' },
          ],
        },
        watchCare: {
          title: 'Watch Care',
          items: [
            { title: 'Maintenance', description: 'Keep your watches running', href: '/watch-care' },
            { title: 'Servicio', description: 'When and why to service', href: '/watch-care#servicing' },
          ],
        },
      },
      blog: {
        title: 'Blog',
      },
    },
    fr: {
      learn: {
        title: 'Apprendre',
        fundamentals: {
          title: 'Fondamentaux',
          items: [
            { title: 'Horlogerie 101', description: "L'essentiel de base pour débutants", href: '/watch-101' },
            { title: "Anatomie d'une Montre", description: 'Pièces et composants expliqués', href: '/watch-101/anatomy' },
            { title: 'Terminologie', description: 'Vocabulaire horloger essentiel', href: '/watch-101/terminology' },
          ],
        },
        movements: {
          title: 'Mouvements',
          items: [
            { title: 'Comment Fonctionnent les Montres', description: 'Comprendre les mouvements', href: '/how-watches-work' },
            { title: 'Quartz', description: 'Précision à pile', href: '/movements/quartz' },
            { title: 'Remontage Manuel', description: 'Mécanique à remontage manuel', href: '/movements/manual' },
            { title: 'Automatique', description: 'Mécanique à remontage automatique', href: '/movements/automatic' },
            { title: 'Solaire et Autres', description: 'Solaire, Kinetic, Spring Drive', href: '/movements/other' },
          ],
        },
      },
      watches: {
        title: 'Montres',
        typesAndStyles: {
          title: 'Types et Styles',
          items: [
            { title: 'Types de Montres', description: 'Explorez tous les styles', href: '/watch-types' },
            { title: 'Montres de Plongée', description: "Construites pour sous l'eau", href: '/watch-types/dive' },
            { title: 'Montres Habillées', description: 'Élégantes et formelles', href: '/watch-types/dress' },
            { title: 'Chronographes', description: 'Fonction chronomètre', href: '/watch-types/chronograph' },
            { title: "Montres d'Aviateur", description: "Garde-temps d'aviation", href: '/watch-types/pilot' },
            { title: 'Montres de Terrain', description: 'Inspirées militaires', href: '/watch-types/field' },
            { title: 'Montres GMT', description: 'Voyage et fuseaux horaires', href: '/watch-types/gmt' },
            { title: 'Digital', description: 'Digital et montres connectées', href: '/watch-types/digital' },
          ],
        },
        complications: {
          title: 'Complications',
          items: [
            { title: 'Caractéristiques des Montres', description: "Au-delà de donner l'heure", href: '/watch-features' },
          ],
        },
      },
      brands: {
        title: 'Marques',
        worldOfWatches: {
          title: 'Monde des Montres',
          items: [
            { title: 'Aperçu des Marques', description: 'Explorez les fabricants de montres', href: '/world-of-watches' },
            { title: "Histoire de l'Horlogerie", description: "Chronologie de l'horlogerie", href: '/world-of-watches#history' },
            { title: 'La Sainte Trinité', description: 'Patek, AP, Vacheron Constantin', href: '/world-of-watches#holy-trinity' },
            { title: 'Marques de Luxe', description: 'Rolex, Omega, Cartier et plus', href: '/world-of-watches#luxury' },
          ],
        },
      },
      collecting: {
        title: 'Collection',
        collectorsCorner: {
          title: 'Coin du Collectionneur',
          items: [
            { title: 'Commencer', description: 'Commencez votre collection', href: '/collectors-corner' },
            { title: "Guide d'Achat", description: "Neuf, d'occasion, vintage", href: '/collectors-corner#buying-guide' },
            { title: 'Repérer les Contrefaçons', description: "Conseils d'authentification", href: '/collectors-corner#fakes' },
          ],
        },
        watchCare: {
          title: 'Entretien des Montres',
          items: [
            { title: 'Maintenance', description: 'Gardez vos montres en marche', href: '/watch-care' },
            { title: 'Entretien', description: 'Quand et pourquoi entretenir', href: '/watch-care#servicing' },
          ],
        },
      },
      blog: {
        title: 'Blog',
      },
    },
  };

  const megaMenu = megaMenuTranslations[currentLang] || megaMenuTranslations.es;
  const newsletterText = currentLang === 'es' ? 'Boletín' : currentLang === 'fr' ? 'Newsletter' : 'Newsletter';

  // Helper function to get the path in a different language
  const getLocalizedPath = (newLang: string) => {
    if (!pathname) return `/${newLang}`;

    // Remove the current language prefix from pathname
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');

    // Add the new language prefix
    return `/${newLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
  };

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-white/5 dark:bg-white/5 backdrop-blur-[20px] backdrop-saturate-150 shadow-glass border-b border-white/10'
          : 'bg-transparent backdrop-blur-none'
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${currentLang}`} className="flex items-center gap-2 group">
            <div className="relative">
              <Watch className="w-8 h-8 text-accent-gold group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-accent-gold/20 blur-xl group-hover:bg-accent-gold/30 transition-all" />
            </div>
            <div>
              <span className="text-xl font-bold font-serif bg-gradient-to-r from-accent-gold via-white to-accent-gold bg-clip-text text-transparent block leading-tight">
                Momento Relojero
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Mega Menu */}
          <nav className="hidden lg:flex items-center gap-2">
            {/* Learn Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu('learn')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {megaMenu.learn.title}
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Learn Mega Menu Panel */}
              {activeMegaMenu === 'learn' && (
                <div className="absolute left-0 top-full pt-4 w-[600px] animate-fade-in">
                  <div className="bg-dark-bg-secondary/90 backdrop-blur-xl rounded-xl shadow-luxury-xl border border-white/10 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Fundamentals Column */}
                      <div>
                        <h3 className="text-sm font-bold text-accent-gold mb-4 uppercase tracking-widest">
                          {megaMenu.learn.fundamentals.title}
                        </h3>
                        <div className="space-y-2">
                          {megaMenu.learn.fundamentals.items.map((item: any) => (
                            <Link
                              key={item.href}
                              href={`/${currentLang}${item.href}`}
                              className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-white group-hover:text-accent-gold">
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-400">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Movements Column */}
                      <div>
                        <h3 className="text-sm font-bold text-accent-gold mb-4 uppercase tracking-widest">
                          {megaMenu.learn.movements.title}
                        </h3>
                        <div className="space-y-2">
                          {megaMenu.learn.movements.items.map((item: any) => (
                            <Link
                              key={item.href}
                              href={`/${currentLang}${item.href}`}
                              className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-white group-hover:text-accent-gold">
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-400">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Watches Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu('watches')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {megaMenu.watches.title}
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Watches Mega Menu Panel */}
              {activeMegaMenu === 'watches' && (
                <div className="absolute left-0 top-full pt-4 w-[700px] animate-fade-in">
                  <div className="bg-dark-bg-secondary/90 backdrop-blur-xl rounded-xl shadow-luxury-xl border border-white/10 p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Types & Styles - Spans 2 columns */}
                      <div className="col-span-2">
                        <h3 className="text-sm font-bold text-accent-gold mb-4 uppercase tracking-widest">
                          {megaMenu.watches.typesAndStyles.title}
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {megaMenu.watches.typesAndStyles.items.map((item: any) => (
                            <Link
                              key={item.href}
                              href={`/${currentLang}${item.href}`}
                              className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-white group-hover:text-accent-gold">
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-400">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Complications Column */}
                      <div>
                        <h3 className="text-sm font-bold text-accent-gold mb-4 uppercase tracking-widest">
                          {megaMenu.watches.complications.title}
                        </h3>
                        <div className="space-y-2">
                          {megaMenu.watches.complications.items.map((item: any) => (
                            <Link
                              key={item.href}
                              href={`/${currentLang}${item.href}`}
                              className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-white group-hover:text-accent-gold">
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-400">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Brands Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu('brands')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {megaMenu.brands.title}
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Brands Mega Menu Panel */}
              {activeMegaMenu === 'brands' && (
                <div className="absolute left-0 top-full pt-4 w-[400px] animate-fade-in">
                  <div className="bg-dark-bg-secondary/90 backdrop-blur-xl rounded-xl shadow-luxury-xl border border-white/10 p-6">
                    <h3 className="text-sm font-bold text-accent-gold mb-4 uppercase tracking-widest">
                      {megaMenu.brands.worldOfWatches.title}
                    </h3>
                    <div className="space-y-2">
                      {megaMenu.brands.worldOfWatches.items.map((item: any) => (
                        <Link
                          key={item.href}
                          href={`/${currentLang}${item.href}`}
                          className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="text-sm font-semibold text-white group-hover:text-accent-gold">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-400">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Collecting Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu('collecting')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {megaMenu.collecting.title}
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Collecting Mega Menu Panel */}
              {activeMegaMenu === 'collecting' && (
                <div className="absolute left-0 top-full pt-4 w-[550px] animate-fade-in">
                  <div className="bg-dark-bg-secondary/90 backdrop-blur-xl rounded-xl shadow-luxury-xl border border-white/10 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Collector's Corner Column */}
                      <div>
                        <h3 className="text-sm font-bold text-accent-gold mb-4 uppercase tracking-widest">
                          {megaMenu.collecting.collectorsCorner.title}
                        </h3>
                        <div className="space-y-2">
                          {megaMenu.collecting.collectorsCorner.items.map((item: any) => (
                            <Link
                              key={item.href}
                              href={`/${currentLang}${item.href}`}
                              className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-white group-hover:text-accent-gold">
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-400">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Watch Care Column */}
                      <div>
                        <h3 className="text-sm font-bold text-accent-gold mb-4 uppercase tracking-widest">
                          {megaMenu.collecting.watchCare.title}
                        </h3>
                        <div className="space-y-2">
                          {megaMenu.collecting.watchCare.items.map((item: any) => (
                            <Link
                              key={item.href}
                              href={`/${currentLang}${item.href}`}
                              className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-white group-hover:text-accent-gold">
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-400">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Blog - Simple Link */}
            <Link
              href={`/${currentLang}/blog`}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {megaMenu.blog.title}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={getLocalizedPath(lang.code)}
                  className={cn(
                    'px-3 py-1 text-xs font-semibold rounded-full transition-all',
                    currentLang === lang.code
                      ? 'bg-accent-gold text-black'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  )}
                >
                  {lang.label}
                </Link>
              ))}
            </div>

            {/* Newsletter CTA Button (Desktop) */}
            <Link
              href={`/${currentLang}/newsletter`}
              className="hidden lg:inline-flex items-center gap-1 px-5 py-2 bg-accent-gold hover:bg-white text-black text-sm font-bold rounded-full transition-all hover:scale-105"
            >
              {newsletterText}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in max-h-[80vh] overflow-y-auto bg-dark-bg/95 backdrop-blur-xl absolute top-full left-0 right-0 shadow-2xl">
            <nav className="space-y-1 px-4">
              {/* Mobile Learn Section */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-bold text-accent-gold uppercase tracking-wide">
                  {megaMenu.learn.title}
                </div>
                <div className="px-4 py-1 text-xs font-semibold text-gray-500">
                  {megaMenu.learn.fundamentals.title}
                </div>
                {megaMenu.learn.fundamentals.items.map((item: any) => (
                  <Link
                    key={item.href}
                    href={`/${currentLang}${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="px-4 py-1 text-xs font-semibold text-gray-500 mt-2">
                  {megaMenu.learn.movements.title}
                </div>
                {megaMenu.learn.movements.items.map((item: any) => (
                  <Link
                    key={item.href}
                    href={`/${currentLang}${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Mobile Watches Section */}
              <div className="space-y-1 pt-3">
                <div className="px-4 py-2 text-sm font-bold text-accent-gold uppercase tracking-wide">
                  {megaMenu.watches.title}
                </div>
                <div className="px-4 py-1 text-xs font-semibold text-gray-500">
                  {megaMenu.watches.typesAndStyles.title}
                </div>
                {megaMenu.watches.typesAndStyles.items.map((item: any) => (
                  <Link
                    key={item.href}
                    href={`/${currentLang}${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="px-4 py-1 text-xs font-semibold text-gray-500 mt-2">
                  {megaMenu.watches.complications.title}
                </div>
                {megaMenu.watches.complications.items.map((item: any) => (
                  <Link
                    key={item.href}
                    href={`/${currentLang}${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Mobile Brands Section */}
              <div className="space-y-1 pt-3">
                <div className="px-4 py-2 text-sm font-bold text-accent-gold uppercase tracking-wide">
                  {megaMenu.brands.title}
                </div>
                {megaMenu.brands.worldOfWatches.items.map((item: any) => (
                  <Link
                    key={item.href}
                    href={`/${currentLang}${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Mobile Collecting Section */}
              <div className="space-y-1 pt-3">
                <div className="px-4 py-2 text-sm font-bold text-accent-gold uppercase tracking-wide">
                  {megaMenu.collecting.title}
                </div>
                <div className="px-4 py-1 text-xs font-semibold text-gray-500">
                  {megaMenu.collecting.collectorsCorner.title}
                </div>
                {megaMenu.collecting.collectorsCorner.items.map((item: any) => (
                  <Link
                    key={item.href}
                    href={`/${currentLang}${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="px-4 py-1 text-xs font-semibold text-gray-500 mt-2">
                  {megaMenu.collecting.watchCare.title}
                </div>
                {megaMenu.collecting.watchCare.items.map((item: any) => (
                  <Link
                    key={item.href}
                    href={`/${currentLang}${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Mobile Blog Link */}
              <div className="pt-3">
                <Link
                  href={`/${currentLang}/blog`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-bold text-accent-gold uppercase tracking-wide"
                >
                  {megaMenu.blog.title}
                </Link>
              </div>

              {/* Mobile Newsletter CTA */}
              <Link
                href={`/${currentLang}/newsletter`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-3 mx-4 px-4 py-3 bg-accent-gold text-black text-center font-bold rounded-lg"
              >
                {newsletterText}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center gap-2 pt-3 mt-3 border-t border-white/10">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={getLocalizedPath(lang.code)}
                    className={cn(
                      'px-4 py-2 text-sm font-semibold rounded-lg transition-colors',
                      currentLang === lang.code
                        ? 'bg-accent-gold text-black'
                        : 'bg-white/5 text-gray-400'
                    )}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

Header.displayName = 'Header';
