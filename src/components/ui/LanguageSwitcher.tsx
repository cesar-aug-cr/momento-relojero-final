'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸', isDefault: true },
  { code: 'en', name: 'English', flag: '🇬🇧', isDefault: false },
  { code: 'fr', name: 'Français', flag: '🇫🇷', isDefault: false },
];

export function LanguageSwitcher({ currentLang = 'es' }: { currentLang?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    // Remove current language prefix from pathname
    const pathWithoutLang = pathname.replace(/^\/(es|en|fr)/, '');
    // Add new language prefix
    const newPath = `/${newLang}${pathWithoutLang || ''}`;
    router.push(newPath);
    setIsOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Cambiar idioma / Change language"
        title={`${currentLanguage.name}${currentLanguage.isDefault ? ' (Predeterminado)' : ''}`}
      >
        <Globe className="w-4 h-4 text-slate-700 dark:text-slate-300" />
        <span className="text-2xl">{currentLanguage.flag}</span>
        <span className="text-xs font-medium text-slate-600 dark:text-slate-400 hidden md:inline">
          {currentLanguage.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-slate-200 dark:border-gray-700 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors ${
                lang.code === currentLang ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-100' : ''
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <div className="flex-1">
                <div className="text-sm font-medium">{lang.name}</div>
                {lang.isDefault && (
                  <div className="text-xs text-slate-500 dark:text-slate-400">Predeterminado</div>
                )}
              </div>
              {lang.code === currentLang && (
                <span className="text-amber-600 dark:text-amber-400">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
