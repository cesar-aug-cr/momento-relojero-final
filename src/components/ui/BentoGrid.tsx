import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

interface BentoItemProps {
    title: string;
    description?: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    href?: string;
    image?: string;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoItem = ({
    className,
    title,
    description,
    header,
    icon,
    href,
    image,
}: BentoItemProps) => {
    const Content = () => (
        <div className={cn(
            "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-dark-bg-secondary border border-white/10 justify-between flex flex-col space-y-4 relative overflow-hidden h-full",
            className
        )}>
            {image && (
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-110" />
                </div>
            )}

            <div className="relative z-20 transition duration-200 group-hover/bento:translate-x-2">
                {header}
                <div className="font-sans font-bold text-neutral-200 mb-2 mt-2 text-xl">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-400 text-sm line-clamp-3">
                    {description}
                </div>
            </div>

            {icon && (
                <div className="relative z-20 pointer-events-none flex items-center gap-2 text-accent-gold text-sm font-medium opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 translate-y-4 group-hover/bento:translate-y-0">
                    Explore <ArrowRight className="w-4 h-4" />
                </div>
            )}
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block h-full">
                <Content />
            </Link>
        );
    }

    return <Content />;
};
