import { FC, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  className?: string
  containerClassName?: string
  children: React.ReactNode
}

export const Section: FC<SectionProps> = ({
  className,
  containerClassName,
  children,
  ...props
}) => {
  return (
    <section
      className={cn('py-3xl', className)}
      {...props}
    >
      <div className={cn('container-golden', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

Section.displayName = 'Section'

interface SectionHeaderProps {
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
  align = 'center',
  className,
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={cn('mb-2xl', alignClasses[align], className)}>
      <h2 className="text-gradient mb-lg">{title}</h2>
      {description && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

SectionHeader.displayName = 'SectionHeader'
