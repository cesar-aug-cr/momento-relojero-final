import { FC, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  className?: string
  children: React.ReactNode
}

export const Card: FC<CardProps> = ({
  hover = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-xl shadow-sm',
        hover && 'hover-lift cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Card.displayName = 'Card'

export const CardHeader: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('mb-lg', className)} {...props}>
    {children}
  </div>
)

CardHeader.displayName = 'CardHeader'

export const CardTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3 className={cn('text-2xl font-bold text-slate-900 dark:text-slate-100', className)} {...props}>
    {children}
  </h3>
)

CardTitle.displayName = 'CardTitle'

export const CardDescription: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn('text-slate-600 dark:text-slate-400 mt-sm', className)} {...props}>
    {children}
  </p>
)

CardDescription.displayName = 'CardDescription'

export const CardContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('', className)} {...props}>
    {children}
  </div>
)

CardContent.displayName = 'CardContent'
