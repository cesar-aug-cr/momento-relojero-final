'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContentLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
  maxWidth?: 'normal' | 'wide' | 'full';
  className?: string;
}

export const ContentLayout: FC<ContentLayoutProps> = ({
  children,
  sidebar,
  maxWidth = 'normal',
  className
}) => {
  const maxWidthClasses = {
    normal: 'max-w-7xl',
    wide: 'max-w-[1618px]',
    full: 'max-w-full'
  };

  return (
    <div className={cn('container mx-auto px-4 py-12', maxWidthClasses[maxWidth], className)}>
      <div className={cn(
        'grid gap-8',
        sidebar ? 'lg:grid-cols-[1fr_38.2%]' : 'grid-cols-1'
      )}>
        {/* Main Content - 61.8% on large screens with sidebar */}
        <main className="min-w-0">
          <article className="prose prose-slate prose-lg max-w-none
            prose-headings:font-serif
            prose-h1:text-4xl prose-h1:font-bold prose-h1:text-slate-900 prose-h1:mb-6
            prose-h2:text-3xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2
            prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-slate-800 prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-slate-700 prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
            prose-code:text-amber-600 prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-img:rounded-lg prose-img:shadow-lg"
          >
            {children}
          </article>
        </main>

        {/* Sidebar - 38.2% on large screens (Golden Ratio) */}
        {sidebar && (
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              {sidebar}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

ContentLayout.displayName = 'ContentLayout';
