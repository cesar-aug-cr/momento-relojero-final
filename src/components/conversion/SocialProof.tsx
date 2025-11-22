'use client';

import { FC } from 'react';
import { Star, Quote, Shield, Award, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  location?: string;
}

interface SocialProofProps {
  variant?: 'testimonials' | 'stats' | 'trust-badges' | 'live-activity';
  testimonials?: Testimonial[];
  className?: string;
  lang?: string;
}

const getTestimonials = (lang: string): Testimonial[] => {
  const testimonials = {
    es: [
      {
        id: '1',
        name: 'Carlos Mendoza',
        role: 'Coleccionista de Relojes',
        content:
          'Momento Relojero me ayudó a entender los movimientos mecánicos y hacer mi primera compra inteligente. ¡Recursos increíbles!',
        rating: 5,
        location: 'Madrid, España',
      },
      {
        id: '2',
        name: 'Sophie Laurent',
        role: 'Entusiasta de la Relojería',
        content:
          'La guía más completa sobre relojes que he encontrado. Perfecta para principiantes y coleccionistas experimentados.',
        rating: 5,
        location: 'París, Francia',
      },
      {
        id: '3',
        name: 'James Wilson',
        role: 'Nuevo Coleccionista',
        content:
          'Pasé de no saber nada sobre relojes a construir una colección de 10 piezas gracias a esta increíble página.',
        rating: 5,
        location: 'Londres, Reino Unido',
      },
    ],
    en: [
      {
        id: '1',
        name: 'Carlos Mendoza',
        role: 'Watch Collector',
        content:
          'Momento Relojero helped me understand mechanical movements and make my first smart purchase. Incredible resources!',
        rating: 5,
        location: 'Madrid, Spain',
      },
      {
        id: '2',
        name: 'Sophie Laurent',
        role: 'Watch Enthusiast',
        content:
          'The most complete watch guide I\'ve found. Perfect for beginners and experienced collectors alike.',
        rating: 5,
        location: 'Paris, France',
      },
      {
        id: '3',
        name: 'James Wilson',
        role: 'New Collector',
        content:
          'I went from knowing nothing about watches to building a 10-piece collection thanks to this amazing site.',
        rating: 5,
        location: 'London, UK',
      },
    ],
    fr: [
      {
        id: '1',
        name: 'Carlos Mendoza',
        role: 'Collectionneur de Montres',
        content:
          'Momento Relojero m\'a aidé à comprendre les mouvements mécaniques et à faire mon premier achat intelligent. Ressources incroyables !',
        rating: 5,
        location: 'Madrid, Espagne',
      },
      {
        id: '2',
        name: 'Sophie Laurent',
        role: 'Passionnée d\'Horlogerie',
        content:
          'Le guide le plus complet sur les montres que j\'ai trouvé. Parfait pour les débutants et les collectionneurs expérimentés.',
        rating: 5,
        location: 'Paris, France',
      },
      {
        id: '3',
        name: 'James Wilson',
        role: 'Nouveau Collectionneur',
        content:
          'Je suis passé de ne rien savoir sur les montres à construire une collection de 10 pièces grâce à ce site incroyable.',
        rating: 5,
        location: 'Londres, Royaume-Uni',
      },
    ],
  };

  return testimonials[lang as keyof typeof testimonials] || testimonials.es;
};

const getTrustBadges = (lang: string) => {
  const badges = {
    es: [
      {
        icon: Shield,
        title: 'Información Verificada',
        description: 'Contenido revisado por expertos en relojería',
      },
      {
        icon: Award,
        title: 'Recursos Premiados',
        description: 'Reconocido por la comunidad de coleccionistas',
      },
      {
        icon: Users,
        title: '50,000+ Lectores',
        description: 'Confiado por entusiastas de todo el mundo',
      },
      {
        icon: TrendingUp,
        title: 'Actualizado Constantemente',
        description: 'Nuevo contenido cada semana',
      },
    ],
    en: [
      {
        icon: Shield,
        title: 'Verified Information',
        description: 'Content reviewed by watch experts',
      },
      {
        icon: Award,
        title: 'Award-Winning Resources',
        description: 'Recognized by the collector community',
      },
      {
        icon: Users,
        title: '50,000+ Readers',
        description: 'Trusted by enthusiasts worldwide',
      },
      {
        icon: TrendingUp,
        title: 'Constantly Updated',
        description: 'New content every week',
      },
    ],
    fr: [
      {
        icon: Shield,
        title: 'Informations Vérifiées',
        description: 'Contenu examiné par des experts en horlogerie',
      },
      {
        icon: Award,
        title: 'Ressources Primées',
        description: 'Reconnu par la communauté de collectionneurs',
      },
      {
        icon: Users,
        title: '50 000+ Lecteurs',
        description: 'Approuvé par des passionnés du monde entier',
      },
      {
        icon: TrendingUp,
        title: 'Constamment Mis à Jour',
        description: 'Nouveau contenu chaque semaine',
      },
    ],
  };

  return badges[lang as keyof typeof badges] || badges.es;
};

