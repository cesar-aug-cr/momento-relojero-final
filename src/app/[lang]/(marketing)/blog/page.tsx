import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Watch Blog, Reviews & News | Momento Relojero',
  description: 'Read in-depth watch reviews, industry news, buying guides, and opinion pieces from watch enthusiasts.',
};

const BLOG_CATEGORIES = [
  { name: 'Watch Reviews', description: 'In-depth hands-on reviews of new and classic timepieces', icon: '📝', color: 'from-blue-500 to-cyan-500' },
  { name: 'Industry News', description: 'Latest releases, brand announcements, and horological developments', icon: '📰', color: 'from-purple-500 to-pink-500' },
  { name: 'Buying Guides', description: 'Expert recommendations for every budget and occasion', icon: '🛍️', color: 'from-green-500 to-emerald-500' },
  { name: 'Opinion Pieces', description: 'Thoughtful perspectives on watches, collecting, and horology', icon: '💭', color: 'from-amber-500 to-orange-500' },
];

const FEATURED_POSTS = [
  {
    title: 'The 5 Best Dive Watches Under $1,000',
    excerpt: 'Discover exceptional dive watches that won\'t break the bank. From Seiko to Orient, we\'ve tested them all.',
    category: 'Buying Guide',
    readTime: '8 min read',
    date: '2025-03-15',
  },
  {
    title: 'Why the Omega Speedmaster is a Legend',
    excerpt: 'The Moonwatch\'s journey from NASA certification to modern icon. Exploring what makes it timeless.',
    category: 'Opinion',
    readTime: '12 min read',
    date: '2025-03-12',
  },
  {
    title: 'Grand Seiko SBGA413 Review: Spring Drive Perfection',
    excerpt: 'An in-depth look at one of the most beautiful watches under $10,000. The "Shunbun" delivers.',
    category: 'Review',
    readTime: '15 min read',
    date: '2025-03-10',
  },
  {
    title: 'New Releases: Watches & Wonders 2025 Highlights',
    excerpt: 'Coverage of the biggest announcements from Geneva. Rolex, Patek Philippe, and more unveiled.',
    category: 'News',
    readTime: '10 min read',
    date: '2025-03-08',
  },
];

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang = 'es' } = await params;

  return (
    <div className="bg-white dark:bg-dark-bg">
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-purple-600">
        <div className="container-golden py-5xl text-center">
          <BookOpen className="w-16 h-16 text-white mx-auto mb-lg" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-xl">
            Blog, Reviews & News
          </h1>
          <p className="text-xl text-white/90 mb-2xl max-w-3xl mx-auto">
            Stay informed with in-depth reviews, industry news, buying guides, and thoughtful perspectives on horology
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-5xl">
        <div className="container-golden">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3xl text-center">
            Explore Content Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-xl mb-5xl">
            {BLOG_CATEGORIES.map((category) => (
              <div
                key={category.name}
                className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-2xl border border-gray-200 dark:border-dark-border hover:border-accent-gold dark:hover:border-accent-gold transition-all hover:shadow-luxury cursor-pointer group"
              >
                <div className={`inline-flex p-lg rounded-xl bg-gradient-to-br ${category.color} mb-lg text-4xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-md group-hover:text-accent-gold transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-5xl bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="container-golden">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3xl">
            Recent Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-2xl max-w-6xl mx-auto">
            {FEATURED_POSTS.map((post, index) => (
              <article
                key={post.title}
                className="bg-white dark:bg-dark-bg-tertiary rounded-2xl p-3xl border border-gray-200 dark:border-dark-border hover:border-accent-gold dark:hover:border-accent-gold transition-all hover:shadow-luxury group cursor-pointer"
              >
                <div className="flex items-center gap-md mb-lg flex-wrap">
                  <span className="px-md py-xs text-sm font-medium bg-accent-gold/10 text-accent-gold-dark dark:text-accent-gold rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-xs text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-md group-hover:text-accent-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-xl leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-sm text-accent-gold font-semibold group-hover:gap-md transition-all">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-5xl">
        <div className="container-golden">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-accent-gold/10 to-accent-gold-light/10 rounded-2xl p-3xl border border-accent-gold/20">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-lg">
              More Content Coming Soon
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2xl">
              We&apos;re building an extensive library of reviews, guides, and articles. Subscribe to our newsletter to be notified when new content is published.
            </p>
            <Link
              href={`/${lang}#newsletter`}
              className="inline-flex items-center gap-sm px-xl py-lg bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold rounded-lg transition-all duration-377 hover:shadow-gold text-lg"
            >
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
