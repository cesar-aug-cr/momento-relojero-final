import { FC, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-ring rounded-md disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gold-500 text-slate-900 hover:bg-gold-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600',
    outline: 'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-slate-900 dark:border-gold-400 dark:text-gold-400',
    ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
  }

  const sizes = {
    sm: 'text-sm px-lg py-sm h-[2rem]',
    md: 'text-base px-xl py-md h-[2.618rem]',
    lg: 'text-lg px-2xl py-lg h-[3.236rem]',
  }

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
