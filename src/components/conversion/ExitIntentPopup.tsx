'use client';

import { FC, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Gift, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const exitIntentSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ExitIntentFormData = z.infer<typeof exitIntentSchema>;

interface ExitIntentPopupProps {
  dismissDays?: number;
  minTimeOnPage?: number;
  lang?: string;
}

const getContent = (lang: string) => {
  const content = {
    es: {
      title: '¡Espera! No te pierdas nuestro contenido exclusivo',
      description: 'Únete a miles de entusiastas de los relojes y recibe guías gratuitas, consejos de coleccionismo y ofertas exclusivas.',
      incentive: '📚 Guía gratuita: "Los 10 Relojes Esenciales para Comenzar tu Colección"',
      emailPlaceholder: 'tu@email.com',
      submitButton: 'Obtener mi Guía Gratuita',
      submitting: 'Enviando...',
      thankYou: '¡Gracias!',
      checkEmail: 'Revisa tu correo para obtener tu guía gratuita.',
      instantDelivery: 'Envío instantáneo',
      noSpam: 'Sin spam, cancela cuando quieras',
      emailLabel: 'Correo electrónico',
    },
    en: {
      title: 'Wait! Don\'t Miss Our Exclusive Content',
      description: 'Join thousands of watch enthusiasts and receive free guides, collecting tips, and exclusive offers.',
      incentive: '📚 Free Guide: "The 10 Essential Watches to Start Your Collection"',
      emailPlaceholder: 'you@email.com',
      submitButton: 'Get My Free Guide',
      submitting: 'Sending...',
      thankYou: 'Thank You!',
      checkEmail: 'Check your email for your free guide.',
      instantDelivery: 'Instant delivery',
      noSpam: 'No spam, unsubscribe anytime',
      emailLabel: 'Email address',
    },
    fr: {
      title: 'Attendez ! Ne manquez pas notre contenu exclusif',
      description: 'Rejoignez des milliers de passionnés de montres et recevez des guides gratuits, des conseils de collection et des offres exclusives.',
      incentive: '📚 Guide Gratuit : "Les 10 Montres Essentielles pour Commencer Votre Collection"',
      emailPlaceholder: 'votre@email.com',
      submitButton: 'Obtenir mon Guide Gratuit',
      submitting: 'Envoi...',
      thankYou: 'Merci !',
      checkEmail: 'Vérifiez votre e-mail pour votre guide gratuit.',
      instantDelivery: 'Livraison instantanée',
      noSpam: 'Pas de spam, désabonnez-vous à tout moment',
      emailLabel: 'E-mail',
    },
  };

  return content[lang as keyof typeof content] || content.es;
};

export const ExitIntentPopup: FC<ExitIntentPopupProps> = ({
  dismissDays = 7,
  minTimeOnPage = 5,
  lang = 'es',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasTriggered, setHasTriggered] = useLocalStorage('exit-intent-triggered', false);
  const [dismissedUntil, setDismissedUntil] = useLocalStorage<number | null>('exit-intent-dismissed', null);
  const [entryTime] = useState(Date.now());

  const content = getContent(lang);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ExitIntentFormData>({
    resolver: zodResolver(exitIntentSchema),
  });

  const handleClose = useCallback(() => {
    setIsVisible(false);
    const dismissUntilDate = Date.now() + dismissDays * 24 * 60 * 60 * 1000;
    setDismissedUntil(dismissUntilDate);
    trackEvent('exit_intent_dismissed', { lang });
  }, [dismissDays, setDismissedUntil, lang]);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      // Only trigger on upward movement towards browser chrome
      if (e.clientY <= 10 && !hasTriggered && !isVisible) {
        const timeOnPage = (Date.now() - entryTime) / 1000;

        // Check if user has been on page long enough
        if (timeOnPage >= minTimeOnPage) {
          // Check if dismissed period has expired
          if (!dismissedUntil || Date.now() > dismissedUntil) {
            setIsVisible(true);
            setHasTriggered(true);
            trackEvent('exit_intent_shown', { lang, timeOnPage });
          }
        }
      }
    },
    [hasTriggered, isVisible, dismissedUntil, entryTime, minTimeOnPage, setHasTriggered, lang]
  );

  useEffect(() => {
    // Desktop: Mouse leave event
    document.addEventListener('mouseleave', handleMouseLeave);

    // Mobile: Rapid scroll up detection
    let lastScrollY = window.scrollY;
    let scrollUpCount = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        scrollUpCount++;

        // If user scrolls up rapidly 3 times
        if (scrollUpCount >= 3 && !hasTriggered && !isVisible) {
          const timeOnPage = (Date.now() - entryTime) / 1000;

          if (timeOnPage >= minTimeOnPage) {
            if (!dismissedUntil || Date.now() > dismissedUntil) {
              setIsVisible(true);
              setHasTriggered(true);
              trackEvent('exit_intent_shown', { lang, timeOnPage, trigger: 'mobile_scroll' });
            }
          }
          scrollUpCount = 0;
        }
      } else {
        scrollUpCount = 0;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseLeave, hasTriggered, isVisible, dismissedUntil, entryTime, minTimeOnPage, setHasTriggered, lang]);

  const onSubmit = async (data: ExitIntentFormData) => {
    try {
      const response = await fetch('/api/newsletter/exit-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang, source: 'exit_intent' }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        trackEvent('exit_intent_conversion', { lang, email: data.email });

        // Close popup after 3 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Exit intent submission failed:', error);
      trackEvent('exit_intent_error', { lang, error: String(error) });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-2xl mx-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
          >
            <div className="bg-white dark:bg-dark-bg-tertiary rounded-2xl shadow-luxury-xl border-2 border-accent-gold overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-lg right-lg p-sm rounded-full hover:bg-gray-100 dark:hover:bg-dark-border transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>

              {isSubmitted ? (
                // Success State
                <div className="p-3xl text-center">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-xl">
                    <Mail className="w-12 h-12 text-green-600 dark:text-green-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-md">
                    {content.thankYou}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    {content.checkEmail}
                  </p>
                </div>
              ) : (
                // Form State
                <div className="p-3xl">
                  {/* Icon & Title */}
                  <div className="text-center mb-2xl">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-gold/10 rounded-full mb-lg">
                      <Gift className="w-12 h-12 text-accent-gold" aria-hidden="true" />
                    </div>
                    <h2
                      id="exit-intent-title"
                      className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-md"
                    >
                      {content.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{content.description}</p>
                  </div>

                  {/* Incentive Box */}
                  <div className="bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 border-2 border-accent-gold/30 rounded-xl p-xl mb-2xl">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                      {content.incentive}
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-lg">
                    <div>
                      <label htmlFor="exit-email" className="sr-only">
                        {content.emailLabel}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-lg top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                        <input
                          {...register('email')}
                          id="exit-email"
                          type="email"
                          placeholder={content.emailPlaceholder}
                          className={cn(
                            'w-full pl-3xl pr-lg py-lg rounded-lg border-2 bg-white dark:bg-dark-bg text-gray-900 dark:text-white text-lg transition-all',
                            errors.email
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-gray-300 dark:border-dark-border focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20'
                          )}
                          autoFocus
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'exit-email-error' : undefined}
                        />
                      </div>
                      {errors.email && (
                        <p id="exit-email-error" className="mt-sm text-sm text-red-600 dark:text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-lg px-xl bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-bold text-lg rounded-lg transition-all duration-377 hover:shadow-gold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? content.submitting : content.submitButton}
                    </button>
                  </form>

                  {/* Trust Signals */}
                  <div className="mt-xl pt-xl border-t border-gray-200 dark:border-dark-border">
                    <div className="flex items-center justify-center gap-2xl text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-sm">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span>{content.instantDelivery}</span>
                      </div>
                      <div className="flex items-center gap-sm">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <span>{content.noSpam}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

ExitIntentPopup.displayName = 'ExitIntentPopup';
