/**
 * Structured Data (JSON-LD) utilities for SEO
 * Implements Schema.org markup for enhanced search engine visibility
 */

import { Article, WithContext, Organization, WebSite, BreadcrumbList, FAQPage } from 'schema-dts';

/**
 * Organization Schema - Use on all pages
 */
export function getOrganizationSchema(lang: string = 'es'): WithContext<Organization> {
  const baseUrl = 'https://momentorelojero.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Momento Relojero',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      lang === 'es'
        ? 'El recurso definitivo para entusiastas de los relojes. Guías completas sobre relojería, marcas de lujo, movimientos y coleccionismo.'
        : lang === 'fr'
        ? 'La ressource ultime pour les passionnés de montres. Guides complets sur l\'horlogerie, les marques de luxe, les mouvements et le collectionnisme.'
        : 'The ultimate resource for watch enthusiasts. Comprehensive guides on horology, luxury brands, movements, and collecting.',
    sameAs: [
      'https://twitter.com/momentorelojero',
      'https://facebook.com/momentorelojero',
      'https://instagram.com/momentorelojero',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English', 'French'],
    },
  };
}

/**
 * Website Schema - Use on homepage
 */
export function getWebsiteSchema(lang: string = 'es'): WithContext<WebSite> {
  const baseUrl = 'https://momentorelojero.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Momento Relojero',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/${lang}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    } as any,
  };
}

/**
 * Article Schema - Use on blog posts and guides
 */
export function getArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName = 'Momento Relojero',
  image,
  url,
  lang = 'es',
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  url: string;
  lang?: string;
}): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || 'https://momentorelojero.com/og-image.jpg',
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Momento Relojero',
      logo: {
        '@type': 'ImageObject',
        url: 'https://momentorelojero.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    inLanguage: lang === 'es' ? 'es-ES' : lang === 'fr' ? 'fr-FR' : 'en-US',
  };
}

/**
 * Breadcrumb Schema - Use on all internal pages
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQ Schema - Use on pages with frequently asked questions
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Product Schema - Use for watch reviews
 */
export function getProductSchema({
  name,
  description,
  brand,
  image,
  sku,
  price,
  currency = 'USD',
  availability = 'https://schema.org/InStock',
  aggregateRating,
}: {
  name: string;
  description: string;
  brand: string;
  image: string;
  sku?: string;
  price?: number;
  currency?: string;
  availability?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}) {
  const product: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
  };

  if (sku) {
    product.sku = sku;
  }

  if (price) {
    product.offers = {
      '@type': 'Offer',
      price: price.toString(),
      priceCurrency: currency,
      availability,
    };
  }

  if (aggregateRating) {
    product.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue.toString(),
      reviewCount: aggregateRating.reviewCount.toString(),
    };
  }

  return product;
}

/**
 * Helper function to inject structured data into page
 */
export function StructuredData({ data }: { data: WithContext<any> | WithContext<any>[] }) {
  const structuredData = Array.isArray(data) ? data : [data];

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
