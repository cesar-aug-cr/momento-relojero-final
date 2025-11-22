'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

interface HeroProps {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
}

export function HeroSection({ title, subtitle, description, ctaText, ctaLink }: HeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrolled = window.scrollY;
                heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-dark-bg flex items-center justify-center">
            {/* Background Video/Image Parallax Wrapper */}
            <div
                ref={heroRef}
                className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-dark-bg z-10" />
                {/* Watch mechanism background */}
                <div
                    className="absolute inset-0 bg-[url('/hero-watch-mechanism.jpg')] bg-cover bg-center"
                    aria-hidden="true"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container-wide text-center">
                <div className="animate-fade-up space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto">
                        <Clock className="w-4 h-4 text-accent-gold" />
                        <span className="text-sm font-medium text-accent-gold tracking-wider uppercase">
                            Momento Relojero
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tight leading-[0.9]">
                        <span className="block">{title}</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-white to-accent-gold opacity-90">
                            {subtitle}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                        {description}
                    </p>

                    {/* CTA */}
                    <div className="pt-8">
                        <Link
                            href={ctaLink}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-dark-bg font-bold text-lg rounded-full overflow-hidden transition-all hover:bg-white hover:scale-105"
                        >
                            <span className="relative z-10">{ctaText}</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
                    <div className="w-1 h-3 bg-accent-gold rounded-full" />
                </div>
            </div>
        </section>
    );
}
