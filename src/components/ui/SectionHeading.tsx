import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: 'left' | 'center' | 'right';
}

export function SectionHeading({ title, subtitle, className, align = 'center' }: SectionHeadingProps) {
    return (
        <div className={cn(
            "mb-12 space-y-4",
            align === 'center' && "text-center",
            align === 'right' && "text-right",
            className
        )}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
                    {subtitle}
                </p>
            )}
            <div className={cn(
                "h-1 w-20 bg-accent-gold mt-6",
                align === 'center' && "mx-auto",
                align === 'right' && "ml-auto"
            )} />
        </div>
    );
}
