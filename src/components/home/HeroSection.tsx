"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7; // Slow motion feel
        }
    }, []);

    return (
        <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
            {/* Background Video/Shader */}
            <div className="absolute inset-0 z-0">
                {/* Fallback Image or Abstract Video */}
                <div className="absolute inset-0 bg-background mix-blend-overlay z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
                <div className="absolute inset-0 opacity-30">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                        className="w-full h-full object-cover grayscale contrast-125"
                        alt="Abstract Background"
                    />
                </div>
            </div>

            <Container className="relative z-30">
                <div className="max-w-[90vw]">
                    <div className="overflow-hidden mb-4">
                        <span className="block font-manrope font-bold text-accent tracking-widest text-sm uppercase animate-reveal delay-100">
                            The Issue 021 • Oct 24
                        </span>
                    </div>

                    <h1 className="font-syne font-black text-fluid-h1 leading-[0.85] tracking-tighter text-foreground mix-blend-difference mb-8">
                        <span className="block overflow-hidden"><span className="block animate-reveal delay-100">REALITY</span></span>
                        <span className="block overflow-hidden"><span className="block animate-reveal delay-200">IS NOT</span></span>
                        <span className="block overflow-hidden"><span className="block text-accent animate-reveal delay-300">OPTIONAL.</span></span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-end gap-8 animate-reveal delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
                        <p className="font-manrope text-lg md:text-xl max-w-xl text-muted-foreground leading-relaxed">
                            In an age of synthetic media, we document the raw, unfiltered, and undeniable truth. Journalism re-engineered for the post-truth era.
                        </p>
                        <Link href="/article/future" className="group flex items-center gap-4 hover-trigger">
                            <div className="w-16 h-16 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                <span className="block w-2 h-2 bg-foreground rounded-full group-hover:w-4 group-hover:h-4 transition-all" />
                            </div>
                            <span className="font-syne font-bold uppercase tracking-wider text-sm">Read Cover Story</span>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