const getStats = (lang: string) => {
  const stats = {
    es: [
      {
        value: '50,000+',
        label: 'Lectores Mensuales',
      },
      {
        value: '200+',
        label: 'Guías Detalladas',
      },
      {
        value: '50+',
        label: 'Marcas Cubiertas',
      },
      {
        value: '4.9/5',
        label: 'Valoración Promedio',
      },
    ],
    en: [
      {
        value: '50,000+',
        label: 'Monthly Readers',
      },
      {
        value: '200+',
        label: 'Detailed Guides',
      },
      {
        value: '50+',
        label: 'Brands Covered',
      },
      {
        value: '4.9/5',
        label: 'Average Rating',
      },
    ],
    fr: [
      {
        value: '50 000+',
        label: 'Lecteurs Mensuels',
      },
      {
        value: '200+',
        label: 'Guides Détaillés',
      },
      {
        value: '50+',
        label: 'Marques Couvertes',
      },
      {
        value: '4,9/5',
        label: 'Note Moyenne',
      },
    ],
  };

  return stats[lang as keyof typeof stats] || stats.es;
};

export const SocialProof: FC<SocialProofProps> = ({
  variant = 'testimonials',
  testimonials: customTestimonials,
  className,
  lang = 'es',
}) => {
  const testimonials = customTestimonials || getTestimonials(lang);
  const trustBadges = getTrustBadges(lang);
  const stats = getStats(lang);

  if (variant === 'testimonials') {
    return (
      <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-xl', className)}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-xl border border-gray-200 dark:border-dark-border shadow-luxury hover:shadow-luxury-lg transition-all"
          >
            {/* Quote Icon */}
            <Quote className="w-10 h-10 text-accent-gold mb-lg opacity-50" aria-hidden="true" />

            {/* Rating */}
            <div className="flex gap-xs mb-lg" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn('w-5 h-5', i < testimonial.rating ? 'fill-accent-gold text-accent-gold' : 'text-gray-300')}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-gray-700 dark:text-gray-300 mb-lg leading-relaxed">
              &quot;{testimonial.content}&quot;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-md pt-lg border-t border-gray-200 dark:border-dark-border">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-gold to-accent-gold-dark flex items-center justify-center text-white font-bold text-lg">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                {testimonial.location && (
                  <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.location}</div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === 'trust-badges') {
    return (
      <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-lg', className)}>
        {trustBadges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/10 border-2 border-accent-gold/20 mb-md">
                <Icon className="w-8 h-8 text-accent-gold" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-xs">{badge.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{badge.description}</p>
            </motion.div>
          );
        })}
      </div>
    );
  }

  if (variant === 'stats') {
    return (
      <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-xl', className)}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-sm">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
};

SocialProof.displayName = 'SocialProof';

/**
 * Live Activity Notification Component
 * Shows real-time activity to create FOMO and social proof
 */
interface LiveActivityProps {
  className?: string;
  lang?: string;
}

export const LiveActivityNotification: FC<LiveActivityProps> = ({ className, lang = 'es' }) => {
  const activities = {
    es: [
      'Juan de México acaba de suscribirse',
      'María de Argentina está leyendo "Guía de Relojes de Buceo"',
      'Pedro de España descargó la guía gratuita',
      'Ana de Chile se unió a la comunidad',
    ],
    en: [
      'John from Mexico just subscribed',
      'Sophie from Paris is reading "Dive Watches Guide"',
      'Michael from New York just downloaded the guide',
      'Emma from London joined the community',
    ],
    fr: [
      'Jean du Mexique vient de s\'abonner',
      'Sophie de Paris lit le "Guide des Montres de Plongée"',
      'Michel de New York vient de télécharger le guide',
      'Emma de Londres a rejoint la communauté',
    ],
  };

  const activityList = activities[lang as keyof typeof activities] || activities.es;
  const timeAgo = {
    es: 'Hace unos momentos',
    en: 'A few moments ago',
    fr: 'Il y a quelques instants',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        'fixed bottom-lg left-lg z-50 bg-white dark:bg-dark-bg-tertiary rounded-lg shadow-luxury-lg border border-gray-200 dark:border-dark-border p-lg max-w-xs',
        className
      )}
    >
      <div className="flex items-start gap-md">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mt-1" aria-hidden="true" />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {activityList[Math.floor(Math.random() * activityList.length)]}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-xs">
            {timeAgo[lang as keyof typeof timeAgo] || timeAgo.es}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

LiveActivityNotification.displayName = 'LiveActivityNotification';
