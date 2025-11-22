'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export const Timeline: FC<TimelineProps> = ({ events, className }) => {
  return (
    <div className={cn('relative', className)}>
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {events.map((event, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                'relative flex items-center',
                'md:justify-center'
              )}
            >
              {/* Timeline Dot */}
              <div className={cn(
                'absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-lg',
                'transform md:-translate-x-1/2 z-10'
              )} />

              {/* Content */}
              <div className={cn(
                'ml-16 md:ml-0 md:w-[45%]',
                isEven ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
              )}>
                <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className={cn(
                    'flex items-center gap-3 mb-3',
                    isEven ? 'md:flex-row-reverse md:justify-start' : 'md:justify-start'
                  )}>
                    {event.icon && (
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        {event.icon}
                      </div>
                    )}
                    <span className="text-2xl font-bold text-amber-600">
                      {event.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

Timeline.displayName = 'Timeline';
